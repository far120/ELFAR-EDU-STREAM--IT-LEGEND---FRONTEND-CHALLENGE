'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error to an error reporting service if needed
    console.error('Unhandled app error:', error);
  }, [error]);

  return (
    <div className="flex min-h-[75vh] flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
      
      {/* Error Badge */}
      <div className="relative mb-6">
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-rose-50 text-rose-600 dark:bg-rose-950/50 dark:text-rose-400 ring-8 ring-rose-500/10 shadow-lg shadow-rose-500/10">
          <AlertTriangle className="h-10 w-10 stroke-[2.2]" />
        </div>
      </div>

      {/* Title & Description */}
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
        Something went wrong!
      </h1>
      
      <p className="mt-4 max-w-md text-sm sm:text-base text-gray-600 dark:text-zinc-400 leading-relaxed">
        An unexpected error occurred while loading this section. You can try reloading the component or navigating back to safety.
      </p>

      {error?.digest && (
        <p className="mt-2 text-xs font-mono text-gray-400 dark:text-zinc-500">
          Digest ID: {error.digest}
        </p>
      )}

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-500/20 hover:bg-emerald-700 transition-colors"
        >
          <RefreshCw className="h-4 w-4" />
          <span>Try Again</span>
        </button>

        <Link
          href="/"
          className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 hover:text-gray-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 transition-colors"
        >
          <Home className="h-4 w-4" />
          <span>Go to Home</span>
        </Link>
      </div>

    </div>
  );
}