export type ImportedEnrichment = {
  chineseMeaning: string;
  childExplanation?: string;
  usageTip?: string;
};

export const importedWordEnrichment: Record<string, ImportedEnrichment> = {
  common: {
    chineseMeaning: "常见的；共同的",
    childExplanation: "Common 表示常常能看到的，或者大家都有的。",
    usageTip: "看到很多地方都会出现的东西时，可以想到 common。"
  },
  learn: {
    chineseMeaning: "学习",
    childExplanation: "Learn 就是学会新的知识或本领。",
    usageTip: "说到学习新东西时，可以用 learn。"
  },
  object: {
    chineseMeaning: "物体；东西",
    childExplanation: "Object 可以表示一个看得见、摸得着的东西。",
    usageTip: "在科学或分类活动里，object 很常见。"
  },
  recognize: {
    chineseMeaning: "认出；识别",
    childExplanation: "Recognize 表示你看见后能认出来。",
    usageTip: "看到熟悉的人、地方或图案时，可以用 recognize。"
  },
  subjects: {
    chineseMeaning: "学科",
    childExplanation: "Subjects 是学校里学习的不同科目。",
    usageTip: "说数学、阅读、科学这些课时，可以用 subjects。"
  },
  bored: {
    chineseMeaning: "无聊的",
    childExplanation: "Bored 表示觉得没意思，不想继续。",
    usageTip: "想表达“我觉得很无聊”时，可以用 bored。"
  },
  city: {
    chineseMeaning: "城市",
    childExplanation: "City 是有很多街道、商店和房子的地方。",
    usageTip: "和 town、country 比较时，city 通常更大。"
  },
  country: {
    chineseMeaning: "乡下；乡村",
    childExplanation: "Country 在这里表示远离城市的乡村地区。",
    usageTip: "和 city 对比时，country 常指乡下。"
  },
  feast: {
    chineseMeaning: "盛宴；大餐",
    childExplanation: "Feast 是很多人一起享用的大餐。",
    usageTip: "节日或庆祝时的大餐，可以叫 feast。"
  },
  scurried: {
    chineseMeaning: "急匆匆地跑",
    childExplanation: "Scurried 表示快速、小步地跑开。",
    usageTip: "小动物飞快跑动时，常会用 scurried。"
  },
  care: {
    chineseMeaning: "照顾；关心",
    childExplanation: "Care 表示照料别人，或者很在意某件事。",
    usageTip: "说照顾宠物、关心朋友时，可以用 care。"
  },
  companion: {
    chineseMeaning: "伙伴；同伴",
    childExplanation: "Companion 是和你一起走、一起做事的伙伴。",
    usageTip: "旅伴、朋友、动物伙伴都可以叫 companion。"
  },
  groom: {
    chineseMeaning: "梳洗；照料",
    childExplanation: "Groom 表示把毛发或身体整理干净。",
    usageTip: "动物梳理毛发时，常会用 groom。"
  },
  popular: {
    chineseMeaning: "受欢迎的",
    childExplanation: "Popular 表示很多人都喜欢。",
    usageTip: "班里大家都喜欢的活动，可以说 popular。"
  },
  train: {
    chineseMeaning: "训练",
    childExplanation: "Train 表示练习，让自己越来越会。",
    usageTip: "练运动、练技能时，都可以用 train。"
  },
  chore: {
    chineseMeaning: "家务",
    childExplanation: "Chore 是家里要做的小任务，比如扫地或整理。",
    usageTip: "说家务分工时，可以用 chore。"
  },
  collect: {
    chineseMeaning: "收集",
    childExplanation: "Collect 表示把东西一个个收起来。",
    usageTip: "收集卡片、树叶、信息时，都可以用 collect。"
  },
  cooperate: {
    chineseMeaning: "合作",
    childExplanation: "Cooperate 就是一起配合完成事情。",
    usageTip: "和别人一起做任务时，可以用 cooperate。"
  },
  deliver: {
    chineseMeaning: "递送；送达",
    childExplanation: "Deliver 表示把东西送到该去的地方。",
    usageTip: "送信、送包裹、传递消息时，可以用 deliver。"
  },
  relationship: {
    chineseMeaning: "关系",
    childExplanation: "Relationship 表示人与人之间的联系。",
    usageTip: "谈朋友、家人或伙伴之间的关系时，可以用 relationship。"
  },
  agree: {
    chineseMeaning: "同意",
    childExplanation: "Agree 表示你觉得别人说得对，或者愿意一起做。",
    usageTip: "和别人意见一样时，可以说 agree。"
  },
  difficult: {
    chineseMeaning: "困难的",
    childExplanation: "Difficult 表示不容易做。",
    usageTip: "题目、任务、选择都可以是 difficult。"
  },
  exercise: {
    chineseMeaning: "锻炼；练习",
    childExplanation: "Exercise 可以表示身体锻炼，也可以表示练习。",
    usageTip: "运动和练习时，都能看到 exercise。"
  },
  exhausted: {
    chineseMeaning: "筋疲力尽的",
    childExplanation: "Exhausted 表示累得一点力气都没有了。",
    usageTip: "比 tired 更强一些，很累时用 exhausted。"
  },
  physical: {
    chineseMeaning: "身体的",
    childExplanation: "Physical 和身体、动作或真实接触有关。",
    usageTip: "说运动、身体感觉时，可以用 physical。"
  },
  astonishing: {
    chineseMeaning: "惊人的",
    childExplanation: "Astonishing 表示让人非常吃惊。",
    usageTip: "比 amazing 更正式一点，表示很震惊时可用。"
  },
  community: {
    chineseMeaning: "社区",
    childExplanation: "Community 是大家一起生活、互相帮助的地方。",
    usageTip: "说邻里、学校附近环境时，可以用 community。"
  },
  equipment: {
    chineseMeaning: "设备；器材",
    childExplanation: "Equipment 是完成某项活动需要用到的工具。",
    usageTip: "体育器材、科学器材都可以叫 equipment。"
  },
  fortunately: {
    chineseMeaning: "幸运地",
    childExplanation: "Fortunately 表示好在事情往好的方向发展了。",
    usageTip: "遇到好结果时，可以用 fortunately。"
  },
  occupation: {
    chineseMeaning: "职业",
    childExplanation: "Occupation 就是一个人的工作类型。",
    usageTip: "问别人做什么工作时，会用到 occupation。"
  },
  collapsed: {
    chineseMeaning: "倒塌了；塌下来了",
    childExplanation: "Collapsed 表示原来立着的东西一下子塌了。",
    usageTip: "建筑、帐篷、纸塔倒下时，可以用 collapsed。"
  },
  furious: {
    chineseMeaning: "非常生气的",
    childExplanation: "Furious 表示气得很厉害。",
    usageTip: "比 angry 更强，特别生气时用 furious。"
  },
  materials: {
    chineseMeaning: "材料",
    childExplanation: "Materials 是做东西要用到的原料或工具材料。",
    usageTip: "做手工和科学实验时常会看到 materials。"
  },
  refused: {
    chineseMeaning: "拒绝了",
    childExplanation: "Refused 表示说了“不”，不接受。",
    usageTip: "不愿意做某事时，可以用 refused。"
  },
  shatter: {
    chineseMeaning: "打碎；粉碎",
    childExplanation: "Shatter 表示一下子碎成很多片。",
    usageTip: "玻璃、梦想或安静都可能被 shatter。"
  },
  depend: {
    chineseMeaning: "依靠；取决于",
    childExplanation: "Depend 表示要靠别人或靠某种条件。",
    usageTip: "说结果要看情况时，可以用 depend。"
  },
  habitat: {
    chineseMeaning: "栖息地",
    childExplanation: "Habitat 是动物或植物生活的自然地方。",
    usageTip: "说熊住在森林，鱼住在水里时，会用 habitat。"
  },
  hibernate: {
    chineseMeaning: "冬眠",
    childExplanation: "Hibernate 表示动物在冬天长时间睡眠休息。",
    usageTip: "熊等动物冬天睡很久时，可以用 hibernate。"
  },
  tolerate: {
    chineseMeaning: "忍受；容忍",
    childExplanation: "Tolerate 表示能忍住不舒服或接受不喜欢的情况。",
    usageTip: "说受不了噪音时，常会和 tolerate 对比。"
  },
  tranquil: {
    chineseMeaning: "平静的；安静的",
    childExplanation: "Tranquil 表示非常安静、让人放松。",
    usageTip: "比 calm 更柔和，形容安静环境时很好用。"
  },
  admire: {
    chineseMeaning: "钦佩；欣赏",
    childExplanation: "Admire 表示觉得别人很棒，很想夸赞。",
    usageTip: "佩服某人的勇气或作品时，可以用 admire。"
  },
  connections: {
    chineseMeaning: "联系；关联",
    childExplanation: "Connections 表示事物之间有关系、能连起来。",
    usageTip: "阅读理解里找前后联系时，可以用 connections。"
  },
  enjoy: {
    chineseMeaning: "喜欢；享受",
    childExplanation: "Enjoy 表示你做某件事时觉得开心。",
    usageTip: "说喜欢阅读、运动、音乐时，可以用 enjoy。"
  },
  leadership: {
    chineseMeaning: "领导力",
    childExplanation: "Leadership 表示带领大家、帮助团队前进的能力。",
    usageTip: "在团队里主动帮助别人时，可以谈 leadership。"
  },
  rely: {
    chineseMeaning: "依赖；依靠",
    childExplanation: "Rely 表示相信并依靠某人或某事。",
    usageTip: "需要别人帮助时，可以说 rely on。"
  },
  gracious: {
    chineseMeaning: "亲切有礼的",
    childExplanation: "Gracious 表示对别人很有礼貌，也很温和。",
    usageTip: "说人待人很体贴时，可以用 gracious。"
  },
  brainstorm: {
    chineseMeaning: "集思广益；头脑风暴",
    childExplanation: "Brainstorm 表示大家一起想很多主意。",
    usageTip: "做项目、写作文前想点子时，可以用 brainstorm。"
  },
  flattened: {
    chineseMeaning: "压平了；变平了",
    childExplanation: "Flattened 表示原来鼓起来的东西变平了。",
    usageTip: "纸板、草地或轮胎被压平时，可以用 flattened。"
  },
  frantically: {
    chineseMeaning: "慌乱地",
    childExplanation: "Frantically 表示因为着急而手忙脚乱。",
    usageTip: "比 quickly 更乱、更急时，可以用 frantically。"
  },
  muttered: {
    chineseMeaning: "咕哝着说",
    childExplanation: "Muttered 表示声音很小地低声说。",
    usageTip: "说话不清楚、压低声音时，可以用 muttered。"
  },
  official: {
    chineseMeaning: "官方的；正式的",
    childExplanation: "Official 表示正式承认的、真正作数的。",
    usageTip: "正式通知、正式规则时，可以用 official。"
  },
  original: {
    chineseMeaning: "最初的；原创的",
    childExplanation: "Original 表示最开始的，或者不是模仿别人的。",
    usageTip: "说原版故事或原创想法时，可以用 original。"
  },
  stale: {
    chineseMeaning: "不新鲜的",
    childExplanation: "Stale 表示食物放久了，不再新鲜。",
    usageTip: "面包、饼干变得不脆不香时，可以用 stale。"
  },
  approach: { chineseMeaning: "靠近；方法" },
  estimated: { chineseMeaning: "估计的；估计" },
  glared: { chineseMeaning: "怒视" },
  inspecting: { chineseMeaning: "检查中" },
  moisture: { chineseMeaning: "水分；湿气" },
  patrol: { chineseMeaning: "巡逻" },
  preferred: { chineseMeaning: "更喜欢的" },
  attitudes: { chineseMeaning: "态度" },
  contests: { chineseMeaning: "比赛" },
  explored: { chineseMeaning: "探索了" },
  "fund-raiser": { chineseMeaning: "募捐活动" },
  pleaded: { chineseMeaning: "恳求" },
  vigorous: { chineseMeaning: "有活力的" },
  whirl: { chineseMeaning: "旋转" },
  debris: { chineseMeaning: "碎片；残骸" },
  hazardous: { chineseMeaning: "危险的" },
  mission: { chineseMeaning: "任务" },
  peered: { chineseMeaning: "凝视" },
  shuddered: { chineseMeaning: "发抖" },
  volunteered: { chineseMeaning: "自愿去做" },
  wave: { chineseMeaning: "波浪" },
  anxious: { chineseMeaning: "焦急的；担心的" },
  appreciated: { chineseMeaning: "感激；欣赏" },
  blaring: { chineseMeaning: "刺耳响亮地响" },
  boisterous: { chineseMeaning: "喧闹欢乐的" },
  crumpled: { chineseMeaning: "皱巴巴的" },
  doodled: { chineseMeaning: "乱涂乱画了" },
  drifting: { chineseMeaning: "漂动的；飘着的" },
  grumbled: { chineseMeaning: "抱怨着说" },
  urged: { chineseMeaning: "催促" },
  depended: { chineseMeaning: "依靠了；取决于" },
  energetic: { chineseMeaning: "精力充沛的" },
  noticed: { chineseMeaning: "注意到了" },
  process: { chineseMeaning: "过程" },
  route: { chineseMeaning: "路线" },
  visibility: { chineseMeaning: "能见度" },
  assorted: { chineseMeaning: "各种各样的" },
  customs: { chineseMeaning: "风俗；习惯" },
  dazzling: { chineseMeaning: "耀眼的" },
  encouraged: { chineseMeaning: "鼓励了" },
  events: { chineseMeaning: "事件；活动" },
  hardships: { chineseMeaning: "艰难困苦" },
  offended: { chineseMeaning: "被冒犯的" },
  relatives: { chineseMeaning: "亲戚" },
  aroma: { chineseMeaning: "香味" },
  descendants: { chineseMeaning: "后代" },
  sturdy: { chineseMeaning: "结实的" },
  astonished: { chineseMeaning: "吃惊的" },
  intended: { chineseMeaning: "打算的；预定的" },
  retrieve: { chineseMeaning: "取回" },
  illustrated: { chineseMeaning: "有插图的；说明的" },
  magnificent: { chineseMeaning: "壮丽的；极好的" },
  ruin: { chineseMeaning: "废墟；毁坏" },
  satisfaction: { chineseMeaning: "满足" },
  precisely: { chineseMeaning: "准确地" },
  fortune: { chineseMeaning: "运气；财富" },
  eager: { chineseMeaning: "渴望的" },
  chaos: { chineseMeaning: "混乱" }
};
