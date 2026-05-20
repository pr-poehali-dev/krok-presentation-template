// ─── Slide1–Slide9 components ────────────────────────────────────────────────

import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";
import type { SlideProps } from "./slideTypes";
import {
  DNADecor, CircuitDecor, GlowOrb,
  LogoBadge, Slide, EditableText,
  StickFigureExpert,
} from "./slideComponents";

const ACCENT_LINE = (
  <div className="absolute bottom-0 left-0 right-0 h-[2px]"
    style={{ background: "linear-gradient(90deg, transparent, #1DE3A2 50%, transparent)" }} />
);

// ─── Slide 1: Title ───────────────────────────────────────────────────────────
export const Slide1 = ({ dir, animKey, c, upd }: SlideProps) => (
  <Slide dir={dir} animKey={animKey}>
    <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 80% at 70% 50%, #0F2D22 0%, #0A1A14 60%, #060F0B 100%)" }} />
    <GlowOrb size={500} x="72%" y="50%" color="#1DE3A2" blur={120} />
    <GlowOrb size={200} x="15%" y="80%" color="#00C896" blur={80} />
    <div className="absolute right-[5%] top-[5%] bottom-[5%] w-[38%] flex items-center justify-center">
      <div className="w-[100px] h-[90%]"><DNADecor opacity={0.55} /></div>
    </div>
    <LogoBadge subtitle="ALINA KOZLOVA" />
    <div className="absolute left-10 top-1/2 -translate-y-[55%] max-w-[52%]">
      <EditableText value={c.s1.label} onChange={(v) => upd({ ...c, s1: { ...c.s1, label: v } })}
        className="text-[10px] font-semibold tracking-[0.45em] uppercase mb-3 fade-up block"
        style={{ color: "#1DE3A2" }} />
      <div className="font-black mb-3 fade-up-d1" style={{ fontSize: "clamp(28px, 4vw, 52px)", color: "#fff", lineHeight: 1.0 }}>
        <EditableText value={c.s1.title1} onChange={(v) => upd({ ...c, s1: { ...c.s1, title1: v } })} style={{ color: "#fff", display: "block" }} />
        <EditableText value={c.s1.title2} onChange={(v) => upd({ ...c, s1: { ...c.s1, title2: v } })} style={{ color: "#1DE3A2", display: "block" }} />
      </div>
      <EditableText value={c.s1.subtitle} onChange={(v) => upd({ ...c, s1: { ...c.s1, subtitle: v } })}
        as="p" className="text-lg font-semibold fade-up-d2 block"
        style={{ color: "rgba(255,255,255,0.7)" }} />
      <div className="mt-4 flex items-center gap-4 fade-up-d3">
        <div className="h-px w-12" style={{ background: "#1DE3A2", opacity: 0.5 }} />
        <EditableText value={c.s1.date} onChange={(v) => upd({ ...c, s1: { ...c.s1, date: v } })}
          className="text-[10px] tracking-widest uppercase"
          style={{ color: "rgba(255,255,255,0.3)" }} />
      </div>
    </div>
    {ACCENT_LINE}
  </Slide>
);

// ─── Slide 2: Table of Contents ───────────────────────────────────────────────
export const Slide2 = ({ dir, animKey, c, upd }: SlideProps) => (
  <Slide dir={dir} animKey={animKey}>
    <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 90% at 10% 50%, #0F2D22 0%, #0A1A14 55%, #060F0B 100%)" }} />
    <GlowOrb size={300} x="8%" y="50%" color="#1DE3A2" blur={100} />
    <LogoBadge />
    <div className="absolute inset-0 flex items-center justify-center px-10 py-10 gap-5">
      <div className="flex flex-col justify-center pr-6 w-[200px] shrink-0">
        <EditableText value={c.s2.label} onChange={(v) => upd({ ...c, s2: { ...c.s2, label: v } })}
          className="text-[9px] font-semibold tracking-[0.4em] uppercase mb-2 fade-up block"
          style={{ color: "#1DE3A2" }} />
        <div className="font-black leading-none text-white fade-up-d1" style={{ fontSize: "clamp(22px, 3vw, 34px)" }}>
          <EditableText value={c.s2.heading1} onChange={(v) => upd({ ...c, s2: { ...c.s2, heading1: v } })} style={{ color: "#fff", display: "block", lineHeight: 1.05 }} />
          <EditableText value={c.s2.heading2} onChange={(v) => upd({ ...c, s2: { ...c.s2, heading2: v } })} style={{ color: "#fff", display: "block", lineHeight: 1.05 }} />
        </div>
        <div className="mt-4 w-8 h-[2px] fade-up-d2" style={{ background: "#1DE3A2" }} />
      </div>
      <div className="flex-1 flex flex-col gap-2.5">
        {c.s2.items.map((item, i) => (
          <div key={i} className="rounded-2xl px-5 py-3 border fade-up flex items-center gap-4"
            style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.09)", animationDelay: `${0.07 * i}s` }}>
            <div className="text-xl font-black shrink-0 w-8" style={{ color: "#1DE3A2" }}>0{i + 1}</div>
            <div className="flex-1">
              <EditableText value={item.title} onChange={(v) => { const items = [...c.s2.items]; items[i] = { ...items[i], title: v }; upd({ ...c, s2: { ...c.s2, items } }); }}
                className="text-white font-bold text-sm leading-tight block" style={{ color: "#fff" }} />
              <EditableText value={item.desc} onChange={(v) => { const items = [...c.s2.items]; items[i] = { ...items[i], desc: v }; upd({ ...c, s2: { ...c.s2, items } }); }}
                className="text-xs mt-0.5 block" style={{ color: "rgba(255,255,255,0.4)" }} />
            </div>
          </div>
        ))}
      </div>
    </div>
    {ACCENT_LINE}
  </Slide>
);

// ─── Slide 3: Path to KROK + Getting the offer (объединение 3 и 4) ────────────
export const Slide3 = ({ dir, animKey, c, upd }: SlideProps) => {
  const leftItems = [
    { icon: "GraduationCap", text: "Математическая школа — хотела быть востоковедом?" },
    { icon: "BookOpen",      text: "11 класс — смена области → Московский Политех" },
    { icon: "Database",      text: "«Большие и открытые данные» — BigData" },
    { icon: "School",        text: "Летняя школа КРОК — узнала через сообщество вуза" },
  ];
  const rightItems = [
    { icon: "FileCheck",  text: "3 этапа — тестирование, кейс, ассессмент" },
    { icon: "Car",        text: "Собеседование с ресурс-менеджером прямо в машине" },
    { icon: "Radio",      text: "Оффер в лесу — 300 м над землёй на Валдае" },
    { icon: "Sparkles",   text: "Старт стажировки в группе отчётности" },
  ];
  const photos = [
    "https://cdn.poehali.dev/projects/ced705b4-8c8e-4826-8b52-7f4d72e16071/bucket/0087e286-05a8-4f94-8638-afb87a16fc65.jpg",
    "https://cdn.poehali.dev/projects/ced705b4-8c8e-4826-8b52-7f4d72e16071/bucket/6feb4469-4aac-486e-9407-80ee469c0c13.jpg",
    "https://cdn.poehali.dev/projects/ced705b4-8c8e-4826-8b52-7f4d72e16071/bucket/fbd1272e-2e30-4e85-a1f0-a9ec2632339c.jpg",
  ];
  return (
    <Slide dir={dir} animKey={animKey}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 80% at 85% 50%, #0F2D22 0%, #0A1A14 55%, #060F0B 100%)" }} />
      <GlowOrb size={350} x="85%" y="50%" color="#1DE3A2" blur={120} />
      <CircuitDecor />
      <LogoBadge />

      {/* Header */}
      <div className="absolute top-5 left-10 right-10">
        <EditableText value={c.s3.label} onChange={(v) => upd({ ...c, s3: { ...c.s3, label: v } })}
          className="text-[9px] font-semibold tracking-[0.4em] uppercase mb-1 fade-up block"
          style={{ color: "#1DE3A2" }} />
        <EditableText value={c.s3.heading} onChange={(v) => upd({ ...c, s3: { ...c.s3, heading: v } })}
          as="h2" className="text-white font-black fade-up-d1 block"
          style={{ fontSize: "clamp(22px, 3vw, 36px)", color: "#fff" }} />
        <div className="mt-1 w-10 h-[2px] fade-up-d2" style={{ background: "#1DE3A2" }} />
      </div>

      {/* Два столбца с строками — ниже зелёной черты */}
      <div className="absolute left-6 right-6 grid grid-cols-2 gap-x-3 gap-y-2" style={{ top: 108 }}>
        {leftItems.map((item, i) => (
          <div key={`l${i}`} className="flex items-center gap-3 rounded-xl px-4 py-2 border fade-up"
            style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)", animationDelay: `${0.06 * i}s` }}>
            <div className="w-5 h-5 rounded-md flex items-center justify-center shrink-0"
              style={{ background: "rgba(29,227,162,0.12)" }}>
              <Icon name={item.icon} size={11} style={{ color: "#1DE3A2" }} />
            </div>
            <span className="text-[11px] leading-tight" style={{ color: "rgba(255,255,255,0.72)" }}>{item.text}</span>
          </div>
        ))}
        {rightItems.map((item, i) => (
          <div key={`r${i}`} className="flex items-center gap-3 rounded-xl px-4 py-2 border fade-up"
            style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)", gridRow: i + 1, gridColumn: 2, animationDelay: `${0.06 * i + 0.03}s` }}>
            <div className="w-5 h-5 rounded-md flex items-center justify-center shrink-0"
              style={{ background: "rgba(29,227,162,0.12)" }}>
              <Icon name={item.icon} size={11} style={{ color: "#1DE3A2" }} />
            </div>
            <span className="text-[11px] leading-tight" style={{ color: "rgba(255,255,255,0.72)" }}>{item.text}</span>
          </div>
        ))}
      </div>

      {/* Фотографии снизу */}
      <div className="absolute left-4 right-4 flex items-center gap-3 fade-up" style={{ bottom: 35, height: 270 }}>
        <div className="flex-1 overflow-hidden fade-up" style={{ animationDelay: "0.1s", height: "100%", borderRadius: 12 }}>
          <img src={photos[0]} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="flex-1 overflow-hidden fade-up" style={{ animationDelay: "0.18s", height: "100%", borderRadius: 12 }}>
          <img src={photos[1]} alt="" className="w-full h-full object-contain" />
        </div>
      </div>

      {ACCENT_LINE}
    </Slide>
  );
};

// ─── Slide 3.5: Проект Мосэнерго (KPI + роль) ────────────────────────────────
export const SlideM = ({ dir, animKey }: SlideProps) => {
  const kpis = [
    { label: "Отчёты",            from: 600,  to: 300,  suffix: "~", accent: true,  note: "→ 300+" },
    { label: "Формы",             from: 1000, to: 100,  suffix: "~", accent: true,  note: "→ 100" },
    { label: "Показателей",       from: 2000, to: 7500, suffix: "~", accent: true,  note: "→ ~7500" },
    { label: "Систем интеграции", from: 0,    to: 10,   suffix: "",  accent: false, note: "" },
    { label: "ТЭЦ",               from: 0,    to: 13,   suffix: "",  accent: false, note: "" },
    { label: "Сотрудников",       from: 0,    to: 8000, suffix: "",  accent: false, note: "", display: "около 8000" },
  ];

  const [counts, setCounts] = useState<number[]>(kpis.map(k => k.accent ? k.from : k.from));
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (animated) return;
    const timeout = setTimeout(() => {
      setAnimated(true);
      kpis.forEach((kpi, idx) => {
        const duration = 800;
        const steps = 35;
        const step = (kpi.to - kpi.from) / steps;
        let s = 0;
        const timer = setInterval(() => {
          s++;
          const current = s >= steps ? kpi.to : Math.round(kpi.from + step * s);
          if (s >= steps) clearInterval(timer);
          setCounts(prev => { const next = [...prev]; next[idx] = current; return next; });
        }, duration / steps + idx * 5);
      });
    }, 250);
    return () => clearTimeout(timeout);
  }, [animKey]);

  const roles = [
    { icon: "Users",    text: "Роль стажёра в группе отчётности" },
    { icon: "Zap",      text: "Погружение в Мосэнерго — «чёрная дыра»?" },
    { icon: "Clock",    text: "Первый и единственный проект (~\u00a09\u00a0месяцев)" },
    { icon: "Calendar", text: "Месяц прихода на проект — Август, 2025" },
  ];

  return (
    <Slide dir={dir} animKey={animKey}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 20% 50%, #0D2B1E 0%, #0A1A14 55%, #060F0B 100%)" }} />
      <GlowOrb size={400} x="15%" y="50%" color="#1DE3A2" blur={130} />
      <GlowOrb size={200} x="85%" y="75%" color="#00C896" blur={100} />
      <LogoBadge />

      {/* Header */}
      <div className="absolute top-5 left-10 right-10">
        <div className="text-[9px] font-semibold tracking-[0.4em] uppercase mb-1 fade-up" style={{ color: "#1DE3A2" }}>
          Слайд 04 — Проектный опыт
        </div>
        <h2 className="font-black fade-up-d1" style={{ fontSize: "clamp(20px, 2.8vw, 34px)", color: "#fff" }}>
          Проект Мосэнерго
        </h2>
        <div className="mt-1 w-10 h-[2px] fade-up-d2" style={{ background: "#1DE3A2" }} />
      </div>

      {/* KPI сетка */}
      <div className="absolute left-10 grid grid-cols-3 gap-3" style={{ top: 108, width: "56%", bottom: 20 }}>
        {kpis.map((kpi, i) => (
          <div key={i} className="rounded-2xl flex flex-col justify-center px-4 py-4 fade-up"
            style={{
              background: kpi.accent ? "rgba(29,227,162,0.08)" : "rgba(255,255,255,0.04)",
              border: `1px solid ${kpi.accent ? "rgba(29,227,162,0.3)" : "rgba(255,255,255,0.08)"}`,
              animationDelay: `${0.07 * i}s`,
            }}>
            {kpi.suffix && (
              <div className="text-[10px] font-semibold mb-0.5" style={{ color: "#1DE3A2", opacity: 0.7 }}>{kpi.suffix}</div>
            )}
            <div className="font-black leading-none" style={{ fontSize: "clamp(18px, 2.2vw, 28px)", color: "#1DE3A2" }}>
              {kpi.accent ? (
                <div className="flex items-baseline gap-1 flex-wrap">
                  <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75em" }}>{kpi.from.toLocaleString("ru")}</span>
                  <span style={{ color: "rgba(29,227,162,0.5)", fontSize: "0.6em" }}>→</span>
                  <span style={{ color: "#1DE3A2" }}>{counts[i].toLocaleString("ru")}</span>
                </div>
              ) : (kpi as typeof kpis[number] & { display?: string }).display
                  ? <span className="flex items-baseline gap-1"><span style={{ fontSize: "0.5em", fontWeight: 400, color: "rgba(255,255,255,0.35)" }}>около</span><span>8000</span></span>
                  : counts[i].toLocaleString("ru")}
            </div>
            <div className="text-[12px] font-semibold mt-1.5 leading-tight" style={{ color: "rgba(255,255,255,0.6)" }}>{kpi.label}</div>
          </div>
        ))}
      </div>

      {/* Разделитель */}
      <div className="absolute" style={{ left: "calc(56% + 40px + 12px)", top: 108, bottom: 20, width: 1, background: "rgba(29,227,162,0.15)" }} />

      {/* Правая колонка: логотип + тезисы */}
      <div className="absolute right-8 flex flex-col justify-between"
        style={{ top: 108, bottom: 20, left: "calc(56% + 40px + 28px)" }}>

        {/* Логотип Мосэнерго */}
        <div className="flex items-center justify-center fade-up" style={{ flex: 1 }}>
          <img
            src="https://cdn.poehali.dev/projects/ced705b4-8c8e-4826-8b52-7f4d72e16071/bucket/d6481481-88f7-41fb-bd2a-2246831dc1ee.png"
            alt="Мосэнерго"
            style={{ maxWidth: "85%", maxHeight: 100, objectFit: "contain" }}
          />
        </div>

        {/* Тезисы */}
        <div className="flex flex-col gap-2.5" style={{ flex: 1.4 }}>
          {roles.map((r, i) => (
            <div key={i} className="flex items-start gap-3 rounded-xl px-4 py-3 border fade-up"
              style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)", animationDelay: `${0.1 + 0.08 * i}s` }}>
              <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                style={{ background: "rgba(29,227,162,0.12)" }}>
                <Icon name={r.icon} size={13} style={{ color: "#1DE3A2" }} />
              </div>
              <span className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.72)" }}>{r.text}</span>
            </div>
          ))}
        </div>
      </div>

      {ACCENT_LINE}
    </Slide>
  );
};

// ─── Slide 4: Мосэнерго + задачи + диаграмма (объединение 5, 6, 7) ────────────
export const Slide4 = ({ dir, animKey, c, upd }: SlideProps) => {
  const [tooltip, setTooltip] = useState<{ idx: number; x: number; y: number } | null>(null);
  const max = Math.max(...c.s7.bars.map(([, n]) => n as number));

  return (
    <Slide dir={dir} animKey={animKey}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 20%, #0F2D22 0%, #0A1A14 55%, #060F0B 100%)" }} />
      <GlowOrb size={400} x="50%" y="10%" color="#1DE3A2" blur={120} />
      <LogoBadge />

      {/* ── TOP: проект Мосэнерго ── */}
      <div className="absolute top-5 left-10 right-10">
        <EditableText value={c.s5.label} onChange={(v) => upd({ ...c, s5: { ...c.s5, label: v } })}
          className="text-[9px] font-semibold tracking-[0.4em] uppercase mb-0.5 fade-up block"
          style={{ color: "#1DE3A2" }} />
        <EditableText value={c.s5.heading} onChange={(v) => upd({ ...c, s5: { ...c.s5, heading: v } })}
          as="h2" className="text-white font-black fade-up-d1 block"
          style={{ fontSize: "clamp(17px, 2.2vw, 26px)", color: "#fff" }} />
        <div className="mt-1 w-10 h-[2px] fade-up-d2" style={{ background: "#1DE3A2" }} />
      </div>

      {/* Верхняя зона: все 6 задач в 2 колонки по 3 */}
      <div className="absolute left-6 right-6 grid grid-cols-2 gap-x-3 gap-y-2" style={{ top: 95 }}>
        {c.s6.tasks.map((task, i) => (
          <div key={i} className="flex items-center gap-3 rounded-xl px-5 py-3 border fade-up"
            style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)", animationDelay: `${0.06 * i}s` }}>
            <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#1DE3A2" }} />
            <div className="min-w-0">
              <div className="text-xs font-bold text-white leading-tight">{task.title}</div>
              {task.desc ? <div className="text-[10px]" style={{ color: "rgba(255,255,255,0.4)" }}>{task.desc}</div> : null}
            </div>
          </div>
        ))}
      </div>

      {/* ── BOTTOM: столбчатая диаграмма ── */}
      <div className="absolute left-6 right-6 bottom-4" style={{ top: 310 }}>
        <div className="text-[9px] font-semibold tracking-widest uppercase mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>
          {c.s7.heading}
        </div>
        {/* Область баров: вся оставшаяся высота минус заголовок (18px) и подписи (32px) */}
        <div className="relative flex gap-2" style={{ height: "calc(100% - 50px)" }}>
          {/* Простая возрастающая линия */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }} preserveAspectRatio="none">
            <line x1="0%" y1="98%" x2="100%" y2="4%"
              stroke="rgba(29,227,162,0.18)"
              strokeWidth="2"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          {c.s7.bars.map(([label, value, color], i) => {
            const pct = Math.round(((value as number) / max) * 100);
            const isHovered = tooltip?.idx === i;
            return (
              <div
                key={i}
                className="flex-1 flex flex-col justify-end cursor-pointer relative"
                onMouseEnter={() => setTooltip({ idx: i, x: 0, y: 0 })}
                onMouseLeave={() => setTooltip(null)}
              >
                {/* value над баром */}
                <div className="text-[11px] font-black text-center mb-1" style={{ color: color as string, opacity: isHovered ? 1 : 0.8 }}>{value}</div>
                {/* bar */}
                <div className="w-full rounded-t-xl relative overflow-hidden"
                  style={{
                    height: `${pct}%`,
                    background: `${color}28`,
                    border: `1px solid ${color}${isHovered ? "99" : "55"}`,
                    transition: "height 0.3s ease, border-color 0.15s",
                  }}>
                  <div className="absolute inset-0 rounded-t-xl"
                    style={{ background: `linear-gradient(to top, ${color}dd, ${color}44)` }} />
                </div>
                {/* axis label под баром — полный текст с переносом */}
                <div className="text-[8px] text-center font-medium leading-tight mt-1"
                  style={{ color: "rgba(255,255,255,0.45)", wordBreak: "break-word" }}>
                  {label as string}
                </div>

                {/* per-bar tooltip */}
                {isHovered && (() => {
                  const col = color as string;
                  const tooltipData: { desc: string; unit?: string }[] = [
                    { desc: "Анализ состава показателей отчетов, включающий сверку с макетами, выявление логики расчета и формализация формул", unit: "(отчёты)" },
                    { desc: "Формализация требований к BI-отчёту, включающая макет, определение показателей, разрезов и фильтров, проектирование витрины (атрибутивный состав, правила формирования) и постановку на Visiology (перечень виджетов, их настройки и форматирование) для дальнейшей разработки" },
                    { desc: "Разработка дашбордов, использование кастомных виджетов, работа с js, написание SQL-запросов" },
                    { desc: "Проверка корректности разработки и работы отчётов, использование чек-листа по тестированию" },
                    { desc: "Определение типа заявки, устранение ошибок, коммуникация с заказчиком и консультация" },
                    { desc: "Тестирование каждого атрибута витрины на корректное наполнение, формирование excel-таблицы для фиксирования результатов проверки" },
                  ];
                  const td = tooltipData[i] ?? { desc: "" };
                  return (
                    <div
                      className="absolute z-50 rounded-xl px-3 py-2.5 pointer-events-none"
                      style={{
                        background: "rgba(6,15,11,0.97)",
                        border: `1px solid ${col}55`,
                        boxShadow: "0 8px 32px rgba(0,0,0,0.8)",
                        bottom: "calc(100% + 6px)",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "200px",
                        whiteSpace: "normal",
                      }}
                    >
                      <div className="text-xs font-black mb-1" style={{ color: col }}>{label as string}</div>
                      {td.desc && <div className="text-[10px] mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>{td.desc}</div>}
                      <div className="mt-1.5 flex items-center gap-1">
                        <div className="w-2 h-2 rounded-sm" style={{ background: col }} />
                        <span className="text-[10px] font-bold" style={{ color: col }}>Кол-во: {value as number}{td.unit ? ` ${td.unit}` : ""}</span>
                      </div>
                    </div>
                  );
                })()}
              </div>
            );
          })}
        </div>
      </div>

      {ACCENT_LINE}
    </Slide>
  );
};

// ─── Slide 5: Стажёрская программа ───────────────────────────────────────────
export const Slide5 = ({ dir, animKey }: SlideProps) => {
  const screenshots = [
    { url: "https://cdn.poehali.dev/projects/ced705b4-8c8e-4826-8b52-7f4d72e16071/bucket/87c95f31-2e9b-4ae1-bac0-0307ad09236b.png", label: "План стажировки" },
    { url: "https://cdn.poehali.dev/projects/ced705b4-8c8e-4826-8b52-7f4d72e16071/bucket/0a50cc5a-5502-4906-b96e-eb24faebefbd.png", label: "Базовое обучение" },
    { url: "https://cdn.poehali.dev/projects/ced705b4-8c8e-4826-8b52-7f4d72e16071/bucket/cacb16db-0abc-4001-a46d-27ea2ee6bf89.png", label: "Протокол встречи" },
    { url: "https://cdn.poehali.dev/projects/ced705b4-8c8e-4826-8b52-7f4d72e16071/bucket/e315c6cb-c609-410c-862f-80a8331de16c.png", label: "Встречи с наставником" },
  ];

  return (
    <Slide dir={dir} animKey={animKey}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 70% at 50% 0%, #0F2D22 0%, #0A1A14 55%, #060F0B 100%)" }} />
      <GlowOrb size={400} x="50%" y="0%" color="#1DE3A2" blur={120} />
      <GlowOrb size={200} x="10%" y="80%" color="#00C896" blur={90} />
      <LogoBadge />

      {/* Header */}
      <div className="absolute top-5 left-10 right-10">
        <div className="text-[9px] font-semibold tracking-[0.4em] uppercase mb-1 fade-up" style={{ color: "#1DE3A2" }}>
          Слайд 06 — Стажёрская программа
        </div>
        <h2 className="font-black fade-up-d1" style={{ fontSize: "clamp(20px, 2.8vw, 32px)", color: "#fff" }}>
          Стажёрская программа
        </h2>
        <div className="mt-1 w-12 h-[2px] fade-up-d2" style={{ background: "#1DE3A2" }} />
      </div>

      {/* Центральная подпись со стрелками */}
      <div className="absolute fade-up-d1" style={{ top: 108, left: 24, right: 24, bottom: 16 }}>

        {/* Лейбл — строго по центру */}
        <div className="absolute z-10" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
          <div className="rounded-2xl px-5 py-2.5 text-center whitespace-nowrap"
            style={{ background: "rgba(29,227,162,0.12)", border: "1px solid rgba(29,227,162,0.35)", backdropFilter: "blur(8px)" }}>
            <div className="text-[11px] font-bold leading-snug" style={{ color: "#1DE3A2" }}>
              Процесс прохождения<br />стажёрской программы
            </div>
          </div>
        </div>

        {/* Скрины: 2 сверху, 2 снизу от центра */}
        {/* Верхний левый */}
        <div className="absolute fade-up" style={{ top: 0, left: 0, width: "44%", height: "44%", animationDelay: "0.1s" }}>
          <div className="w-full h-full rounded-xl overflow-hidden border" style={{ borderColor: "rgba(29,227,162,0.2)" }}>
            <img src={screenshots[0].url} alt={screenshots[0].label} className="w-full h-full object-cover object-top" />
          </div>
          <div className="absolute bottom-2 left-2 text-[9px] font-semibold px-2 py-0.5 rounded-md"
            style={{ background: "rgba(6,15,11,0.85)", color: "#1DE3A2", border: "1px solid rgba(29,227,162,0.25)" }}>
            {screenshots[0].label}
          </div>
          {/* стрелка вправо-вниз к центру */}
          <svg className="absolute" style={{ right: -28, bottom: -18, width: 36, height: 28, pointerEvents: "none" }}>
            <path d="M2 2 Q20 2 32 20" fill="none" stroke="#1DE3A2" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="3 3"/>
            <polygon points="28,18 34,24 22,24" fill="#1DE3A2" fillOpacity="0.5"/>
          </svg>
        </div>

        {/* Верхний правый */}
        <div className="absolute fade-up" style={{ top: 0, right: 0, width: "44%", height: "44%", animationDelay: "0.18s" }}>
          <div className="w-full h-full rounded-xl overflow-hidden border" style={{ borderColor: "rgba(29,227,162,0.2)" }}>
            <img src={screenshots[1].url} alt={screenshots[1].label} className="w-full h-full object-cover object-top" />
          </div>
          <div className="absolute bottom-2 right-2 text-[9px] font-semibold px-2 py-0.5 rounded-md"
            style={{ background: "rgba(6,15,11,0.85)", color: "#1DE3A2", border: "1px solid rgba(29,227,162,0.25)" }}>
            {screenshots[1].label}
          </div>
          <svg className="absolute" style={{ left: -28, bottom: -18, width: 36, height: 28, pointerEvents: "none" }}>
            <path d="M34 2 Q16 2 4 20" fill="none" stroke="#1DE3A2" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="3 3"/>
            <polygon points="8,18 2,24 14,24" fill="#1DE3A2" fillOpacity="0.5"/>
          </svg>
        </div>

        {/* Нижний левый */}
        <div className="absolute fade-up" style={{ bottom: 0, left: 0, width: "44%", height: "44%", animationDelay: "0.26s" }}>
          <svg className="absolute" style={{ right: -28, top: -18, width: 36, height: 28, pointerEvents: "none" }}>
            <path d="M2 26 Q20 26 32 8" fill="none" stroke="#1DE3A2" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="3 3"/>
            <polygon points="28,10 34,4 22,4" fill="#1DE3A2" fillOpacity="0.5"/>
          </svg>
          <div className="w-full h-full rounded-xl overflow-hidden border" style={{ borderColor: "rgba(29,227,162,0.2)" }}>
            <img src={screenshots[2].url} alt={screenshots[2].label} className="w-full h-full object-cover object-top" />
          </div>
          <div className="absolute top-2 left-2 text-[9px] font-semibold px-2 py-0.5 rounded-md"
            style={{ background: "rgba(6,15,11,0.85)", color: "#1DE3A2", border: "1px solid rgba(29,227,162,0.25)" }}>
            {screenshots[2].label}
          </div>
        </div>

        {/* Нижний правый */}
        <div className="absolute fade-up" style={{ bottom: 0, right: 0, width: "44%", height: "44%", animationDelay: "0.34s" }}>
          <svg className="absolute" style={{ left: -28, top: -18, width: 36, height: 28, pointerEvents: "none" }}>
            <path d="M34 26 Q16 26 4 8" fill="none" stroke="#1DE3A2" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="3 3"/>
            <polygon points="8,10 2,4 14,4" fill="#1DE3A2" fillOpacity="0.5"/>
          </svg>
          <div className="w-full h-full rounded-xl overflow-hidden border" style={{ borderColor: "rgba(29,227,162,0.2)" }}>
            <img src={screenshots[3].url} alt={screenshots[3].label} className="w-full h-full object-cover object-top" />
          </div>
          <div className="absolute top-2 right-2 text-[9px] font-semibold px-2 py-0.5 rounded-md"
            style={{ background: "rgba(6,15,11,0.85)", color: "#1DE3A2", border: "1px solid rgba(29,227,162,0.25)" }}>
            {screenshots[3].label}
          </div>
        </div>
      </div>

      {ACCENT_LINE}
    </Slide>
  );
};

// ─── Slide 6: Траектории развития ─────────────────────────────────────────────
export const Slide6 = ({ dir, animKey }: SlideProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  const tracks = [
    {
      icon: "Monitor",
      tag: "Инструменты",
      title: "Освоение альтернативных BI-платформ для расширения инструментального кругозора и понимания сильных сторон каждой системы",
      color: "#1DE3A2",
    },
    {
      icon: "Database",
      tag: "Технологии",
      title: "Углубление в смежные области — развитие компетенций в области DWH и ETL",
      color: "#1DE3A2",
    },
    {
      icon: "Globe",
      tag: "Отрасли",
      title: "Расширение проектного опыта в других отраслях (например, продажи и логистика)",
      color: "#00C896",
    },
    {
      icon: "Layers",
      tag: "Проекты",
      title: "Участие во всех этапах реализации проекта, от сбора требований до сдачи системы",
      color: "#00C896",
    },
    {
      icon: "Code2",
      tag: "Hard skill",
      title: "Углубленное изучение JavaScript и развитие библиотеки виджетов Visiology",
      color: "#4AF0C0",
    },
    {
      icon: "MessageCircle",
      tag: "Soft skill",
      title: "Развитие навыков проведения обследования Заказчика и формирование предложений на реализацию решений",
      color: "#4AF0C0",
    },
  ];

  return (
    <Slide dir={dir} animKey={animKey}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 90% at 15% 50%, #0D2B1E 0%, #0A1A14 55%, #060F0B 100%)" }} />
      <GlowOrb size={350} x="12%" y="50%" color="#1DE3A2" blur={120} />
      <GlowOrb size={200} x="90%" y="80%" color="#00C896" blur={90} />
      <LogoBadge />

      {/* Header */}
      <div className="absolute top-5 left-10 right-10">
        <div className="text-[9px] font-semibold tracking-[0.4em] uppercase mb-1 fade-up" style={{ color: "#1DE3A2" }}>
          Слайд 08 — Куда расти
        </div>
        <h2 className="font-black fade-up-d1" style={{ fontSize: "clamp(20px, 2.8vw, 32px)", color: "#fff" }}>
          Траектории развития
        </h2>
        <div className="mt-1 w-12 h-[2px] fade-up-d2" style={{ background: "#1DE3A2" }} />
      </div>

      {/* Сетка карточек */}
      <div className="absolute left-6 right-6 grid grid-cols-3 gap-3" style={{ top: 108, bottom: 16 }}>
        {tracks.map((t, i) => (
          <div
            key={i}
            className="rounded-2xl p-4 border flex flex-col gap-2 cursor-default fade-up"
            style={{
              background: hovered === i ? `${t.color}12` : "rgba(255,255,255,0.03)",
              borderColor: hovered === i ? `${t.color}55` : "rgba(255,255,255,0.07)",
              borderTopColor: t.color,
              borderTopWidth: hovered === i ? 2 : 1,
              transition: "all 0.2s ease",
              animationDelay: `${0.07 * i}s`,
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Иконка + тег */}
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: `${t.color}18`, transition: "background 0.2s" }}>
                <Icon name={t.icon} size={15} style={{ color: t.color }} />
              </div>
              <span className="text-[8px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full"
                style={{ background: `${t.color}15`, color: t.color }}>
                {t.tag}
              </span>
            </div>

            {/* Заголовок */}
            <div className="font-semibold leading-snug flex-1" style={{ fontSize: "clamp(10px, 1vw, 13px)", color: "rgba(255,255,255,0.85)" }}>
              {t.title}
            </div>

            {/* Нижняя черта-прогресс */}
            <div className="mt-auto h-[2px] rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
              <div className="h-full rounded-full" style={{
                width: hovered === i ? "100%" : "30%",
                background: t.color,
                transition: "width 0.4s ease",
              }} />
            </div>
          </div>
        ))}
      </div>

      {ACCENT_LINE}
    </Slide>
  );
};

// ─── Slide 6.5: Инициатива ────────────────────────────────────────────────────
export const SlideI = ({ dir, animKey }: SlideProps) => {
  const steps = [
    { icon: "Search",       title: "Проблема",     desc: "Нет единого источника знаний по разработке BI-отчётов в Visiology — каждый стажёр разбирается с нуля" },
    { icon: "Lightbulb",    title: "Идея",         desc: "Создать универсальную базу знаний: от структуры витрины до настройки виджетов и JS-кастомизации" },
    { icon: "BookOpen",     title: "Содержание",   desc: "Постановки, SQL-запросы, работа с S2T, тестирование дашбордов, разбор заявок ОПЭ" },
    { icon: "Users",        title: "Для кого",     desc: "Новые стажёры и аналитики, входящие в проект — готовая точка входа вместо долгого онбординга" },
  ];

  return (
    <Slide dir={dir} animKey={animKey}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 0%, #0D2B1E 0%, #0A1A14 55%, #060F0B 100%)" }} />
      <GlowOrb size={500} x="50%" y="0%" color="#1DE3A2" blur={140} />
      <GlowOrb size={200} x="90%" y="90%" color="#00C896" blur={90} />
      <LogoBadge />

      {/* Header */}
      <div className="absolute top-5 left-10 right-10">
        <div className="text-[9px] font-semibold tracking-[0.4em] uppercase mb-1 fade-up" style={{ color: "#1DE3A2" }}>
          Слайд 09 — Инициатива
        </div>
        <h2 className="font-black fade-up-d1" style={{ fontSize: "clamp(20px, 2.8vw, 32px)", color: "#fff" }}>
          Инициатива
        </h2>
        <div className="mt-1 w-12 h-[2px] fade-up-d2" style={{ background: "#1DE3A2" }} />
      </div>

      {/* Центральный баннер */}
      <div className="absolute left-10 right-10 fade-up" style={{ top: 108 }}>
        <div className="rounded-2xl px-6 py-4 flex items-center gap-4"
          style={{ background: "rgba(29,227,162,0.08)", border: "1px solid rgba(29,227,162,0.3)", borderLeftWidth: 4, borderLeftColor: "#1DE3A2" }}>
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: "rgba(29,227,162,0.15)" }}>
            <Icon name="BookOpen" size={18} color="rgba(29,227,162,0.6)" />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="font-semibold text-white" style={{ fontSize: "clamp(12px, 1.3vw, 15px)", letterSpacing: "0.01em" }}>
              Универсальная база знаний по разработке BI-отчётов в Visiology
            </div>
          </div>
        </div>
      </div>

      {/* Картинка */}
      <div className="absolute left-10 right-10 fade-up-d1 flex items-center justify-center" style={{ top: 200, bottom: 16 }}>
        <img
          src="https://cdn.poehali.dev/projects/ced705b4-8c8e-4826-8b52-7f4d72e16071/bucket/92b8469c-6cea-4a50-860b-94b6a935a84f.png"
          alt="База знаний"
          style={{
            width: "clamp(180px, 38%, 300px)",
            height: "auto",
            filter: "brightness(0) saturate(100%) invert(78%) sepia(60%) saturate(400%) hue-rotate(108deg) brightness(110%)",
          }}
        />
      </div>

      {ACCENT_LINE}
    </Slide>
  );
};

// ─── Slide 7: 9 месяцев — было/стало ─────────────────────────────────────────
export const Slide7 = ({ dir, animKey }: SlideProps) => {
  const hard = [
    { before: "Знала SQL базово",            after: "Пишу сложные запросы для витрин и дашбордов" },
    { before: "Не работала с BI",            after: "Разрабатываю дашборды в Visiology + кастомные виджеты" },
    { before: "Не писала постановки",        after: "Проектирую витрины, пишу постановки на разработку" },
    { before: "Не читала тех.документацию",  after: "Понимаю проектную документацию: какая для чего" },
    { before: "BigData — теория",            after: "Реальный и масштабный проект" },
  ];
  const soft = [
    { before: "Не было опыта с заказчиком",  after: "Коммуницирую с заказчиком, знаю правила переписки" },
    { before: "Приходила с «что делать?»",   after: "Прихожу с гипотезой и конкретным вопросом" },
    { before: "Не умела защищать решения",   after: "Аргументирую выбор и отстаиваю свою точку зрения" },
    { before: "Боялась ошибиться",           after: "Делаю, получаю обратную связь, расту" },
    { before: "Работала самостоятельно",     after: "Опыт работы в команде" },
  ];

  const stats = [
    { value: "200+", label: "задач выполнено" },
    { value: "×2", label: "рост самостоятельности" },
  ];

  return (
    <Slide dir={dir} animKey={animKey}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 80% at 70% 20%, #0F2D22 0%, #0A1A14 60%, #060F0B 100%)" }} />
      <GlowOrb size={400} x="70%" y="15%" color="#1DE3A2" blur={130} />
      <GlowOrb size={250} x="10%" y="80%" color="#00C896" blur={100} />
      <LogoBadge />

      {/* Header */}
      <div className="absolute top-5 left-10 right-10">
        <div className="text-[9px] font-semibold tracking-[0.4em] uppercase mb-1 fade-up" style={{ color: "#1DE3A2" }}>
          Слайд 07 — Результаты
        </div>
        <h2 className="font-black fade-up-d1" style={{ fontSize: "clamp(20px, 2.8vw, 32px)", color: "#fff" }}>
          ~ 9 месяцев спустя
        </h2>
        <div className="mt-1 w-12 h-[2px] fade-up-d2" style={{ background: "#1DE3A2" }} />
      </div>

      {/* Две колонки скиллов */}
      <div className="absolute left-6 right-6 grid grid-cols-2 gap-4" style={{ top: 108, bottom: 96 }}>

        {/* Hard Skills */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: "rgba(29,227,162,0.15)" }}>
              <Icon name="Code2" size={12} style={{ color: "#1DE3A2" }} />
            </div>
            <span className="text-[10px] font-black tracking-[0.3em] uppercase" style={{ color: "#1DE3A2" }}>Hard Skills</span>
          </div>
          {hard.map((item, i) => (
            <div key={i} className="rounded-xl px-4 py-3 border fade-up"
              style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)", animationDelay: `${0.06 * i}s` }}>
              <div className="flex items-start gap-2">
                <span className="text-[10px] leading-tight mt-0.5 shrink-0 line-through" style={{ color: "rgba(255,255,255,0.25)" }}>{item.before}</span>
                <span style={{ color: "rgba(29,227,162,0.5)", fontSize: 10, marginTop: 1 }}>→</span>
                <span className="text-[11px] font-semibold leading-tight" style={{ color: "rgba(255,255,255,0.82)" }}>{item.after}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: "rgba(0,200,150,0.15)" }}>
              <Icon name="MessageCircle" size={12} style={{ color: "#00C896" }} />
            </div>
            <span className="text-[10px] font-black tracking-[0.3em] uppercase" style={{ color: "#00C896" }}>Soft Skills</span>
          </div>
          {soft.map((item, i) => (
            <div key={i} className="rounded-xl px-4 py-3 border fade-up"
              style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)", animationDelay: `${0.06 * i + 0.1}s` }}>
              <div className="flex items-start gap-2">
                <span className="text-[10px] leading-tight mt-0.5 shrink-0 line-through" style={{ color: "rgba(255,255,255,0.25)" }}>{item.before}</span>
                <span style={{ color: "rgba(0,200,150,0.5)", fontSize: 10, marginTop: 1 }}>→</span>
                <span className="text-[11px] font-semibold leading-tight" style={{ color: "rgba(255,255,255,0.82)" }}>{item.after}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Нижний баннер с KPI */}
      <div className="absolute left-6 right-6 flex gap-2 fade-up" style={{ bottom: 14, height: 74, animationDelay: "0.4s" }}>
        {/* KPI 1: 9 месяцев */}
        <div className="flex-[2] rounded-2xl flex flex-col items-center justify-center px-3"
          style={{ background: "rgba(29,227,162,0.1)", border: "1px solid rgba(29,227,162,0.3)" }}>
          <div className="font-black leading-none text-center" style={{ fontSize: "clamp(13px, 1.4vw, 17px)", color: "#1DE3A2" }}>9 месяцев</div>
          <div className="text-[8px] mt-0.5 font-medium text-center leading-tight" style={{ color: "rgba(255,255,255,0.5)" }}>реального проектного опыта в КРОК</div>
        </div>
        {/* KPI 2: 200+ */}
        <div className="flex-1 rounded-2xl flex flex-col items-center justify-center"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
          <div className="font-black leading-none" style={{ fontSize: "clamp(20px, 2.4vw, 30px)", color: "#1DE3A2" }}>200+</div>
          <div className="text-[8px] mt-0.5 font-medium" style={{ color: "rgba(255,255,255,0.4)" }}>задач выполнено</div>
        </div>
        {/* KPI 3: коммуникация */}
        <div className="flex-[2] rounded-2xl flex flex-col items-center justify-center px-3"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
          <div className="font-black leading-none text-center" style={{ fontSize: "clamp(13px, 1.4vw, 17px)", color: "#fff" }}>Коммуникация</div>
          <div className="text-[8px] mt-0.5 font-medium text-center leading-tight" style={{ color: "rgba(255,255,255,0.4)" }}>в проекте с 20+ коллегами</div>
        </div>
        {/* KPI 4: ×2 */}
        <div className="flex-1 rounded-2xl flex flex-col items-center justify-center"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
          <div className="font-black leading-none" style={{ fontSize: "clamp(20px, 2.4vw, 30px)", color: "#fff" }}>×2</div>
          <div className="text-[8px] mt-0.5 font-medium" style={{ color: "rgba(255,255,255,0.4)" }}>рост самостоятельности</div>
        </div>
      </div>

      {ACCENT_LINE}
    </Slide>
  );
};

// ─── Slide 8 (бывший 11): Thank you ──────────────────────────────────────────
export const Slide8 = ({ dir, animKey, c, upd }: SlideProps) => (
  <Slide dir={dir} animKey={animKey}>
    <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 90% 90% at 60% 40%, #0F2D22 0%, #0A1A14 55%, #060F0B 100%)" }} />
    <GlowOrb size={500} x="60%" y="40%" color="#1DE3A2" blur={150} />
    <GlowOrb size={200} x="20%" y="80%" color="#00C896" blur={80} />
    <div className="absolute right-[8%] top-[8%] bottom-[8%] w-[28%] flex items-center justify-center opacity-30">
      <div className="w-[80px] h-[90%]"><DNADecor opacity={1} /></div>
    </div>
    <LogoBadge />
    <div className="absolute left-10 top-1/2 -translate-y-[55%]">
      <EditableText value={c.s11.label} onChange={(v) => upd({ ...c, s11: { ...c.s11, label: v } })}
        className="text-[10px] font-semibold tracking-[0.5em] uppercase mb-3 fade-up block"
        style={{ color: "#1DE3A2" }} />
      <h2 className="font-black leading-[1.0] mb-4 fade-up-d1 flex items-baseline gap-3" style={{ fontSize: "clamp(38px, 5.5vw, 64px)" }}>
        <EditableText value={c.s11.heading1} onChange={(v) => upd({ ...c, s11: { ...c.s11, heading1: v } })} style={{ color: "#fff" }} />
        <EditableText value={c.s11.heading2} onChange={(v) => upd({ ...c, s11: { ...c.s11, heading2: v } })} style={{ color: "#1DE3A2" }} />
      </h2>
      <div className="h-px w-40 mb-5 fade-up-d2" style={{ background: "rgba(255,255,255,0.08)" }} />
      <EditableText value={c.s11.name} onChange={(v) => upd({ ...c, s11: { ...c.s11, name: v } })}
        className="text-lg font-bold fade-up-d3 block" style={{ color: "rgba(255,255,255,0.5)" }} />
    </div>
    {ACCENT_LINE}
  </Slide>
);

// ─── Slide registry ───────────────────────────────────────────────────────────
export const SLIDE_COMPONENTS = [
  Slide1, Slide2, Slide3, SlideM, Slide4, Slide5, Slide7, Slide6, SlideI, Slide8,
];
export const SLIDE_LABELS = [
  "Титул", "Оглавление", "Путь → КРОК",
  "Мосэнерго", "Задачи", "Программа", "9 месяцев", "Развитие", "Инициатива", "Q&A",
];