import { InspectorBlock } from "@/lib/types";

export default function Inspector({ blocks }: { blocks: InspectorBlock[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {blocks.map((b, idx) => {
        if (b.type === "hero") {
          return (
            <div key={idx} style={{ fontFamily: "var(--mono)", fontSize: 12, color: "rgba(148,163,184,.85)", padding: "10px 12px", border: "1px dashed rgba(56,189,248,.25)", borderRadius: 12, background: "rgba(56,189,248,.06)" }}>
              {b.title && <div style={{ color: "rgba(92,99,112,1)" }}>{b.title}</div>}
              <div style={{ marginTop: 6, color: "var(--text)", fontWeight: 700 }}>
                {b.lines[0]}
              </div>
              {b.lines.slice(1).map((x, i) => (
                <div key={i} style={{ marginTop: 4 }}>{x}</div>
              ))}
            </div>
          );
        }

        if (b.type === "kv") {
          return (
            <Card key={idx} title={b.title}>
              <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", fontFamily: "var(--mono)", fontSize: 12.5, }}>
                {b.rows.map((r, i) => (
                  <Row key={i} k={r.k} v={r.v} />
                ))}
              </div>
            </Card>
          );
        }

        if (b.type === "tags") {
          return (
            <Card key={idx} title={b.title}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, padding: "10px 12px 12px" }}>
                {b.tags.map((t) => (
                  <span key={t} style={{ fontFamily: "var(--mono)", fontSize: 11.5, padding: "6px 10px", borderRadius: 999, border: "1px solid rgba(255,255,255,.08)", background: "rgba(255,255,255,.02)", color: "rgba(230,237,243,.92)" }}>
                    {t}
                  </span>
                ))}
              </div>
            </Card>
          );
        }

        if (b.type === "list") {
          return (
            <Card key={idx} title={b.title}>
              <div style={{ padding: "10px 12px 12px", fontFamily: "var(--mono)", fontSize: 12.5, color: "var(--text)" }}>
                {b.items.map((it, i) => (
                  <div key={i} style={{ padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,.05)" }}>
                    {it}
                  </div>
                ))}
              </div>
            </Card>
          );
        }

        if (b.type === "cta") {
          return (
            <div key={idx} style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {b.buttons.map((btn) => (
                <a
                  key={btn.href + btn.label}
                  href={btn.href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    fontFamily: "var(--mono)",
                    fontSize: 12,
                    padding: "10px 12px",
                    borderRadius: 12,
                    border: `1px solid ${btn.variant === "secondary" ? "rgba(99,102,241,.35)" : "rgba(56,189,248,.35)"}`,
                    background: btn.variant === "secondary" ? "rgba(99,102,241,.12)" : "rgba(56,189,248,.12)",
                    color: "var(--text)",
                    textDecoration: "none",
                  }}
                >
                  {btn.label}
                </a>
              ))}
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ border: "1px solid rgba(255,255,255,.07)", borderRadius: 12, background: "rgba(255,255,255,.03)", overflow: "hidden" }}>
      <div style={{ margin: 0, padding: "10px 12px", fontFamily: "var(--mono)", fontSize: 12, color: "var(--muted)", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
        {title}
      </div>
      {children}
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  const isEmail = k.toLowerCase().includes("e-mail");

  return (
    <>
      <div style={{ padding: "10px 12px", color: "rgba(148,163,184,.9)", background: "rgba(255,255,255,.02)", borderBottom: "1px solid rgba(255,255,255,.05)" }}>
        {k}
      </div>
      <div style={{ padding: "10px 12px", color: "var(--text)", borderBottom: "1px solid rgba(255,255,255,.05)", overflowWrap: "anywhere", whiteSpace: "pre-line", }}>
        {isEmail ? (
          <a
            href="/contact"
            style={{
              color: "var(--accent)",
              textDecoration: "underline",
              fontFamily: "var(--mono)",
            }}
          >
            {v}
          </a>
        ) : (
          v
        )}
      </div>
    </>
  );
}
