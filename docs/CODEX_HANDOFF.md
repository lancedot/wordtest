# Codex Handoff Brief

## What To Build

Build an MVP web app for children to study elementary English vocabulary aligned to the `Wonders` curriculum.

The product should support:

- Browse by grade, unit, and week
- View a weekly word list
- Open a word detail page with pronunciation, meanings, and example sentences
- Click words inside example sentences to see lightweight lookup details
- View at least a few synonym difference cards
- Practice words with short quizzes
- Save mastery and review progress locally
- Show a simple parent summary page

## Product Feel

The UI should feel:

- friendly
- calm
- easy for children
- simple enough for parents to guide

Avoid making it feel like a dense dictionary or a harsh exam interface.

## MVP Scope

Use local seed data only for the first version.

Seed target:

- 1 grade
- 1 unit
- 1 week
- 10 to 15 words
- 2 to 3 synonym contrast pairs
- a small set of practice items

## Recommended Technical Choices

- `Next.js`
- `TypeScript`
- `Prisma`
- `SQLite`

If a lighter implementation is easier, local JSON content is acceptable for the first milestone.

## Must-Have Features

## 1. Curriculum Navigation

- Home page with grade and week entry points
- Week page with word cards and mastery states

## 2. Word Page

- Show word, part of speech, phonetic, Chinese meaning, child-friendly English meaning
- Show example sentences
- Support token-based click lookup in example sentences

## 3. Synonym Cards

- At least one polished comparison such as `probably` vs `possibly`
- Explain difference in child-friendly language

## 4. Practice Flow

- Multiple-choice and fill-in style questions
- Friendly feedback
- Progress persistence

## 5. Review

- Track due words
- Retry incorrect words sooner

## 6. Parent Summary

- Show total studied
- Show weak words
- Show confusion pairs

## Content Rules

- Do not ship copied textbook passages unless the project owner provides rights-cleared source text
- Prefer original example sentences and explanations
- Keep wording simple and child-friendly

## Interaction Rules

- Large tap targets
- Mobile-friendly layout
- Minimal text per screen
- No deep drill-down loops for lookup
- Keep each practice set short

## Acceptance Criteria

- A user can complete the loop: choose week -> study words -> answer practice -> review mistakes
- Example sentence lookup works for tokenized words
- Progress persists across refresh
- Synonym difference explanation is understandable and visible in product

## Build Order

1. Scaffold app and routing
2. Add seed data and weekly word list
3. Build word detail page and sentence lookup
4. Build practice engine and persistence
5. Add review logic
6. Add parent summary

## Files To Read First

- `README.md`
- `docs/PRD.md`
- `docs/CONTENT_SPEC.md`
- `docs/TECH_PLAN.md`

## Suggested First Prompt For Codex

```text
Read README.md and the docs folder, then scaffold the MVP web app described there.

Requirements:
- Use Next.js + TypeScript
- Start with local seed data only
- Build a child-friendly interface for Wonders vocabulary study
- Implement grade/unit/week navigation
- Implement a weekly word list and word detail page
- Support clickable tokens in example sentences for lightweight lookup
- Add at least one synonym contrast card
- Implement a short quiz flow with local progress persistence
- Add a simple review queue and a parent summary page

Before coding, summarize the app structure you plan to create. Then implement milestone by milestone and verify the app runs locally.
```

## Suggested Second Prompt For Content Expansion

```text
Using docs/CONTENT_SPEC.md as the source of truth, expand the seed content set for the app.

Requirements:
- Keep content child-friendly
- Add original example sentences only
- Add 10 more words and 10 to 20 practice items
- Add 2 more synonym contrast cards
- Validate all entries against the documented schema
```
