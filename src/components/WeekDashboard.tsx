"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { getStudySetBadge, getStudySetHref } from "@/lib/curriculum";
import { buildUnitStory } from "@/lib/unit-story";
import {
  CurriculumWeek,
  SynonymCard,
  UnitStudyStatus,
  WordEntry,
  WordStatus
} from "@/lib/types";
import {
  getDueWords,
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

export function WeekDashboard({ week, words, cards, allWeeks }: WeekDashboardProps) {
  const [statuses, setStatuses] = useState<Record<string, WordStatus>>({});
  const [dueCount, setDueCount] = useState(words.length);
  const story = buildUnitStory(week, words);
  const orderedWeeks = useMemo(() => {
    return [...allWeeks].sort((left, right) => left.week - right.week);
  }, [allWeeks]);
  const orderedWeekIds = useMemo(() => orderedWeeks.map((entry) => entry.id), [orderedWeeks]);
  const [unitStatus, setUnitStatus] = useState<UnitStudyStatus>(() => {
    return getUnitStudyState(week.id, orderedWeekIds).status;
  });
  const currentIndex = orderedWeeks.findIndex((entry) => entry.id === week.id);
  const previousWeek = currentIndex > 0 ? orderedWeeks[currentIndex - 1] : undefined;
  const nextWeek = currentIndex >= 0 ? orderedWeeks[currentIndex + 1] : undefined;

  useEffect(() => {
    const nextStatuses = Object.fromEntries(
      words.map((word) => [word.id, getStatusForWord(word.id)])
    ) as Record<string, WordStatus>;

    setStatuses(nextStatuses);
    setDueCount(getDueWords(words).length);
    setUnitStatus(getUnitStudyState(week.id, orderedWeekIds).status);
  }, [orderedWeekIds, week.id, words]);

  if (unitStatus === "locked") {
    return (
      <div className="section-stack">
        <section className="hero hero-grid">
          <div>
            <span className="tiny-pill">单元未解锁</span>
            <h1>{week.title}</h1>
            <p>先完成前一个单元的练习，再来学这一单元，会更有连续感。</p>
            <div className="button-row">
              {previousWeek ? (
                <Link href={getStudySetHref(previousWeek)} className="button">
                  回到上一单元
                </Link>
              ) : (
                <Link href="/" className="button">
                  回到首页
                </Link>
              )}
            </div>
          </div>
          <div className="summary-card">
            <h3>解锁方式</h3>
            <div className="stat-list">
              <div className="stat-item">
                <strong>先完成上一单元</strong>
                <p className="muted">单元练习达到 80% 及以上，就会自动解锁下一单元。</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="section-stack">
      <section className="hero hero-grid">
        <div>
          <span className="tiny-pill">{getStudySetBadge(week)}</span>
          <div className="pill-row" style={{ marginTop: "0.75rem" }}>
            <span className={`pill ${unitStatus === "completed" ? "pill-complete" : ""}`}>
              {unitStatus === "completed" ? "本单元已完成" : "本单元进行中"}
            </span>
          </div>
          <h1>{week.title}</h1>
          <p>{week.theme}</p>
          <div className="button-row">
            <Link href={`/practice/${week.id}`} className="button">
              开始单元练习
            </Link>
            <Link href="/review" className="button-secondary">
              复习 {dueCount} 个词
            </Link>
            {unitStatus === "completed" && nextWeek ? (
              <Link href={getStudySetHref(nextWeek)} className="button-secondary">
                前往下一单元
              </Link>
            ) : null}
          </div>
        </div>
        <div className="summary-card">
          <h3>单元节奏</h3>
          <div className="stat-list">
            <div className="stat-item">
              <strong>1. 先读短文</strong>
              <p className="muted">先用荒诞故事把 10 个词串起来。</p>
            </div>
            <div className="stat-item">
              <strong>2. 再看词卡</strong>
              <p className="muted">逐个打开单词页，理解中文提示和例句。</p>
            </div>
            <div className="stat-item">
              <strong>3. 最后练习</strong>
              <p className="muted">做完 10 词练习，再把错词带进复习队列。</p>
            </div>
            <div className="stat-item">
              <strong>4. 达标解锁</strong>
              <p className="muted">单元练习达到 80% 及以上，会自动解锁下一单元。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-card">
        <h3>{story.title}</h3>
        <p className="section-intro">
          先读一遍这篇荒诞搞笑短文，让单词先在脑海里“长出画面”。
        </p>
        <div className="card-list">
          {story.paragraphs.map((paragraph, index) => (
            <div className="sentence-item" key={`${week.id}-story-${index}`}>
              <p>{paragraph}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-card">
        <h3>本单元 10 个词</h3>
        <p className="section-intro">
          点开任意单词，可以听发音、看例句、加入复习。
        </p>
        <div className="week-grid">
          {words.map((word) => {
            const status = statuses[word.id] ?? "new";

            return (
              <Link
                href={`/word/${word.id}`}
                className="word-card"
                key={word.id}
                onClick={() => recordExposure(word.id)}
              >
                <div className="pill-row">
                  <span className={`status-pill status-${status}`}>
                    {statusLabels[status]}
                  </span>
                  <span className="tiny-pill">{word.partOfSpeech}</span>
                </div>
                <h3>{word.word}</h3>
                <div className="word-meta">
                  <span>{word.phonetic}</span>
                  <span>{word.chineseMeaning}</span>
                </div>
                <p style={{ whiteSpace: "pre-line" }}>{word.childEnglishMeaning}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="two-column">
        <div className="section-card">
          <h3>易混词对比</h3>
          <div className="card-list">
            {cards.length > 0 ? (
              cards.map((card) => (
                <div className="contrast-item" key={card.id}>
                  <strong>{card.title}</strong>
                  <p className="muted">{card.differenceSummary}</p>
                </div>
              ))
            ) : (
              <div className="contrast-item">
                <strong>这一单元先专注认词</strong>
                <p className="muted">
                  当前词汇书内容以单词理解和基础练习为主，后面我们会继续补充易混词辨析。
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="section-card">
          <h3>推荐学习流程</h3>
          <div className="stat-list">
            <div className="stat-item">
              <strong>1. 先读短文</strong>
              <p className="muted">先把 10 个词放进同一幅搞笑画面里。</p>
            </div>
            <div className="stat-item">
              <strong>2. 再看词卡</strong>
              <p className="muted">逐个理解中文提示、例句和发音。</p>
            </div>
            <div className="stat-item">
              <strong>3. 做单元练习</strong>
              <p className="muted">做完 10 词练习，再把错词留到复习里。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
