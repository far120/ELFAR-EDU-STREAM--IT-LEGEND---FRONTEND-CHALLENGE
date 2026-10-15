import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Trophy, Sparkles, CheckCircle2, Zap, GraduationCap } from "lucide-react";
import { getAllCourses } from "@/data/courses";
import CourseCard from "@/components/courses/CourseCard";

export default function Home() {
  const courses = getAllCourses();
  const featuredCourses = courses.slice(0, 3);

  return (
    <div className="flex flex-col gap-16 pb-16 md:gap-24 md:pb-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/60 to-transparent pt-12 pb-16 dark:from-emerald-950/20 dark:to-transparent md:pt-20 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
              <GraduationCap className="h-3.5 w-3.5" />
              <span>Interactive Learning Platform</span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
              Master Modern Skills with{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                Practical Projects
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-gray-600 dark:text-zinc-400">
              Upgrade your career with hands-on courses in Web Development, SEO, and UI/UX Design.
              Watch lessons, solve quizzes, track your progress, and earn certificates.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-500/20 transition hover:bg-emerald-700 hover:shadow-lg"
              >
                Explore Courses
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#featured"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                View Featured
              </a>
            </div>

            {/* Quick Stats Strip */}
            <div className="mt-12 grid grid-cols-2 gap-4 border-t border-gray-200/60 pt-8 dark:border-zinc-800 sm:grid-cols-4">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">4+</span>
                <span className="text-xs text-gray-500 dark:text-zinc-400">Complete Tracks</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">1,500+</span>
                <span className="text-xs text-gray-500 dark:text-zinc-400">Enrolled Students</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">4.9 ★</span>
                <span className="text-xs text-gray-500 dark:text-zinc-400">Average Rating</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">100%</span>
                <span className="text-xs text-gray-500 dark:text-zinc-400">Self-Paced</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features / Why Choose Us */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
            Why Learn With ELFAR EDU STREAM?
          </h2>
          <p className="mt-2 text-sm text-gray-600 sm:text-base dark:text-zinc-400">
            Everything you need to go from beginner to job-ready professional.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
              <BookOpen className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">
              Practical Curriculum
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-zinc-400 leading-relaxed">
              Step-by-step video tutorials, downloadable reference files, and practical exercises designed for real-world projects.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">
              Learn At Your Own Pace
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-zinc-400 leading-relaxed">
              Lifetime access to lessons and updates. Study whenever you have time, on your phone, tablet, or desktop computer.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
              <Trophy className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">
              Assessments & Certificates
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-zinc-400 leading-relaxed">
              Test your knowledge after each section with interactive quizzes and receive a certificate to showcase your skills.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section id="featured" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
              Featured Courses
            </h2>
            <p className="mt-2 text-sm text-gray-600 sm:text-base dark:text-zinc-400">
              Explore our most popular and highest rated courses.
            </p>
          </div>
          <Link
            href="/courses"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
          >
            View all courses
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Courses Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-700 px-6 py-12 text-center text-white shadow-xl sm:px-12 sm:py-16">
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Ready to Upgrade Your Skills?
            </h2>
            <p className="mt-4 text-base text-emerald-100 sm:text-lg">
              Start learning today with structured paths, quizzes, and community progress tracking.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/courses"
                className="rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-emerald-700 shadow-md transition hover:bg-emerald-50 hover:shadow-lg"
              >
                Browse All Courses
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
