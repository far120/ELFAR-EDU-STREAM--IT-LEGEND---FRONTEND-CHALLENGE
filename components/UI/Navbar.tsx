'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, Bell, Menu, X, ChevronDown, CheckCircle2, Home } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Static logged-in user data
  const currentUser = {
    name: 'Alex Johnson',
    role: 'Enrolled Student',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    email: 'alex.johnson@example.com',
  };

  const isHomeActive = pathname === '/';
  const isCoursesActive = pathname.startsWith('/courses');

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/95 transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo & Desktop Nav */}
        <div className="flex items-center gap-8">
          <Link 
            href="/" 
            className="flex items-center gap-2.5 font-bold text-xl tracking-tight text-gray-900 dark:text-white transition-opacity hover:opacity-90"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-md shadow-emerald-500/20">
              <BookOpen className="h-5 w-5" />
            </div>
            <span className="bg-gradient-to-r from-gray-950 to-gray-700 bg-clip-text text-transparent dark:from-white dark:to-zinc-300 font-extrabold tracking-tight">
              ELFAR <span className="text-emerald-600 dark:text-emerald-400">EDU STREAM</span>
            </span>
          </Link>

          {/* Desktop Navigation (Home & Courses) */}
          <nav className="hidden md:flex items-center gap-2">
            <Link
              href="/"
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                isHomeActive
                  ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 font-semibold'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-800/60'
              }`}
            >
              Home
              {isHomeActive && (
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-emerald-600 dark:bg-emerald-400 rounded-full" />
              )}
            </Link>

            <Link
              href="/courses"
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                isCoursesActive
                  ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 font-semibold'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-800/60'
              }`}
            >
              Courses
              {isCoursesActive && (
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-emerald-600 dark:bg-emerald-400 rounded-full" />
              )}
            </Link>
          </nav>
        </div>

        {/* Right Section: Notification & Static Logged-in User */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            type="button"
            aria-label="Notifications"
            className="relative rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white transition-colors"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-zinc-950" />
          </button>

          {/* Static Logged-in User Profile */}
          <div className="flex items-center gap-3 pl-3 border-l border-gray-200 dark:border-zinc-800">
            <div className="relative">
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="h-10 w-10 rounded-full object-cover ring-2 ring-emerald-500/30"
              />
              <span 
                title="Online"
                className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-zinc-950" 
              />
            </div>

            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-semibold text-gray-900 dark:text-zinc-100 leading-tight">
                  {currentUser.name}
                </span>
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 fill-emerald-500/20" />
              </div>
              <span className="text-xs text-gray-500 dark:text-zinc-400">
                {currentUser.role}
              </span>
            </div>

            <ChevronDown className="h-4 w-4 text-gray-400 dark:text-zinc-500" />
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-gray-200 bg-white px-4 pt-3 pb-6 dark:border-zinc-800 dark:bg-zinc-950 sm:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1 pb-4">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between rounded-lg px-4 py-2.5 text-base font-medium ${
                isHomeActive
                  ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 font-semibold'
                  : 'text-gray-700 hover:bg-gray-100 dark:text-zinc-300 dark:hover:bg-zinc-800'
              }`}
            >
              <span>Home</span>
              {isHomeActive && (
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">
                  Active
                </span>
              )}
            </Link>

            <Link
              href="/courses"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between rounded-lg px-4 py-2.5 text-base font-medium ${
                isCoursesActive
                  ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 font-semibold'
                  : 'text-gray-700 hover:bg-gray-100 dark:text-zinc-300 dark:hover:bg-zinc-800'
              }`}
            >
              <span>Courses</span>
              {isCoursesActive && (
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">
                  Active
                </span>
              )}
            </Link>
          </nav>

          {/* Mobile User Profile Section */}
          <div className="border-t border-gray-100 pt-4 dark:border-zinc-800">
            <div className="flex items-center gap-3 px-2">
              <div className="relative">
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-emerald-500/30"
                />
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-zinc-950" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-900 dark:text-zinc-100">
                  {currentUser.name}
                </span>
                <span className="text-xs text-gray-500 dark:text-zinc-400">
                  {currentUser.email}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
