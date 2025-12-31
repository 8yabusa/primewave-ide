// src/components/SplitPane.tsx
"use client";

import { useState } from "react";
import type { PageDef } from "@/lib/types";
import CodeViewer from "./CodeViewer";
import Inspector from "./Inspector";

type View = "editor" | "inspector";

export default function SplitPane({ page }: { page: PageDef }) {
  const [view, setView] = useState<View>("editor");

  return (
    <div className="_split_root" data-view={view}>
      <div className="_split_mobile_tabs">
        <button
          type="button"
          className={`_split_tab ${view === "editor" ? "is-active" : ""}`}
          onClick={() => setView("editor")}
        >
          Editor
        </button>
        <button
          type="button"
          className={`_split_tab ${view === "inspector" ? "is-active" : ""}`}
          onClick={() => setView("inspector")}
        >
          Inspector
        </button>
      </div>

      <section
        className="_split_pane _split_editor"
        data-active={view === "editor" ? "true" : "false"}   // ←ここ重要
      >
        <div className="_split_header">
          <div>Editor</div>
          <div>{page.language.toUpperCase()} · UTF-8</div>
        </div>
        <div className="_split_body">
          <CodeViewer code={page.leftCode} language={page.language} />
        </div>
      </section>

      <section
        className="_split_pane _split_inspector"
        data-active={view === "inspector" ? "true" : "false"} // ←ここ重要
      >
        <div className="_split_header">
          <div>{page.inspector.title}</div>
          <div>{page.inspector.subtitle ?? ""}</div>
        </div>
        <div className="_split_body">
          <Inspector blocks={page.inspector.blocks} />
        </div>
      </section>
    </div>
  );
}
