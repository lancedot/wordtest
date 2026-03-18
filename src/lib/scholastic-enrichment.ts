const directPhraseMap: Record<string, string> = {
  "changeable": "会变化的",
  "container": "容器",
  "shake": "发抖",
  "mistake": "错误",
  "careless": "粗心的",
  "beginner": "初学者",
  "important in some way": "在某方面很突出的",
  "usually": "通常",
  "dangerous": "危险的",
  "cruel": "残忍的",
  "false": "不忠诚的；靠不住的",
  "confused": "困惑的",
  "plentiful": "丰富的",
  "true": "正确的；真实的",
  "clumsy": "笨重的；不灵活的",
  "unending": "不停的；无尽的",
  "weariness, and vigor is strength": "疲劳；它的反义词是精力",
  "freedom": "自由",
  "announcement": "声明；公告",
  "animal with two feet": "两足动物",
  "a great many": "很多",
  "changeable.": "会变化的",
  "dangerous.": "危险的",
  "say no to it": "否决；反对",
  "oppose it": "反对",
  "give it": "展示；呈现",
  "won’t do it": "拒绝去做",
  "wont do it": "拒绝去做",
  "measure of time": "时间单位",
  "someone who is sick": "病人；体弱的人",
  "a winner": "赢家；冠军",
  "supporter of someone": "支持者；粉丝",
  "the text of a book or paper": "书或文章的文字稿",
  "clearness": "清晰",
  "make it known": "公开说出来",
  "make it clear": "把它说明白",
  "say what will happen next": "预先说出接下来会发生什么",
  "go over it step by step": "一步一步列出来",
  "lacking in strength": "软弱无力的",
  "used to control a horse": "用来控制马的缰绳",
  "unclean": "不干净的",
  "lunch meat": "午餐肉",
  "fragrant liquid": "香水",
  "clownish": "像小丑一样滑稽的",
  "a vacation or time away from school or work": "假期",
  "a tomato sauce": "番茄酱",
  "a pair of lines in a poem that belong together": "诗里配成一组的两行",
  "the use of words that sound like the noises they name": "用词语模仿声音的写法",
  "a poem with fourteen lines": "一种有十四行的诗",
  "enjoyable activity done for fun and relaxation": "为了放松和开心而做的活动",
  "chain of islands": "群岛",
  "the dirt and sand that collect at the mouth of a river": "河口处堆积的泥沙",
  "a branch of a river": "河流的支流",
  "a deep, narrow valley that often has a stream running through it": "常有溪流穿过的狭深山谷",
  "a narrow strip of land that connects two large areas of land": "连接两大片陆地的狭长地带",
  "a fertile place in a desert where there are water, trees, and other plants": "沙漠中有水和植物的地方",
  "an area of land that is surrounded by water on three sides": "三面环水的陆地",
  "a large area of high, flat land": "高而平坦的大片土地",
  "a narrow channel that connects two larger bodies of water": "连接两大片水域的狭窄水道",
  "the arrangement of beats in a line of poetry": "诗行里节拍的排列方式",
  "the words like or as to compare two unlike things": "用 like 或 as 比较两种不同事物",
  "a comparison of two unlike things": "对两种不同事物的比较",
  "a human characteristic is given to something that is not human": "把人的特点写到非人的事物上",
  "the repetition of the first sound of several words in a poem": "诗里几个词开头声音的重复",
  "a big mess": "一团糟",
  "a loud disturbance": "喧闹；骚动",
  "a scamp": "淘气鬼",
  "a druggist": "药剂师；药房老板",
  "a closet": "橱柜；储物柜",
  "a pantry": "食品储藏柜",
  "an apartment": "公寓",
  "an elevator": "电梯",
  "a baby carriage": "婴儿车",
  "a subway": "地铁",
  "a school": "学校",
  "a book with blank pages for holding photos or other collections": "一本用来放照片或收藏品的空白册子",
  "a colorless gas in the air that people, animals, and plants need to breathe": "空气中无色、供生物呼吸的气体"
};

const customExampleMap: Record<string, string> = {
  blunder: "Leaving the tickets at home was a big blunder.",
  generally: "We generally finish homework before dinner.",
  hazardous: "The wet floor was hazardous, so everyone walked slowly.",
  novice: "As a novice, Eli needed help setting up the tent.",
  outstanding: "Her outstanding poster won a spot in the hallway display.",
  quiver: "His hands began to quiver before he stepped onto the stage.",
  rash: "It was rash to ride downhill without checking the brakes.",
  receptacle: "Please drop the empty bottle into the blue receptacle by the door.",
  variable: "Spring weather can be very variable from morning to afternoon.",
  veto: "Dad may veto the plan if it is not safe."
};

const customUsageTipMap: Record<string, string> = {
  blunder: "多指因为粗心或判断失误造成的错误，语气比普通的 mistake 更重一些。",
  generally: "常用来表示“通常情况下”，放在动词前后都很常见。",
  hazardous: "常用来形容地方、物品或情况不安全，可能会带来伤害。",
  novice: "多指刚开始学习某件事的人，强调经验还不够。",
  outstanding: "既可以表示“很出色”，也可以表示“很突出的”。",
  quiver: "常用来形容轻轻发抖，幅度通常不大。",
  rash: "常用来形容没想清楚就行动，带有“不够谨慎”的意思。",
  receptacle: "多指专门用来装东西的容器，比如垃圾桶、收纳箱。",
  variable: "常用来形容会变化、不固定的东西，比如天气或安排。",
  veto: "表示正式反对某个决定，语气比普通的 say no 更强。"
};

const nuancedMeaningMap: Record<string, string> = {
  错误: "因为粗心或判断失误造成的错误",
  初学者: "刚开始学习的人，经验还不多",
  危险的: "有危险，可能会伤到人",
  通常: "大多数时候都是这样",
  "会变化的": "会变化，不固定",
  容器: "专门用来装东西的容器"
};

const tokenMap: Record<string, string> = {
  a: "",
  an: "",
  the: "",
  and: "和",
  or: "或者",
  of: "的",
  for: "给；用于",
  with: "带有",
  from: "来自",
  into: "变成",
  on: "在……上",
  in: "在……里面",
  to: "去；向",
  by: "通过",
  is: "是",
  are: "是",
  someone: "某个人",
  something: "某样东西",
  person: "人",
  people: "人们",
  animal: "动物",
  group: "一群",
  book: "书",
  word: "单词",
  words: "单词",
  sound: "声音",
  foot: "脚",
  feet: "脚",
  number: "数字",
  freedom: "自由",
  dangerous: "危险的",
  changeable: "会变化的",
  container: "容器",
  shake: "发抖",
  mistake: "错误",
  careless: "粗心的",
  beginner: "初学者",
  important: "重要的",
  usually: "通常",
  cruel: "残忍的",
  false: "不诚实的",
  confused: "困惑的",
  plentiful: "丰富的",
  true: "真实的",
  clumsy: "笨重的",
  unending: "不停的",
  base: "底座",
  statue: "雕像",
  clear: "清楚的",
  shrill: "尖锐的",
  soundly: "沉沉地",
  announcement: "声明",
  fraction: "分数",
  line: "线",
  disease: "疾病",
  study: "研究",
  compare: "比较",
  compares: "比较",
  unlike: "不同的",
  things: "事物",
  thing: "事物",
  collect: "收集",
  branch: "支流",
  river: "河流",
  packed: "装在一起的",
  small: "小的",
  fish: "鱼",
  sale: "出售",
  support: "支持",
  tourists: "游客",
  information: "信息",
  pressure: "压力",
  atmosphere: "大气层",
  measures: "测量",
  temperature: "温度",
  speed: "速度",
  vehicle: "车辆",
  law: "法律",
  silverware: "餐具",
  waterpower: "水力",
  electricity: "电",
  chief: "首领",
  family: "家庭",
  sleeping: "睡觉",
  brave: "勇敢的",
  thoughtful: "体贴的",
  boring: "无聊的",
  wise: "明智的",
  silly: "傻乎乎的",
  vacation: "假期",
  baby: "婴儿",
  carriage: "婴儿车",
  closet: "储物柜",
  garbage: "垃圾",
  collects: "聚集",
  mouth: "入海口",
  deep: "深的",
  narrow: "狭窄的",
  valley: "山谷",
  stream: "溪流",
  around: "周围",
  rapidly: "快速地",
  current: "水流",
  water: "水",
  essential: "重要而必要的",
  clue: "线索"
};

export function stripMeaningPrefix(text: string) {
  return text.replace(/^书中释义：/, "").trim();
}

function escapeRegex(text: string) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function translateGloss(gloss: string) {
  const cleaned = gloss.trim().replace(/[.]/g, "");

  if (directPhraseMap[cleaned]) {
    return directPhraseMap[cleaned];
  }

  const normalized = cleaned.toLowerCase();
  if (directPhraseMap[normalized]) {
    return directPhraseMap[normalized];
  }

  const tokens = normalized.split(/[\s,;/()-]+/).filter(Boolean);
  if (tokens.length === 0) {
    return cleaned;
  }

  const translated = tokens
    .map((token) => tokenMap[token] ?? token)
    .filter(Boolean);

  return translated.join(" ").trim() || cleaned;
}

export function translateStoredMeaning(rawMeaning: string) {
  const cleaned = stripMeaningPrefix(rawMeaning)
    .replace(/^"+|"+$/g, "")
    .trim();

  return translateGloss(cleaned);
}

function expandMeaning(text: string) {
  return nuancedMeaningMap[text] ?? text;
}

export function normalizeDefinitionText(word: string, sentence: string) {
  let cleaned = sentence
    .replace(/\s+/g, " ")
    .replace(/^\/\s*/, "")
    .replace(/^\d+\s+LESSON\s+\d+\s+/i, "")
    .replace(/^NAME\s+_+\s+DATE\s+_+\s+/i, "")
    .replace(/^[A-Z][a-z]+(?:\s+[A-Z][a-z-]+)*\s+(?=If|When|A |An |The |Someone|Something|In |Groups|Electricity|[A-Z][a-z-]+\s+is )/, "")
    .replace(/^[A-Za-z-]+\s+means\s+"[^"]+"\s+[A-Za-z-]+\s+means\s+"[^"]+"\s+[A-Za-z-]+\s+means\s+"[^"]+"\s+/i, "")
    .trim();

  const sentenceMatchers = [
    new RegExp(`(If someone is ${escapeRegex(word)}[^.]*\\.)`, "i"),
    new RegExp(`(When someone is ${escapeRegex(word)}[^.]*\\.)`, "i"),
    new RegExp(`(When something is ${escapeRegex(word)}[^.]*\\.)`, "i"),
    new RegExp(`(Something that is ${escapeRegex(word)}[^.]*\\.)`, "i"),
    new RegExp(`(When you are ${escapeRegex(word)}[^.]*\\.)`, "i"),
    new RegExp(`(If you(?:'|’)re [^.]*\\b${escapeRegex(word)}\\b[^.]*\\.)`, "i"),
    new RegExp(`(When you(?:'|’)re [^.]*\\b${escapeRegex(word)}\\b[^.]*\\.)`, "i"),
    new RegExp(`(If you ${escapeRegex(word)}[^.]*\\.)`, "i"),
    new RegExp(`(When you ${escapeRegex(word)}[^.]*\\.)`, "i"),
    new RegExp(`(A [^.]* is called an? ${escapeRegex(word)}\\.)`, "i"),
    new RegExp(`(An? ${escapeRegex(word)}[^.]*\\.)`, "i"),
    new RegExp(`(The study of [^.]* is called ${escapeRegex(word)}\\.)`, "i"),
    new RegExp(`(Someone who is ${escapeRegex(word)}[^.]*\\.)`, "i"),
    new RegExp(`([A-Z][^.]*\\b${escapeRegex(word)}\\b[^.]*\\.)`, "i")
  ];

  for (const matcher of sentenceMatchers) {
    const matched = cleaned.match(matcher);
    if (matched) {
      return matched[1].trim();
    }
  }

  return cleaned;
}

export function translateDefinitionSentence(word: string, sentence: string) {
  const cleaned = normalizeDefinitionText(word, sentence);
  const escapedWord = escapeRegex(word);

  const meansMatch = cleaned.match(new RegExp(`^${escapedWord} means "([^"]+)"\\.?$`, "i"));
  if (meansMatch) {
    return `表示“${expandMeaning(translateGloss(meansMatch[1]))}”。`;
  }

  const nounMatch = cleaned.match(new RegExp(`^A[n]? ${escapedWord} is a[n]? (.+?)\\.?$`, "i"));
  if (nounMatch) {
    return `指${expandMeaning(translateGloss(nounMatch[1]))}。`;
  }

  const ifYouMatch = cleaned.match(new RegExp(`^If you ${escapedWord}, you (.+?)\\.?$`, "i"));
  if (ifYouMatch) {
    return `表示通过这个动作来“${expandMeaning(translateGloss(ifYouMatch[1]))}”。`;
  }

  const whenYouMatch = cleaned.match(new RegExp(`^When you ${escapedWord}(.+?), you (.+?)\\.?$`, "i"));
  if (whenYouMatch) {
    return `表示通过这个动作来“${translateGloss(whenYouMatch[2])}”。`;
  }

  const whenYouAreMatch = cleaned.match(
    new RegExp(`^When you are (.+?), you are ${escapedWord}\\.?$`, "i")
  );
  if (whenYouAreMatch) {
    return `形容人“${expandMeaning(translateGloss(whenYouAreMatch[1]))}”。`;
  }

  const whenYouReWordMatch = cleaned.match(
    new RegExp(`^When you(?:'|’)re ${escapedWord}, you(?:'|’)re (.+?)\\.?$`, "i")
  );
  if (whenYouReWordMatch) {
    return `形容人“${expandMeaning(translateGloss(whenYouReWordMatch[1]))}”。`;
  }

  const ifYouReWordMatch = cleaned.match(
    new RegExp(`^If you(?:'|’)re (.+?), you(?:'|’)re ${escapedWord}\\b.*\\.?$`, "i")
  );
  if (ifYouReWordMatch) {
    return `形容人“${expandMeaning(translateGloss(ifYouReWordMatch[1]))}”。`;
  }

  const ifYouReANounMatch = cleaned.match(
    new RegExp(`^If you(?:'|’)re a[n]? ${escapedWord}, you(?:'|’)re a[n]? (.+?)\\.?$`, "i")
  );
  if (ifYouReANounMatch) {
    return `指${expandMeaning(translateGloss(ifYouReANounMatch[1]))}。`;
  }

  const whenSomethingMatch = cleaned.match(
    new RegExp(`^When something is ${escapedWord}, it is (.+?)\\.?$`, "i")
  );
  if (whenSomethingMatch) {
    return `形容东西“${expandMeaning(translateGloss(whenSomethingMatch[1]))}”。`;
  }

  const somethingThatMatch = cleaned.match(
    new RegExp(`^Something that is ${escapedWord} is (.+?)\\.?$`, "i")
  );
  if (somethingThatMatch) {
    return `形容东西“${expandMeaning(translateGloss(somethingThatMatch[1]))}”。`;
  }

  const whenSomeoneMatch = cleaned.match(
    new RegExp(`^When someone is ${escapedWord}, that person is (.+?)\\.?$`, "i")
  );
  if (whenSomeoneMatch) {
    return `形容人“${expandMeaning(translateGloss(whenSomeoneMatch[1]))}”。`;
  }

  const someoneWhoMatch = cleaned.match(
    new RegExp(`^Someone who is ${escapedWord} is (.+?)\\.?$`, "i")
  );
  if (someoneWhoMatch) {
    return `形容人“${expandMeaning(translateGloss(someoneWhoMatch[1]))}”。`;
  }

  const ifSomethingMatch = cleaned.match(
    new RegExp(`^If something is ${escapedWord}, it'?s (.+?)\\.?$`, "i")
  );
  if (ifSomethingMatch) {
    return `表示“${expandMeaning(translateGloss(ifSomethingMatch[1]))}”。`;
  }

  const calledWordMatch = cleaned.match(
    new RegExp(`^A[n]? (.+?) is called a[n]? ${escapedWord}\\.?$`, "i")
  );
  if (calledWordMatch) {
    return `指${expandMeaning(translateGloss(calledWordMatch[1]))}。`;
  }

  const nounIsMatch = cleaned.match(new RegExp(`^${escapedWord} is (.+?)\\.?$`, "i"));
  if (nounIsMatch) {
    return `表示“${expandMeaning(translateGloss(nounIsMatch[1]))}”。`;
  }

  const pluralIsMatch = cleaned.match(new RegExp(`^${escapedWord} are (.+?)\\.?$`, "i"));
  if (pluralIsMatch) {
    return `指${expandMeaning(translateGloss(pluralIsMatch[1]))}。`;
  }

  const studyMatch = cleaned.match(
    new RegExp(`^The study of (.+?) is called ${escapedWord}\\.?$`, "i")
  );
  if (studyMatch) {
    return `指对“${translateGloss(studyMatch[1])}”的研究。`;
  }

  if (cleaned.startsWith("This lesson introduces the word")) {
    return "这一课先认识这个词，再通过练习慢慢掌握它的用法。";
  }

  return `书中用这句话解释它：${cleaned}`;
}

export function buildBilingualExplanation(word: string, sourceDefinition: string) {
  const english = normalizeDefinitionText(word, sourceDefinition);
  const chinese = translateDefinitionSentence(word, sourceDefinition);
  return `英文释义：${english}\n中文理解：${chinese}`;
}

function normalizeTranslatedMeaning(text: string) {
  return stripMeaningPrefix(text).replace(/[“”"]/g, "").replace(/[。]/g, "").trim();
}

export function buildSmartUsageTip(
  word: string,
  chineseMeaning: string,
  sourceDefinition?: string
) {
  const normalizedWord = word.toLowerCase();
  if (customUsageTipMap[normalizedWord]) {
    return customUsageTipMap[normalizedWord];
  }

  const meaning = normalizeTranslatedMeaning(chineseMeaning);
  const definition = sourceDefinition ? normalizeDefinitionText(word, sourceDefinition) : "";

  if (definition.startsWith("When something is")) {
    return `常用来形容东西或情况${meaning}，读句子时要注意它修饰的对象。`;
  }

  if (definition.startsWith("When someone is")) {
    return `常用来形容人的状态或表现，看看句子里是在写谁。`;
  }

  if (definition.startsWith("If you")) {
    return "多用来描述动作或反应，可以留意是谁在做这个动作。";
  }

  if (/^A[n]? /i.test(definition)) {
    return `多用来指人、事物或概念，记忆时可以和具体场景一起想。`;
  }

  if (/^The study of /i.test(definition)) {
    return "多出现在学科和知识类词汇里，可以把它和相关主题一起记。";
  }

  if (word.endsWith("ly")) {
    return "这类词常用来补充动作是怎样发生的，可以看看它在修饰哪个动作。";
  }

  if (meaning) {
    return `先抓住“${meaning}”这个核心意思，再结合例句看它通常放在什么位置。`;
  }

  return "先看英文释义，再用例句体会它在句子里的意思。";
}

export function sanitizeChildExplanation(word: string, text: string) {
  const cleaned = text.trim();
  const escapedWord = escapeRegex(word);
  const noPrefix = cleaned
    .replace(
      new RegExp(`^在词汇书\\s*Lesson\\s*\\d+\\s*里，\\s*${escapedWord}\\s*的解释是：\\s*`, "i"),
      ""
    )
    .replace(new RegExp(`^${escapedWord}\\s+`, "i"), "");

  if (/^[A-Za-z].*[.!?]$/.test(noPrefix)) {
    return translateDefinitionSentence(word, noPrefix);
  }

  const normalized = noPrefix
    .replace(/^就是/, "表示")
    .replace(/^是/, "指")
    .replace(/^可以表示/, "表示");

  return normalized;
}

export function buildExampleHint(chineseMeaning: string) {
  return `这里可以理解为：${stripMeaningPrefix(chineseMeaning)}。`;
}

function buildGenericNounExample(word: string, meaning: string) {
  if (meaning.includes("错误")) {
    return `Forgetting the map turned out to be a serious ${word}.`;
  }

  if (meaning.includes("初学者")) {
    return `Even a ${word} can improve with steady practice.`;
  }

  if (meaning.includes("容器")) {
    return `Please place the papers in the ${word} on the shelf.`;
  }

  return `The coach used the word ${word} to describe the moment.`;
}

function buildGenericAdjectiveExample(word: string, meaning: string) {
  if (meaning.includes("危险")) {
    return `The broken step looked ${word}, so we stayed back.`;
  }

  if (meaning.includes("会变化")) {
    return `The schedule is ${word}, so check it again after lunch.`;
  }

  return `Everyone agreed that the situation felt ${word}.`;
}

function buildGenericAdverbExample(word: string, meaning: string) {
  if (meaning.includes("通常")) {
    return `We ${word} read together before bed.`;
  }

  return `The team ${word} worked through the problem step by step.`;
}

function buildGenericVerbExample(word: string, meaning: string) {
  if (meaning.includes("发抖")) {
    return `Your hands may ${word} when the room feels cold.`;
  }

  return `Try not to ${word} when everyone is waiting quietly.`;
}

function inferPartOfSpeech(word: string, partOfSpeech: string) {
  if (partOfSpeech && partOfSpeech !== "word") {
    return partOfSpeech;
  }

  if (word.endsWith("ly")) {
    return "adverb";
  }

  if (/(ous|ful|less|able|ible|al|ic|ive|ish|ary|ant|ent)$/.test(word)) {
    return "adjective";
  }

  if (word.endsWith("ed") || word.endsWith("ing")) {
    return "verb";
  }

  if (/(tion|sion|ment|ness|ity|ship|age|ure|ance|ence|or|er)$/.test(word)) {
    return "noun";
  }

  return "word";
}

export function buildFallbackExampleSentence(
  word: string,
  chineseMeaning: string,
  partOfSpeech: string
) {
  const meaning = stripMeaningPrefix(chineseMeaning);
  const inferredPart = inferPartOfSpeech(word, partOfSpeech);

  if (customExampleMap[word.toLowerCase()]) {
    return customExampleMap[word.toLowerCase()];
  }

  if (inferredPart === "adverb") {
    return buildGenericAdverbExample(word, meaning);
  }

  if (inferredPart === "adjective") {
    return buildGenericAdjectiveExample(word, meaning);
  }

  if (inferredPart === "verb") {
    if (word.endsWith("ed")) {
      return `After the noise started, everyone ${word} and looked toward the door.`;
    }

    if (word.endsWith("ing")) {
      return `The class kept ${word} the model to see how it worked.`;
    }

    return buildGenericVerbExample(word, meaning);
  }

  if (inferredPart === "noun") {
    return buildGenericNounExample(word, meaning);
  }

  return `The teacher used ${word} in a sentence about ${meaning}.`;
}

export function buildAutoExampleSentence(word: string, sentence: string, chineseMeaning: string) {
  const cleaned = normalizeDefinitionText(word, sentence);
  const meaning = stripMeaningPrefix(chineseMeaning);
  const normalizedWord = word.toLowerCase();

  if (customExampleMap[normalizedWord]) {
    return customExampleMap[normalizedWord];
  }

  if (new RegExp(`^If you ${escapeRegex(word)}, you`, "i").test(cleaned)) {
    return buildGenericVerbExample(word, meaning);
  }

  if (new RegExp(`^When you ${escapeRegex(word)} something`, "i").test(cleaned)) {
    return `Please ${word} the steps in order for the class.`;
  }

  if (new RegExp(`^When you ${escapeRegex(word)} things`, "i").test(cleaned)) {
    return `We ${word} our notes into one folder.`;
  }

  if (new RegExp(`^A[n]? ${escapeRegex(word)} is`, "i").test(cleaned)) {
    return buildGenericNounExample(word, meaning);
  }

  if (new RegExp(`^When something is ${escapeRegex(word)}`, "i").test(cleaned)) {
    return buildGenericAdjectiveExample(word, meaning);
  }

  if (new RegExp(`^When someone is ${escapeRegex(word)}`, "i").test(cleaned)) {
    return `Nobody wants a ${word} teammate during a game.`;
  }

  if (new RegExp(`^When you are .+?, you are ${escapeRegex(word)}`, "i").test(cleaned)) {
    return buildGenericAdjectiveExample(word, meaning);
  }

  if (word.endsWith("ly")) {
    return buildGenericAdverbExample(word, meaning);
  }

  if (/(ous|ful|less|able|ible|al|ic|ive|ish|ary|ant|ent|id)$/.test(word)) {
    return buildGenericAdjectiveExample(word, meaning);
  }

  return buildGenericNounExample(word, meaning);
}
