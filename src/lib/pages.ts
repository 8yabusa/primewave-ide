// src/lib/pages.ts
import { PageDef } from "./types";

/**
 * ✅ 全ページ定義（サイトマップ分）
 * - ここに追加/編集するだけで、左ツリー・タブ・表示内容が全部変わります
 * - 会社メール: info@primewave.co.jp（反映済み）
 */

export const PAGES: PageDef[] = [
  // ─────────────────────────────────────────────────────────────
  // /
  // ─────────────────────────────────────────────────────────────
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
    seo: { title: "PrimeWave | IDE Corporate", description: "IDE風UIで体験するコーポレートサイト" },
  },

  // ─────────────────────────────────────────────────────────────
  // /about/*
  // ─────────────────────────────────────────────────────────────
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
        {
          type: "list",
          title: "Focus",
          items: ["単価・契約の可視化", "エンジニア主導の案件選択", "長期視点のキャリア支援"],
        },
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
        { type: "cta", buttons: [{ label: "お問い合わせ", href: "/contact", variant: "primary" }, { label: "採用情報", href: "/careers", variant: "secondary" }] },
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
        {
          type: "kv",
          title: "Mission",
          rows: [{ k: "Mission", v: "エンジニアの待遇を改善する。" }],
        },
        {
          type: "list",
          title: "Principles",
          items: ["Transparency First（単価・契約・仕組みの可視化）", "Engineer-Led（案件選択の主導権）", "Long-Term（短期最適ではなく長期のキャリア設計）"],
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

  // ─────────────────────────────────────────────────────────────
  // /services/*
  // ─────────────────────────────────────────────────────────────
  {
    id: "services-ses",
    path: "/services/ses",
    fileName: "services/ses.ts",
    tabLabel: "ses.ts",
    language: "ts",
    leftCode: `// /services/ses.ts

type Engineer = { skill: string[]; values: string[] };
type Project = { stack: string[]; unitPrice: number; remote: boolean };

function disclose(unitPrice: number) {
  return { unitPrice, disclosure: true };
}

function match(engineer: Engineer, project: Project) {
  const ok = project.stack.every((s) => engineer.skill.includes(s));
  if (!ok) throw new Error("Skill mismatch");
  return { engineer, project };
}

export function startSES(engineer: Engineer, project: Project) {
  const price = disclose(project.unitPrice);
  const deal = match(engineer, project);
  return { ...deal, ...price, started: true };
}
`,
    inspector: {
      title: "Inspector",
      subtitle: "Service: SES",
      blocks: [
        { type: "hero", title: "// Service", lines: ["“流れ”を公開する。だから不安が減る。"] },
        {
          type: "list",
          title: "Flow",
          items: ["要件受領", "条件開示（単価・清算・働き方）", "スキル/志向マッチ", "合意・契約", "参画・フォロー"],
        },
        { type: "cta", buttons: [{ label: "単価・マージン", href: "/services/pricing", variant: "primary" }, { label: "案件一覧", href: "/projects", variant: "secondary" }] },
      ],
    },
    seo: { title: "事業内容（SES） | PrimeWave" },
  },

  {
    id: "services-pricing",
    path: "/services/pricing",
    fileName: "services/pricing.ts",
    tabLabel: "pricing.ts",
    language: "ts",
    leftCode: `// /services/pricing.ts

type JPY = number;

function calculatePay(unitPrice: JPY): JPY {
  const margin: JPY = 70000;
  return unitPrice - margin;
}

const unitPrice: JPY = 750000;
const pay: JPY = calculatePay(unitPrice);

export { unitPrice, pay };
`,
    inspector: {
      title: "Inspector",
      subtitle: "Pricing",
      blocks: [
        { type: "hero", title: "// Transparent pricing", lines: ["“仕組み”を公開することが、信用になる。"] },
        {
          type: "kv",
          title: "Example",
          rows: [
            { k: "案件単価", v: "¥750,000" },
            { k: "マージン", v: "¥70,000（固定）" },
            { k: "支払額", v: "¥680,000" },
          ],
        },
        { type: "list", title: "Notes", items: ["契約条件（清算幅/稼働/リモート可否）は事前に開示", "不明点がある案件は“そのまま”伝える（盛らない）"] },
        { type: "cta", buttons: [{ label: "案件を見る", href: "/projects", variant: "primary" }] },
      ],
    },
    seo: { title: "単価・マージンの仕組み | PrimeWave" },
  },

  // ─────────────────────────────────────────────────────────────
  // /strengths
  // ─────────────────────────────────────────────────────────────
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
        { type: "cta", buttons: [{ label: "採用情報", href: "/careers", variant: "primary" }, { label: "理念を見る", href: "/about/philosophy", variant: "secondary" }] },
      ],
    },
    seo: { title: "強み | PrimeWave" },
  },

  // ─────────────────────────────────────────────────────────────
  // /careers/*
  // ─────────────────────────────────────────────────────────────
  {
    id: "careers-index",
    path: "/careers",
    fileName: "careers/index.ts",
    tabLabel: "index.ts",
    language: "ts",
    leftCode: `// /careers/index.ts

type Engineer = {
  values: string[];
  wants: { transparency: boolean; autonomy: boolean };
};

export function fit(engineer: Engineer) {
  if (engineer.wants.transparency && engineer.wants.autonomy) {
    return "PrimeWave is a good fit.";
  }
  return "Let's talk and find a better match.";
}
`,
    inspector: {
      title: "Inspector",
      subtitle: "Careers",
      blocks: [
        { type: "hero", title: "// Careers", lines: ["合う/合わないを、ちゃんと言う採用。"] },
        {
          type: "list",
          title: "We value",
          items: ["透明性を求める人", "自分で意思決定したい人", "技術で仕事を選びたい人"],
        },
        {
          type: "cta",
          buttons: [
            { label: "募集職種（エンジニア）", href: "/careers/engineer", variant: "primary" },
            { label: "募集職種（営業）", href: "/careers/sales", variant: "secondary" },
          ],
        },
      ],
    },
    seo: { title: "採用情報 | PrimeWave" },
  },

  {
    id: "careers-engineer",
    path: "/careers/engineer",
    fileName: "careers/engineer.ts",
    tabLabel: "engineer.ts",
    language: "ts",
    leftCode: `// /careers/engineer.ts

export const EngineerRole = {
  role: "Software Engineer",
  stack: ["Java", "Kotlin", "Flutter", "Web"],
  workStyle: ["Remote", "Hybrid"],
  policy: {
    transparency: true,
    chooseProjects: true,
  },
  apply: "/contact",
} as const;

export default EngineerRole;
`,
    inspector: {
      title: "Inspector",
      subtitle: "Role: Engineer",
      blocks: [
        { type: "hero", title: "// Role", lines: ["エンジニアが“納得して”働ける条件を揃える。"] },
        {
          type: "kv",
          title: "Summary",
          rows: [
            { k: "職種", v: "Software Engineer" },
            { k: "技術", v: "Java / Kotlin / Flutter / Web" },
            { k: "働き方", v: "リモート / ハイブリッド" },
            { k: "方針", v: "透明性・案件選択の主体" },
          ],
        },
        { type: "cta", buttons: [{ label: "応募・相談する", href: "/contact", variant: "primary" }, { label: "案件を見る", href: "/projects", variant: "secondary" }] },
      ],
    },
    seo: { title: "募集職種（エンジニア） | PrimeWave" },
  },

  {
    id: "careers-sales",
    path: "/careers/sales",
    fileName: "careers/sales.ts",
    tabLabel: "sales.ts",
    language: "ts",
    leftCode: `// /careers/sales.ts

export const SalesRole = {
  role: "Sales / BizDev",
  mission: "Engineer success first",
  focus: [
    "条件開示の徹底",
    "顧客課題の言語化",
    "長期継続の関係構築",
  ],
  apply: "/contact",
} as const;

export default SalesRole;
`,
    inspector: {
      title: "Inspector",
      subtitle: "Role: Sales",
      blocks: [
        { type: "hero", title: "// Role", lines: ["“売る”より先に、“正しく伝える”。"] },
        {
          type: "list",
          title: "Focus",
          items: ["条件開示の徹底", "顧客課題の言語化", "長期継続の関係構築"],
        },
        { type: "cta", buttons: [{ label: "応募・相談する", href: "/contact", variant: "primary" }] },
      ],
    },
    seo: { title: "募集職種（営業） | PrimeWave" },
  },

  // ─────────────────────────────────────────────────────────────
  // /projects
  // ─────────────────────────────────────────────────────────────
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
        {
          type: "list",
          title: "Found",
          items: [
            "Java / フルリモート / ¥75万",
            "Kotlin / リモート併用 / ¥72万",
            "Flutter / フルリモート / ¥70万",
          ],
        },
        { type: "cta", buttons: [{ label: "相談する", href: "/contact", variant: "primary" }, { label: "採用情報", href: "/careers", variant: "secondary" }] },
      ],
    },
    seo: { title: "案件一覧 | PrimeWave" },
  },

  // ─────────────────────────────────────────────────────────────
  // /faq
  // ─────────────────────────────────────────────────────────────
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
        {
          type: "list",
          title: "Questions",
          items: ["単価は見れますか？", "マージンは固定ですか？", "案件は選べますか？", "未経験でも大丈夫？"],
        },
        { type: "cta", buttons: [{ label: "お問い合わせ", href: "/contact", variant: "primary" }] },
      ],
    },
    seo: { title: "FAQ | PrimeWave" },
  },

  // ─────────────────────────────────────────────────────────────
  // /contact
  // ─────────────────────────────────────────────────────────────
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
        {
          type: "kv",
          title: "Contact",
          rows: [
            { k: "Email", v: "info@primewave.co.jp" },
            { k: "Form", v: "このページのフォーム（実装予定）" },
          ],
        },
        {
          type: "list",
          title: "Topics",
          items: ["参画相談（案件）", "採用相談", "協業・パートナー", "その他"],
        },
      ],
    },
    seo: { title: "お問い合わせ | PrimeWave" },
  },

  // ─────────────────────────────────────────────────────────────
  // /footer (任意)
  // ─────────────────────────────────────────────────────────────
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

export const DEFAULT_PATH = "/";

export function findPageByPath(path: string) {
  // normalize: remove trailing slash except root
  const normalized = path !== "/" ? path.replace(/\/+$/, "") : "/";
  return PAGES.find((p) => p.path === normalized);
}

export function allPaths() {
  return PAGES.map((p) => p.path);
}
