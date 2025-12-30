import { PageDef } from "@/lib/types";
import CodeViewer from "./CodeViewer";
import Inspector from "./Inspector";

export default function SplitPane({ page }: { page: PageDef }) {
  return (
    <div
      className="_split_fix"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        flex: 1,
        minHeight: 0,
        height: "100%",
      }}
    >
      {/* Editor */}
      <div
        style={{
          borderRight: "1px solid var(--border)",
          background: "rgba(13,17,23,.75)",
          minWidth: 0,
          minHeight: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            flex: "0 0 42px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 12px",
            borderBottom: "1px solid var(--border)",
            fontFamily: "var(--mono)",
            fontSize: 12,
            color: "var(--muted)",
          }}
        >
          <div>Editor</div>
          <div>{page.language.toUpperCase()} · UTF-8</div>
        </div>

        <div
          style={{
            padding: 12,
            flex: "1 1 auto",
            minHeight: 0,
            overflow: "auto",
          }}
        >
          <CodeViewer code={page.leftCode} language={page.language} />
        </div>
      </div>

      {/* Inspector */}
      <div
        style={{
          background: "rgba(2,6,23,.22)",
          minWidth: 0,
          minHeight: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            flex: "0 0 42px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 12px",
            borderBottom: "1px solid var(--border)",
            fontFamily: "var(--mono)",
            fontSize: 12,
            color: "var(--muted)",
          }}
        >
          <div>{page.inspector.title}</div>
          <div>{page.inspector.subtitle ?? ""}</div>
        </div>

        <div
          style={{
            padding: 12,
            flex: "1 1 auto",
            minHeight: 0,
            overflow: "auto",
          }}
        >
          <Inspector blocks={page.inspector.blocks} />
        </div>
      </div>
    </div>
  );
}
