import React from 'react';

export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      
      {/* Top Banner Skeleton */}
      <div className="mb-10 animate-pulse">
        <div className="h-4 w-32 rounded-full bg-gray-200 dark:bg-zinc-800 mb-4" />
        <div className="h-8 w-64 rounded-xl bg-gray-200 dark:bg-zinc-800 mb-3" />
        <div className="h-4 w-96 max-w-full rounded-lg bg-gray-100 dark:bg-zinc-800/60" />
      </div>

      {/* Course Cards Skeleton Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-zinc-800 dark:bg-zinc-900 animate-pulse"
          >
            {/* Thumbnail skeleton */}
            <div className="aspect-video w-full bg-gray-200 dark:bg-zinc-800 relative">
              <div className="absolute top-3 left-3 h-5 w-20 rounded-full bg-gray-300 dark:bg-zinc-700" />
            </div>

            {/* Content skeleton */}
            <div className="p-5 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-3">
                <div className="h-3.5 w-16 rounded bg-gray-200 dark:bg-zinc-800" />
                <div className="h-3.5 w-20 rounded bg-gray-200 dark:bg-zinc-800" />
              </div>

              <div className="h-5 w-3/4 rounded-lg bg-gray-200 dark:bg-zinc-800 mb-2" />
              <div className="h-3.5 w-full rounded bg-gray-100 dark:bg-zinc-800/60 mb-1.5" />
              <div className="h-3.5 w-2/3 rounded bg-gray-100 dark:bg-zinc-800/60 mb-4" />

              {/* Progress bar skeleton */}
              <div className="mt-auto pt-2">
                <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-zinc-800 mb-4" />
                
                {/* Footer skeleton */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-zinc-800">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-zinc-800" />
                    <div className="h-3 w-20 rounded bg-gray-200 dark:bg-zinc-800" />
                  </div>
                  <div className="h-8 w-24 rounded-xl bg-gray-200 dark:bg-zinc-800" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
