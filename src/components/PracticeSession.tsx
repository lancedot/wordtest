"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { getStudySetHref } from "@/lib/curriculum";
import { CurriculumWeek, PracticeQuestion, SynonymCard, WordEntry } from "@/lib/types";
import { buildPracticeQuestions } from "@/lib/practice";
import { getUnitStudyState, recordPracticeResult, recordUnitPractice } from "@/lib/progress";

type PracticeSessionProps = {
  week: CurriculumWeek;
  allWeeks: CurriculumWeek[];
  words: WordEntry[];
  cards: SynonymCard[];
  title: string;
  description: string;
};

export function PracticeSession({
  week,
  allWeeks,
  words,
  cards,
  title,
  description
}: PracticeSessionProps) {
  const [questions, setQuestions] = useState<PracticeQuestion[]>([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [resultSaved, setResultSaved] = useState(false);
  const orderedWeeks = useMemo(() => {
    return [...allWeeks].sort((left, right) => left.week - right.week);
  }, [allWeeks]);
  const orderedWeekIds = useMemo(() => orderedWeeks.map((entry) => entry.id), [orderedWeeks]);
  const currentIndex = orderedWeeks.findIndex((entry) => entry.id === week.id);
  const previousWeek = currentIndex > 0 ? orderedWeeks[currentIndex - 1] : undefined;
  const nextWeek = currentIndex >= 0 ? orderedWeeks[currentIndex + 1] : undefined;
  const unitState = getUnitStudyState(week.id, orderedWeekIds);

  useEffect(() => {
    setQuestions(buildPracticeQuestions(words, cards, 8));
    setQuestionIndex(0);
    setSelectedChoice(null);
    setShowFeedback(false);
    setCorrectCount(0);
    setResultSaved(false);
  }, [cards, words]);

  const question = questions[questionIndex];
  const isComplete = questions.length > 0 && questionIndex >= questions.length;
  const accuracy = questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0;
  const passed = accuracy >= 80;
  useEffect(() => {
    if (!isComplete || resultSaved) {
      return;
    }

    recordUnitPractice(week.id, accuracy);
    setResultSaved(true);
  }, [accuracy, isComplete, resultSaved, week.id]);

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
            <span className="muted">单元结果</span>
            <span className="metric-value">{passed ? "已过关" : "再练一次"}</span>
          </div>
        </div>
        <div className={`feedback-box ${passed ? "good" : "retry"}`}>
          <strong>
            {passed
              ? "本单元已完成，下一单元已经解锁。"
              : "这一轮已经记住了不少词，再练一轮会更稳。"}
          </strong>
          <p className="muted">
            {passed
              ? "保持 80% 及以上的正确率，就能继续往下学。"
              : "单元练习达到 80% 及以上，就会自动标记完成并解锁下一单元。"}
          </p>
        </div>
        <div className="button-row">
          <Link href="/review" className="button">
            打开复习队列
          </Link>
          {passed && nextWeek ? (
            <Link href={getStudySetHref(nextWeek)} className="button-secondary">
              前往下一单元
            </Link>
          ) : (
            <Link href={`/practice/${week.id}`} className="button-secondary">
              再练一次
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
