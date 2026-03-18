# Content Specification

## Purpose

This document defines how vocabulary content should be structured for the app.

## Word Entry Schema

Each vocabulary entry should support the following fields.

```json
{
  "id": "g3-u2-w1-probably",
  "curriculum": "wonders",
  "grade": 3,
  "unit": 2,
  "week": 1,
  "word": "probably",
  "lemma": "probably",
  "partOfSpeech": "adverb",
  "phonetic": "/ˈprɑː.bə.bli/",
  "audioUrl": "",
  "cefrHint": "A2",
  "chineseMeaning": "很可能；大概",
  "childEnglishMeaning": "If something will probably happen, it is likely to happen.",
  "collocations": [
    "will probably",
    "probably go",
    "probably true"
  ],
  "exampleSentences": [
    {
      "id": "ex-1",
      "text": "It will probably rain after school.",
      "translation": "放学后很可能会下雨。",
      "tokens": [
        { "text": "It", "lookup": true },
        { "text": "will", "lookup": true },
        { "text": "probably", "lookup": false },
        { "text": "rain", "lookup": true },
        { "text": "after", "lookup": true },
        { "text": "school", "lookup": true },
        { "text": ".", "lookup": false }
      ]
    }
  ],
  "synonymCards": [
    {
      "pairId": "probably-possibly",
      "word": "probably",
      "contrastWord": "possibly",
      "differenceSummary": "Probably means you think something is likely. Possibly means it may happen, but you are less sure.",
      "usageTip": "Use probably when you feel more confident.",
      "examples": [
        "She will probably finish today.",
        "She could possibly finish today."
      ]
    }
  ],
  "imageUrl": "",
  "difficulty": 2,
  "tags": [
    "certainty",
    "adverb"
  ],
  "source": {
    "type": "imported_word_list",
    "name": "Wonders Grade 3 Unit 2 Week 1",
    "notes": "Vocabulary list only. Product examples are original."
  }
}
```

## Required Fields For MVP

- `id`
- `curriculum`
- `grade`
- `unit`
- `week`
- `word`
- `partOfSpeech`
- `phonetic`
- `chineseMeaning`
- `childEnglishMeaning`
- `exampleSentences`

## Optional Fields For MVP

- `audioUrl`
- `collocations`
- `synonymCards`
- `imageUrl`
- `difficulty`
- `tags`
- `source`

## Sentence Token Rules

Each example sentence should be tokenized so the UI can support click-through lookup.

Rules:

- Keep punctuation as separate tokens when practical
- Mark whether a token should be lookup-enabled
- The current target word can be displayed but does not need to be lookup-enabled
- Multi-word phrases may later need grouped token support, but MVP can use single-word tokens only

## Synonym Card Rules

A synonym card should answer these child-level questions:

- Are these words exactly the same
- Which one sounds stronger or weaker
- Which one fits this sentence better
- When do people use one more often than the other

Each card should contain:

- `word`
- `contrastWord`
- `differenceSummary`
- `usageTip`
- Two minimal example sentences

## Writing Rules For Child-Friendly Explanations

- Use short sentences
- Avoid dictionary-style wording
- Prefer concrete situations over abstract definitions
- Use everyday school, home, park, weather, and story contexts
- Keep tone supportive and simple

Bad:

- "Possibly denotes epistemic uncertainty."

Good:

- "Possibly means maybe. You are not very sure."

## Practice Item Schema

```json
{
  "id": "quiz-g3-u2-w1-001",
  "type": "choose_better_word",
  "targetWordIds": [
    "g3-u2-w1-probably",
    "g3-u2-w1-possibly"
  ],
  "prompt": "Which word fits best?",
  "sentence": "It will ____ rain later, so take your umbrella.",
  "choices": [
    "probably",
    "possibly"
  ],
  "answer": "probably",
  "explanation": "Probably fits because the sentence sounds more confident.",
  "difficulty": 2,
  "source": "generated_from_synonym_card"
}
```

## Practice Types For MVP

- `meaning_match`
- `listen_choose`
- `picture_choose`
- `fill_blank`
- `choose_better_word`
- `confusing_words_drill`

## Progress Model

Each user-word record should track:

```json
{
  "wordId": "g3-u2-w1-probably",
  "status": "learning",
  "masteryScore": 42,
  "timesSeen": 5,
  "timesCorrect": 3,
  "timesWrong": 2,
  "lastStudiedAt": "2026-03-16T10:00:00Z",
  "nextReviewAt": "2026-03-17T10:00:00Z",
  "confusedWith": [
    "g3-u2-w1-possibly"
  ]
}
```

## Content Pipeline Recommendation

1. Import a rights-cleared weekly word list
2. Add child-friendly meanings
3. Author original example sentences
4. Add tokenization for sentence lookup
5. Add synonym cards for confusing words
6. Generate or author quiz items
7. Validate required fields before publishing

## Editorial Warning

Because `Wonders` is a commercial curriculum, the app should avoid shipping copied textbook passages or sentences unless the project owner has the right to do so. The safer approach is:

- import only the word list metadata
- author original explanations and example sentences
- store source notes for each entry
