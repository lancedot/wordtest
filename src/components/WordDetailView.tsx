"use client";

import Link from "next/link";
import { useState } from "react";
import { tokenizeSentence } from "@/content/wonders";
import { ExampleSentence, SynonymCard, WordEntry } from "@/lib/types";
import { markSavedForReview, recordExposure } from "@/lib/progress";

type WordDetailViewProps = {
  word: WordEntry;
  cards: SynonymCard[];
  lookupWords: WordEntry[];
};

type LookupState = {
  token: string;
  wordId?: string;
  sentenceId: string;
  sentenceText: string;
  sentenceTranslation: string;
};

export function WordDetailView({ word, cards, lookupWords }: WordDetailViewProps) {
  const [lookup, setLookup] = useState<LookupState | null>(null);
  const [saved, setSaved] = useState(false);

  const resolveWordById = (wordId: string) => {
    return lookupWords.find((entry) => entry.id === wordId);
  };

  const getWordLookup = (normalized: string) => {
    return lookupWords.find((entry) => {
      return (
        entry.word.toLowerCase() === normalized ||
        entry.lemma.toLowerCase() === normalized
      );
    });
  };

  function handleLookup(
    tokenText: string,
    normalized: string,
    sentence: ExampleSentence
  ) {
    if (!normalized) {
      return;
    }

    const matchedWord = getWordLookup(normalized);
    setLookup({
      token: tokenText,
      wordId: matchedWord?.id,
      sentenceId: sentence.id,
      sentenceText: sentence.text,
      sentenceTranslation: sentence.translation
    });
  }

  function handleSpeak() {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      return;
    }

    const utterance = new SpeechSynthesisUtterance(word.word);
    utterance.lang = "en-US";
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    recordExposure(word.id);
  }

  function saveForReview() {
    markSavedForReview(word.id);
    setSaved(true);
  }

  const lookupWord = lookup?.wordId ? resolveWordById(lookup.wordId) : undefined;

  return (
    <div className="section-stack">
      <section className="hero two-column">
        <div>
          <div className="pill-row">
            <span className="tiny-pill">{word.partOfSpeech}</span>
            <span className="pill">{word.phonetic}</span>
          </div>
          <h1>{word.word}</h1>
          <p>{word.chineseMeaning}</p>
          <p className="section-intro" style={{ whiteSpace: "pre-line" }}>
            {word.childEnglishMeaning}
          </p>
          <p className="muted">{word.usageTip}</p>
          <div className="button-row">
            <button className="audio-button" onClick={handleSpeak} type="button">
              播放发音
            </button>
            <button className="button-secondary" onClick={saveForReview} type="button">
              {saved ? "已加入复习" : "加入复习"}
            </button>
          </div>
        </div>
        <div className="summary-card">
          <h3>常见搭配</h3>
          {word.collocations.length > 0 ? (
            <div className="pill-row">
              {word.collocations.map((collocation) => (
                <span key={collocation} className="pill">
                  {collocation}
                </span>
              ))}
            </div>
          ) : (
            <p className="muted">这一词卡先用例句帮助理解，常见搭配会继续补充。</p>
          )}
        </div>
      </section>

      <section className="two-column">
        <div className="section-card">
          <h3>例句</h3>
          <div className="sentence-list">
            {word.exampleSentences.map((sentence) => {
              const tokens = tokenizeSentence(sentence);

              return (
                <div className="sentence-item" key={sentence.id}>
                  <div className="token-row">
                    {tokens.map((token, index) => (
                      <button
                        className={`token-button ${token.lookup ? "lookup" : ""}`}
                        key={`${sentence.id}-${token.text}-${index}`}
                        onClick={() => handleLookup(token.text, token.normalized, sentence)}
                        type="button"
                      >
                        {token.text}
                      </button>
                    ))}
                  </div>
                  <p className="muted">整句中文：{sentence.translation}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="section-card">
          <h3>点词查询</h3>
          {lookup ? (
            <div className="lookup-card">
              <h4>{lookup.token}</h4>
              {lookupWord ? (
                <>
                  <p>
                    在这句话里，<strong>{lookupWord.word}</strong> 可以先理解成
                    {` ${lookupWord.chineseMeaning}`}
                  </p>
                  <p className="muted" style={{ whiteSpace: "pre-line" }}>
                    {lookupWord.childEnglishMeaning}
                  </p>
                  <div className="button-row">
                    <Link href={`/word/${lookupWord.id}`} className="button-secondary">
                      打开单词页
                    </Link>
                    <button
                      className="button-secondary"
                      onClick={() => {
                        markSavedForReview(lookupWord.id);
                      }}
                      type="button"
                    >
                      加入生词本
                    </button>
                  </div>
                  <div className="lookup-context">
                    <strong>所在例句</strong>
                    <p>{lookup.sentenceText}</p>
                    <p className="muted">整句中文：{lookup.sentenceTranslation}</p>
                  </div>
                </>
              ) : (
                <>
                  <p>
                    这个词暂时不在当前词库里，这里先停在当前句子，不再继续展开。
                  </p>
                  <p className="muted">
                    这样能把注意力留在眼前这句话上，不容易越点越分心。
                  </p>
                  <div className="lookup-context">
                    <strong>所在例句</strong>
                    <p>{lookup.sentenceText}</p>
                    <p className="muted">整句中文：{lookup.sentenceTranslation}</p>
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="lookup-card">
              <p>
                点一下例句里的词，这里就会显示它在当前句子里的快速解释。
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="section-card">
        <h3>近义词辨析卡</h3>
        <div className="card-list">
          {cards.map((card) => {
            const contrastWord = resolveWordById(
              card.wordId === word.id ? card.contrastWordId : card.wordId
            );

            return (
              <div className="contrast-item" key={card.id}>
                <strong>{card.title}</strong>
                <p className="muted">{card.differenceSummary}</p>
                <p>{card.usageTip}</p>
                {contrastWord ? (
                  <Link href={`/word/${contrastWord.id}`} className="button-secondary">
                    对比 {contrastWord.word}
                  </Link>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
