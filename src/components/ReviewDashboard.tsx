"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { PracticeSession } from "@/components/PracticeSession";
import { getStudySetHref } from "@/lib/curriculum";
import { getDueWords } from "@/lib/progress";
import { CurriculumWeek, SynonymCard, WordEntry } from "@/lib/types";

type ReviewDashboardProps = {
  week: CurriculumWeek;
  words: WordEntry[];
  cards: SynonymCard[];
  allWeeks: CurriculumWeek[];
};

export function ReviewDashboard({ week, words, cards, allWeeks }: ReviewDashboardProps) {
  const [dueWords, setDueWords] = useState<WordEntry[]>([]);

  useEffect(() => {
    setDueWords(getDueWords(words));
  }, [words]);

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
          <span className="tiny-pill">复习队列</span>
          <h1>把薄弱单词再带回来</h1>
          <p>这里会把新词、到期复习词和需要额外帮助的词重新带回来。</p>
        </div>
        <div className="summary-card">
          <h3>现在要复习</h3>
          <p className="section-intro">
            {dueWords.length > 0
              ? `现在有 ${dueWords.length} 个词可以复习。`
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
          title="复习练习"
          description="把错词尽快重练，下次就会更轻松。"
        />
      ) : (
        <section className="section-card empty-state">
          <h3>做得不错，当前复习队列很轻松。</h3>
          <p className="muted">
            你可以继续看当前单元，或者再做一轮新练习。
          </p>
          <div className="button-row">
            <Link href={getStudySetHref(week)} className="button">
              打开当前单元
            </Link>
            <Link href="/practice/today" className="button-secondary">
              再练一次
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
