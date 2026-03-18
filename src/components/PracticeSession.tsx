"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { getStudySetHref } from "@/lib/curriculum";
import { CurriculumWeek, PracticeQuestion, SynonymCard, WordEntry } from "@/lib/types";
import { buildPracticeQuestions } from "@/lib/practice";
import { recordPracticeResult, recordUnitPractice } from "@/lib/progress";

type PracticeSessionProps = {
  week: CurriculumWeek;
  allWeeks: CurriculumWeek[];
  words: WordEntry[];
  cards: SynonymCard[];
  title: string;
  description: string;
  sessionKind?: "unit" | "review";
};

export function PracticeSession({
  week,
  allWeeks,
  words,
  cards,
  title,
  description,
  sessionKind = "unit"
}: PracticeSessionProps) {
  const [questions, setQuestions] = useState<PracticeQuestion[]>([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [resultSaved, setResultSaved] = useState(false);
  const [awardedPoints, setAwardedPoints] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const orderedWeeks = useMemo(() => {
    return [...allWeeks].sort((left, right) => left.week - right.week);
  }, [allWeeks]);
  const currentIndex = orderedWeeks.findIndex((entry) => entry.id === week.id);
  const nextWeek = currentIndex >= 0 ? orderedWeeks[currentIndex + 1] : undefined;

  useEffect(() => {
    setQuestions(buildPracticeQuestions(words, cards, 10));
    setQuestionIndex(0);
    setSelectedChoice(null);
    setShowFeedback(false);
    setCorrectCount(0);
    setResultSaved(false);
    setAwardedPoints(0);
    setTotalPoints(0);
  }, [cards, words]);

  const question = questions[questionIndex];
  const isComplete = questions.length > 0 && questionIndex >= questions.length;
  const accuracy = questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0;

  useEffect(() => {
    if (!isComplete || resultSaved) {
      return;
    }

    if (sessionKind === "unit") {
      const result = recordUnitPractice(week.id, accuracy);
      setAwardedPoints(result.awardedPoints);
      setTotalPoints(result.totalPoints);
    }

    setResultSaved(true);
  }, [accuracy, isComplete, resultSaved, sessionKind, week.id]);

  function chooseAnswer(choice: string) {
    if (!question || showFeedback) {
      return;
    }

    const isCorrect = choice === question.answer;

    setSelectedChoice(choice);
    setShowFeedback(true);

    if (isCorrect) {
      setCorrectCount((current) => current + 1);
    }

    recordPracticeResult(
      question.primaryWordId,
      isCorrect,
      question.confusionWordId
    );
  }

  function goNext() {
    setSelectedChoice(null);
    setShowFeedback(false);
    setQuestionIndex((current) => current + 1);
  }

  if (questions.length === 0) {
    return (
      <section className="practice-card">
        <p>正在准备练习...</p>
      </section>
    );
  }

  if (isComplete) {
    return (
      <section className="practice-card">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="metric-grid">
          <div className="metric-card">
            <span className="muted">得分</span>
            <span className="metric-value">
              {correctCount} / {questions.length}
            </span>
          </div>
          <div className="metric-card">
            <span className="muted">正确率</span>
            <span className="metric-value">{accuracy}%</span>
          </div>
          <div className="metric-card">
            <span className="muted">{sessionKind === "unit" ? "单元状态" : "复习状态"}</span>
            <span className="metric-value">已完成</span>
          </div>
          {sessionKind === "unit" ? (
            <div className="metric-card">
              <span className="muted">本次积分</span>
              <span className="metric-value">+{awardedPoints}</span>
            </div>
          ) : null}
        </div>
        <div className={`feedback-box ${awardedPoints > 0 ? "good" : "retry"}`}>
          <strong>
            {sessionKind === "unit"
              ? awardedPoints > 0
                ? "本单元练习完成，已获得 10 积分。"
                : "本单元练习完成，这 10 积分你已经拿过了。"
              : "这轮错题重练已经完成。"}
          </strong>
          <p className="muted">
            {sessionKind === "unit"
              ? `错题已经自动进入错题集。当前总积分：${totalPoints}。`
              : "错题已经继续留在错题集中，后面还可以再刷一轮。"}
          </p>
        </div>
        <div className="button-row">
          <Link href="/mistakes" className="button">
            打开错题集
          </Link>
          {sessionKind === "unit" && nextWeek ? (
            <Link href={getStudySetHref(nextWeek)} className="button-secondary">
              前往下一单元
            </Link>
          ) : (
            <Link href={`/practice/${week.id}`} className="button-secondary">
              {sessionKind === "unit" ? "再练一次" : "继续复习"}
            </Link>
          )}
        </div>
      </section>
    );
  }

  if (!question) {
    return null;
  }

  const isCorrect = selectedChoice === question.answer;

  return (
    <section className="practice-card">
      <div className="practice-progress">
        <span>{title}</span>
        <span>
          第 {questionIndex + 1} 题 / 共 {questions.length} 题
        </span>
      </div>
      <div className="question-shell">
        <div>
          <p className="muted">{description}</p>
          <div className="question-text">{question.prompt}</div>
          {question.sentence ? <p className="question-text">{question.sentence}</p> : null}
        </div>
        <div className="choice-grid">
          {question.choices.map((choice) => {
            const classNames = ["choice-button"];

            if (showFeedback && choice === question.answer) {
              classNames.push("correct");
            } else if (showFeedback && choice === selectedChoice) {
              classNames.push("wrong");
            }

            return (
              <button
                className={classNames.join(" ")}
                key={choice}
                onClick={() => chooseAnswer(choice)}
                type="button"
              >
                {choice}
              </button>
            );
          })}
        </div>
        {showFeedback ? (
          <div className={`feedback-box ${isCorrect ? "good" : "retry"}`}>
            <strong>{isCorrect ? "答对了，这一题抓得很准。" : "这题先记住正确用法。"} </strong>
            <p className="muted">
              {isCorrect
                ? question.explanation
                : `这题更合适的答案是“${question.answer}”。${question.explanation}`}
            </p>
            <button className="button" onClick={goNext} type="button">
              {questionIndex === questions.length - 1 ? "查看结果" : "下一题"}
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
