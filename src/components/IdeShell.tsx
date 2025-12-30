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

  
  const [pendingNav, setPendingNav] = useState<string | null>(null);
  
  useEffect(() => {
  if (!pendingNav) return;
  router.push(pendingNav);
  setPendingNav(null);
}, [pendingNav, router]);


  // ✅ URL（pathname）から現在ページを決める
  const page = useMemo(() => findPageByPath(pathname), [pathname]);

  const tree = useMemo(() => buildTree(), []);
  const [tabs, setTabs] = useState<Tab[]>([{ path: "/" }]);
  const [activePath, setActivePath] = useState<string>(pathname);

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

  // ✅ URL変更に追従
  useEffect(() => {
    setActivePath(pathname);
    setTabs((prev) => {
      const exists = prev.some((t) => t.path === pathname);
      return exists ? prev : [...prev, { path: pathname }];
    });
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

    // ここでは router.push しない！！
    if (path === activePath) {
      const fallback = safeNext[safeNext.length - 1]?.path ?? "/";
      setActivePath(fallback);      // OK（state更新）
      setPendingNav(fallback);      // OK（遷移予約）
    }

    return safeNext;
  });
}


  if (!page) return null;

  return (
    <div style={{ maxWidth: 1240, margin: "22px auto", padding: "0 14px 22px" }}>
      {/* ここから下は元のままでOK（page.fileName等もそのまま使える） */}
      <div
        style={{
          border: `1px solid var(--border)`,
          borderRadius: "var(--radius)",
          overflow: "hidden",
          boxShadow: "var(--shadow)",
          background: `linear-gradient(180deg, rgba(255,255,255,.03), transparent 60%), var(--panel)`,
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
            background: "rgba(2,6,23,.55)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div style={{ display: "flex", gap: 8, alignItems: "center" }} aria-hidden="true">
            <div style={{ width: 10, height: 10, borderRadius: 999, background: "#fb7185" }} />
            <div style={{ width: 10, height: 10, borderRadius: 999, background: "#fbbf24" }} />
            <div style={{ width: 10, height: 10, borderRadius: 999, background: "#34d399" }} />
          </div>

          <div style={{ display: "flex", gap: 10, fontFamily: "var(--mono)", fontSize: 12, color: "var(--muted)" }}>
            <span style={{ padding: "6px 10px", border: `1px solid var(--border)`, borderRadius: 999, background: "rgba(255,255,255,.03)" }}>
              PrimeWave / corporate
            </span>
            <span style={{ padding: "6px 10px", border: `1px solid var(--border)`, borderRadius: 999, background: "rgba(255,255,255,.03)" }}>
              {page.fileName}
            </span>
          </div>
        </div>

        {/* Main */}
        <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", minHeight: 640 }}>
          <SidebarTree tree={tree} activePath={activePath} onOpen={open} />
          <div style={{ minWidth: 0, display: "flex", flexDirection: "column" }}>
            <TabsBar
              tabs={tabs.map((t) => ({ ...t, label: findPageByPath(t.path)?.tabLabel ?? t.path }))}
              activePath={activePath}
              onOpen={open}
              onClose={close}
            />
            <SplitPane page={page} />
            <div
              style={{
                height: 34,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 12px",
                borderTop: "1px solid var(--border)",
                background: "rgba(2,6,23,.55)",
                fontFamily: "var(--mono)",
                fontSize: 11.5,
                color: "rgba(148,163,184,.9)",
              }}
            >
              <div>main · primewave · {page.fileName}</div>
              <div>{page.language.toUpperCase()} · Dark Theme</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
