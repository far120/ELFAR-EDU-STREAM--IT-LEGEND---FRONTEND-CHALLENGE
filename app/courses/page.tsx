"use client";

import { useState } from "react";
import { getAllCourses } from "@/data/courses";
import CourseCard from "@/components/courses/CourseCard";
import { Search, Sparkles } from "lucide-react";

export default function CoursesPage() {
  const allCourses = getAllCourses();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Get unique categories list
  const categories = ["All", ...Array.from(new Set(allCourses.map((c) => c.category)))];

  // Filter courses based on category and search query
  const filteredCourses = allCourses.filter((course) => {
    const matchesCategory =
      selectedCategory === "All" || course.category === selectedCategory;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.materials.instructor.name.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between border-b border-gray-100 pb-8 dark:border-zinc-800">
        <div>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
            <Sparkles className="h-3 w-3" />
            <span>Interactive Catalog</span>
          </div>
          <h1 className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Explore Courses
          </h1>
          <p className="mt-1 text-sm text-gray-600 dark:text-zinc-400">
            Browse practical, hands-on courses and continue your learning journey.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search courses or mentors..."
            className="w-full rounded-xl border border-gray-200 bg-white pl-10 pr-4 py-2.5 text-xs text-gray-900 placeholder:text-gray-400 shadow-sm focus:border-emerald-500 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 transition"
          />
        </div>
      </div>

      {/* Categories Filter Tabs */}
      <div className="mt-6 flex flex-wrap items-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition ${
              selectedCategory === cat
                ? "bg-emerald-600 text-white shadow-sm"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Courses Grid */}
      {filteredCourses.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="mt-16 text-center py-12 border border-dashed border-gray-200 rounded-2xl dark:border-zinc-800">
          <p className="text-sm font-medium text-gray-500 dark:text-zinc-400">
            No courses found matching "{searchQuery}".
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="mt-3 text-xs font-semibold text-emerald-600 hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}