// src/components/IdeShell.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { findPageByPath } from "@/lib/pages";
import { buildTree } from "@/lib/tree";
import SidebarTree from "./SidebarTree";
import TabsBar from "./TabsBar";
import SplitPane from "./SplitPane";

const STORAGE_KEY = "primewave_ide_tabs_v1";
type Tab = { path: string };

export default function IdeShell() {
  const router = useRouter();
  const pathname = usePathname();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [pendingNav, setPendingNav] = useState<string | null>(null);

  const page = useMemo(() => findPageByPath(pathname), [pathname]);
  const tree = useMemo(() => buildTree(), []);

  const [tabs, setTabs] = useState<Tab[]>([{ path: "/" }]);
  const [activePath, setActivePath] = useState<string>(pathname);

  useEffect(() => {
    if (!pendingNav) return;
    router.push(pendingNav);
    setPendingNav(null);
  }, [pendingNav, router]);

  // restore tabs
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Tab[];
        if (Array.isArray(parsed) && parsed.length) setTabs(parsed);
      }
    } catch {}
  }, []);

  // URL変更に追従 + モバイルドロワー閉じる
  useEffect(() => {
    setActivePath(pathname);
    setTabs((prev) => {
      const exists = prev.some((t) => t.path === pathname);
      return exists ? prev : [...prev, { path: pathname }];
    });
    setSidebarOpen(false);
  }, [pathname]);

  // persist tabs
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tabs));
    } catch {}
  }, [tabs]);

  function open(path: string) {
    router.push(path);
  }

  function close(path: string) {
    setTabs((prev) => {
      const next = prev.filter((t) => t.path !== path);
      const safeNext = next.length ? next : [{ path: "/" }];

      if (path === activePath) {
        const fallback = safeNext[safeNext.length - 1]?.path ?? "/";
        setActivePath(fallback);
        setPendingNav(fallback);
      }

      return safeNext;
    });
  }

  if (!page) return null;

  return (
    <div style={{ maxWidth: 1240, margin: "22px auto", padding: "0 14px 22px" }}>
      <div
        style={{
          border: `1px solid var(--border)`,
          borderRadius: "var(--radius)",
          overflow: "hidden",
          boxShadow: "var(--shadow)",
          background: `linear-gradient(180deg, rgba(255,255,255,.03), transparent 60%), var(--panel)`,
          height: "calc(100vh - 90px)",
          minHeight: 560,
          maxHeight: 820,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
        }}
      >
        {/* Topbar */}
        <div
          style={{
            height: 46,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 14px",
            borderBottom: "1px solid var(--border)",
            background: "rgba(31,31,31,.55)",
            backdropFilter: "blur(10px)",
            flex: "0 0 auto",
          }}
        >
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }} aria-hidden="true">
              <div style={{ width: 10, height: 10, borderRadius: 999, background: "#fb7185" }} />
              <div style={{ width: 10, height: 10, borderRadius: 999, background: "#fbbf24" }} />
              <div style={{ width: 10, height: 10, borderRadius: 999, background: "#34d399" }} />
            </div>

            <button
              className="_ide_hamburger"
              type="button"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>

          <div style={{ display: "flex", gap: 10, fontFamily: "var(--mono)", fontSize: 12, color: "var(--muted)" }}>
            <span
              style={{
                padding: "6px 10px",
                border: `1px solid var(--border)`,
                borderRadius: 999,
                background: "rgba(255,255,255,.03)",
              }}
            >
              PrimeWave / corporate
            </span>
            <span
              style={{
                padding: "6px 10px",
                border: `1px solid var(--border)`,
                borderRadius: 999,
                background: "rgba(255,255,255,.03)",
              }}
            >
              {page.fileName}
            </span>
          </div>
        </div>

        {/* Main (Topbar以外の残りを全部使う) */}
        <div className="_ide_main" style={{ flex: "1 1 auto", minHeight: 0, minWidth: 0 }}>
          {/* PC Sidebar */}
          <div className="_pc_sidebar" style={{ display: "block", minHeight: 0 }}>
            <SidebarTree tree={tree} activePath={activePath} onOpen={open} />
          </div>

          {/* Right */}
          <div style={{ minWidth: 0, minHeight: 0, display: "flex", flexDirection: "column" }}>
            <TabsBar
              tabs={tabs.map((t) => ({ ...t, label: findPageByPath(t.path)?.tabLabel ?? t.path }))}
              activePath={activePath}
              onOpen={open}
              onClose={close}
            />

            {/* ✅ SplitPane が残りの高さを全部使う */}
            <div style={{ flex: "1 1 auto", minHeight: 0, minWidth: 0 }}>
              <SplitPane page={page} />
            </div>

            {/* Status bar */}
            <div
              style={{
                height: 34,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 12px",
                borderTop: "1px solid var(--border)",
                background: "rgba(31,31,31,.55)",
                fontFamily: "var(--mono)",
                fontSize: 11.5,
                color: "rgba(148,163,184,.9)",
                flex: "0 0 auto",
              }}
            >
              <div>main · primewave · {page.fileName}</div>
              <div>{page.language.toUpperCase()} · Dark Theme</div>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          className="_ide_sidebar_overlay"
          data-open={sidebarOpen}
          onClick={() => setSidebarOpen(false)}
        />
        <div className="_ide_sidebar_wrap" data-open={sidebarOpen}>
          <SidebarTree tree={tree} activePath={activePath} onOpen={open} />
        </div>
      </div>
    </div>
  );
}
