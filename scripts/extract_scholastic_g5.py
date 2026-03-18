from __future__ import annotations

import json
import re
import sys
from pathlib import Path

from pypdf import PdfReader


LESSONS = [
    (1, "Synonyms", 6),
    (2, "Synonyms", 9),
    (3, "Antonyms", 12),
    (4, "Antonyms", 15),
    (5, "Compound Words", 18),
    (6, "Homophones", 21),
    (7, "Homographs", 24),
    (8, "Eponyms", 27),
    (9, "Words From Other Cultures", 30),
    (10, "Clips", 33),
    (11, "Blends", 36),
    (12, "Collective Nouns", 39),
    (13, "Content Words: Geography", 42),
    (14, "Content Words: Poetry", 45),
    (15, "Funny Words", 48),
    (16, "Latin Roots ped, numer, liber", 51),
    (17, "Latin Roots clar, dict", 54),
    (18, "Greek Word Parts mech, meter, path", 57),
    (19, "Acronyms", 60),
    (20, "British English", 63),
    (21, "Word Stories", 66),
    (22, "Prefixes retro-, ir-, mal-, inter-, ab-", 69),
    (23, "Prefixes bi-, com-, il-, hydro-, mono-", 72),
    (24, "Suffixes -ist, -ic, -ation/-tion, -ism, -ent", 75),
]


def lesson_for_page(page_no: int) -> tuple[int, str]:
    for index, (lesson_no, title, start_page) in enumerate(LESSONS):
        next_start = LESSONS[index + 1][2] if index + 1 < len(LESSONS) else 10**9
        if start_page <= page_no < next_start:
            return lesson_no, title

    raise ValueError(f"No lesson mapping for page {page_no}")


def parse_words(page_text: str) -> list[str]:
    lines = [line.strip() for line in page_text.splitlines() if line.strip()]
    words: list[str] = []

    for line in lines:
        if line.startswith("LESSON") or line.startswith("240 Vocabulary") or line.startswith("If "):
            continue
        if line.startswith("❙") or line.startswith("A ") or line.startswith("An "):
            break

        words.extend(re.findall(r"[A-Za-z]+(?:[-'][A-Za-z]+)?", line))
        if len(words) >= 10:
            return words[:10]

    raise ValueError("Could not parse 10 lesson words from page text")


def parse_word_list_groups(reader: PdfReader) -> dict[int, list[str]]:
    word_list_text = reader.pages[78].extract_text() or ""
    entries = re.findall(r"([A-Za-z\-]+), p\. (\d+)", word_list_text)
    grouped: dict[int, list[str]] = {lesson_no: [] for lesson_no, _, _ in LESSONS}

    for word, page_str in entries:
        lesson_no, _ = lesson_for_page(int(page_str))
        grouped[lesson_no].append(word)

    return grouped


def build_definition_candidates(page_text: str) -> list[str]:
    lines = [line.strip() for line in page_text.replace("“", '"').replace("”", '"').splitlines() if line.strip()]
    definition_lines: list[str] = []
    in_definition_zone = False

    for line in lines:
        if line.startswith("240 Vocabulary") or re.fullmatch(r"\d+", line):
            continue

        if not in_definition_zone:
            if line.startswith("❙") or line.upper().startswith("A SYNONYM") or line.upper().startswith("AN ANTONYM"):
                in_definition_zone = True
            continue

        if line.startswith("A.") or line.startswith("B.") or line.startswith("Writing to"):
            break

        if line.startswith("LESSON") or line.startswith("NAME") or line.startswith("❙"):
            continue

        definition_lines.append(line)

    definition_text = " ".join(definition_lines)
    return [
        sentence.strip()
        for sentence in re.findall(r'.+?[.!?]["\']?(?=\s+|$)', definition_text)
        if sentence.strip()
    ]


def build_full_text_candidates(page_text: str) -> list[str]:
    normalized = re.sub(r"\s+", " ", page_text.replace("“", '"').replace("”", '"')).strip()
    return [
        sentence.strip()
        for sentence in re.findall(r'.+?[.!?]["\']?(?=\s+|$)', normalized)
        if sentence.strip()
    ]


def clean_definition_candidate(word: str, sentence: str) -> str:
    patterns = [
        rf"({re.escape(word)} means \"[^\"]+\"\.?)",
        rf"(A[n]? {re.escape(word)} is .+?[.!?])",
        rf"(If you {re.escape(word)} .+?[.!?])",
        rf"(When you {re.escape(word)} .+?[.!?])",
        rf"(When you are .+?, you are {re.escape(word)}\.?)",
        rf"(When someone is {re.escape(word)}, .+?[.!?])",
        rf"(When something is {re.escape(word)}, .+?[.!?])",
        rf"({re.escape(word)}s? are .+?[.!?])",
    ]

    for pattern in patterns:
        match = re.search(pattern, sentence, re.IGNORECASE)
        if match:
            return match.group(1).strip()

    return sentence.strip()


def get_definition_sentence(
    word: str,
    lesson_words: list[str],
    sentences: list[str],
    extra_sentences: list[str],
) -> str:
    pattern = re.compile(rf"\b{re.escape(word)}\b", re.IGNORECASE)
    candidates: list[tuple[int, str]] = []

    def score_sentence(sentence: str) -> int:
        score = 0
        cleaned = clean_definition_candidate(word, sentence)
        if cleaned != sentence.strip():
            score += 4
        if re.search(rf"{re.escape(word)} means", cleaned, re.IGNORECASE):
            score += 3
        if re.search(rf"A[n]? {re.escape(word)} is", cleaned, re.IGNORECASE):
            score += 3
        if re.search(rf"If you {re.escape(word)}", cleaned, re.IGNORECASE):
            score += 3
        if re.search(rf"When .*{re.escape(word)}", cleaned, re.IGNORECASE):
            score += 2
        scoring_text = cleaned if cleaned != sentence.strip() else sentence
        if "NAME" in scoring_text or "LESSON" in scoring_text or "240 Vocabulary" in scoring_text:
            score -= 5
        if "❙" in scoring_text:
            score -= 3

        word_hits = sum(
            1 for lesson_word in lesson_words
            if re.search(rf"\b{re.escape(lesson_word)}\b", scoring_text, re.IGNORECASE)
        )
        if word_hits > 1:
            score -= 4

        return score

    for sentence in [*sentences, *extra_sentences]:
        if not pattern.search(sentence):
            continue
        if len(sentence.split()) < 2:
            continue
        candidates.append((score_sentence(sentence), clean_definition_candidate(word, sentence)))

    if candidates:
        candidates.sort(key=lambda item: item[0], reverse=True)
        return candidates[0][1]

    return f"This lesson introduces the word {word}."


def get_gloss(definition_sentence: str) -> str:
    patterns = [
        r'means "([^"]+)"',
        r"If you [^,]+, you ([^.]+)",
        r"If [^,]+, it is ([^.]+)",
        r"When you are ([^,]+), you are [^.]+",
        r"When you are [^,]+, you're ([^.]+)",
        r"When something is [^,]+, it is ([^.]+)",
        r"is an? ([^.]+)",
        r"it is ([^.]+)",
        r"means ([^.]+)",
    ]

    for pattern in patterns:
        match = re.search(pattern, definition_sentence, re.IGNORECASE)
        if match:
            return match.group(1).strip(" .")

    return definition_sentence.strip(" .")


def main() -> int:
    if len(sys.argv) != 3:
        print("Usage: python scripts/extract_scholastic_g5.py <input-pdf> <output-json>")
        return 1

    input_pdf = Path(sys.argv[1])
    output_json = Path(sys.argv[2])

    reader = PdfReader(str(input_pdf))
    word_list_groups = parse_word_list_groups(reader)
    rows: list[dict[str, str]] = []
    for lesson_no, lesson_title, start_page in LESSONS:
        page_text = reader.pages[start_page].extract_text() or ""
        lesson_words = word_list_groups.get(lesson_no, [])
        if len(lesson_words) != 10:
            lesson_words = parse_words(page_text)
        sentences = build_definition_candidates(page_text)
        extra_sentences: list[str] = []
        for offset in range(3):
            lesson_page_index = start_page + offset
            if lesson_page_index >= len(reader.pages):
                continue
            extra_sentences.extend(build_full_text_candidates(reader.pages[lesson_page_index].extract_text() or ""))

        for word in lesson_words:
            definition_sentence = get_definition_sentence(
                word,
                lesson_words,
                sentences,
                extra_sentences,
            )
            gloss = get_gloss(definition_sentence)
            rows.append(
                {
                    "curriculum": "scholastic-g5",
                    "grade": 5,
                    "unit": 1,
                    "week": lesson_no,
                    "lesson_title": lesson_title,
                    "word": word,
                    "lemma": word.lower(),
                    "part_of_speech": "word",
                    "phonetic": "",
                    "chinese_meaning": f"书中释义：{gloss}",
                    "child_friendly_explanation": (
                        f"在词汇书 Lesson {lesson_no} 里，{word} 的解释是：{definition_sentence}"
                    ),
                    "usage_tip": f"这一课属于 {lesson_title}，先结合词汇书解释认识这个词。",
                    "source_definition": definition_sentence,
                    "example_sentence": "",
                    "example_translation": ""
                }
            )

    output_json.parent.mkdir(parents=True, exist_ok=True)
    output_json.write_text(json.dumps(rows, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote {len(rows)} rows to {output_json}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
