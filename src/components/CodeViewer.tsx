// src/components/CodeViewer.tsx
"use client";

import { useEffect, useMemo, useRef } from "react";
import Prism from "prismjs";

// 必要な言語を読み込み（使うものだけ）
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-bash";

// テーマCSS（後で自作してもOK）
import "prismjs/themes/prism-tomorrow.css";

import type { Lang } from "@/lib/types";

export default function CodeViewer({ code, language }: { code: string; language: Lang }) {
  const ref = useRef<HTMLPreElement | null>(null);

  const prismLang = useMemo(() => {
    switch (language) {
      case "ts":
        return "typescript";
      case "sql":
        return "sql";
      case "md":
        return "markdown";
      case "http":
        // httpはprism標準だと弱いのでbash扱いで雰囲気
        return "bash";
      default:
        return "clike";
    }
  }, [language]);

  const lines = useMemo(() => code.replace(/\n$/, "").split("\n"), [code]);

  useEffect(() => {
    if (!ref.current) return;
    Prism.highlightAllUnder(ref.current);
  }, [code, prismLang]);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "52px 1fr",
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
          whiteSpace: "pre",
        }}
      >
        {lines.map((_, i) => String(i + 1).padStart(2, " ") + "\n")}
      </div>

      {/* Prism */}
      <pre
        ref={ref}
        style={{
          margin: 0,
          padding: "10px 12px",
          overflow: "auto",
          background: "transparent",
          fontFamily: "var(--mono)",
          fontSize: 12.5,
          lineHeight: 1.6,
        }}
      >
        <code className={`language-${prismLang}`}>{code}</code>
      </pre>

      {/* Prismテーマの背景を透明に寄せる（IDE側の背景を活かす） */}
      <style jsx global>{`
        pre[class*="language-"] {
          background: transparent !important;
        }
        code[class*="language-"] {
          font-family: var(--mono) !important;
        }
      `}</style>
    </div>
  );
}
