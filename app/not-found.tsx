import Link from 'next/link';
import { Home, Compass, AlertCircle, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-[75vh] flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
      
      {/* Decorative Badge */}
      <div className="relative mb-6">
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400 ring-8 ring-emerald-500/10 shadow-lg shadow-emerald-500/10">
          <AlertCircle className="h-10 w-10 stroke-[2.2]" />
        </div>
        <span className="absolute -top-2 -right-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 px-2.5 py-0.5 text-xs font-bold text-white shadow-sm">
          404
        </span>
      </div>

      {/* Main Title & Copy */}
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
        Page Not Found
      </h1>
      
      <p className="mt-4 max-w-md text-sm sm:text-base text-gray-600 dark:text-zinc-400 leading-relaxed">
        Sorry, we couldn&apos;t find the course or page you&apos;re looking for. It might have been moved, removed, or the link may be broken.
      </p>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
        <Link
          href="/"
          className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 hover:text-gray-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 transition-colors"
        >
          <Home className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>

        <Link
          href="/courses"
          className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-500/20 hover:from-emerald-700 hover:to-teal-600 transition-all"
        >
          <Compass className="h-4 w-4" />
          <span>Explore Courses</span>
        </Link>
      </div>

      {/* Subtle suggestion */}
      <div className="mt-12 rounded-xl border border-dashed border-gray-200 p-4 dark:border-zinc-800 max-w-sm">
        <p className="text-xs text-gray-500 dark:text-zinc-500">
          Looking for the active player? Check the{' '}
          <Link href="/courses/1" className="font-medium text-emerald-600 dark:text-emerald-400 hover:underline">
            SEO Masterclass Player
          </Link>
        </p>
      </div>

    </div>
  );
}
