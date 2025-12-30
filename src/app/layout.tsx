// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  // 全ページ共通のデフォルト（ページ側があればそっち優先）
  title: {
    default: "PrimeWave",
    template: "%s",
  },
  description: "IDE風UIで体験するコーポレートサイト",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
