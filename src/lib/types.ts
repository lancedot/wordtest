export type SentenceToken = {
  text: string;
  normalized: string;
  lookup: boolean;
};

export type ExampleSentence = {
  id: string;
  text: string;
  translation: string;
};

export type WordEntry = {
  id: string;
  curriculumWeekId: string;
  word: string;
  lemma: string;
  partOfSpeech: string;
  phonetic: string;
  chineseMeaning: string;
  childEnglishMeaning: string;
  usageTip: string;
  collocations: string[];
  exampleSentences: ExampleSentence[];
  synonymCardIds: string[];
};

export type SynonymCard = {
  id: string;
  wordId: string;
  contrastWordId: string;
  title: string;
  differenceSummary: string;
  usageTip: string;
  examples: {
    sentence: string;
    translation: string;
  }[];
};

export type CurriculumWeek = {
  id: string;
  curriculum: string;
  grade: number;
  unit: number;
  week: number;
  title: string;
  theme: string;
  overview: string;
  wordIds: string[];
};

export type QuestionType =
  | "meaning_match"
  | "fill_blank"
  | "choose_better_word"
  | "spelling_choice";

export type PracticeQuestion = {
  id: string;
  type: QuestionType;
  prompt: string;
  sentence?: string;
  choices: string[];
  answer: string;
  explanation: string;
  primaryWordId: string;
  confusionWordId?: string;
};

export type WordStatus = "new" | "learning" | "review" | "mastered";

export type UserWordProgress = {
  wordId: string;
  status: WordStatus;
  masteryScore: number;
  timesSeen: number;
  timesCorrect: number;
  timesWrong: number;
  lastStudiedAt: string | null;
  nextReviewAt: string | null;
  confusedWith: string[];
  savedForReview: boolean;
};

export type ProgressStore = Record<string, UserWordProgress>;

export type UnitStudyStatus = "locked" | "ready" | "completed";

export type UnitProgress = {
  weekId: string;
  attempts: number;
  bestAccuracy: number;
  completed: boolean;
  pointsEarned: number;
  completedAt: string | null;
  lastPracticedAt: string | null;
};

export type UnitProgressStore = Record<string, UnitProgress>;
