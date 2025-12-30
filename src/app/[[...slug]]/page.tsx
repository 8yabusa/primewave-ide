// src/app/[[...slug]]/page.tsx
import type { Metadata } from "next";
import IdeShell from "@/components/IdeShell";
import { findPageByPath } from "@/lib/pages";

type Props = { params: { slug?: string[] } };

function slugToPath(slug?: string[]) {
  // "/" or "/about/company" のような形にする
  const path = "/" + (slug?.join("/") ?? "");
  // 末尾スラッシュを除去（root以外）
  return path !== "/" ? path.replace(/\/+$/, "") : "/";
}

// ✅ ここがSEO自動化の本体
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const path = slugToPath(slug);
  const page = findPageByPath(path);

  // ページが見つからない場合のSEO（お好みで調整）
  if (!page) {
    return {
      title: "Not Found | PrimeWave",
      description: "指定されたページは見つかりませんでした。",
      robots: { index: false, follow: false },
    };
  }

  const siteName = "PrimeWave";

  // page.seo があればそれを優先、なければ tabLabel などから生成
  const title = page.seo?.title ?? `${page.tabLabel} | ${siteName}`;
  const description = page.seo?.description ?? "IDE風UIで体験するコーポレートサイト";

  return {
    title,
    description,
    // OGP（SNSシェア）の最低限も付けておくと便利
    openGraph: {
      title,
      description,
      siteName,
      type: "website",
      url: page.path,
    },
    // Twitterカード（最低限）
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

// Page 本体も同様に params を await できる形にしておくと安全
export default async function Page({ params }: Props) {
  // ここでは slug を使わなくてもOK（IdeShellが usePathname を見て動くため）
  // ただし params を await しておくと Next 的に“動的”と認識しやすい
  await params;
  return <IdeShell />;
}