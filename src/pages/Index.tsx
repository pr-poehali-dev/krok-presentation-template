import { useState, useCallback, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";
import { DEFAULT_CONTENT } from "@/components/presentation/slideTypes";
import type { SlideContent } from "@/components/presentation/slideTypes";
import { DataPacketOverlay } from "@/components/presentation/slideComponents";
import { SLIDE_COMPONENTS, SLIDE_LABELS } from "@/components/presentation/PresentationSlides";

export default function Index() {
  const [current, setCurrent]           = useState(0);
  const [dir, setDir]                   = useState<"right" | "left">("right");
  const [animKey, setAnimKey]           = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [content, setContent]           = useState<SlideContent>(DEFAULT_CONTENT);
  const fullscreenRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback((idx: number) => {
    setDir(idx > current ? "right" : "left");
    setAnimKey((k) => k + 1);
    setCurrent(idx);
  }, [current]);

  const prev = () => current > 0                           && goTo(current - 1);
  const next = () => current < SLIDE_COMPONENTS.length - 1 && goTo(current + 1);

  const toggleFullscreen = useCallback(async () => {
    if (!document.fullscreenElement) await fullscreenRef.current?.requestFullscreen();
    else await document.exitFullscreen();
  }, []);

  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        setCurrent((c) => { if (c < SLIDE_COMPONENTS.length - 1) { setDir("right"); setAnimKey((k) => k + 1); return c + 1; } return c; });
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        setCurrent((c) => { if (c > 0) { setDir("left"); setAnimKey((k) => k + 1); return c - 1; } return c; });
      }
      if (e.key === "f" || e.key === "F") toggleFullscreen();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [toggleFullscreen]);

  const Component = SLIDE_COMPONENTS[current];

  return (
    <div
      ref={fullscreenRef}
      style={{ background: "#060F0B", fontFamily: "'Golos Text', sans-serif" }}
      className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8"
    >
      {/* Header */}
      <div className="w-full max-w-[1100px] mb-3 flex items-center justify-between">
        <span className="text-[10px] tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.2)" }}>
          Стажёрская программа КРОК
        </span>
        <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.2)" }}>
          {current + 1} / {SLIDE_COMPONENTS.length}
        </span>
      </div>

      {/* Slide frame */}
      <div
        className="w-full max-w-[1100px] relative overflow-hidden"
        style={{
          aspectRatio: "16/9",
          background: "#060F0B",
          boxShadow: "0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(29,227,162,0.08)",
        }}
      >
        <Component dir={dir} animKey={animKey} c={content} upd={setContent} />
        <DataPacketOverlay triggerKey={animKey} dir={dir} />
      </div>

      {/* Navigation bar */}
      <div className="w-full max-w-[1100px] mt-4 flex items-center gap-3">
        <button
          onClick={prev}
          disabled={current === 0}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs transition-all disabled:opacity-20"
          style={{ background: "rgba(255,255,255,0.06)", color: "#fff" }}
        >
          <Icon name="ChevronLeft" size={14} />Назад
        </button>

        <div className="flex-1 flex items-center justify-center gap-1.5 flex-wrap">
          {SLIDE_LABELS.map((label, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="rounded-xl text-[10px] px-3 py-1.5 font-medium transition-all"
              style={
                i === current
                  ? { background: "#1DE3A2", color: "#060F0B" }
                  : { background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.4)" }
              }
            >
              {label}
            </button>
          ))}
        </div>

        <button
          onClick={next}
          disabled={current === SLIDE_COMPONENTS.length - 1}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs transition-all disabled:opacity-20"
          style={{ background: "rgba(255,255,255,0.06)", color: "#fff" }}
        >
          Вперёд<Icon name="ChevronRight" size={14} />
        </button>

        <button
          onClick={toggleFullscreen}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs transition-all"
          style={{ background: "rgba(29,227,162,0.1)", color: "#1DE3A2", border: "1px solid rgba(29,227,162,0.25)" }}
          title="Полный экран (F)"
        >
          <Icon name={isFullscreen ? "Minimize2" : "Maximize2"} size={14} />
        </button>
      </div>
    </div>
  );
}
