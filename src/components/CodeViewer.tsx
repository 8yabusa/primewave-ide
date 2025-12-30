// src/components/CodeViewer.tsx
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
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

  // codeが変わったら先頭に戻す
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
  }

  return (
    <div className="_codeviewer_root">
      {/* 行番号 */}
      <div className="_codeviewer_gutter">
        {lines.map((_, i) => {
          const n = i + 1;
          const isActive = n === activeLine;

          return (
            <div
              key={n}
              className={`_codeviewer_gutterLine${isActive ? " is-active" : ""}`}
              onClick={() => {
                setActiveLine(n);
                editorRef.current?.focus();
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
        ref={editorRef}
        tabIndex={0}
        onKeyDown={onKeyDown}
        onClick={() => editorRef.current?.focus()}
        className="_codeviewer_body"
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
                if (e.button !== 0) return;
                setActiveLine(n);
              }}
              className={`_code_line${isActive ? " is-active" : ""}`}
              style={{
                borderLeft: isActive ? "3px solid rgba(56,189,248,.65)" : "3px solid transparent",
                background: isActive ? "rgba(56,189,248,.08)" : "transparent",
              }}
            >
              <span dangerouslySetInnerHTML={{ __html: html.length ? html : "&nbsp;" }} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
