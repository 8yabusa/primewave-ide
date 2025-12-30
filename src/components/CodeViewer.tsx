// src/components/CodeViewer.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Prism from "prismjs";

import "prismjs/components/prism-typescript";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-bash";
import "prismjs/themes/prism-tomorrow.css";

import type { Lang } from "@/lib/types";

export default function CodeViewer({ code, language }: { code: string; language: Lang }) {
  const prismLang = useMemo(() => {
    switch (language) {
      case "ts":
        return "typescript";
      case "sql":
        return "sql";
      case "md":
        return "markdown";
      case "http":
        return "bash";
      default:
        return "clike";
    }
  }, [language]);

  const [activeLine, setActiveLine] = useState<number>(1);

  // ✅ エディタ全体のフォーカス管理
  const editorRef = useRef<HTMLDivElement | null>(null);

  // ✅ 行DOM参照（アクティブ行へスクロールするため）
  const lineRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  // codeが変わったら先頭に戻す（好みで維持でもOK）
  useEffect(() => {
    setActiveLine(1);
  }, [code]);

  // PrismでHTML生成
  const highlightedHtml = useMemo(() => {
    const grammar = Prism.languages[prismLang] ?? Prism.languages.clike;
    return Prism.highlight(code, grammar, prismLang);
  }, [code, prismLang]);

  const lines = useMemo(() => {
    const arr = highlightedHtml.split("\n");
    return arr.length ? arr : [""];
  }, [highlightedHtml]);

  const maxLine = lines.length;

  // ✅ アクティブ行が変わったら、見える位置にスクロール
  useEffect(() => {
    const el = lineRefs.current.get(activeLine);
    if (!el) return;
    el.scrollIntoView({ block: "nearest", inline: "nearest" });
  }, [activeLine]);

  function moveTo(next: number) {
    const clamped = Math.max(1, Math.min(maxLine, next));
    setActiveLine(clamped);
  }

  function onKeyDown(e: React.KeyboardEvent) {
    // 入力系要素での干渉を避けたいならここで判定してもOK
    // 今回はEditorフォーカス時だけなのでそのまま処理

    if (e.key === "ArrowUp") {
      e.preventDefault();
      moveTo(activeLine - 1);
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      moveTo(activeLine + 1);
      return;
    }
    if (e.key === "PageUp") {
      e.preventDefault();
      moveTo(activeLine - 15);
      return;
    }
    if (e.key === "PageDown") {
      e.preventDefault();
      moveTo(activeLine + 15);
      return;
    }
    if (e.key === "Home") {
      e.preventDefault();
      moveTo(1);
      return;
    }
    if (e.key === "End") {
      e.preventDefault();
      moveTo(maxLine);
      return;
    }

    // 追加でIDEっぽく：j/kでも動く（任意）
    if (e.key === "j" && (e.metaKey || e.ctrlKey) === false && !e.altKey) {
      // ただし、文字入力と競合するので基本OFFでもOK
      // 今は無効化（コメント外すと有効）
      // e.preventDefault(); moveTo(activeLine + 1);
    }
  }

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
              onClick={() => {
                setActiveLine(n);
                editorRef.current?.focus(); // ✅ クリックしたらフォーカスもEditorへ
              }}
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

      {/* コード本体（ここがキーボード操作の対象） */}
      <div
        ref={editorRef}
        tabIndex={0} // ✅ これでフォーカス可能になる
        onKeyDown={onKeyDown}
        onClick={() => editorRef.current?.focus()}
        style={{
          padding: "10px 0",
          overflow: "auto",
          outline: "none",
          fontFamily: "var(--mono)",
          fontSize: 12.5,
          lineHeight: "20px",
          // フォーカスリング（IDEっぽく控えめ）
          boxShadow: "inset 0 0 0 1px transparent",
        }}
      >
        {lines.map((html, i) => {
          const n = i + 1;
          const isActive = n === activeLine;
          return (
            <div
              key={n}
              ref={(el) => {
                if (!el) return;
                lineRefs.current.set(n, el);
              }}
              onMouseDown={(e) => {
                // クリックで行移動（ドラッグ選択の邪魔を減らすため mouseDown）
                if (e.button !== 0) return;
                setActiveLine(n);
              }}
              className="_code_line"
              style={{
                padding: "0 12px",
                borderLeft: isActive ? "3px solid rgba(56,189,248,.65)" : "3px solid transparent",
                background: isActive ? "rgba(56,189,248,.08)" : "transparent",
                userSelect: "text",
                whiteSpace: "pre",
              }}
            >
              <span dangerouslySetInnerHTML={{ __html: html.length ? html : "&nbsp;" }} />
            </div>
          );
        })}
      </div>

      {/* PrismテーマをIDE背景に合わせる（背景透明化） */}
      <style jsx global>{`
        pre[class*="language-"], code[class*="language-"] {
          background: transparent !important;
          text-shadow: none !important;
        }
        code[class*="language-"], pre[class*="language-"] {
          font-family: var(--mono) !important;
        }
        ._code_line:hover {
          background: rgba(255, 255, 255, 0.03);
        }
        /* フォーカス時にほんのり枠（欲しければ） */
        /* [tabindex="0"]:focus { box-shadow: inset 0 0 0 1px rgba(56,189,248,.25); } */
      `}</style>
    </div>
  );
}
