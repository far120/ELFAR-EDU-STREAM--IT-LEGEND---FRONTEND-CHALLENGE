"use client";

import { useEffect, useState } from "react";
import { Quiz } from "@/types/courses";

interface ExamModalProps {
  quiz?: Quiz;
  isOpen: boolean;
  onClose: () => void;
  onSaveProgress: (percentage: number) => void;
}

export default function ExamModal({quiz,isOpen,onClose,onSaveProgress,}: ExamModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(3 * 60 * 60);

  useEffect(() => {
    if (!isOpen || submitted || time === 0) return;

    const timer = setInterval(() => {
      setTime((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, submitted, time]);

  if (!isOpen || !quiz || quiz.questions.length === 0) {
    return null;
  }

  const question = quiz.questions[currentIndex];

  const formatTime = () => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return [hours, minutes, seconds]
      .map((number) => String(number).padStart(2, "0"))
      .join(":");
  };

  const handleSubmit = () => {
    const correct = quiz.questions.filter(
      (q) => answers[q.id] === q.correctOptionId
    ).length;

    const percentage = Math.round(
      (correct / quiz.questions.length) * 100
    );

    setScore(percentage);
    setSubmitted(true);
    onSaveProgress(percentage);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900 text-zinc-100 shadow-xl">
        <div className="flex items-center justify-between gap-4 bg-emerald-700 p-4 text-white">
          <span className="font-mono text-sm">{formatTime()}</span>

          <h2 className="truncate text-center font-bold">
            {quiz.title}
          </h2>

          <button
            onClick={onClose}
            aria-label="Close exam"
            className="rounded px-2 py-1 hover:bg-emerald-800"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto bg-zinc-900 p-5">
          {submitted ? (
            <div className="py-10 text-center">
              <h2 className="text-2xl font-bold text-zinc-100">
                {score >= quiz.passingScorePercentage
                  ? "Congratulations! You Passed!"
                  : "Keep Practicing!"}
              </h2>

              <p className="my-4 text-3xl font-bold text-emerald-400">
                {score}%
              </p>

              <p className="text-sm text-zinc-400">
                Passing score: {quiz.passingScorePercentage}%
              </p>

              <button
                onClick={onClose}
                className="mt-5 rounded-lg bg-emerald-600 px-5 py-2 text-white transition hover:bg-emerald-500"
              >
                Return to Course
              </button>
            </div>
          ) : (
            <>
              <p className="mb-3 text-sm text-zinc-400">
                Question {currentIndex + 1} of {quiz.questions.length}
              </p>

              <h3 className="mb-5 font-bold leading-relaxed text-zinc-100">
                {question.questionNumber}. {question.question}
              </h3>

              <div className="space-y-3">
                {question.options.map((option) => {
                  const isSelected =
                    answers[question.id] === option.id;

                  return (
                    <button
                      key={option.id}
                      onClick={() =>
                        setAnswers((previous) => ({
                          ...previous,
                          [question.id]: option.id,
                        }))
                      }
                      className={`w-full rounded-lg border p-3 text-left text-sm transition ${
                        isSelected
                          ? "border-emerald-500 bg-emerald-950 text-emerald-300"
                          : "border-zinc-700 bg-zinc-800 text-zinc-200 hover:border-zinc-500 hover:bg-zinc-700"
                      }`}
                    >
                      {option.text}
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </div>

        {!submitted && (
          <div className="flex justify-between border-t border-zinc-700 bg-zinc-800 p-4">
            <button
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex((index) => index - 1)}
              className="rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2 text-zinc-200 transition hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Previous
            </button>

            {currentIndex < quiz.questions.length - 1 ? (
              <button
                onClick={() => setCurrentIndex((index) => index + 1)}
                className="rounded-lg bg-emerald-600 px-4 py-2 text-white transition hover:bg-emerald-500"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="rounded-lg bg-emerald-600 px-4 py-2 text-white transition hover:bg-emerald-500"
              >
                Submit Exam
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}