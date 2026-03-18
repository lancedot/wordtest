"use client";

import { ChangeEvent, useEffect, useState } from "react";

type ImportedRow = {
  curriculum: string;
  grade: number;
  unit: number;
  week: number;
  word: string;
};

const template = `curriculum,grade,unit,week,word,lemma,part_of_speech,phonetic,chinese_meaning,child_friendly_explanation,usage_tip
scholastic-g5,5,1,1,variable,variable,word,,书中释义：changeable,在词汇书 Lesson 1 里，variable 的解释是：Variable means "changeable.",这一课属于 Synonyms，先结合词汇书解释认识这个词。
scholastic-g5,5,1,1,novice,novice,word,,书中释义：beginner,在词汇书 Lesson 1 里，novice 的解释是：A novice is a beginner.,这一课属于 Synonyms，先结合词汇书解释认识这个词。`;

export function ImportVocabularyPanel() {
  const [csvText, setCsvText] = useState(template);
  const [mode, setMode] = useState<"append" | "replace">("append");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [rows, setRows] = useState<ImportedRow[]>([]);

  async function loadRows() {
    const response = await fetch("/api/import");
    const data = (await response.json()) as { rows: ImportedRow[] };
    setRows(data.rows);
  }

  useEffect(() => {
    void loadRows();
  }, []);

  async function handleImport() {
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/import", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          csvText,
          mode
        })
      });

      const data = (await response.json()) as {
        error?: string;
        imported?: number;
        total?: number;
      };

      if (!response.ok) {
        throw new Error(data.error ?? "导入失败。");
      }

      setMessage(`导入成功：新增 ${data.imported} 行，当前共 ${data.total} 行。`);
      await loadRows();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "导入失败。");
    } finally {
      setLoading(false);
    }
  }

  async function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const text = await file.text();
    setCsvText(text);
    setMessage(`已读取文件：${file.name}`);
  }

  return (
    <div className="section-stack">
      <section className="hero hero-grid">
        <div>
          <span className="tiny-pill">词汇导入</span>
          <h1>导入词汇表</h1>
          <p>
            支持导入 CSV 格式的词表。导入后，新的年级 / 单元 / lesson 会自动显示在首页。
          </p>
        </div>
        <div className="summary-card">
          <h3>导入要求</h3>
          <div className="stat-list">
            <div className="stat-item">
              <strong>1. 使用模板表头</strong>
              <p className="muted">字段顺序可以保留模板默认顺序。</p>
            </div>
            <div className="stat-item">
              <strong>2. 一行一个单词</strong>
              <p className="muted">按年级、单元、周次或 lesson 来组织。</p>
            </div>
            <div className="stat-item">
              <strong>3. 例句可后补</strong>
              <p className="muted">当前版本会自动生成占位例句。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="two-column">
        <div className="section-card">
          <h3>导入内容</h3>
          <p className="section-intro">
            你可以直接粘贴 CSV，也可以先选择本地文件。
          </p>
          <div className="button-row">
            <label className="button-secondary">
              选择 CSV 文件
              <input
                type="file"
                accept=".csv,text/csv"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
            </label>
            <button
              type="button"
              className={`button-secondary ${mode === "append" ? "" : ""}`}
              onClick={() => setMode("append")}
            >
              追加导入
            </button>
            <button
              type="button"
              className="button-secondary"
              onClick={() => setMode("replace")}
            >
              覆盖导入
            </button>
          </div>
          <textarea
            value={csvText}
            onChange={(event) => setCsvText(event.target.value)}
            style={{
              width: "100%",
              minHeight: "360px",
              marginTop: "1rem",
              borderRadius: "20px",
              padding: "1rem",
              border: "1px solid rgba(29,42,53,0.12)",
              fontFamily: "Consolas, monospace",
              fontSize: "0.95rem"
            }}
          />
          <div className="button-row">
            <button className="button" type="button" onClick={handleImport} disabled={loading}>
              {loading ? "导入中..." : "开始导入"}
            </button>
          </div>
          {message ? <p className="section-intro">{message}</p> : null}
        </div>

        <div className="section-card">
          <h3>当前已导入词条</h3>
          {rows.length > 0 ? (
            <div className="card-list">
              {rows.slice(0, 12).map((row, index) => (
                <div className="contrast-item" key={`${row.word}-${index}`}>
                  <strong>{row.word}</strong>
                  <p className="muted">
                    {row.grade} 年级 · 第 {row.unit} 单元 · 第 {row.week} 课
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p>还没有导入词条。你可以先用模板试一小批。</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
