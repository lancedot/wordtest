import type { Metadata } from "next";
import Link from "next/link";
import { PageBackButton } from "@/components/PageBackButton";
import { PwaRegistrar } from "@/components/PwaRegistrar";
import { getCurrentWeek } from "@/lib/content-store";
import { getStudySetHref } from "@/lib/curriculum";
import "./globals.css";

export const metadata: Metadata = {
  title: "五年级词汇书单词实验室",
  description: "面向小朋友的中文词汇学习应用"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentWeek = getCurrentWeek();

  return (
    <html lang="en">
      <body>
        <PwaRegistrar />
        <div className="app-shell">
          <header className="topbar">
            <Link href="/" className="brand">
              五年级词汇书单词实验室
            </Link>
            <nav className="topnav">
              <Link href="/">首页</Link>
              <Link href={getStudySetHref(currentWeek)}>本单元学习</Link>
              <Link href="/review">复习</Link>
              <Link href="/parent">家长查看</Link>
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
