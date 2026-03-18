import { ImportedVocabularyRow } from "@/lib/server-types";

function createRows(
  grade: number,
  unit: number,
  week: number,
  words: string[]
): ImportedVocabularyRow[] {
  return words.map((word) => ({
    curriculum: "wonders",
    grade,
    unit,
    week,
    word,
    lemma: word,
    part_of_speech: "word",
    phonetic: "",
    chinese_meaning: "待补充",
    child_friendly_explanation: "来自公开可搜索到的 Wonders 周词表。",
    usage_tip: "先结合例句认识这个词。"
  }));
}

export const publicSourceVocabularyRows: ImportedVocabularyRow[] = [
  ...createRows(4, 1, 2, [
    "approach",
    "estimated",
    "glared",
    "inspecting",
    "moisture",
    "patrol",
    "preferred"
  ]),
  ...createRows(4, 1, 3, [
    "attitudes",
    "contests",
    "explored",
    "fund-raiser",
    "pleaded",
    "vigorous",
    "whirl"
  ]),
  ...createRows(4, 1, 4, [
    "collapsed",
    "debris",
    "hazardous",
    "mission",
    "peered",
    "shuddered",
    "volunteered",
    "wave"
  ]),
  ...createRows(4, 1, 5, [
    "anxious",
    "appreciated",
    "blaring",
    "boisterous",
    "crumpled",
    "doodled",
    "drifting",
    "grumbled"
  ]),
  ...createRows(4, 2, 1, [
    "urged",
    "depended",
    "energetic",
    "exhausted",
    "noticed",
    "process",
    "route",
    "visibility"
  ]),
  ...createRows(4, 2, 2, [
    "assorted",
    "customs",
    "dazzling",
    "encouraged",
    "events",
    "hardships",
    "offended",
    "relatives"
  ]),
  ...createRows(4, 2, 3, [
    "aroma",
    "descendants",
    "feast",
    "sturdy",
    "appreciated",
    "astonished",
    "intended",
    "retrieve"
  ]),
  ...createRows(4, 2, 4, [
    "illustrated",
    "magnificent",
    "ruin",
    "satisfaction",
    "precisely",
    "fortune",
    "eager",
    "chaos"
  ])
];
