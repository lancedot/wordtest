import { ImportedVocabularyRow } from "@/lib/server-types";

const requiredHeaders = [
  "curriculum",
  "grade",
  "unit",
  "week",
  "word",
  "lemma",
  "part_of_speech",
  "phonetic",
  "chinese_meaning",
  "child_friendly_explanation",
  "usage_tip"
] as const;

export function parseVocabularyCsv(csvText: string): ImportedVocabularyRow[] {
  const lines = csvText
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length < 2) {
    throw new Error("CSV 内容太少，至少需要表头和一行数据。");
  }

  const headers = parseCsvLine(lines[0]);

  requiredHeaders.forEach((header) => {
    if (!headers.includes(header)) {
      throw new Error(`缺少字段：${header}`);
    }
  });

  return lines.slice(1).map((line, index) => {
    const values = parseCsvLine(line);
    const row = Object.fromEntries(
      headers.map((header, headerIndex) => [header, values[headerIndex] ?? ""])
    ) as Record<string, string>;

    return {
      curriculum: row.curriculum || "wonders",
      grade: Number(row.grade),
      unit: Number(row.unit),
      week: Number(row.week),
      word: row.word,
      lemma: row.lemma || row.word,
      part_of_speech: row.part_of_speech,
      phonetic: row.phonetic,
      chinese_meaning: row.chinese_meaning,
      child_friendly_explanation: row.child_friendly_explanation,
      usage_tip: row.usage_tip
    } satisfies ImportedVocabularyRow;
  }).map((row, index) => {
    if (!row.word) {
      throw new Error(`第 ${index + 2} 行缺少 word。`);
    }

    if ([row.grade, row.unit, row.week].some((value) => Number.isNaN(value))) {
      throw new Error(`第 ${index + 2} 行的 grade/unit/week 需要是数字。`);
    }

    return row;
  });
}

function parseCsvLine(line: string) {
  const cells: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const next = line[index + 1];

    if (char === '"') {
      if (inQuotes && next === '"') {
        current += '"';
        index += 1;
      } else {
        inQuotes = !inQuotes;
      }

      continue;
    }

    if (char === "," && !inQuotes) {
      cells.push(current.trim());
      current = "";
      continue;
    }

    current += char;
  }

  cells.push(current.trim());
  return cells;
}
