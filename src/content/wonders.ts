import {
  CurriculumWeek,
  ExampleSentence,
  SentenceToken,
  SynonymCard,
  WordEntry
} from "@/lib/types";

const weekId = "wonders-g3-u2-w1";

export const curriculumWeeks: CurriculumWeek[] = [
  {
    id: weekId,
    curriculum: "wonders",
    grade: 3,
    unit: 2,
    week: 1,
    title: "天气、情绪与保护",
    theme: "在学校和家庭的熟悉场景里学习和使用单词。",
    overview:
      "这一周会混合学习表示可能性、情绪和动作的单词，让孩子能在真实小场景里理解词义、比较近义词，并学会放进句子里使用。",
    wordIds: [
      "probably",
      "possibly",
      "cheerful",
      "happy",
      "discover",
      "notice",
      "enormous",
      "huge",
      "protect",
      "guard",
      "fragile",
      "journey"
    ]
  }
];

export const wordEntries: WordEntry[] = [
  {
    id: "probably",
    curriculumWeekId: weekId,
    word: "probably",
    lemma: "probably",
    partOfSpeech: "adverb",
    phonetic: "/ˈprɑː.bə.bli/",
    chineseMeaning: "很可能；大概",
    childEnglishMeaning: "表示一件事大概率会发生，语气比较有把握。",
    usageTip: "当你比较有把握时，用 probably。",
    collocations: ["will probably", "probably rain", "probably true"],
    exampleSentences: [
      {
        id: "probably-1",
        text: "It will probably rain after school.",
        translation: "放学后很可能会下雨。"
      },
      {
        id: "probably-2",
        text: "Mia will probably finish her book tonight.",
        translation: "Mia 今晚很可能会把书看完。"
      }
    ],
    synonymCardIds: ["probably-possibly"]
  },
  {
    id: "possibly",
    curriculumWeekId: weekId,
    word: "possibly",
    lemma: "possibly",
    partOfSpeech: "adverb",
    phonetic: "/ˈpɑː.sə.bli/",
    chineseMeaning: "也许；有可能",
    childEnglishMeaning: "表示事情有这个可能，但语气更弱，没有那么确定。",
    usageTip: "当可能性比较小，或者你不太确定时，用 possibly。",
    collocations: ["could possibly", "possibly help", "possibly be"],
    exampleSentences: [
      {
        id: "possibly-1",
        text: "We could possibly go to the park if the sky clears.",
        translation: "如果天放晴，我们也许可以去公园。"
      },
      {
        id: "possibly-2",
        text: "Sam can possibly fix the toy after dinner.",
        translation: "Sam 晚饭后也许能修好玩具。"
      }
    ],
    synonymCardIds: ["probably-possibly"]
  },
  {
    id: "cheerful",
    curriculumWeekId: weekId,
    word: "cheerful",
    lemma: "cheerful",
    partOfSpeech: "adjective",
    phonetic: "/ˈtʃɪr.fəl/",
    chineseMeaning: "快乐的；让人愉快的",
    childEnglishMeaning: "形容一个人看起来开朗、友好，让别人也觉得轻松愉快。",
    usageTip: "Cheerful 常用来形容一个人的样子、语气或气氛。",
    collocations: ["cheerful smile", "cheerful voice", "cheerful room"],
    exampleSentences: [
      {
        id: "cheerful-1",
        text: "Our teacher greeted the class with a cheerful smile.",
        translation: "老师带着愉快的笑容迎接同学们。"
      },
      {
        id: "cheerful-2",
        text: "The yellow room feels bright and cheerful.",
        translation: "这间黄色的房间让人觉得明亮又愉快。"
      }
    ],
    synonymCardIds: ["cheerful-happy"]
  },
  {
    id: "happy",
    curriculumWeekId: weekId,
    word: "happy",
    lemma: "happy",
    partOfSpeech: "adjective",
    phonetic: "/ˈhæp.i/",
    chineseMeaning: "高兴的；开心的",
    childEnglishMeaning: "表示内心感到高兴、开心。",
    usageTip: "Happy 是最常见、最日常的“开心”。",
    collocations: ["feel happy", "happy child", "happy news"],
    exampleSentences: [
      {
        id: "happy-1",
        text: "Lena felt happy when her friend shared a snack.",
        translation: "当朋友分享零食时，Lena 感到很开心。"
      },
      {
        id: "happy-2",
        text: "I am happy to see my grandma today.",
        translation: "今天见到奶奶我很高兴。"
      }
    ],
    synonymCardIds: ["cheerful-happy"]
  },
  {
    id: "discover",
    curriculumWeekId: weekId,
    word: "discover",
    lemma: "discover",
    partOfSpeech: "verb",
    phonetic: "/dɪˈskʌv.ɚ/",
    chineseMeaning: "发现",
    childEnglishMeaning: "表示第一次发现新的东西、线索或办法。",
    usageTip: "当你发现了新东西或意外线索时，用 discover。",
    collocations: ["discover a clue", "discover a fact", "discover a place"],
    exampleSentences: [
      {
        id: "discover-1",
        text: "The children discover a tiny frog near the pond.",
        translation: "孩子们在池塘边发现了一只小青蛙。"
      },
      {
        id: "discover-2",
        text: "We discover a better way to sort our cards.",
        translation: "我们发现了一个更好的卡片分类方法。"
      }
    ],
    synonymCardIds: ["discover-notice"]
  },
  {
    id: "notice",
    curriculumWeekId: weekId,
    word: "notice",
    lemma: "notice",
    partOfSpeech: "verb",
    phonetic: "/ˈnoʊ.t̬ɪs/",
    chineseMeaning: "注意到",
    childEnglishMeaning: "表示留心看到本来就在那里的东西或变化。",
    usageTip: "当某样东西引起你的注意时，用 notice。",
    collocations: ["notice a sign", "notice a change", "notice quickly"],
    exampleSentences: [
      {
        id: "notice-1",
        text: "Did you notice the dark clouds over the playground?",
        translation: "你注意到操场上空的乌云了吗？"
      },
      {
        id: "notice-2",
        text: "I notice that my plant needs more water.",
        translation: "我注意到我的植物需要更多的水。"
      }
    ],
    synonymCardIds: ["discover-notice"]
  },
  {
    id: "enormous",
    curriculumWeekId: weekId,
    word: "enormous",
    lemma: "enormous",
    partOfSpeech: "adjective",
    phonetic: "/ɪˈnɔːr.məs/",
    chineseMeaning: "巨大的",
    childEnglishMeaning: "表示特别大，大到让人一下子就注意到。",
    usageTip: "Enormous 比 big 更夸张一点，更有“哇，好大”的感觉。",
    collocations: ["enormous tree", "enormous wave", "enormous backpack"],
    exampleSentences: [
      {
        id: "enormous-1",
        text: "An enormous tree shaded the whole bench.",
        translation: "一棵巨大的树给整张长椅都遮了阴。"
      },
      {
        id: "enormous-2",
        text: "The class built an enormous paper rocket.",
        translation: "全班做了一个巨大的纸火箭。"
      }
    ],
    synonymCardIds: ["enormous-huge"]
  },
  {
    id: "huge",
    curriculumWeekId: weekId,
    word: "huge",
    lemma: "huge",
    partOfSpeech: "adjective",
    phonetic: "/hjuːdʒ/",
    chineseMeaning: "非常大的",
    childEnglishMeaning: "表示比平常大很多，是日常里常见的“大”。",
    usageTip: "Huge 是一个常用词，用来形容很大的东西。",
    collocations: ["huge splash", "huge box", "huge smile"],
    exampleSentences: [
      {
        id: "huge-1",
        text: "A huge box waited by the classroom door.",
        translation: "教室门口放着一个大箱子。"
      },
      {
        id: "huge-2",
        text: "The dog gave us a huge wet lick.",
        translation: "那只狗热情地舔了我们一下。"
      }
    ],
    synonymCardIds: ["enormous-huge"]
  },
  {
    id: "protect",
    curriculumWeekId: weekId,
    word: "protect",
    lemma: "protect",
    partOfSpeech: "verb",
    phonetic: "/prəˈtekt/",
    chineseMeaning: "保护",
    childEnglishMeaning: "表示让人或东西保持安全，不受伤害。",
    usageTip: "当你在防止伤害或危险时，用 protect。",
    collocations: ["protect animals", "protect your skin", "protect the nest"],
    exampleSentences: [
      {
        id: "protect-1",
        text: "We wear hats to protect our heads from the sun.",
        translation: "我们戴帽子来保护头不被太阳晒。"
      },
      {
        id: "protect-2",
        text: "The fence helps protect the garden.",
        translation: "篱笆帮助保护花园。"
      }
    ],
    synonymCardIds: ["protect-guard"]
  },
  {
    id: "guard",
    curriculumWeekId: weekId,
    word: "guard",
    lemma: "guard",
    partOfSpeech: "verb",
    phonetic: "/ɡɑːrd/",
    chineseMeaning: "守护；看守",
    childEnglishMeaning: "表示守着、看着，同时不让危险靠近。",
    usageTip: "Guard 常常带有“守着、盯着、看护着”的感觉。",
    collocations: ["guard the gate", "guard the nest", "guard carefully"],
    exampleSentences: [
      {
        id: "guard-1",
        text: "Two geese guard the nest near the pond.",
        translation: "两只鹅守着池塘边的巢。"
      },
      {
        id: "guard-2",
        text: "Please guard your art project until it dries.",
        translation: "请看好你的美术作品，直到它晾干。"
      }
    ],
    synonymCardIds: ["protect-guard"]
  },
  {
    id: "fragile",
    curriculumWeekId: weekId,
    word: "fragile",
    lemma: "fragile",
    partOfSpeech: "adjective",
    phonetic: "/ˈfrædʒ.əl/",
    chineseMeaning: "易碎的；脆弱的",
    childEnglishMeaning: "表示东西很容易碎、很容易坏，需要轻拿轻放。",
    usageTip: "需要轻拿轻放的东西，可以用 fragile。",
    collocations: ["fragile shell", "fragile glass", "fragile craft"],
    exampleSentences: [
      {
        id: "fragile-1",
        text: "The fragile eggs need a soft box.",
        translation: "这些易碎的鸡蛋需要一个柔软的盒子。"
      },
      {
        id: "fragile-2",
        text: "Please carry the fragile model with two hands.",
        translation: "请双手拿这个易碎的模型。"
      }
    ],
    synonymCardIds: []
  },
  {
    id: "journey",
    curriculumWeekId: weekId,
    word: "journey",
    lemma: "journey",
    partOfSpeech: "noun",
    phonetic: "/ˈdʒɝː.ni/",
    chineseMeaning: "旅程；行程",
    childEnglishMeaning: "表示从一个地方到另一个地方的一段旅程。",
    usageTip: "Journey 比 trip 听起来更像一段完整、特别的旅程。",
    collocations: ["long journey", "safe journey", "begin a journey"],
    exampleSentences: [
      {
        id: "journey-1",
        text: "Our train journey began before sunrise.",
        translation: "我们的火车旅程在日出前开始了。"
      },
      {
        id: "journey-2",
        text: "The butterflies make a long journey every year.",
        translation: "蝴蝶每年都会进行一段漫长的迁徙旅程。"
      }
    ],
    synonymCardIds: []
  }
];

export const synonymCards: SynonymCard[] = [
  {
    id: "probably-possibly",
    wordId: "probably",
    contrastWordId: "possibly",
    title: "probably 和 possibly 的区别",
    differenceSummary:
      "Probably 表示你觉得事情很可能会发生。Possibly 也表示有可能，但语气更弱，没有那么确定。",
    usageTip: "更有把握时选 probably。",
    examples: [
      {
        sentence: "It will probably rain later.",
        translation: "等会儿很可能会下雨。"
      },
      {
        sentence: "We could possibly visit later.",
        translation: "我们晚些时候也许可以去。"
      }
    ]
  },
  {
    id: "cheerful-happy",
    wordId: "cheerful",
    contrastWordId: "happy",
    title: "cheerful 和 happy 的区别",
    differenceSummary:
      "Happy 更像是在说一个人的内心感受。Cheerful 常常是在说别人能看出来的开朗状态。",
    usageTip: "想强调“别人看得出来的愉快”时，用 cheerful。",
    examples: [
      {
        sentence: "I feel happy today.",
        translation: "我今天很开心。"
      },
      {
        sentence: "She gave us a cheerful wave.",
        translation: "她开心地向我们挥了挥手。"
      }
    ]
  },
  {
    id: "discover-notice",
    wordId: "discover",
    contrastWordId: "notice",
    title: "discover 和 notice 的区别",
    differenceSummary:
      "Discover 常用来表示第一次发现新的东西。Notice 是注意到原本就在那里的东西。",
    usageTip: "第一次发现用 discover，留心看到用 notice。",
    examples: [
      {
        sentence: "We discovered a new trail.",
        translation: "我们发现了一条新的小路。"
      },
      {
        sentence: "Did you notice the sign?",
        translation: "你注意到那个标志了吗？"
      }
    ]
  },
  {
    id: "enormous-huge",
    wordId: "enormous",
    contrastWordId: "huge",
    title: "enormous 和 huge 的区别",
    differenceSummary:
      "这两个词都表示很大。Enormous 听起来比 huge 更夸张、更有震撼感。",
    usageTip: "想强调“特别大、很惊人”时，用 enormous。",
    examples: [
      {
        sentence: "An enormous whale rose beside the boat.",
        translation: "一头巨大的鲸鱼在船边浮起。"
      },
      {
        sentence: "We carried a huge bag of balls.",
        translation: "我们搬了一个很大的球袋。"
      }
    ]
  },
  {
    id: "protect-guard",
    wordId: "protect",
    contrastWordId: "guard",
    title: "protect 和 guard 的区别",
    differenceSummary:
      "Protect 是让某人或某物保持安全。Guard 是在保护的同时，还带有看守、守着的意思。",
    usageTip: "有“守着看护”的感觉时，用 guard。",
    examples: [
      {
        sentence: "Trees protect animals from heat.",
        translation: "树木保护动物免受炎热。"
      },
      {
        sentence: "The dog guards the gate.",
        translation: "狗守着大门。"
      }
    ]
  }
];

export function getCurrentWeek() {
  return curriculumWeeks[0];
}

export function getWeekByRoute(grade: number, unit: number, week: number) {
  return curriculumWeeks.find(
    (entry) =>
      entry.grade === grade && entry.unit === unit && entry.week === week
  );
}

export function getWordsForWeek(curriculumWeekId: string) {
  return wordEntries.filter((entry) => entry.curriculumWeekId === curriculumWeekId);
}

export function getWordById(wordId: string) {
  return wordEntries.find((entry) => entry.id === wordId);
}

export function getSynonymCardById(cardId: string) {
  return synonymCards.find((entry) => entry.id === cardId);
}

export function getSynonymCardsForWord(wordId: string) {
  return synonymCards.filter(
    (entry) => entry.wordId === wordId || entry.contrastWordId === wordId
  );
}

export function getWordLookup(normalized: string) {
  return wordEntries.find((entry) => {
    return (
      entry.word.toLowerCase() === normalized ||
      entry.lemma.toLowerCase() === normalized
    );
  });
}

export function tokenizeSentence(sentence: ExampleSentence): SentenceToken[] {
  const parts = sentence.text.match(/[A-Za-z']+|[.,!?;]/g) ?? [];

  return parts.map((part) => {
    const normalized = part.toLowerCase().replace(/[^a-z']/g, "");

    return {
      text: part,
      normalized,
      lookup: normalized.length > 0
    };
  });
}
