
"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  PlayCircle,
  FileText,
  HelpCircle,
  FileDown,
  Code,
  Lock,
  CheckCircle2,
} from "lucide-react";

import { CourseSection, Lesson } from "@/types/courses";

interface CurriculumSectionProps {
  sections: CourseSection[];
  currentLessonId: string;
  onSelectLesson: (lesson: Lesson) => void;
  onOpenPdf: (lesson: Lesson) => void;
  onOpenQuiz: (lesson: Lesson) => void;
}

export default function CurriculumSection({sections,currentLessonId,onSelectLesson,onOpenPdf,onOpenQuiz,}: CurriculumSectionProps) {
 
  const [openSections, setOpenSections] = useState<string[]>([
  sections[0]?.id,
]);

  // Open or close a section
  function toggleSection(id: string) {
    if (openSections.includes(id)) {
      setOpenSections(openSections.filter((sectionId) => sectionId !== id));
    } else {
      setOpenSections([...openSections, id]);
    }
  }

 
  function getLessonIcon(type: Lesson["type"]) {
    if (type === "video") return <PlayCircle className="h-4 w-4 text-emerald-500" />;
    if (type === "overview") return <FileText className="h-4 w-4 text-emerald-500" />;
    if (type === "quiz") return <HelpCircle className="h-4 w-4 text-emerald-500" />;
    if (type === "pdf") return <FileDown className="h-4 w-4 text-emerald-500" />;
    if (type === "exercise") return <Code className="h-4 w-4 text-emerald-500" />;

    return <PlayCircle className="h-4 w-4 text-emerald-500" />;
  }

 
  function handleLessonClick(lesson: Lesson) {
    if (lesson.isLocked) return;

    if (lesson.type === "pdf") {
      onOpenPdf(lesson);
    } 
    else if (lesson.type === "quiz") {
      onOpenQuiz(lesson);
    } 
    else {
      onSelectLesson(lesson);
    }
  }

  return (
    <div className="space-y-3">
      {sections.map((section) => {
        const isOpen = openSections.includes(section.id);

        return (
          <div
            key={section.id}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
          >
            {/* Section header */}
            <button
              type="button"
              onClick={() => toggleSection(section.id)}
              className="flex w-full items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-zinc-800"
            >
              <div>
                <h4 className="text-sm font-bold text-gray-900 dark:text-zinc-100">
                  {section.title}
                </h4>

                {section.subtitle && (
                  <p className="mt-1 text-xs text-gray-500 dark:text-zinc-400">
                    {section.subtitle}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400">
                  {section.lessons.length} lessons
                </span>

                {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>
            </button>

            {/* Lessons */}
            {isOpen && (
              <div className="divide-y border-t dark:border-zinc-800">
                {section.lessons.map((lesson) => {
                  const isCurrent = lesson.id === currentLessonId;

                  return (
                    <button
                      type="button"
                      key={lesson.id}
                      onClick={() => handleLessonClick(lesson)}
                      disabled={lesson.isLocked}
                      className={`flex w-full items-center justify-between p-3.5 text-left text-xs ${
                        isCurrent
                          ? "bg-emerald-50 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200"
                          : "text-gray-700 hover:bg-gray-50 dark:text-zinc-300 dark:hover:bg-zinc-800"
                      } ${lesson.isLocked ? "cursor-not-allowed opacity-50" : ""}`}
                    >
                      {/* Lesson title and icon */}
                      <div className="flex min-w-0 items-center gap-2.5">
                        {getLessonIcon(lesson.type)}

                        <span className="truncate">{lesson.title}</span>
                      </div>

                      {/* Lesson details */}
                      <div className="flex shrink-0 items-center gap-2">
                        {lesson.type === "quiz" && lesson.questionCount && (
                          <span>{lesson.questionCount} Qs</span>
                        )}

                        {lesson.duration && <span>{lesson.duration}</span>}

                        {lesson.isCompleted && (
                          <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                        )}

                        {!lesson.isCompleted && lesson.isLocked && (
                          <Lock className="h-4 w-4 text-gray-400" />
                        )}

                        {!lesson.isCompleted &&
                          !lesson.isLocked &&
                          isCurrent && (
                            <span className="h-2 w-2 rounded-full bg-emerald-500" />
                          )}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
