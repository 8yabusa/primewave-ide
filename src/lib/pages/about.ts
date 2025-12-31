// src/lib/pages/about.ts
import type { PageDef } from "../types";

export const ABOUT_PAGES: PageDef[] = [
  {
    id: "about-overview",
    path: "/about/overview",
    fileName: "about/overview.ts",
    tabLabel: "overview.ts",
    language: "ts",
    leftCode: `// /about/overview.ts

export const About = {
  mission: "エンジニアの待遇を改善する。",
  stance: "Transparency First",
  focus: [
    "単価・契約の可視化",
    "エンジニア主導の案件選択",
    "長期視点のキャリア支援",
  ],
} as const;

export default About;
`,
    inspector: {
      title: "Inspector",
      subtitle: "About",
      blocks: [
        { type: "hero", title: "// About", lines: ["“技術者が主役”を、綺麗事で終わらせない。"] },
        {
          type: "kv",
          title: "Summary",
          rows: [
            { k: "Mission", v: "エンジニアの待遇を改善する。" },
            { k: "Stance", v: "Transparency First" },
          ],
        },
        { type: "list", title: "Focus", items: ["単価・契約の可視化", "エンジニア主導の案件選択", "長期視点のキャリア支援"] },
        {
          type: "cta",
          buttons: [
            { label: "会社概要", href: "/about/company", variant: "secondary" },
            { label: "基本理念", href: "/about/philosophy", variant: "primary" },
          ],
        },
      ],
    },
    seo: { title: "私たちについて | PrimeWave" },
  },

  {
    id: "about-company",
    path: "/about/company",
    fileName: "about/company.ts",
    tabLabel: "company.ts",
    language: "ts",
    leftCode: `// /about/company.ts

type JPY = string;

export const Company = {
  name: "PrimeWave株式会社",
  englishName: "PrimeWave Inc.",
  business: [
    "SES（System Engineering Service）事業",
    "受託開発 / 技術支援",
  ],
  founded: "YYYY-MM-DD",
  capital: "¥X,XXX,XXX" as JPY,
  location: "東京都XXXX区XXXX",
  representative: "代表取締役 〇〇〇〇",
  employees: "X名",
  contact: {
    email: "info@primewave.co.jp",
    form: "/contact",
  },
  values: {
    mission: "エンジニアの待遇を改善する。",
    principles: [
      "単価・契約・マージンの透明性",
      "技術者が主役の意思決定",
      "長期視点のキャリア支援",
    ],
  },
} as const;

export default Company;
`,
    inspector: {
      title: "Inspector",
      subtitle: "CompanyProfile",
      blocks: [
        { type: "hero", title: "// Company profile", lines: ["事実は、コードで表す。"] },
        {
          type: "kv",
          title: "Basic",
          rows: [
            { k: "会社名", v: "PrimeWave株式会社" },
            { k: "英文名", v: "PrimeWave Inc." },
            { k: "代表者", v: "代表取締役 〇〇〇〇" },
            { k: "設立", v: "YYYY-MM-DD" },
            { k: "資本金", v: "¥X,XXX,XXX" },
            { k: "所在地", v: "東京都XXXX区XXXX" },
            { k: "連絡先", v: "info@primewave.co.jp" },
          ],
        },
        { type: "tags", title: "Business", tags: ["SES", "受託開発", "技術支援"] },
        {
          type: "list",
          title: "Principles",
          items: ["単価・契約・マージンの透明性", "技術者が主役の意思決定", "長期視点のキャリア支援"],
        },
        {
          type: "cta",
          buttons: [
            { label: "お問い合わせ", href: "/contact", variant: "primary" },
            { label: "採用情報", href: "/careers", variant: "secondary" },
          ],
        },
      ],
    },
    seo: { title: "会社概要 | PrimeWave" },
  },

  {
    id: "about-philosophy",
    path: "/about/philosophy",
    fileName: "about/philosophy.md",
    tabLabel: "philosophy.md",
    language: "md",
    leftCode: `# Philosophy

// SESは、単価や契約がブラックボックスになりやすい。
// だから私たちは、透明性を“文化”ではなく“仕様”として実装する。

---

## Mission

エンジニアの待遇を改善する。

---

## Principles

- Transparency First
- Engineer-Led
- Long-Term

---

## Notes

> Trust is a feature.
`,
    inspector: {
      title: "Inspector",
      subtitle: "Philosophy",
      blocks: [
        { type: "hero", title: "// Why we exist", lines: ["透明性は“努力目標”ではなく“仕様”。"] },
        { type: "kv", title: "Mission", rows: [{ k: "Mission", v: "エンジニアの待遇を改善する。" }] },
        {
          type: "list",
          title: "Principles",
          items: [
            "Transparency First（単価・契約・仕組みの可視化）",
            "Engineer-Led（案件選択の主導権）",
            "Long-Term（短期最適ではなく長期のキャリア設計）",
          ],
        },
        {
          type: "cta",
          buttons: [
            { label: "仕組みを見る", href: "/services/pricing", variant: "primary" },
            { label: "強みを見る", href: "/strengths", variant: "secondary" },
          ],
        },
      ],
    },
    seo: { title: "基本理念 | PrimeWave" },
  },
];
