// ─── Shared UI primitives: decorations, logo, slide wrapper, editable text, data packet overlay

import { useState, useEffect, useRef } from "react";
import type { SlideDir } from "./slideTypes";

// ─── Decorative: DNA helix ────────────────────────────────────────────────────
export const DNADecor = ({ opacity = 0.18 }: { opacity?: number }) => (
  <svg viewBox="0 0 120 400" className="w-full h-full" style={{ opacity }}>
    {Array.from({ length: 10 }).map((_, i) => {
      const y = 20 + i * 38;
      const phase = i * 0.63;
      const x1 = 60 + 45 * Math.sin(phase);
      const x2 = 60 - 45 * Math.sin(phase);
      return (
        <g key={i}>
          <line x1={x1} y1={y} x2={x2} y2={y} stroke="#1DE3A2" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx={x1} cy={y} r="3.5" fill="#1DE3A2" />
          <circle cx={x2} cy={y} r="3.5" fill="#1DE3A2" />
        </g>
      );
    })}
    <path
      d={Array.from({ length: 30 }).map((_, i) => {
        const y = (i / 29) * 380 + 10;
        const x = 60 + 45 * Math.sin((i / 29) * Math.PI * 2 * 1.6);
        return `${i === 0 ? "M" : "L"} ${x} ${y}`;
      }).join(" ")}
      fill="none" stroke="#1DE3A2" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"
    />
    <path
      d={Array.from({ length: 30 }).map((_, i) => {
        const y = (i / 29) * 380 + 10;
        const x = 60 - 45 * Math.sin((i / 29) * Math.PI * 2 * 1.6);
        return `${i === 0 ? "M" : "L"} ${x} ${y}`;
      }).join(" ")}
      fill="none" stroke="#00C896" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"
    />
  </svg>
);

// ─── Decorative: circuit board ────────────────────────────────────────────────
export const CircuitDecor = () => (
  <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full" style={{ opacity: 0.07 }}>
    {[80, 160, 240, 320].map((x) => (
      <line key={x} x1={x} y1={0} x2={x} y2={300} stroke="#1DE3A2" strokeWidth="1" />
    ))}
    {[60, 120, 180, 240].map((y) => (
      <line key={y} x1={0} y1={y} x2={400} y2={y} stroke="#1DE3A2" strokeWidth="1" />
    ))}
    {([[80, 60], [160, 120], [240, 60], [320, 180], [160, 240], [80, 180]] as [number, number][]).map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r="4" fill="#1DE3A2" opacity="0.8" />
    ))}
    <path d="M80 60 L160 60 L160 120 L240 120 L240 180 L320 180" fill="none" stroke="#1DE3A2" strokeWidth="1.5" opacity="0.4" />
    <path d="M80 180 L80 240 L160 240 L160 180 L240 180" fill="none" stroke="#1DE3A2" strokeWidth="1.5" opacity="0.3" />
  </svg>
);

// ─── Decorative: glow orb ─────────────────────────────────────────────────────
export const GlowOrb = ({
  size, x, y, color = "#1DE3A2", blur = 80,
}: { size: number; x: string; y: string; color?: string; blur?: number }) => (
  <div
    className="absolute rounded-full pointer-events-none"
    style={{
      width: size, height: size,
      left: x, top: y,
      background: color,
      filter: `blur(${blur}px)`,
      opacity: 0.12,
      transform: "translate(-50%, -50%)",
    }}
  />
);

// ─── Logo ─────────────────────────────────────────────────────────────────────
export const KrokLogo = () => (
  <div className="flex items-center gap-2.5">
    <div className="flex flex-col items-end">
      <span
        className="text-[9px] font-semibold tracking-[0.3em] uppercase leading-none mb-0.5"
        style={{ color: "#1DE3A2", opacity: 0.8 }}
      >
        BI & BigData
      </span>
      <span
        className="text-[24px] font-black leading-none tracking-tight text-white"
        style={{ fontFamily: "'Golos Text', sans-serif" }}
      >
        КРОК
      </span>
    </div>
    <div className="w-[1.5px] self-stretch rounded-full bg-[#1DE3A2] opacity-50" />
    <div className="text-[7px] font-semibold tracking-[0.15em] uppercase leading-tight max-w-[50px] text-white opacity-40">
      IT Solutions & Analytics
    </div>
  </div>
);

export const LogoBadge = () => (
  <div className="absolute top-5 right-7 z-20">
    <KrokLogo />
  </div>
);

// ─── Slide wrapper ────────────────────────────────────────────────────────────
export const Slide = ({
  children,
  className = "",
  dir,
  animKey,
}: {
  children: React.ReactNode;
  className?: string;
  dir: SlideDir;
  animKey: number;
}) => (
  <div
    key={animKey}
    className={`relative w-full h-full overflow-hidden ${dir === "right" ? "slide-in-right" : "slide-in-left"} ${className}`}
    style={{ background: "#0D1F1A" }}
  >
    {children}
  </div>
);

// ─── Editable Text ────────────────────────────────────────────────────────────
interface EditableTextProps {
  value: string;
  onChange: (v: string) => void;
  className?: string;
  style?: React.CSSProperties;
  multiline?: boolean;
  as?: "h1" | "h2" | "p" | "span" | "div";
}

export const EditableText = ({
  value,
  onChange,
  className = "",
  style,
  multiline = false,
  as: Tag = "div",
}: EditableTextProps) => {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft]     = useState(value);
  const ref = useRef<HTMLTextAreaElement & HTMLInputElement>(null);

  const commit = () => { onChange(draft.trim() || value); setEditing(false); };

  useEffect(() => { if (editing) ref.current?.focus(); }, [editing]);
  useEffect(() => { setDraft(value); }, [value]);

  if (editing) {
    const shared: React.CSSProperties = {
      ...style,
      background: "rgba(0,0,0,0.55)",
      border: "1.5px solid #1DE3A2",
      borderRadius: 6,
      outline: "none",
      color: style?.color ?? "#fff",
      fontFamily: "'Golos Text', sans-serif",
      resize: "none",
      width: "100%",
      boxSizing: "border-box",
      padding: "2px 6px",
    };
    if (multiline) {
      return (
        <textarea
          ref={ref as React.RefObject<HTMLTextAreaElement>}
          value={draft}
          rows={3}
          onChange={(e) => setDraft(e.target.value)}
          onBlur={commit}
          onKeyDown={(e) => { if (e.key === "Escape") { setDraft(value); setEditing(false); } }}
          className={className}
          style={shared}
        />
      );
    }
    return (
      <input
        ref={ref as React.RefObject<HTMLInputElement>}
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onBlur={commit}
        onKeyDown={(e) => {
          if (e.key === "Enter") commit();
          if (e.key === "Escape") { setDraft(value); setEditing(false); }
        }}
        className={className}
        style={shared}
      />
    );
  }

  return (
    <Tag
      className={`${className} cursor-text group relative`}
      style={style}
      onClick={(e) => { e.stopPropagation(); setEditing(true); }}
      title="Нажмите для редактирования"
    >
      {value}
      <span
        className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ pointerEvents: "none" }}
      >
        <svg width="10" height="10" viewBox="0 0 10 10">
          <circle cx="5" cy="5" r="4" fill="#1DE3A2" opacity="0.9" />
          <path d="M3.5 6.5 L6.5 3.5 M5.5 3 L7 4.5" stroke="#000" strokeWidth="1" strokeLinecap="round" />
        </svg>
      </span>
    </Tag>
  );
};

// ─── Data Packet Overlay ──────────────────────────────────────────────────────
type TrailPoint = { id: number; x: number; y: number; delay: number; size: number };
const TRAIL_COUNT = 14;

function sampleBezier(t: number, dir: SlideDir): { x: number; y: number } {
  const [p0, p1, p2, p3] =
    dir === "right"
      ? [{ x: -20, y: 270 }, { x: 180, y: 20 }, { x: 560, y: 320 }, { x: 1120, y: 170 }]
      : [{ x: 1140, y: 170 }, { x: 900, y: 320 }, { x: 380, y: 20 }, { x: -20, y: 270 }];
  const mt = 1 - t;
  return {
    x: mt ** 3 * p0.x + 3 * mt ** 2 * t * p1.x + 3 * mt * t ** 2 * p2.x + t ** 3 * p3.x,
    y: mt ** 3 * p0.y + 3 * mt ** 2 * t * p1.y + 3 * mt * t ** 2 * p2.y + t ** 3 * p3.y,
  };
}

function buildTrail(dir: SlideDir): TrailPoint[] {
  return Array.from({ length: TRAIL_COUNT }).map((_, i) => {
    const t = (i + 1) / (TRAIL_COUNT + 1);
    const { x, y } = sampleBezier(t, dir);
    return { id: i, x, y, delay: t * 1.3, size: 3 + Math.random() * 4 };
  });
}

export const DataPacketOverlay = ({
  triggerKey,
  dir,
}: {
  triggerKey: number;
  dir: SlideDir;
}) => {
  const [active, setActive] = useState(false);
  const [trail, setTrail]   = useState<TrailPoint[]>([]);
  const [ripple, setRipple] = useState<{ x: number; y: number } | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (triggerKey === 0) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    setActive(false); setTrail([]); setRipple(null);
    requestAnimationFrame(() => {
      setActive(true);
      setTrail(buildTrail(dir));
      const arrival = sampleBezier(0.98, dir);
      timerRef.current = setTimeout(() => setRipple({ x: arrival.x, y: arrival.y }), 1650);
      timerRef.current = setTimeout(() => { setActive(false); setTrail([]); setRipple(null); }, 2300);
    });
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [triggerKey]);

  if (!active && trail.length === 0 && !ripple) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 60 }}>
      {trail.map((dot) => (
        <div
          key={dot.id}
          className="trail-dot"
          style={{
            left: dot.x - dot.size / 2,
            top:  dot.y - dot.size / 2,
            width: dot.size,
            height: dot.size,
            background: "#1DE3A2",
            boxShadow: `0 0 ${dot.size * 3}px #1DE3A2`,
            animationDelay: `${dot.delay}s`,
            animationDuration: "0.55s",
          }}
        />
      ))}
      {active && (
        <div className={dir === "right" ? "data-packet-right" : "data-packet-left"}>
          <svg viewBox="0 0 20 20" width="20" height="20">
            <polygon points="10,1 19,10 10,19 1,10" fill="#0D1F1A" stroke="#1DE3A2" strokeWidth="1.5" />
            <polygon points="10,5 15,10 10,15 5,10" fill="#1DE3A2" opacity="0.9" />
            <circle cx="10" cy="10" r="2" fill="#fff" opacity="0.8" />
          </svg>
        </div>
      )}
      {ripple && (
        <>
          <div className="arrival-ripple" style={{ left: ripple.x - 10, top: ripple.y - 10, width: 20, height: 20, border: "1.5px solid #1DE3A2" }} />
          <div className="arrival-ripple" style={{ left: ripple.x - 10, top: ripple.y - 10, width: 20, height: 20, border: "1px solid #1DE3A2", animationDelay: "0.12s", opacity: 0.5 }} />
        </>
      )}
    </div>
  );
};
