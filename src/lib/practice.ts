import { PracticeQuestion, SynonymCard, WordEntry } from "@/lib/types";

function hasMeaning(word: WordEntry) {
  return (
    word.chineseMeaning !== "" &&
    word.chineseMeaning !== "待补充" &&
    word.chineseMeaning !== "词义待补充"
  );
}

function escapeRegex(text: string) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function pickDistractorEntries(word: WordEntry, words: WordEntry[], count: number) {
  return [...words]
    .filter((entry) => entry.id !== word.id)
    .sort((left, right) => scoreDistractor(word, right) - scoreDistractor(word, left))
    .slice(0, count);
}

function scoreDistractor(target: WordEntry, candidate: WordEntry) {
  let score = 0;

  if (target.partOfSpeech === candidate.partOfSpeech) {
    score += 5;
  }

  if (target.curriculumWeekId === candidate.curriculumWeekId) {
    score += 3;
  }

  if (target.word[0]?.toLowerCase() === candidate.word[0]?.toLowerCase()) {
    score += 1;
  }

  score -= Math.abs(target.word.length - candidate.word.length) * 0.3;

  return score;
}

function buildMeaningExplanation(word: WordEntry) {
  return `这题里，${word.word} 更接近“${word.chineseMeaning}”。${word.usageTip}`;
}

function buildMeaningQuestion(word: WordEntry, words: WordEntry[]) {
  const distractors = uniqueStrings(
    pickDistractorEntries(word, words, 6)
      .filter((entry) => entry.chineseMeaning !== word.chineseMeaning)
      .map((entry) => entry.chineseMeaning)
  ).slice(0, 3);

  return {
    id: `meaning-${word.id}`,
    type: "meaning_match" as const,
    prompt: `单词 “${word.word}” 在这里最合适的中文意思是哪一个？`,
    choices: ensureChoiceCount(
      shuffle([word.chineseMeaning, ...distractors]),
      words
        .filter((entry) => entry.id !== word.id)
        .map((entry) => entry.chineseMeaning),
      word.chineseMeaning
    ),
    answer: word.chineseMeaning,
    explanation: buildMeaningExplanation(word),
    primaryWordId: word.id
  };
}

function buildWordFromMeaningQuestion(word: WordEntry, words: WordEntry[]) {
  const distractors = pickDistractorEntries(word, words, 3).map((entry) => entry.word);

  return {
    id: `reverse-${word.id}`,
    type: "meaning_match" as const,
    prompt: `根据中文提示，选出最合适的英文单词。`,
    sentence: `提示：${word.chineseMeaning}`,
    choices: ensureChoiceCount(
      shuffle([word.word, ...distractors]),
      words.filter((entry) => entry.id !== word.id).map((entry) => entry.word),
      word.word
    ),
    answer: word.word,
    explanation: `这个中文提示对应 ${word.word}。${word.usageTip}`,
    primaryWordId: word.id
  };
}

function buildSpellingQuestion(word: WordEntry, words: WordEntry[]) {
  const distractorWords = pickDistractorEntries(word, words, 3).map((entry) => entry.word);
  const choices = uniqueStrings([
    word.word,
    mutateWord(word.word, 0),
    mutateWord(word.word, 1),
    mutateWord(word.word, 2),
    ...distractorWords
  ]);

  return {
    id: `spelling-${word.id}`,
    type: "spelling_choice" as const,
    prompt: "下面哪个单词拼写正确？",
    sentence: `它表示：${word.chineseMeaning}`,
    choices: ensureChoiceCount(
      shuffle(choices),
      words.filter((entry) => entry.id !== word.id).map((entry) => entry.word),
      word.word
    ),
    answer: word.word,
    explanation: `正确拼写是 ${word.word}。${word.usageTip}`,
    primaryWordId: word.id
  };
}

function buildFillBlankQuestion(word: WordEntry, words: WordEntry[]) {
  const sentence = word.exampleSentences[0];
  const blankRegex = new RegExp(`\\b${escapeRegex(word.word)}\\b`, "i");
  const blankSentence = blankRegex.test(sentence.text)
    ? sentence.text.replace(blankRegex, "____")
    : `${sentence.text}\n请把表示“${word.chineseMeaning}”的单词填回句子里。`;
  const choices = ensureChoiceCount(
    shuffle([
      word.word,
      ...pickDistractorEntries(word, words, 3).map((entry) => entry.word)
    ]),
    words.filter((entry) => entry.id !== word.id).map((entry) => entry.word),
    word.word
  );

  return {
    id: `blank-${word.id}`,
    type: "fill_blank" as const,
    prompt: "请根据句子意思，选出最合适的单词填空。",
    sentence: blankSentence,
    choices,
    answer: word.word,
    explanation: `整句可以理解为：${sentence.translation} ${word.usageTip}`,
    primaryWordId: word.id
  };
}

function buildSynonymQuestion(card: SynonymCard, words: WordEntry[]) {
  const word = words.find((entry) => entry.id === card.wordId);
  const contrastWord = words.find((entry) => entry.id === card.contrastWordId);

  if (!word || !contrastWord) {
    return null;
  }

  return {
    id: `contrast-${card.id}`,
    type: "choose_better_word" as const,
    prompt: "请根据语境，选出更合适的词。",
    sentence: makeContrastSentence(word.word, contrastWord.word),
    choices: shuffle([word.word, contrastWord.word]),
    answer: word.word,
    explanation: `${card.differenceSummary} ${card.usageTip}`,
    primaryWordId: word.id,
    confusionWordId: contrastWord.id
  };
}

function makeContrastSentence(primaryWord: string, contrastWord: string) {
  if (primaryWord === "probably" && contrastWord === "possibly") {
    return "It will ____ rain soon, so take your umbrella. 请选更合适的词。";
  }

  if (primaryWord === "cheerful" && contrastWord === "happy") {
    return "The host used a ____ voice to welcome everyone. 请选更合适的词。";
  }

  if (primaryWord === "discover" && contrastWord === "notice") {
    return "We ____ a hidden path behind the trees. 请选更合适的词。";
  }

  if (primaryWord === "enormous" && contrastWord === "huge") {
    return "An ____ whale splashed beside the boat. 请选更合适的词。";
  }

  if (primaryWord === "protect" && contrastWord === "guard") {
    return "Goggles help ____ your eyes in science class. 请选更合适的词。";
  }

  return "请为这个句子选择更合适的单词。";
}

export function buildPracticeQuestions(
  words: WordEntry[],
  cards: SynonymCard[],
  limit = 8
): PracticeQuestion[] {
  const questions: PracticeQuestion[] = [];

  words.slice(0, 4).forEach((word) => {
    questions.push(hasMeaning(word) ? buildMeaningQuestion(word, words) : buildSpellingQuestion(word, words));
  });

  words.slice(4, 8).forEach((word) => {
    questions.push(buildFillBlankQuestion(word, words));
  });

  words.slice(8, 10).forEach((word) => {
    questions.push(hasMeaning(word) ? buildWordFromMeaningQuestion(word, words) : buildSpellingQuestion(word, words));
  });

  cards.slice(0, 3).forEach((card) => {
    const question = buildSynonymQuestion(card, words);

    if (question) {
      questions.push(question);
    }
  });

  return shuffle(questions).slice(0, limit);
}

function pickUnique(items: string[], count: number) {
  return uniqueStrings(shuffle(items)).slice(0, count);
}

function uniqueStrings(items: string[]) {
  return items.filter((item, index) => items.indexOf(item) === index);
}

function ensureChoiceCount(choices: string[], fallbackPool: string[], answer: string) {
  const nextChoices = uniqueStrings(choices);
  const remaining = uniqueStrings(fallbackPool).filter(
    (entry) => !nextChoices.includes(entry) && entry !== answer
  );

  while (nextChoices.length < 4 && remaining.length > 0) {
    const fallback = remaining.shift();
    if (fallback) {
      nextChoices.push(fallback);
    }
  }

  if (!nextChoices.includes(answer)) {
    nextChoices[0] = answer;
  }

  return nextChoices.slice(0, 4);
}

function mutateWord(word: string, variant: number) {
  if (word.length < 4) {
    return `${word}${variant}`;
  }

  if (variant === 0) {
    return word.slice(0, -1);
  }

  if (variant === 1) {
    return `${word.slice(0, 1)}${word.slice(2, 3)}${word.slice(1, 2)}${word.slice(3)}`;
  }

  return `${word.slice(0, 2)}${word.slice(3, 4)}${word.slice(2, 3)}${word.slice(4)}`;
}

function shuffle<T>(items: T[]) {
  const next = [...items];

  for (let index = next.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [next[index], next[swapIndex]] = [next[swapIndex], next[index]];
  }

  return next;
}
