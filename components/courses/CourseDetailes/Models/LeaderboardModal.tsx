"use client";

import { X, Trophy, Medal, Star } from "lucide-react";
import { CourseLeaderboard } from "@/types/courses";

interface LeaderboardModalProps {
  courseTitle: string;
  leaderboard: CourseLeaderboard;
  studentProgressPercentage: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function LeaderboardModal({courseTitle,leaderboard,studentProgressPercentage,isOpen,onClose}: LeaderboardModalProps) {
  if (!isOpen) return null;


  const matchedQuote = leaderboard.motivationalQuotes.find((q) =>{
      studentProgressPercentage >= q.minProgress &&
        studentProgressPercentage <= q.maxProgress
  }) || leaderboard.motivationalQuotes[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-900 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 p-5 dark:border-zinc-800">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400">
              <Trophy className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900 dark:text-zinc-100">
                Leaderboard
              </h3>
              <p className="text-xs text-gray-500 dark:text-zinc-400 truncate max-w-xs">
                {courseTitle}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Leaderboard"
            className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-200 transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-5 space-y-5">
          {/* Eng. Ali Shaheen's Motivational Message  */}
          {matchedQuote && (
            <div className="relative overflow-hidden rounded-xl border border-amber-200 bg-gradient-to-r from-amber-50/90 to-yellow-50/60 p-4 dark:border-amber-900/50 dark:from-amber-950/40 dark:to-yellow-950/20">
              <div className="flex items-start gap-3">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
                  alt={matchedQuote.author}
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-amber-400 shrink-0"
                />

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-900 dark:text-amber-300">
                      {matchedQuote.author}
                    </span>
                    <span className="text-lg">{matchedQuote.emoji}</span>
                  </div>

                  <p
                    className="mt-1.5 text-xs font-medium text-amber-950 dark:text-amber-100 leading-relaxed"
                  >
                    "{matchedQuote.quote}"
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Students Ranking List */}
          <div>
            <h4 className="text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider mb-3">
              Top Ranked Students
            </h4>

            <div className="space-y-2">
              {leaderboard.students.map((student) => {
                // const isTop1 = student.rank === 1;
                // const isTop2 = student.rank === 2;
                // const isTop3 = student.rank === 3;

                return (
                  <div  key={student.id}
                    className={`flex items-center justify-between rounded-xl border p-3 transition 
                      ${student.isCurrentUser
                        ? "border-emerald-500 bg-emerald-50/40 dark:border-emerald-600 dark:bg-emerald-950/20"
                        : "border-gray-100 bg-gray-50/50 hover:bg-gray-50 dark:border-zinc-800 dark:bg-zinc-800/40 dark:hover:bg-zinc-800"
                    }`}
                  >
                    {/* Left: Rank & Avatar & Name */}
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="flex h-7 w-7 items-center justify-center font-bold text-xs shrink-0">
                        {student.rank === 1 ? (
                          <Medal className="h-5 w-5 text-amber-500" />
                        ) : student.rank === 2 ? (
                          <Medal className="h-5 w-5 text-gray-400" />
                        ) : student.rank === 3 ? (
                          <Medal className="h-5 w-5 text-amber-700" />
                        ) : (
                          <span className="text-gray-500 dark:text-zinc-400 font-semibold">
                            #{student.rank}
                          </span>
                        )}
                      </div>

                      <img
                        src={student.avatar}
                        alt={student.name}
                        className="h-8 w-8 rounded-full object-cover ring-1 ring-gray-200 dark:ring-zinc-700 shrink-0"
                      />

                      <div className="truncate">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-semibold text-gray-900 dark:text-zinc-100 truncate">
                            {student.name}
                          </span>
                          {student.isCurrentUser && (
                            <span className="rounded bg-emerald-600 px-1.5 py-0.2 text-[9px] font-bold text-white">
                              You
                            </span>
                          )}
                        </div>
                        {student.badge && (
                          <span className="text-[10px] text-gray-400 dark:text-zinc-500">
                            {student.badge}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Right: Points & Progress */}
                    <div className="text-right shrink-0">
                      <span className="flex items-center justify-end gap-1 text-xs font-bold text-gray-900 dark:text-zinc-100">
                        <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                        {student.points} pts
                      </span>
                      <span className="text-[10px] text-emerald-600 font-medium">
                        {student.progressPercentage}% done
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
