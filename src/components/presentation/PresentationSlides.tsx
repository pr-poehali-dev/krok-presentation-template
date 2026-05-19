// ─── Slide1–Slide9 components ────────────────────────────────────────────────

import { useState } from "react";
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
      <div className="absolute left-6 right-6 grid grid-cols-2 gap-x-3 gap-y-1.5" style={{ top: 108 }}>
        {leftItems.map((item, i) => (
          <div key={`l${i}`} className="flex items-center gap-3 rounded-xl px-4 py-1.5 border fade-up"
            style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)", animationDelay: `${0.06 * i}s` }}>
            <div className="w-5 h-5 rounded-md flex items-center justify-center shrink-0"
              style={{ background: "rgba(29,227,162,0.12)" }}>
              <Icon name={item.icon} size={11} style={{ color: "#1DE3A2" }} />
            </div>
            <span className="text-[11px] leading-tight" style={{ color: "rgba(255,255,255,0.72)" }}>{item.text}</span>
          </div>
        ))}
        {rightItems.map((item, i) => (
          <div key={`r${i}`} className="flex items-center gap-3 rounded-xl px-4 py-1.5 border fade-up"
            style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)", gridRow: i + 1, gridColumn: 2, animationDelay: `${0.06 * i + 0.03}s` }}>
            <div className="w-5 h-5 rounded-md flex items-center justify-center shrink-0"
              style={{ background: "rgba(29,227,162,0.12)" }}>
              <Icon name={item.icon} size={11} style={{ color: "#1DE3A2" }} />
            </div>
            <span className="text-[11px] leading-tight" style={{ color: "rgba(255,255,255,0.72)" }}>{item.text}</span>
          </div>
        ))}
      </div>

      {/* Фотографии снизу — без рамки, без обрезания */}
      <div className="absolute left-6 right-6 flex gap-2 fade-up" style={{ bottom: 10, height: 210 }}>
        {photos.map((src, i) => (
          <div key={i} className="flex-1 rounded-xl overflow-hidden flex items-center justify-center"
            style={{ animationDelay: `${0.1 + 0.08 * i}s` }}>
            <img src={src} alt="" className="w-full h-full object-contain" />
          </div>
        ))}
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
        {/* Область баров: вся оставшаяся высота минус заголовок (18px) и подписи (20px) */}
        <div className="relative flex gap-2" style={{ height: "calc(100% - 38px)" }}>
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
                {/* axis label под баром */}
                <div className="text-[9px] text-center font-medium leading-tight mt-1"
                  style={{ color: "rgba(255,255,255,0.45)" }}>
                  {(label as string).length > 9 ? (label as string).slice(0, 9) + "…" : label as string}
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

// ─── Slide 5 (бывший 8): Стажёрская программа + инициатива ───────────────────
export const Slide5 = ({ dir, animKey, c, upd }: SlideProps) => (
  <Slide dir={dir} animKey={animKey}>
    <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 70% at 50% 0%, #0F2D22 0%, #0A1A14 55%, #060F0B 100%)" }} />
    <GlowOrb size={400} x="50%" y="0%" color="#1DE3A2" blur={120} />
    <LogoBadge />
    <div className="absolute top-7 left-10 right-10">
      <EditableText value={c.s8.label} onChange={(v) => upd({ ...c, s8: { ...c.s8, label: v } })}
        className="text-[9px] font-semibold tracking-[0.4em] uppercase mb-1 fade-up block"
        style={{ color: "#1DE3A2" }} />
      <EditableText value={c.s8.heading} onChange={(v) => upd({ ...c, s8: { ...c.s8, heading: v } })}
        as="h2" className="text-white font-black fade-up-d1 block"
        style={{ fontSize: "clamp(20px, 2.8vw, 32px)", color: "#fff" }} />
      <div className="mt-1.5 w-12 h-[2px] fade-up-d2" style={{ background: "#1DE3A2" }} />
    </div>
    <div className="absolute left-10 right-10 top-[108px] bottom-8 grid grid-cols-2 gap-4">
      <div className="rounded-2xl border fade-up flex items-center justify-center"
        style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(29,227,162,0.18)" }}>
        <svg viewBox="0 0 160 200" width="160" height="200" style={{ opacity: 0.9 }}>
          <rect x="20" y="30" width="120" height="155" rx="10" fill="none" stroke="#1DE3A2" strokeWidth="3" opacity="0.5" />
          <rect x="55" y="18" width="50" height="24" rx="8" fill="#0D1F1A" stroke="#1DE3A2" strokeWidth="2.5" opacity="0.9" />
          <rect x="62" y="22" width="36" height="12" rx="4" fill="#1DE3A2" opacity="0.2" />
          {[50, 75, 100, 125, 150].map((y, i) => (
            <g key={i}>
              <rect x="36" y={y - 8} width="18" height="18" rx="4"
                fill="rgba(29,227,162,0.15)" stroke="#1DE3A2" strokeWidth="1.5" />
              <polyline points={`40,${y + 1} 44,${y + 5} 50,${y - 2}`}
                fill="none" stroke="#1DE3A2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="62" y={y - 2} width={70 - i * 8} height="5" rx="2.5"
                fill="#1DE3A2" opacity="0.25" />
            </g>
          ))}
        </svg>
      </div>
      <div className="rounded-2xl p-4 border fade-up-d2 flex flex-col gap-3"
        style={{ background: "rgba(29,227,162,0.07)", borderColor: "rgba(29,227,162,0.25)", borderTopWidth: "3px", borderTopColor: "#1DE3A2" }}>
        <div className="flex items-center gap-2">
          <Icon name="Lightbulb" size={14} style={{ color: "#1DE3A2" }} />
          <span className="text-[10px] font-semibold tracking-widest uppercase" style={{ color: "#1DE3A2" }}>Моя инициатива</span>
        </div>
        <div className="text-sm font-bold text-white">Расширить раздел «Коммуникация с заказчиком»</div>
        {[
          { icon: "MessageSquare", text: "Встреча 1: стажёр собирает/уточняет требования" },
          { icon: "Layout",        text: "Дорабатывает дашборд самостоятельно" },
          { icon: "RotateCcw",     text: "Встреча 2: показывает результат, получает обратную связь" },
          { icon: "Star",          text: "Делает выводы — определяет, хватило ли выявленных требований" },
        ].map((step, i) => (
          <div key={i} className="flex items-center gap-2">
            <Icon name={step.icon} size={12} style={{ color: "#1DE3A2", opacity: 0.8 }} />
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>{step.text}</span>
          </div>
        ))}
      </div>
    </div>
    {ACCENT_LINE}
  </Slide>
);

// ─── Slide 6 (бывший 9): Development directions ───────────────────────────────
export const Slide6 = ({ dir, animKey, c, upd }: SlideProps) => (
  <Slide dir={dir} animKey={animKey}>
    <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 90% at 10% 50%, #0F2D22 0%, #0A1A14 55%, #060F0B 100%)" }} />
    <GlowOrb size={300} x="8%" y="50%" color="#1DE3A2" blur={100} />
    <LogoBadge />
    <div className="absolute top-7 left-10 right-10">
      <EditableText value={c.s9.label} onChange={(v) => upd({ ...c, s9: { ...c.s9, label: v } })}
        className="text-[9px] font-semibold tracking-[0.4em] uppercase mb-1 fade-up block"
        style={{ color: "#1DE3A2" }} />
      <EditableText value={c.s9.heading} onChange={(v) => upd({ ...c, s9: { ...c.s9, heading: v } })}
        as="h2" className="text-white font-black fade-up-d1 block"
        style={{ fontSize: "clamp(20px, 2.8vw, 32px)", color: "#fff" }} />
      <div className="mt-1.5 w-12 h-[2px] fade-up-d2" style={{ background: "#1DE3A2" }} />
    </div>
    <div className="absolute left-10 right-10 top-[108px] bottom-8 grid grid-cols-2 gap-2.5">
      {c.s9.items.map((item, i) => (
        <div key={i} className="rounded-2xl px-5 py-3.5 border flex items-center gap-3 fade-up"
          style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)", animationDelay: `${0.07 * i}s` }}>
          <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: "rgba(29,227,162,0.12)" }}>
            <Icon name={item.icon} size={14} style={{ color: "#1DE3A2" }} />
          </div>
          <EditableText value={item.text}
            onChange={(v) => { const items = [...c.s9.items]; items[i] = { ...items[i], text: v }; upd({ ...c, s9: { ...c.s9, items } }); }}
            className="text-sm block flex-1" style={{ color: "rgba(255,255,255,0.7)" }} />
        </div>
      ))}
    </div>
    {ACCENT_LINE}
  </Slide>
);

// ─── Slide 7 (бывший 10): Who I became ────────────────────────────────────────
export const Slide7 = ({ dir, animKey, c, upd }: SlideProps) => (
  <Slide dir={dir} animKey={animKey}>
    <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 80% at 70% 50%, #0F2D22 0%, #0A1A14 60%, #060F0B 100%)" }} />
    <GlowOrb size={500} x="72%" y="50%" color="#1DE3A2" blur={120} />
    <LogoBadge />
    <div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-75">
      <StickFigureExpert />
    </div>
    <div className="absolute top-7 left-10 right-10">
      <EditableText value={c.s10.label} onChange={(v) => upd({ ...c, s10: { ...c.s10, label: v } })}
        className="text-[9px] font-semibold tracking-[0.4em] uppercase mb-1 fade-up block"
        style={{ color: "#1DE3A2" }} />
      <EditableText value={c.s10.heading} onChange={(v) => upd({ ...c, s10: { ...c.s10, heading: v } })}
        as="h2" className="text-white font-black fade-up-d1 block"
        style={{ fontSize: "clamp(20px, 2.8vw, 32px)", color: "#fff" }} />
      <div className="mt-1.5 w-12 h-[2px] fade-up-d2" style={{ background: "#1DE3A2" }} />
    </div>
    <div className="absolute left-10 top-[108px] bottom-8 max-w-[58%] grid grid-cols-2 gap-2.5 content-start">
      {[
        { icon: "Shield",        label: "Уверенность",  text: "Намного увереннее на проекте, чем в первый день" },
        { icon: "BarChart2",     label: "Задачи",       text: "Спектр самостоятельных задач значительно вырос" },
        { icon: "Database",      label: "Знания",       text: "Большой объём предметных и технических знаний" },
        { icon: "Zap",           label: "Скорость",     text: "Быстрее нахожу решения, меньше трачу времени" },
        { icon: "MessageCircle", label: "Коммуникация", text: "Прихожу не с «что делать», а с гипотезой и вопросом" },
        { icon: "Star",          label: "Опыт",         text: "Реальный проектный опыт с первого дня стажировки" },
      ].map((item, i) => (
        <div key={i} className="rounded-xl px-3 py-2.5 border flex items-start gap-2.5 fade-up"
          style={{ background: "rgba(29,227,162,0.06)", borderColor: "rgba(29,227,162,0.18)", animationDelay: `${0.07 * i}s` }}>
          <Icon name={item.icon} size={13} className="mt-0.5 shrink-0" style={{ color: "#1DE3A2" }} />
          <div>
            <div className="text-xs font-bold text-white">{item.label}</div>
            <div className="text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>{item.text}</div>
          </div>
        </div>
      ))}
    </div>
    {ACCENT_LINE}
  </Slide>
);

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
  Slide1, Slide2, Slide3, Slide4, Slide5, Slide7, Slide6, Slide8,
];
export const SLIDE_LABELS = [
  "Титул", "Оглавление", "Путь → КРОК",
  "Задачи", "Программа", "9 месяцев", "Развитие", "Q&A",
];