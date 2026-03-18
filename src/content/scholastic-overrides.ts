export type ScholasticWordOverride = {
  chineseMeaning: string;
  englishDefinition: string;
  chineseExplanation: string;
  usageTip: string;
  exampleSentence: string;
  exampleTranslation: string;
};

export const scholasticWordOverrides: Record<string, ScholasticWordOverride> = {
  invalid: {
    chineseMeaning: "病人；病弱者",
    englishDefinition: "An invalid is someone who is sick or too weak to care for himself or herself.",
    chineseExplanation: "在这课里，它作名词，指生病或身体虚弱、需要照顾的人。这个用法现在比较旧，阅读时认识意思就可以。",
    usageTip: "别和常见的形容词 invalid“无效的”混淆；这张词卡学的是名词用法。",
    exampleSentence: "The old novel described an invalid resting quietly by the window.",
    exampleTranslation: "那本旧小说里写到一位病弱的人静静地在窗边休息。"
  },
  minute: {
    chineseMeaning: "分钟",
    englishDefinition: "A minute is a measure of time equal to sixty seconds.",
    chineseExplanation: "指时间单位“分钟”，等于六十秒。",
    usageTip: "别和形容词 minute“极小的”混淆；这里学的是表示时间的读音和意思。",
    exampleSentence: "Please wait one more minute before opening the oven.",
    exampleTranslation: "再等一分钟再打开烤箱。"
  },
  object: {
    chineseMeaning: "反对",
    englishDefinition: "If you object to something, you say or show that you are against it.",
    chineseExplanation: "表示对某件事不同意，提出反对意见。",
    usageTip: "这里学的是动词“反对”，不是名词 object“物体”。常和 to 连用。",
    exampleSentence: "Several neighbors objected to the plan to cut down the old tree.",
    exampleTranslation: "几位邻居反对砍掉那棵老树的计划。"
  },
  present: {
    chineseMeaning: "呈现；提交；赠送",
    englishDefinition: "If you present something, you give, show, or formally offer it to someone.",
    chineseExplanation: "表示把某样东西拿出来给别人看、交给别人，或者正式地送上去。",
    usageTip: "这里学的是动词，不是名词 present“礼物”或“现在”。读句子时看它后面接的内容。",
    exampleSentence: "Each group will present its science project to the class.",
    exampleTranslation: "每个小组都要向全班展示自己的科学项目。"
  },
  refuse: {
    chineseMeaning: "拒绝",
    englishDefinition: "If you refuse to do something, you say no and do not do it.",
    chineseExplanation: "表示明确地不答应，也不去做某件事。",
    usageTip: "常接不定式，如 refuse to help、refuse to go；别和名词 refuse“垃圾”混淆。",
    exampleSentence: "Lena refused to copy the answer from someone else.",
    exampleTranslation: "Lena 拒绝抄别人的答案。"
  },
  daunting: {
    chineseMeaning: "令人发怵的；很难应付的",
    englishDefinition: "If a task is daunting, it feels very hard to do.",
    chineseExplanation: "形容任务看起来很难，让人一开始就有些发怵。",
    usageTip: "常用来形容任务、挑战或责任太难，让人不太敢马上开始。",
    exampleSentence: "Climbing the steep trail looked daunting at first.",
    exampleTranslation: "一开始，那条陡峭的小路看起来很难爬。"
  },
  allow: {
    chineseMeaning: "允许",
    englishDefinition: "To allow something is to let it happen.",
    chineseExplanation: "表示同意某件事发生，或者让别人去做。",
    usageTip: "常和 people、students、visitors、time 连用，表示“允许做某事”。",
    exampleSentence: "Our teacher does not allow snacks during science class.",
    exampleTranslation: "老师不允许我们在科学课上吃零食。"
  },
  compliment: {
    chineseMeaning: "赞美；称赞",
    englishDefinition: "A compliment is something nice you say about a person.",
    chineseExplanation: "指夸奖别人的话，让人听了会觉得开心。",
    usageTip: "既可以指一句赞美的话，也可以表示“称赞某人”。",
    exampleSentence: "Nina smiled after hearing a compliment about her drawing.",
    exampleTranslation: "听到别人夸她的画后，Nina 开心地笑了。"
  },
  criticism: {
    chineseMeaning: "批评；指责",
    englishDefinition: "Criticism is talk that points out what is wrong.",
    chineseExplanation: "指指出问题或缺点的话，有时会让人觉得被责备。",
    usageTip: "和 compliment 正好相反，前者是夸奖，后者是批评。",
    exampleSentence: "The harsh criticism made Ben want to try again more carefully.",
    exampleTranslation: "那些严厉的批评让 Ben 更想认真再试一次。"
  },
  fatigue: {
    chineseMeaning: "疲劳；劳累",
    englishDefinition: "Fatigue is a strong feeling of tiredness.",
    chineseExplanation: "指很累、很乏，不只是普通的 tired。",
    usageTip: "常用来描述长时间活动之后的疲劳感。",
    exampleSentence: "After the long game, the runners felt deep fatigue.",
    exampleTranslation: "长时间比赛后，跑步队员们感到非常疲劳。"
  },
  flimsy: {
    chineseMeaning: "薄而不结实的",
    englishDefinition: "Something flimsy is weak and easy to tear or break.",
    chineseExplanation: "形容东西很薄、不牢靠，容易坏。",
    usageTip: "常用来形容纸、袋子、桌子等不够结实的东西。",
    exampleSentence: "The flimsy box broke before we reached the car.",
    exampleTranslation: "我们还没走到车边，那个薄薄的盒子就坏了。"
  },
  ordinary: {
    chineseMeaning: "普通的；平常的",
    englishDefinition: "Ordinary means common and not unusual.",
    chineseExplanation: "表示很平常，没有特别突出的地方。",
    usageTip: "常和 day、person、object 连用，表示“没什么特别的”。",
    exampleSentence: "At first it looked like an ordinary rock on the path.",
    exampleTranslation: "一开始，它看起来只是路上一块普通的石头。"
  },
  substantial: {
    chineseMeaning: "结实的；大量的",
    englishDefinition: "Something substantial is solid, strong, or large in amount.",
    chineseExplanation: "可以表示东西很结实，也可以表示数量很多。",
    usageTip: "读句子时要看它是在说“牢固”还是在说“分量大”。",
    exampleSentence: "They built a substantial shelter before the storm arrived.",
    exampleTranslation: "暴风雨来之前，他们搭了一个很结实的避难棚。"
  },
  unique: {
    chineseMeaning: "独特的；独一无二的",
    englishDefinition: "Unique means unlike anything else.",
    chineseExplanation: "表示很特别，和别的都不一样。",
    usageTip: "比 special 更强一些，常强调“只有这一个”。",
    exampleSentence: "Each snowflake had its own unique pattern.",
    exampleTranslation: "每一片雪花都有自己独特的图案。"
  },
  vigor: {
    chineseMeaning: "活力；精力",
    englishDefinition: "Vigor is strong energy and liveliness.",
    chineseExplanation: "指很足的精力和劲头，看起来特别有活力。",
    usageTip: "常用来形容人说话、运动、工作时很有精神。",
    exampleSentence: "The puppy ran across the yard with great vigor.",
    exampleTranslation: "那只小狗精力十足地跑过院子。"
  },
  considerate: {
    chineseMeaning: "体贴的；考虑周到的",
    englishDefinition: "Someone considerate thinks about other people's needs and feelings.",
    chineseExplanation: "形容人会替别人着想，做事很周到。",
    usageTip: "常用来夸一个人贴心、有礼貌、会顾及别人。",
    exampleSentence: "It was considerate of Maya to save a seat for her friend.",
    exampleTranslation: "Maya 给朋友留了座位，这样做很体贴。"
  },
  frisky: {
    chineseMeaning: "活泼好动的",
    englishDefinition: "Frisky means playful, lively, and full of energy.",
    chineseExplanation: "形容人或动物很活泼，总想动来动去。",
    usageTip: "常用来形容小动物、小孩或气氛很有活力。",
    exampleSentence: "The frisky kitten kept batting at the string.",
    exampleTranslation: "那只活泼的小猫一直扑打着绳子。"
  },
  heedless: {
    chineseMeaning: "不留心的；不在意后果的",
    englishDefinition: "Heedless describes someone who does not pay enough attention.",
    chineseExplanation: "形容人不够留心，没有认真注意可能发生的事。",
    usageTip: "和 careful 相反，常带有“不够谨慎”的意思。",
    exampleSentence: "His heedless dash across the hall nearly knocked over the paint jars.",
    exampleTranslation: "他不留神地冲过走廊，差点撞翻颜料罐。"
  },
  interesting: {
    chineseMeaning: "有趣的",
    englishDefinition: "Something interesting catches your attention and makes you want to know more.",
    chineseExplanation: "形容事情吸引人，让人想继续看或继续听。",
    usageTip: "可以形容故事、问题、实验、想法等让人有兴趣的内容。",
    exampleSentence: "The museum guide shared an interesting story about the ship.",
    exampleTranslation: "博物馆讲解员讲了一个关于那艘船的有趣故事。"
  },
  ridiculous: {
    chineseMeaning: "荒唐可笑的",
    englishDefinition: "Ridiculous means so silly that it makes people laugh or shake their heads.",
    chineseExplanation: "形容事情荒唐得让人觉得好笑，或者根本不合理。",
    usageTip: "语气比 silly 更强，常带有“太夸张了”的感觉。",
    exampleSentence: "Wearing flippers to climb a tree sounded ridiculous.",
    exampleTranslation: "穿着脚蹼去爬树，听起来就很荒唐可笑。"
  },
  tiresome: {
    chineseMeaning: "令人厌烦的；烦人的",
    englishDefinition: "Something tiresome goes on so long that it becomes annoying.",
    chineseExplanation: "形容事情拖得太久，让人觉得烦。",
    usageTip: "常形容重复、漫长或让人失去耐心的事。",
    exampleSentence: "The tiresome buzzing kept everyone awake during the movie.",
    exampleTranslation: "那烦人的嗡嗡声让大家看电影时都睡不着。"
  },
  company: {
    chineseMeaning: "一群人；一队人",
    englishDefinition: "A company can mean a group of people together.",
    chineseExplanation: "在这课里，它表示一群人一起行动，不是“公司”的意思。",
    usageTip: "这是集体名词，要根据上下文判断它是不是在表示“团队”或“一群人”。",
    exampleSentence: "A company of actors waited quietly behind the curtain.",
    exampleTranslation: "一群演员静静地在幕布后面等着。"
  },
  couplet: {
    chineseMeaning: "对句；两行诗",
    englishDefinition: "A couplet is a pair of lines in a poem that belong together.",
    chineseExplanation: "指诗里配成一组的两行，常常押韵。",
    usageTip: "看到诗歌结构时，可以注意它是不是两行一组。",
    exampleSentence: "The poem opened with a short rhyming couplet.",
    exampleTranslation: "这首诗一开头就是一组简短押韵的对句。"
  },
  onomatopoeia: {
    chineseMeaning: "拟声词",
    englishDefinition: "Onomatopoeia is the use of words that sound like the noises they name.",
    chineseExplanation: "指那些读起来就像声音本身的词，比如 buzz、bang。",
    usageTip: "学这个词时，注意它不是一种普通名词，而是在说词语的类型。",
    exampleSentence: "Buzz is a good example of onomatopoeia.",
    exampleTranslation: "buzz 就是一个很好的拟声词例子。"
  },
  sonnet: {
    chineseMeaning: "十四行诗",
    englishDefinition: "A sonnet is a poem with fourteen lines.",
    chineseExplanation: "指一种固定格式的诗，一共有十四行。",
    usageTip: "这个词常在诗歌单元里出现，重点是记住它的结构特点。",
    exampleSentence: "The class read a sonnet and counted all fourteen lines.",
    exampleTranslation: "全班读了一首十四行诗，并数了数它的十四行。"
  },
  doodad: {
    chineseMeaning: "小玩意儿；小物件",
    englishDefinition: "A doodad is a small object, often one whose name you do not know.",
    chineseExplanation: "指一个小玩意儿，有时是你一时叫不上名字的小东西。",
    usageTip: "口语里比较活泼，常带一点随口一说的感觉。",
    exampleSentence: "Grandpa keeps tiny doodads in the top drawer of his desk.",
    exampleTranslation: "爷爷把各种小玩意儿放在书桌最上面的抽屉里。"
  },
  zip: {
    chineseMeaning: "邮政编码",
    englishDefinition: "ZIP refers to the postal code used for mail delivery in the United States.",
    chineseExplanation: "这里指美国寄信寄包裹时使用的邮政编码，常写在地址的最后一行。",
    usageTip: "这课里它是缩略词，最常见的搭配就是 ZIP code。",
    exampleSentence: "Be sure to write the correct ZIP code on the envelope.",
    exampleTranslation: "一定要在信封上写对邮政编码。"
  },
  bikini: {
    chineseMeaning: "比基尼泳衣",
    englishDefinition: "A bikini is a two-piece bathing suit.",
    chineseExplanation: "指由上下两部分组成的泳衣。",
    usageTip: "这是名词，常用来指两件式泳装。",
    exampleSentence: "The store displayed a bright blue bikini near the beach towels.",
    exampleTranslation: "商店把一件亮蓝色的比基尼摆在沙滩毛巾旁边。"
  },
  bologna: {
    chineseMeaning: "博洛尼亚香肠；午餐肉",
    englishDefinition: "Bologna is a kind of lunch meat often sliced for sandwiches.",
    chineseExplanation: "指一种常切片夹在三明治里的熟肉肠，也常被当作午餐肉。",
    usageTip: "这是食物名词，在美式英语里常出现在 sandwich 相关语境中。",
    exampleSentence: "He made a bologna sandwich for the picnic lunch.",
    exampleTranslation: "他为野餐午饭做了一个博洛尼亚香肠三明治。"
  },
  cantaloupe: {
    chineseMeaning: "哈密瓜；香瓜",
    englishDefinition: "A cantaloupe is a sweet orange-fleshed melon.",
    chineseExplanation: "指一种果肉偏橙色、吃起来香甜的瓜。",
    usageTip: "这是水果名词，常和 melon 一起理解。",
    exampleSentence: "We added slices of cantaloupe to the fruit salad.",
    exampleTranslation: "我们把几片哈密瓜放进了水果沙拉里。"
  },
  cologne: {
    chineseMeaning: "古龙水；香水",
    englishDefinition: "Cologne is a lightly scented liquid people wear to smell fresh.",
    chineseExplanation: "指一种带香味的液体，人们会少量喷在身上让气味更清新。",
    usageTip: "通常指较清淡的香水，用量不需要多。",
    exampleSentence: "A faint smell of cologne lingered in the hallway.",
    exampleTranslation: "走廊里还留着淡淡的古龙水味。"
  },
  marathon: {
    chineseMeaning: "马拉松",
    englishDefinition: "A marathon is a very long running race of just over twenty-six miles.",
    chineseExplanation: "指一种很长距离的跑步比赛，全程略多于二十六英里。",
    usageTip: "也可以引申表示“很长时间的活动”，但这里先记体育比赛的本义。",
    exampleSentence: "Her uncle trained for months before running his first marathon.",
    exampleTranslation: "她的叔叔为了第一次跑马拉松训练了好几个月。"
  },
  sardines: {
    chineseMeaning: "沙丁鱼",
    englishDefinition: "Sardines are small fish often packed in cans.",
    chineseExplanation: "指一种体型较小、常装在罐头里的鱼。",
    usageTip: "这个词通常用复数形式出现，因为人们常一下子说一群或一罐这种鱼。",
    exampleSentence: "The recipe called for a tin of sardines and fresh lemon juice.",
    exampleTranslation: "这道菜谱需要一罐沙丁鱼和新鲜柠檬汁。"
  },
  tangerine: {
    chineseMeaning: "橘子；蜜橘",
    englishDefinition: "A tangerine is a small orange-colored citrus fruit.",
    chineseExplanation: "指一种个头较小、橙橘色的柑橘类水果。",
    usageTip: "它属于 citrus fruit 柑橘类水果，外形和小橘子很像。",
    exampleSentence: "She tucked a tangerine into her lunch bag for a snack.",
    exampleTranslation: "她往午餐袋里放了一个橘子当加餐。"
  },
  tarantula: {
    chineseMeaning: "狼蛛；捕鸟蛛",
    englishDefinition: "A tarantula is a large hairy spider.",
    chineseExplanation: "指一种体型较大、身上有细毛的蜘蛛。",
    usageTip: "这是动物名词，读故事或科普时会见到，不用把它和普通小蜘蛛混在一起。",
    exampleSentence: "At the reptile show, a tarantula crawled slowly across the keeper's arm.",
    exampleTranslation: "在爬行动物展上，一只狼蛛慢慢爬过饲养员的手臂。"
  },
  tuxedo: {
    chineseMeaning: "燕尾服；男士礼服",
    englishDefinition: "A tuxedo is a formal black suit worn on special occasions.",
    chineseExplanation: "指男士在正式场合穿的礼服，常见于婚礼、演出或晚宴。",
    usageTip: "这个词多出现在正式穿着的语境里，和 everyday clothes 不一样。",
    exampleSentence: "He rented a tuxedo for the concert at the theater.",
    exampleTranslation: "他为了剧院音乐会租了一套礼服。"
  },
  vaudeville: {
    chineseMeaning: "杂耍表演；歌舞杂艺秀",
    englishDefinition: "Vaudeville was a stage show made up of short acts such as comedy, singing, and dancing.",
    chineseExplanation: "指一种由喜剧、唱歌、跳舞等短节目组成的舞台表演。",
    usageTip: "这是文化类词汇，重点记它是一种由很多短节目拼成的表演形式。",
    exampleSentence: "The museum had posters from old vaudeville shows on the wall.",
    exampleTranslation: "博物馆墙上挂着旧时杂耍表演的海报。"
  },
  champ: {
    chineseMeaning: "冠军；高手",
    englishDefinition: "A champ is a winner or someone who does very well.",
    chineseExplanation: "指冠军，或者很厉害、表现特别出色的人。",
    usageTip: "这个词语气比较口语化，常带有夸奖和鼓励的感觉。",
    exampleSentence: "You cleaned the whole table by yourself like a champ.",
    exampleTranslation: "你一个人就把整张桌子收拾好了，真像个小能手。"
  },
  coed: {
    chineseMeaning: "男女同校的女学生",
    englishDefinition: "A coed is a female student at a school where boys and girls study together.",
    chineseExplanation: "指在男女同校学校里读书的女学生。这个说法现在比较旧，认识意思就可以。",
    usageTip: "现代英语里不太常这样称呼女生，阅读时看懂就好，不必主动常用。",
    exampleSentence: "In the old article, the writer described herself as a coed at the college.",
    exampleTranslation: "在那篇旧文章里，作者把自己写成那所大学的一名女学生。"
  },
  curio: {
    chineseMeaning: "稀奇小玩意；古怪收藏品",
    englishDefinition: "A curio is an unusual object kept because it is interesting.",
    chineseExplanation: "指因为稀奇、有趣而被人收藏的小物件。",
    usageTip: "常见于旅行纪念品、老物件或收藏相关语境。",
    exampleSentence: "The shelf held shells, coins, and other little curios from their travels.",
    exampleTranslation: "架子上放着贝壳、硬币和他们旅行带回来的各种小玩意。"
  },
  fan: {
    chineseMeaning: "支持者；粉丝",
    englishDefinition: "A fan is someone who strongly likes and supports a person, team, or show.",
    chineseExplanation: "指非常喜欢并支持某个人、球队、节目等的人。",
    usageTip: "这里学的是“粉丝”这个意思，不是 electric fan“电风扇”。",
    exampleSentence: "As a huge fan of the team, Marco never missed a home game.",
    exampleTranslation: "作为这支球队的忠实粉丝，Marco 从不错过主场比赛。"
  },
  grad: {
    chineseMeaning: "毕业生",
    englishDefinition: "A grad is someone who has finished school and earned a diploma.",
    chineseExplanation: "指已经完成学业、拿到毕业证的人。",
    usageTip: "这是 graduate 的口语缩略形式，常见于校园语境。",
    exampleSentence: "The proud grad posed for photos in a cap and gown.",
    exampleTranslation: "那位自豪的毕业生穿着学位服拍照。"
  },
  limo: {
    chineseMeaning: "豪华轿车",
    englishDefinition: "A limo is a long, fancy car driven by a chauffeur.",
    chineseExplanation: "指一种又长又讲究的豪华轿车，常配有专门司机。",
    usageTip: "这是 limousine 的缩略说法，多出现在婚礼、典礼或正式活动里。",
    exampleSentence: "A black limo pulled up in front of the hotel entrance.",
    exampleTranslation: "一辆黑色豪华轿车停在了酒店门口。"
  },
  mike: {
    chineseMeaning: "麦克风",
    englishDefinition: "A mike is a microphone, a device that makes sound louder.",
    chineseExplanation: "指麦克风，也就是把声音放大的设备。",
    usageTip: "这是 microphone 的口语缩略形式，和 music、stage、speech 等场景常一起出现。",
    exampleSentence: "Please speak into the mike so the back row can hear you.",
    exampleTranslation: "请对着麦克风说话，这样后排的人也能听见。"
  },
  ref: {
    chineseMeaning: "裁判",
    englishDefinition: "A ref is the referee in a sports game.",
    chineseExplanation: "指体育比赛里的裁判，负责维持规则和判定结果。",
    usageTip: "这是 referee 的口语缩略形式，常见于球赛和运动场景。",
    exampleSentence: "The ref blew the whistle when the ball went out of bounds.",
    exampleTranslation: "球出界时，裁判吹响了哨子。"
  },
  rev: {
    chineseMeaning: "转；转速",
    englishDefinition: "A rev is one turn of an engine or wheel, or the speed of that turning.",
    chineseExplanation: "指发动机或车轮的一次转动，也可以表示转动的速度。",
    usageTip: "这是 revolution 的缩略形式，常出现在汽车、机器和引擎语境里。",
    exampleSentence: "Dad listened carefully to the engine rev before driving away.",
    exampleTranslation: "爸爸开走前，仔细听了听发动机的转动声。"
  },
  taxi: {
    chineseMeaning: "出租车",
    englishDefinition: "A taxi is a car that takes passengers where they want to go for a fare.",
    chineseExplanation: "指出租车，也就是付车费后载客去目的地的汽车。",
    usageTip: "这是 taxicab 的常见缩略说法，日常生活里更常直接说 taxi。",
    exampleSentence: "They hailed a taxi outside the station when it started to rain.",
    exampleTranslation: "下雨时，他们在车站外拦了一辆出租车。"
  },
  canola: {
    chineseMeaning: "菜籽油",
    englishDefinition: "Canola is a kind of cooking oil made from a type of rapeseed plant.",
    chineseExplanation: "指一种常用来做饭的植物油，由油菜籽一类植物制成。",
    usageTip: "这是食物和烹饪类词汇，常出现在 recipe、kitchen、cooking oil 这些语境里。",
    exampleSentence: "The recipe asks for two spoonfuls of canola oil.",
    exampleTranslation: "这份菜谱需要两勺菜籽油。"
  },
  laser: {
    chineseMeaning: "激光；激光器",
    englishDefinition: "A laser produces a very strong, narrow beam of light.",
    chineseExplanation: "指能发出很集中、很强的光束的装置，也可以指这种激光本身。",
    usageTip: "这是科学和科技里常见的词，重点记住它发出的光很集中。",
    exampleSentence: "The scientist used a laser to point at the tiny mark on the slide.",
    exampleTranslation: "科学家用激光指向玻片上的那个小标记。"
  },
  modem: {
    chineseMeaning: "调制解调器",
    englishDefinition: "A modem is a device that sends and receives communication signals for computers.",
    chineseExplanation: "指帮助电脑传送和接收网络或通信信号的设备。",
    usageTip: "这是科技设备名词，家里的网络设备里常会用到它。",
    exampleSentence: "When the modem stopped working, the whole house lost internet access.",
    exampleTranslation: "调制解调器一坏，家里就全都上不了网了。"
  },
  quasar: {
    chineseMeaning: "类星体",
    englishDefinition: "A quasar is a very bright object in space that gives off powerful light and energy.",
    chineseExplanation: "指宇宙中非常明亮、会释放强大光和能量的天体。",
    usageTip: "这是天文学词汇，不需要死记细节，先记住它是非常亮的太空天体。",
    exampleSentence: "The class watched a video that explained how distant quasars are discovered.",
    exampleTranslation: "全班看了一段介绍人们如何发现遥远类星体的视频。"
  },
  radar: {
    chineseMeaning: "雷达",
    englishDefinition: "Radar is a system that uses radio waves to detect where something is and how fast it is moving.",
    chineseExplanation: "指利用无线电波来判断目标位置、方向和速度的系统。",
    usageTip: "这是科技词汇，常见于飞机、天气、船只和交通相关内容。",
    exampleSentence: "The weather station used radar to track the storm.",
    exampleTranslation: "气象站用雷达追踪那场暴风雨。"
  },
  scuba: {
    chineseMeaning: "水肺潜水装备",
    englishDefinition: "Scuba gear lets a diver breathe underwater.",
    chineseExplanation: "指潜水员在水下呼吸时使用的水肺装备。",
    usageTip: "这个词常和 diving 连在一起出现，看到 scuba diving 时就是“水肺潜水”。",
    exampleSentence: "Before the dive, the instructor checked everyone's scuba gear.",
    exampleTranslation: "下水前，教练检查了每个人的水肺装备。"
  },
  snafu: {
    chineseMeaning: "一团糟；混乱局面",
    englishDefinition: "A snafu is a badly confused and disorganized situation.",
    chineseExplanation: "指事情乱成一团、安排失控的局面。",
    usageTip: "这个词带点口语色彩，常用来形容计划出岔子后的一片混乱。",
    exampleSentence: "A bus delay caused a total snafu for the field trip schedule.",
    exampleTranslation: "校车晚点让这次外出活动的安排乱成了一团。"
  },
  sonar: {
    chineseMeaning: "声呐",
    englishDefinition: "Sonar is a system that uses sound waves to find objects underwater.",
    chineseExplanation: "指利用声波在水下寻找物体的位置的系统。",
    usageTip: "可以把它和 radar 对比记忆：radar 用无线电波，sonar 用声波。",
    exampleSentence: "The research boat used sonar to map the ocean floor.",
    exampleTranslation: "那艘科考船用声呐绘制海底地图。"
  },
  veep: {
    chineseMeaning: "副总统；副总裁",
    englishDefinition: "A veep is a vice president.",
    chineseExplanation: "指副总统，也可以泛指某个机构或公司的副主管。",
    usageTip: "这是 vice president 的口语缩略形式，读新闻或人物介绍时会见到。",
    exampleSentence: "The article explained what the veep does during important meetings.",
    exampleTranslation: "那篇文章解释了副总统在重要会议中要做些什么。"
  },
  holiday: {
    chineseMeaning: "假期",
    englishDefinition: "In British English, a holiday is a vacation or time away from school or work.",
    chineseExplanation: "在英式英语里，它常表示假期，不只是节日。",
    usageTip: "和美式英语里的 vacation 很接近，要根据语境来判断。",
    exampleSentence: "They spent the summer holiday by the sea.",
    exampleTranslation: "他们在海边度过了暑假。"
  },
  volcano: {
    chineseMeaning: "火山",
    englishDefinition: "A volcano is a mountain that can send out hot rock, ash, and gas.",
    chineseExplanation: "指会喷出岩浆、火山灰和气体的山。",
    usageTip: "这是自然科学里很常见的词，可以和 lava 一起记。",
    exampleSentence: "Smoke rose from the volcano just before sunset.",
    exampleTranslation: "日落前，火山上方冒起了烟。"
  },
  zany: {
    chineseMeaning: "滑稽古怪的",
    englishDefinition: "Someone zany acts in a clownish, silly, or wildly funny way.",
    chineseExplanation: "形容人古怪又好笑，像小丑那样夸张。",
    usageTip: "通常不是普通的 funny，而是带点疯疯癫癫的喜剧感。",
    exampleSentence: "The zany actor bounced onto the stage wearing two hats.",
    exampleTranslation: "那个滑稽古怪的演员戴着两顶帽子跳上了舞台。"
  },
  malfunction: {
    chineseMeaning: "出故障；失灵",
    englishDefinition: "To malfunction is to stop working the way something should.",
    chineseExplanation: "表示机器、设备或系统没有正常工作，出了故障。",
    usageTip: "常用来形容机器、电脑、门锁、设备等不能正常运作。",
    exampleSentence: "The printer began to malfunction right before the project was due.",
    exampleTranslation: "就在项目快要交的时候，打印机突然出故障了。"
  },
  hydroplane: {
    chineseMeaning: "水上飞机",
    englishDefinition: "A hydroplane is an airplane designed to take off from and land on water.",
    chineseExplanation: "指一种可以在水面起飞和降落的飞机。",
    usageTip: "这个词里 hydro 和 water 有关，plane 和飞机有关，可以拆开记。",
    exampleSentence: "We watched a hydroplane glide across the lake before taking off.",
    exampleTranslation: "我们看着一架水上飞机在湖面滑行后起飞。"
  },
  recreation: {
    chineseMeaning: "娱乐；消遣活动",
    englishDefinition: "Recreation means enjoyable activity done for fun and relaxation.",
    chineseExplanation: "指为了放松和开心而做的活动，比如游戏、运动、郊游。",
    usageTip: "和 rest 不完全一样，它更强调让人放松的活动内容。",
    exampleSentence: "After lunch, the camp schedule allowed time for recreation.",
    exampleTranslation: "午饭后，夏令营安排了娱乐活动时间。"
  },
  archipelago: {
    chineseMeaning: "群岛",
    englishDefinition: "An archipelago is a chain of islands.",
    chineseExplanation: "指一串连在一起的岛屿，也就是由很多岛组成的一片区域。",
    usageTip: "这是地理词，看到地图、海域或岛屿分布时很常见。",
    exampleSentence: "From the airplane, the archipelago looked like tiny green dots in the sea.",
    exampleTranslation: "从飞机上看，那片群岛像海里的一串绿色小点。"
  },
  tributary: {
    chineseMeaning: "支流",
    englishDefinition: "A tributary is a branch of a river.",
    chineseExplanation: "指流入大河的小河，也就是河流的支流。",
    usageTip: "可以和 river 一起记，主河道旁边流进来的小河就是 tributary。",
    exampleSentence: "A narrow tributary joined the main river near the bridge.",
    exampleTranslation: "一条狭窄的支流在桥边汇入了主河道。"
  },
  simile: {
    chineseMeaning: "明喻",
    englishDefinition: "A simile uses the words like or as to compare two unlike things.",
    chineseExplanation: "指用 like 或 as 把两种不同的事物拿来比较的写法。",
    usageTip: "看到句子里有 like 或 as，而且是在做比较时，就可以留意是不是 simile。",
    exampleSentence: "Her smile was like sunshine is a simile.",
    exampleTranslation: "Her smile was like sunshine 这句话就是一个明喻。"
  },
  metaphor: {
    chineseMeaning: "暗喻",
    englishDefinition: "A metaphor is a comparison of two unlike things.",
    chineseExplanation: "指把两种不同的事物直接放在一起比较，不一定出现 like 或 as。",
    usageTip: "它和 simile 很像，但 metaphor 往往比较直接，不会明说“像”。",
    exampleSentence: "The classroom was a zoo is a metaphor.",
    exampleTranslation: "The classroom was a zoo 这句话就是一个暗喻。"
  },
  alliteration: {
    chineseMeaning: "头韵",
    englishDefinition: "Alliteration is the repetition of the first sound of several words in a poem.",
    chineseExplanation: "指几个词开头的声音反复出现，让句子读起来更有节奏。",
    usageTip: "学这个词时，可以多听几个词开头是不是在重复同一个声音。",
    exampleSentence: "Busy bees buzzed is an example of alliteration.",
    exampleTranslation: "Busy bees buzzed 这组词就有头韵。"
  },
  personification: {
    chineseMeaning: "拟人",
    englishDefinition: "In personification, a human characteristic is given to something that is not human.",
    chineseExplanation: "指把人的动作、情感或特点写到动物、植物或物体上。",
    usageTip: "看到风会低语、月亮在微笑这类写法时，就可以想到拟人。",
    exampleSentence: "The wind whispered through the trees uses personification.",
    exampleTranslation: "The wind whispered through the trees 这句话用了拟人。"
  },
  chitchat: {
    chineseMeaning: "闲聊；聊天",
    englishDefinition: "Chitchat is friendly or idle talk.",
    chineseExplanation: "指轻松随意地聊天，不是正式讨论。",
    usageTip: "这个词语气比较轻松，常用来形容朋友之间的小聊天。",
    exampleSentence: "A little chitchat filled the room before the meeting began.",
    exampleTranslation: "会议开始前，房间里都是轻松的闲聊声。"
  },
  hullabaloo: {
    chineseMeaning: "喧闹；骚动",
    englishDefinition: "A hullabaloo is a loud disturbance.",
    chineseExplanation: "指一阵很大的吵闹或骚动，让现场乱成一团。",
    usageTip: "常用来形容突然闹起来的场面，不只是普通的 noise。",
    exampleSentence: "A hullabaloo broke out when the mascot ran into the gym.",
    exampleTranslation: "吉祥物跑进体育馆时，现场顿时闹成一片。"
  },
  cutlery: {
    chineseMeaning: "餐具",
    englishDefinition: "In British English, cutlery means the knives, forks, and spoons used at the table.",
    chineseExplanation: "在英式英语里，它指吃饭时用的刀、叉、勺等餐具。",
    usageTip: "这个词在英国常见，对应美式英语里的 silverware 一类说法。",
    exampleSentence: "Please put the clean cutlery back in the drawer.",
    exampleTranslation: "请把洗干净的餐具放回抽屉里。"
  },
  underground: {
    chineseMeaning: "地铁",
    englishDefinition: "In British English, the Underground is the subway system.",
    chineseExplanation: "在英式英语里，它常指城市里的地铁系统。",
    usageTip: "看到大写的 Underground 时，常是在说伦敦地铁这类正式系统名称。",
    exampleSentence: "We took the Underground across the city before lunch.",
    exampleTranslation: "午饭前，我们坐地铁穿过了整座城市。"
  },
  academy: {
    chineseMeaning: "学校；学会",
    englishDefinition: "An academy is a school or a place for serious study.",
    chineseExplanation: "可以指学校，也可以指专门学习某个领域的机构。",
    usageTip: "要根据上下文判断它是在说普通学校，还是某个专业机构。",
    exampleSentence: "She won a scholarship to a music academy downtown.",
    exampleTranslation: "她拿到了市中心那所音乐学校的奖学金。"
  },
  manuscript: {
    chineseMeaning: "手稿；文稿",
    englishDefinition: "A manuscript is the written text of a book or paper before it is printed.",
    chineseExplanation: "指书或文章在正式出版前的文字稿。",
    usageTip: "它不一定是手写的，重点是“正式出版前的原稿”。",
    exampleSentence: "The author mailed the manuscript to her editor last week.",
    exampleTranslation: "上周，作者把手稿寄给了编辑。"
  },
  oxygen: {
    chineseMeaning: "氧气",
    englishDefinition: "Oxygen is a colorless gas in the air that living things need in order to breathe.",
    chineseExplanation: "指空气中帮助人和动物呼吸的重要气体。",
    usageTip: "这是科学里很基础的词，可以和 breathe、air 一起记。",
    exampleSentence: "Plants release oxygen during the daytime.",
    exampleTranslation: "植物在白天会释放氧气。"
  },
  chemist: {
    chineseMeaning: "药剂师；药房",
    englishDefinition: "In British English, a chemist can mean a pharmacist or a drugstore.",
    chineseExplanation: "在英式英语里，它可以指药剂师，也可以指药房。",
    usageTip: "别和美式英语里常见的 chemist“化学家”混淆；这里学的是英式英语用法。",
    exampleSentence: "Dad stopped at the chemist to pick up a bottle of cough medicine.",
    exampleTranslation: "爸爸去药房拿了一瓶止咳药。"
  },
  cupboard: {
    chineseMeaning: "橱柜；壁柜",
    englishDefinition: "A cupboard is a cabinet with shelves and a door for storing things.",
    chineseExplanation: "指带门、里面有搁板、用来收东西的柜子。",
    usageTip: "常见于厨房、餐厅或储物间，和 closet 一样都能表示柜子，但场景不完全一样。",
    exampleSentence: "The cereal boxes were stacked in the kitchen cupboard.",
    exampleTranslation: "麦片盒都叠放在厨房的橱柜里。"
  },
  flat: {
    chineseMeaning: "公寓",
    englishDefinition: "In British English, a flat is an apartment.",
    chineseExplanation: "在英式英语里，它表示公寓，也就是 apartment。",
    usageTip: "这里学的是名词“公寓”，不是形容词 flat“平的”。",
    exampleSentence: "Her aunt lives in a small flat above the bakery.",
    exampleTranslation: "她阿姨住在面包店楼上的一间小公寓里。"
  },
  larder: {
    chineseMeaning: "食品储藏间；食物柜",
    englishDefinition: "A larder is a place where food is stored.",
    chineseExplanation: "指专门放食物的储藏间或柜子。",
    usageTip: "这个词带一点旧式或英式英语色彩，看到厨房和储藏食物的语境时就能认出来。",
    exampleSentence: "Grandma kept jars of jam in the cool larder.",
    exampleTranslation: "奶奶把一罐罐果酱放在凉爽的储藏间里。"
  },
  lift: {
    chineseMeaning: "电梯",
    englishDefinition: "In British English, a lift is an elevator.",
    chineseExplanation: "在英式英语里，它表示电梯。",
    usageTip: "这里是名词用法，不是动词 lift“举起”。",
    exampleSentence: "We took the lift to the sixth floor of the hotel.",
    exampleTranslation: "我们坐电梯到了酒店六楼。"
  },
  nappy: {
    chineseMeaning: "尿布",
    englishDefinition: "In British English, a nappy is a diaper.",
    chineseExplanation: "在英式英语里，它表示婴儿用的尿布。",
    usageTip: "这是英式英语常用词，对应美式英语里的 diaper。",
    exampleSentence: "The baby needed a clean nappy after the car ride.",
    exampleTranslation: "坐完车后，宝宝需要换一片干净的尿布。"
  },
  pram: {
    chineseMeaning: "婴儿车",
    englishDefinition: "A pram is a baby carriage.",
    chineseExplanation: "指推着婴儿外出的婴儿车。",
    usageTip: "这是英式英语里常见的说法，常和 baby、park、walk 一起出现。",
    exampleSentence: "The baby fell asleep while the pram rolled along the path.",
    exampleTranslation: "婴儿车沿着小路往前推时，宝宝睡着了。"
  },
  album: {
    chineseMeaning: "相册；集册",
    englishDefinition: "An album is a book with pages for holding photos, stamps, or other collections.",
    chineseExplanation: "指用来放照片、邮票或其他收藏品的册子。",
    usageTip: "最常见的是 photo album 相册，但它也可以装别的收藏品。",
    exampleSentence: "We spent the afternoon turning the pages of Grandma's photo album.",
    exampleTranslation: "我们整个下午都在翻奶奶的相册。"
  },
  cyclone: {
    chineseMeaning: "气旋；强烈旋风",
    englishDefinition: "A cyclone is a violent storm with strong rotating winds.",
    chineseExplanation: "指带着强烈旋转风势的暴风。",
    usageTip: "这是天气和自然灾害类词汇，重点记住它是会旋转的强风暴。",
    exampleSentence: "The cyclone forced families to stay indoors for safety.",
    exampleTranslation: "那场强烈旋风迫使人们待在室内避险。"
  },
  dahlia: {
    chineseMeaning: "大丽花",
    englishDefinition: "A dahlia is a garden flower with many layered petals.",
    chineseExplanation: "指一种花瓣很多、层层展开的观赏花。",
    usageTip: "这是植物名词，见到 garden 或 flower show 这类语境时很常见。",
    exampleSentence: "A bright red dahlia bloomed near the front gate.",
    exampleTranslation: "门前开着一朵鲜红的大丽花。"
  },
  ketchup: {
    chineseMeaning: "番茄酱",
    englishDefinition: "Ketchup is a thick tomato sauce used with foods like fries and burgers.",
    chineseExplanation: "指常和薯条、汉堡等食物一起吃的番茄酱。",
    usageTip: "这是食物类高频词，注意它是酱料，不是果汁或汤。",
    exampleSentence: "Mia squeezed ketchup onto her fries at lunch.",
    exampleTranslation: "午饭时，Mia 往薯条上挤了些番茄酱。"
  },
  leotard: {
    chineseMeaning: "紧身连体衣",
    englishDefinition: "A leotard is a close-fitting one-piece garment worn by dancers or gymnasts.",
    chineseExplanation: "指舞者或体操运动员常穿的紧身连体衣。",
    usageTip: "常出现在 dance、gymnastics、recital 这些场景里。",
    exampleSentence: "She packed her leotard before heading to dance class.",
    exampleTranslation: "去舞蹈课前，她把紧身连体衣装进了包里。"
  },
  abduct: {
    chineseMeaning: "绑走；拐走",
    englishDefinition: "To abduct someone is to carry that person away by force.",
    chineseExplanation: "表示用强迫的方式把人带走。",
    usageTip: "这是比较严肃的词，常见于新闻、故事或法律语境。",
    exampleSentence: "The detective worked quickly to find the child before anyone could abduct him.",
    exampleTranslation: "侦探迅速展开行动，想在孩子被人绑走前找到他。"
  },
  abstain: {
    chineseMeaning: "克制不做；弃权",
    englishDefinition: "If you abstain from something, you choose not to do it or take part in it.",
    chineseExplanation: "表示主动忍住不做某件事，或者不参与、不投票。",
    usageTip: "常和 from 连用，如 abstain from candy、abstain from voting。",
    exampleSentence: "Nora decided to abstain from dessert until after the race.",
    exampleTranslation: "Nora 决定比赛结束前先不吃甜点。"
  },
  interpose: {
    chineseMeaning: "插入；介入；挡在中间",
    englishDefinition: "To interpose is to come or place something between two things.",
    chineseExplanation: "表示插到两者之间，或者出面介入。",
    usageTip: "既可以写物体挡在中间，也可以写人出面调停或阻止。",
    exampleSentence: "A fence interposed itself between the yard and the busy road.",
    exampleTranslation: "一道栅栏挡在院子和繁忙的马路之间。"
  },
  intersection: {
    chineseMeaning: "交叉口；交汇处",
    englishDefinition: "An intersection is the place where two roads or lines cross.",
    chineseExplanation: "指两条路或两条线相交的地方。",
    usageTip: "最常见的是 road intersection“十字路口”，数学和图形里也会见到。",
    exampleSentence: "A police officer stood at the intersection to guide traffic.",
    exampleTranslation: "一名警察站在路口指挥交通。"
  },
  irrational: {
    chineseMeaning: "不理智的；不合逻辑的",
    englishDefinition: "Someone irrational is not thinking clearly or sensibly.",
    chineseExplanation: "形容人没有冷静思考，做法或想法不合常理。",
    usageTip: "语气比 silly 更正式，常用来写情绪太强或判断失常的状态。",
    exampleSentence: "It was irrational to blame the dog for the broken lamp without checking the room.",
    exampleTranslation: "还没检查房间就怪狗打碎了灯，这样想并不理智。"
  },
  irresponsible: {
    chineseMeaning: "不负责任的",
    englishDefinition: "Someone irresponsible does not do what he or she should do.",
    chineseExplanation: "形容人没有承担该承担的责任，做事不靠谱。",
    usageTip: "常用来评价行为，比如忘记任务、乱做决定或不守承诺。",
    exampleSentence: "Leaving the paint open on the floor was irresponsible.",
    exampleTranslation: "把颜料开着盖子放在地上，这样做很不负责任。"
  },
  malformed: {
    chineseMeaning: "畸形的；形状不正常的",
    englishDefinition: "Malformed means badly or incorrectly shaped.",
    chineseExplanation: "形容某样东西的形状没有长好，或者和正常样子不一样。",
    usageTip: "这是较正式的词，常见于科学、医学或技术说明里。",
    exampleSentence: "The scientist studied a malformed leaf under the microscope.",
    exampleTranslation: "科学家在显微镜下观察了一片形状异常的叶子。"
  },
  retroactive: {
    chineseMeaning: "追溯生效的",
    englishDefinition: "A retroactive rule or law applies to a time before it was made.",
    chineseExplanation: "指规则或法律虽然现在才出现，却会追溯到以前的时间也算数。",
    usageTip: "这是法律和正式说明里常见的词，重点记住“往回算也生效”。",
    exampleSentence: "The new fee was not retroactive, so families did not have to pay for past months.",
    exampleTranslation: "这项新费用不追溯生效，所以家庭不用补交之前几个月的钱。"
  },
  retrospective: {
    chineseMeaning: "回顾；回顾性的",
    englishDefinition: "A retrospective looks back on past events, work, or experiences.",
    chineseExplanation: "指回头看过去的经历、作品或事情，也可以表示“回顾性的”。",
    usageTip: "常用于展览、总结、回忆录等场景，强调“回头看以前”。",
    exampleSentence: "The museum hosted a retrospective of the painter's early work.",
    exampleTranslation: "博物馆举办了一场回顾那位画家早期作品的展览。"
  },
  biannual: {
    chineseMeaning: "一年两次的",
    englishDefinition: "A biannual event happens two times each year.",
    chineseExplanation: "形容一件事在一年里会发生两次。",
    usageTip: "别和 biennial“每两年一次的”混淆；biannual 是“一年两次”。",
    exampleSentence: "The club holds a biannual book sale in spring and fall.",
    exampleTranslation: "这个社团每年春天和秋天各办一次图书义卖。"
  },
  bivalve: {
    chineseMeaning: "双壳贝；双壳类动物",
    englishDefinition: "A bivalve is a shellfish with two hinged shells.",
    chineseExplanation: "指有两片壳、可以像门一样合起来的贝类动物。",
    usageTip: "这是生物词汇，可以联想到 clam、mussel 这类有双壳的海洋生物。",
    exampleSentence: "The student found a small bivalve shell on the beach.",
    exampleTranslation: "那个学生在海边找到了一枚小小的双壳贝壳。"
  },
  commiserate: {
    chineseMeaning: "同情；表示难过",
    englishDefinition: "If you commiserate with someone, you share in that person's sadness or trouble.",
    chineseExplanation: "表示对别人的难处感到同情，并把这份难过说出来。",
    usageTip: "常和 with 连用，语气比 feel sorry 更正式一些。",
    exampleSentence: "Her friends gathered to commiserate with her after the tough loss.",
    exampleTranslation: "比赛失利后，朋友们围过来安慰她。"
  },
  compile: {
    chineseMeaning: "汇编；收集整理",
    englishDefinition: "To compile something is to gather pieces of information and put them together.",
    chineseExplanation: "表示把零散的信息、材料或作品收集起来，再整理成一份完整的东西。",
    usageTip: "常用于 report、list、data、book 等需要整理汇总的内容。",
    exampleSentence: "The class worked together to compile a list of local birds.",
    exampleTranslation: "全班一起整理出了一份本地鸟类名单。"
  },
  hydroelectric: {
    chineseMeaning: "水力发电的",
    englishDefinition: "Hydroelectric power is electricity made from moving water.",
    chineseExplanation: "形容利用流动的水来发电。",
    usageTip: "可以拆成 hydro“水”和 electric“电”来记，更容易理解。",
    exampleSentence: "The dam supplies hydroelectric power to nearby towns.",
    exampleTranslation: "这座大坝为附近城镇提供水力发电。"
  },
  illegal: {
    chineseMeaning: "非法的；违法的",
    englishDefinition: "Something illegal is against the law.",
    chineseExplanation: "形容某件事不被法律允许，做了会违法。",
    usageTip: "这是比较正式的词，和 wrong 不完全一样，它强调“触犯法律”。",
    exampleSentence: "It is illegal to park in front of the fire station door.",
    exampleTranslation: "把车停在消防站门口是违法的。"
  },
  illiterate: {
    chineseMeaning: "不识字的；不会读写的",
    englishDefinition: "Someone illiterate cannot read or write.",
    chineseExplanation: "指一个人不会读书写字。",
    usageTip: "这是较正式的描述词，读文章时知道意思就行，使用时要注意语气是否合适。",
    exampleSentence: "The charity helps adults who were once illiterate learn to read.",
    exampleTranslation: "这个慈善机构帮助曾经不识字的成年人学会阅读。"
  },
  monosyllable: {
    chineseMeaning: "单音节词",
    englishDefinition: "A monosyllable is a word with only one syllable.",
    chineseExplanation: "指只有一个音节的词。",
    usageTip: "学拼读时很常用，可以和 syllable“音节”一起记。",
    exampleSentence: "Cat is a monosyllable, but kitten is not.",
    exampleTranslation: "cat 是单音节词，而 kitten 不是。"
  },
  monotone: {
    chineseMeaning: "单调的语调；单调乏味",
    englishDefinition: "A monotone is a voice or style that stays on one level without much change.",
    chineseExplanation: "指说话或表达一直一个调子，变化很少，听起来容易让人觉得单调。",
    usageTip: "既可以指声音单调，也可以形容风格缺少变化。",
    exampleSentence: "The speaker's monotone made the long lecture hard to stay awake through.",
    exampleTranslation: "那位演讲者单调的语调让这场长讲座听得人直犯困。"
  },
  accusation: {
    chineseMeaning: "指控；指责",
    englishDefinition: "An accusation is a claim that someone has done something wrong.",
    chineseExplanation: "指说某个人做了错事的指责或控告。",
    usageTip: "语气比 complaint 更重，常见于争执、调查或法律语境。",
    exampleSentence: "The accusation upset Leo because he had not touched the broken vase.",
    exampleTranslation: "那项指责让 Leo 很难过，因为他根本没碰过那个打碎的花瓶。"
  },
  dentist: {
    chineseMeaning: "牙医",
    englishDefinition: "A dentist is a doctor who takes care of teeth and gums.",
    chineseExplanation: "指专门检查和治疗牙齿、牙龈的医生。",
    usageTip: "可以和 tooth、teeth、checkup、cavity 这些词一起记。",
    exampleSentence: "The dentist reminded me to floss every evening.",
    exampleTranslation: "牙医提醒我每天晚上都要用牙线。"
  },
  heroic: {
    chineseMeaning: "英勇的；英雄般的",
    englishDefinition: "Someone heroic is very brave and acts to help others.",
    chineseExplanation: "形容人非常勇敢，而且愿意为了别人去行动。",
    usageTip: "比 brave 更强，常带有“像英雄一样”的感觉。",
    exampleSentence: "The firefighter made a heroic rescue during the storm.",
    exampleTranslation: "那位消防员在暴风雨中完成了一次英勇救援。"
  },
  historic: {
    chineseMeaning: "有重大历史意义的",
    englishDefinition: "Something historic is important in history.",
    chineseExplanation: "形容某件事因为很重要，会被历史记住。",
    usageTip: "别和 historical“与历史有关的”混淆；historic 更强调“历史上重要”。",
    exampleSentence: "The town celebrated the opening of its historic bridge.",
    exampleTranslation: "小镇庆祝那座具有历史意义的桥重新开放。"
  },
  journalism: {
    chineseMeaning: "新闻写作；新闻业",
    englishDefinition: "Journalism is the work of gathering, writing, and publishing news.",
    chineseExplanation: "指采访、写作和发布新闻的工作，也可以指新闻行业。",
    usageTip: "这是学科和职业类词汇，常和 newspaper、reporter、media 一起出现。",
    exampleSentence: "She hopes to study journalism when she goes to college.",
    exampleTranslation: "她希望上大学后学习新闻学。"
  },
  optimism: {
    chineseMeaning: "乐观；乐观态度",
    englishDefinition: "Optimism is the belief that things will turn out well.",
    chineseExplanation: "指相信事情会往好的方向发展的一种乐观心态。",
    usageTip: "它表示一种长期的态度，不只是某一刻高兴。",
    exampleSentence: "His optimism helped the team stay calm during the hard season.",
    exampleTranslation: "他的乐观让整个团队在艰难时期也能保持镇定。"
  },
  perfectionist: {
    chineseMeaning: "完美主义者",
    englishDefinition: "A perfectionist is someone who wants everything to be done extremely well.",
    chineseExplanation: "指做事总想做到最好、很难接受不够完美的人。",
    usageTip: "这个词有时是夸认真，有时也会暗示太苛求细节，要看语境。",
    exampleSentence: "As a perfectionist, Ivy checked every poster edge twice before hanging it up.",
    exampleTranslation: "作为一个完美主义者，Ivy 在把海报贴上去前把每条边都检查了两遍。"
  },
  succulent: {
    chineseMeaning: "多汁的",
    englishDefinition: "Something succulent is juicy and pleasantly moist.",
    chineseExplanation: "形容食物汁水很多，吃起来鲜嫩可口。",
    usageTip: "最常用来形容肉或水果；在植物语境里，succulent 也可以指多肉植物。",
    exampleSentence: "The roasted peaches were warm, soft, and succulent.",
    exampleTranslation: "烤过的桃子又温热又柔软，汁水很多。"
  },
  turbulent: {
    chineseMeaning: "动荡的；翻腾不安的",
    englishDefinition: "Something turbulent is rough, disturbed, or full of sudden movement.",
    chineseExplanation: "形容水流、空气或局面很不平静，起伏很大。",
    usageTip: "既可以写自然环境，也可以写情绪或局势不稳定。",
    exampleSentence: "The plane shook as it passed through turbulent air.",
    exampleTranslation: "飞机穿过颠簸气流时晃了起来。"
  }
};
