import { getAllCourses } from "@/data/courses";
import CourseCard from "@/components/courses/CourseCard";

export default function CoursesPage() {
  const courses = getAllCourses();
  return (
    <div>
      <h1>Courses Page</h1>
      {
        courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))
      }
    </div>
  );
}