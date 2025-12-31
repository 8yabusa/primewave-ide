"use client";

export default function TabsBar({
  tabs,
  activePath,
  onOpen,
  onClose,
}: {
  tabs: Array<{ path: string; label: string }>;
  activePath: string;
  onOpen: (path: string) => void;
  onClose: (path: string) => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",   // ← タブを下揃え
        gap: 8,
        padding: "10px 10px 0",
        minHeight: 42,
        borderBottom: "1px solid var(--border)",
        background: "rgba(31,31,31,.25)",
      }}
    >
      {tabs.map((t) => {
        const active = t.path === activePath;

        const borderColor = "var(--border)";

        return (
          <div
            key={t.path}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "var(--mono)",
              fontSize: 12,
              color: active ? "var(--text)" : "var(--muted)",
              padding: "8px 10px",
              borderRadius: "10px 10px 0 0",
              cursor: "pointer",
              background: active ? "rgba(255,255,255,.04)" : "transparent",

              // ✅ border shorthandを使わず、全部個別指定に統一
              borderTop: active ? `1px solid ${borderColor}` : "1px solid transparent",
              borderLeft: active ? `1px solid ${borderColor}` : "1px solid transparent",
              borderRight: active ? `1px solid ${borderColor}` : "1px solid transparent",
              borderBottom: "none",

              userSelect: "none",
            }}
            onClick={() => onOpen(t.path)}
            title={t.path}
          >
            <span>{t.label}</span>

            {tabs.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClose(t.path);
                }}
                style={{
                  border: "none",
                  background: "transparent",
                  color: active ? "var(--text)" : "var(--muted)",
                  cursor: "pointer",
                  fontFamily: "var(--mono)",
                  padding: 0,
                  lineHeight: 1,
                }}
                aria-label="Close tab"
              >
                ×
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
