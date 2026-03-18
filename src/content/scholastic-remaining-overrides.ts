import type { ScholasticWordOverride } from "@/content/scholastic-overrides";

function entry(
  chineseMeaning: string,
  englishDefinition: string,
  chineseExplanation: string,
  usageTip: string,
  exampleSentence: string,
  exampleTranslation: string
): ScholasticWordOverride {
  return {
    chineseMeaning,
    englishDefinition,
    chineseExplanation,
    usageTip,
    exampleSentence,
    exampleTranslation
  };
}

export const scholasticRemainingOverrides: Record<string, ScholasticWordOverride> = {
  blunder: entry(
    "错误；失误",
    "A blunder is a careless or foolish mistake.",
    "指因为粗心或判断失误造成的错误，往往本来是可以避免的。",
    "语气比普通的 mistake 更重，常让人觉得“这下搞砸了”。",
    "Leaving the tickets at home was a blunder we could not fix.",
    "把票忘在家里是个没法补救的失误。"
  ),
  generally: entry(
    "通常；一般来说",
    "Generally means most of the time or in most cases.",
    "表示在大多数情况下都是这样，并不是每一次都绝对如此。",
    "常用来概括平时的习惯或普遍情况。",
    "We generally finish reading before dinner.",
    "我们通常会在晚饭前读完书。"
  ),
  hazardous: entry(
    "危险的",
    "When something is hazardous, it is dangerous and may cause harm.",
    "形容事物或环境有危险，可能会伤到人。",
    "常用来形容地方、物品或情况不安全。",
    "The icy steps were hazardous, so everyone held the railing.",
    "台阶结了冰，很危险，所以大家都扶着栏杆走。"
  ),
  novice: entry(
    "初学者；新手",
    "A novice is a beginner with little experience.",
    "指刚开始学习某件事、经验还不多的人。",
    "常和某项技能或活动连用，强调“刚上手”。",
    "As a novice, Mia needed help pitching the tent.",
    "作为新手，Mia 搭帐篷时需要别人帮忙。"
  ),
  outstanding: entry(
    "杰出的；突出的",
    "Outstanding means very good or important enough to be noticed.",
    "可以表示特别优秀，也可以表示特别显眼、很突出。",
    "读句子时要看它是在夸表现，还是在说某物很醒目。",
    "Her outstanding speech earned the loudest applause of the day.",
    "她那篇出色的演讲赢得了当天最热烈的掌声。"
  ),
  quiver: entry(
    "轻轻发抖；颤动",
    "If you quiver, you shake with small quick movements.",
    "表示轻轻地、快速地发抖或颤动。",
    "常写手、嘴唇、声音或树叶轻微地抖动。",
    "His voice began to quiver before he stepped onstage.",
    "上台前，他的声音开始微微发抖。"
  ),
  rash: entry(
    "轻率的；鲁莽的",
    "When someone is rash, that person acts too quickly without thinking enough.",
    "形容人没想清楚就行动，做事太冲动。",
    "常带有“不够谨慎、后果可能不好”的意思。",
    "It was rash to jump into the river without checking the current.",
    "没先看看水流就跳进河里，这样做太鲁莽了。"
  ),
  receptacle: entry(
    "容器；收纳处",
    "A receptacle is a container used to hold something.",
    "指专门用来装东西的容器或收纳处。",
    "常见于垃圾桶、盒子、收纳箱等正式一点的说法里。",
    "Please place the empty bottles in the recycling receptacle.",
    "请把空瓶子放进回收容器里。"
  ),
  variable: entry(
    "会变化的；不固定的",
    "Variable means likely to change and not always the same.",
    "形容某件事会变来变去，不是固定不变的。",
    "常用来形容天气、价格、时间安排等会变化的东西。",
    "Spring weather can be variable from morning to evening.",
    "春天的天气从早到晚可能一直在变。"
  ),
  veto: entry(
    "否决；正式反对",
    "If you veto something, you officially refuse to allow it.",
    "表示正式地不批准、不让某件事通过。",
    "语气比普通的 say no 更强，常用于规则、计划或决定。",
    "The principal may veto the plan if it seems unsafe.",
    "如果这个计划看起来不安全，校长可能会否决它。"
  ),
  bewildered: entry(
    "困惑的；摸不着头脑的",
    "When you are bewildered, you feel very confused and do not know what to do.",
    "形容人非常困惑，一时弄不清发生了什么。",
    "比 confused 更强一些，常带“完全搞不懂”的感觉。",
    "I looked bewildered when the puzzle pieces would not fit anywhere.",
    "当拼图块怎么都拼不上时，我一脸茫然。"
  ),
  blissful: entry(
    "幸福的；满足快乐的",
    "If you are blissful, you feel deeply happy and peaceful.",
    "形容人非常幸福、满足，而且心里很平静。",
    "语气比 happy 更柔和，也更有“满足感”。",
    "She wore a blissful smile after hearing the good news.",
    "听到那个好消息后，她脸上露出了幸福的笑容。"
  ),
  bountiful: entry(
    "丰富的；充足的",
    "Bountiful means plentiful and more than enough.",
    "形容数量很多，很充足。",
    "常写收成、食物、资源或礼物很丰盛。",
    "The garden gave us a bountiful crop of tomatoes this year.",
    "今年花园里的番茄收成特别丰富。"
  ),
  brutal: entry(
    "残酷的；粗暴的",
    "Brutal means cruel, harsh, or very rough.",
    "形容行为、环境或感受十分残酷、严厉或粗暴。",
    "语气很强，常表示让人很难受或受到伤害。",
    "The brutal wind made it hard to walk across the field.",
    "猛烈刺骨的风让人很难走过那片田地。"
  ),
  ceaseless: entry(
    "不停的；无休止的",
    "Something ceaseless goes on without stopping.",
    "形容事情一直持续，没有停下来。",
    "常用来写声音、雨、工作或抱怨一直不停。",
    "The ceaseless rain drummed on the roof all night.",
    "整整一夜，雨一直不停地敲打着屋顶。"
  ),
  cumbersome: entry(
    "笨重的；难处理的",
    "Something cumbersome is large, awkward, or hard to handle.",
    "形容东西太大、太笨重，拿着或处理起来不方便。",
    "既可以写实物笨重，也可以写事情麻烦繁琐。",
    "The cumbersome box would not fit through the narrow doorway.",
    "那个笨重的大箱子过不了狭窄的门口。"
  ),
  dormant: entry(
    "休眠的；暂时不活跃的",
    "Dormant means not active for a time, though still alive or able to begin again.",
    "形容暂时不活动、像是睡着了一样，但以后还可能恢复。",
    "常用来写植物、火山或能力暂时沉寂。",
    "The seeds remained dormant until the spring rain arrived.",
    "那些种子一直休眠着，直到春雨到来。"
  ),
  treacherous: entry(
    "靠不住的；危险难防的",
    "Someone treacherous cannot be trusted, and something treacherous is dangerous in a hidden way.",
    "形容人不可信，会背叛；也可以形容环境暗藏危险。",
    "读句子时要看它是在写人品，还是在写路况、天气这类危险情况。",
    "The treacherous path looked safe at first, but it was covered with ice.",
    "那条路一开始看着没事，其实全是冰，非常危险。"
  ),
  prohibit: entry(
    "禁止；不准",
    "To prohibit something is to forbid it officially or clearly.",
    "表示明确规定不许做某件事。",
    "语气比 stop 更正式，常用于规则、告示或制度。",
    "School rules prohibit running in the library.",
    "学校规定禁止在图书馆里奔跑。"
  ),
  permanent: entry(
    "永久的；长期不变的",
    "Permanent means lasting for a very long time or forever.",
    "形容持续很久、不会轻易改变的东西。",
    "和 temporary 相反，一个是长期的，一个是暂时的。",
    "The family made a permanent move to a new city.",
    "这一家人永久搬到了另一座城市。"
  ),
  sensible: entry(
    "明智的；讲道理的",
    "Someone sensible makes good choices and thinks carefully.",
    "形容人会认真思考，做决定很稳妥。",
    "常用来夸人不冲动、很靠谱。",
    "Taking a flashlight on the hike was a sensible idea.",
    "远足时带上手电筒是个明智的主意。"
  ),
  sluggish: entry(
    "迟缓的；没精神的",
    "Sluggish means moving or reacting slowly.",
    "形容动作慢、反应慢，或者整个人没什么精神。",
    "可以写人、动物、水流或进度慢吞吞。",
    "I felt sluggish after staying up too late the night before.",
    "前一晚睡得太晚后，我整个人都没精神。"
  ),
  unstable: entry(
    "不稳定的；摇晃的",
    "Unstable means not steady, safe, or firmly balanced.",
    "形容东西不稳、容易摇晃，或者情况不稳定。",
    "既可以写物体站不稳，也可以写局面变化大。",
    "The unstable chair wobbled every time someone sat on it.",
    "每次有人坐上去，那把不稳的椅子都会晃。"
  ),
  blueprint: entry(
    "蓝图；设计图",
    "A blueprint is a detailed plan or drawing for building something.",
    "指建筑物或工程的详细设计图，也可以引申为周密计划。",
    "既能指真正的图纸，也能比喻做事方案。",
    "The architect spread the blueprint across the table.",
    "建筑师把设计图铺在桌子上。"
  ),
  earthquake: entry(
    "地震",
    "An earthquake is a shaking of the ground caused by movement inside the Earth.",
    "指地面因为地球内部移动而发生的震动。",
    "这是自然灾害词汇，常和 ground、plates、aftershock 一起出现。",
    "The dishes rattled when the earthquake shook the town.",
    "地震袭来时，镇上的碗碟都震得直响。"
  ),
  guidebook: entry(
    "旅游指南；指南手册",
    "A guidebook is a book that gives useful information about a place or subject.",
    "指提供地点或主题相关信息的手册。",
    "常见于旅行、博物馆、学习项目等场景。",
    "We used a guidebook to choose which trail to hike first.",
    "我们靠一本指南手册决定先走哪条山路。"
  ),
  headquarters: entry(
    "总部；指挥中心",
    "Headquarters is the main office or command center of a group.",
    "指一个组织最主要的办公地点或指挥中心。",
    "这个词常写公司、军队、组织或大型活动的中心位置。",
    "The rescue team set up headquarters near the school gym.",
    "救援队把指挥中心设在学校体育馆附近。"
  ),
  masterpiece: entry(
    "杰作",
    "A masterpiece is a work made with great skill and beauty.",
    "指做得非常出色、很有水平的作品。",
    "常用来形容艺术品、音乐、写作或非常棒的成果。",
    "Everyone admired the mural as a true masterpiece.",
    "大家都把那幅壁画看作真正的杰作。"
  ),
  spellbound: entry(
    "入迷的；着迷的",
    "If you are spellbound, you are so interested that you can hardly look away.",
    "形容人被某样东西深深吸引，完全看入迷了。",
    "比 interested 更强，常带“看得忘了周围”的感觉。",
    "The audience sat spellbound during the magic show.",
    "魔术表演时，观众们全都看得入了迷。"
  ),
  touchdown: entry(
    "达阵得分",
    "A touchdown is a score made in American football.",
    "指美式橄榄球比赛中的一次达阵得分。",
    "这是体育专门词，看到 football 语境时就能认出来。",
    "The crowd erupted when the team scored a touchdown in the final minute.",
    "球队在最后一分钟达阵得分时，全场都沸腾了。"
  ),
  vineyard: entry(
    "葡萄园",
    "A vineyard is a field where grapes are grown.",
    "指专门种植葡萄的一大片田地。",
    "常和 grapes、wine、rows of vines 这些画面联系在一起。",
    "We drove past a vineyard filled with neat rows of grapevines.",
    "我们开车经过一片整整齐齐种满葡萄藤的葡萄园。"
  ),
  whirlpool: entry(
    "漩涡",
    "A whirlpool is water that spins around in a powerful circle.",
    "指水快速打转形成的旋涡。",
    "多出现在河流、海面或排水口附近的水流场景里。",
    "Leaves were pulled toward the whirlpool near the rocks.",
    "树叶被岩石旁边的漩涡卷了过去。"
  ),
  windshield: entry(
    "挡风玻璃",
    "A windshield is the front window of a car.",
    "指汽车前面的那块大玻璃，用来挡风和看路。",
    "常见于开车、下雨、除雾或清洁车辆的场景。",
    "Rain streaked across the windshield during the drive home.",
    "回家的路上，雨水一道道划过挡风玻璃。"
  ),
  bridal: entry(
    "婚礼的；新娘的",
    "Bridal means related to a bride or a wedding.",
    "形容和新娘或婚礼有关的事物。",
    "常见搭配有 bridal shop、bridal gown、bridal party。",
    "The bridal flowers matched the ribbons on the cake.",
    "婚礼用的花和蛋糕上的丝带颜色正好相配。"
  ),
  bridle: entry(
    "马笼头；缰绳",
    "A bridle is the set of straps and reins used to control a horse.",
    "指套在马头上、用来控制马的笼头和缰绳。",
    "这是和骑马有关的词，看到 horse、ride、reins 时很常见。",
    "She checked the bridle before riding the horse onto the trail.",
    "上路骑马前，她先检查了一下马笼头。"
  ),
  coarse: entry(
    "粗糙的；不细的",
    "Coarse means rough and not fine or smooth.",
    "形容表面不细腻、摸起来粗糙。",
    "常用来写布料、沙子、头发或语言粗鲁。",
    "The coarse rope scraped my hands when I pulled it.",
    "我拉那根粗糙的绳子时，手都被磨到了。"
  ),
  course: entry(
    "路线；方向；进程",
    "A course is a direction something moves in or the path it follows.",
    "指前进的路线、方向，或者事情发展的进程。",
    "这里学的是“路线、方向”的意思，不是 class course“课程”。",
    "The boat changed course to avoid the rocks ahead.",
    "那艘船改变了航线，避开前方的礁石。"
  ),
  crews: entry(
    "工作组；队伍",
    "Crews are groups of people who work together on the same job.",
    "指为了同一项工作一起合作的一组人。",
    "常见于建筑队、清洁队、电影拍摄团队等语境。",
    "Repair crews arrived early to fix the broken power lines.",
    "维修队一大早就赶来修理断掉的电线。"
  ),
  cruise: entry(
    "乘船游览；巡航",
    "A cruise is a trip taken on a ship for pleasure.",
    "指坐船进行的游览旅行。",
    "也可以作动词表示“轻松行驶”；这课先记名词旅行的意思。",
    "My grandparents took a cruise along the coast last summer.",
    "去年夏天，我的祖父母坐船沿海旅行。"
  ),
  foul: entry(
    "肮脏的；难闻的",
    "Something foul is very dirty, unpleasant, or bad-smelling.",
    "形容东西又脏又难闻，让人很不舒服。",
    "这课先学“脏、臭”的意思，不是体育里的 foul“犯规”。",
    "A foul smell came from the trash can behind the cafe.",
    "咖啡馆后面的垃圾桶飘来一股难闻的臭味。"
  ),
  fowl: entry(
    "家禽；鸟类",
    "A fowl is a bird, especially one such as a chicken, duck, or goose.",
    "指鸟，尤其是鸡、鸭、鹅这类家禽。",
    "别和 foul 混淆，一个是家禽，一个是肮脏难闻。",
    "The farmer fed the fowl before the sun was fully up.",
    "天还没大亮，农夫就先去喂家禽了。"
  ),
  loot: entry(
    "抢劫；掠夺",
    "To loot is to steal goods, especially during chaos or after a disaster.",
    "表示趁混乱时抢走、洗劫财物。",
    "这个词语气较强，常见于新闻或冒险故事里。",
    "The guards tried to stop people from looting the closed shops.",
    "守卫们努力阻止人们洗劫那些关着门的商店。"
  ),
  lute: entry(
    "琵琶类乐器",
    "A lute is a stringed musical instrument with a rounded body.",
    "指一种有弦、琴身圆鼓的古老乐器。",
    "常见于历史、音乐或文艺作品里。",
    "Soft music from a lute drifted through the castle hall.",
    "城堡大厅里飘来琵琶类乐器柔和的乐声。"
  ),
  alligator: entry(
    "短吻鳄",
    "An alligator is a large reptile with thick skin and a powerful tail.",
    "指一种体型很大的爬行动物，皮厚、尾巴有力。",
    "和 crocodile 很像，但这是不同种类的动物。",
    "The alligator floated almost silently near the edge of the swamp.",
    "那只短吻鳄几乎无声地漂在沼泽边。"
  ),
  bandit: entry(
    "强盗；土匪",
    "A bandit is a robber who steals by force.",
    "指用暴力抢东西的强盗。",
    "常见于故事、历史或西部题材语境里。",
    "In the story, the bandit escaped into the hills at dusk.",
    "故事里，那个强盗在黄昏时逃进了山里。"
  ),
  barbecue: entry(
    "烧烤架；烧烤",
    "A barbecue is a grill or a meal cooked outdoors over fire or heat.",
    "可以指烧烤用的架子，也可以指户外烧烤活动或食物。",
    "读句子时看它是在说工具，还是在说聚会和食物。",
    "Dad lit the barbecue before the neighbors arrived for dinner.",
    "邻居们来吃晚饭前，爸爸先点好了烧烤架。"
  ),
  impala: entry(
    "黑斑羚",
    "An impala is a fast African antelope.",
    "指生活在非洲的一种羚羊，跑得很快。",
    "这是动物名词，也能顺便认识它来自非洲语言。",
    "The impala leaped across the grassland in one smooth jump.",
    "那只黑斑羚轻轻一跃就跳过了草地。"
  ),
  kimono: entry(
    "和服",
    "A kimono is a long traditional Japanese robe.",
    "指日本传统的长袍式服装。",
    "这是文化词汇，常见于节日、表演或历史介绍中。",
    "She wore a beautiful kimono for the festival parade.",
    "她穿着漂亮的和服参加节日游行。"
  ),
  magazine: entry(
    "杂志",
    "A magazine is a publication with articles and pictures that comes out regularly.",
    "指定期出版、里面有文章和图片的杂志。",
    "和 newspaper 不一样，magazine 通常更厚、主题也更集中。",
    "I found a science magazine in the waiting room.",
    "我在候诊室里找到了一本科学杂志。"
  ),
  okra: entry(
    "秋葵",
    "Okra is a vegetable often used in soups and stews.",
    "指一种常拿来煮汤或炖菜的蔬菜，也叫秋葵。",
    "这是食物名词，常见于 cooking 或 garden 语境。",
    "The cook sliced fresh okra into the soup pot.",
    "厨师把新鲜秋葵切进了汤锅里。"
  ),
  pajamas: entry(
    "睡衣",
    "Pajamas are clothes worn for sleeping.",
    "指睡觉时穿的衣服。",
    "这个词常用复数形式出现，因为通常是一整套睡衣。",
    "He changed into warm pajamas after his bath.",
    "洗完澡后，他换上了暖和的睡衣。"
  ),
  sheik: entry(
    "酋长；族长",
    "A sheik is an Arab leader or head of a family or tribe.",
    "指阿拉伯地区的领袖、族长或重要长者。",
    "这是文化和历史类词汇，阅读时知道大意即可。",
    "In the story, the sheik welcomed the travelers into his tent.",
    "故事里，那位酋长把旅人们迎进了自己的帐篷。"
  ),
  syrup: entry(
    "糖浆",
    "Syrup is a thick sweet liquid used on food or in drinks.",
    "指浓稠又甜的液体，常淋在食物上或加进饮料里。",
    "最常见的是 maple syrup、fruit syrup 这类搭配。",
    "Warm syrup dripped down the stack of pancakes.",
    "温热的糖浆顺着那叠煎饼慢慢流下来。"
  ),
  flare: entry(
    "闪光；突然燃起",
    "A flare is a sudden bright light or burst of flame.",
    "指突然亮起的一道强光，或者猛地燃起来的火光。",
    "也可以作动词，表示“突然增强、猛地爆发”；这课先记名词画面。",
    "A red flare shot into the sky to signal for help.",
    "一束红色信号光射上天空，用来求救。"
  ),
  flurry: entry(
    "一阵忙乱；一阵风雪",
    "A flurry is a sudden brief burst of movement, activity, or snow.",
    "指突然出现的一阵活动、慌乱，或者短暂的一阵风雪。",
    "读句子时看它是在写天气，还是在写人一下子忙起来了。",
    "A flurry of footsteps filled the hallway after the bell rang.",
    "铃声一响，走廊里顿时响起一阵急促的脚步声。"
  ),
  glimmer: entry(
    "微光；隐约显现",
    "A glimmer is a faint, unsteady light.",
    "指很弱、若隐若现的一点光。",
    "也可以比喻一丝希望或一点迹象。",
    "We saw a glimmer of light under the cabin door.",
    "我们看见小木屋门下透出一丝微光。"
  ),
  medevac: entry(
    "医疗后送直升机；医疗转运",
    "A medevac is a medical evacuation, especially by helicopter.",
    "指把伤员或病人紧急转送出去接受治疗的行动，也常指执行这类任务的直升机。",
    "这是由 medical 和 evacuation 组合来的词，多见于新闻和救援语境。",
    "The medevac helicopter landed in the field just after sunset.",
    "日落后不久，那架医疗后送直升机降落在田野里。"
  ),
  paratroops: entry(
    "伞兵部队",
    "Paratroops are soldiers trained to jump from airplanes with parachutes.",
    "指经过训练、会从飞机上跳伞降落的士兵部队。",
    "这是军事词汇，重点记 parachute 和 troops 组合出来的意思。",
    "The documentary showed paratroops landing behind enemy lines.",
    "那部纪录片展示了伞兵在敌后降落的画面。"
  ),
  spacelab: entry(
    "太空实验室",
    "A spacelab is a laboratory used in space for scientific work.",
    "指设在太空中的实验室，用来做科学研究。",
    "这是由 space 和 lab 组合来的词，理解起来比较直观。",
    "Scientists conducted plant experiments inside the spacelab.",
    "科学家们在太空实验室里做植物实验。"
  ),
  splatter: entry(
    "泼洒；溅得到处都是",
    "If you splatter something, you spray or scatter it in messy drops.",
    "表示液体或软东西溅得到处都是。",
    "常写泥、水、油漆、酱料四处飞溅。",
    "Do not splatter paint on the floor while you work.",
    "干活时别把颜料溅得到处都是。"
  ),
  squawk: entry(
    "刺耳叫声；大声抱怨",
    "A squawk is a loud harsh cry, especially from a bird.",
    "指尖厉、刺耳的叫声，也可以引申为大声抱怨。",
    "最常见的是鸟叫声，听起来很吵很尖。",
    "A sudden squawk came from the parrot on the porch.",
    "门廊上的鹦鹉忽然发出一声刺耳的叫声。"
  ),
  squiggle: entry(
    "弯弯曲曲的线",
    "A squiggle is a short line or mark with twists and curves.",
    "指一条歪歪扭扭、弯来弯去的小线条。",
    "常见于孩子乱画、地图符号或草稿里的随手线条。",
    "He turned his careless squiggle into a drawing of a snake.",
    "他把那条随手画的弯线改成了一条蛇的图画。"
  ),
  telethon: entry(
    "长时间电视募捐节目",
    "A telethon is a television program that lasts many hours to raise money.",
    "指持续很久、通常为了募捐而播出的电视节目。",
    "这是 television 和 marathon 的组合词，可以一起理解。",
    "The town watched the telethon to support the children's hospital.",
    "镇上的人都收看那场电视募捐节目来支持儿童医院。"
  ),
  bed: entry(
    "蚝床；成片生长处",
    "In this lesson, a bed is a place where oysters or plants grow together.",
    "在这课里，它指一大片生长在一起的地方，比如蚝床或花坛，并不是“床”。",
    "这是多义词，要根据课文场景判断，不要自动想到 sleeping bed。",
    "We saw oysters clinging to the rocks in a shallow bed by the shore.",
    "我们看见海边浅水处的一片蚝床上附着着许多牡蛎。"
  ),
  colony: entry(
    "群体；群落",
    "A colony is a group of animals or people living together in one place.",
    "指生活在同一处、互相依存的一大群动物或人。",
    "科学里常写蚂蚁 colony、企鹅 colony 这类群居动物。",
    "A colony of ants had built tunnels under the stone path.",
    "一群蚂蚁在石子路下面挖出了通道。"
  ),
  gaggle: entry(
    "一群鹅",
    "A gaggle is a group of geese.",
    "指一群鹅聚在一起。",
    "这是动物群体名词之一，和 geese 连在一起记最容易。",
    "A gaggle of geese drifted across the pond at sunset.",
    "黄昏时，一群鹅慢慢漂过池塘。"
  ),
  gang: entry(
    "一群；一帮",
    "In this lesson, a gang is a group of animals together.",
    "在这课里，它指一群聚在一起的动物，也可以泛指一帮人。",
    "别只记成“帮派”，这里重点是“一群聚在一起的”。",
    "A gang of elk moved through the meadow at dawn.",
    "黎明时，一群麋鹿穿过草地。"
  ),
  knot: entry(
    "一团；一群",
    "In this lesson, a knot is a small tight group of animals together.",
    "在这课里，它指挤在一起的一小群动物，不是绳结的意思。",
    "这是多义词，课内先记“聚成一团”的那个意思。",
    "A knot of toads huddled near the edge of the pond.",
    "池塘边挤着一小群蟾蜍。"
  ),
  school: entry(
    "鱼群",
    "In this lesson, a school is a group of fish swimming together.",
    "在这课里，它指成群一起游动的鱼，不是“学校”。",
    "这是典型多义词，看到 fish 时就要切到“鱼群”这个意思。",
    "A silver school of fish flashed beneath the boat.",
    "船下方一大群银亮的鱼一闪而过。"
  ),
  skulk: entry(
    "一群狐狸",
    "A skulk is a group of foxes.",
    "指聚在一起的一群狐狸。",
    "这是动物群体专门说法，阅读时知道它对应 foxes 就够用了。",
    "A skulk of foxes slipped quietly through the trees.",
    "一群狐狸悄悄地穿过树林。"
  ),
  string: entry(
    "一队；一串",
    "In this lesson, a string is a group of ponies together.",
    "在这课里，它指一队小马，不是绳子本身的意思。",
    "这是多义词，看到 ponies 或 horses 的场景时要想到这一层意思。",
    "A string of ponies waited beside the trail for the riders.",
    "一队小马在山路边等着骑手们。"
  ),
  troop: entry(
    "一群；一队",
    "In this lesson, a troop is a group of animals such as kangaroos together.",
    "在这课里，它指聚在一起的一群动物，也可以表示一队人。",
    "常见于 troop of kangaroos 这类搭配里。",
    "A troop of kangaroos bounded across the red dirt.",
    "一群袋鼠跳过红色的土地。"
  ),
  delta: entry(
    "三角洲",
    "A delta is land made from sand and mud at the mouth of a river.",
    "指河流入海口附近堆积出来的三角洲地形。",
    "这是地理词，常和 river mouth、mud、silt 一起理解。",
    "The river spread into a wide delta before reaching the sea.",
    "那条河在流入大海前形成了一片宽阔的三角洲。"
  ),
  gorge: entry(
    "峡谷",
    "A gorge is a deep narrow valley, often with a stream or river in it.",
    "指很深、很窄的峡谷，里面常有水流经过。",
    "可以和 valley 对比记：gorge 通常更深、更陡。",
    "A narrow bridge crossed the rocky gorge below.",
    "一座狭窄的桥横跨在下面那道岩石峡谷上。"
  ),
  isthmus: entry(
    "地峡",
    "An isthmus is a narrow strip of land that joins two larger pieces of land.",
    "指连接两大片陆地的狭长地带。",
    "这是地图上常见的地理名词，可以想成细细的一道“连接带”。",
    "The canal cut across the isthmus to shorten sea travel.",
    "那条运河横穿地峡，缩短了海上航程。"
  ),
  oasis: entry(
    "绿洲",
    "An oasis is a fertile place in a desert where water is found.",
    "指沙漠里因为有水而长出植物的地方，也就是绿洲。",
    "这个词常给人“在干燥中忽然看到水和树”的画面感。",
    "After hours in the desert, the travelers reached an oasis with palm trees.",
    "在沙漠里走了很久后，旅人们终于到达了一处长着棕榈树的绿洲。"
  ),
  peninsula: entry(
    "半岛",
    "A peninsula is a piece of land surrounded by water on three sides.",
    "指三面环水、一面连着大陆的陆地，也就是半岛。",
    "可以和 island 对比记：半岛还连着陆地，岛完全被水包围。",
    "The town sat on a peninsula with water on three sides.",
    "那座小镇坐落在一处三面环水的半岛上。"
  ),
  plateau: entry(
    "高原",
    "A plateau is a large high area of land with a flat top.",
    "指地势很高、但表面比较平坦的一大片土地。",
    "这是地理词，可以想成“高高抬起的一大块平地”。",
    "Wild horses grazed on the windy plateau all afternoon.",
    "整整一个下午，野马都在那片多风的高原上吃草。"
  ),
  strait: entry(
    "海峡",
    "A strait is a narrow passage of water joining two larger bodies of water.",
    "指连接两大片水域的狭窄水道，也就是海峡。",
    "在地图或航海语境中很常见。",
    "Ships moved slowly through the narrow strait at dawn.",
    "黎明时，船只缓缓穿过那道狭窄的海峡。"
  ),
  valley: entry(
    "山谷",
    "A valley is a low area of land between hills or mountains.",
    "指两山之间较低的一片地，也就是山谷。",
    "比 gorge 更普通，范围也可以更开阔。",
    "Fog settled softly into the valley before sunrise.",
    "太阳出来前，雾气轻轻落进了山谷。"
  ),
  rhyme: entry(
    "押韵；押韵词",
    "A rhyme is a word that ends with the same sound as another word.",
    "指词尾发音相同或相近，也可以指这样押韵的词。",
    "学诗歌时，注意听结尾的声音是不是像 time 和 chime 那样相近。",
    "The children laughed when they found a rhyme for frog.",
    "孩子们找到和 frog 押韵的词时都笑了。"
  ),
  meter: entry(
    "格律；节拍",
    "Meter is the pattern of stressed and unstressed beats in a line of poetry.",
    "指诗句里轻重音和节拍的排列方式。",
    "这是诗歌术语，重点是“读起来的节奏感”。",
    "The class clapped the meter of the poem as they read aloud.",
    "全班一边朗读，一边拍手感受这首诗的节拍。"
  ),
  haiku: entry(
    "俳句",
    "A haiku is a short poem of three lines, often with a 5-7-5 syllable pattern.",
    "指一种只有三行的短诗，常见音节节奏是五、七、五。",
    "这是固定形式的诗歌，读到季节或自然主题时很常见。",
    "We wrote a haiku about the sound of rain on leaves.",
    "我们写了一首关于雨打树叶声音的俳句。"
  ),
  fiddlesticks: entry(
    "胡说；哪有这回事",
    "Fiddlesticks is an old-fashioned way to say nonsense or disagreement.",
    "是比较老派、带点好玩的说法，表示“胡说”或“才不是呢”。",
    "口气通常不算凶，更像半开玩笑地反驳。",
    "Fiddlesticks, said Grandma, that rumor cannot possibly be true.",
    "“胡说，”奶奶说，“那个传言怎么可能是真的。”"
  ),
  flabbergast: entry(
    "使大吃一惊",
    "To flabbergast someone is to surprise that person a lot.",
    "表示让某人大为吃惊，惊讶得说不出话来。",
    "语气比 surprise 更夸张，常带一点幽默感。",
    "The final trick managed to flabbergast the entire audience.",
    "最后那个魔术把全场观众都惊呆了。"
  ),
  hodgepodge: entry(
    "大杂烩；乱七八糟的一堆",
    "A hodgepodge is a mixture of many different things put together.",
    "指各种东西杂七杂八地混在一起。",
    "既可以是“乱成一团”，也可以是“什么都有的大杂烩”。",
    "Her desk drawer was a hodgepodge of pens, clips, tickets, and keys.",
    "她的抽屉里乱七八糟地塞着笔、回形针、票根和钥匙。"
  ),
  lollygag: entry(
    "磨蹭；闲逛浪费时间",
    "To lollygag is to waste time by moving or acting too slowly.",
    "表示慢吞吞地磨蹭，拖着不做正事。",
    "通常带一点责怪的语气，像是在说“别再拖啦”。",
    "Do not lollygag on the way home or dinner will get cold.",
    "回家路上别再磨蹭了，不然晚饭都要凉了。"
  ),
  "namby-pamby": entry(
    "软弱的；没骨气的",
    "Someone namby-pamby seems weak, overly delicate, or not brave enough.",
    "形容人太软弱、太娇气，缺少坚定和勇气。",
    "这是带评价色彩的词，更多出现在故事或口语里。",
    "He thought the tiny umbrella looked namby-pamby in the storm.",
    "在暴风雨里，他觉得那把小伞显得软弱无力。"
  ),
  "nitty-gritty": entry(
    "本质要点；关键细节",
    "The nitty-gritty is the most important real part of something.",
    "指事情最关键、最实在的那部分内容。",
    "常用在 get down to the nitty-gritty 这个说法里，意思是“进入正题”。",
    "After chatting for a while, the team got down to the nitty-gritty of the plan.",
    "聊了一会儿之后，团队开始讨论计划中最关键的部分。"
  ),
  rapscallion: entry(
    "淘气鬼；小坏蛋",
    "A rapscallion is a mischievous or playful troublemaker.",
    "指爱捣蛋、爱惹点小麻烦的人，通常带一点调侃意味。",
    "语气没有 villain 那么重，更像在说淘气鬼。",
    "That little rapscallion hid everyone's pencils again.",
    "那个小淘气鬼又把大家的铅笔藏起来了。"
  ),
  biped: entry(
    "两足动物",
    "A biped is an animal that walks on two feet.",
    "指用两只脚行走的动物。",
    "可以和 bicycle 的 bi- 一起记，bi 表示“二”。",
    "Humans are bipeds, but dogs are not.",
    "人类是两足动物，但狗不是。"
  ),
  enumerate: entry(
    "列举；逐一说出",
    "To enumerate something is to name or list it one by one.",
    "表示把内容一项一项列出来。",
    "常用于步骤、原因、规则或清单。",
    "The teacher asked us to enumerate the steps of the experiment.",
    "老师让我们把实验步骤逐条列出来。"
  ),
  liberal: entry(
    "慷慨的；大量的",
    "Liberal can mean giving freely or using a generous amount.",
    "在这课里，它表示给得大方、用得很多。",
    "这是多义词，课内先记“慷慨、给得多”的意思。",
    "Use a liberal amount of glue so the poster will stay flat.",
    "多用一点胶水，这样海报才能贴平。"
  ),
  liberty: entry(
    "自由",
    "Liberty is the freedom to act, speak, or choose without unfair control.",
    "指做选择、说话和行动时拥有的自由。",
    "是比较正式的“自由”说法，常见于历史、法律和演讲里。",
    "The speech praised the value of liberty for every citizen.",
    "那场演讲赞扬了自由对每位公民的重要性。"
  ),
  numeral: entry(
    "数字符号",
    "A numeral is a symbol or word that stands for a number.",
    "指表示数字的符号或写法。",
    "比如 7、VII 和 seven 都可以和 numeral 这个概念联系起来。",
    "The Roman numeral on the clock showed the number four.",
    "时钟上的罗马数字表示数字四。"
  ),
  numerator: entry(
    "分子",
    "A numerator is the top number in a fraction.",
    "指分数线上面的那个数字。",
    "可以和 denominator 对比记，一个在上，一个在下。",
    "In the fraction 3/4, the numerator is 3.",
    "在分数 3/4 里，分子是 3。"
  ),
  numerous: entry(
    "许多的；大量的",
    "Numerous means very many.",
    "形容数量很多。",
    "比 many 更正式一些，常见于写作语境。",
    "Numerous stars appeared once the clouds moved away.",
    "云散开后，天上出现了许多星星。"
  ),
  pedal: entry(
    "踏板",
    "A pedal is a part you press with your foot to make something work.",
    "指要用脚踩的踏板。",
    "常见于自行车、钢琴、汽车等器具上。",
    "She pressed the piano pedal to make the notes ring longer.",
    "她踩下钢琴踏板，让音符响得更久。"
  ),
  pedestal: entry(
    "底座；基座",
    "A pedestal is a base that supports something above it.",
    "指用来托住雕像、花瓶等物体的底座。",
    "可以想成把重要东西高高托起来的台座。",
    "The statue stood on a marble pedestal in the center of the hall.",
    "那尊雕像立在大厅中央的大理石底座上。"
  ),
  pedestrian: entry(
    "行人",
    "A pedestrian is a person traveling on foot.",
    "指步行的人，也就是行人。",
    "常见于交通标志、街道规则和安全提示中。",
    "The driver stopped to let the pedestrian cross the street.",
    "司机停下来让行人过马路。"
  ),
  clarify: entry(
    "澄清；说明白",
    "To clarify something is to make it easier to understand.",
    "表示把原本不清楚的事解释明白。",
    "常用来说明想法、规则、问题或误会。",
    "The teacher used a diagram to clarify the homework directions.",
    "老师用一张图把作业要求讲清楚了。"
  ),
  clarion: entry(
    "清脆响亮的声音",
    "A clarion is a clear, bright, sharp sound.",
    "指响亮、清脆而穿透力很强的声音。",
    "常用于文学描写，比普通的 sound 更有画面感。",
    "A clarion note rang out from the trumpet at the start of the parade.",
    "游行开始时，小号吹出了一声嘹亮的音。"
  ),
  clarity: entry(
    "清晰；明晰",
    "Clarity is the quality of being clear and easy to understand.",
    "指看起来或表达上都很清楚、很明白。",
    "既可以写画面清晰，也可以写思路和语言清楚。",
    "Her explanation had such clarity that everyone understood the rule.",
    "她的解释非常清楚，所以大家都明白了那条规则。"
  ),
  declaration: entry(
    "声明；宣布",
    "A declaration is a formal statement or announcement.",
    "指正式说出的声明或宣布。",
    "语气比普通的 statement 更正式一些。",
    "The mayor made a declaration about the new park project.",
    "市长就新公园项目发表了一项正式声明。"
  ),
  declare: entry(
    "宣布；声明",
    "To declare something is to say it clearly and officially.",
    "表示清楚而正式地说出来。",
    "常用于宣布结果、立场、决定或规则。",
    "The judge will declare the winner after the final round.",
    "最后一轮结束后，裁判会宣布获胜者。"
  ),
  dictate: entry(
    "口述；让别人记录",
    "To dictate something is to say it aloud for another person to write down.",
    "表示把内容说出来，让别人写下来。",
    "也可以引申为“支配、规定”，这课先记口述的意思。",
    "Ms. Lin began to dictate the sentence while we wrote in silence.",
    "林老师开始口述句子，我们安静地写下来。"
  ),
  dictator: entry(
    "独裁者",
    "A dictator is a ruler who holds complete power.",
    "指掌握全部权力、由自己决定很多事情的统治者。",
    "这是政治和历史类词汇，语气明显偏负面。",
    "The history book described how the dictator controlled the country.",
    "历史书写到那位独裁者如何控制整个国家。"
  ),
  diction: entry(
    "措辞；说话方式",
    "Diction is the style of speaking or choice of words.",
    "指一个人说话用词和表达的方式。",
    "朗读、演讲和写作分析里常会用到这个词。",
    "The actor's careful diction made every line easy to hear.",
    "那位演员清楚的吐字让每一句台词都很好听清。"
  ),
  dictionary: entry(
    "字典；词典",
    "A dictionary is a book or resource that lists words and explains them.",
    "指按顺序收录单词并解释意思、发音或用法的工具书。",
    "这是词汇学习高频词，也可以是纸质书，也可以是电子词典。",
    "When we could not spell the word, we checked the dictionary.",
    "不会拼那个词时，我们就查了字典。"
  ),
  predict: entry(
    "预测；预言",
    "To predict something is to say what you think will happen next.",
    "表示根据线索或经验来推测接下来会发生什么。",
    "常用于天气、故事发展、比赛结果等情境。",
    "Can you predict what the character will do in the next chapter?",
    "你能预测这个角色在下一章会做什么吗？"
  ),
  barometer: entry(
    "气压计",
    "A barometer is an instrument that measures air pressure.",
    "指测量空气压力的仪器，也就是气压计。",
    "常用于天气观测和科学实验中。",
    "The barometer dropped before the storm arrived.",
    "暴风雨来之前，气压计的读数下降了。"
  ),
  diameter: entry(
    "直径",
    "A diameter is a line going through the center of a circle from one side to the other.",
    "指穿过圆心、连接圆两边的一条直线，也就是直径。",
    "这是数学词汇，可以和 radius 对比记。",
    "Measure the diameter before you try to cut the circle.",
    "试着剪那个圆之前，先量一下它的直径。"
  ),
  kilometer: entry(
    "千米；公里",
    "A kilometer is a metric measure of length equal to one thousand meters.",
    "指长度单位“千米”，也叫公里。",
    "在地图、跑步、距离说明里很常见。",
    "The trail is about two kilometers long.",
    "这条小路大约有两公里长。"
  ),
  mechanic: entry(
    "机械师；修理工",
    "A mechanic is a person who repairs machines and engines.",
    "指修理机器或发动机的人。",
    "最常见于汽车、自行车、设备维修等场景。",
    "The mechanic fixed the noisy engine by noon.",
    "那位修理工在中午前就修好了吵闹的发动机。"
  ),
  mechanize: entry(
    "使机械化",
    "To mechanize is to do a job by using machines.",
    "表示让原本靠人工完成的工作改用机器来做。",
    "常用于农业、工厂或生产流程的话题中。",
    "The farm began to mechanize the harvest to save time.",
    "农场开始用机械来完成收割，好节省时间。"
  ),
  pathetic: entry(
    "可怜的；令人同情的",
    "Pathetic means pitiful or deserving sympathy.",
    "形容很可怜，让人心生同情。",
    "在现代口语里它有时也会带贬义，这课先记“可怜”的本义。",
    "The pathetic stray dog shivered in the rain.",
    "那只可怜的流浪狗在雨里发抖。"
  ),
  pathology: entry(
    "病理学",
    "Pathology is the study of disease and what causes it.",
    "指研究疾病及其成因的学科，也就是病理学。",
    "这是学科词汇，和 biology、medicine 一样偏正式。",
    "She wants to study pathology when she is older.",
    "她长大后想学习病理学。"
  ),
  speedometer: entry(
    "速度表",
    "A speedometer is an instrument that shows how fast a vehicle is moving.",
    "指显示车速的仪表，也就是速度表。",
    "常见于汽车、摩托车等交通工具上。",
    "Dad glanced at the speedometer before entering the highway.",
    "上高速前，爸爸瞥了一眼速度表。"
  ),
  sympathy: entry(
    "同情；体恤",
    "Sympathy is the feeling of caring about someone's sadness or trouble.",
    "指看到别人难过或遇到困难时产生的同情和关心。",
    "可以和 empathy 对比理解：sympathy 更偏“同情关怀”。",
    "The class sent cards to show sympathy after the family lost their home.",
    "那家人失去房子后，全班送去卡片表达关心。"
  ),
  thermometer: entry(
    "温度计",
    "A thermometer is an instrument used to measure temperature.",
    "指测量温度的仪器，也就是温度计。",
    "既可以测天气，也可以测身体或液体温度。",
    "The nurse checked my fever with a digital thermometer.",
    "护士用电子温度计给我量了体温。"
  )
};
