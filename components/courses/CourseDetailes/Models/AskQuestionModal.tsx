"use client";

import { useState, useEffect } from "react";
import { X, HelpCircle, Send, CheckCircle2 } from "lucide-react";

interface AskQuestionModalProps {
  courseId: string;
  courseTitle: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function AskQuestionModal({courseId,courseTitle,isOpen,onClose,}: AskQuestionModalProps) {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionContent, setQuestionContent] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const storageKey = `course_question_draft_${courseId}`;

  // Restore draft from sessionStorage on mount / open
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = sessionStorage.getItem(storageKey);
        if (saved) {
          const parsed = JSON.parse(saved);
          setQuestionTitle(parsed.title || "");
          setQuestionContent(parsed.content || "");
        }
      } catch (err) {
        console.warn("Could not read draft from sessionStorage", err);
      }
    }
  }, [storageKey, isOpen]);

  // Auto-save draft changes to sessionStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        sessionStorage.setItem(storageKey,JSON.stringify({ title: questionTitle, content: questionContent }));
      } catch (err) {
        console.warn("Could not save draft to sessionStorage", err);
      }
    }
  }, [storageKey, questionTitle, questionContent]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!questionContent.trim()) return;

    // Simulate submission
    setIsSubmitted(true);

    // Clear saved draft
    if (typeof window !== "undefined") {
      sessionStorage.removeItem(storageKey);
    }

    setTimeout(() => {
      setQuestionTitle("");
      setQuestionContent("");
      setIsSubmitted(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl dark:border-zinc-800 dark:bg-zinc-900">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-4 dark:border-zinc-800">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
              <HelpCircle className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900 dark:text-zinc-100">
                Ask a Question
              </h3>
              <p className="text-xs text-gray-500 dark:text-zinc-400 truncate max-w-xs">
                {courseTitle}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Modal"
            className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-200 transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content / Form */}
        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <CheckCircle2 className="h-12 w-12 text-emerald-500 animate-bounce" />
            <h4 className="mt-3 text-sm font-bold text-gray-900 dark:text-zinc-100">
              Question Submitted Successfully!
            </h4>
            <p className="mt-1 text-xs text-gray-500 dark:text-zinc-400">
              Your instructor and peers will respond shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-zinc-300">
                Question Topic (Optional)
              </label>
              <input
                type="text"
                value={questionTitle}
                onChange={(e) => setQuestionTitle(e.target.value)}
                placeholder="e.g. Question about technical SEO redirects"
                className="mt-1 w-full rounded-xl border border-gray-200 bg-gray-50/50 p-2.5 text-xs text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-800/40 dark:text-zinc-100 dark:focus:bg-zinc-800 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-zinc-300">
                Question Details *
              </label>
              <textarea
                rows={4}
                required
                value={questionContent}
                onChange={(e) => setQuestionContent(e.target.value)}
                placeholder="Describe what you need help with. Don't worry, your text is auto-saved even if you accidentally close this window!"
                className="mt-1 w-full resize-none rounded-xl border border-gray-200 bg-gray-50/50 p-3 text-xs text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-800/40 dark:text-zinc-100 dark:focus:bg-zinc-800 transition"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-[11px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                ✓ Auto-saving draft in this session
              </span>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-lg border border-gray-200 px-3.5 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!questionContent.trim()}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-emerald-700 disabled:opacity-50"
                >
                  <span>Post Question</span>
                  <Send className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
