"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { PracticeSession } from "@/components/PracticeSession";
import { getStudySetHref } from "@/lib/curriculum";
import { getReviewWords, getWrongAnswerWords } from "@/lib/progress";
import { CurriculumWeek, SynonymCard, WordEntry } from "@/lib/types";

type ReviewDashboardProps = {
  week: CurriculumWeek;
  words: WordEntry[];
  cards: SynonymCard[];
  allWeeks: CurriculumWeek[];
  mode?: "review" | "mistakes";
};

export function ReviewDashboard({
  week,
  words,
  cards,
  allWeeks,
  mode = "review"
}: ReviewDashboardProps) {
  const [dueWords, setDueWords] = useState<WordEntry[]>([]);
  const isMistakesMode = mode === "mistakes";

  useEffect(() => {
    setDueWords(isMistakesMode ? getWrongAnswerWords(words) : getReviewWords(words));
  }, [isMistakesMode, words]);

  const dueWordIds = useMemo(() => new Set(dueWords.map((word) => word.id)), [dueWords]);
  const activeCards = useMemo(() => {
    return cards.filter((card) => {
      return dueWordIds.has(card.wordId) || dueWordIds.has(card.contrastWordId);
    });
  }, [cards, dueWordIds]);

  return (
    <div className="section-stack">
      <section className="hero hero-grid">
        <div>
          <span className="tiny-pill">{isMistakesMode ? "错题集" : "复习队列"}</span>
          <h1>{isMistakesMode ? "把答错过的词单独再刷一轮" : "把学过一遍的词重新带回来"}</h1>
          <p>
            {isMistakesMode
              ? "这里只有真正做错过的词，答对后会从错题集里移出去。"
              : "这里只出现已经学过一遍的词，不会把还没学过的新词直接塞进复习。"}
          </p>
        </div>
        <div className="summary-card">
          <h3>{isMistakesMode ? "现在的错题" : "现在要复习"}</h3>
          <p className="section-intro">
            {dueWords.length > 0
              ? `现在有 ${dueWords.length} 个词${isMistakesMode ? "留在错题集里" : "需要复习"}。`
              : isMistakesMode
                ? "当前错题集是空的。"
                : "现在没有必须马上复习的内容。"}
          </p>
        </div>
      </section>

      {dueWords.length > 0 ? (
        <PracticeSession
          week={week}
          allWeeks={allWeeks}
          words={dueWords}
          cards={activeCards}
          title={isMistakesMode ? "错题重练" : "复习练习"}
          description={isMistakesMode ? "把答错过的词再刷一轮，答对后就能移出错题集。" : "把学过的词尽快重练，下次就会更轻松。"}
          sessionKind="review"
        />
      ) : (
        <section className="section-card empty-state">
          <h3>{isMistakesMode ? "做得不错，当前错题集已经清空。" : "做得不错，当前复习队列很轻松。"}</h3>
          <p className="muted">
            {isMistakesMode ? "你可以回到单元继续学习，或者做一轮普通复习。" : "你可以继续看当前单元，或者再做一轮新练习。"}
          </p>
          <div className="button-row">
            <Link href={getStudySetHref(week)} className="button">
              打开当前单元
            </Link>
            {isMistakesMode ? (
              <Link href="/review" className="button-secondary">
                去普通复习
              </Link>
            ) : (
              <Link href="/practice/today" className="button-secondary">
                再练一次
              </Link>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
