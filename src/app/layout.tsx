import type { Metadata } from "next";
import Link from "next/link";
import { PageBackButton } from "@/components/PageBackButton";
import { PwaRegistrar } from "@/components/PwaRegistrar";
import "./globals.css";

export const metadata: Metadata = {
  title: "五年级单词冒险屋",
  description: "面向小朋友的五年级词汇学习应用"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PwaRegistrar />
        <div className="app-shell">
          <header className="topbar">
            <Link href="/" className="brand">
              <span className="brand-mark" aria-hidden="true">
                <svg viewBox="0 0 64 64" role="img">
                  <rect x="6" y="10" width="52" height="44" rx="14" fill="#fff4d9" />
                  <path d="M18 18c0-3.3 2.7-6 6-6h16c7.7 0 14 6.3 14 14v16c0 5.5-4.5 10-10 10H24c-3.3 0-6-2.7-6-6z" fill="#3d8b74" />
                  <path d="M24 23h14c4.6 0 8 3.2 8 7.2S42.6 37.5 38 37.5H24z" fill="#fffaf0" />
                  <circle cx="45" cy="19" r="5" fill="#ffcb77" />
                  <path d="M17 44c4.5-4.7 11-7.5 17.8-7.5 9.6 0 18.5 5.1 23 13H17z" fill="#ea7a67" />
                </svg>
              </span>
              <span>五年级单词冒险屋</span>
            </Link>
            <nav className="topnav">
              <Link href="/">首页</Link>
              <Link href="/review">复习</Link>
              <Link href="/mistakes">错题</Link>
              <Link href="/parent">家长查看</Link>
              <Link href="/author">作者的话</Link>
            </nav>
          </header>
          <main className="page-shell">
            <PageBackButton />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
