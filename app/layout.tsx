import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/UI/Navbar";
import Footer from "@/components/UI/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ELFAR EDU STREAM - Online Courses & Course Player",
  description: "An interactive, modern course learning platform with progress tracking, assessments, and community leaderboard.",
};

export default function RootLayout({ children, }: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const saved = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (saved === 'dark' || (!saved && prefersDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head> */}
      <body className="min-h-full flex flex-col bg-white text-gray-900 dark:bg-zinc-950 dark:text-zinc-100 transition-colors">
        <Suspense fallback={<div className="h-16 w-full border-b border-gray-200 dark:border-zinc-800" />}>
          <Navbar />
        </Suspense>
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
