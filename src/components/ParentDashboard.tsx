"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { WordEntry } from "@/lib/types";
import {
  clearAllProgress,
  getConfusionPairs,
  getProgressSnapshot,
  getTopWeakWords
} from "@/lib/progress";

type ParentDashboardProps = {
  words: WordEntry[];
};

type ParentMetrics = {
  studied: number;
  mastered: number;
  needsSupport: number;
};

const statusLabels = {
  new: "新词",
  learning: "学习中",
  review: "待复习",
  mastered: "已掌握"
} as const;

export function ParentDashboard({ words }: ParentDashboardProps) {
  const router = useRouter();
  const [metrics, setMetrics] = useState<ParentMetrics>({
    studied: 0,
    mastered: 0,
    needsSupport: 0
  });
  const [weakWords, setWeakWords] = useState(() => getTopWeakWords(words));
  const [confusions, setConfusions] = useState(() => getConfusionPairs(words));

  useEffect(() => {
    const snapshot = getProgressSnapshot(words);
    setMetrics({
      studied: snapshot.filter((entry) => entry.progress.timesSeen > 0).length,
      mastered: snapshot.filter((entry) => entry.progress.status === "mastered").length,
      needsSupport: snapshot.filter((entry) => entry.progress.savedForReview).length
    });
    setWeakWords(getTopWeakWords(words));
    setConfusions(getConfusionPairs(words));
  }, [words]);

  function resetProgress() {
    if (
      typeof window !== "undefined" &&
      !window.confirm("确认清空当前设备上的全部学习进度吗？清空后会从 0 开始。")
    ) {
      return;
    }

    clearAllProgress();
    setMetrics({
      studied: 0,
      mastered: 0,
      needsSupport: 0
    });
    setWeakWords([]);
    setConfusions([]);
    router.refresh();
  }

  return (
    <div className="section-stack">
      <section className="hero hero-grid">
        <div>
          <span className="tiny-pill">家长视图</span>
          <h1>学习进度概览</h1>
          <p>
            这里可以看孩子已经学了多少词、哪些词还需要帮助，以及哪些词经常混淆。
          </p>
        </div>
        <div className="summary-card">
          <div className="metric-grid">
            <div className="metric-card">
              <span className="muted">已学习</span>
              <span className="metric-value">{metrics.studied}</span>
            </div>
            <div className="metric-card">
              <span className="muted">已掌握</span>
              <span className="metric-value">{metrics.mastered}</span>
            </div>
            <div className="metric-card">
              <span className="muted">需要支持</span>
              <span className="metric-value">{metrics.needsSupport}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="parent-grid">
        <div className="section-card">
          <h3>学习进度设置</h3>
          <p className="section-intro">
            如果前面是测试数据，交给孩子正式使用前，可以一键清空，从 0 开始。
          </p>
          <div className="button-row">
            <button className="button-secondary" onClick={resetProgress} type="button">
              清空全部学习进度
            </button>
          </div>
        </div>
        <div className="section-card">
          <h3>需要更多练习的词</h3>
          <div className="card-list">
            {weakWords.map(({ word, progress }) => (
              <div className="contrast-item" key={word.id}>
                <strong>{word.word}</strong>
                <p className="muted">{word.chineseMeaning}</p>
                <p>
                  掌握度 {progress.masteryScore} • 错误 {progress.timesWrong} 次 •
                  状态 {statusLabels[progress.status]}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="section-card">
          <h3>易混词对</h3>
          {confusions.length > 0 ? (
            <div className="card-list">
              {confusions.map((entry) => (
                <div className="contrast-item" key={`${entry.left?.id}-${entry.right?.id}`}>
                  <strong>
                    {entry.left?.word} / {entry.right?.word}
                  </strong>
                  <p className="muted">混淆了 {entry.count} 次</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p>目前还没有易混词记录。做几轮练习后，这里会慢慢显示出来。</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
