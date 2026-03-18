# Technical Plan

## Goal

Build a simple, reliable MVP that is easy for Codex to scaffold and extend.

## Recommended Stack

- Frontend: `Next.js` with `TypeScript`
- UI: simple responsive web app
- Styling: `Tailwind CSS` or CSS modules
- State: server state + local component state
- Database: `SQLite` for local MVP, with future upgrade path to `PostgreSQL`
- ORM: `Prisma`
- Content format: JSON seed files or database seed scripts
- Audio: local or hosted mp3 assets

This stack is recommended because it is easy to run locally, easy to iterate on, and a good fit for structured content plus lightweight practice logic.

## Recommended App Sections

- `/`: home dashboard
- `/curriculum/[grade]`: grade page
- `/curriculum/[grade]/unit/[unit]/week/[week]`: weekly word list
- `/word/[wordId]`: word detail page
- `/review`: daily review queue
- `/practice/[setId]`: practice session
- `/parent`: parent summary page

## Core Data Entities

### CurriculumWeek

- `id`
- `curriculum`
- `grade`
- `unit`
- `week`
- `title`

### WordEntry

- `id`
- `curriculumWeekId`
- `word`
- `lemma`
- `partOfSpeech`
- `phonetic`
- `chineseMeaning`
- `childEnglishMeaning`
- `audioUrl`
- `imageUrl`
- `difficulty`

### ExampleSentence

- `id`
- `wordEntryId`
- `text`
- `translation`
- `tokensJson`

### SynonymCard

- `id`
- `wordEntryId`
- `contrastWordId`
- `differenceSummary`
- `usageTip`
- `examplesJson`

### PracticeItem

- `id`
- `type`
- `targetWordIdsJson`
- `prompt`
- `contentJson`
- `answerJson`
- `explanation`
- `difficulty`

### UserWordProgress

- `id`
- `userId`
- `wordEntryId`
- `status`
- `masteryScore`
- `timesSeen`
- `timesCorrect`
- `timesWrong`
- `lastStudiedAt`
- `nextReviewAt`
- `confusedWithJson`

## MVP Functional Modules

## 1. Curriculum Browser

Responsibilities:

- List grades
- List units and weeks
- Load weekly words

## 2. Word Study UI

Responsibilities:

- Render word details
- Play pronunciation
- Show examples
- Allow token click lookup

## 3. Lookup Popover

Responsibilities:

- Show short word meaning in context
- Allow adding to unknown list
- Prevent deep navigation explosion

## 4. Practice Engine

Responsibilities:

- Pull active weekly words
- Mix in due review words
- Serve short quiz sets
- Check answers
- Record progress

## 5. Review Scheduler

Responsibilities:

- Decide due items
- Increase review frequency after mistakes
- Track confusing word pairs

Simple MVP rule:

- Correct answer: push next review farther out
- Wrong answer: schedule near-term retry
- Repeated confusion: tag the pair for contrast practice

## 6. Parent Summary

Responsibilities:

- Aggregate progress
- Show recent activity
- Show weak words and confusion pairs

## Suggested Folder Structure

```text
src/
  app/
  components/
  lib/
  content/
  styles/
prisma/
  schema.prisma
  seed.ts
docs/
```

More detail:

- `src/app`: routes and pages
- `src/components`: reusable UI pieces
- `src/lib`: study logic, review logic, and helpers
- `src/content`: JSON or TS seed content during MVP

## Seed Data Strategy

Use a small hand-authored content set first:

- 1 grade
- 1 unit
- 1 week
- 10 to 15 words
- 2 to 3 synonym cards
- 20 to 30 practice items

This is enough to validate the product loop before scaling content.

## Milestone Plan

## Milestone 1: Scaffold

- Initialize Next.js app
- Add routing
- Add base layout and theme
- Create content models

## Milestone 2: Content + Word Page

- Load weekly word list
- Build word detail page
- Render examples and token lookup

## Milestone 3: Practice

- Build practice session flow
- Add answer checking
- Save progress

## Milestone 4: Review

- Add due review queue
- Implement simple review scheduler
- Surface confused word pairs

## Milestone 5: Parent View

- Add overview page
- Show summary metrics

## Quality Checklist

- Mobile-friendly layout
- Large tap targets for children
- Audio buttons work reliably
- No overwhelming text blocks
- Quiz feedback is gentle and encouraging
- Empty states are clear
- Seed content is internally consistent

## Risks

- Curriculum content rights if textbook text is copied directly
- Content production may take longer than coding
- Synonym explanations need careful editorial quality control
- Children's UX needs larger spacing and simpler flows than adult apps

## Recommendation For First Build

Ask Codex to build the MVP with local seed data and no authentication first. Once the learning loop works, add accounts, cloud storage, and larger content imports.
