"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { getStudySetBadge, getStudySetHref } from "@/lib/curriculum";
import { buildUnitStory } from "@/lib/unit-story";
import {
  CurriculumWeek,
  SynonymCard,
  WordEntry,
  WordStatus
} from "@/lib/types";
import {
  getDueWords,
  getTotalPoints,
  getStatusForWord,
  getUnitStudyState,
  recordExposure
} from "@/lib/progress";

type WeekDashboardProps = {
  week: CurriculumWeek;
  words: WordEntry[];
  cards: SynonymCard[];
  allWeeks: CurriculumWeek[];
};

const statusLabels: Record<WordStatus, string> = {
  new: "新词",
  learning: "学习中",
  review: "待复习",
  mastered: "已掌握"
};

type StudyPhase = "story" | "cards" | "practice";

export function WeekDashboard({ week, words, cards, allWeeks }: WeekDashboardProps) {
  const [statuses, setStatuses] = useState<Record<string, WordStatus>>({});
  const [dueCount, setDueCount] = useState(words.length);
  const [phase, setPhase] = useState<StudyPhase>("story");
  const [cardIndex, setCardIndex] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [unitStatusLabel, setUnitStatusLabel] = useState("未完成");
  const story = buildUnitStory(week, words);
  const orderedWeeks = useMemo(() => {
    return [...allWeeks].sort((left, right) => {
      return left.unit - right.unit || left.week - right.week;
    });
  }, [allWeeks]);
  const currentIndex = orderedWeeks.findIndex((entry) => entry.id === week.id);
  const nextWeek = currentIndex >= 0 ? orderedWeeks[currentIndex + 1] : undefined;
  const storyWordMap = useMemo(() => {
    return new Map(words.map((entry) => [entry.id, entry]));
  }, [words]);
  const activeWord = words[cardIndex];
  const activeStatus = activeWord ? statuses[activeWord.id] ?? "new" : "new";
  const isLastCard = cardIndex === words.length - 1;

  useEffect(() => {
    const nextStatuses = Object.fromEntries(
      words.map((word) => [word.id, getStatusForWord(word.id)])
    ) as Record<string, WordStatus>;

    setStatuses(nextStatuses);
    setDueCount(getDueWords(words).length);
    setTotalPoints(getTotalPoints());
    setUnitStatusLabel(
      getUnitStudyState(week.id, orderedWeeks.map((entry) => entry.id)).completed ? "已完成" : "未完成"
    );
  }, [orderedWeeks, week.id, words]);

  useEffect(() => {
    if (phase !== "cards" || !activeWord) {
      return;
    }

    recordExposure(activeWord.id);
    setStatuses((current) => ({
      ...current,
      [activeWord.id]: getStatusForWord(activeWord.id)
    }));
  }, [activeWord, phase]);

  function renderStoryParagraph(paragraph: string) {
    const pieces = paragraph.split(/(\*\*[^*]+\*\*|\[\[[^\]]+\]\])/g).filter(Boolean);

    return pieces.map((piece, index) => {
      const boldMatch = piece.match(/^\*\*(.+)\*\*$/);

      if (boldMatch) {
        return (
          <strong className="story-word" key={`${week.id}-story-bold-${index}`}>
            {boldMatch[1]}
          </strong>
        );
      }

      const tokenMatch = piece.match(/^\[\[(.+?)::(.+?)::(.+?)\]\]$/);

      if (!tokenMatch) {
        return <span key={`${week.id}-story-text-${index}`}>{piece}</span>;
      }

      const [, wordId, wordText, meaning] = tokenMatch;
      const word = storyWordMap.get(wordId);

      return (
        <strong className="story-word" key={`${week.id}-story-token-${wordId}-${index}`}>
          {word?.word ?? wordText} ({meaning})
        </strong>
      );
    });
  }

  function startCards() {
    setCardIndex(0);
    setPhase("cards");
  }

  function goPreviousCard() {
    setCardIndex((current) => Math.max(current - 1, 0));
  }

  function goNextCard() {
    if (isLastCard) {
      setPhase("practice");
      return;
    }

    setCardIndex((current) => Math.min(current + 1, words.length - 1));
  }

  return (
    <div className="section-stack">
      <section className="hero hero-grid">
        <div>
          <span className="tiny-pill">{getStudySetBadge(week)}</span>
          <h1>{week.title}</h1>
          <p>学习路径固定为 3 步：先读短文，再逐张看完 10 张词卡，最后完成 10 题练习。</p>
        </div>
        <div className="summary-card">
          <h3>本单元流程</h3>
          <div className="stat-list">
            <div className="stat-item">
              <strong>1. 先读短文</strong>
              <p className="muted">{phase === "story" ? "当前环节" : "先在整篇英文故事里感受这 10 个词。"}</p>
            </div>
            <div className="stat-item">
              <strong>2. 逐张看卡片</strong>
              <p className="muted">
                {phase === "cards"
                  ? `当前在第 ${cardIndex + 1} 张，共 ${words.length} 张。`
                  : "每次只看 1 个词，读完再进入下一张。"}
              </p>
            </div>
            <div className="stat-item">
              <strong>3. 做 10 词练习</strong>
              <p className="muted">
                {phase === "practice"
                  ? "当前环节。完成 10 题后获得 10 积分，错题自动进入错题集。"
                  : "完成 10 题后获得 10 积分，错题自动进入错题集。"}
              </p>
            </div>
          </div>
          <div className="metric-grid" style={{ marginTop: "1.25rem" }}>
            <div className="metric-card">
              <span className="muted">本单元词数</span>
              <span className="metric-value">{words.length}</span>
            </div>
            <div className="metric-card">
              <span className="muted">待复习</span>
              <span className="metric-value">{dueCount}</span>
            </div>
            <div className="metric-card">
              <span className="muted">总积分</span>
              <span className="metric-value">{totalPoints}</span>
            </div>
            <div className="metric-card">
              <span className="muted">单元状态</span>
              <span className="metric-value">{unitStatusLabel}</span>
            </div>
          </div>
        </div>
      </section>

      {phase === "story" ? (
        <section className="section-card">
          <h3>{story.title}</h3>
          <p className="section-intro">
            先把整篇英文短文读完；本单元新词会以黑体 + 中英双语方式出现。
          </p>
          <div className="card-list">
            {story.paragraphs.map((paragraph, index) => (
              <div className="sentence-item" key={`${week.id}-story-${index}`}>
                <p>{renderStoryParagraph(paragraph)}</p>
              </div>
            ))}
          </div>
          <div className="button-row">
            <button className="button" onClick={startCards} type="button">
              读完了，进入卡片学习
            </button>
            <Link href="/mistakes" className="button-secondary">
              查看错题集
            </Link>
          </div>
        </section>
      ) : null}

      {phase === "cards" && activeWord ? (
        <section className="section-card">
          <div className="practice-progress">
            <span>卡片学习</span>
            <span>
              第 {cardIndex + 1} 张 / 共 {words.length} 张
            </span>
          </div>
          <div className="study-card-shell">
            <div className="word-card study-card">
              <div className="pill-row">
                <span className={`status-pill status-${activeStatus}`}>
                  {statusLabels[activeStatus]}
                </span>
                <span className="tiny-pill">{activeWord.partOfSpeech}</span>
              </div>
              <h3>{activeWord.word}</h3>
              <div className="word-meta">
                <span>{activeWord.phonetic}</span>
                <span>{activeWord.chineseMeaning}</span>
              </div>
              {activeWord.usageTip ? (
                <div className="lookup-context">
                  <strong>使用提醒</strong>
                  <p>{activeWord.usageTip}</p>
                </div>
              ) : null}
              {activeWord.exampleSentences[0] ? (
                <div className="lookup-context">
                  <strong>例句</strong>
                  <p>{activeWord.exampleSentences[0].text}</p>
                  <p className="muted">{activeWord.exampleSentences[0].translation}</p>
                </div>
              ) : null}
            </div>
            <div className="summary-card">
              <h3>这一张先记什么</h3>
              <div className="stat-list">
                <div className="stat-item">
                  <strong>中文意思</strong>
                  <p className="muted">{activeWord.chineseMeaning}</p>
                </div>
                {activeWord.collocations.length > 0 ? (
                  <div className="stat-item">
                    <strong>常见搭配</strong>
                    <p className="muted">{activeWord.collocations.join(" / ")}</p>
                  </div>
                ) : null}
                <div className="stat-item">
                  <strong>记忆提醒</strong>
                  <p className="muted">
                    先记住中文意思，再结合例句理解这个词在句子里怎么用。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="button-row">
            <button
              className="button-secondary"
              disabled={cardIndex === 0}
              onClick={goPreviousCard}
              type="button"
            >
              上一张
            </button>
            <button className="button" onClick={goNextCard} type="button">
              {isLastCard ? "卡片已看完，进入练习" : "下一张"}
            </button>
          </div>
        </section>
      ) : null}

      {phase === "practice" ? (
        <section className="section-card">
          <h3>准备开始本单元练习</h3>
          <p className="section-intro">
            现在进入 10 题练习。完成这一轮后，获得 10 积分；做错的词会自动进入错题集。
          </p>
          <div className="button-row">
            <Link href={`/practice/${week.id}`} className="button">
              开始 10 题练习
            </Link>
            <button className="button-secondary" onClick={() => setPhase("cards")} type="button">
              返回卡片
            </button>
            <Link href="/mistakes" className="button-secondary">
              打开错题集
            </Link>
            {nextWeek ? (
              <Link href={getStudySetHref(nextWeek)} className="button-secondary">
                看看下一单元
              </Link>
            ) : null}
          </div>
        </section>
      ) : null}
    </div>
  );
}
