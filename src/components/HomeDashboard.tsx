"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { getCurriculumDisplayName, getStudySetBadge, getStudySetHref, getStudySetLabel } from "@/lib/curriculum";
import { CurriculumWeek, UnitStudyStatus, WordEntry } from "@/lib/types";
import {
  getCompletedUnitCount,
  getDueWords,
  getProgressSnapshot,
  getRecommendedWeekId,
  getUnitStudyState
} from "@/lib/progress";

type HomeDashboardProps = {
  week: CurriculumWeek;
  words: WordEntry[];
  weeks: CurriculumWeek[];
};

export function HomeDashboard({ week, words, weeks }: HomeDashboardProps) {
  const [summary, setSummary] = useState({
    dueCount: 0,
    studiedCount: 0,
    masteredCount: 0,
    completedUnitCount: 0
  });
  const [recommendedWeekId, setRecommendedWeekId] = useState(week.id);
  const [unitStatuses, setUnitStatuses] = useState<Record<string, UnitStudyStatus>>({});

  const orderedWeeks = useMemo(() => {
    return [...weeks].sort((left, right) => left.week - right.week);
  }, [weeks]);

  const orderedWeekIds = useMemo(() => orderedWeeks.map((entry) => entry.id), [orderedWeeks]);
  const recommendedWeek =
    orderedWeeks.find((entry) => entry.id === recommendedWeekId) ?? week;
  const recommendedWords = useMemo(() => {
    return words.filter((entry) => entry.curriculumWeekId === recommendedWeek.id);
  }, [recommendedWeek.id, words]);

  useEffect(() => {
    const snapshot = getProgressSnapshot(words);
    const nextStatuses = Object.fromEntries(
      orderedWeekIds.map((weekId) => [weekId, getUnitStudyState(weekId, orderedWeekIds).status])
    ) as Record<string, UnitStudyStatus>;

    setSummary({
      dueCount: getDueWords(recommendedWords).length,
      studiedCount: snapshot.filter((entry) => entry.progress.timesSeen > 0).length,
      masteredCount: snapshot.filter((entry) => entry.progress.status === "mastered").length,
      completedUnitCount: getCompletedUnitCount(orderedWeekIds)
    });
    setUnitStatuses(nextStatuses);
    setRecommendedWeekId(getRecommendedWeekId(orderedWeekIds) ?? week.id);
  }, [orderedWeekIds, recommendedWords, week.id, words]);

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

  return (
    <div className="section-stack">
      <section className="hero hero-grid">
        <div>
          <span className="tiny-pill">{getStudySetBadge(recommendedWeek)}</span>
          <h1>本单元单词学习</h1>
          <p>
            以单元为单位，一次专注 10 个词，先读荒诞短文，再看单词卡，最后做练习。
          </p>
          <div className="button-row">
            <Link href={getStudySetHref(recommendedWeek)} className="button">
              继续当前单元
            </Link>
            <Link href={`/practice/${recommendedWeek.id}`} className="button-secondary">
              开始练习
            </Link>
          </div>
        </div>
        <div className="summary-card">
          <h3>今日概览</h3>
          <div className="metric-grid">
            <div className="metric-card">
              <span className="muted">本单元新词和待复习</span>
              <span className="metric-value">{summary.dueCount}</span>
            </div>
            <div className="metric-card">
              <span className="muted">已学习</span>
              <span className="metric-value">{summary.studiedCount}</span>
            </div>
            <div className="metric-card">
              <span className="muted">已掌握</span>
              <span className="metric-value">{summary.masteredCount}</span>
            </div>
            <div className="metric-card">
              <span className="muted">已完成单元</span>
              <span className="metric-value">{summary.completedUnitCount}</span>
            </div>
          </div>
          <p className="section-intro">
            建议每次完整学完 1 个单元的 10 个词，再做一轮单元练习。
          </p>
        </div>
      </section>

      <section className="dashboard-grid">
        <div className="section-card">
          <h3>本单元学习重点</h3>
          <p className="section-intro">{recommendedWeek.overview}</p>
          <div className="pill-row">
            <span className="pill">荒诞短文预热</span>
            <span className="pill">10 词卡片学习</span>
            <span className="pill">单元练习复习</span>
            <span className="pill">
              {unitStatuses[recommendedWeek.id] === "completed" ? "已完成" : "当前可学"}
            </span>
          </div>
        </div>
        <div className="section-card">
          <h3>快捷入口</h3>
          <div className="card-list">
            <Link href={getStudySetHref(recommendedWeek)} className="word-card">
              <strong>学习当前单元</strong>
              <span className="muted">查看这一单元的 10 个目标词</span>
            </Link>
            <Link href="/review" className="word-card">
              <strong>复习薄弱单词</strong>
              <span className="muted">把错词更快带回来重练</span>
            </Link>
            <Link href="/parent" className="word-card">
              <strong>打开家长视图</strong>
              <span className="muted">查看进度和易混词</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-card">
        <h3>全部单元</h3>
        <p className="section-intro">
          现在固定按五年级词汇书的单元推进，每个单元都是 10 个词。
        </p>
        <div className="card-list">
          {groupedWeeks.map((gradeEntry) => (
            <div className="contrast-item" key={gradeEntry.grade}>
              <strong>{gradeEntry.grade} 年级</strong>
              <div className="card-list" style={{ marginTop: "0.85rem" }}>
                {gradeEntry.units.map((unitEntry) => (
                  <div className="sentence-item" key={`${gradeEntry.grade}-${unitEntry.unit}`}>
                    <strong>第 {unitEntry.unit} 单元</strong>
                    <div className="pill-row" style={{ marginTop: "0.75rem" }}>
                      {unitEntry.weeks.map((entry) => (
                        unitStatuses[entry.id] === "locked" ? (
                          <span
                            key={entry.id}
                            className="pill pill-locked"
                            title={getCurriculumDisplayName(entry.curriculum)}
                          >
                            {getStudySetLabel(entry)} · 未解锁
                          </span>
                        ) : (
                          <Link
                            key={entry.id}
                            href={getStudySetHref(entry)}
                            className={`pill ${
                              unitStatuses[entry.id] === "completed" ? "pill-complete" : ""
                            }`}
                            title={getCurriculumDisplayName(entry.curriculum)}
                          >
                            {getStudySetLabel(entry)}{" "}
                            {unitStatuses[entry.id] === "completed" ? "· 已完成" : "· 可学习"}
                          </Link>
                        )
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
