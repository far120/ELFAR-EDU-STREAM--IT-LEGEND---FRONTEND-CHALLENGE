"use client";

import { useEffect } from "react";
import { X, ExternalLink, Download } from "lucide-react";

interface PdfViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl?: string;
  pdfTitle?: string;
}

export default function PdfViewerModal({isOpen,onClose,pdfUrl,pdfTitle,}: PdfViewerModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-3"
      onClick={onClose}
    >
      <div
        className="flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl bg-white dark:bg-zinc-900"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b p-3 dark:border-zinc-700">
          <h2 className="truncate font-semibold">{pdfTitle}</h2>

          <div className="flex gap-2">
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer" title="Open PDF">
              <ExternalLink size={18} />
            </a>

            <a href={pdfUrl} target="_blank"  download title="Download PDF">
              <Download size={18} />
            </a>

            <button onClick={onClose} title="Close">
              <X size={18} />
            </button>
          </div>
        </div>

        <iframe
          src={pdfUrl}
          title={pdfTitle}
          className="w-full flex-1"
        />
      </div>
    </div>
  );
}