// ─── Slide1–Slide11 components ────────────────────────────────────────────────

import Icon from "@/components/ui/icon";
import type { SlideProps } from "./slideTypes";
import {
  DNADecor, CircuitDecor, GlowOrb,
  LogoBadge, Slide, EditableText,
  StickFigureNewbie, StickFigureExpert,
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
      <h1 className="font-black leading-[1.02] mb-3 fade-up-d1" style={{ fontSize: "clamp(28px, 4vw, 52px)", color: "#fff" }}>
        <EditableText value={c.s1.title1} onChange={(v) => upd({ ...c, s1: { ...c.s1, title1: v } })} style={{ color: "#fff" }} />
        <br />
        <EditableText value={c.s1.title2} onChange={(v) => upd({ ...c, s1: { ...c.s1, title2: v } })} style={{ color: "#1DE3A2" }} />
      </h1>
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
        <div className="text-3xl font-black leading-tight text-white fade-up-d1">
          <EditableText value={c.s2.heading1} onChange={(v) => upd({ ...c, s2: { ...c.s2, heading1: v } })} style={{ color: "#fff" }} />
          <br />
          <EditableText value={c.s2.heading2} onChange={(v) => upd({ ...c, s2: { ...c.s2, heading2: v } })} style={{ color: "#fff" }} />
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

// ─── Slide 3: Path to KROK — school & university ──────────────────────────────
export const Slide3 = ({ dir, animKey, c, upd }: SlideProps) => (
  <Slide dir={dir} animKey={animKey}>
    <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 80% at 85% 50%, #0F2D22 0%, #0A1A14 55%, #060F0B 100%)" }} />
    <GlowOrb size={350} x="85%" y="50%" color="#1DE3A2" blur={120} />
    <LogoBadge />
    <div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-60">
      <StickFigureNewbie />
    </div>
    <div className="absolute top-7 left-10 right-10">
      <EditableText value={c.s3.label} onChange={(v) => upd({ ...c, s3: { ...c.s3, label: v } })}
        className="text-[9px] font-semibold tracking-[0.4em] uppercase mb-1 fade-up block"
        style={{ color: "#1DE3A2" }} />
      <EditableText value={c.s3.heading} onChange={(v) => upd({ ...c, s3: { ...c.s3, heading: v } })}
        as="h2" className="text-white font-black fade-up-d1 block"
        style={{ fontSize: "clamp(20px, 2.8vw, 32px)", color: "#fff" }} />
      <div className="mt-1.5 w-12 h-[2px] fade-up-d2" style={{ background: "#1DE3A2" }} />
    </div>
    <div className="absolute left-10 top-[110px] bottom-8 max-w-[60%] flex flex-col gap-2.5">
      {[
        { icon: "GraduationCap", text: "Мат. школа — отрицала «технарский» путь, мечтала о востоковедении" },
        { icon: "BookOpen",      text: "11 класс — сменила предметы ЕГЭ, поступила в Московский Политех" },
        { icon: "Database",      text: "Направление «Большие и открытые данные» — прямое попадание в BigData" },
        { icon: "Zap",           text: "Со 2-го курса захотела устроиться на стажировку" },
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-3 rounded-xl px-4 py-2.5 border fade-up"
          style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)", animationDelay: `${0.08 * i}s` }}>
          <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
            style={{ background: "rgba(29,227,162,0.12)" }}>
            <Icon name={item.icon} size={13} style={{ color: "#1DE3A2" }} />
          </div>
          <span className="text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>{item.text}</span>
        </div>
      ))}
      <div className="flex gap-2 flex-wrap mt-1">
        {[c.s3.tag1, c.s3.tag2, c.s3.tag3].map((tag, i) => (
          <span key={i} className="px-3 py-1 rounded-full text-[11px] font-semibold"
            style={{ background: "rgba(29,227,162,0.12)", border: "1px solid rgba(29,227,162,0.25)", color: "#1DE3A2" }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
    {ACCENT_LINE}
  </Slide>
);

// ─── Slide 4: Getting the offer ───────────────────────────────────────────────
export const Slide4 = ({ dir, animKey, c, upd }: SlideProps) => (
  <Slide dir={dir} animKey={animKey}>
    <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 90% at 20% 60%, #0A1F16 0%, #07120E 55%, #040A08 100%)" }} />
    <GlowOrb size={400} x="20%" y="60%" color="#1DE3A2" blur={130} />
    <CircuitDecor />
    <LogoBadge />
    <div className="absolute right-10 top-16 bottom-10 w-[36%] flex flex-col justify-around">
      {[
        { icon: "School",     label: "Летняя школа",            sub: "Узнала через вуз, не надеялась" },
        { icon: "FileCheck",  label: "Тест → Кейс → Ассессмент", sub: "Прошла все три этапа" },
        { icon: "Car",        label: "Собеседование в машине",   sub: "По пути на Валдай" },
        { icon: "Radio",      label: "Оффер на вышке",           sub: "300 м над землёй, глубоко в лесу" },
      ].map((step, i) => (
        <div key={i} className="flex items-start gap-3 fade-up" style={{ animationDelay: `${0.1 * i}s` }}>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
            style={{ background: "rgba(29,227,162,0.15)", border: "1px solid rgba(29,227,162,0.3)" }}>
            <Icon name={step.icon} size={14} style={{ color: "#1DE3A2" }} />
          </div>
          <div>
            <div className="text-sm font-bold text-white">{step.label}</div>
            <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>{step.sub}</div>
          </div>
        </div>
      ))}
    </div>
    <div className="absolute top-7 left-10 right-[42%]">
      <EditableText value={c.s4.label} onChange={(v) => upd({ ...c, s4: { ...c.s4, label: v } })}
        className="text-[9px] font-semibold tracking-[0.4em] uppercase mb-1 fade-up block"
        style={{ color: "#1DE3A2" }} />
      <EditableText value={c.s4.heading} onChange={(v) => upd({ ...c, s4: { ...c.s4, heading: v } })}
        as="h2" className="text-white font-black fade-up-d1 block"
        style={{ fontSize: "clamp(20px, 2.8vw, 32px)", color: "#fff" }} />
      <div className="mt-1.5 w-12 h-[2px] fade-up-d2" style={{ background: "#1DE3A2" }} />
    </div>
    <div className="absolute left-10 top-[108px] bottom-8 max-w-[54%] flex flex-col gap-2.5">
      {[
        { icon: "School",    text: "Узнала о летней школе через вуз — совершенно случайно" },
        { icon: "CheckCircle", text: "Прошла тестирование, кейс и ассессмент" },
        { icon: "Car",       text: "Собеседование с ресурс-менеджером Леной прямо в машине" },
        { icon: "Radio",     text: "Оффер получила на вышке — 300 м над землёй, глубоко в лесу на Валдае" },
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-3 rounded-xl px-4 py-2.5 border fade-up"
          style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)", animationDelay: `${0.09 * i}s` }}>
          <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
            style={{ background: "rgba(29,227,162,0.12)" }}>
            <Icon name={item.icon} size={13} style={{ color: "#1DE3A2" }} />
          </div>
          <span className="text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>{item.text}</span>
        </div>
      ))}
      <div className="flex gap-2 flex-wrap mt-1">
        {[c.s4.tag1, c.s4.tag2, c.s4.tag3].map((tag, i) => (
          <span key={i} className="px-3 py-1 rounded-full text-[11px] font-semibold"
            style={{ background: "rgba(29,227,162,0.12)", border: "1px solid rgba(29,227,162,0.25)", color: "#1DE3A2" }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
    {ACCENT_LINE}
  </Slide>
);

// ─── Slide 5: Project experience — intro ──────────────────────────────────────
export const Slide5 = ({ dir, animKey, c, upd }: SlideProps) => (
  <Slide dir={dir} animKey={animKey}>
    <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 20%, #0F2D22 0%, #0A1A14 55%, #060F0B 100%)" }} />
    <GlowOrb size={400} x="50%" y="10%" color="#1DE3A2" blur={120} />
    <LogoBadge />
    <div className="absolute top-7 left-10 right-10">
      <EditableText value={c.s5.label} onChange={(v) => upd({ ...c, s5: { ...c.s5, label: v } })}
        className="text-[9px] font-semibold tracking-[0.4em] uppercase mb-1 fade-up block"
        style={{ color: "#1DE3A2" }} />
      <EditableText value={c.s5.heading} onChange={(v) => upd({ ...c, s5: { ...c.s5, heading: v } })}
        as="h2" className="text-white font-black fade-up-d1 block"
        style={{ fontSize: "clamp(20px, 2.8vw, 32px)", color: "#fff" }} />
      <div className="mt-1.5 w-12 h-[2px] fade-up-d2" style={{ background: "#1DE3A2" }} />
    </div>
    <div className="absolute left-10 right-10 top-[108px] bottom-8 grid grid-cols-2 gap-3">
      {/* Left col — timeline */}
      <div className="flex flex-col gap-2.5">
        {[
          { icon: "UserCheck", text: "Роль BI-аналитика на проекте Мосэнерго" },
          { icon: "Clock",     text: "Первые 3 дня — без задач, погружение в программу" },
          { icon: "Users",     text: "Первая задача: поделили с Егором анализ отчётов S2T" },
          { icon: "Anchor",    text: "Погружение в Мосэнерго казалось «чёрной дырой»" },
          { icon: "TrendingUp",text: "Быстро втянулась — задач становилось всё больше" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3 rounded-xl px-3 py-2 border fade-up"
            style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)", animationDelay: `${0.07 * i}s` }}>
            <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: "rgba(29,227,162,0.12)" }}>
              <Icon name={item.icon} size={12} style={{ color: "#1DE3A2" }} />
            </div>
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.72)" }}>{item.text}</span>
          </div>
        ))}
      </div>
      {/* Right col — key facts */}
      <div className="flex flex-col gap-2.5">
        <div className="rounded-xl px-4 py-3 border fade-up-d2"
          style={{ background: "rgba(29,227,162,0.07)", borderColor: "rgba(29,227,162,0.2)", borderLeftWidth: "3px", borderLeftColor: "#1DE3A2" }}>
          <div className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: "#1DE3A2" }}>Проект</div>
          <div className="text-sm font-bold text-white">Мосэнерго</div>
          <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>Энергетика / BigData</div>
        </div>
        <div className="rounded-xl px-4 py-3 border fade-up-d2"
          style={{ background: "rgba(29,227,162,0.07)", borderColor: "rgba(29,227,162,0.2)", borderLeftWidth: "3px", borderLeftColor: "#1DE3A2" }}>
          <div className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: "#1DE3A2" }}>Тимлид</div>
          <div className="text-sm font-bold text-white">Соня Лебедева</div>
          <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>Группа отчётности</div>
        </div>
        <div className="rounded-xl px-4 py-3 border fade-up-d2"
          style={{ background: "rgba(29,227,162,0.07)", borderColor: "rgba(29,227,162,0.2)", borderLeftWidth: "3px", borderLeftColor: "#1DE3A2" }}>
          <div className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: "#1DE3A2" }}>Первый коллега</div>
          <div className="text-sm font-bold text-white">Егор</div>
          <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>Разделили первую задачу</div>
        </div>
      </div>
    </div>
    {ACCENT_LINE}
  </Slide>
);

// ─── Slide 6: Task list ───────────────────────────────────────────────────────
export const Slide6 = ({ dir, animKey, c, upd }: SlideProps) => (
  <Slide dir={dir} animKey={animKey}>
    <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 70% at 90% 20%, #0F2D22 0%, #0A1A14 60%, #060F0B 100%)" }} />
    <GlowOrb size={350} x="90%" y="15%" color="#1DE3A2" blur={120} />
    <CircuitDecor />
    <LogoBadge />
    <div className="absolute top-7 left-10 right-10">
      <EditableText value={c.s6.label} onChange={(v) => upd({ ...c, s6: { ...c.s6, label: v } })}
        className="text-[9px] font-semibold tracking-[0.4em] uppercase mb-1.5 fade-up block"
        style={{ color: "#1DE3A2" }} />
      <EditableText value={c.s6.heading} onChange={(v) => upd({ ...c, s6: { ...c.s6, heading: v } })}
        as="h2" className="text-white font-black fade-up-d1 block"
        style={{ fontSize: "clamp(22px, 3vw, 36px)", color: "#fff" }} />
      <div className="mt-1.5 w-12 h-[2px] fade-up-d2" style={{ background: "#1DE3A2" }} />
    </div>
    <div className="absolute left-10 right-10 top-[108px] bottom-8 grid grid-cols-2 gap-2.5">
      {c.s6.tasks.map((task, i) => (
        <div key={i} className="rounded-2xl px-5 py-4 border fade-up flex items-start gap-3"
          style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)", animationDelay: `${0.07 * i}s` }}>
          <div className="text-xl font-black shrink-0 w-7 pt-0.5" style={{ color: "#1DE3A2" }}>
            {String(i + 1).padStart(2, "0")}
          </div>
          <div className="flex-1">
            <EditableText value={task.title}
              onChange={(v) => { const tasks = [...c.s6.tasks]; tasks[i] = { ...tasks[i], title: v }; upd({ ...c, s6: { ...c.s6, tasks } }); }}
              className="text-white font-bold text-sm block" style={{ color: "#fff" }} />
            <EditableText value={task.desc}
              onChange={(v) => { const tasks = [...c.s6.tasks]; tasks[i] = { ...tasks[i], desc: v }; upd({ ...c, s6: { ...c.s6, tasks } }); }}
              className="text-xs mt-0.5 block" style={{ color: "rgba(255,255,255,0.4)" }} />
          </div>
        </div>
      ))}
    </div>
    {ACCENT_LINE}
  </Slide>
);

// ─── Slide 7: Bar chart ───────────────────────────────────────────────────────
export const Slide7 = ({ dir, animKey, c, upd }: SlideProps) => {
  const max = Math.max(...c.s7.bars.map(([, n]) => n as number));
  return (
    <Slide dir={dir} animKey={animKey}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 80% at 20% 60%, #0F2D22 0%, #0A1A14 55%, #060F0B 100%)" }} />
      <GlowOrb size={400} x="25%" y="60%" color="#1DE3A2" blur={130} />
      <LogoBadge />
      <div className="absolute top-7 left-10 right-10">
        <EditableText value={c.s7.label} onChange={(v) => upd({ ...c, s7: { ...c.s7, label: v } })}
          className="text-[9px] font-semibold tracking-[0.4em] uppercase mb-1 fade-up block"
          style={{ color: "#1DE3A2" }} />
        <EditableText value={c.s7.heading} onChange={(v) => upd({ ...c, s7: { ...c.s7, heading: v } })}
          as="h2" className="text-white font-black fade-up-d1 block"
          style={{ fontSize: "clamp(20px, 2.8vw, 32px)", color: "#fff" }} />
        <div className="mt-1.5 w-12 h-[2px] fade-up-d2" style={{ background: "#1DE3A2" }} />
      </div>
      <div className="absolute left-10 right-10 top-[108px] bottom-8 flex items-end gap-6 pb-6">
        {c.s7.bars.map(([label, value, color], i) => {
          const pct = Math.round(((value as number) / max) * 100);
          return (
            <div key={i} className="flex-1 flex flex-col items-center gap-2 fade-up"
              style={{ animationDelay: `${0.08 * i}s` }}>
              <div className="text-sm font-black" style={{ color: color as string }}>{value}</div>
              <div className="w-full rounded-t-xl relative overflow-hidden"
                style={{ height: `${pct * 1.6}px`, background: `${color}22`, border: `1px solid ${color}44` }}>
                <div className="absolute bottom-0 left-0 right-0 rounded-t-xl"
                  style={{ height: "100%", background: `linear-gradient(to top, ${color}99, ${color}33)` }} />
              </div>
              <EditableText value={label as string}
                onChange={(v) => { const bars = [...c.s7.bars] as [string, number, string][]; bars[i] = [v, value as number, color as string]; upd({ ...c, s7: { ...c.s7, bars } }); }}
                className="text-[10px] text-center font-semibold block w-full"
                style={{ color: "rgba(255,255,255,0.5)" }} />
            </div>
          );
        })}
      </div>
      {ACCENT_LINE}
    </Slide>
  );
};

// ─── Slide 8: Internship program + initiative ─────────────────────────────────
export const Slide8 = ({ dir, animKey, c, upd }: SlideProps) => (
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
      {/* Left: программа — чеклист */}
      <div className="flex flex-col gap-2.5">
        <div className="text-[9px] font-semibold tracking-widest uppercase mb-0.5" style={{ color: "#1DE3A2" }}>Что понравилось</div>
        {[
          "Насыщенная и разнообразная программа",
          "Где-то легко, где-то сложно — хороший баланс",
          "Программа развивается и не стоит на месте",
          "Стажёр получает базу знаний для дальнейшего роста",
        ].map((text, i) => (
          <div key={i} className="flex items-start gap-2.5 rounded-xl px-3 py-2 border fade-up"
            style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)", animationDelay: `${0.07 * i}s` }}>
            <Icon name="CheckCircle" size={13} className="mt-0.5 shrink-0" style={{ color: "#1DE3A2" }} />
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>{text}</span>
          </div>
        ))}
      </div>
      {/* Right: инициатива */}
      <div className="rounded-2xl p-4 border fade-up-d2 flex flex-col gap-3"
        style={{ background: "rgba(29,227,162,0.07)", borderColor: "rgba(29,227,162,0.25)", borderTopWidth: "3px", borderTopColor: "#1DE3A2" }}>
        <div className="flex items-center gap-2">
          <Icon name="Lightbulb" size={14} style={{ color: "#1DE3A2" }} />
          <span className="text-[10px] font-semibold tracking-widest uppercase" style={{ color: "#1DE3A2" }}>Моя инициатива</span>
        </div>
        <div className="text-sm font-bold text-white">Расширить раздел «Коммуникация с заказчиком»</div>
        {[
          { icon: "MessageSquare", text: "Встреча 1: стажёр собирает требования" },
          { icon: "Layout",        text: "Дорабатывает дашборд самостоятельно" },
          { icon: "RotateCcw",     text: "Встреча 2: показывает результат, получает обратную связь" },
          { icon: "Star",          text: "Делает выводы — что получилось, что нет" },
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

// ─── Slide 9: Development directions ─────────────────────────────────────────
export const Slide9 = ({ dir, animKey, c, upd }: SlideProps) => (
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

// ─── Slide 10: Who I became ────────────────────────────────────────────────────
export const Slide10 = ({ dir, animKey, c, upd }: SlideProps) => (
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
        { icon: "Shield",      label: "Уверенность",    text: "Намного увереннее на проекте, чем в первый день" },
        { icon: "BarChart2",   label: "Задачи",         text: "Спектр самостоятельных задач значительно вырос" },
        { icon: "Database",    label: "Знания",         text: "Большой объём предметных и технических знаний" },
        { icon: "Zap",         label: "Скорость",       text: "Быстрее нахожу решения, меньше трачу времени" },
        { icon: "MessageCircle", label: "Коммуникация", text: "Прихожу не с «что делать», а с гипотезой и вопросом" },
        { icon: "Star",        label: "Опыт",           text: "Реальный проектный опыт с первого дня стажировки" },
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

// ─── Slide 11: Thank you ──────────────────────────────────────────────────────
export const Slide11 = ({ dir, animKey, c, upd }: SlideProps) => (
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
      <h2 className="font-black leading-[1.0] mb-4 fade-up-d1" style={{ fontSize: "clamp(38px, 5.5vw, 64px)", color: "#fff" }}>
        <EditableText value={c.s11.heading1} onChange={(v) => upd({ ...c, s11: { ...c.s11, heading1: v } })} style={{ color: "#fff" }} />
        <br />
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
  Slide1, Slide2, Slide3, Slide4, Slide5, Slide6,
  Slide7, Slide8, Slide9, Slide10, Slide11,
];
export const SLIDE_LABELS = [
  "Титул", "Оглавление", "Путь → КРОК", "Оффер в лесу",
  "Мосэнерго", "Задачи", "Статистика",
  "Программа", "Развитие", "Год спустя", "Финал",
];