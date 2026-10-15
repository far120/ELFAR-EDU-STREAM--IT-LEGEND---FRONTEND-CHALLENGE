import Link from "next/link";
import { Clock, BookOpen, Star, ArrowRight, CheckCircle2, PlayCircle } from "lucide-react";
import { Course } from "@/types/courses";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  // Determine status display label and styling
  const getStatusBadge = () => {
    switch (course.status) {
      case "in-progress":
        return {
          label: "In Progress",
          bg: "bg-amber-500/90 text-white",
          btnText: "Continue",
        };
      case "completed":
        return {
          label: "Completed",
          bg: "bg-emerald-600/90 text-white",
          btnText: "Review",
        };
      default:
        return {
          label: "Not Started",
          bg: "bg-zinc-700/90 text-white",
          btnText: "Start",
        };
    }
  };

  const statusInfo = getStatusBadge();

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      {/* Course Thumbnail & Badges */}
      <div className="relative aspect-video w-full overflow-hidden bg-gray-100 dark:bg-zinc-800">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="rounded-full bg-emerald-600/90 px-2.5 py-1 text-xs font-medium text-white shadow-sm backdrop-blur-sm">
            {course.category}
          </span>
          <span className={`rounded-full px-2.5 py-1 text-xs font-medium shadow-sm backdrop-blur-sm ${statusInfo.bg}`}>
            {statusInfo.label}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Rating & Level */}
        <div className="mb-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-amber-500 font-semibold">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span>{course.rating}</span>
            <span className="text-gray-400 font-normal">({course.reviewsCount})</span>
          </div>
          <span className="text-gray-500 dark:text-zinc-400 font-medium">
            {course.level}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 dark:text-zinc-100 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
          {course.title}
        </h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-zinc-400 line-clamp-2 leading-relaxed">
          {course.shortDescription}
        </p>

        {/* Progress Bar (if in-progress or completed) */}
        {course.progressPercentage > 0 && (
          <div className="mt-3">
            <div className="flex items-center justify-between text-[11px] text-gray-500 mb-1">
              <span>Progress</span>
              <span className="font-semibold text-emerald-600">{course.progressPercentage}%</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-gray-100 dark:bg-zinc-800 overflow-hidden">
              <div
                className="h-full rounded-full bg-emerald-500"
                style={{ width: `${course.progressPercentage}%` }}
              />
            </div>
          </div>
        )}

        {/* Instructor */}
        <div className="mt-4 flex items-center gap-3 border-t border-gray-100 pt-3 dark:border-zinc-800">
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

        {/* Card Footer with Start/Continue CTA */}
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
            className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-1.5 font-semibold text-white shadow-sm transition hover:bg-emerald-700"
          >
            {statusInfo.btnText}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
