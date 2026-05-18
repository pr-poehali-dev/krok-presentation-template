import { useState, useCallback } from "react";
import Icon from "@/components/ui/icon";

// ── Brand colors from KROK brandbook ──────────────────────────────────────────
// BG: #0D1F1A (very dark green), Accent: #1DE3A2 / #00C896 (bright mint)
// Cards: rgba(255,255,255,0.05) with border rgba(255,255,255,0.1)

// ─── DNA / Fiber SVG decorations ─────────────────────────────────────────────
const DNADecor = ({ opacity = 0.18 }: { opacity?: number }) => (
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

const CircuitDecor = () => (
  <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full" style={{ opacity: 0.07 }}>
    {[80, 160, 240, 320].map((x) => (
      <line key={x} x1={x} y1={0} x2={x} y2={300} stroke="#1DE3A2" strokeWidth="1" />
    ))}
    {[60, 120, 180, 240].map((y) => (
      <line key={y} x1={0} y1={y} x2={400} y2={y} stroke="#1DE3A2" strokeWidth="1" />
    ))}
    {[[80, 60], [160, 120], [240, 60], [320, 180], [160, 240], [80, 180]].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r="4" fill="#1DE3A2" opacity="0.8" />
    ))}
    <path d="M80 60 L160 60 L160 120 L240 120 L240 180 L320 180" fill="none" stroke="#1DE3A2" strokeWidth="1.5" opacity="0.4" />
    <path d="M80 180 L80 240 L160 240 L160 180 L240 180" fill="none" stroke="#1DE3A2" strokeWidth="1.5" opacity="0.3" />
  </svg>
);

const GlowOrb = ({ size, x, y, color = "#1DE3A2", blur = 80 }: { size: number; x: string; y: string; color?: string; blur?: number }) => (
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

// ─── Logo ──────────────────────────────────────────────────────────────────────
const KrokLogo = () => (
  <div className="flex items-center gap-2.5">
    <div className="flex flex-col items-end">
      <span className="text-[9px] font-semibold tracking-[0.3em] uppercase leading-none mb-0.5" style={{ color: "#1DE3A2", opacity: 0.8 }}>
        BI & BigData
      </span>
      <span className="text-[24px] font-black leading-none tracking-tight text-white" style={{ fontFamily: "'Golos Text', sans-serif" }}>
        КРОК
      </span>
    </div>
    <div className="w-[1.5px] self-stretch rounded-full bg-[#1DE3A2] opacity-50" />
    <div className="text-[7px] font-semibold tracking-[0.15em] uppercase leading-tight max-w-[50px] text-white opacity-40">
      IT Solutions & Analytics
    </div>
  </div>
);

const LogoBadge = () => (
  <div className="absolute top-5 right-7 z-20">
    <KrokLogo />
  </div>
);

// ─── Slide wrapper ─────────────────────────────────────────────────────────────
const Slide = ({ children, className = "", dir, animKey }: {
  children: React.ReactNode; className?: string;
  dir: "right" | "left"; animKey: number;
}) => (
  <div
    key={animKey}
    className={`relative w-full h-full overflow-hidden ${dir === "right" ? "slide-in-right" : "slide-in-left"} ${className}`}
    style={{ background: "#0D1F1A" }}
  >
    {children}
  </div>
);

// ─── Slide 1: Title ───────────────────────────────────────────────────────────
const Slide1 = ({ dir, animKey }: { dir: "right" | "left"; animKey: number }) => (
  <Slide dir={dir} animKey={animKey}>
    {/* Gradient bg */}
    <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 80% at 70% 50%, #0F2D22 0%, #0A1A14 60%, #060F0B 100%)" }} />
    <GlowOrb size={500} x="72%" y="50%" color="#1DE3A2" blur={120} />
    <GlowOrb size={200} x="15%" y="80%" color="#00C896" blur={80} />

    {/* DNA right side */}
    <div className="absolute right-[5%] top-[5%] bottom-[5%] w-[38%] flex items-center justify-center">
      <div className="w-[100px] h-[90%]">
        <DNADecor opacity={0.55} />
      </div>
    </div>

    <LogoBadge />

    <div className="absolute left-10 top-1/2 -translate-y-[55%] max-w-[52%]">
      <div className="text-[10px] font-semibold tracking-[0.45em] uppercase mb-4 fade-up" style={{ color: "#1DE3A2" }}>
        Аналитика &amp; Большие данные
      </div>
      <h1 className="font-black leading-[1.02] mb-5 fade-up-d1" style={{ fontSize: "clamp(36px, 5vw, 62px)", color: "#fff" }}>
        Название<br />
        <span style={{ color: "#1DE3A2" }}>презентации</span>
      </h1>
      <p className="text-base fade-up-d2" style={{ color: "rgba(255,255,255,0.5)" }}>
        Подзаголовок или краткое описание темы доклада
      </p>
      <div className="mt-8 flex items-center gap-4 fade-up-d3">
        <div className="h-px w-12" style={{ background: "#1DE3A2", opacity: 0.5 }} />
        <span className="text-[10px] tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>Май 2026</span>
      </div>
    </div>

    {/* Bottom accent */}
    <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent, #1DE3A2 50%, transparent)" }} />
  </Slide>
);

// ─── Slide 2: Table of Contents ───────────────────────────────────────────────
const Slide2 = ({ dir, animKey }: { dir: "right" | "left"; animKey: number }) => {
  const items = [
    { num: "01", title: "Введение", desc: "Обзор текущей ситуации и задач" },
    { num: "02", title: "Архитектура решения", desc: "Технический стек и подходы" },
    { num: "03", title: "Анализ данных", desc: "Методология и инструменты" },
    { num: "04", title: "Результаты", desc: "Ключевые показатели эффективности" },
    { num: "05", title: "Дорожная карта", desc: "Следующие шаги и план внедрения" },
  ];
  return (
    <Slide dir={dir} animKey={animKey}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 90% at 10% 50%, #0F2D22 0%, #0A1A14 55%, #060F0B 100%)" }} />
      <GlowOrb size={300} x="8%" y="50%" color="#1DE3A2" blur={100} />

      <LogoBadge />

      {/* 4-quadrant layout like brandbook slide 2 */}
      <div className="absolute inset-0 flex items-center justify-center px-10 py-10 gap-5">
        {/* Left label */}
        <div className="flex flex-col justify-center pr-6 w-[200px] shrink-0">
          <div className="text-[9px] font-semibold tracking-[0.4em] uppercase mb-2 fade-up" style={{ color: "#1DE3A2" }}>Содержание</div>
          <div className="text-3xl font-black leading-tight text-white fade-up-d1">О чём<br />доклад</div>
          <div className="mt-4 w-8 h-[2px] fade-up-d2" style={{ background: "#1DE3A2" }} />
        </div>

        {/* Items grid */}
        <div className="flex-1 grid grid-cols-2 gap-3">
          {items.slice(0, 4).map((item, i) => (
            <div
              key={item.num}
              className="rounded-2xl px-5 py-4 border fade-up"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.09)",
                animationDelay: `${0.07 * i}s`
              }}
            >
              <div className="text-lg font-black mb-1" style={{ color: "#1DE3A2" }}>{item.num}</div>
              <div className="text-white font-bold text-sm leading-tight">{item.title}</div>
              <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>{item.desc}</div>
            </div>
          ))}
        </div>

        {/* 5th item full width below — shown as a wide card */}
        <div
          className="absolute bottom-8 left-[260px] right-10 rounded-2xl px-5 py-3 border flex items-center gap-4 fade-up-d3"
          style={{ background: "rgba(29,227,162,0.07)", borderColor: "rgba(29,227,162,0.2)" }}
        >
          <span className="text-lg font-black" style={{ color: "#1DE3A2" }}>05</span>
          <div>
            <div className="text-white font-bold text-sm">{items[4].title}</div>
            <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{items[4].desc}</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent, #1DE3A2 50%, transparent)" }} />
    </Slide>
  );
};

// ─── Slide 3: Content ─────────────────────────────────────────────────────────
const Slide3 = ({ dir, animKey }: { dir: "right" | "left"; animKey: number }) => (
  <Slide dir={dir} animKey={animKey}>
    <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 70% at 90% 20%, #0F2D22 0%, #0A1A14 60%, #060F0B 100%)" }} />
    <GlowOrb size={350} x="90%" y="15%" color="#1DE3A2" blur={120} />
    {/* Circuit board decoration */}
    <CircuitDecor />

    <LogoBadge />

    <div className="absolute top-9 left-10 right-10">
      <div className="text-[9px] font-semibold tracking-[0.4em] uppercase mb-1.5 fade-up" style={{ color: "#1DE3A2" }}>
        Раздел 02 — Архитектура
      </div>
      <h2 className="text-white text-3xl font-black fade-up-d1">Технический стек решения</h2>
      <div className="mt-2 w-12 h-[2px] fade-up-d2" style={{ background: "#1DE3A2" }} />
    </div>

    <div className="absolute left-10 right-10 top-[140px] bottom-10 grid grid-cols-2 gap-5">
      <div className="fade-up-d2 flex flex-col justify-between">
        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
          Современная платформа BigData строится на принципах масштабируемости, отказоустойчивости и высокой производительности при работе с петабайтными объёмами данных.
        </p>
        <p className="text-[13px] leading-relaxed mt-3" style={{ color: "rgba(255,255,255,0.38)" }}>
          Облачные технологии позволяют динамически адаптировать мощности под нагрузку и снижать операционные издержки.
        </p>
        {/* Mini stat */}
        <div className="mt-4 flex gap-6">
          {[["99.9%", "Uptime"], ["<5ms", "Latency"], ["∞", "Scale"]].map(([v, l]) => (
            <div key={l}>
              <div className="text-xl font-black" style={{ color: "#1DE3A2" }}>{v}</div>
              <div className="text-[10px] mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-2.5 fade-up-d3">
        {[
          { icon: "Database", text: "Apache Kafka — стриминг событий в реальном времени" },
          { icon: "Server", text: "Spark / Flink — распределённая обработка данных" },
          { icon: "BarChart3", text: "ClickHouse — OLAP-аналитика на больших объёмах" },
          { icon: "Shield", text: "Kubernetes — оркестрация и масштабирование" },
        ].map((b) => (
          <div
            key={b.icon}
            className="flex items-center gap-3 rounded-2xl px-4 py-3 border"
            style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}
          >
            <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(29,227,162,0.12)" }}>
              <Icon name={b.icon} size={14} className="" style={{ color: "#1DE3A2" }} />
            </div>
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.72)" }}>{b.text}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent, #1DE3A2 50%, transparent)" }} />
  </Slide>
);

// ─── Slide 4: Image + Text ────────────────────────────────────────────────────
const Slide4 = ({ dir, animKey }: { dir: "right" | "left"; animKey: number }) => (
  <Slide dir={dir} animKey={animKey}>
    <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 80% at 20% 60%, #0F2D22 0%, #0A1A14 55%, #060F0B 100%)" }} />
    <GlowOrb size={400} x="25%" y="60%" color="#1DE3A2" blur={130} />

    <LogoBadge />

    {/* Right panel — fiber optic style image area */}
    <div
      className="absolute right-0 top-0 bottom-0 w-[45%] overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0F2D22 0%, #071410 100%)" }}
    >
      {/* Fiber optic SVG visualization */}
      <svg viewBox="0 0 400 450" className="absolute inset-0 w-full h-full" style={{ opacity: 0.7 }}>
        {Array.from({ length: 18 }).map((_, i) => {
          const startX = 200 + (i - 9) * 18;
          const colors = ["#1DE3A2", "#00C896", "#4AF0C0", "#00A87A", "#7DFFD9"];
          const c = colors[i % colors.length];
          return (
            <path
              key={i}
              d={`M${startX} 0 Q${startX + (i % 3 === 0 ? 60 : i % 3 === 1 ? -40 : 20)} 150 ${180 + i * 5} 250 Q${160 + i * 3} 350 ${140 + i * 8} 450`}
              fill="none"
              stroke={c}
              strokeWidth={i % 4 === 0 ? "2.5" : "1.2"}
              opacity={0.3 + (i % 5) * 0.12}
              strokeLinecap="round"
            />
          );
        })}
        {/* Glow dots */}
        {[[200, 50], [180, 130], [220, 200], [160, 290], [240, 360]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="5" fill="#1DE3A2" opacity={0.8} />
        ))}
      </svg>
      {/* Teal bottom block like screenshot 3 */}
      <div className="absolute bottom-0 left-0 right-0 h-[38%] flex flex-col justify-center px-8"
        style={{ background: "rgba(0,184,130,0.15)", backdropFilter: "blur(8px)" }}>
        <div className="space-y-2.5">
          {["Сервис решений 100+ производителей", "30+ тыс. компонентов в хранилище", "Сервисные лаборатории"].map((t) => (
            <div key={t} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#1DE3A2" }} />
              <span className="text-[11px] font-semibold tracking-wide uppercase text-white opacity-80">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Left text */}
    <div className="absolute left-10 top-1/2 -translate-y-1/2 max-w-[49%]">
      <div className="text-[9px] font-semibold tracking-[0.4em] uppercase mb-3 fade-up" style={{ color: "#1DE3A2" }}>
        Раздел 03 — Данные
      </div>
      <h2 className="font-black leading-tight mb-4 fade-up-d1" style={{ fontSize: "clamp(26px, 3.5vw, 42px)", color: "#fff" }}>
        Визуализация<br /><span style={{ color: "#1DE3A2" }}>данных</span>
      </h2>
      <p className="text-sm leading-relaxed mb-5 fade-up-d2" style={{ color: "rgba(255,255,255,0.55)" }}>
        Интерактивные дашборды позволяют отслеживать ключевые метрики бизнеса в режиме реального времени и принимать обоснованные решения.
      </p>
      <div className="flex gap-8 fade-up-d3">
        {[["98%", "Точность"], ["5ms", "Задержка"], ["∞", "Масштаб"]].map(([val, label]) => (
          <div key={label}>
            <div className="text-2xl font-black" style={{ color: "#1DE3A2" }}>{val}</div>
            <div className="text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{label}</div>
          </div>
        ))}
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent, #1DE3A2 50%, transparent)" }} />
  </Slide>
);

// ─── Slide 5: Two columns ─────────────────────────────────────────────────────
const Slide5 = ({ dir, animKey }: { dir: "right" | "left"; animKey: number }) => (
  <Slide dir={dir} animKey={animKey}>
    <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 70% at 50% 100%, #0F2D22 0%, #0A1A14 55%, #060F0B 100%)" }} />
    <GlowOrb size={400} x="50%" y="100%" color="#1DE3A2" blur={120} />

    <LogoBadge />

    <div className="absolute top-9 left-10">
      <div className="text-[9px] font-semibold tracking-[0.4em] uppercase mb-1.5 fade-up" style={{ color: "#1DE3A2" }}>
        Раздел 04 — Результаты
      </div>
      <h2 className="text-white text-3xl font-black fade-up-d1">Ключевые результаты</h2>
      <div className="mt-2 w-12 h-[2px] fade-up-d2" style={{ background: "#1DE3A2" }} />
    </div>

    <div className="absolute left-10 right-10 top-[140px] bottom-10 grid grid-cols-2 gap-5">
      {/* Before */}
      <div className="rounded-2xl p-6 flex flex-col border fade-up-d2"
        style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}>
        <div className="text-[9px] font-semibold tracking-[0.3em] uppercase mb-3" style={{ color: "rgba(255,255,255,0.3)" }}>До внедрения</div>
        <div className="space-y-3 flex-1">
          {[
            { icon: "Clock", text: "Обработка отчётов — 3–5 дней" },
            { icon: "AlertTriangle", text: "Ручная агрегация данных" },
            { icon: "TrendingDown", text: "Задержка инсайтов до 7 дней" },
            { icon: "Users", text: "5 аналитиков на одну задачу" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2.5">
              <Icon name={item.icon} size={13} className="" style={{ color: "rgba(255,255,255,0.25)" }} />
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
      {/* After */}
      <div className="rounded-2xl p-6 flex flex-col border fade-up-d3"
        style={{ background: "rgba(29,227,162,0.07)", borderColor: "rgba(29,227,162,0.25)", borderTopWidth: "3px", borderTopColor: "#1DE3A2" }}>
        <div className="text-[9px] font-semibold tracking-[0.3em] uppercase mb-3" style={{ color: "#1DE3A2" }}>После внедрения</div>
        <div className="space-y-3 flex-1">
          {[
            { icon: "Zap", text: "Обработка отчётов — 15 минут" },
            { icon: "RefreshCw", text: "Автоматическая ETL-pipeline" },
            { icon: "TrendingUp", text: "Инсайты в реальном времени" },
            { icon: "UserCheck", text: "1 аналитик + AI-ассистент" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2.5">
              <Icon name={item.icon} size={13} className="" style={{ color: "#1DE3A2" }} />
              <span className="text-xs font-medium text-white">{item.text}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t" style={{ borderColor: "rgba(29,227,162,0.2)" }}>
          <span className="text-2xl font-black" style={{ color: "#1DE3A2" }}>×12</span>
          <span className="text-xs ml-2" style={{ color: "rgba(255,255,255,0.4)" }}>рост производительности</span>
        </div>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent, #1DE3A2 50%, transparent)" }} />
  </Slide>
);

// ─── Slide 6: Final / Contacts ─────────────────────────────────────────────────
const Slide6 = ({ dir, animKey }: { dir: "right" | "left"; animKey: number }) => (
  <Slide dir={dir} animKey={animKey}>
    <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 90% 90% at 60% 40%, #0F2D22 0%, #0A1A14 55%, #060F0B 100%)" }} />
    <GlowOrb size={500} x="60%" y="40%" color="#1DE3A2" blur={150} />
    <GlowOrb size={200} x="20%" y="80%" color="#00C896" blur={80} />

    {/* DNA decor right */}
    <div className="absolute right-[8%] top-[8%] bottom-[8%] w-[28%] flex items-center justify-center opacity-30">
      <div className="w-[80px] h-[90%]">
        <DNADecor opacity={1} />
      </div>
    </div>

    <LogoBadge />

    <div className="absolute left-10 top-1/2 -translate-y-[58%]">
      <div className="text-[10px] font-semibold tracking-[0.5em] uppercase mb-3 fade-up" style={{ color: "#1DE3A2" }}>
        Спасибо за внимание
      </div>
      <h2 className="font-black leading-[1.0] mb-7 fade-up-d1" style={{ fontSize: "clamp(38px, 5.5vw, 64px)", color: "#fff" }}>
        Готовы<br /><span style={{ color: "#1DE3A2" }}>обсудить?</span>
      </h2>
      <div className="h-px w-40 mb-6 fade-up-d2" style={{ background: "rgba(255,255,255,0.08)" }} />
      <div className="space-y-2.5 fade-up-d3">
        {[
          { icon: "Mail", text: "bi@croc.ru" },
          { icon: "Globe", text: "croc.ru/bigdata" },
          { icon: "Phone", text: "+7 (495) 974-22-60" },
          { icon: "MapPin", text: "Москва, Волгоградский пр-т, 43, стр. 3" },
        ].map((c) => (
          <div key={c.text} className="flex items-center gap-2.5">
            <Icon name={c.icon} size={13} className="" style={{ color: "#1DE3A2" }} />
            <span className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{c.text}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Stats from brandbook style */}
    <div className="absolute right-[22%] top-1/2 -translate-y-1/2 space-y-4 fade-up-d2">
      {[["2 700", "ПРОЕКТОВ В ГОД"], ["3 000", "СОТРУДНИКОВ"], ["460", "ПАРТНЁРОВ"]].map(([num, label]) => (
        <div key={label} className="text-right">
          <div className="font-black leading-none" style={{ fontSize: "clamp(22px,2.5vw,32px)", color: "#1DE3A2" }}>{num}</div>
          <div className="text-[9px] font-semibold tracking-widest uppercase mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{label}</div>
        </div>
      ))}
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent, #1DE3A2 50%, transparent)" }} />
  </Slide>
);

// ─── Slide meta ────────────────────────────────────────────────────────────────
const SLIDES = [
  { id: 1, label: "Титул",       Component: Slide1 },
  { id: 2, label: "Оглавление",  Component: Slide2 },
  { id: 3, label: "Контент",     Component: Slide3 },
  { id: 4, label: "Изображение", Component: Slide4 },
  { id: 5, label: "2 Колонки",   Component: Slide5 },
  { id: 6, label: "Контакты",    Component: Slide6 },
];

// ─── Main ──────────────────────────────────────────────────────────────────────
export default function Index() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir]         = useState<"right" | "left">("right");
  const [animKey, setAnimKey] = useState(0);

  const goTo = useCallback((idx: number) => {
    setDir(idx > current ? "right" : "left");
    setAnimKey((k) => k + 1);
    setCurrent(idx);
  }, [current]);

  const prev = () => current > 0                  && goTo(current - 1);
  const next = () => current < SLIDES.length - 1  && goTo(current + 1);

  const { Component } = SLIDES[current];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8"
      style={{ background: "#060F0B", fontFamily: "'Golos Text', sans-serif" }}
    >
      <div className="w-full max-w-[1100px] mb-3 flex items-center justify-between">
        <span className="text-[10px] tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.2)" }}>
          Шаблон презентации КРОК
        </span>
        <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.2)" }}>
          {current + 1} / {SLIDES.length}
        </span>
      </div>

      <div
        className="w-full max-w-[1100px] relative overflow-hidden"
        style={{ aspectRatio: "16/9", boxShadow: "0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(29,227,162,0.08)" }}
      >
        <Component dir={dir} animKey={animKey} />
      </div>

      <div className="w-full max-w-[1100px] mt-4 flex items-center gap-3">
        <button
          onClick={prev}
          disabled={current === 0}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs transition-all disabled:opacity-20"
          style={{ background: "rgba(255,255,255,0.06)", color: "#fff" }}
        >
          <Icon name="ChevronLeft" size={14} />
          Назад
        </button>

        <div className="flex-1 flex items-center justify-center gap-1.5 flex-wrap">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              className="rounded-xl text-[10px] px-3 py-1.5 font-medium transition-all"
              style={
                i === current
                  ? { background: "#1DE3A2", color: "#060F0B" }
                  : { background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.4)" }
              }
            >
              {s.label}
            </button>
          ))}
        </div>

        <button
          onClick={next}
          disabled={current === SLIDES.length - 1}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs transition-all disabled:opacity-20"
          style={{ background: "rgba(255,255,255,0.06)", color: "#fff" }}
        >
          Вперёд
          <Icon name="ChevronRight" size={14} />
        </button>
      </div>

      <div className="mt-2 flex items-center gap-1.5 text-[10px]" style={{ color: "rgba(255,255,255,0.15)" }}>
        <Icon name="MousePointer" size={11} />
        Нажимайте на кнопки для навигации между слайдами
      </div>
    </div>
  );
}
