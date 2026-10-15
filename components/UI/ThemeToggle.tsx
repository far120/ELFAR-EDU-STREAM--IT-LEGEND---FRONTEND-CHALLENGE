"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check current theme from DOM
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);

    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Render placeholder to avoid layout shift before mount
  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-lg border border-transparent p-2" />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 shadow-sm transition-all hover:bg-gray-100 hover:text-emerald-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-emerald-400"
    >
      {isDark ? (
        <Sun className="h-4 w-4 transition-transform duration-200 hover:rotate-45 text-amber-400" />
      ) : (
        <Moon className="h-4 w-4 transition-transform duration-200 hover:-rotate-12 text-slate-700 dark:text-zinc-300" />
      )}
    </button>
  );
}
