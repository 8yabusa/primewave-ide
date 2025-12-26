export default function CodeViewer({ code }: { code: string }) {
  const lines = code.replace(/\n$/, "").split("\n");
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
      <pre
        style={{
          margin: 0,
          padding: "10px 12px",
          fontFamily: "var(--mono)",
          fontSize: 12.5,
          lineHeight: 1.6,
          color: "var(--text)",
          overflow: "auto",
          whiteSpace: "pre",
        }}
      >
        {code}
      </pre>
    </div>
  );
}
