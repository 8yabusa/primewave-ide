// src/lib/pages/services.ts
import type { PageDef } from "../types";

export const SERVICES_PAGES: PageDef[] = [
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
        { type: "list", title: "Flow", items: ["要件受領", "条件開示（単価・清算・働き方）", "スキル/志向マッチ", "合意・契約", "参画・フォロー"] },
        {
          type: "cta",
          buttons: [
            { label: "単価・マージン", href: "/services/pricing", variant: "primary" },
            { label: "案件一覧", href: "/projects", variant: "secondary" },
          ],
        },
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
];
