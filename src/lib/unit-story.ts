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

function formatBilingualWord(word: WordEntry) {
  return `${word.word}（${getShortMeaning(word)}）`;
}

function buildRoleClause(word: WordEntry, index: number) {
  const bilingual = formatBilingualWord(word);
  const role = inferWordRole(word);

  if (role === "noun") {
    return [
      `操场中央居然摆着一个 ${bilingual}，里面装满了会发光的油条。`,
      `保健室门口又滚出来一个 ${bilingual}，一本正经地要求大家向它敬礼。`,
      `广播室里甚至冒出一个 ${bilingual}，非说自己才是这场比赛的总裁判。`
    ][index % 3];
  }

  if (role === "verb") {
    return [
      `校长本来想当场 ${bilingual} 这条离谱规定，可扩音器先一步唱起了生日歌。`,
      `班长只好试着 ${bilingual} 那份比赛规则，结果规则自己折成纸飞机飞走了。`,
      `体育老师冲过去想 ${bilingual} 那台冰箱，却被一只会鼓掌的鸡郑重拦下。`
    ][index % 3];
  }

  if (role === "adverb") {
    return [
      `可五年级五班还是 ${bilingual} 地鼓起掌来，仿佛这种事每天都会发生。`,
      `大家只好 ${bilingual} 地把作业本顶在头上，以免被会飞的勺子误判成参赛作品。`
    ][index % 2];
  }

  return [
    `那张报名表看起来实在太 ${bilingual}，连最淡定的值日生都往后退了三步。`,
    `全班这才发现，今天的校规格外 ${bilingual}，因为每一条后面都画着一只穿雨鞋的章鱼。`,
    `科学老师盯着那团正在冒泡的豆浆，严肃地说这场面有点 ${bilingual}。`
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
    title: `第 ${week.week} 单元荒诞记忆短文`,
    paragraphs: [
      `周一早上，五年级五班刚准备升旗，校长就宣布学校要举办“会飞午餐盒艺术节”。${clauses
        .slice(0, 4)
        .join("")}大家本来以为这已经够离谱了，没想到这还只是开场。`,
      `还没等同学们把下巴捡起来，科学老师又推来一台会背乘法表的冰箱，说这是本次活动的评委。${clauses
        .slice(4, 7)
        .join("")}此时连走廊上的盆栽都开始左右摇头，像是在替大家叹气。`,
      `到了午饭前，整个操场已经乱成一锅会唱歌的紫菜汤。${clauses
        .slice(7, 10)
        .join("")}最后校长只好宣布活动暂停，可那只戴领结的鸭子已经叼着奖状跑进了广播室，全班笑到根本没人想回座位。`
    ].filter(Boolean)
  };
}
