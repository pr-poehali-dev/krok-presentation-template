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
        className="text-[10px] font-semibold tracking-[0.45em] uppercase mb-4 fade-up block"
        style={{ color: "#1DE3A2" }} />
      <h1 className="font-black leading-[1.02] mb-5 fade-up-d1" style={{ fontSize: "clamp(28px, 4vw, 52px)", color: "#fff" }}>
        <EditableText value={c.s1.title1} onChange={(v) => upd({ ...c, s1: { ...c.s1, title1: v } })} style={{ color: "#fff" }} />
        <br />
        <EditableText value={c.s1.title2} onChange={(v) => upd({ ...c, s1: { ...c.s1, title2: v } })} style={{ color: "#1DE3A2" }} />
      </h1>
      <EditableText value={c.s1.subtitle} onChange={(v) => upd({ ...c, s1: { ...c.s1, subtitle: v } })}
        as="p" className="text-lg font-semibold fade-up-d2 block"
        style={{ color: "rgba(255,255,255,0.7)" }} />
      <div className="mt-8 flex items-center gap-4 fade-up-d3">
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
    <div className="absolute right-16 top-1/2 -translate-y-1/2 opacity-60">
      <StickFigureNewbie />
    </div>
    <div className="absolute top-9 left-10 right-10">
      <EditableText value={c.s3.label} onChange={(v) => upd({ ...c, s3: { ...c.s3, label: v } })}
        className="text-[9px] font-semibold tracking-[0.4em] uppercase mb-1.5 fade-up block"
        style={{ color: "#1DE3A2" }} />
      <EditableText value={c.s3.heading} onChange={(v) => upd({ ...c, s3: { ...c.s3, heading: v } })}
        as="h2" className="text-white font-black fade-up-d1 block"
        style={{ fontSize: "clamp(22px, 3vw, 36px)", color: "#fff" }} />
      <div className="mt-2 w-12 h-[2px] fade-up-d2" style={{ background: "#1DE3A2" }} />
    </div>
    <div className="absolute left-10 top-[130px] bottom-10 max-w-[58%] flex flex-col justify-between">
      <EditableText value={c.s3.body1} onChange={(v) => upd({ ...c, s3: { ...c.s3, body1: v } })}
        as="p" multiline className="text-sm leading-relaxed fade-up-d2 block"
        style={{ color: "rgba(255,255,255,0.72)" }} />
      <EditableText value={c.s3.body2} onChange={(v) => upd({ ...c, s3: { ...c.s3, body2: v } })}
        as="p" multiline className="text-sm leading-relaxed mt-4 fade-up-d3 block"
        style={{ color: "rgba(255,255,255,0.5)" }} />
      <div className="mt-5 flex gap-2 flex-wrap fade-up-d3">
        {([
          [c.s3.tag1, (v: string) => upd({ ...c, s3: { ...c.s3, tag1: v } })],
          [c.s3.tag2, (v: string) => upd({ ...c, s3: { ...c.s3, tag2: v } })],
          [c.s3.tag3, (v: string) => upd({ ...c, s3: { ...c.s3, tag3: v } })],
        ] as [string, (v: string) => void][]).map(([val, fn], i) => (
          <span key={i} className="px-3 py-1 rounded-full text-[11px] font-semibold inline-flex"
            style={{ background: "rgba(29,227,162,0.12)", border: "1px solid rgba(29,227,162,0.25)", color: "#1DE3A2" }}>
            <EditableText value={val} onChange={fn} style={{ color: "#1DE3A2" }} />
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
    <div className="absolute top-9 left-10 right-[42%]">
      <EditableText value={c.s4.label} onChange={(v) => upd({ ...c, s4: { ...c.s4, label: v } })}
        className="text-[9px] font-semibold tracking-[0.4em] uppercase mb-1.5 fade-up block"
        style={{ color: "#1DE3A2" }} />
      <EditableText value={c.s4.heading} onChange={(v) => upd({ ...c, s4: { ...c.s4, heading: v } })}
        as="h2" className="text-white font-black fade-up-d1 block"
        style={{ fontSize: "clamp(22px, 3vw, 36px)", color: "#fff" }} />
      <div className="mt-2 w-12 h-[2px] fade-up-d2" style={{ background: "#1DE3A2" }} />
    </div>
    <div className="absolute left-10 top-[130px] bottom-10 max-w-[52%] flex flex-col justify-between">
      <EditableText value={c.s4.body} onChange={(v) => upd({ ...c, s4: { ...c.s4, body: v } })}
        as="p" multiline className="text-sm leading-relaxed fade-up-d2 block"
        style={{ color: "rgba(255,255,255,0.68)" }} />
      <div className="mt-5 flex gap-2 flex-wrap fade-up-d3">
        {([
          [c.s4.tag1, (v: string) => upd({ ...c, s4: { ...c.s4, tag1: v } })],
          [c.s4.tag2, (v: string) => upd({ ...c, s4: { ...c.s4, tag2: v } })],
          [c.s4.tag3, (v: string) => upd({ ...c, s4: { ...c.s4, tag3: v } })],
        ] as [string, (v: string) => void][]).map(([val, fn], i) => (
          <span key={i} className="px-3 py-1 rounded-full text-[11px] font-semibold inline-flex"
            style={{ background: "rgba(29,227,162,0.12)", border: "1px solid rgba(29,227,162,0.25)", color: "#1DE3A2" }}>
            <EditableText value={val} onChange={fn} style={{ color: "#1DE3A2" }} />
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
    <div className="absolute top-9 left-10 right-10">
      <EditableText value={c.s5.label} onChange={(v) => upd({ ...c, s5: { ...c.s5, label: v } })}
        className="text-[9px] font-semibold tracking-[0.4em] uppercase mb-1.5 fade-up block"
        style={{ color: "#1DE3A2" }} />
      <EditableText value={c.s5.heading} onChange={(v) => upd({ ...c, s5: { ...c.s5, heading: v } })}
        as="h2" className="text-white font-black fade-up-d1 block"
        style={{ fontSize: "clamp(22px, 3vw, 36px)", color: "#fff" }} />
      <div className="mt-2 w-12 h-[2px] fade-up-d2" style={{ background: "#1DE3A2" }} />
    </div>
    <div className="absolute left-10 right-10 top-[130px] bottom-10 grid grid-cols-3 gap-5">
      {[
        { body: c.s5.body1, icon: "Anchor",     onChange: (v: string) => upd({ ...c, s5: { ...c.s5, body1: v } }) },
        { body: c.s5.body2, icon: "Users",       onChange: (v: string) => upd({ ...c, s5: { ...c.s5, body2: v } }) },
        { body: c.s5.body3, icon: "TrendingUp",  onChange: (v: string) => upd({ ...c, s5: { ...c.s5, body3: v } }) },
      ].map(({ body, icon, onChange }, i) => (
        <div key={i} className="rounded-2xl p-5 border flex flex-col gap-3 fade-up"
          style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)", animationDelay: `${0.1 * i}s` }}>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: "rgba(29,227,162,0.12)" }}>
            <Icon name={icon} size={16} style={{ color: "#1DE3A2" }} />
          </div>
          <EditableText value={body} onChange={onChange}
            as="p" multiline className="text-sm leading-relaxed block flex-1"
            style={{ color: "rgba(255,255,255,0.65)" }} />
        </div>
      ))}
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
    <div className="absolute top-9 left-10 right-10">
      <EditableText value={c.s6.label} onChange={(v) => upd({ ...c, s6: { ...c.s6, label: v } })}
        className="text-[9px] font-semibold tracking-[0.4em] uppercase mb-1.5 fade-up block"
        style={{ color: "#1DE3A2" }} />
      <EditableText value={c.s6.heading} onChange={(v) => upd({ ...c, s6: { ...c.s6, heading: v } })}
        as="h2" className="text-white font-black fade-up-d1 block"
        style={{ fontSize: "clamp(22px, 3vw, 36px)", color: "#fff" }} />
      <div className="mt-2 w-12 h-[2px] fade-up-d2" style={{ background: "#1DE3A2" }} />
    </div>
    <div className="absolute left-10 right-10 top-[130px] bottom-10 grid grid-cols-2 gap-3">
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
      <div className="absolute top-9 left-10 right-10">
        <EditableText value={c.s7.label} onChange={(v) => upd({ ...c, s7: { ...c.s7, label: v } })}
          className="text-[9px] font-semibold tracking-[0.4em] uppercase mb-1.5 fade-up block"
          style={{ color: "#1DE3A2" }} />
        <EditableText value={c.s7.heading} onChange={(v) => upd({ ...c, s7: { ...c.s7, heading: v } })}
          as="h2" className="text-white font-black fade-up-d1 block"
          style={{ fontSize: "clamp(22px, 3vw, 36px)", color: "#fff" }} />
        <div className="mt-2 w-12 h-[2px] fade-up-d2" style={{ background: "#1DE3A2" }} />
      </div>
      <div className="absolute left-10 right-10 top-[130px] bottom-10 flex items-end gap-6 pb-8">
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
    <div className="absolute top-9 left-10 right-10">
      <EditableText value={c.s8.label} onChange={(v) => upd({ ...c, s8: { ...c.s8, label: v } })}
        className="text-[9px] font-semibold tracking-[0.4em] uppercase mb-1.5 fade-up block"
        style={{ color: "#1DE3A2" }} />
      <EditableText value={c.s8.heading} onChange={(v) => upd({ ...c, s8: { ...c.s8, heading: v } })}
        as="h2" className="text-white font-black fade-up-d1 block"
        style={{ fontSize: "clamp(22px, 3vw, 36px)", color: "#fff" }} />
      <div className="mt-2 w-12 h-[2px] fade-up-d2" style={{ background: "#1DE3A2" }} />
    </div>
    <div className="absolute left-10 right-10 top-[130px] bottom-10 grid grid-cols-2 gap-5">
      <div className="flex flex-col gap-4">
        <div className="rounded-2xl p-5 border fade-up-d2"
          style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}>
          <div className="flex items-center gap-2 mb-2">
            <Icon name="BookOpen" size={14} style={{ color: "#1DE3A2" }} />
            <span className="text-[10px] font-semibold tracking-widest uppercase" style={{ color: "#1DE3A2" }}>Программа</span>
          </div>
          <EditableText value={c.s8.body1} onChange={(v) => upd({ ...c, s8: { ...c.s8, body1: v } })}
            as="p" multiline className="text-sm leading-relaxed block"
            style={{ color: "rgba(255,255,255,0.65)" }} />
        </div>
        <div className="rounded-2xl p-5 border fade-up-d3"
          style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}>
          <div className="flex items-center gap-2 mb-2">
            <Icon name="Repeat" size={14} style={{ color: "#1DE3A2" }} />
            <span className="text-[10px] font-semibold tracking-widest uppercase" style={{ color: "#1DE3A2" }}>Ценность</span>
          </div>
          <EditableText value={c.s8.body2} onChange={(v) => upd({ ...c, s8: { ...c.s8, body2: v } })}
            as="p" multiline className="text-sm leading-relaxed block"
            style={{ color: "rgba(255,255,255,0.65)" }} />
        </div>
      </div>
      <div className="rounded-2xl p-5 border fade-up-d2 flex flex-col"
        style={{ background: "rgba(29,227,162,0.07)", borderColor: "rgba(29,227,162,0.25)", borderTopWidth: "3px", borderTopColor: "#1DE3A2" }}>
        <div className="flex items-center gap-2 mb-3">
          <Icon name="Lightbulb" size={15} style={{ color: "#1DE3A2" }} />
          <span className="text-[10px] font-semibold tracking-widest uppercase" style={{ color: "#1DE3A2" }}>Моя инициатива</span>
        </div>
        <EditableText value={c.s8.initiative} onChange={(v) => upd({ ...c, s8: { ...c.s8, initiative: v } })}
          as="p" multiline className="text-sm leading-relaxed block flex-1"
          style={{ color: "rgba(255,255,255,0.75)" }} />
        <div className="mt-4 flex items-center gap-2 text-xs font-semibold" style={{ color: "#1DE3A2" }}>
          <Icon name="ArrowRight" size={12} />
          Раздел «Коммуникация с заказчиком»
        </div>
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
    <div className="absolute top-9 left-10 right-10">
      <EditableText value={c.s9.label} onChange={(v) => upd({ ...c, s9: { ...c.s9, label: v } })}
        className="text-[9px] font-semibold tracking-[0.4em] uppercase mb-1.5 fade-up block"
        style={{ color: "#1DE3A2" }} />
      <EditableText value={c.s9.heading} onChange={(v) => upd({ ...c, s9: { ...c.s9, heading: v } })}
        as="h2" className="text-white font-black fade-up-d1 block"
        style={{ fontSize: "clamp(22px, 3vw, 36px)", color: "#fff" }} />
      <div className="mt-2 w-12 h-[2px] fade-up-d2" style={{ background: "#1DE3A2" }} />
    </div>
    <div className="absolute left-10 right-10 top-[130px] bottom-10 grid grid-cols-2 gap-3">
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
    <div className="absolute right-16 top-1/2 -translate-y-1/2 opacity-75">
      <StickFigureExpert />
    </div>
    <div className="absolute top-9 left-10 right-10">
      <EditableText value={c.s10.label} onChange={(v) => upd({ ...c, s10: { ...c.s10, label: v } })}
        className="text-[9px] font-semibold tracking-[0.4em] uppercase mb-1.5 fade-up block"
        style={{ color: "#1DE3A2" }} />
      <EditableText value={c.s10.heading} onChange={(v) => upd({ ...c, s10: { ...c.s10, heading: v } })}
        as="h2" className="text-white font-black fade-up-d1 block"
        style={{ fontSize: "clamp(22px, 3vw, 36px)", color: "#fff" }} />
      <div className="mt-2 w-12 h-[2px] fade-up-d2" style={{ background: "#1DE3A2" }} />
    </div>
    <div className="absolute left-10 top-[130px] bottom-10 max-w-[56%] flex flex-col justify-between">
      <EditableText value={c.s10.body1} onChange={(v) => upd({ ...c, s10: { ...c.s10, body1: v } })}
        as="p" multiline className="text-sm leading-relaxed fade-up-d2 block"
        style={{ color: "rgba(255,255,255,0.72)" }} />
      <EditableText value={c.s10.body2} onChange={(v) => upd({ ...c, s10: { ...c.s10, body2: v } })}
        as="p" multiline className="text-sm leading-relaxed mt-4 fade-up-d3 block"
        style={{ color: "rgba(255,255,255,0.5)" }} />
      <div className="mt-6 flex flex-col gap-2.5 fade-up-d3">
        {c.s10.stats.map(([val, label], i) => (
          <div key={i} className="flex items-center gap-3 rounded-xl px-4 py-2.5 border"
            style={{ background: "rgba(29,227,162,0.07)", borderColor: "rgba(29,227,162,0.2)" }}>
            <EditableText value={val}
              onChange={(v) => { const stats = [...c.s10.stats] as [string, string][]; stats[i] = [v, label]; upd({ ...c, s10: { ...c.s10, stats } }); }}
              className="text-sm font-black block shrink-0" style={{ color: "#1DE3A2" }} />
            <EditableText value={label}
              onChange={(v) => { const stats = [...c.s10.stats] as [string, string][]; stats[i] = [val, v]; upd({ ...c, s10: { ...c.s10, stats } }); }}
              className="text-xs block" style={{ color: "rgba(255,255,255,0.5)" }} />
          </div>
        ))}
      </div>
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
