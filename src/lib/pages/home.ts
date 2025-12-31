// src/lib/pages/home.ts
import type { PageDef } from "../types";

export const HOME_PAGES: PageDef[] = [
  {
    id: "home",
    path: "/",
    fileName: "README.md",
    tabLabel: "README.md",
    language: "md",
    leftCode: `# PrimeWave

// SES is often a black box.
// We make it transparent — by design.

> Built by engineers, for engineers.

---

## What we do

- SES / System Engineering Service
- Technical support & delivery
- Career support for engineers

---

## Principles

- Transparency First
  - unit price, margin, contract terms are open
- Engineer-Led
  - you choose projects with clear conditions
- Long-Term
  - build a career, not just a monthly assignment

---

## Quick Links

- /services/pricing   # unit price & margin model
- /projects           # available projects
- /careers            # join us
- /about/philosophy   # why we exist

---

## Status

- remote: supported
- contracts: clear
- process: simple

---

Built by engineers, for engineers.
`,
    inspector: {
      title: "Inspector",
      subtitle: "Home",
      blocks: [
        {
          type: "hero",
          title: "// Welcome",
          lines: [
            "IDE風UIで体験する、透明性あるSES。",
            "PrimeWaveは“仕様として透明性を実装する”ことを大切にしています。",
          ],
        },
        {
          type: "kv",
          title: "What / Why / How",
          rows: [
            { k: "What", v: "SES（技術支援・受託含む）" },
            { k: "Why", v: "単価・契約がブラックボックスになりやすい業界課題を変える" },
            { k: "How", v: "固定マージン / 条件開示 / 案件選択の明確化" },
          ],
        },
        {
          type: "cta",
          buttons: [
            { label: "案件を見る", href: "/projects", variant: "primary" },
            { label: "仕組みを見る", href: "/services/pricing", variant: "secondary" },
          ],
        },
      ],
    },
    seo: {
      title: "PrimeWave | IDE Corporate",
      description: "IDE風UIで体験するコーポレートサイト",
    },
  },
];
