"use client";
import { useState } from "react";
import { Course, Lesson } from "@/types/courses";
import CourseBreadcrumb from "./CourseDetailes/CourseBreadcrumb";
import CourseProgress from "./CourseDetailes/CourseProgress";
import CurriculumSection from "./CourseDetailes/CurriculumSection";
import VideoPlayer from "./CourseDetailes/VideoPlayer";
import PlayerActionBar from "./CourseDetailes/PlayerActionBar";
import CourseMaterials from "./CourseDetailes/CourseMaterials";
import CommentsSection from "./CourseDetailes/CommentsSection";
import AskQuestionModal from "./CourseDetailes/Models/AskQuestionModal";
import LeaderboardModal from "./CourseDetailes/Models/LeaderboardModal";
import PdfViewerModal from "./CourseDetailes/Models/PdfViewerModal";
import ExamModal from "./CourseDetailes/Models/ExamModal";

export default function CourseDetailes({ course }: { course: Course }) {

  // collect all lessons from sections in one array and detrmine inital  lesson
  const allLessons = course.sections.flatMap((s) => s.lessons);
  const initialLesson = allLessons.find((l) => l.isCurrent) || allLessons[0];



  const [currentLesson, setCurrentLesson] = useState<Lesson>(initialLesson);
  const [progressPercentage, setProgressPercentage] = useState(course.progressPercentage);

  const [isWideMode, setIsWideMode] = useState(false);

  // Modals state 
  const [isAskQuestionOpen, setIsAskQuestionOpen] = useState(false);
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
  const [activePdfLesson, setActivePdfLesson] = useState<Lesson | null>(null);
  const [activeQuizLesson, setActiveQuizLesson] = useState<Lesson | null>(null);

  // Smooth scroll helpers
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 space-y-6">
      {/* Breadcrumb & Title */}
      <CourseBreadcrumb courseSlug={course.slug} courseTitle={course.title} />

      {/* Main Grid Layout */}
      <div className={`grid gap-8 ${isWideMode ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-12 items-start"}`} >

        {/* Left Column: Player, Actions, Materials, Comments */}
        <div className={`space-y-6 ${isWideMode ? "w-full" : "lg:col-span-8"}`}>
          <VideoPlayer
            videoUrl={currentLesson?.videoUrl}
            thumbnailUrl={course.thumbnail}
            lessonTitle={currentLesson?.title || course.title}
            isWideMode={isWideMode}
            onToggleWideMode={() => setIsWideMode((prev) => !prev)}
          />

          <PlayerActionBar
            onScrollToCurriculum={() => scrollTo("curriculum-section")}
            onScrollToComments={() => scrollTo("comments-section")}
            onOpenAskQuestion={() => setIsAskQuestionOpen(true)}
            onOpenLeaderboard={() => setIsLeaderboardOpen(true)}
          />

          <CourseMaterials materials={course.materials} />

          <CommentsSection initialComments={course.comments} />

        </div>

        {/* Right Column: Progress & Curriculum */}
        <div id="curriculum-section" className={`space-y-5 ${isWideMode ? "w-full pt-4" : "lg:col-span-4"}`} >
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-gray-900 dark:text-zinc-100">
              Topics for This Course
            </h3>
            <span className="text-xs text-gray-400">
              {course.sections.length} Sections
            </span>
          </div>

          <CourseProgress progressPercentage={progressPercentage} />

          <CurriculumSection
            sections={course.sections}
            currentLessonId={currentLesson?.id}
            onSelectLesson={setCurrentLesson}
            onOpenPdf={setActivePdfLesson}
            onOpenQuiz={setActiveQuizLesson}
          />
        </div>
      </div>

      {/* Modals */}
      <AskQuestionModal
        courseId={course.id}
        courseTitle={course.title}
        isOpen={isAskQuestionOpen}
        onClose={() => setIsAskQuestionOpen(false)}
      />

       <LeaderboardModal
        courseTitle={course.title}
        leaderboard={course.leaderboard}
        studentProgressPercentage={progressPercentage}
        isOpen={isLeaderboardOpen}
        onClose={() => setIsLeaderboardOpen(false)}
      />


      <PdfViewerModal
        isOpen={Boolean(activePdfLesson)}
        onClose={() => setActivePdfLesson(null)}
        pdfTitle={activePdfLesson?.pdfTitle || activePdfLesson?.title}
        pdfUrl={activePdfLesson?.pdfUrl || "/materials/seo-starter-guide.pdf"}
      />

      <ExamModal
        quiz={activeQuizLesson?.quiz}
        isOpen={Boolean(activeQuizLesson)}
        onClose={() => setActiveQuizLesson(null)}
        onSaveProgress={(score) =>
          setProgressPercentage((prev) => Math.min(100, Math.max(prev, score)))
        }
      />
    </div>
  );
}