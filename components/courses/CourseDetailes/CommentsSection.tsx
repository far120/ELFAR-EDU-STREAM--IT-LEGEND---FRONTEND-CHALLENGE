"use client";

import { useState } from "react";
import { MessageSquare, Send, ThumbsUp } from "lucide-react";
import { Comment } from "@/types/courses";

interface CommentsSectionProps {
  initialComments: Comment[];
}

export default function CommentsSection({initialComments}: CommentsSectionProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newCommentText, setNewCommentText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);


  function handleSubmitComment(e: React.FormEvent) {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    setIsSubmitting(true);

    const newComment: Comment = {
      id: `user-comm-${Date.now()}`,
      authorName: "You (Student)",
      authorAvatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      content: newCommentText.trim(),
      likesCount: 0,
    };

    setComments((prev) => [newComment, ...prev]);
    setNewCommentText("");
    setIsSubmitting(false);
  };

  return (
    <div
      id="comments-section"
      className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
    >
      <div className="flex items-center justify-between border-b border-gray-100 pb-4 dark:border-zinc-800">
        <h3 className="text-base font-bold text-gray-900 dark:text-zinc-100 flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
          <span>Comments ({comments.length})</span>
        </h3>
      </div>

      {/* Write a comment box */}
      <form onSubmit={handleSubmitComment} className="mt-4">
        <textarea
          rows={3}
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
          placeholder="Write a comment..."
          className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50/50 p-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-800/40 dark:text-zinc-100 dark:focus:bg-zinc-800 transition"
        />

        <div className="mt-2.5 flex justify-end">
          <button
            type="submit"
            disabled={!newCommentText.trim() || isSubmitting}
            className="inline-flex items-center gap-1.5 rounded-lg bg-teal-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>Submit Review</span>
            <Send className="h-3.5 w-3.5" />
          </button>
        </div>
      </form>

      {/* Comments List */}
      <div className="mt-6 space-y-4 divide-y divide-gray-100 dark:divide-zinc-800">
        {comments.map((comment) => (
          <div key={comment.id} className="pt-4 first:pt-0">
            <div className="flex items-start gap-3">
              <img
                src={comment.authorAvatar}
                alt={comment.authorName}
                className="h-9 w-9 rounded-full object-cover ring-1 ring-gray-200 dark:ring-zinc-700"
              />

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-semibold text-gray-900 dark:text-zinc-100">
                    {comment.authorName}
                  </h4>
                  <span className="text-[11px] text-gray-400">{comment.date}</span>
                </div>

                <p className="mt-1 text-xs text-gray-600 dark:text-zinc-300 leading-relaxed">
                  {comment.content}
                </p>

                {comment.likesCount !== undefined && (
                  <div className="mt-2 flex items-center gap-1 text-[11px] text-gray-400 hover:text-emerald-600 cursor-pointer w-fit">
                    <ThumbsUp className="h-3 w-3" />
                    <span>{comment.likesCount}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
