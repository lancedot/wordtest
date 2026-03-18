"use client";

import {
  ProgressStore,
  UnitProgress,
  UnitProgressStore,
  UnitStudyStatus,
  UserWordProgress,
  WordEntry,
  WordStatus
} from "@/lib/types";

export const STORAGE_KEY = "vocabulary-progress-v2";
export const UNIT_STORAGE_KEY = "vocabulary-unit-progress-v1";

const reviewStepsInHours = [0, 12, 48, 120, 336];
const unitPassAccuracy = 80;

function createProgress(wordId: string): UserWordProgress {
  return {
    wordId,
    status: "new",
    masteryScore: 0,
    timesSeen: 0,
    timesCorrect: 0,
    timesWrong: 0,
    lastStudiedAt: null,
    nextReviewAt: null,
    confusedWith: [],
    savedForReview: false
  };
}

function createUnitProgress(weekId: string): UnitProgress {
  return {
    weekId,
    attempts: 0,
    bestAccuracy: 0,
    completed: false,
    completedAt: null,
    lastPracticedAt: null
  };
}

export function loadProgress(): ProgressStore {
  if (typeof window === "undefined") {
    return {};
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);

  if (!raw) {
    return {};
  }

  try {
    return JSON.parse(raw) as ProgressStore;
  } catch {
    return {};
  }
}

export function saveProgress(store: ProgressStore) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

export function loadUnitProgress(): UnitProgressStore {
  if (typeof window === "undefined") {
    return {};
  }

  const raw = window.localStorage.getItem(UNIT_STORAGE_KEY);

  if (!raw) {
    return {};
  }

  try {
    return JSON.parse(raw) as UnitProgressStore;
  } catch {
    return {};
  }
}

export function saveUnitProgress(store: UnitProgressStore) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(UNIT_STORAGE_KEY, JSON.stringify(store));
}

export function clearAllProgress() {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(STORAGE_KEY);
  window.localStorage.removeItem(UNIT_STORAGE_KEY);
}

export function ensureProgress(store: ProgressStore, wordId: string) {
  if (!store[wordId]) {
    store[wordId] = createProgress(wordId);
  }

  return store[wordId];
}

function ensureUnitProgress(store: UnitProgressStore, weekId: string) {
  if (!store[weekId]) {
    store[weekId] = createUnitProgress(weekId);
  }

  return store[weekId];
}

export function markSavedForReview(wordId: string) {
  const store = loadProgress();
  const progress = ensureProgress(store, wordId);
  progress.savedForReview = true;
  progress.status = progress.status === "mastered" ? "review" : progress.status;
  saveProgress(store);
}

export function recordExposure(wordId: string) {
  const store = loadProgress();
  const progress = ensureProgress(store, wordId);
  progress.timesSeen += 1;
  progress.lastStudiedAt = new Date().toISOString();

  if (progress.status === "new") {
    progress.status = "learning";
  }

  saveProgress(store);
}

export function recordPracticeResult(
  wordId: string,
  correct: boolean,
  confusionWordId?: string
) {
  const store = loadProgress();
  const progress = ensureProgress(store, wordId);
  const now = new Date();

  progress.timesSeen += 1;
  progress.lastStudiedAt = now.toISOString();

  if (correct) {
    progress.timesCorrect += 1;
    progress.masteryScore = Math.min(progress.masteryScore + 20, 100);
  } else {
    progress.timesWrong += 1;
    progress.masteryScore = Math.max(progress.masteryScore - 15, 0);
    progress.savedForReview = true;
  }

  if (confusionWordId && !progress.confusedWith.includes(confusionWordId)) {
    progress.confusedWith.push(confusionWordId);
  }

  progress.status = computeStatus(progress.masteryScore, progress.timesWrong);

  const stepIndex = correct
    ? Math.min(Math.floor(progress.masteryScore / 25), reviewStepsInHours.length - 1)
    : 0;
  const nextReviewAt = new Date(now.getTime() + reviewStepsInHours[stepIndex] * 3600 * 1000);
  progress.nextReviewAt = nextReviewAt.toISOString();

  saveProgress(store);
}

function computeStatus(masteryScore: number, timesWrong: number): WordStatus {
  if (masteryScore >= 80 && timesWrong <= 1) {
    return "mastered";
  }

  if (masteryScore >= 45) {
    return "review";
  }

  if (masteryScore > 0) {
    return "learning";
  }

  return "new";
}

export function getStatusForWord(wordId: string): WordStatus {
  const store = loadProgress();
  return ensureProgress(store, wordId).status;
}

export function getDueWords(words: WordEntry[]) {
  const now = Date.now();
  const store = loadProgress();

  return words.filter((word) => {
    const progress = ensureProgress(store, word.id);

    if (progress.savedForReview) {
      return true;
    }

    if (!progress.nextReviewAt) {
      return progress.status !== "mastered";
    }

    return new Date(progress.nextReviewAt).getTime() <= now;
  });
}

export function getProgressSnapshot(words: WordEntry[]) {
  const store = loadProgress();

  return words.map((word) => {
    const progress = ensureProgress(store, word.id);

    return {
      word,
      progress
    };
  });
}

export function getTopWeakWords(words: WordEntry[]) {
  return getProgressSnapshot(words)
    .sort((left, right) => {
      return (
        left.progress.masteryScore - right.progress.masteryScore ||
        right.progress.timesWrong - left.progress.timesWrong
      );
    })
    .slice(0, 5);
}

export function getConfusionPairs(words: WordEntry[]) {
  const lookup = new Map(words.map((word) => [word.id, word]));
  const store = loadProgress();
  const pairs = new Map<string, { left: string; right: string; count: number }>();

  Object.values(store).forEach((entry) => {
    entry.confusedWith.forEach((confusionWordId) => {
      if (!lookup.has(entry.wordId) || !lookup.has(confusionWordId)) {
        return;
      }

      const leftRight = [entry.wordId, confusionWordId].sort();
      const key = leftRight.join("::");
      const current = pairs.get(key);

      if (current) {
        current.count += 1;
        return;
      }

      pairs.set(key, {
        left: leftRight[0],
        right: leftRight[1],
        count: 1
      });
    });
  });

  return Array.from(pairs.values())
    .sort((left, right) => right.count - left.count)
    .slice(0, 5)
    .map((entry) => ({
      left: lookup.get(entry.left),
      right: lookup.get(entry.right),
      count: entry.count
    }));
}

export function recordUnitPractice(weekId: string, accuracy: number) {
  const store = loadUnitProgress();
  const progress = ensureUnitProgress(store, weekId);
  const now = new Date().toISOString();

  progress.attempts += 1;
  progress.lastPracticedAt = now;
  progress.bestAccuracy = Math.max(progress.bestAccuracy, accuracy);

  if (accuracy >= unitPassAccuracy) {
    progress.completed = true;
    progress.completedAt = progress.completedAt ?? now;
  }

  saveUnitProgress(store);
}

export function getUnitStudyState(
  weekId: string,
  orderedWeekIds: string[]
): {
  status: UnitStudyStatus;
  attempts: number;
  bestAccuracy: number;
  completed: boolean;
} {
  const store = loadUnitProgress();
  const progress = ensureUnitProgress(store, weekId);

  return {
    status: progress.completed ? "completed" : "ready",
    attempts: progress.attempts,
    bestAccuracy: progress.bestAccuracy,
    completed: progress.completed
  };
}

export function getRecommendedWeekId(orderedWeekIds: string[]) {
  if (orderedWeekIds.length === 0) {
    return undefined;
  }

  const firstReadyWeekId = orderedWeekIds.find((weekId) => {
    return getUnitStudyState(weekId, orderedWeekIds).status === "ready";
  });

  return firstReadyWeekId ?? orderedWeekIds[orderedWeekIds.length - 1];
}

export function getCompletedUnitCount(orderedWeekIds: string[]) {
  return orderedWeekIds.filter((weekId) => {
    return getUnitStudyState(weekId, orderedWeekIds).completed;
  }).length;
}
