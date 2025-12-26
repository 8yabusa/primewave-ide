import { PageDef } from "@/lib/types";
import CodeViewer from "./CodeViewer";
import Inspector from "./Inspector";

export default function SplitPane({ page }: { page: PageDef }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", flex: 1, minHeight: 0 }}>
      <div style={{ borderRight: "1px solid var(--border)", background: "rgba(13,17,23,.75)", minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 12px", borderBottom: "1px solid var(--border)", fontFamily: "var(--mono)", fontSize: 12, color: "var(--muted)" }}>
          <div>Editor</div>
          <div>{page.language.toUpperCase()} · UTF-8</div>
        </div>
        <div style={{ padding: 12, height: "calc(100% - 42px)", overflow: "auto" }}>
          <CodeViewer code={page.leftCode} />
        </div>
      </div>

      <div style={{ background: "rgba(2,6,23,.22)", minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 12px", borderBottom: "1px solid var(--border)", fontFamily: "var(--mono)", fontSize: 12, color: "var(--muted)" }}>
          <div>{page.inspector.title}</div>
          <div>{page.inspector.subtitle ?? ""}</div>
        </div>
        <div style={{ padding: 12, height: "calc(100% - 42px)", overflow: "auto" }}>
          <Inspector blocks={page.inspector.blocks} />
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 980px){
          ._split_fix { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
