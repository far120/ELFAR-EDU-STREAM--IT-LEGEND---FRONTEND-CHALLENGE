import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface CourseBreadcrumbProps {
  courseSlug: string;
  courseTitle: string;
}

export default function CourseBreadcrumb({ courseSlug, courseTitle }: CourseBreadcrumbProps) {
  return (
    <div className="space-y-3">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-500 dark:text-zinc-400">
        <Link href="/" className="hover:text-emerald-600 transition-colors">
          Home
        </Link>
        <ChevronRight className="h-3 w-3 text-gray-400" />
        <Link href="/courses" className="hover:text-emerald-600 transition-colors">
          Courses
        </Link>
        <ChevronRight className="h-3 w-3 text-gray-400" />
        <span className="font-medium text-gray-800 dark:text-zinc-200 truncate max-w-xs sm:max-w-md">
          {courseSlug}
        </span>
      </nav>
      <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        {courseTitle}
      </h1>
    </div>
  );
}
