// src/lib/pages/index.ts
import type { PageDef } from "../types";

import { HOME_PAGES } from "./home";
import { ABOUT_PAGES } from "./about";
import { SERVICES_PAGES } from "./services";
import { CAREERS_PAGES } from "./careers";
import { MISC_PAGES } from "./misc";

import { DEFAULT_PATH, findPageByPath as _find, allPaths as _all } from "./helpers";

export const PAGES: PageDef[] = [
  ...HOME_PAGES,
  ...ABOUT_PAGES,
  ...SERVICES_PAGES,
  ...CAREERS_PAGES,
  ...MISC_PAGES,
];

export { DEFAULT_PATH };

export function findPageByPath(path: string) {
  return _find(PAGES, path);
}

export function allPaths() {
  return _all(PAGES);
}
