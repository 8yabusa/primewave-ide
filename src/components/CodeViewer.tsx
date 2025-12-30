// src/components/CodeViewer.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Prism from "prismjs";

// 必要な言語を読み込み（使うものだけ）
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-bash";

// テーマCSS（背景は後で透明化する）
import "prismjs/themes/prism-tomorrow.css";

import type { Lang } from "@/lib/types";

export default function CodeViewer({
  code,
  language,
}: {
  code: string;
  language: Lang;
}) {
  const prismLang = useMemo(() => {
    switch (language) {
      case "ts":
        return "typescript";
      case "sql":
        return "sql";
      case "md":
        return "markdown";
      case "http":
        return "bash"; // 雰囲気優先
      default:
        return "clike";
    }
  }, [language]);

  const [activeLine, setActiveLine] = useState<number>(1);

  // codeが変わったらカーソル行を先頭に戻す（好みで維持でもOK）
  useEffect(() => {
    setActiveLine(1);
  }, [code]);

  // PrismでHTML生成（重要：highlightAllUnder は不要）
  const highlightedHtml = useMemo(() => {
    const grammar = Prism.languages[prismLang] ?? Prism.languages.clike;
    return Prism.highlight(code, grammar, prismLang);
  }, [code, prismLang]);

  // 1行ずつに分割して描画
  const lines = useMemo(() => {
    // Prismの出力HTMLは \n を保持するので split でOK
    const arr = highlightedHtml.split("\n");
    // 最後が空行だけのケースは表示を整える
    return arr.length === 0 ? [""] : arr;
  }, [highlightedHtml]);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "56px 1fr",
        border: "1px solid rgba(255,255,255,.06)",
        borderRadius: 12,
        overflow: "hidden",
        background: "rgba(13,17,23,.85)",
      }}
    >
      {/* 行番号 */}
      <div
        style={{
          background: "rgba(255,255,255,.02)",
          borderRight: "1px solid rgba(255,255,255,.06)",
          padding: "10px 8px",
          fontFamily: "var(--mono)",
          fontSize: 12,
          color: "rgba(148,163,184,.55)",
          textAlign: "right",
          userSelect: "none",
        }}
      >
        {lines.map((_, i) => {
          const n = i + 1;
          const isActive = n === activeLine;
          return (
            <div
              key={n}
              onClick={() => setActiveLine(n)}
              style={{
                height: 20,
                lineHeight: "20px",
                paddingRight: 6,
                borderRadius: 6,
                cursor: "pointer",
                color: isActive ? "rgba(226,232,240,.95)" : "rgba(148,163,184,.55)",
                background: isActive ? "rgba(56,189,248,.10)" : "transparent",
              }}
              title={`Line ${n}`}
            >
              {String(n).padStart(2, " ")}
            </div>
          );
        })}
      </div>

      {/* コード本体 */}
      <div
        style={{
          padding: "10px 0",
          overflow: "auto",
          fontFamily: "var(--mono)",
          fontSize: 12.5,
          lineHeight: "20px",
        }}
      >
        {lines.map((html, i) => {
          const n = i + 1;
          const isActive = n === activeLine;
          return (
            <div
              key={n}
              onClick={() => setActiveLine(n)}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                padding: "0 12px",
                borderLeft: isActive ? "3px solid rgba(56,189,248,.65)" : "3px solid transparent",
                background: isActive ? "rgba(56,189,248,.08)" : "transparent",
              }}
            >
              <span
                // Prismの行HTMLをそのまま注入
                dangerouslySetInnerHTML={{ __html: html.length ? html : "&nbsp;" }}
              />
            </div>
          );
        })}
      </div>

      {/* PrismテーマをIDE背景に合わせる（背景透明化） */}
      <style jsx global>{`
        /* Prismのデフォ背景を消す */
        pre[class*="language-"], code[class*="language-"] {
          background: transparent !important;
          text-shadow: none !important;
        }
        /* 行内のフォント統一 */
        code[class*="language-"], pre[class*="language-"] {
          font-family: var(--mono) !important;
        }
        /* 行のhover演出（カーソル感） */
        ._code_line:hover {
          background: rgba(255, 255, 255, 0.03);
        }
      `}</style>
    </div>
  );
}
