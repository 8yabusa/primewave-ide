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

// Engineer First.
// Transparency by Design.

> エンジニアが正当に評価される世界を、仕様として実装する。

---

## What we do

- SES（System Engineering Service）
- ITエンジニア教育事業
- DX / 技術コンサルティング

---

## Philosophy

- 単価・マージン・契約の透明化
- エンジニア主体の案件選択
- 長期視点のキャリア形成

---

## Quick Links

- /services/ses
- /services/pricing
- /careers
- /about/philosophy
`,
    inspector: {
      title: "Inspector",
      subtitle: "Top",
      blocks: [
        // ───────────────── Hero ─────────────────
        {
          type: "hero",
          title: "// PrimeWave株式会社",
          lines: [
            "try { Challenge(); } catch(e) { Support(e); }",
            "恐れず挑め。",
          ],
        },

        // ───────────────── MVV ─────────────────
        {
          type: "kv",
          title: "Mission / Vision / Value",
          rows: [
            {
              k: "Mission",
              v: "エンジニアの力でこの場所をよりよくする",
            },
            {
              k: "Vision",
              v: "昨日より一歩進んだ明日をデプロイし続ける",
            },
            {
              k: "Value",
              v: "まずは動くものを / 失敗を責めず、仕組みを直す / 誠実さをリスペクト",
            },
          ],
        },

        // ───────────────── Services ─────────────────
        {
          type: "list",
          title: "Services",
          items: [
            "SES事業：エンジニアの意思と中長期キャリアを起点に案件にアサインするSES",
            "ITエンジニア教育事業：プロが教える、実務に直結するシステム開発",
            "DXコンサルティング：現場視点でのシステム改善・内製化支援",
          ],
        },

        // ───────────────── Why PrimeWave ─────────────────
        {
          type: "kv",
          title: "Why PrimeWave",
          rows: [
            { k: "希望を聞く", v: "技術・働き方・将来像。すべてを前提にします。" },
            { k: "条件を開示する", v: "単価・役割・期待値を、隠さず共有します。" },
            { k: "キャリアを設計する", v: "今だけでなく、1年後・3年後・10年後に市場価値が高まるかを考えます。" },
            { k: "つながりをつくる", v: "会社として、エンジニア同士の関係性を大切にします。" },
          ],
        },


  // ───────────────── Recruitment ─────────────────
  {
    type: "hero",
    title: "// Join PrimeWave",
    lines: [
      "エンジニアとして、どう働くかを自分で決めたい人へ。",
      "私たちは「合う人」とだけ、一緒に仕事をしたい。",
    ],
  },

  {
    type: "list",
    title: "We are looking for",
    items: [
      "技術を理由に仕事を選びたい人",
      "条件や背景を理解した上で、納得して働きたい人",
      "短期の単価より、長期の市場価値を高めたい人",
      "一人で戦うSESに、違和感を持ったことがある人",
    ],
  },

  {
    type: "cta",
    buttons: [
      {
        label: "採用ページを見る",
        href: "/careers",
        variant: "primary",
      },
    ],
  },

  // ───────────────── Contact ─────────────────
  {
    type: "hero",
    title: "// Contact",
    lines: [
      "まだ言語化できていなくても構いません。",
      "まずは、今考えていることを聞かせてください。",
    ],
  },

  {
    type: "cta",
    buttons: [
      {
        label: "お問い合わせ",
        href: "/contact",
        variant: "secondary",
      },
    ],
  },
  
      ],
    },
    seo: {
      title: "PrimeWave | Engineer First Company",
      description: "エンジニアの価値を最大化するSES・教育・DX支援会社",
    },
  },
];
