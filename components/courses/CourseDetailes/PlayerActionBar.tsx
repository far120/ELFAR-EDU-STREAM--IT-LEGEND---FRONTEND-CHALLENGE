"use client";

import { BookOpen, MessageSquare, HelpCircle, Trophy } from "lucide-react";

interface PlayerActionBarProps {
  onScrollToCurriculum: () => void;
  onScrollToComments: () => void;
  onOpenAskQuestion: () => void;
  onOpenLeaderboard: () => void;
}

export default function PlayerActionBar({onScrollToCurriculum,onScrollToComments,onOpenAskQuestion,onOpenLeaderboard,}: PlayerActionBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-3 py-3 border-b border-gray-100 dark:border-zinc-800">
      {/* 1. Curriculum Button */}
      <button
        onClick={onScrollToCurriculum}
        className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-700 shadow-sm transition hover:border-emerald-500 hover:text-emerald-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-emerald-500 dark:hover:text-emerald-400"
      >
        <BookOpen className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
        <span>Curriculum</span>
      </button>

      {/* 2. Comments Button */}
      <button
        onClick={onScrollToComments}
        className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-700 shadow-sm transition hover:border-emerald-500 hover:text-emerald-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-emerald-500 dark:hover:text-emerald-400"
      >
        <MessageSquare className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
        <span>Comments</span>
      </button>

      {/* 3. Ask Question Button (Popup with auto-save draft) */}
      <button
        onClick={onOpenAskQuestion}
        className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-700 shadow-sm transition hover:border-emerald-500 hover:text-emerald-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-emerald-500 dark:hover:text-emerald-400"
      >
        <HelpCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
        <span>Ask Question</span>
      </button>

      {/* 4. Leaderboard Button (Popup with Eng. Ali Shaheen quote + ranking) */}
      <button
        onClick={onOpenLeaderboard}
        className="inline-flex items-center gap-1.5 rounded-lg border border-amber-200 bg-amber-50/80 px-3 py-2 text-xs font-semibold text-amber-800 shadow-sm transition hover:bg-amber-100 dark:border-amber-900/50 dark:bg-amber-950/40 dark:text-amber-300 dark:hover:bg-amber-950/70"
      >
        <Trophy className="h-4 w-4 text-amber-600 dark:text-amber-400" />
        <span>Leaderboard</span>
      </button>
    </div>
  );
}
