// ─── Slide content types & defaults ──────────────────────────────────────────

export interface SlideContent {
  s1:  { label: string; title1: string; title2: string; subtitle: string; date: string };
  s2:  { label: string; heading1: string; heading2: string; items: { title: string; desc: string }[] };
  s3:  { label: string; heading: string; body1: string; body2: string; tag1: string; tag2: string; tag3: string };
  s4:  { label: string; heading: string; body: string; tag1: string; tag2: string; tag3: string };
  s5:  { label: string; heading: string; body1: string; body2: string; body3: string };
  s6:  { label: string; heading: string; tasks: { title: string; desc: string }[] };
  s7:  { label: string; heading: string; bars: [string, number, string][] };
  s8:  { label: string; heading: string; body1: string; body2: string; initiative: string };
  s9:  { label: string; heading: string; items: { icon: string; text: string }[] };
  s10: { label: string; heading: string; body1: string; body2: string; stats: [string, string][] };
  s11: { label: string; heading1: string; heading2: string; name: string };
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
    label: "КРОК | Стажёрская программа",
    title1: "Защита стажёрской",
    title2: "программы",
    subtitle: "Алина Козлова | Стажёр",
    date: "Май 2026",
  },
  s2: {
    label: "Содержание",
    heading1: "О чём",
    heading2: "доклад",
    items: [
      { title: "Как жизнь привела в КРОК",      desc: "От школы до оффера в лесу" },
      { title: "Проектный опыт",                 desc: "Задачи, ощущения, рост" },
      { title: "Стажёрская программа",           desc: "Что понравилось и что улучшить" },
      { title: "Инициатива",                     desc: "Доработка раздела «Коммуникация»" },
      { title: "Направления развития",           desc: "9 месяцев спустя + куда хочется расти" },
    ],
  },
  s3: {
    label: "Слайд 03 — Как жизнь привела в КРОК",
    heading: "Я — востоковед?",
    body1: "",
    body2: "",
    tag1: "Математическая школа",
    tag2: "Московский Политех",
    tag3: "Большие данные",
  },
  s4: {
    label: "Слайд 04 — Как я попала в КРОК",
    heading: "Оффер на вышке в лесу",
    body: "",
    tag1: "Летняя школа КРОК",
    tag2: "Ассессмент",
    tag3: "Оффер 📡",
  },
  s5: {
    label: "Слайд 05 — Проектный опыт",
    heading: "Проект Мосэнерго",
    body1: "",
    body2: "",
    body3: "",
  },
  s6: {
    label: "Слайд 06 — Список задач",
    heading: "Чем занималась / занимаюсь",
    tasks: [
      { title: "Работа с S2T",                desc: "Первичный анализ отчётов и показателей" },
      { title: "BI-разработка",               desc: "Разработка дашбордов в Visiology" },
      { title: "Тестирование дашбордов",      desc: "Проверка корректности работы отчётов" },
      { title: "Написание постановок",        desc: "Проектирование витрин и дашбордов" },
      { title: "Разбор заявок ОПЭ",           desc: "Устранение ошибок, консультация, новое требование" },
      { title: "Тестирование витрин?",        desc: "" },
    ],
  },
  s7: {
    label: "Слайд 07 — Статистика задач",
    heading: "Статистика ~",
    bars: [
      ["S2T / Анализ",            4, "#1DE3A2"],
      ["Написание постановок",    3, "#00C896"],
      ["Разработка дашбордов",    6, "#4AF0C0"],
      ["Тестирование дашбордов",  5, "#1DE3A2"],
      ["Заявки ОПЭ",              4, "#00A87A"],
      ["Тестирование витрин",     3, "#4AF0C0"],
    ],
  },
  s8: {
    label: "Слайд 08 — Стажёрская программа",
    heading: "Стажёрская программа и инициатива",
    body1: "",
    body2: "",
    initiative: "",
  },
  s9: {
    label: "Слайд 09 — Развитие",
    heading: "Направления роста",
    items: [
      { icon: "BarChart2",     text: "Работа в смежных ролях (DWH, миграция)" },
      { icon: "Globe",         text: "Проекты разной отраслевой направленности" },
      { icon: "Repeat",        text: "Широкий спектр проектов" },
      { icon: "MessageCircle", text: "Коммуникации с заказчиком" },
    ],
  },
  s10: {
    label: "Слайд 10 — Кем я стала",
    heading: "~ 9 месяцев спустя",
    body1: "",
    body2: "",
    stats: [["+знания", "большой объём"], ["+практика", "реальный проект"], ["+уверенность", "самостоятельные решения"]],
  },
  s11: {
    label: "Спасибо за внимание",
    heading1: "Q",
    heading2: "&A",
    name: "Алина Козлова",
  },
};