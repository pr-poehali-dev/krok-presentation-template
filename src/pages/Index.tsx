import { useState, useCallback, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

// ── Brand colors from KROK brandbook ──────────────────────────────────────────

// ─── Data Packet Overlay ──────────────────────────────────────────────────────
type TrailPoint = { id: number; x: number; y: number; delay: number; size: number };
const TRAIL_COUNT = 14;

function sampleBezier(t: number, dir: "right" | "left"): { x: number; y: number } {
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

function buildTrail(dir: "right" | "left"): TrailPoint[] {
  return Array.from({ length: TRAIL_COUNT }).map((_, i) => {
    const t = (i + 1) / (TRAIL_COUNT + 1);
    const { x, y } = sampleBezier(t, dir);
    return { id: i, x, y, delay: t * 1.3, size: 3 + Math.random() * 4 };
  });
}

const DataPacketOverlay = ({ triggerKey, dir }: { triggerKey: number; dir: "right" | "left" }) => {
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
        <div key={dot.id} className="trail-dot" style={{
          left: dot.x - dot.size / 2, top: dot.y - dot.size / 2,
          width: dot.size, height: dot.size,
          background: "#1DE3A2", boxShadow: `0 0 ${dot.size * 3}px #1DE3A2`,
          animationDelay: `${dot.delay}s`, animationDuration: "0.55s",
        }} />
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

// ─── Decorative components ────────────────────────────────────────────────────
const DNADecor = ({ opacity = 0.18 }: { opacity?: number }) => (
  <svg viewBox="0 0 120 400" className="w-full h-full" style={{ opacity }}>
    {Array.from({ length: 10 }).map((_, i) => {
      const y = 20 + i * 38; const phase = i * 0.63;
      const x1 = 60 + 45 * Math.sin(phase); const x2 = 60 - 45 * Math.sin(phase);
      return (
        <g key={i}>
          <line x1={x1} y1={y} x2={x2} y2={y} stroke="#1DE3A2" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx={x1} cy={y} r="3.5" fill="#1DE3A2" />
          <circle cx={x2} cy={y} r="3.5" fill="#1DE3A2" />
        </g>
      );
    })}
    <path d={Array.from({ length: 30 }).map((_, i) => { const y = (i / 29) * 380 + 10; const x = 60 + 45 * Math.sin((i / 29) * Math.PI * 2 * 1.6); return `${i === 0 ? "M" : "L"} ${x} ${y}`; }).join(" ")} fill="none" stroke="#1DE3A2" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
    <path d={Array.from({ length: 30 }).map((_, i) => { const y = (i / 29) * 380 + 10; const x = 60 - 45 * Math.sin((i / 29) * Math.PI * 2 * 1.6); return `${i === 0 ? "M" : "L"} ${x} ${y}`; }).join(" ")} fill="none" stroke="#00C896" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
  </svg>
);

const CircuitDecor = () => (
  <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full" style={{ opacity: 0.07 }}>
    {[80, 160, 240, 320].map((x) => <line key={x} x1={x} y1={0} x2={x} y2={300} stroke="#1DE3A2" strokeWidth="1" />)}
    {[60, 120, 180, 240].map((y) => <line key={y} x1={0} y1={y} x2={400} y2={y} stroke="#1DE3A2" strokeWidth="1" />)}
    {([[80, 60], [160, 120], [240, 60], [320, 180], [160, 240], [80, 180]] as [number,number][]).map(([cx, cy], i) => <circle key={i} cx={cx} cy={cy} r="4" fill="#1DE3A2" opacity="0.8" />)}
    <path d="M80 60 L160 60 L160 120 L240 120 L240 180 L320 180" fill="none" stroke="#1DE3A2" strokeWidth="1.5" opacity="0.4" />
    <path d="M80 180 L80 240 L160 240 L160 180 L240 180" fill="none" stroke="#1DE3A2" strokeWidth="1.5" opacity="0.3" />
  </svg>
);

const GlowOrb = ({ size, x, y, color = "#1DE3A2", blur = 80 }: { size: number; x: string; y: string; color?: string; blur?: number }) => (
  <div className="absolute rounded-full pointer-events-none" style={{ width: size, height: size, left: x, top: y, background: color, filter: `blur(${blur}px)`, opacity: 0.12, transform: "translate(-50%, -50%)" }} />
);

// ─── Logo ─────────────────────────────────────────────────────────────────────
const KrokLogo = () => (
  <div className="flex items-center gap-2.5">
    <div className="flex flex-col items-end">
      <span className="text-[9px] font-semibold tracking-[0.3em] uppercase leading-none mb-0.5" style={{ color: "#1DE3A2", opacity: 0.8 }}>BI & BigData</span>
      <span className="text-[24px] font-black leading-none tracking-tight text-white" style={{ fontFamily: "'Golos Text', sans-serif" }}>КРОК</span>
    </div>
    <div className="w-[1.5px] self-stretch rounded-full bg-[#1DE3A2] opacity-50" />
    <div className="text-[7px] font-semibold tracking-[0.15em] uppercase leading-tight max-w-[50px] text-white opacity-40">IT Solutions & Analytics</div>
  </div>
);
const LogoBadge = () => <div className="absolute top-5 right-7 z-20"><KrokLogo /></div>;

// ─── Slide wrapper ────────────────────────────────────────────────────────────
const Slide = ({ children, className = "", dir, animKey }: { children: React.ReactNode; className?: string; dir: "right" | "left"; animKey: number }) => (
  <div key={animKey} className={`relative w-full h-full overflow-hidden ${dir === "right" ? "slide-in-right" : "slide-in-left"} ${className}`} style={{ background: "#0D1F1A" }}>
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

const EditableText = ({ value, onChange, className = "", style, multiline = false, as: Tag = "div" }: EditableTextProps) => {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft]     = useState(value);
  const ref = useRef<HTMLTextAreaElement & HTMLInputElement>(null);

  const commit = () => { onChange(draft.trim() || value); setEditing(false); };

  useEffect(() => { if (editing) ref.current?.focus(); }, [editing]);
  // sync if external value changes
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
        onKeyDown={(e) => { if (e.key === "Enter") commit(); if (e.key === "Escape") { setDraft(value); setEditing(false); } }}
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

// ─── Content store ────────────────────────────────────────────────────────────
interface SlideContent {
  s1: { label: string; title1: string; title2: string; subtitle: string; date: string };
  s2: { label: string; heading1: string; heading2: string; items: { title: string; desc: string }[] };
  s3: { label: string; heading: string; body1: string; body2: string; stats: [string, string][]; stack: string[] };
  s4: { label: string; heading1: string; heading2: string; body: string; stats: [string, string][]; bullets: string[] };
  s5: { label: string; heading: string; before: string[]; after: string[]; multiplier: string; multiplierLabel: string };
  s6: { label: string; heading1: string; heading2: string; contacts: string[]; stats: [string, string][] };
}

const DEFAULT_CONTENT: SlideContent = {
  s1: {
    label: "Аналитика & Большие данные",
    title1: "Название",
    title2: "презентации",
    subtitle: "Подзаголовок или краткое описание темы доклада",
    date: "Май 2026",
  },
  s2: {
    label: "Содержание",
    heading1: "О чём",
    heading2: "доклад",
    items: [
      { title: "Введение",             desc: "Обзор текущей ситуации и задач" },
      { title: "Архитектура решения",  desc: "Технический стек и подходы" },
      { title: "Анализ данных",        desc: "Методология и инструменты" },
      { title: "Результаты",           desc: "Ключевые показатели эффективности" },
      { title: "Дорожная карта",       desc: "Следующие шаги и план внедрения" },
    ],
  },
  s3: {
    label: "Раздел 02 — Архитектура",
    heading: "Технический стек решения",
    body1: "Современная платформа BigData строится на принципах масштабируемости, отказоустойчивости и высокой производительности при работе с петабайтными объёмами данных.",
    body2: "Облачные технологии позволяют динамически адаптировать мощности под нагрузку и снижать операционные издержки.",
    stats: [["99.9%", "Uptime"], ["<5ms", "Latency"], ["∞", "Scale"]],
    stack: [
      "Apache Kafka — стриминг событий в реальном времени",
      "Spark / Flink — распределённая обработка данных",
      "ClickHouse — OLAP-аналитика на больших объёмах",
      "Kubernetes — оркестрация и масштабирование",
    ],
  },
  s4: {
    label: "Раздел 03 — Данные",
    heading1: "Визуализация",
    heading2: "данных",
    body: "Интерактивные дашборды позволяют отслеживать ключевые метрики бизнеса в режиме реального времени и принимать обоснованные решения.",
    stats: [["98%", "Точность"], ["5ms", "Задержка"], ["∞", "Масштаб"]],
    bullets: [
      "Сервис решений 100+ производителей",
      "30+ тыс. компонентов в хранилище",
      "Сервисные лаборатории",
    ],
  },
  s5: {
    label: "Раздел 04 — Результаты",
    heading: "Ключевые результаты",
    before: [
      "Обработка отчётов — 3–5 дней",
      "Ручная агрегация данных",
      "Задержка инсайтов до 7 дней",
      "5 аналитиков на одну задачу",
    ],
    after: [
      "Обработка отчётов — 15 минут",
      "Автоматическая ETL-pipeline",
      "Инсайты в реальном времени",
      "1 аналитик + AI-ассистент",
    ],
    multiplier: "×12",
    multiplierLabel: "рост производительности",
  },
  s6: {
    label: "Спасибо за внимание",
    heading1: "Готовы",
    heading2: "обсудить?",
    contacts: ["bi@croc.ru", "croc.ru/bigdata", "+7 (495) 974-22-60", "Москва, Волгоградский пр-т, 43, стр. 3"],
    stats: [["2 700", "ПРОЕКТОВ В ГОД"], ["3 000", "СОТРУДНИКОВ"], ["460", "ПАРТНЁРОВ"]],
  },
};

// ─── Slides ───────────────────────────────────────────────────────────────────

type SlideProps = { dir: "right" | "left"; animKey: number; c: SlideContent; upd: (c: SlideContent) => void };

const Slide1 = ({ dir, animKey, c, upd }: SlideProps) => (
  <Slide dir={dir} animKey={animKey}>
    <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 80% at 70% 50%, #0F2D22 0%, #0A1A14 60%, #060F0B 100%)" }} />
    <GlowOrb size={500} x="72%" y="50%" color="#1DE3A2" blur={120} />
    <GlowOrb size={200} x="15%" y="80%" color="#00C896" blur={80} />
    <div className="absolute right-[5%] top-[5%] bottom-[5%] w-[38%] flex items-center justify-center">
      <div className="w-[100px] h-[90%]"><DNADecor opacity={0.55} /></div>
    </div>
    <LogoBadge />
    <div className="absolute left-10 top-1/2 -translate-y-[55%] max-w-[52%]">
      <EditableText value={c.s1.label} onChange={(v) => upd({ ...c, s1: { ...c.s1, label: v } })}
        className="text-[10px] font-semibold tracking-[0.45em] uppercase mb-4 fade-up block"
        style={{ color: "#1DE3A2" }} />
      <h1 className="font-black leading-[1.02] mb-5 fade-up-d1" style={{ fontSize: "clamp(36px, 5vw, 62px)", color: "#fff" }}>
        <EditableText value={c.s1.title1} onChange={(v) => upd({ ...c, s1: { ...c.s1, title1: v } })} style={{ color: "#fff" }} />
        <br />
        <EditableText value={c.s1.title2} onChange={(v) => upd({ ...c, s1: { ...c.s1, title2: v } })} style={{ color: "#1DE3A2" }} />
      </h1>
      <EditableText value={c.s1.subtitle} onChange={(v) => upd({ ...c, s1: { ...c.s1, subtitle: v } })}
        as="p" multiline className="text-base fade-up-d2 block"
        style={{ color: "rgba(255,255,255,0.5)" }} />
      <div className="mt-8 flex items-center gap-4 fade-up-d3">
        <div className="h-px w-12" style={{ background: "#1DE3A2", opacity: 0.5 }} />
        <EditableText value={c.s1.date} onChange={(v) => upd({ ...c, s1: { ...c.s1, date: v } })}
          className="text-[10px] tracking-widest uppercase"
          style={{ color: "rgba(255,255,255,0.3)" }} />
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent, #1DE3A2 50%, transparent)" }} />
  </Slide>
);

const Slide2 = ({ dir, animKey, c, upd }: SlideProps) => (
  <Slide dir={dir} animKey={animKey}>
    <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 90% at 10% 50%, #0F2D22 0%, #0A1A14 55%, #060F0B 100%)" }} />
    <GlowOrb size={300} x="8%" y="50%" color="#1DE3A2" blur={100} />
    <LogoBadge />
    <div className="absolute inset-0 flex items-center justify-center px-10 py-10 gap-5">
      <div className="flex flex-col justify-center pr-6 w-[200px] shrink-0">
        <EditableText value={c.s2.label} onChange={(v) => upd({ ...c, s2: { ...c.s2, label: v } })}
          className="text-[9px] font-semibold tracking-[0.4em] uppercase mb-2 fade-up block"
          style={{ color: "#1DE3A2" }} />
        <div className="text-3xl font-black leading-tight text-white fade-up-d1">
          <EditableText value={c.s2.heading1} onChange={(v) => upd({ ...c, s2: { ...c.s2, heading1: v } })} style={{ color: "#fff" }} />
          <br />
          <EditableText value={c.s2.heading2} onChange={(v) => upd({ ...c, s2: { ...c.s2, heading2: v } })} style={{ color: "#fff" }} />
        </div>
        <div className="mt-4 w-8 h-[2px] fade-up-d2" style={{ background: "#1DE3A2" }} />
      </div>
      <div className="flex-1 grid grid-cols-2 gap-3">
        {c.s2.items.slice(0, 4).map((item, i) => (
          <div key={i} className="rounded-2xl px-5 py-4 border fade-up"
            style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.09)", animationDelay: `${0.07 * i}s` }}>
            <div className="text-lg font-black mb-1" style={{ color: "#1DE3A2" }}>0{i + 1}</div>
            <EditableText value={item.title} onChange={(v) => { const items = [...c.s2.items]; items[i] = { ...items[i], title: v }; upd({ ...c, s2: { ...c.s2, items } }); }}
              className="text-white font-bold text-sm leading-tight block" style={{ color: "#fff" }} />
            <EditableText value={item.desc} onChange={(v) => { const items = [...c.s2.items]; items[i] = { ...items[i], desc: v }; upd({ ...c, s2: { ...c.s2, items } }); }}
              className="text-xs mt-0.5 block" style={{ color: "rgba(255,255,255,0.4)" }} />
          </div>
        ))}
      </div>
      <div className="absolute bottom-8 left-[260px] right-10 rounded-2xl px-5 py-3 border flex items-center gap-4 fade-up-d3"
        style={{ background: "rgba(29,227,162,0.07)", borderColor: "rgba(29,227,162,0.2)" }}>
        <span className="text-lg font-black" style={{ color: "#1DE3A2" }}>05</span>
        <div>
          <EditableText value={c.s2.items[4].title} onChange={(v) => { const items = [...c.s2.items]; items[4] = { ...items[4], title: v }; upd({ ...c, s2: { ...c.s2, items } }); }}
            className="text-white font-bold text-sm block" style={{ color: "#fff" }} />
          <EditableText value={c.s2.items[4].desc} onChange={(v) => { const items = [...c.s2.items]; items[4] = { ...items[4], desc: v }; upd({ ...c, s2: { ...c.s2, items } }); }}
            className="text-xs block" style={{ color: "rgba(255,255,255,0.4)" }} />
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent, #1DE3A2 50%, transparent)" }} />
  </Slide>
);

const STACK_ICONS = ["Database", "Server", "BarChart3", "Shield"];

const Slide3 = ({ dir, animKey, c, upd }: SlideProps) => (
  <Slide dir={dir} animKey={animKey}>
    <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 70% at 90% 20%, #0F2D22 0%, #0A1A14 60%, #060F0B 100%)" }} />
    <GlowOrb size={350} x="90%" y="15%" color="#1DE3A2" blur={120} />
    <CircuitDecor />
    <LogoBadge />
    <div className="absolute top-9 left-10 right-10">
      <EditableText value={c.s3.label} onChange={(v) => upd({ ...c, s3: { ...c.s3, label: v } })}
        className="text-[9px] font-semibold tracking-[0.4em] uppercase mb-1.5 fade-up block"
        style={{ color: "#1DE3A2" }} />
      <EditableText value={c.s3.heading} onChange={(v) => upd({ ...c, s3: { ...c.s3, heading: v } })}
        as="h2" className="text-white text-3xl font-black fade-up-d1 block"
        style={{ color: "#fff" }} />
      <div className="mt-2 w-12 h-[2px] fade-up-d2" style={{ background: "#1DE3A2" }} />
    </div>
    <div className="absolute left-10 right-10 top-[140px] bottom-10 grid grid-cols-2 gap-5">
      <div className="fade-up-d2 flex flex-col justify-between">
        <EditableText value={c.s3.body1} onChange={(v) => upd({ ...c, s3: { ...c.s3, body1: v } })}
          as="p" multiline className="text-sm leading-relaxed block"
          style={{ color: "rgba(255,255,255,0.68)" }} />
        <EditableText value={c.s3.body2} onChange={(v) => upd({ ...c, s3: { ...c.s3, body2: v } })}
          as="p" multiline className="text-[13px] leading-relaxed mt-3 block"
          style={{ color: "rgba(255,255,255,0.38)" }} />
        <div className="mt-4 flex gap-6">
          {c.s3.stats.map(([v, l], i) => (
            <div key={i}>
              <EditableText value={v} onChange={(nv) => { const stats = [...c.s3.stats] as [string,string][]; stats[i] = [nv, l]; upd({ ...c, s3: { ...c.s3, stats } }); }}
                className="text-xl font-black block" style={{ color: "#1DE3A2" }} />
              <EditableText value={l} onChange={(nv) => { const stats = [...c.s3.stats] as [string,string][]; stats[i] = [v, nv]; upd({ ...c, s3: { ...c.s3, stats } }); }}
                className="text-[10px] mt-0.5 block" style={{ color: "rgba(255,255,255,0.35)" }} />
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-2.5 fade-up-d3">
        {c.s3.stack.map((text, i) => (
          <div key={i} className="flex items-center gap-3 rounded-2xl px-4 py-3 border"
            style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}>
            <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(29,227,162,0.12)" }}>
              <Icon name={STACK_ICONS[i]} size={14} style={{ color: "#1DE3A2" }} />
            </div>
            <EditableText value={text} onChange={(v) => { const stack = [...c.s3.stack]; stack[i] = v; upd({ ...c, s3: { ...c.s3, stack } }); }}
              className="text-xs block flex-1" style={{ color: "rgba(255,255,255,0.72)" }} />
          </div>
        ))}
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent, #1DE3A2 50%, transparent)" }} />
  </Slide>
);

const Slide4 = ({ dir, animKey, c, upd }: SlideProps) => (
  <Slide dir={dir} animKey={animKey}>
    <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 80% at 20% 60%, #0F2D22 0%, #0A1A14 55%, #060F0B 100%)" }} />
    <GlowOrb size={400} x="25%" y="60%" color="#1DE3A2" blur={130} />
    <LogoBadge />
    <div className="absolute right-0 top-0 bottom-0 w-[45%] overflow-hidden" style={{ background: "linear-gradient(135deg, #0F2D22 0%, #071410 100%)" }}>
      <svg viewBox="0 0 400 450" className="absolute inset-0 w-full h-full" style={{ opacity: 0.7 }}>
        {Array.from({ length: 18 }).map((_, i) => {
          const startX = 200 + (i - 9) * 18;
          const colors = ["#1DE3A2","#00C896","#4AF0C0","#00A87A","#7DFFD9"];
          return <path key={i} d={`M${startX} 0 Q${startX + (i % 3 === 0 ? 60 : i % 3 === 1 ? -40 : 20)} 150 ${180 + i * 5} 250 Q${160 + i * 3} 350 ${140 + i * 8} 450`} fill="none" stroke={colors[i % colors.length]} strokeWidth={i % 4 === 0 ? "2.5" : "1.2"} opacity={0.3 + (i % 5) * 0.12} strokeLinecap="round" />;
        })}
        {([[200, 50],[180, 130],[220, 200],[160, 290],[240, 360]] as [number,number][]).map(([x, y], i) => <circle key={i} cx={x} cy={y} r="5" fill="#1DE3A2" opacity={0.8} />)}
      </svg>
      <div className="absolute bottom-0 left-0 right-0 h-[38%] flex flex-col justify-center px-8"
        style={{ background: "rgba(0,184,130,0.15)", backdropFilter: "blur(8px)" }}>
        <div className="space-y-2.5">
          {c.s4.bullets.map((t, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#1DE3A2" }} />
              <EditableText value={t} onChange={(v) => { const bullets = [...c.s4.bullets]; bullets[i] = v; upd({ ...c, s4: { ...c.s4, bullets } }); }}
                className="text-[11px] font-semibold tracking-wide uppercase block flex-1" style={{ color: "rgba(255,255,255,0.8)" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="absolute left-10 top-1/2 -translate-y-1/2 max-w-[49%]">
      <EditableText value={c.s4.label} onChange={(v) => upd({ ...c, s4: { ...c.s4, label: v } })}
        className="text-[9px] font-semibold tracking-[0.4em] uppercase mb-3 fade-up block"
        style={{ color: "#1DE3A2" }} />
      <h2 className="font-black leading-tight mb-4 fade-up-d1" style={{ fontSize: "clamp(26px, 3.5vw, 42px)", color: "#fff" }}>
        <EditableText value={c.s4.heading1} onChange={(v) => upd({ ...c, s4: { ...c.s4, heading1: v } })} style={{ color: "#fff" }} />
        <br />
        <EditableText value={c.s4.heading2} onChange={(v) => upd({ ...c, s4: { ...c.s4, heading2: v } })} style={{ color: "#1DE3A2" }} />
      </h2>
      <EditableText value={c.s4.body} onChange={(v) => upd({ ...c, s4: { ...c.s4, body: v } })}
        as="p" multiline className="text-sm leading-relaxed mb-5 fade-up-d2 block"
        style={{ color: "rgba(255,255,255,0.55)" }} />
      <div className="flex gap-8 fade-up-d3">
        {c.s4.stats.map(([v, l], i) => (
          <div key={i}>
            <EditableText value={v} onChange={(nv) => { const stats = [...c.s4.stats] as [string,string][]; stats[i] = [nv, l]; upd({ ...c, s4: { ...c.s4, stats } }); }}
              className="text-2xl font-black block" style={{ color: "#1DE3A2" }} />
            <EditableText value={l} onChange={(nv) => { const stats = [...c.s4.stats] as [string,string][]; stats[i] = [v, nv]; upd({ ...c, s4: { ...c.s4, stats } }); }}
              className="text-[11px] mt-0.5 block" style={{ color: "rgba(255,255,255,0.35)" }} />
          </div>
        ))}
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent, #1DE3A2 50%, transparent)" }} />
  </Slide>
);

const BEFORE_ICONS = ["Clock", "AlertTriangle", "TrendingDown", "Users"];
const AFTER_ICONS  = ["Zap", "RefreshCw", "TrendingUp", "UserCheck"];

const Slide5 = ({ dir, animKey, c, upd }: SlideProps) => (
  <Slide dir={dir} animKey={animKey}>
    <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 70% at 50% 100%, #0F2D22 0%, #0A1A14 55%, #060F0B 100%)" }} />
    <GlowOrb size={400} x="50%" y="100%" color="#1DE3A2" blur={120} />
    <LogoBadge />
    <div className="absolute top-9 left-10">
      <EditableText value={c.s5.label} onChange={(v) => upd({ ...c, s5: { ...c.s5, label: v } })}
        className="text-[9px] font-semibold tracking-[0.4em] uppercase mb-1.5 fade-up block"
        style={{ color: "#1DE3A2" }} />
      <EditableText value={c.s5.heading} onChange={(v) => upd({ ...c, s5: { ...c.s5, heading: v } })}
        as="h2" className="text-white text-3xl font-black fade-up-d1 block" style={{ color: "#fff" }} />
      <div className="mt-2 w-12 h-[2px] fade-up-d2" style={{ background: "#1DE3A2" }} />
    </div>
    <div className="absolute left-10 right-10 top-[140px] bottom-10 grid grid-cols-2 gap-5">
      <div className="rounded-2xl p-6 flex flex-col border fade-up-d2"
        style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}>
        <div className="text-[9px] font-semibold tracking-[0.3em] uppercase mb-3" style={{ color: "rgba(255,255,255,0.3)" }}>До внедрения</div>
        <div className="space-y-3 flex-1">
          {c.s5.before.map((text, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <Icon name={BEFORE_ICONS[i]} size={13} style={{ color: "rgba(255,255,255,0.25)" }} />
              <EditableText value={text} onChange={(v) => { const before = [...c.s5.before]; before[i] = v; upd({ ...c, s5: { ...c.s5, before } }); }}
                className="text-xs block flex-1" style={{ color: "rgba(255,255,255,0.45)" }} />
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-2xl p-6 flex flex-col border fade-up-d3"
        style={{ background: "rgba(29,227,162,0.07)", borderColor: "rgba(29,227,162,0.25)", borderTopWidth: "3px", borderTopColor: "#1DE3A2" }}>
        <div className="text-[9px] font-semibold tracking-[0.3em] uppercase mb-3" style={{ color: "#1DE3A2" }}>После внедрения</div>
        <div className="space-y-3 flex-1">
          {c.s5.after.map((text, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <Icon name={AFTER_ICONS[i]} size={13} style={{ color: "#1DE3A2" }} />
              <EditableText value={text} onChange={(v) => { const after = [...c.s5.after]; after[i] = v; upd({ ...c, s5: { ...c.s5, after } }); }}
                className="text-xs font-medium block flex-1" style={{ color: "#fff" }} />
            </div>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t flex items-baseline gap-2" style={{ borderColor: "rgba(29,227,162,0.2)" }}>
          <EditableText value={c.s5.multiplier} onChange={(v) => upd({ ...c, s5: { ...c.s5, multiplier: v } })}
            className="text-2xl font-black block" style={{ color: "#1DE3A2" }} />
          <EditableText value={c.s5.multiplierLabel} onChange={(v) => upd({ ...c, s5: { ...c.s5, multiplierLabel: v } })}
            className="text-xs block" style={{ color: "rgba(255,255,255,0.4)" }} />
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent, #1DE3A2 50%, transparent)" }} />
  </Slide>
);

const CONTACT_ICONS = ["Mail", "Globe", "Phone", "MapPin"];

const Slide6 = ({ dir, animKey, c, upd }: SlideProps) => (
  <Slide dir={dir} animKey={animKey}>
    <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 90% 90% at 60% 40%, #0F2D22 0%, #0A1A14 55%, #060F0B 100%)" }} />
    <GlowOrb size={500} x="60%" y="40%" color="#1DE3A2" blur={150} />
    <GlowOrb size={200} x="20%" y="80%" color="#00C896" blur={80} />
    <div className="absolute right-[8%] top-[8%] bottom-[8%] w-[28%] flex items-center justify-center opacity-30">
      <div className="w-[80px] h-[90%]"><DNADecor opacity={1} /></div>
    </div>
    <LogoBadge />
    <div className="absolute left-10 top-1/2 -translate-y-[58%]">
      <EditableText value={c.s6.label} onChange={(v) => upd({ ...c, s6: { ...c.s6, label: v } })}
        className="text-[10px] font-semibold tracking-[0.5em] uppercase mb-3 fade-up block"
        style={{ color: "#1DE3A2" }} />
      <h2 className="font-black leading-[1.0] mb-7 fade-up-d1" style={{ fontSize: "clamp(38px, 5.5vw, 64px)", color: "#fff" }}>
        <EditableText value={c.s6.heading1} onChange={(v) => upd({ ...c, s6: { ...c.s6, heading1: v } })} style={{ color: "#fff" }} />
        <br />
        <EditableText value={c.s6.heading2} onChange={(v) => upd({ ...c, s6: { ...c.s6, heading2: v } })} style={{ color: "#1DE3A2" }} />
      </h2>
      <div className="h-px w-40 mb-6 fade-up-d2" style={{ background: "rgba(255,255,255,0.08)" }} />
      <div className="space-y-2.5 fade-up-d3">
        {c.s6.contacts.map((text, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <Icon name={CONTACT_ICONS[i]} size={13} style={{ color: "#1DE3A2" }} />
            <EditableText value={text} onChange={(v) => { const contacts = [...c.s6.contacts]; contacts[i] = v; upd({ ...c, s6: { ...c.s6, contacts } }); }}
              className="text-sm block" style={{ color: "rgba(255,255,255,0.6)" }} />
          </div>
        ))}
      </div>
    </div>
    <div className="absolute right-[22%] top-1/2 -translate-y-1/2 space-y-4 fade-up-d2">
      {c.s6.stats.map(([num, label], i) => (
        <div key={i} className="text-right">
          <EditableText value={num} onChange={(v) => { const stats = [...c.s6.stats] as [string,string][]; stats[i] = [v, label]; upd({ ...c, s6: { ...c.s6, stats } }); }}
            className="font-black leading-none block" style={{ fontSize: "clamp(22px,2.5vw,32px)", color: "#1DE3A2" }} />
          <EditableText value={label} onChange={(v) => { const stats = [...c.s6.stats] as [string,string][]; stats[i] = [num, v]; upd({ ...c, s6: { ...c.s6, stats } }); }}
            className="text-[9px] font-semibold tracking-widest uppercase mt-0.5 block" style={{ color: "rgba(255,255,255,0.35)" }} />
        </div>
      ))}
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent, #1DE3A2 50%, transparent)" }} />
  </Slide>
);

// ─── Slide meta ───────────────────────────────────────────────────────────────
const SLIDE_COMPONENTS = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6];
const SLIDE_LABELS     = ["Титул", "Оглавление", "Контент", "Изображение", "2 Колонки", "Контакты"];

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function Index() {
  const [current, setCurrent]   = useState(0);
  const [dir, setDir]           = useState<"right" | "left">("right");
  const [animKey, setAnimKey]   = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [content, setContent]   = useState<SlideContent>(DEFAULT_CONTENT);
  const slideRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback((idx: number) => {
    setDir(idx > current ? "right" : "left");
    setAnimKey((k) => k + 1);
    setCurrent(idx);
  }, [current]);

  const prev = () => current > 0                 && goTo(current - 1);
  const next = () => current < SLIDE_COMPONENTS.length - 1 && goTo(current + 1);

  const toggleFullscreen = useCallback(async () => {
    if (!document.fullscreenElement) await slideRef.current?.requestFullscreen();
    else await document.exitFullscreen();
  }, []);

  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // Skip keyboard nav when editing a text field
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
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8"
      style={{ background: "#060F0B", fontFamily: "'Golos Text', sans-serif" }}>

      <div className="w-full max-w-[1100px] mb-3 flex items-center justify-between">
        <span className="text-[10px] tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.2)" }}>
          Шаблон презентации КРОК
        </span>
        <div className="flex items-center gap-2">
          <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: "rgba(29,227,162,0.1)", color: "#1DE3A2", border: "1px solid rgba(29,227,162,0.2)" }}>
            ✎ Нажмите на любой текст для редактирования
          </span>
          <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.2)" }}>{current + 1} / {SLIDE_COMPONENTS.length}</span>
        </div>
      </div>

      <div ref={slideRef} className="w-full max-w-[1100px] relative overflow-hidden"
        style={{
          aspectRatio: isFullscreen ? undefined : "16/9",
          width:  isFullscreen ? "100vw" : undefined,
          height: isFullscreen ? "100vh" : undefined,
          maxWidth: isFullscreen ? "100vw" : undefined,
          background: "#060F0B",
          boxShadow: "0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(29,227,162,0.08)",
        }}>
        <Component dir={dir} animKey={animKey} c={content} upd={setContent} />
        <DataPacketOverlay triggerKey={animKey} dir={dir} />

        {isFullscreen && (
          <>
            <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none" style={{ zIndex: 80 }}>
              <button onClick={prev} disabled={current === 0} className="pointer-events-auto w-10 h-10 rounded-full flex items-center justify-center transition-all disabled:opacity-0"
                style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)", border: "1px solid rgba(29,227,162,0.2)", color: "#1DE3A2" }}>
                <Icon name="ChevronLeft" size={20} />
              </button>
              <button onClick={next} disabled={current === SLIDE_COMPONENTS.length - 1} className="pointer-events-auto w-10 h-10 rounded-full flex items-center justify-center transition-all disabled:opacity-0"
                style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)", border: "1px solid rgba(29,227,162,0.2)", color: "#1DE3A2" }}>
                <Icon name="ChevronRight" size={20} />
              </button>
            </div>
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-2 rounded-full"
              style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(12px)", border: "1px solid rgba(29,227,162,0.15)", zIndex: 80 }}>
              {SLIDE_LABELS.map((_, i) => (
                <button key={i} onClick={() => goTo(i)} className="w-2 h-2 rounded-full transition-all"
                  style={{ background: i === current ? "#1DE3A2" : "rgba(255,255,255,0.25)", transform: i === current ? "scale(1.4)" : "scale(1)" }} />
              ))}
              <div className="w-px h-3 mx-1" style={{ background: "rgba(255,255,255,0.15)" }} />
              <button onClick={toggleFullscreen} className="flex items-center gap-1 text-[10px] tracking-wide" style={{ color: "rgba(255,255,255,0.4)" }}>
                <Icon name="Minimize2" size={12} />Esc
              </button>
            </div>
          </>
        )}
      </div>

      {!isFullscreen && (
        <>
          <div className="w-full max-w-[1100px] mt-4 flex items-center gap-3">
            <button onClick={prev} disabled={current === 0}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs transition-all disabled:opacity-20"
              style={{ background: "rgba(255,255,255,0.06)", color: "#fff" }}>
              <Icon name="ChevronLeft" size={14} />Назад
            </button>
            <div className="flex-1 flex items-center justify-center gap-1.5 flex-wrap">
              {SLIDE_LABELS.map((label, i) => (
                <button key={i} onClick={() => goTo(i)} className="rounded-xl text-[10px] px-3 py-1.5 font-medium transition-all"
                  style={i === current ? { background: "#1DE3A2", color: "#060F0B" } : { background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.4)" }}>
                  {label}
                </button>
              ))}
            </div>
            <button onClick={next} disabled={current === SLIDE_COMPONENTS.length - 1}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs transition-all disabled:opacity-20"
              style={{ background: "rgba(255,255,255,0.06)", color: "#fff" }}>
              Вперёд<Icon name="ChevronRight" size={14} />
            </button>
            <button onClick={toggleFullscreen}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs transition-all"
              style={{ background: "rgba(29,227,162,0.1)", color: "#1DE3A2", border: "1px solid rgba(29,227,162,0.25)" }}
              title="Полный экран (F)">
              <Icon name="Maximize2" size={14} />
            </button>
          </div>
          <div className="mt-2 flex items-center gap-3 text-[10px]" style={{ color: "rgba(255,255,255,0.15)" }}>
            <span className="flex items-center gap-1"><Icon name="MousePointer" size={11} />кнопки</span>
            <span style={{ color: "rgba(255,255,255,0.08)" }}>·</span>
            <span className="flex items-center gap-1"><Icon name="ArrowLeft" size={11} /><Icon name="ArrowRight" size={11} />стрелки</span>
            <span style={{ color: "rgba(255,255,255,0.08)" }}>·</span>
            <span className="flex items-center gap-1"><Icon name="Maximize2" size={11} />F — полный экран</span>
          </div>
        </>
      )}
    </div>
  );
}
