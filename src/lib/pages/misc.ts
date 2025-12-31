// src/lib/pages/misc.ts
import type { PageDef } from "../types";

export const MISC_PAGES: PageDef[] = [
  {
    id: "strengths",
    path: "/strengths",
    fileName: "strengths.ts",
    tabLabel: "strengths.ts",
    language: "ts",
    leftCode: `// /strengths.ts

interface SESCompany {
  margin: "fixed" | "variable";
  unitPriceDisclosure: boolean;
  engineerChoice: boolean;
  careerSupport: boolean;
}

export const PrimeWave: SESCompany = {
  margin: "fixed",
  unitPriceDisclosure: true,
  engineerChoice: true,
  careerSupport: true,
};

export default PrimeWave;
`,
    inspector: {
      title: "Inspector",
      subtitle: "Strengths",
      blocks: [
        { type: "hero", title: "// Strengths", lines: ["違いは“言葉”ではなく“仕様”で出す。"] },
        {
          type: "kv",
          title: "Key points",
          rows: [
            { k: "Margin", v: "固定（予測可能性）" },
            { k: "Unit price", v: "開示（ブラックボックスにしない）" },
            { k: "Choice", v: "案件選択の主体はエンジニア" },
            { k: "Support", v: "長期視点のキャリア支援" },
          ],
        },
        {
          type: "cta",
          buttons: [
            { label: "採用情報", href: "/careers", variant: "primary" },
            { label: "理念を見る", href: "/about/philosophy", variant: "secondary" },
          ],
        },
      ],
    },
    seo: { title: "強み | PrimeWave" },
  },

  {
    id: "projects",
    path: "/projects",
    fileName: "projects.sql",
    tabLabel: "projects.sql",
    language: "sql",
    leftCode: `-- /projects.sql
SELECT
  title,
  stack,
  unit_price,
  remote,
  location
FROM projects
WHERE remote = true
  AND unit_price >= 700000
ORDER BY unit_price DESC
LIMIT 10;
`,
    inspector: {
      title: "Inspector",
      subtitle: "Query Result",
      blocks: [
        { type: "hero", title: "// Projects", lines: ["条件で探す。UIよりもクエリのほうが速い。"] },
        { type: "list", title: "Found", items: ["Java / フルリモート / ¥75万", "Kotlin / リモート併用 / ¥72万", "Flutter / フルリモート / ¥70万"] },
        {
          type: "cta",
          buttons: [
            { label: "相談する", href: "/contact", variant: "primary" },
            { label: "採用情報", href: "/careers", variant: "secondary" },
          ],
        },
      ],
    },
    seo: { title: "案件一覧 | PrimeWave" },
  },

  {
    id: "faq",
    path: "/faq",
    fileName: "faq.ts",
    tabLabel: "faq.ts",
    language: "ts",
    leftCode: `// /faq.ts

type Question =
  | "単価は見れますか？"
  | "マージンは固定ですか？"
  | "案件は選べますか？"
  | "未経験でも大丈夫？";

export function answer(q: Question): string {
  switch (q) {
    case "単価は見れますか？":
      return "はい。事前に条件を開示します。";
    case "マージンは固定ですか？":
      return "はい。固定マージンです。";
    case "案件は選べますか？":
      return "はい。条件を見た上で選択できます。";
    case "未経験でも大丈夫？":
      return "状況により提案は変わります。まずは現状を聞かせてください。";
  }
}
`,
    inspector: {
      title: "Inspector",
      subtitle: "FAQ",
      blocks: [
        { type: "hero", title: "// FAQ", lines: ["よくある質問を、仕様として答える。"] },
        { type: "list", title: "Questions", items: ["単価は見れますか？", "マージンは固定ですか？", "案件は選べますか？", "未経験でも大丈夫？"] },
        { type: "cta", buttons: [{ label: "お問い合わせ", href: "/contact", variant: "primary" }] },
      ],
    },
    seo: { title: "FAQ | PrimeWave" },
  },

  {
    id: "contact",
    path: "/contact",
    fileName: "contact.http",
    tabLabel: "contact.http",
    language: "http",
    leftCode: `POST /api/contact HTTP/1.1
Host: primewave.co.jp
Content-Type: application/json

{
  "name": "Your Name",
  "email": "your@email.com",
  "topic": "career | project | partner | other",
  "message": "相談内容を入力してください"
}
`,
    inspector: {
      title: "Inspector",
      subtitle: "Contact",
      blocks: [
        { type: "hero", title: "// Contact", lines: ["まずは状況を教えてください。最短で合う提案を返します。"] },
        { type: "kv", title: "Contact", rows: [{ k: "Email", v: "info@primewave.co.jp" }, { k: "Form", v: "このページのフォーム（実装予定）" }] },
        { type: "list", title: "Topics", items: ["参画相談（案件）", "採用相談", "協業・パートナー", "その他"] },
      ],
    },
    seo: { title: "お問い合わせ | PrimeWave" },
  },

  {
    id: "footer",
    path: "/footer",
    fileName: "footer.md",
    tabLabel: "footer.md",
    language: "md",
    leftCode: `---

// Made by engineers.
// For engineers.

PrimeWave
`,
    inspector: {
      title: "Inspector",
      subtitle: "Footer",
      blocks: [
        { type: "hero", title: "// 끝", lines: ["Made by engineers, for engineers."] },
        { type: "cta", buttons: [{ label: "トップへ", href: "/", variant: "primary" }] },
      ],
    },
    seo: { title: "Footer | PrimeWave" },
  },
];
