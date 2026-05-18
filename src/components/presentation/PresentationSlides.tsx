// ─── Slide1–Slide6 components ─────────────────────────────────────────────────

import Icon from "@/components/ui/icon";
import type { SlideProps } from "./slideTypes";
import {
  DNADecor, CircuitDecor, GlowOrb,
  LogoBadge, Slide, EditableText,
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
      <div className="flex-1 grid grid-cols-2 gap-3">
        {c.s2.items.slice(0, 4).map((item, i) => (
          <div key={i} className="rounded-2xl px-5 py-4 border fade-up"
            style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.09)", animationDelay: `${0.07 * i}s` }}>
            <div className="text-lg font-black mb-1" style={{ color: "#1DE3A2" }}>0{i + 1}</div>
            <EditableText value={item.title}
              onChange={(v) => { const items = [...c.s2.items]; items[i] = { ...items[i], title: v }; upd({ ...c, s2: { ...c.s2, items } }); }}
              className="text-white font-bold text-sm leading-tight block" style={{ color: "#fff" }} />
            <EditableText value={item.desc}
              onChange={(v) => { const items = [...c.s2.items]; items[i] = { ...items[i], desc: v }; upd({ ...c, s2: { ...c.s2, items } }); }}
              className="text-xs mt-0.5 block" style={{ color: "rgba(255,255,255,0.4)" }} />
          </div>
        ))}
      </div>
      <div className="absolute bottom-8 left-[260px] right-10 rounded-2xl px-5 py-3 border flex items-center gap-4 fade-up-d3"
        style={{ background: "rgba(29,227,162,0.07)", borderColor: "rgba(29,227,162,0.2)" }}>
        <span className="text-lg font-black" style={{ color: "#1DE3A2" }}>05</span>
        <div>
          <EditableText value={c.s2.items[4].title}
            onChange={(v) => { const items = [...c.s2.items]; items[4] = { ...items[4], title: v }; upd({ ...c, s2: { ...c.s2, items } }); }}
            className="text-white font-bold text-sm block" style={{ color: "#fff" }} />
          <EditableText value={c.s2.items[4].desc}
            onChange={(v) => { const items = [...c.s2.items]; items[4] = { ...items[4], desc: v }; upd({ ...c, s2: { ...c.s2, items } }); }}
            className="text-xs block" style={{ color: "rgba(255,255,255,0.4)" }} />
        </div>
      </div>
    </div>
    {ACCENT_LINE}
  </Slide>
);

// ─── Slide 3: Content ─────────────────────────────────────────────────────────
const STACK_ICONS = ["Database", "Server", "BarChart3", "Shield"];

export const Slide3 = ({ dir, animKey, c, upd }: SlideProps) => (
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
              <EditableText value={v}
                onChange={(nv) => { const stats = [...c.s3.stats] as [string, string][]; stats[i] = [nv, l]; upd({ ...c, s3: { ...c.s3, stats } }); }}
                className="text-xl font-black block" style={{ color: "#1DE3A2" }} />
              <EditableText value={l}
                onChange={(nv) => { const stats = [...c.s3.stats] as [string, string][]; stats[i] = [v, nv]; upd({ ...c, s3: { ...c.s3, stats } }); }}
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
            <EditableText value={text}
              onChange={(v) => { const stack = [...c.s3.stack]; stack[i] = v; upd({ ...c, s3: { ...c.s3, stack } }); }}
              className="text-xs block flex-1" style={{ color: "rgba(255,255,255,0.72)" }} />
          </div>
        ))}
      </div>
    </div>
    {ACCENT_LINE}
  </Slide>
);

// ─── Slide 4: Image + Text ────────────────────────────────────────────────────
export const Slide4 = ({ dir, animKey, c, upd }: SlideProps) => (
  <Slide dir={dir} animKey={animKey}>
    <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 80% at 20% 60%, #0F2D22 0%, #0A1A14 55%, #060F0B 100%)" }} />
    <GlowOrb size={400} x="25%" y="60%" color="#1DE3A2" blur={130} />
    <LogoBadge />
    <div className="absolute right-0 top-0 bottom-0 w-[45%] overflow-hidden" style={{ background: "linear-gradient(135deg, #0F2D22 0%, #071410 100%)" }}>
      <svg viewBox="0 0 400 450" className="absolute inset-0 w-full h-full" style={{ opacity: 0.7 }}>
        {Array.from({ length: 18 }).map((_, i) => {
          const startX = 200 + (i - 9) * 18;
          const colors = ["#1DE3A2", "#00C896", "#4AF0C0", "#00A87A", "#7DFFD9"];
          return (
            <path key={i}
              d={`M${startX} 0 Q${startX + (i % 3 === 0 ? 60 : i % 3 === 1 ? -40 : 20)} 150 ${180 + i * 5} 250 Q${160 + i * 3} 350 ${140 + i * 8} 450`}
              fill="none" stroke={colors[i % colors.length]}
              strokeWidth={i % 4 === 0 ? "2.5" : "1.2"}
              opacity={0.3 + (i % 5) * 0.12} strokeLinecap="round"
            />
          );
        })}
        {([[200, 50], [180, 130], [220, 200], [160, 290], [240, 360]] as [number, number][]).map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="5" fill="#1DE3A2" opacity={0.8} />
        ))}
      </svg>
      <div className="absolute bottom-0 left-0 right-0 h-[38%] flex flex-col justify-center px-8"
        style={{ background: "rgba(0,184,130,0.15)", backdropFilter: "blur(8px)" }}>
        <div className="space-y-2.5">
          {c.s4.bullets.map((t, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#1DE3A2" }} />
              <EditableText value={t}
                onChange={(v) => { const bullets = [...c.s4.bullets]; bullets[i] = v; upd({ ...c, s4: { ...c.s4, bullets } }); }}
                className="text-[11px] font-semibold tracking-wide uppercase block flex-1"
                style={{ color: "rgba(255,255,255,0.8)" }} />
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
            <EditableText value={v}
              onChange={(nv) => { const stats = [...c.s4.stats] as [string, string][]; stats[i] = [nv, l]; upd({ ...c, s4: { ...c.s4, stats } }); }}
              className="text-2xl font-black block" style={{ color: "#1DE3A2" }} />
            <EditableText value={l}
              onChange={(nv) => { const stats = [...c.s4.stats] as [string, string][]; stats[i] = [v, nv]; upd({ ...c, s4: { ...c.s4, stats } }); }}
              className="text-[11px] mt-0.5 block" style={{ color: "rgba(255,255,255,0.35)" }} />
          </div>
        ))}
      </div>
    </div>
    {ACCENT_LINE}
  </Slide>
);

// ─── Slide 5: Two columns ─────────────────────────────────────────────────────
const BEFORE_ICONS = ["Clock", "AlertTriangle", "TrendingDown", "Users"];
const AFTER_ICONS  = ["Zap", "RefreshCw", "TrendingUp", "UserCheck"];

export const Slide5 = ({ dir, animKey, c, upd }: SlideProps) => (
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
              <EditableText value={text}
                onChange={(v) => { const before = [...c.s5.before]; before[i] = v; upd({ ...c, s5: { ...c.s5, before } }); }}
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
              <EditableText value={text}
                onChange={(v) => { const after = [...c.s5.after]; after[i] = v; upd({ ...c, s5: { ...c.s5, after } }); }}
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
    {ACCENT_LINE}
  </Slide>
);

// ─── Slide 6: Final / Contacts ────────────────────────────────────────────────
const CONTACT_ICONS = ["Mail", "Globe", "Phone", "MapPin"];

export const Slide6 = ({ dir, animKey, c, upd }: SlideProps) => (
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
            <EditableText value={text}
              onChange={(v) => { const contacts = [...c.s6.contacts]; contacts[i] = v; upd({ ...c, s6: { ...c.s6, contacts } }); }}
              className="text-sm block" style={{ color: "rgba(255,255,255,0.6)" }} />
          </div>
        ))}
      </div>
    </div>
    <div className="absolute right-[22%] top-1/2 -translate-y-1/2 space-y-4 fade-up-d2">
      {c.s6.stats.map(([num, label], i) => (
        <div key={i} className="text-right">
          <EditableText value={num}
            onChange={(v) => { const stats = [...c.s6.stats] as [string, string][]; stats[i] = [v, label]; upd({ ...c, s6: { ...c.s6, stats } }); }}
            className="font-black leading-none block" style={{ fontSize: "clamp(22px,2.5vw,32px)", color: "#1DE3A2" }} />
          <EditableText value={label}
            onChange={(v) => { const stats = [...c.s6.stats] as [string, string][]; stats[i] = [num, v]; upd({ ...c, s6: { ...c.s6, stats } }); }}
            className="text-[9px] font-semibold tracking-widest uppercase mt-0.5 block" style={{ color: "rgba(255,255,255,0.35)" }} />
        </div>
      ))}
    </div>
    {ACCENT_LINE}
  </Slide>
);

// ─── Slide registry ───────────────────────────────────────────────────────────
export const SLIDE_COMPONENTS = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6];
export const SLIDE_LABELS     = ["Титул", "Оглавление", "Контент", "Изображение", "2 Колонки", "Контакты"];
