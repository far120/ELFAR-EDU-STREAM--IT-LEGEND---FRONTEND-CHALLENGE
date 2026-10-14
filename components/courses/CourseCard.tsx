import Link from "next/link";
import { Clock, BookOpen, Star, ArrowRight } from "lucide-react";
import { Course } from "@/types/courses";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      {/* Course Thumbnail & Badges */}
      <div className="relative aspect-video w-full overflow-hidden bg-gray-100 dark:bg-zinc-800">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="rounded-full bg-emerald-600/90 px-2.5 py-1 text-xs font-medium text-white shadow-sm backdrop-blur-sm">
            {course.category}
          </span>
          <span className="rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium text-white shadow-sm backdrop-blur-sm">
            {course.level}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Rating */}
        <div className="mb-2 flex items-center gap-1.5 text-xs text-amber-500 font-semibold">
          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
          <span>{course.rating}</span>
          <span className="text-gray-400 font-normal">({course.reviewsCount} reviews)</span>
        </div>

        {/* Title & Description */}
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 dark:text-zinc-100 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
          {course.title}
        </h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-zinc-400 line-clamp-2 leading-relaxed">
          {course.shortDescription}
        </p>

        {/* Instructor */}
        <div className="mt-4 flex items-center gap-3 border-t border-gray-100 pt-4 dark:border-zinc-800">
          <img
            src={course.materials.instructor.avatar}
            alt={course.materials.instructor.name}
            className="h-8 w-8 rounded-full object-cover ring-1 ring-gray-200 dark:ring-zinc-700"
          />
          <div className="flex flex-col text-xs">
            <span className="font-semibold text-gray-800 dark:text-zinc-200">
              {course.materials.instructor.name}
            </span>
            <span className="text-gray-400 dark:text-zinc-500">
              {course.materials.instructor.role}
            </span>
          </div>
        </div>

        {/* Card Footer */}
        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4 text-xs text-gray-500 dark:border-zinc-800 dark:text-zinc-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
              {course.materials.duration}
            </span>
            <span className="flex items-center gap-1">
              <BookOpen className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
              {course.materials.lessonsCount} lessons
            </span>
          </div>

          <Link
            href={`/courses/${course.id}`}
            className="inline-flex items-center gap-1 font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
          >
            View
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
