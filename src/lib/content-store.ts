import "server-only";

import fs from "node:fs";
import path from "node:path";
import { publicSourceVocabularyRows } from "@/content/public-source-vocabulary";
import { scholasticRemainingOverrides } from "@/content/scholastic-remaining-overrides";
import { scholasticWordOverrides } from "@/content/scholastic-overrides";
import { curriculumWeeks, synonymCards, wordEntries } from "@/content/wonders";
import { importedWordEnrichment } from "@/content/imported-enrichment";
import {
  buildAutoExampleSentence,
  buildBilingualExplanation,
  buildExampleHint,
  buildFallbackExampleSentence,
  buildSmartUsageTip,
  sanitizeChildExplanation,
  stripMeaningPrefix,
  translateDefinitionSentence,
  translateStoredMeaning
} from "@/lib/scholastic-enrichment";
import { CurriculumWeek, SynonymCard, WordEntry } from "@/lib/types";
import { ContentCatalog, ImportedVocabularyRow } from "@/lib/server-types";

const importFilePath = path.join(process.cwd(), "data", "imported-vocabulary.json");
const scholasticFilePath = path.join(process.cwd(), "data", "scholastic-g5-vocabulary.json");

function slugifyWord(word: string) {
  return word
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function createWeekId(curriculum: string, grade: number, unit: number, week: number) {
  return `${curriculum}-g${grade}-u${unit}-w${week}`;
}

function createWordId(row: ImportedVocabularyRow) {
  return `${createWeekId(row.curriculum, row.grade, row.unit, row.week)}-${slugifyWord(
    row.word
  )}`;
}

function readImportedRows(): ImportedVocabularyRow[] {
  return [...readRowsFromFile(scholasticFilePath), ...readRowsFromFile(importFilePath)];
}

function readRowsFromFile(filePath: string): ImportedVocabularyRow[] {
  if (!fs.existsSync(filePath)) {
    return [];
  }

  try {
    const raw = fs.readFileSync(filePath, "utf8");
    const parsed = JSON.parse(raw) as ImportedVocabularyRow[];

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed;
  } catch {
    return [];
  }
}

function convertImportedRow(row: ImportedVocabularyRow): WordEntry {
  const weekId = createWeekId(row.curriculum, row.grade, row.unit, row.week);
  const enrichment = importedWordEnrichment[slugifyWord(row.word)];
  const override =
    scholasticWordOverrides[slugifyWord(row.word)] ??
    scholasticRemainingOverrides[slugifyWord(row.word)];
  const rawMeaning =
    override?.chineseMeaning ??
    (row.chinese_meaning && row.chinese_meaning !== "待补充"
      ? translateStoredMeaning(row.chinese_meaning)
      : enrichment?.chineseMeaning ?? "词义待补充");
  const chineseMeaning = override?.chineseMeaning ?? enrichment?.chineseMeaning ?? rawMeaning;
  const childExplanation = override
    ? `英文释义：${override.englishDefinition}\n中文理解：${override.chineseExplanation}`
    : enrichment?.childExplanation
    ? sanitizeChildExplanation(row.word, enrichment.childExplanation)
    : row.source_definition
      ? buildBilingualExplanation(row.word, row.source_definition)
      : row.child_friendly_explanation &&
          row.child_friendly_explanation !== "来自公开可搜索到的 Wonders 周词表。"
        ? sanitizeChildExplanation(row.word, row.child_friendly_explanation)
        : `常用来表示“${stripMeaningPrefix(chineseMeaning)}”。`;
  const usageTip =
    override?.usageTip ??
    (row.usage_tip &&
    row.usage_tip !== "先结合例句认识这个词。" &&
    !/^这一课属于\s*\w+/i.test(row.usage_tip)
      ? row.usage_tip
      : enrichment?.usageTip ?? buildSmartUsageTip(row.word, chineseMeaning, row.source_definition));
  const exampleSentences = [];

  if (override) {
    exampleSentences.push({
      id: `${createWordId(row)}-override`,
      text: override.exampleSentence,
      translation: override.exampleTranslation
    });
  } else if (row.example_sentence) {
    exampleSentences.push({
      id: `${createWordId(row)}-usage`,
      text: row.example_sentence,
      translation: row.example_translation || buildExampleHint(chineseMeaning)
    });
  }

  if (!override && row.source_definition) {
    exampleSentences.push({
      id: `${createWordId(row)}-auto`,
      text: buildAutoExampleSentence(row.word, row.source_definition, chineseMeaning),
      translation: buildExampleHint(chineseMeaning)
    });
  }

  return {
    id: createWordId(row),
    curriculumWeekId: weekId,
    word: row.word,
    lemma: row.lemma || row.word,
    partOfSpeech: row.part_of_speech || "word",
    phonetic: row.phonetic || "",
    chineseMeaning,
    childEnglishMeaning: childExplanation,
    usageTip,
    collocations: [],
    exampleSentences: uniqueSentences(
      exampleSentences.length > 0
        ? exampleSentences
        : [
            {
              id: `${createWordId(row)}-example`,
              text: buildFallbackExampleSentence(
                row.word,
                chineseMeaning,
                row.part_of_speech || "word"
              ),
              translation: buildExampleHint(chineseMeaning)
            }
          ]
    ),
    synonymCardIds: []
  };
}

function buildWeeksFromImportedRows(rows: ImportedVocabularyRow[]) {
  const grouped = new Map<string, ImportedVocabularyRow[]>();

  rows.forEach((row) => {
    const key = createWeekId(row.curriculum, row.grade, row.unit, row.week);
    const current = grouped.get(key) ?? [];
    current.push(row);
    grouped.set(key, current);
  });

  return Array.from(grouped.entries()).map(([weekId, entries]) => {
    const sample = entries[0];
    const isScholastic = sample.curriculum === "scholastic-g5";

    return {
      id: weekId,
      curriculum: sample.curriculum,
      grade: sample.grade,
      unit: sample.unit,
      week: sample.week,
      title: isScholastic
        ? `第 ${sample.week} 单元：${sample.lesson_title ?? "词汇练习"}`
        : `导入词表：${sample.grade} 年级 第 ${sample.unit} 单元 第 ${sample.week} 周`,
      theme: isScholastic
        ? "这一单元固定学习 10 个词，并配合短文、单词卡和练习来记忆。"
        : "来自导入词表的内容",
      overview: isScholastic
        ? "这一单元的 10 个词都来自五年级词汇书。建议先读荒诞短文，再逐个看词义，最后做练习。"
        : "这些单词由导入功能加入应用，可以继续补充例句、辨析和练习题。",
      wordIds: entries.map((entry) => createWordId(entry))
    } satisfies CurriculumWeek;
  });
}

function uniqueSentences(sentences: WordEntry["exampleSentences"]) {
  return sentences.filter((sentence, index, allSentences) => {
    return allSentences.findIndex((entry) => entry.text === sentence.text) === index;
  });
}

export function getContentCatalog(): ContentCatalog {
  const scholasticRows = readRowsFromFile(scholasticFilePath);
  const manualRows = readRowsFromFile(importFilePath);
  const hasScholasticPrimaryContent = scholasticRows.length > 0;
  const importedRows = hasScholasticPrimaryContent
    ? [...scholasticRows, ...manualRows.filter((row) => row.curriculum === "scholastic-g5")]
    : [...publicSourceVocabularyRows, ...manualRows];
  const importedWords = importedRows.map(convertImportedRow);
  const importedWeeks = buildWeeksFromImportedRows(importedRows);

  const mergedWords = hasScholasticPrimaryContent ? [] : [...wordEntries];
  const wordIds = new Set(mergedWords.map((entry) => entry.id));

  importedWords.forEach((word) => {
    if (!wordIds.has(word.id)) {
      mergedWords.push(word);
      wordIds.add(word.id);
    }
  });

  const weeksById = new Map<string, CurriculumWeek>(
    (hasScholasticPrimaryContent ? [] : curriculumWeeks).map((week) => [week.id, { ...week }])
  );

  importedWeeks.forEach((week) => {
    const existing = weeksById.get(week.id);

    if (existing) {
      const wordIdSet = new Set([...existing.wordIds, ...week.wordIds]);
      weeksById.set(week.id, {
        ...existing,
        wordIds: Array.from(wordIdSet)
      });
      return;
    }

    weeksById.set(week.id, week);
  });

  return {
    weeks: Array.from(weeksById.values()).sort((left, right) => {
      return (
        left.grade - right.grade ||
        left.unit - right.unit ||
        left.week - right.week
      );
    }),
    words: mergedWords,
    cards: hasScholasticPrimaryContent ? [] : synonymCards
  };
}

export function getWeekByRoute(grade: number, unit: number, week: number) {
  return getContentCatalog().weeks.find(
    (entry) =>
      entry.grade === grade && entry.unit === unit && entry.week === week
  );
}

export function getCurrentWeek() {
  const catalog = getContentCatalog();
  return (
    catalog.weeks.find((entry) => entry.curriculum === "scholastic-g5" && entry.week === 1) ??
    catalog.weeks.find((entry) => entry.id === "wonders-g3-u2-w1") ??
    catalog.weeks[0]
  );
}

export function getWordsForWeek(curriculumWeekId: string) {
  return getContentCatalog().words.filter(
    (entry) => entry.curriculumWeekId === curriculumWeekId
  );
}

export function getWordById(wordId: string) {
  return getContentCatalog().words.find((entry) => entry.id === wordId);
}

export function getSynonymCardById(cardId: string) {
  return getContentCatalog().cards.find((entry) => entry.id === cardId);
}

export function getSynonymCardsForWord(wordId: string) {
  return getContentCatalog().cards.filter(
    (entry) => entry.wordId === wordId || entry.contrastWordId === wordId
  );
}

export function getAllWords() {
  return getContentCatalog().words;
}

export function getAllWeeks() {
  return getContentCatalog().weeks;
}

export function getImportedRows() {
  return readImportedRows();
}

export function saveImportedRows(rows: ImportedVocabularyRow[]) {
  fs.mkdirSync(path.dirname(importFilePath), { recursive: true });
  fs.writeFileSync(importFilePath, JSON.stringify(rows, null, 2), "utf8");
}
