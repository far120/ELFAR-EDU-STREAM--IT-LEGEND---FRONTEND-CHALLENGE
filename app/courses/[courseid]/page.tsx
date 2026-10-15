import { Suspense } from "react";
import CourseDetailes from "@/components/courses/CourseDetailes";
import { getCourseById } from "@/data/courses";
import { notFound } from "next/navigation";
import Loading from "@/app/loading";

interface CourseDetailPageProps {
  params: Promise<{ courseid: string }>;
}

export default function CourseDetailPage({
  params,
}: CourseDetailPageProps) {
  return (
    <Suspense fallback={<Loading />}>
      <CourseContent params={params} />
    </Suspense>
  );
}

async function CourseContent({ params }: CourseDetailPageProps) {
  const { courseid } = await params;
  const course = getCourseById(courseid);

  if (!course) {
    notFound();
  }

  return <CourseDetailes course={course} />;
}