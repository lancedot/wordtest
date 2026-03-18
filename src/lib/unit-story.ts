import { CurriculumWeek, WordEntry } from "@/lib/types";
import { stripMeaningPrefix } from "@/lib/scholastic-enrichment";
import { manualUnitStories } from "@/content/manual-unit-stories";

export type UnitStory = {
  title: string;
  paragraphs: string[];
};

type WordRole = "noun" | "verb" | "adjective" | "adverb";

function inferWordRole(word: WordEntry): WordRole {
  const source = word.exampleSentences[0]?.text ?? "";
  const lower = source.toLowerCase();

  if (new RegExp(`^a[n]? ${word.word}\\b`, "i").test(source)) {
    return "noun";
  }

  if (
    new RegExp(`^if you ${word.word}\\b`, "i").test(source) ||
    new RegExp(`^when you ${word.word}\\b`, "i").test(source)
  ) {
    return "verb";
  }

  if (word.word.endsWith("ly") || lower.includes('means "usually')) {
    return "adverb";
  }

  if (
    /^形容/.test(word.chineseMeaning) ||
    /(ous|ful|less|able|ible|al|ic|ive|ish|ary|ant|ent|ed|ing|id|y)$/.test(word.word)
  ) {
    return "adjective";
  }

  if (/(tion|sion|ment|ness|ity|ship|age|ure|ance|ence|or|er|ist|graphy)$/.test(word.word)) {
    return "noun";
  }

  return "noun";
}

function getShortMeaning(word: WordEntry) {
  const meaning = stripMeaningPrefix(word.chineseMeaning)
    .replace(new RegExp(`^${word.word}\\s*(表示|用来表示)`, "i"), "")
    .replace(/^是一种/, "")
    .replace(/[“”"]/g, "")
    .replace(/[。.]$/g, "")
    .trim();

  return meaning || "意思待补充";
}

function storyToken(word: WordEntry) {
  return `[[${word.id}::${word.word}::${getShortMeaning(word)}]]`;
}

function buildRoleClause(word: WordEntry, index: number) {
  const token = storyToken(word);
  const role = inferWordRole(word);

  if (role === "noun") {
    return [
      `Near the stage stood a giant ${token}, and nobody could explain why it had arrived before the teachers.`,
      `By the lunch table, a mysterious ${token} kept acting like the official judge of the whole event.`,
      `Under the flagpole, a wobbling ${token} blinked at everyone as if it had written the schedule itself.`
    ][index % 3];
  }

  if (role === "verb") {
    return [
      `The principal tried to ${token} the ridiculous rule, but the microphone answered before he could finish his sentence.`,
      `Our class had to ${token} the machine before it sprayed glitter into the soup.`,
      `The gym teacher ran forward to ${token} the problem, only to be stopped by a goose wearing a paper badge.`
    ][index % 3];
  }

  if (role === "adverb") {
    return [
      `Even then, our class clapped ${token}, as if this kind of nonsense happened every Tuesday.`,
      `The hamster nodded ${token} and kept pushing the trophy cart through the hallway.`
    ][index % 2];
  }

  return [
    `The poster looked so ${token} that even the calmest student took three careful steps backward.`,
    `By second period, the whole plan felt strangely ${token}, which only made everyone laugh harder.`,
    `The science teacher stared at the bubbling machine and whispered that the situation was becoming dangerously ${token}.`
  ][index % 3];
}

export function buildUnitStory(week: CurriculumWeek, words: WordEntry[]): UnitStory {
  const manualStory = manualUnitStories[week.id];

  if (manualStory) {
    return manualStory;
  }

  const orderedWords = [...words].slice(0, 10);
  const clauses = orderedWords.map((word, index) => buildRoleClause(word, index));

  return {
    title: `Unit ${week.week} Story`,
    paragraphs: [
      `On Monday morning, Class 5B thought it was walking into an ordinary school assembly. Instead, the principal announced a "Ridiculous School Fair" and everything went wrong at once. ${clauses
        .slice(0, 4)
        .join(" ")} Nobody panicked yet, because it still felt like the beginning of a strange joke.`,
      `By the time the science teacher rolled out a humming machine and called it the guest judge, the fair had become much stranger. ${clauses
        .slice(4, 7)
        .join(" ")} Even the plants by the hallway windows seemed to lean away from the noise.`,
      `Before lunch, the entire playground looked like a comedy show that had escaped from the stage. ${clauses
        .slice(7, 10)
        .join(" ")} In the end, the principal called for a pause, but a duck in a bow tie had already stolen the prize ribbon, so the whole class laughed too hard to feel sorry for anything.`
    ].filter(Boolean)
  };
}
