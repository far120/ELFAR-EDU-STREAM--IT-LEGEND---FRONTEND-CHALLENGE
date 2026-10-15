'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, Heart, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full border-t border-gray-200 bg-gray-50 dark:border-zinc-800 dark:bg-zinc-950 text-gray-600 dark:text-zinc-400 transition-colors">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          
          {/* Brand Info & Mission */}
          <div className="lg:col-span-2">
            <Link 
              href="/courses" 
              className="inline-flex items-center gap-2.5 font-bold text-xl tracking-tight text-gray-900 dark:text-white"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-md shadow-emerald-500/20">
                <BookOpen className="h-4 w-4" />
              </div>
              <span className="bg-gradient-to-r from-gray-950 to-gray-700 bg-clip-text text-transparent dark:from-white dark:to-zinc-300 font-extrabold tracking-tight">
                ELFAR <span className="text-emerald-600 dark:text-emerald-400">EDU STREAM</span>
              </span>
            </Link>
            
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-600 dark:text-zinc-400">
              An interactive learning hub engineered to take you from foundational concepts to production-grade mastery through structured courses, assessments, and community engagement.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://github.com/far120"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:text-gray-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/mostafa-mahmoud-elfar-6a67732b5"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:text-gray-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.5 1.5 0 1 0-.01-3.01 1.5 1.5 0 0 0 .01 3.01m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-zinc-100">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link 
                  href="/courses" 
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  All Courses
                </Link>
              </li>
              <li>
                <Link 
                  href="/courses/1" 
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  Active Course Player
                </Link>
              </li>
              <li>
                <span className="text-gray-400 dark:text-zinc-500 cursor-not-allowed">
                  Learning Paths
                </span>
              </li>
              <li>
                <span className="text-gray-400 dark:text-zinc-500 cursor-not-allowed">
                  Certifications
                </span>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-zinc-100">
              Community & Help
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <span className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer">
                  Student Discussions
                </span>
              </li>
              <li>
                <span className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer">
                  Leaderboard Rankings
                </span>
              </li>
              <li>
                <span className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer">
                  Knowledge Base & FAQ
                </span>
              </li>
              <li>
                <span className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer">
                  Ask Instructor Support
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Updates */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-zinc-100">
              Stay Informed
            </h3>
            <p className="mt-4 text-xs leading-relaxed text-gray-600 dark:text-zinc-400">
              Receive notifications for newly published modules, exams, and weekly leaderboard digests.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-3 flex flex-col gap-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-2 text-xs font-semibold text-white hover:bg-emerald-700 transition-colors shadow-sm"
              >
                <Mail className="h-3.5 w-3.5" />
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-200 pt-8 dark:border-zinc-800 sm:flex sm:items-center sm:justify-between">
          <p className="text-xs text-gray-500 dark:text-zinc-500 flex items-center gap-1">
            © {currentYear} ELFAR EDU STREAM Platform. Crafted by <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Mostafa ELFAR</span> for learners.
          </p>

          <div className="mt-4 flex space-x-6 sm:mt-0 text-xs">
            <span className="text-gray-500 hover:text-gray-700 dark:text-zinc-500 dark:hover:text-zinc-400 cursor-pointer">
              Privacy Policy
            </span>
            <span className="text-gray-500 hover:text-gray-700 dark:text-zinc-500 dark:hover:text-zinc-400 cursor-pointer">
              Terms of Service
            </span>
            <span className="text-gray-500 hover:text-gray-700 dark:text-zinc-500 dark:hover:text-zinc-400 cursor-pointer">
              Cookie Preferences
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
