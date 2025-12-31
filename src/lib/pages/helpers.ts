// src/lib/pages/helpers.ts
import type { PageDef } from "../types";

export const DEFAULT_PATH = "/";

export function normalizePath(path: string) {
  return path !== "/" ? path.replace(/\/+$/, "") : "/";
}

export function findPageByPath(pages: PageDef[], path: string) {
  const normalized = normalizePath(path);
  return pages.find((p) => p.path === normalized);
}

export function allPaths(pages: PageDef[]) {
  return pages.map((p) => p.path);
}
