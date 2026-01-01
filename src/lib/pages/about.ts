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

export const Company = {
  name: "PrimeWave株式会社",
  address: {
    postalCode: "〒101-0022",
    address: "東京都中央区日本橋室町1丁目11番12号 日本橋水野ビル7階",
  },
  representative: "代表取締役 中村 隼也",
  business: [
    "SES事業",
    "ITエンジニア教育事業",
    "DXコンサルティング事業",
  ],
  founded: "2024-04",
  contact: {
    email: "info@primewave.co.jp",
    form: "/contact",
  },
  invoice: "T3010001244451",
} as const;

export default Company;
`,
    inspector: {
      title: "Inspector",
      subtitle: "CompanyProfile",
      blocks: [
        {
          type: "kv",
          title: "Basic",
          rows: [
            { k: "会社名", v: "PrimeWave株式会社" },
            { k: "所在地", v: "〒101-0022\n東京都中央区日本橋室町1丁目11番12号 日本橋水野ビル7階" },
            { k: "代表者", v: "代表取締役 中村 隼也" },
            { k: "事業内容", v: "SES事業\nITエンジニア教育事業\nDXコンサルティング事業" },
            { k: "設立", v: "2024年4月" },
            { k: "E-mail", v: "info@primewave.co.jp" },
            { k: "適格請求書発行事業者登録番号", v: "T3010001244451" },
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
