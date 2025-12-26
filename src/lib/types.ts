export type Lang = "md" | "ts" | "sql" | "http";

export type InspectorBlock =
  | { type: "hero"; title?: string; lines: string[] }
  | { type: "kv"; title: string; rows: Array<{ k: string; v: string }> }
  | { type: "tags"; title: string; tags: string[] }
  | { type: "list"; title: string; items: string[] }
  | { type: "cta"; title?: string; buttons: Array<{ label: string; href: string; variant?: "primary" | "secondary" }> };

export type PageDef = {
  id: string;
  path: string;              // "/about/company"
  fileName: string;          // "about/company.ts"
  tabLabel: string;          // "company.ts"
  language: Lang;
  leftCode: string;          // plain text
  inspector: {
    title: string;           // "Inspector"
    subtitle?: string;       // "CompanyProfile"
    blocks: InspectorBlock[];
  };
  seo?: {
    title: string;
    description?: string;
  };
};
