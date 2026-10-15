"use client";

import { useEffect, useRef, useState } from "react";
import { Maximize, Minimize, Tv,Play } from "lucide-react";


interface VideoPlayerProps {
  videoUrl?: string;
  thumbnailUrl: string;
  lessonTitle: string;
  isWideMode: boolean;
  onToggleWideMode: () => void;
}

export default function VideoPlayer({videoUrl,thumbnailUrl,lessonTitle,isWideMode,onToggleWideMode}: VideoPlayerProps) {
  const playerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const getEmbedUrl = (url?: string) => {
    if (!url) return "";

    try {
      const parsedUrl = new URL(url);
      const videoId =
        parsedUrl.hostname === "youtu.be"
          ? parsedUrl.pathname.slice(1)
          : parsedUrl.searchParams.get("v");

      return videoId
        ? `https://www.youtube.com/embed/${videoId}?controls=1`
        : "";
    } catch {
      return "";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.innerWidth < 768 && window.scrollY > 160);
    };

    const handleFullscreen = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("fullscreenchange", handleFullscreen);

  }, []);

  const toggleFullscreen = async () => {
    if (!playerRef.current) return;

    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await playerRef.current.requestFullscreen();
    }
  };

  return (
    <div
      ref={playerRef}
      className={`w-full overflow-hidden bg-black ${
        isSticky
          ? "fixed left-0 right-0 top-0 z-50"
          : "relative rounded-xl"
      }`}
    >
      {getEmbedUrl(videoUrl) ? (
        <iframe
          src={getEmbedUrl(videoUrl)}
          title={lessonTitle}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="aspect-video w-full"
        />
      ) : (
        <div
          className="relative flex items-center justify-center bg-zinc-900 text-white"
          style={{ aspectRatio: "16 / 9" }}
        >
          {/* Thumbnail as background */}
          {thumbnailUrl && (
            <img
              src={thumbnailUrl}
              alt="Video thumbnail"
              className="absolute inset-0 h-full w-full object-cover opacity-50"
            />
          )}

          {/* Fallback text */}
          <div className="relative z-10 flex flex-col items-center gap-2 px-4 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
              <Play size={24} className="text-white" />
            </div>
            <p className="text-sm font-medium opacity-90">Video unavailable</p>
          </div>
        </div>
       
      )}

      <div className="flex items-center justify-between bg-zinc-900 p-2 text-white">
        <span className="truncate text-sm">{lessonTitle}</span>

        <div className="flex gap-2">
          <button
            onClick={onToggleWideMode}
            className="hidden rounded p-2 hover:bg-zinc-700 md:block"
            title={isWideMode ? "Normal mode" : "Wide mode"}
          >
            <Tv size={18} />
          </button>

          <button
            onClick={toggleFullscreen}
            className="rounded p-2 hover:bg-zinc-700"
            title="Fullscreen"
          >
            {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
          </button>
        </div>
      </div>
    </div>
  );
}