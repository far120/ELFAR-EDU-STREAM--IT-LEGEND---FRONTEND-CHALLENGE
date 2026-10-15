"use client";

import { Award, Zap } from "lucide-react";

interface CourseProgressProps {
  progressPercentage: number;
}

export default function CourseProgress({ progressPercentage }: CourseProgressProps) {
  const progress = Math.min(
    100,
    Math.max(0, progressPercentage)
  );

  const level =
    progress >= 80
      ? "Advanced Master"
      : progress >= 40
        ? "Intermediate Learner"
        : "Getting Started";

  const badge =
    progress >= 80
      ? "Expert 🏆"
      : progress >= 40
        ? "On Track 🚀"
        : "Beginner ✨";

  const radius = 32;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-500">Course Progress</p>

          <div className="mt-1 flex items-center gap-2">
            <span className="text-lg font-bold">
              {progress}%
            </span>

            <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-xs text-emerald-700">
              <Zap size={12} />
              {badge}
            </span>
          </div>

          <p className="mt-1 text-xs text-gray-500">
            Level: {level}
          </p>
        </div>

        <div className="relative h-16 w-16">
          <svg
            viewBox="0 0 76 76"
            className="-rotate-90"
          >
            <circle
              cx="38"
              cy="38"
              r={radius}
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              className="text-gray-200 dark:text-zinc-700"
            />

            <circle
              cx="38"
              cy="38"
              r={radius}
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              strokeDasharray={circumference}
              strokeDashoffset={
                circumference - (progress / 100) * circumference
              }
              strokeLinecap="round"
              className="text-emerald-500"
            />
          </svg>

          <Award
            size={20}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-emerald-600"
          />
        </div>
      </div>

      <div className="mt-3 h-1.5 rounded-full bg-gray-100 dark:bg-zinc-800">
        <div
          className="h-full rounded-full bg-emerald-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

