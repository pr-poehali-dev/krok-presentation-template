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
      className={isFullscreen ? "w-screen h-screen flex items-center justify-center" : "min-h-screen flex flex-col items-center justify-center p-4 md:p-8"}
    >
      {isFullscreen ? (
        /* ── Fullscreen: тёмный letterbox + слайд 16:9 по центру ── */
        <div className="relative flex items-center justify-center w-full h-full" style={{ background: "#020806" }}>
          {/* Slide */}
          <div
            className="relative overflow-hidden"
            style={{
              aspectRatio: "16/9",
              width: "min(100vw, calc(100vh * 16 / 9))",
              background: "#060F0B",
              boxShadow: "0 40px 100px rgba(0,0,0,0.9)",
            }}
          >
            <Component dir={dir} animKey={animKey} c={content} upd={setContent} />
            <DataPacketOverlay triggerKey={animKey} dir={dir} />
          </div>

          {/* Left / Right arrows */}
          <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none" style={{ zIndex: 80 }}>
            <button
              onClick={prev}
              disabled={current === 0}
              className="pointer-events-auto w-10 h-10 rounded-full flex items-center justify-center transition-all disabled:opacity-0"
              style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)", border: "1px solid rgba(29,227,162,0.2)", color: "#1DE3A2" }}
            >
              <Icon name="ChevronLeft" size={20} />
            </button>
            <button
              onClick={next}
              disabled={current === SLIDE_COMPONENTS.length - 1}
              className="pointer-events-auto w-10 h-10 rounded-full flex items-center justify-center transition-all disabled:opacity-0"
              style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)", border: "1px solid rgba(29,227,162,0.2)", color: "#1DE3A2" }}
            >
              <Icon name="ChevronRight" size={20} />
            </button>
          </div>

          {/* Bottom control bar */}
          <div
            className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-2 rounded-full"
            style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(12px)", border: "1px solid rgba(29,227,162,0.15)", zIndex: 80 }}
          >
            {SLIDE_LABELS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="w-2 h-2 rounded-full transition-all"
                style={{
                  background: i === current ? "#1DE3A2" : "rgba(255,255,255,0.25)",
                  transform:  i === current ? "scale(1.4)" : "scale(1)",
                }}
              />
            ))}
            <div className="w-px h-3 mx-1" style={{ background: "rgba(255,255,255,0.15)" }} />
            <button
              onClick={toggleFullscreen}
              className="flex items-center gap-1 text-[10px] tracking-wide"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              <Icon name="Minimize2" size={12} />Esc
            </button>
          </div>
        </div>
      ) : (
        /* ── Normal mode ── */
        <>
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
              <Icon name="Maximize2" size={14} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
