import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PrimeWave | IDE Corporate",
  description: "IDE風UIで体験するコーポレートサイト",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
