import { Course } from "@/types/courses";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="border">
      <h1>{course.title}</h1>
      <h1>{course.shortDescription}</h1>
    </div>
  );
}
