import { Clock, BookOpen, Users, Globe } from "lucide-react";
import { CourseMaterials as CourseMaterialsType } from "@/types/courses";

interface CourseMaterialsProps {
  materials: CourseMaterialsType;
}

export default function CourseMaterials({ materials }: CourseMaterialsProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <h3 className="text-base font-bold text-gray-900 dark:text-zinc-100">
        Course Materials
      </h3>

      {/* Instructor Information */}
      <div className="mt-4 flex items-center gap-3 border-b border-gray-100 pb-4 dark:border-zinc-800">
        <img
          src={materials.instructor.avatar}
          alt={materials.instructor.name}
          className="h-11 w-11 rounded-full object-cover ring-2 ring-emerald-500/20"
        />
        <div>
          <h4 className="text-sm font-semibold text-gray-900 dark:text-zinc-100">
            {materials.instructor.name}
          </h4>
          <p className="text-xs text-gray-500 dark:text-zinc-400">
            {materials.instructor.role}
          </p>
        </div>
      </div>

      {/* Materials Quick Specs Grid */}
      <div className="mt-4 grid grid-cols-2 gap-4 text-xs sm:grid-cols-4">
        {/* Duration */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
            <Clock className="h-4 w-4" />
          </div>
          <div>
            <span className="block text-gray-400 dark:text-zinc-500">Duration</span>
            <span className="font-semibold text-gray-800 dark:text-zinc-200">
              {materials.duration}
            </span>
          </div>
        </div>

        {/* Lessons Count */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
            <BookOpen className="h-4 w-4" />
          </div>
          <div>
            <span className="block text-gray-400 dark:text-zinc-500">Lessons</span>
            <span className="font-semibold text-gray-800 dark:text-zinc-200">
              {materials.lessonsCount}
            </span>
          </div>
        </div>

        {/* Enrolled Students */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
            <Users className="h-4 w-4" />
          </div>
          <div>
            <span className="block text-gray-400 dark:text-zinc-500">Enrolled</span>
            <span className="font-semibold text-gray-800 dark:text-zinc-200">
              {materials.enrolledCount} students
            </span>
          </div>
        </div>

        {/* Language */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
            <Globe className="h-4 w-4" />
          </div>
          <div>
            <span className="block text-gray-400 dark:text-zinc-500">Language</span>
            <span className="font-semibold text-gray-800 dark:text-zinc-200">
              {materials.language}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
