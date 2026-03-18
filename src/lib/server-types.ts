import { CurriculumWeek, SynonymCard, WordEntry } from "@/lib/types";

export type ContentCatalog = {
  weeks: CurriculumWeek[];
  words: WordEntry[];
  cards: SynonymCard[];
};

export type ImportedVocabularyRow = {
  curriculum: string;
  grade: number;
  unit: number;
  week: number;
  lesson_title?: string;
  word: string;
  lemma: string;
  part_of_speech: string;
  phonetic: string;
  chinese_meaning: string;
  child_friendly_explanation: string;
  usage_tip: string;
  source_definition?: string;
  example_sentence?: string;
  example_translation?: string;
};
