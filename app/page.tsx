"use client"

import { useState } from "react"
import { Mail, Phone, MessageCircle, Download, ChevronDown, ChevronUp, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import QRCode from "react-qr-code"

const translations = {
  ru: {
    name: "Иванов Артем Антонович",
    role: "Руководитель IT-проектов",
    nav: {
      about: "Обо мне",
      skills: "Навыки",
      experience: "Опыт",
      contact: "Контакты",
    },
    cta: {
      contact: "Связаться",
      download: "Скачать PDF",
    },
    hero: {
      title: "Почему я подхожу",
      bullets: [
        "+20% новых клиентов через редизайн и новый стек",
        "+25% повторных покупок благодаря программе лояльности",
        "−50% дефектов после релизов через упорядочивание QA",
        "Закрыт техдолг 800+ часов без влияния на контрактные проекты",
        "Недельные спринты и прозрачный Гант на 12 месяцев вперёд",
      ],
    },
    about: {
      title: "Обо мне",
      text: "Руководитель IT-проектов с опытом реализации кейсов различного масштаба, включая комплексные государственные контракты и коммерческие продукты, а также крипто-кошельки и сервисы по предоставлению онлайн услуг. Успешно внедряю решения, увеличивающие вовлеченность пользователей, оптимизирую процессы, сокращаю количество ошибок, а также время на их устранение, снижаю задержки релизов.",
      text2:
        "Обладаю техническим и управленческим бэкграундом, детальным пониманием и практикой в области управления проектами на всех этапах жизненного цикла: от выявления требований до внедрения и эксплуатации, а также навыками формирования сплочённых команд, ориентированных на достижение общих целей.",
      competencies: "Ключевые компетенции и инструменты:",
      competenciesList: [
        "Ведение проектов полного цикла: сбор и анализ требований, постановка задач, контроль выполнения, сдача результатов заказчику.",
        "Управление бюджетом, ресурсное планирование, оптимизация затрат.",
        "Организация и контроль выполнения проектных задач, эффективная проектная коммуникация: взаимодействие с заказчиками, презентация решений и отчетности.",
        "Подготовка технической, тендерной и проектно-сметной документации: СТ, ФТ, НФТ, БТ, ТЗ, API, архитектура, ПМИ, руководства, ЧТЗ, НМЦК, Паспорт проекта, ТЭО, ресурсный план.",
        "Применение Agile (Scrum, Kanban, SAFe, Lean) и классических (Waterfall, PMBOK) проектных методологий.",
        "Опыт проектирования интеграций в монолитной и микросервисной архитектуре, понимание принципов клиент-серверного взаимодействия и жизненного цикла разработки ПО.",
        "Уверенное владение инструментами трекинга и планирования задач (Jira, Confluence, MS Project, Google Sheets), а также продуктами MS Office (Excel, Access, Word, Outlook, PowerPoint, Visio).",
        "Применение нотаций и инструментов описания требований Use Case, User Story, BPMN, UML, ведение диаграмм Ганта для контроля выполнения задач и соблюдения сроков релиза.",
      ],
      location: "Место жительства: Москва",
      format: "Формат работы: офис/гибрид/удаленка",
    },
    skills: {
      title: "Навыки",
      hard: "Hard-skills",
      soft: "Soft-skills",
      hardSkills: [
        "Релизы и ITSM",
        "Спринты/Гант",
        "Бэклог/приоритизация",
        "Требования/ТЗ/документы",
        "QA и снижение дефектов",
        "Локализация/новые рынки",
        "Платежи/финсервисы",
        "Интеграции/API/Swagger",
        "Telegram mini-apps",
        "iOS/Android",
        "Аналитика/метрики",
        "Пресейл/тендеры",
        "Госзаказ/комплаенс",
      ],
      softSkills: [
        "Лидерство 20+",
        "Коммуникация бизнес-dev",
        "Довожу до результата",
        "Системность/процессы",
        "Управление рисками",
        "Переговоры/партнёрства",
        "Клиентоориентированность",
        "Тайм-менеджмент",
        "Фасилитация/митинги",
        "Мультизадачность",
        "Стрессоустойчивость",
      ],
    },
    experience: {
      title: "Опыт работы",
      readMore: "Подробнее",
      readLess: "Свернуть",
      jobs: [
        {
          company: "HeadPoint",
          duration: "1 год и 2 месяца",
          role: "Руководитель IT проектов",
          period: "Сентябрь 2024 — сейчас (1 год и 2 месяца)",
          intro:
            "Я работаю на проекте ГИС ЕЦХД (государственная информационная система единый центр хранения и обработки данных).",
          goals: "Основные цели и задачи проекта:",
          goalsList: [
            "1. Повышение безопасности. Обеспечение безопасной среды для москвичей путем круглосуточного наблюдения и анализа происходящего.",
            "2. Совершенствование городского управления. Предоставление единого инструмента для ведомств (МВД, МЧС, муниципальных служб) для удаленного управления и координации действий.",
            "3. Развитие «Умного города». Интеграция системы видеонаблюдения в более широкую концепцию цифровизации и автоматизации городских процессов.",
          ],
          role_desc: "Что входит в мою роль:",
          roleList: [
            "Весь цикл IT-разработки: от бизнес-требований до релиза в прод.",
            "Команда 25+- человек.",
            "Пресейл - от презентаций до подписанных договоров.",
            "Документация - аналитические записки, релизная документация, протоколы приемок.",
            "Проведение релизов - еженедельные релизы, хотфиксы и крупные. Подготовка документации к релизу, согласование в ITSM и сопровождение релиза до его полного успешного закрытия.",
          ],
          achievements: "Мои достижения:",
          achievementsList: [
            "Упорядочил флоу проектов, переход на недельные спринты для более чуткого контроля. Ведение Ганта для прозрачного понимания план-графика релизов на 12 месяцев вперед.",
            "Внутренние задачи перестали копиться и стали частью нормального спринта.",
            "За год закрыл техдолг по минорным задачам (800+ часов) без негативного влияния на крупные контрактные проекты.",
            "Настроил процесс так, чтобы мы параллельно успевали и по контрактам, и по улучшениям: прозрачные планы, предсказуемые релизы, обсуждение рисков.",
          ],
        },
        {
          company: "Миллениал Групп",
          duration: "2 года и 4 месяца",
          role: "Руководитель IT проектов",
          period: "Март 2022 — Июнь 2024 (2 года и 4 месяца)",
          intro:
            "Сервис цифровых услуг: онлайн-психолог, юрист, ветеринар, астрология. Витрины и личные кабинеты, мобильные приложения и Telegram mini-apps, платежи и поддержка.",
          achievements: "Что сделал:",
          achievementsList: [
            "- Переписали сайты на новый стек и обновили дизайн/UX - приток новых клиентов вырос на 20%.",
            "- Запустили готовый продукт на новых рынках: локализация, юр-требования, подключение платежей, организация поддержки.",
            "- Заключил 5+ партнёрских контрактов - расширили охват и ускорили рост.",
          ],
          role_desc: "Что входило в роль:",
          roleList: [
            "- Я отвечал и за процессы/сроки, и за продуктовые решения - гипотезы, приоритизацию, UX и метрики.",
            "- Управление портфелем проектов: 12+ сайтов, мобильные приложения, Telegram mini-apps.",
            "- Координация команды ~10 человек (dev, дизайн, маркетинг, DevOps).",
            "- Планирование, бюджетирование, управление рисками по всем направлениям.",
            "- Запуски продуктов в других странах: от требований до вывода в прод.",
          ],
          extra: "Отдельный проект под крылом компании:",
          extraText:
            "С нуля довёл до релиза криптокошелёк в Telegram mini-app: сформировал идею, собрал команду, выпустил MVP, интегрировал финсервисы (банковские операции, микрозаймы под залог криптовалюты) и довёл до продажи заказчику.",
        },
        {
          company: "Kremlin Store",
          duration: "1 год и 5 месяцев",
          role: "IT Project manager",
          period: "Октябрь 2020 — Февраль 2022 (1 год и 5 месяцев)",
          intro:
            "KinoStore - современный магазин электроники с большим ассортиментом для съёмки, электротранспорта, спорта и красоты, аудиотехники и аксессуаров.",
          achievements: "Что сделал:",
          achievementsList: [
            "С нуля запустили личный кабинет: понятные статусы заказов, история покупок, профили клиентов.",
            "Спроектировал и внедрил программу лояльности и систему баллов - доля повторных покупок выросла на 25%.",
            "Навёл порядок в релизах и QA количество ошибок после обновлений сократилось на 50%.",
          ],
          role_desc: "Что входило в роль:",
          roleList: [
            "Управление полным циклом по веб-продуктам: проектирование, тестирование, техподдержка.",
            "Проекты модернизации инфраструктуры магазинов (кассы, видеонаблюдение).",
            "Запуск с нуля системы баллов и личного кабинета для магазина.",
          ],
        },
        {
          company: "Ceramic3d",
          duration: "9 месяцев",
          role: "Junior project manager",
          period: "Февраль 2018 — Октябрь 2018 (9 месяцев)",
          intro: "Компания-разработчик программы для дизайна интерьера.",
          achievements: "Достижения:",
          achievementsList: [
            "Организовал участие компании в выставках: подготовка стенда, графиков, материалов, презентаций - продукт показывали живьём, собирали лиды.",
            "Наладил взаимодействие между отделами: договорились о понятных правилах и сроках, убрали лишние согласования. Время на подготовку материалов значительно сократилось.",
          ],
          role_desc: "Обязанности:",
          roleList: [
            "Поддерживал документооборот, составлял расписания, помогал руководителю в различных задачах, участвовал в закупках и общался с клиентами для определения их потребностей.",
            "Участвовал в подготовке материалов для рекламных кампаний и продвижения продуктов компании.",
            "Участие в релизах и управление командой разработки.",
          ],
        },
        {
          company: "«Артсофте»",
          duration: "4 месяца",
          role: "Junior Python Developer",
          period: "Август 2016 — Ноябрь 2016 (4 месяца)",
          intro: "Поддерживал бэкенд на Python/Django под внутренние задачи.",
          role_desc: "Чем занимался:",
          roleList: [
            "Делал небольшие правки и багфиксы в бэкенде на Python/Django: views, urls, формы, админка.",
            "Писал простые CRUD-эндпоинты и обработчики форм, добавлял валидацию.",
            "Добавлял миграции и модели под мелкие фичи, правил SQL-запросы под задачи.",
          ],
        },
      ],
    },
    contact: {
      title: "Контакты",
      telegram: "Telegram",
      email: "Email",
      phone: "Телефон",
      qrText: "Сканируйте для связи в Telegram",
    },
  },
  en: {
    name: "Artem Ivanov",
    role: "IT Project Manager",
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      contact: "Contact",
    },
    cta: {
      contact: "Contact Me",
      download: "Download PDF",
    },
    hero: {
      title: "Why I'm a Great Fit",
      bullets: [
        "+20% new clients through redesign and new tech stack",
        "+25% repeat purchases via loyalty program",
        "−50% defects after releases through QA optimization",
        "Closed 800+ hours of tech debt without impacting contract projects",
        "Weekly sprints and transparent 12-month Gantt roadmap",
      ],
    },
    about: {
      title: "About Me",
      text: "IT Project Manager with experience implementing projects of various scales, including complex government contracts and commercial products, as well as crypto wallets and online service platforms. Successfully implement solutions that increase user engagement, optimize processes, reduce errors and resolution time, and minimize release delays.",
      text2:
        "I possess both technical and managerial background, detailed understanding and practice in project management across all lifecycle stages: from requirements gathering to implementation and operations, as well as skills in building cohesive teams focused on achieving common goals.",
      competencies: "Key Competencies and Tools:",
      competenciesList: [
        "Full-cycle project management: requirements gathering and analysis, task assignment, execution control, delivery to client.",
        "Budget management, resource planning, cost optimization.",
        "Organization and control of project tasks, effective project communication: client interaction, solution presentation and reporting.",
        "Preparation of technical, tender and project documentation: ST, FT, NFT, BT, TOR, API, architecture, PMI, manuals, specifications, cost estimates, project passport, feasibility study, resource plan.",
        "Application of Agile (Scrum, Kanban, SAFe, Lean) and classical (Waterfall, PMBOK) project methodologies.",
        "Experience designing integrations in monolithic and microservice architectures, understanding client-server interaction principles and software development lifecycle.",
        "Proficient with task tracking and planning tools (Jira, Confluence, MS Project, Google Sheets), as well as MS Office products (Excel, Access, Word, Outlook, PowerPoint, Visio).",
        "Application of requirements description notations and tools: Use Case, User Story, BPMN, UML, maintaining Gantt charts for task execution control and release deadline compliance.",
      ],
      location: "Location: Moscow",
      format: "Work Format: office/hybrid/remote",
    },
    skills: {
      title: "Skills",
      hard: "Hard Skills",
      soft: "Soft Skills",
      hardSkills: [
        "Releases & ITSM",
        "Sprints/Gantt",
        "Backlog/Prioritization",
        "Requirements/TOR/Docs",
        "QA & Defect Reduction",
        "Localization/New Markets",
        "Payments/FinServices",
        "Integrations/API/Swagger",
        "Telegram mini-apps",
        "iOS/Android",
        "Analytics/Metrics",
        "Presales/Tenders",
        "Gov Contracts/Compliance",
      ],
      softSkills: [
        "Leadership 20+",
        "Business-Dev Communication",
        "Results-Driven",
        "Systematic/Process-Oriented",
        "Risk Management",
        "Negotiations/Partnerships",
        "Client-Focused",
        "Time Management",
        "Facilitation/Meetings",
        "Multitasking",
        "Stress Resilience",
      ],
    },
    experience: {
      title: "Work Experience",
      readMore: "Read More",
      readLess: "Show Less",
      jobs: [
        {
          company: "HeadPoint",
          duration: "1 year 2 months",
          role: "IT Project Manager",
          period: "September 2024 — Present (1 year 2 months)",
          intro:
            "I work on the GIS ETSKD project (State Information System Unified Data Storage and Processing Center).",
          goals: "Main project goals and objectives:",
          goalsList: [
            "1. Security Enhancement. Ensuring a safe environment for Moscow residents through 24/7 monitoring and analysis.",
            "2. Urban Management Improvement. Providing a unified tool for agencies (Ministry of Internal Affairs, Emergency Services, municipal services) for remote management and action coordination.",
            "3. Smart City Development. Integrating the video surveillance system into a broader concept of digitalization and automation of urban processes.",
          ],
          role_desc: "My role includes:",
          roleList: [
            "Full IT development cycle: from business requirements to production release.",
            "Team of 25+ people.",
            "Presales - from presentations to signed contracts.",
            "Documentation - analytical notes, release documentation, acceptance protocols.",
            "Release management - weekly releases, hotfixes and major releases. Release documentation preparation, ITSM coordination and release support until successful completion.",
          ],
          achievements: "My achievements:",
          achievementsList: [
            "Streamlined project flow, transitioned to weekly sprints for better control. Maintaining Gantt chart for transparent understanding of 12-month release roadmap.",
            "Internal tasks stopped accumulating and became part of normal sprint.",
            "Closed tech debt on minor tasks (800+ hours) in a year without negative impact on major contract projects.",
            "Set up process to handle both contracts and improvements in parallel: transparent plans, predictable releases, risk discussions.",
          ],
        },
        {
          company: "Millennial Group",
          duration: "2 years 4 months",
          role: "IT Project Manager",
          period: "March 2022 — June 2024 (2 years 4 months)",
          intro:
            "Digital services platform: online psychologist, lawyer, veterinarian, astrology. Storefronts and personal accounts, mobile apps and Telegram mini-apps, payments and support.",
          achievements: "What I accomplished:",
          achievementsList: [
            "- Rewrote websites on new stack and updated design/UX - new client influx increased by 20%.",
            "- Launched finished product in new markets: localization, legal requirements, payment integration, support organization.",
            "- Signed 5+ partnership contracts - expanded reach and accelerated growth.",
          ],
          role_desc: "Role responsibilities:",
          roleList: [
            "- Responsible for both processes/timelines and product decisions - hypotheses, prioritization, UX and metrics.",
            "- Project portfolio management: 12+ websites, mobile apps, Telegram mini-apps.",
            "- Coordination team ~10 people (dev, design, marketing, DevOps).",
            "- Planning, budgeting, risk management across all directions.",
            "- Product launches in other countries: from requirements to production.",
          ],
          extra: "Separate project under company umbrella:",
          extraText:
            "Built crypto wallet in Telegram mini-app from scratch: formed idea, assembled team, released MVP, integrated financial services (banking operations, crypto-backed microloans) and brought to customer sale.",
        },
        {
          company: "Kremlin Store",
          duration: "1 year 5 months",
          role: "IT Project Manager",
          period: "October 2020 — February 2022 (1 year 5 months)",
          intro:
            "KinoStore - modern electronics store with wide assortment for filming, electric transport, sports and beauty, audio equipment and accessories.",
          achievements: "What I accomplished:",
          achievementsList: [
            "Launched personal account from scratch: clear order statuses, purchase history, customer profiles.",
            "Designed and implemented loyalty program and points system - repeat purchase share increased by 25%.",
            "Organized releases and QA - number of errors after updates decreased by 50%.",
          ],
          role_desc: "Role responsibilities:",
          roleList: [
            "Full cycle management for web products: design, testing, technical support.",
            "Store infrastructure modernization projects (cash registers, video surveillance).",
            "Launch of points system and personal account for store from scratch.",
          ],
        },
        {
          company: "Ceramic3d",
          duration: "9 months",
          role: "Junior Project Manager",
          period: "February 2018 — October 2018 (9 months)",
          intro: "Interior design software development company.",
          achievements: "Achievements:",
          achievementsList: [
            "Organized company participation in exhibitions: booth preparation, schedules, materials, presentations - product shown live, leads collected.",
            "Established interdepartmental interaction: agreed on clear rules and deadlines, removed unnecessary approvals. Material preparation time significantly reduced.",
          ],
          role_desc: "Responsibilities:",
          roleList: [
            "Maintained document flow, created schedules, assisted manager with various tasks, participated in procurement and communicated with clients to determine their needs.",
            "Participated in preparing materials for advertising campaigns and product promotion.",
            "Participated in releases and development team management.",
          ],
        },
        {
          company: "Artsofte",
          duration: "4 months",
          role: "Junior Python Developer",
          period: "August 2016 — November 2016 (4 months)",
          intro: "Maintained the Python/Django backend for internal features.",
          role_desc: "What I did:",
          roleList: [
            "Made small fixes and bugfixes in the Python/Django backend: views, urls, forms, admin.",
            "Built simple CRUD endpoints and form handlers, added validation.",
            "Created migrations and models for small features, tuned SQL queries for specific tasks.",
          ],
        },
      ],
    },
    contact: {
      title: "Contact",
      telegram: "Telegram",
      email: "Email",
      phone: "Phone",
      qrText: "Scan to connect on Telegram",
    },
  },
}

export default function ResumePage() {
  const [lang, setLang] = useState<"ru" | "en">("ru")
  const [expandedJobs, setExpandedJobs] = useState<number[]>([])
  const t = translations[lang]

  const toggleJob = (index: number) => {
    setExpandedJobs((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
        <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
          <div className="flex items-center gap-8">
            <div className="hidden md:block">
              <h2 className="text-lg font-semibold tracking-tight">{t.name}</h2>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </div>
            <nav className="flex gap-6">
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
              >
                {t.nav.skills}
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
              >
                {t.nav.experience}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
              >
                {t.nav.contact}
              </button>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setLang(lang === "ru" ? "en" : "ru")}
              className="h-9 w-9 transition-colors hover:bg-accent/10 hover:text-accent"
              aria-label="Toggle language"
            >
              <Globe className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrint}
              className="hidden gap-2 border-border/50 bg-transparent transition-colors hover:border-accent hover:text-accent md:flex print:hidden"
            >
              <Download className="h-4 w-4" />
              {t.cta.download}
            </Button>
            <Button
              size="sm"
              asChild
              className="hidden gap-2 bg-accent text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20 md:flex print:hidden"
            >
              <a href="https://t.me/artivtw" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                {t.cta.contact}
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-5xl px-4 py-16">
        {/* Hero Section */}
        <section className="mb-24">
          <div className="relative">
            <div className="absolute -left-4 top-0 h-24 w-1 bg-gradient-to-b from-accent to-transparent" />
            <h1 className="mb-3 text-6xl font-bold tracking-tight text-balance">{t.name}</h1>
            <p className="mb-8 text-3xl font-medium text-accent">{t.role}</p>

            <div className="flex flex-wrap gap-6 text-sm">
              <a
                href="https://t.me/artivtw"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-muted-foreground transition-all hover:text-accent"
              >
                <MessageCircle className="h-4 w-4 transition-transform group-hover:scale-110" />
                <span className="font-medium">@artivtw</span>
              </a>
              <a
                href="mailto:prmgartiv@gmail.com"
                className="group flex items-center gap-2 text-muted-foreground transition-all hover:text-accent"
              >
                <Mail className="h-4 w-4 transition-transform group-hover:scale-110" />
                <span className="font-medium">prmgartiv@gmail.com</span>
              </a>
              <a
                href="tel:+79995598322"
                className="group flex items-center gap-2 text-muted-foreground transition-all hover:text-accent"
              >
                <Phone className="h-4 w-4 transition-transform group-hover:scale-110" />
                <span className="font-medium">+7 999 559 83 22</span>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-24 scroll-mt-20">
          <h2 className="mb-8 text-4xl font-bold tracking-tight">{t.about.title}</h2>
          <div className="rounded-xl border border-border/50 bg-muted/30 p-8 shadow-sm transition-shadow hover:shadow-md">
            <div className="space-y-5 leading-relaxed text-muted-foreground">
              <p className="text-base">{t.about.text}</p>
              <p className="text-base">{t.about.text2}</p>
              <p className="pt-2 font-semibold text-foreground">{t.about.competencies}</p>
              <ul className="space-y-3">
                {t.about.competenciesList.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 space-y-2 border-t border-border/50 pt-6">
                <p className="font-semibold text-foreground">{t.about.location}</p>
                <p className="font-semibold text-foreground">{t.about.format}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-24 scroll-mt-20">
          <h2 className="mb-8 text-4xl font-bold tracking-tight">{t.skills.title}</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-border/50 bg-muted/30 p-6 shadow-sm transition-shadow hover:shadow-md">
              <h3 className="mb-5 text-xl font-semibold text-accent">{t.skills.hard}</h3>
              <div className="flex flex-wrap gap-2">
                {t.skills.hardSkills.map((skill, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-accent/50 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent transition-all hover:border-accent hover:bg-accent/20 hover:shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-border/50 bg-muted/30 p-6 shadow-sm transition-shadow hover:shadow-md">
              <h3 className="mb-5 text-xl font-semibold text-accent">{t.skills.soft}</h3>
              <div className="flex flex-wrap gap-2">
                {t.skills.softSkills.map((skill, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-accent/50 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent transition-all hover:border-accent hover:bg-accent/20 hover:shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-24 scroll-mt-20">
          <h2 className="mb-10 text-4xl font-bold tracking-tight">{t.experience.title}</h2>
          <div className="space-y-10">
            {t.experience.jobs.map((job, index) => (
              <div
                key={index}
                className="group relative rounded-xl border border-border/50 bg-muted/30 p-6 shadow-sm transition-all hover:border-accent/30 hover:shadow-md"
              >
                <div className="absolute -left-3 top-8 h-6 w-6 rounded-full border-4 border-background bg-accent shadow-lg shadow-accent/20" />
                <div className="mb-3 flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="text-2xl font-bold tracking-tight">{job.company}</h3>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                    {job.duration}
                  </span>
                </div>
                <p className="mb-2 text-lg font-semibold text-accent">{job.role}</p>
                <p className="mb-5 text-sm text-muted-foreground">{job.period}</p>

                <div className="space-y-4 text-foreground">
                  <p className="leading-relaxed">{job.intro}</p>

                  {expandedJobs.includes(index) && (
                    <div className="space-y-4 border-t border-border/50 pt-4">
                      {job.goals && (
                        <div>
                          <p className="mb-2 font-semibold text-foreground">{job.goals}</p>
                          <ul className="space-y-2 text-muted-foreground">
                            {job.goalsList?.map((goal, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                                <span className="text-sm leading-relaxed">{goal}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {job.role_desc && (
                        <div>
                          <p className="mb-2 font-semibold text-foreground">{job.role_desc}</p>
                          <ul className="space-y-2 text-muted-foreground">
                            {job.roleList?.map((role, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                                <span className="text-sm leading-relaxed">{role}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {job.achievements && (
                        <div>
                          <p className="mb-2 font-semibold text-foreground">{job.achievements}</p>
                          <ul className="space-y-2 text-muted-foreground">
                            {job.achievementsList?.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                                <span className="text-sm leading-relaxed">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {job.extra && (
                        <div className="rounded-lg border border-accent/20 bg-accent/5 p-4">
                          <p className="mb-2 font-semibold text-accent">{job.extra}</p>
                          <p className="text-sm leading-relaxed text-muted-foreground">{job.extraText}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {(job.goals || job.role_desc || job.extra) && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleJob(index)}
                    className="mt-4 gap-2 text-accent transition-all hover:bg-accent/10 hover:text-accent print:hidden"
                  >
                    {expandedJobs.includes(index) ? (
                      <>
                        <ChevronUp className="h-4 w-4" />
                        {t.experience.readLess}
                      </>
                    ) : (
                      <>
                        <ChevronDown className="h-4 w-4" />
                        {t.experience.readMore}
                      </>
                    )}
                  </Button>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-20">
          <h2 className="mb-8 text-4xl font-bold tracking-tight">{t.contact.title}</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-border/50 bg-muted/30 p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="space-y-6">
                <div>
                  <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    {t.contact.telegram}
                  </p>
                  <a
                    href="https://t.me/artivtw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-xl font-semibold text-accent transition-all hover:gap-4"
                  >
                    <MessageCircle className="h-6 w-6 transition-transform group-hover:scale-110" />
                    @artivtw
                  </a>
                </div>
                <div>
                  <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    {t.contact.email}
                  </p>
                  <a
                    href="mailto:prmgartiv@gmail.com"
                    className="group flex items-center gap-3 text-xl font-semibold transition-all hover:gap-4 hover:text-accent"
                  >
                    <Mail className="h-6 w-6 transition-transform group-hover:scale-110" />
                    prmgartiv@gmail.com
                  </a>
                </div>
                <div>
                  <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    {t.contact.phone}
                  </p>
                  <a
                    href="tel:+79995598322"
                    className="group flex items-center gap-3 text-xl font-semibold transition-all hover:gap-4 hover:text-accent"
                  >
                    <Phone className="h-6 w-6 transition-transform group-hover:scale-110" />
                    +7 999 559 83 22
                  </a>
                </div>
                <div className="flex gap-3 pt-6 print:hidden">
                  <Button
                    asChild
                    className="flex-1 bg-accent text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20"
                  >
                    <a href="https://t.me/artivtw" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      {t.cta.contact}
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handlePrint}
                    className="flex-1 border-border/50 bg-transparent transition-all hover:border-accent hover:text-accent"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    {t.cta.download}
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center rounded-xl border border-border/50 bg-muted/30 p-8 shadow-sm transition-shadow hover:shadow-md print:hidden">
              <div className="rounded-lg bg-white p-4 shadow-lg">
                <QRCode value="https://t.me/artivtw" size={180} />
              </div>
              <p className="mt-6 text-center text-sm font-medium text-muted-foreground">{t.contact.qrText}</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/50 py-8 print:hidden">
        <div className="container mx-auto max-w-5xl px-4 text-center text-sm text-muted-foreground">
          © 2025 {t.name}
        </div>
      </footer>
    </div>
  )
}
