"use client";

import Link from "next/link";
import { TreeNode } from "@/lib/tree";
import { useMemo, useState } from "react";

export default function SidebarTree({
  tree,
  activePath,
  onOpen,
}: {
  tree: TreeNode[];
  activePath: string;
  onOpen: (path: string) => void;
}) {
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();

  const filtered = useMemo(() => {
    if (!query) return tree;
    const walk = (nodes: TreeNode[]): TreeNode[] =>
      nodes
        .map((n) => {
          if (n.type === "file") {
            return n.name.toLowerCase().includes(query) ? n : null;
          }
          const children = walk(n.children);
          return (n.name.toLowerCase().includes(query) || children.length) ? { ...n, children } : null;
        })
        .filter(Boolean) as TreeNode[];
    return walk(tree);
  }, [tree, query]);

  return (
    <aside
      className="_sidebar_fix"
      style={{
        borderRight: "1px solid var(--border)",
        background: "rgba(24,24,24,.35)",
      }}
    >
      <div style={{ padding: "12px 12px 10px", borderBottom: "1px solid var(--border)", display: "flex", gap: 10, alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--muted2)", letterSpacing: ".06em" }}>WORKSPACE</div>
          <div style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--text)" }}>primewave.co.jp</div>
        </div>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search…"
          style={{
            marginLeft: "auto",
            width: 120,
            border: "1px solid var(--border)",
            borderRadius: 10,
            background: "rgba(255,255,255,.02)",
            color: "var(--text)",
            fontFamily: "var(--mono)",
            fontSize: 12,
            padding: "6px 9px",
            outline: "none",
          }}
        />
      </div>

      <div style={{ padding: "10px 8px 14px", fontFamily: "var(--mono)", fontSize: 12, lineHeight: 1.35 }}>
        <Tree nodes={filtered} depth={0} activePath={activePath} onOpen={onOpen} />
      </div>
    </aside>
  );
}

function Tree({
  nodes,
  depth,
  activePath,
  onOpen,
}: {
  nodes: TreeNode[];
  depth: number;
  activePath: string;
  onOpen: (path: string) => void;
}) {
  return (
    <div>
      {nodes.map((n) => {
        const pad = 8 + depth * 16;
        if (n.type === "dir") {
          return (
            <div key={n.path}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "7px 8px",
                  paddingLeft: pad,
                  borderRadius: 10,
                  color: "var(--text)",
                  userSelect: "none",
                  opacity: 0.95,
                }}
              >
                <span style={{ width: 16, textAlign: "center" }}>📁</span>
                <span>{n.name}/</span>
              </div>
              <Tree nodes={n.children} depth={depth + 1} activePath={activePath} onOpen={onOpen} />
            </div>
          );
        }

        const isActive = n.pagePath === activePath;
        return (
          <Link
            key={n.path}
            href={n.pagePath}
            onClick={(e) => {
              e.preventDefault();
              onOpen(n.pagePath);
            }}
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "7px 8px",
                paddingLeft: pad,
                borderRadius: 10,
                cursor: "pointer",
                background: isActive ? "var(--rowActive)" : "transparent",
                border: isActive ? "1px solid rgba(56,189,248,.25)" : "1px solid transparent",
              }}
              onMouseEnter={(e) => {
                if (!isActive) (e.currentTarget.style.background = "var(--rowHover)");
              }}
              onMouseLeave={(e) => {
                if (!isActive) (e.currentTarget.style.background = "transparent");
              }}
            >
              <span style={{ width: 16, textAlign: "center" }}>📄</span>
              <span>{n.name}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
