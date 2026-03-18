# Product Requirements Document

## Product Name

Wonders Vocabulary App

## Product Summary

This is a child-friendly English vocabulary learning app centered on elementary-school vocabulary from the `Wonders` curriculum. The product helps children learn words in context, understand subtle synonym differences, drill vocabulary through short exercises, and review weak words over time.

The app should feel like a patient mini-teacher rather than a dictionary or a test bank.

## Goals

- Help children learn `Wonders` vocabulary in sync with class units
- Teach not only meaning, but also usage and context
- Make example sentences explorable so unfamiliar words can be looked up inline
- Build vocabulary retention with short daily practice and review
- Support parents with simple progress visibility

## Non-Goals For MVP

- Full social features
- Competitive leaderboards
- Advanced teacher classroom management
- OCR import from textbook photos
- Open-ended chat tutor

## Target Users

### Primary User

Elementary-school children using `Wonders`

### Secondary Users

- Parents supervising after-school review
- Tutors who want curriculum-aligned practice

## Product Principles

- Curriculum first: organize content by grade, unit, week, and word list
- Child-first interaction: short sessions, clear language, low cognitive load
- Learn by use: show words in scenes, examples, and contrasts
- Safe exploration: allow inline lookup, but avoid endless branching
- Gentle motivation: encourage progress without pressure

## Core MVP Features

## 1. Curriculum Navigation

The app should support:

- Grade selection
- Unit selection
- Week selection
- A word list for each week

Each word should have a learning status:

- New
- Learning
- Review
- Mastered

## 2. Word Learning Page

Each word page should include:

- Word
- Part of speech
- Pronunciation
- Audio playback button
- Chinese meaning
- Child-friendly English explanation
- One illustration or icon slot
- One to two example sentences
- Common collocations when useful
- Links to related words or confusing synonyms

## 3. Synonym Difference Cards

The app should explain subtle differences between near-synonyms using:

- Meaning difference
- Strength or certainty difference
- Register or tone difference
- Usage scenario difference
- Side-by-side mini examples

Example:

- `probably`: likely, fairly confident
- `possibly`: maybe, less certain

The explanation must be easy enough for a child and parent to read together.

## 4. Click-Through Example Sentences

Words inside example sentences should be clickable.

When clicked, the app should show:

- The word
- Pronunciation
- Meaning in the current sentence
- A short explanation
- Option to add to "My Unknown Words"

To avoid distraction:

- Only one lightweight layer should open by default
- Non-target words should show a shorter summary
- Deep navigation should be limited in MVP

## 5. Practice Modes

The app should generate short practice sessions using the current week's words and prior review words.

MVP practice types:

- Meaning matching
- Listen and choose
- Picture or scene choose
- Fill in the blank
- Choose the better word for a sentence
- Confusing-word drill

## 6. Review System

The app should maintain:

- Today's new words
- Words due for review
- Frequently confused words
- Incorrect answers for retry

Review priority should increase when:

- The child gets a word wrong repeatedly
- The child confuses similar words
- The child hesitates or skips

## 7. Parent Overview

MVP parent view should show:

- Number of words studied
- Current unit progress
- Words frequently missed
- Frequently confused word pairs
- Suggested next activity

## Example User Flows

## Flow 1: Learn New Words

1. Child opens current week
2. App shows 5 to 8 target words
3. Child opens each word card
4. Child listens to audio and reads examples
5. Child completes a short practice set

## Flow 2: Explore a Sentence

1. Child reads example sentence
2. Child taps an unfamiliar word in the sentence
3. App opens a lightweight meaning popover
4. Child adds the word to unknown list if needed

## Flow 3: Review Weak Words

1. App surfaces today's review list
2. Child completes 5-minute review
3. Incorrect items go into retry queue
4. App updates mastery level

## MVP Success Criteria

- A parent can navigate to a specific grade, unit, and week
- A child can study a weekly word list without needing a dictionary
- A child can tap unknown words inside examples and understand them quickly
- The app can show at least one synonym distinction card
- The app can generate practice from the active word set
- The system can save progress and schedule review

## Content Constraints

- Do not depend on copying copyrighted textbook example sentences into the shipped app unless the user provides rights-cleared source material
- Prefer original example sentences authored for the product
- Store source provenance for imported vocabulary lists

## Nice-To-Have After MVP

- Story mode using weekly words in a mini narrative
- Speech practice with pronunciation feedback
- Printable parent worksheets
- Teacher dashboard
- Personalized daily plan
