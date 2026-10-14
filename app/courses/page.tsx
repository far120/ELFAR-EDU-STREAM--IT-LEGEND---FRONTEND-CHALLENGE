import { getAllCourses } from "@/data/courses";
import CourseCard from "@/components/courses/CourseCard";

export default function CoursesPage() {
  const courses = getAllCourses();

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
          All Courses
        </h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-zinc-400">
          Browse our complete catalog of practical courses and start learning today.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}