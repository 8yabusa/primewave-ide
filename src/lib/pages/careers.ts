// src/lib/pages/careers.ts
import type { PageDef } from "../types";

export const CAREERS_PAGES: PageDef[] = [
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
        { type: "list", title: "We value", items: ["透明性を求める人", "自分で意思決定したい人", "技術で仕事を選びたい人"] },
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
        {
          type: "cta",
          buttons: [
            { label: "応募・相談する", href: "/contact", variant: "primary" },
            { label: "案件を見る", href: "/projects", variant: "secondary" },
          ],
        },
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
        { type: "list", title: "Focus", items: ["条件開示の徹底", "顧客課題の言語化", "長期継続の関係構築"] },
        { type: "cta", buttons: [{ label: "応募・相談する", href: "/contact", variant: "primary" }] },
      ],
    },
    seo: { title: "募集職種（営業） | PrimeWave" },
  },
];
