import { useState, useCallback } from "react";
import Icon from "@/components/ui/icon";

// ─── Logo Component ────────────────────────────────────────────────────────────
 
const KrokLogo = ({ dark = false }: { dark?: boolean }) => (
  <div className="flex items-center gap-3">
    <div className={`flex flex-col items-end ${dark ? "text-[#003D2E]" : "text-white"}`}>
      <span
        className="text-[10px] font-semibold tracking-[0.35em] uppercase leading-none mb-0.5"
        style={{ opacity: 0.65 }}
      >
        BI & BigData
      </span>
      <span
        className="text-[26px] font-black leading-none tracking-tight"
        style={{ fontFamily: "'Golos Text', sans-serif" }}
      >
        КРОК
      </span>
    </div>
    <div
      className="w-[2px] self-stretch rounded-full"
      style={{ background: dark ? "#003D2E" : "#00B87A" }}
    />
    <div
      className="text-[8px] font-semibold tracking-[0.18em] uppercase leading-tight max-w-[55px]"
      style={{ color: dark ? "#003D2E" : "rgba(255,255,255,0.7)" }}
    >
      IT Solutions & Analytics
    </div>
  </div>
);

// ─── Slide wrapper ─────────────────────────────────────────────────────────────
const Slide = ({
  children,
  className = "",
  dir,
  animKey,
}: {
  children: React.ReactNode;
  className?: string;
  dir: "right" | "left";
  animKey: number;
}) => (
  <div
    key={animKey}
    className={`relative w-full h-full overflow-hidden ${dir === "right" ? "slide-in-right" : "slide-in-left"} ${className}`}
  >
    {children}
  </div>
);

// ─── Logo badge (top-right) ────────────────────────────────────────────────────
const LogoBadge = ({ dark = false }: { dark?: boolean }) => (
  <div className="absolute top-5 right-7 z-20">
    <KrokLogo dark={dark} />
  </div>
);

// ─── Slide 1: Title ───────────────────────────────────────────────────────────
const Slide1 = ({ dir, animKey }: { dir: "right" | "left"; animKey: number }) => (
  <Slide dir={dir} animKey={animKey} className="bg-[#003D2E] grid-pattern">
    <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full border border-[rgba(0,184,122,0.10)]" />
    <div className="absolute -bottom-48 -left-48 w-[700px] h-[700px] rounded-full border border-[rgba(0,184,122,0.06)]" />
    <div className="absolute top-0 right-0 w-[260px] h-[260px] bg-[rgba(0,82,64,0.45)] rounded-bl-full" />

    <LogoBadge dark={false} />

    <div className="absolute left-10 top-1/2 -translate-y-1/2 w-[3px] h-[160px] bg-[#00B87A] rounded-full fade-up" />

    <div className="absolute left-20 top-1/2 -translate-y-[55%] max-w-[560px]">
      <div className="text-[#00B87A] text-[10px] font-semibold tracking-[0.4em] uppercase mb-4 fade-up">
        Аналитика &amp; Большие данные
      </div>
      <h1
        className="text-white font-black leading-[1.05] mb-5 fade-up-d1"
        style={{ fontSize: "clamp(34px, 4.5vw, 56px)" }}
      >
        Название<br />
        <span className="text-[#00B87A]">презентации</span>
      </h1>
      <p className="text-[rgba(255,255,255,0.5)] text-base font-normal fade-up-d2">
        Подзаголовок или краткое описание темы доклада
      </p>
      <div className="mt-8 flex items-center gap-5 fade-up-d3">
        <div className="h-px flex-1 bg-[rgba(255,255,255,0.10)]" />
        <div className="text-[rgba(255,255,255,0.35)] text-[10px] tracking-widest uppercase">
          Май 2026
        </div>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#003D2E] via-[#00B87A] to-[#003D2E]" />
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
    <Slide dir={dir} animKey={animKey} className="bg-white">
      <LogoBadge dark={true} />

      <div className="absolute left-0 top-0 bottom-0 w-[200px] bg-[#003D2E] grid-pattern flex flex-col justify-center px-7">
        <div className="text-[#00B87A] text-[9px] tracking-[0.4em] uppercase font-semibold mb-2 fade-up">
          Содержание
        </div>
        <div className="text-white text-2xl font-black leading-tight fade-up-d1">
          О чём<br />доклад
        </div>
        <div className="mt-5 w-7 h-[2px] bg-[#00B87A] fade-up-d2" />
      </div>

      <div className="absolute left-[230px] right-10 top-1/2 -translate-y-1/2 space-y-2">
        {items.map((item, i) => (
          <div
            key={item.num}
            className="flex items-center gap-4 py-3 px-4 rounded-sm border-l-[3px] border-transparent hover:border-[#00B87A] hover:bg-[#F0F4F2] transition-all cursor-default fade-up"
            style={{ animationDelay: `${0.05 * i}s` }}
          >
            <span className="text-[#00B87A] text-xl font-black w-8 shrink-0">{item.num}</span>
            <div>
              <div className="text-[#003D2E] font-bold text-sm leading-tight">{item.title}</div>
              <div className="text-[#6B8F82] text-xs mt-0.5">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#003D2E]" />
    </Slide>
  );
};

// ─── Slide 3: Content ─────────────────────────────────────────────────────────
const Slide3 = ({ dir, animKey }: { dir: "right" | "left"; animKey: number }) => (
  <Slide dir={dir} animKey={animKey} className="bg-[#003D2E] grid-pattern">
    <LogoBadge dark={false} />

    <div className="absolute top-10 left-10 right-10">
      <div className="text-[#00B87A] text-[9px] tracking-[0.4em] uppercase font-semibold mb-1.5 fade-up">
        Раздел 02 — Архитектура
      </div>
      <h2 className="text-white text-3xl font-black fade-up-d1">
        Технический стек решения
      </h2>
      <div className="mt-2 w-14 h-[2px] bg-[#00B87A] fade-up-d2" />
    </div>

    <div className="absolute left-10 right-10 top-[145px] bottom-12 grid grid-cols-2 gap-5">
      <div className="fade-up-d2">
        <p className="text-[rgba(255,255,255,0.72)] text-sm leading-relaxed mb-4">
          Современная платформа обработки больших данных строится на принципах масштабируемости, отказоустойчивости и высокой производительности при работе с петабайтными объёмами информации.
        </p>
        <p className="text-[rgba(255,255,255,0.45)] text-[13px] leading-relaxed">
          Применение облачных технологий позволяет динамически адаптировать вычислительные мощности под текущую нагрузку, существенно снижая операционные издержки.
        </p>
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
            className="flex items-start gap-3 bg-[rgba(255,255,255,0.04)] rounded-sm px-3 py-2.5 border border-[rgba(0,184,122,0.13)]"
          >
            <Icon name={b.icon} size={14} className="text-[#00B87A] mt-0.5 shrink-0" />
            <span className="text-[rgba(255,255,255,0.75)] text-xs">{b.text}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#003D2E] via-[#00B87A] to-[#003D2E]" />
  </Slide>
);

// ─── Slide 4: Image + Text ────────────────────────────────────────────────────
const Slide4 = ({ dir, animKey }: { dir: "right" | "left"; animKey: number }) => (
  <Slide dir={dir} animKey={animKey} className="bg-white">
    <LogoBadge dark={true} />

    {/* Right image panel */}
    <div className="absolute right-0 top-0 bottom-0 w-[44%] bg-[#003D2E] grid-pattern overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 300 300" className="w-[260px] opacity-85">
          {[50, 90, 130, 170, 210].map((r, i) => (
            <circle key={r} cx={150} cy={150} r={r * 0.5} fill="none" stroke="#00B87A" strokeWidth="1" opacity={0.28 - i * 0.04} />
          ))}
          {[0, 60, 120, 180, 240, 300].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            return (
              <line
                key={angle}
                x1={150} y1={150}
                x2={150 + 110 * Math.cos(rad)}
                y2={150 + 110 * Math.sin(rad)}
                stroke="#00B87A" strokeWidth="1" opacity="0.18"
              />
            );
          })}
          {([[150, 85], [200, 125], [215, 185], [150, 225], [100, 185], [85, 125]] as [number,number][]).map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="4" fill="#00B87A" opacity="0.9" />
          ))}
          <circle cx="150" cy="150" r="15" fill="#00B87A" opacity="0.9" />
          <circle cx="150" cy="150" r="7" fill="#003D2E" />
        </svg>
      </div>
      <div className="absolute bottom-7 left-7 right-7 text-center">
        <div className="text-[#00B87A] text-[9px] tracking-widest uppercase">Data Graph</div>
      </div>
    </div>

    {/* Left text */}
    <div className="absolute left-10 top-1/2 -translate-y-1/2 max-w-[50%]">
      <div className="text-[#00B87A] text-[9px] tracking-[0.4em] uppercase font-semibold mb-3 fade-up">
        Раздел 03 — Анализ
      </div>
      <h2 className="text-[#003D2E] text-3xl font-black leading-tight mb-4 fade-up-d1">
        Визуализация<br />
        <span className="text-[#00B87A]">данных</span>
      </h2>
      <p className="text-[#4A6B5E] text-sm leading-relaxed mb-5 fade-up-d2">
        Интерактивные дашборды позволяют отслеживать ключевые метрики бизнеса в режиме реального времени и принимать данные-обоснованные решения.
      </p>
      <div className="flex gap-7 fade-up-d3">
        {[["98%", "Точность"], ["5ms", "Задержка"], ["∞", "Масштаб"]].map(([val, label]) => (
          <div key={label}>
            <div className="text-[#003D2E] text-xl font-black">{val}</div>
            <div className="text-[#6B8F82] text-[11px] mt-0.5">{label}</div>
          </div>
        ))}
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#003D2E]" />
  </Slide>
);

// ─── Slide 5: Two columns ─────────────────────────────────────────────────────
const Slide5 = ({ dir, animKey }: { dir: "right" | "left"; animKey: number }) => (
  <Slide dir={dir} animKey={animKey} className="bg-white">
    <LogoBadge dark={true} />

    <div className="absolute top-10 left-10">
      <div className="text-[#00B87A] text-[9px] tracking-[0.4em] uppercase font-semibold mb-1.5 fade-up">
        Раздел 04 — Результаты
      </div>
      <h2 className="text-[#003D2E] text-3xl font-black fade-up-d1">Ключевые результаты</h2>
      <div className="mt-2 w-14 h-[2px] bg-[#00B87A] fade-up-d2" />
    </div>

    <div className="absolute left-10 right-10 top-[145px] bottom-12 grid grid-cols-2 gap-5">
      <div className="bg-[#003D2E] rounded-sm p-6 flex flex-col fade-up-d2">
        <div className="text-[#00B87A] text-[9px] tracking-[0.3em] uppercase font-semibold mb-3">До внедрения</div>
        <div className="space-y-3 flex-1">
          {[
            { icon: "Clock", text: "Обработка отчётов — 3–5 дней" },
            { icon: "AlertTriangle", text: "Ручная агрегация данных" },
            { icon: "TrendingDown", text: "Задержка инсайтов до 7 дней" },
            { icon: "Users", text: "5 аналитиков на одну задачу" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2.5">
              <Icon name={item.icon} size={13} className="text-[rgba(255,255,255,0.35)] shrink-0" />
              <span className="text-[rgba(255,255,255,0.55)] text-xs">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#F0F4F2] rounded-sm p-6 flex flex-col border-t-4 border-[#00B87A] fade-up-d3">
        <div className="text-[#00B87A] text-[9px] tracking-[0.3em] uppercase font-semibold mb-3">После внедрения</div>
        <div className="space-y-3 flex-1">
          {[
            { icon: "Zap", text: "Обработка отчётов — 15 минут" },
            { icon: "RefreshCw", text: "Автоматическая ETL-pipeline" },
            { icon: "TrendingUp", text: "Инсайты в реальном времени" },
            { icon: "UserCheck", text: "1 аналитик + AI-ассистент" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2.5">
              <Icon name={item.icon} size={13} className="text-[#00B87A] shrink-0" />
              <span className="text-[#003D2E] text-xs font-medium">{item.text}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 pt-3 border-t border-[#C8D8D2]">
          <span className="text-[#003D2E] text-xl font-black">×12</span>
          <span className="text-[#6B8F82] text-xs ml-2">рост производительности</span>
        </div>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#003D2E]" />
  </Slide>
);

// ─── Slide 6: Final / Contacts ─────────────────────────────────────────────────
const Slide6 = ({ dir, animKey }: { dir: "right" | "left"; animKey: number }) => (
  <Slide dir={dir} animKey={animKey} className="bg-[#003D2E] grid-pattern">
    <div className="absolute -top-20 -right-20 w-[360px] h-[360px] rounded-full bg-[rgba(0,82,64,0.45)]" />
    <div className="absolute bottom-0 left-0 w-[260px] h-[260px] rounded-tr-full bg-[rgba(0,82,64,0.3)]" />

    <LogoBadge dark={false} />

    <div className="absolute left-10 top-1/2 -translate-y-[58%]">
      <div className="text-[#00B87A] text-[10px] tracking-[0.5em] uppercase font-semibold mb-3 fade-up">
        Спасибо за внимание
      </div>
      <h2
        className="text-white font-black leading-[1.0] mb-7 fade-up-d1"
        style={{ fontSize: "clamp(38px, 5.5vw, 64px)" }}
      >
        Готовы<br />
        <span className="text-[#00B87A]">обсудить?</span>
      </h2>
      <div className="h-px w-40 bg-[rgba(255,255,255,0.12)] mb-7 fade-up-d2" />
      <div className="space-y-2.5 fade-up-d3">
        {[
          { icon: "Mail", text: "bi@croc.ru" },
          { icon: "Globe", text: "croc.ru/bigdata" },
          { icon: "Phone", text: "+7 (495) 974-22-60" },
          { icon: "MapPin", text: "Москва, Волгоградский пр-т, 43, стр. 3" },
        ].map((c) => (
          <div key={c.text} className="flex items-center gap-2.5">
            <Icon name={c.icon} size={13} className="text-[#00B87A]" />
            <span className="text-[rgba(255,255,255,0.65)] text-sm">{c.text}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="absolute right-16 top-1/2 -translate-y-1/2 fade-up-d2">
      <div className="w-[130px] h-[130px] border-2 border-[rgba(0,184,122,0.35)] rounded-sm flex items-center justify-center flex-col gap-2 bg-[rgba(0,0,0,0.15)]">
        <Icon name="QrCode" size={44} className="text-[rgba(0,184,122,0.55)]" />
        <span className="text-[rgba(255,255,255,0.3)] text-[9px] tracking-widest uppercase">Сканируй</span>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#003D2E] via-[#00B87A] to-[#003D2E]" />
  </Slide>
);

// ─── Slide meta ────────────────────────────────────────────────────────────────
const SLIDES = [
  { id: 1, label: "Титул",      Component: Slide1 },
  { id: 2, label: "Оглавление", Component: Slide2 },
  { id: 3, label: "Контент",    Component: Slide3 },
  { id: 4, label: "Изображение",Component: Slide4 },
  { id: 5, label: "2 Колонки",  Component: Slide5 },
  { id: 6, label: "Контакты",   Component: Slide6 },
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

  const prev = () => current > 0             && goTo(current - 1);
  const next = () => current < SLIDES.length - 1 && goTo(current + 1);

  const { Component } = SLIDES[current];

  return (
    <div
      className="min-h-screen bg-[#001A14] flex flex-col items-center justify-center p-4 md:p-8"
      style={{ fontFamily: "'Golos Text', sans-serif" }}
    >
      {/* Header */}
      <div className="w-full max-w-[1100px] mb-3 flex items-center justify-between">
        <span className="text-[rgba(255,255,255,0.25)] text-[11px] tracking-widest uppercase">
          Шаблон презентации КРОК
        </span>
        <span className="text-[rgba(255,255,255,0.25)] text-[11px]">
          {current + 1} / {SLIDES.length}
        </span>
      </div>

      {/* Slide frame */}
      <div
        className="w-full max-w-[1100px] relative shadow-[0_32px_80px_rgba(0,0,0,0.6)] overflow-hidden"
        style={{ aspectRatio: "16/9" }}
      >
        <Component dir={dir} animKey={animKey} />
      </div>

      {/* Navigation */}
      <div className="w-full max-w-[1100px] mt-4 flex items-center gap-3">
        <button
          onClick={prev}
          disabled={current === 0}
          className="flex items-center gap-1.5 px-3 py-2 rounded-sm bg-[rgba(255,255,255,0.06)] hover:bg-[rgba(255,255,255,0.11)] disabled:opacity-20 text-white text-xs transition-all"
        >
          <Icon name="ChevronLeft" size={14} />
          Назад
        </button>

        <div className="flex-1 flex items-center justify-center gap-1.5 flex-wrap">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              className={`transition-all rounded-sm text-[10px] px-2.5 py-1.5 font-medium ${
                i === current
                  ? "bg-[#00B87A] text-white"
                  : "bg-[rgba(255,255,255,0.07)] text-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.13)] hover:text-white"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <button
          onClick={next}
          disabled={current === SLIDES.length - 1}
          className="flex items-center gap-1.5 px-3 py-2 rounded-sm bg-[rgba(255,255,255,0.06)] hover:bg-[rgba(255,255,255,0.11)] disabled:opacity-20 text-white text-xs transition-all"
        >
          Вперёд
          <Icon name="ChevronRight" size={14} />
        </button>
      </div>

      <div className="mt-2 text-[rgba(255,255,255,0.15)] text-[10px] flex items-center gap-1.5">
        <Icon name="MousePointer" size={11} />
        Нажимайте на кнопки для навигации между слайдами
      </div>
    </div>
  );
}