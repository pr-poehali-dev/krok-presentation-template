// ─── Slide content types & defaults ──────────────────────────────────────────

export interface SlideContent {
  s1: { label: string; title1: string; title2: string; subtitle: string; date: string };
  s2: { label: string; heading1: string; heading2: string; items: { title: string; desc: string }[] };
  s3: { label: string; heading: string; body1: string; body2: string; stats: [string, string][]; stack: string[] };
  s4: { label: string; heading1: string; heading2: string; body: string; stats: [string, string][]; bullets: string[] };
  s5: { label: string; heading: string; before: string[]; after: string[]; multiplier: string; multiplierLabel: string };
  s6: { label: string; heading1: string; heading2: string; contacts: string[]; stats: [string, string][] };
}

export type SlideDir = "right" | "left";

export type SlideProps = {
  dir: SlideDir;
  animKey: number;
  c: SlideContent;
  upd: (c: SlideContent) => void;
};

export const DEFAULT_CONTENT: SlideContent = {
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
      { title: "Введение",            desc: "Обзор текущей ситуации и задач" },
      { title: "Архитектура решения", desc: "Технический стек и подходы" },
      { title: "Анализ данных",       desc: "Методология и инструменты" },
      { title: "Результаты",          desc: "Ключевые показатели эффективности" },
      { title: "Дорожная карта",      desc: "Следующие шаги и план внедрения" },
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
    contacts: [
      "bi@croc.ru",
      "croc.ru/bigdata",
      "+7 (495) 974-22-60",
      "Москва, Волгоградский пр-т, 43, стр. 3",
    ],
    stats: [["2 700", "ПРОЕКТОВ В ГОД"], ["3 000", "СОТРУДНИКОВ"], ["460", "ПАРТНЁРОВ"]],
  },
};
