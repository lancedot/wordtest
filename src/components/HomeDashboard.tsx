"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { getCurriculumDisplayName, getStudySetBadge, getStudySetHref, getStudySetLabel } from "@/lib/curriculum";
import { CurriculumWeek, WordEntry } from "@/lib/types";
import {
  getCompletedUnitCount,
  getDueWords,
  getProgressSnapshot,
  getTotalPoints,
  getUnitStudyState
} from "@/lib/progress";

type HomeDashboardProps = {
  week: CurriculumWeek;
  words: WordEntry[];
  weeks: CurriculumWeek[];
};

export function HomeDashboard({ week, words, weeks }: HomeDashboardProps) {
  const [totalPoints, setTotalPoints] = useState(0);
  const [completedUnits, setCompletedUnits] = useState(0);
  const defaultWeekWords = useMemo(() => {
    return words.filter((entry) => entry.curriculumWeekId === week.id);
  }, [week.id, words]);
  const snapshot = useMemo(() => getProgressSnapshot(defaultWeekWords), [defaultWeekWords]);
  const orderedWeekIds = useMemo(() => {
    return [...weeks]
      .sort((left, right) => left.unit - right.unit || left.week - right.week)
      .map((entry) => entry.id);
  }, [weeks]);
  const summary = useMemo(() => {
    return {
      dueCount: getDueWords(defaultWeekWords).length,
      studiedCount: snapshot.filter((entry) => entry.progress.timesSeen > 0).length,
      masteredCount: snapshot.filter((entry) => entry.progress.status === "mastered").length
    };
  }, [defaultWeekWords, snapshot]);

  useEffect(() => {
    setTotalPoints(getTotalPoints());
    setCompletedUnits(getCompletedUnitCount(orderedWeekIds));
  }, [orderedWeekIds]);

  const groupedWeeks = useMemo(() => {
    const gradeMap = new Map<number, Map<number, CurriculumWeek[]>>();

    weeks.forEach((entry) => {
      const unitMap = gradeMap.get(entry.grade) ?? new Map<number, CurriculumWeek[]>();
      const currentWeeks = unitMap.get(entry.unit) ?? [];
      currentWeeks.push(entry);
      unitMap.set(entry.unit, currentWeeks);
      gradeMap.set(entry.grade, unitMap);
    });

    return Array.from(gradeMap.entries())
      .sort((left, right) => left[0] - right[0])
      .map(([grade, unitMap]) => ({
        grade,
        units: Array.from(unitMap.entries())
          .sort((left, right) => left[0] - right[0])
          .map(([unit, unitWeeks]) => ({
            unit,
            weeks: unitWeeks.sort((left, right) => left.week - right.week)
          }))
      }));
  }, [weeks]);

  const unitSummaries = useMemo(() => {
    return new Map(
      weeks.map((entry) => {
        const unitWords = words.filter((word) => word.curriculumWeekId === entry.id);
        const unitSnapshot = getProgressSnapshot(unitWords);
        const studiedCount = unitSnapshot.filter((item) => item.progress.timesSeen > 0).length;
        const unitState = getUnitStudyState(entry.id, orderedWeekIds);
        let stateLabel = "未开始";
        let stateClassName = "pill";

        if (unitState.completed) {
          stateLabel = "已完成";
          stateClassName = "pill pill-complete";
        } else if (studiedCount > 0) {
          stateLabel = "学习中";
          stateClassName = "pill pill-progress";
        }

        return [
          entry.id,
          {
            stateLabel,
            stateClassName,
            studiedCount,
            dueCount: getDueWords(unitWords).length
          }
        ];
      })
    );
  }, [orderedWeekIds, weeks, words]);

  return (
    <div className="section-stack">
      <section className="hero hero-grid">
        <div>
          <span className="tiny-pill">{getStudySetBadge(week)}</span>
          <h1>先选单元，再开始学习</h1>
          <p>
            默认从第 1 单元开始。每个单元的主循环都是：先读短文，再看卡片，最后做 10 个单词练习。
          </p>
          <div className="button-row">
            <Link href={getStudySetHref(week)} className="button">
              从第 1 单元开始
            </Link>
            <Link href="/mistakes" className="button-secondary">
              错题重练
            </Link>
          </div>
        </div>
        <div className="summary-card">
          <h3>学习总览</h3>
          <div className="metric-grid">
            <div className="metric-card">
              <span className="muted">总积分</span>
              <span className="metric-value">{totalPoints}</span>
            </div>
            <div className="metric-card">
              <span className="muted">已完成单元</span>
              <span className="metric-value">{completedUnits}</span>
            </div>
            <div className="metric-card">
              <span className="muted">新词和待复习</span>
              <span className="metric-value">{summary.dueCount}</span>
            </div>
          </div>
          <p className="section-intro" style={{ marginTop: "1rem" }}>
            第 1 单元当前已学习 {summary.studiedCount} 个词，已掌握 {summary.masteredCount} 个词。
          </p>
        </div>
      </section>

      <section className="section-card">
        <h3>全部单元</h3>
        <p className="section-intro">
          可以从第 1 单元开始，也可以直接点开后面的单元。
        </p>
        <div className="card-list">
          {groupedWeeks.map((gradeEntry) => (
            <div className="contrast-item" key={gradeEntry.grade}>
              <strong>{gradeEntry.grade} 年级</strong>
              <div className="card-list" style={{ marginTop: "0.85rem" }}>
                {gradeEntry.units.map((unitEntry) => (
                  <div className="sentence-item" key={`${gradeEntry.grade}-${unitEntry.unit}`}>
                    <div className="pill-row" style={{ justifyContent: "space-between", alignItems: "center" }}>
                      <strong>第 {unitEntry.unit} 单元</strong>
                      {unitEntry.weeks[0] ? (
                        <span className={unitSummaries.get(unitEntry.weeks[0].id)?.stateClassName ?? "pill"}>
                          {unitSummaries.get(unitEntry.weeks[0].id)?.stateLabel ?? "未开始"}
                        </span>
                      ) : null}
                    </div>
                    {unitEntry.weeks[0] ? (
                      <p className="muted" style={{ marginTop: "0.75rem", marginBottom: 0 }}>
                        已学习 {unitSummaries.get(unitEntry.weeks[0].id)?.studiedCount ?? 0} 个词，
                        待复习 {unitSummaries.get(unitEntry.weeks[0].id)?.dueCount ?? 0} 个词。
                      </p>
                    ) : null}
                    <div className="pill-row" style={{ marginTop: "0.75rem" }}>
                      {unitEntry.weeks.map((entry) => (
                        <Link
                          key={entry.id}
                          href={getStudySetHref(entry)}
                          className="pill"
                          title={getCurriculumDisplayName(entry.curriculum)}
                        >
                          {getStudySetLabel(entry)}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
