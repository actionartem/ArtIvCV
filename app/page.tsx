"use client"

import { useState } from "react"
import Image from "next/image"
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
      education: "Образование",
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
      location: "Место жительства: Москва",
      birthYear: "Год рождения: 1994",
      format: "Формат работы: офис/гибрид/удаленный",
    },
    competencies: {
      title: "Ключевые компетенции и инструменты",
      list: [
        "Ведение проектов полного цикла: сбор и анализ требований, постановка задач, контроль выполнения, сдача результатов заказчику.",
        "Управление бюджетом, ресурсное планирование, оптимизация затрат.",
        "Организация и контроль выполнения проектных задач, эффективная проектная коммуникация: взаимодействие с заказчиками, презентация решений и отчетности.",
        "Подготовка технической, тендерной и проектно-сметной документации: СТ, ФТ, НФТ, БТ, ТЗ, API, архитектура, ПМИ, руководства, ЧТЗ, НМЦК, Паспорт проекта, ТЭО, ресурсный план.",
        "Применение Agile (Scrum, Kanban, SAFe, Lean) и классических (Waterfall, PMBOK) проектных методологий.",
        "Опыт проектирования интеграций в монолитной и микросервисной архитектуре, понимание принципов клиент-серверного взаимодействия и жизненного цикла разработки ПО.",
        "Уверенное владение инструментами трекинга и планирования задач (Jira, Confluence, MS Project, Google Sheets), а также продуктами MS Office (Excel, Access, Word, Outlook, PowerPoint, Visio).",
        "Применение нотаций и инструментов описания требований Use Case, User Story, BPMN, UML, ведение диаграмм Ганта для контроля выполнения задач и соблюдения сроков релиза.",
      ],
    },
    education: {
      title: "Образование",
      items: [
        {
          institution: "Уральский федеральный университет имени первого Президента России Б.Н. Ельцина",
          location: "Екатеринбург",
          period: "09/2012 – 06/2016",
          degree: "Инженерия программного обеспечения",
        },
        {
          institution: "Уральский федеральный университет имени первого Президента России Б.Н. Ельцина",
          location: "Екатеринбург",
          period: "09/2014 – 06/2016",
          degree: "Государственное и муниципальное управление",
        },
      ],
    },
    experience: {
      title: "Опыт работы",
      readMore: "Подробнее",
      readLess: "Свернуть",
      jobs: [
        {
          company: "HeadPoint",
          avatar: {
            type: "image",
            src: "/experience/hp.jpg",
            alt: "Логотип HeadPoint",
          },
          duration: "1 год и 4 месяца",
          role: "Руководитель IT проектов",
          period: "Октябрь 2024 — сейчас (1 год и 4 месяца)",
          intro:
            "Я работаю на проекте ГИС ЕЦХД (государственная информационная система единый центр хранения и обработки данных).",
          role_desc: "В зоне ответственности:",
          roleList: [
            "Ведение полного цикла: сбор/уточнение требований, оценка, планирование, постановка задач, контроль исполнения, приемка и релиз.",
            "Управление кросс-функциональной командой 25+ человек: разработка, тестирование, аналитика, DevOps, поддержка.",
            "Коммуникации со стейкхолдерами: регулярные статусы, демо, фиксация договоренностей, управление ожиданиями и рисками.",
            "Документация: аналитические записки, релизные пакеты, протоколы приемки, описания изменений, регламенты.",
          ],
          achievements: "Результат:",
          achievementsList: [
            "Перестроил процесс delivery: перешли на 2-недельные спринты и план-график релизов на 12 месяцев.",
            "Благодаря моим перестройкам в процессах разработки и релизов избавились от накопившегося техдолга (800+ часов) без просадки по новому контракту.",
            "Стабилизировал релизный контур: еженедельные хотфиксы, контрактные релизы, управление инцидентами и согласование релизов в ITSM.",
          ],
        },
        {
          company: "Миллениал Групп",
          avatar: {
            type: "image",
            src: "/experience/mg.jpg",
            alt: "Логотип Миллениал Групп",
          },
          duration: "2 года",
          role: "IT Project manager",
          period: "Октябрь 2022 — Сентябрь 2024 (2 года)",
          intro:
            "Платформа цифровых услуг (психолог/юрист/ветеринар): лэндосы, личные кабинеты, мобильные приложения и Telegram mini-apps, платежи, поддержка.",
          achievements: "Результат:",
          achievementsList: [
            "Перезапуск фронта сайтов на новом стеке и обновление UX, благодаря этому получили прирост клиентов по B2C более чем на 20%.",
            "Запуск продукта на новых рынках: локализация, юридические требования, платежи, организация поддержки.",
            "Расширил каналы привлечения и усилил рост.",
          ],
          role_desc: "В зоне ответственности:",
          roleList: [
            "Управление портфелем: 12+ сайтов, мобильные приложения, Telegram mini-apps.",
            "Координация команды ~10 человек (dev, дизайн, маркетинг, DevOps), планирование загрузки и контроль сроков.",
            "Бюджетирование и риск-менеджмент.",
          ],
          extra: "Проект внутри компании: Telegram mini-app криптокошелек.",
          extraText:
            "Сформировали идею и требования, собрал команду, вывел MVP в прод. Интегрировал финсервисы: банковские операции и микрозаймы под залог криптовалюты (на стороне партнеров). Довел продукт до коммерческой сделки.",
        },
        {
          company: "Kremlin Store",
          avatar: {
            type: "image",
            src: "/experience/ks.jpg",
            alt: "Логотип Kremlin Store",
          },
          duration: "1 год и 9 месяцев",
          role: "IT Project manager",
          period: "Январь 2021 — Сентябрь 2022 (1 год и 9 месяцев)",
          intro:
            "E-commerce: электроника для съемки, электротранспорт, спорт и аудио. Веб-продукт + инфраструктурные улучшения магазинов.",
          achievements: "Результат:",
          achievementsList: [
            "Запуск личного кабинета с ключевыми сценариями (статусы, история заказов, профили).",
            "Спроектировал и внедрил программу лояльности. Благодаря этому выросло LTV клиента и доля повторных покупок.",
            "Навел порядок в релизах и QA, сократили количество багов после обновлений примерно вдвое.",
          ],
          role_desc: "В зоне ответственности:",
          roleList: [
            "Полный цикл разработки веб-продукта: постановка задач, планирование релизов, поддержка.",
            "Взаимодействие с бизнесом (маркетинг/продажи/операции) и подрядчиками.",
            "Проекты модернизации инфраструктуры: кассы, видеонаблюдение, процессы на точках.",
          ],
        },
        {
          company: "Ceramic3d",
          avatar: {
            type: "image",
            src: "/experience/c3.jpg",
            alt: "Логотип Ceramic3d",
          },
          duration: "4 месяца",
          role: "Junior project manager",
          period: "Июнь 2016 — Сентябрь 2016 (4 месяца)",
          intro: "Компания-разработчик ПО для дизайна интерьера.",
          achievements: "Достижения:",
          achievementsList: [
            "Организовал участие компании в выставках: стенд, материалы, презентации - продукт демонстрировали вживую и собирали лиды.",
            "Наладил взаимодействие между отделами: договорились о правилах и сроках, сократили количество согласований и время подготовки материалов.",
          ],
          role_desc: "В зоне ответственности:",
          roleList: [
            "Поддержка руководителя и команды: расписания, документооборот, закупки, коммуникации с клиентами.",
            "Участие в релизах и координации задач разработки.",
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
      education: "Education",
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
      location: "Location: Moscow",
      birthYear: "Year of birth: 1994",
      format: "Work Format: office/hybrid/remote",
    },
    competencies: {
      title: "Key Competencies and Tools",
      list: [
        "Full-cycle project management: requirements gathering and analysis, task assignment, execution control, delivery to client.",
        "Budget management, resource planning, cost optimization.",
        "Organization and control of project tasks, effective project communication: client interaction, solution presentation and reporting.",
        "Preparation of technical, tender and project documentation: ST, FT, NFT, BT, TOR, API, architecture, PMI, manuals, specifications, cost estimates, project passport, feasibility study, resource plan.",
        "Application of Agile (Scrum, Kanban, SAFe, Lean) and classical (Waterfall, PMBOK) project methodologies.",
        "Experience designing integrations in monolithic and microservice architectures, understanding client-server interaction principles and software development lifecycle.",
        "Proficient with task tracking and planning tools (Jira, Confluence, MS Project, Google Sheets), as well as MS Office products (Excel, Access, Word, Outlook, PowerPoint, Visio).",
        "Application of requirements description notations and tools: Use Case, User Story, BPMN, UML, maintaining Gantt charts for task execution control and release deadline compliance.",
      ],
    },
    education: {
      title: "Education",
      items: [
        {
          institution: "Ural Federal University named after the First President of Russia B. N. Yeltsin",
          location: "Yekaterinburg",
          period: "09/2012 – 06/2016",
          degree: "Software Engineering",
        },
        {
          institution: "Ural Federal University named after the First President of Russia B. N. Yeltsin",
          location: "Yekaterinburg",
          period: "09/2014 – 06/2016",
          degree: "State and Municipal Administration",
        },
      ],
    },
    experience: {
      title: "Work Experience",
      readMore: "Read More",
      readLess: "Show Less",
      jobs: [
        {
          company: "HeadPoint",
          avatar: {
            type: "image",
            src: "/experience/hp.jpg",
            alt: "HeadPoint logo",
          },
          duration: "1 year 4 months",
          role: "IT Project Manager",
          period: "October 2024 — Present (1 year 4 months)",
          intro:
            "I work on the GIS ETSKD project (State Information System Unified Data Storage and Processing Center).",
          role_desc: "Scope of responsibility:",
          roleList: [
            "End-to-end delivery: requirements gathering/clarification, estimation, planning, task assignment, execution control, acceptance, and release.",
            "Managing a cross-functional team of 25+ people: development, QA, analytics, DevOps, support.",
            "Stakeholder communications: regular status updates, demos, agreements, expectation and risk management.",
            "Documentation: analytical notes, release packages, acceptance protocols, change descriptions, regulations.",
          ],
          achievements: "Results:",
          achievementsList: [
            "Restructured delivery: moved to two-week sprints and a 12-month release plan.",
            "Process improvements in development and releases eliminated accumulated tech debt (800+ hours) without impacting the new contract.",
            "Stabilized the release pipeline: weekly hotfixes, contract releases, incident management, and release approvals in ITSM.",
          ],
        },
        {
          company: "Millennial Group",
          avatar: {
            type: "image",
            src: "/experience/mg.jpg",
            alt: "Millennial Group logo",
          },
          duration: "2 years",
          role: "IT Project Manager",
          period: "October 2022 — September 2024 (2 years)",
          intro:
            "Digital services platform (psychologist/lawyer/veterinarian): landing pages, personal accounts, mobile apps, Telegram mini-apps, payments, support.",
          achievements: "Results:",
          achievementsList: [
            "Relaunched the website front-end on a new stack and refreshed UX, increasing B2C clients by 20%+.",
            "Launched the product in new markets: localization, legal requirements, payments, support setup.",
            "Expanded acquisition channels and accelerated growth.",
          ],
          role_desc: "Scope of responsibility:",
          roleList: [
            "Portfolio management: 12+ websites, mobile apps, Telegram mini-apps.",
            "Coordinated a team of ~10 people (dev, design, marketing, DevOps), planned workload and deadlines.",
            "Budgeting and risk management.",
          ],
          extra: "Internal project: Telegram mini-app crypto wallet.",
          extraText:
            "Formed the idea and requirements, assembled the team, and shipped MVP to production. Integrated financial services: banking operations and crypto-backed microloans (via partners). Brought the product to a commercial deal.",
        },
        {
          company: "Kremlin Store",
          avatar: {
            type: "image",
            src: "/experience/ks.jpg",
            alt: "Kremlin Store logo",
          },
          duration: "1 year 9 months",
          role: "IT Project Manager",
          period: "January 2021 — September 2022 (1 year 9 months)",
          intro:
            "E-commerce: filming electronics, electric transport, sports, and audio. Web product plus store infrastructure improvements.",
          achievements: "Results:",
          achievementsList: [
            "Launched a personal account with key flows (statuses, order history, profiles).",
            "Designed and implemented a loyalty program that increased LTV and repeat purchases.",
            "Improved release and QA processes, cutting post-release bugs roughly in half.",
          ],
          role_desc: "Scope of responsibility:",
          roleList: [
            "Full web product lifecycle: task intake, release planning, and support.",
            "Business and vendor coordination (marketing/sales/operations).",
            "Infrastructure modernization projects: POS, video surveillance, and in-store processes.",
          ],
        },
        {
          company: "Ceramic3d",
          avatar: {
            type: "image",
            src: "/experience/c3.jpg",
            alt: "Ceramic3d logo",
          },
          duration: "4 months",
          role: "Junior Project Manager",
          period: "June 2016 — September 2016 (4 months)",
          intro: "Interior design software company.",
          achievements: "Achievements:",
          achievementsList: [
            "Organized participation in exhibitions: booth, materials, presentations - product demoed live and leads collected.",
            "Improved interdepartmental collaboration: agreed on rules and deadlines, reduced approvals and prep time.",
          ],
          role_desc: "Scope of responsibility:",
          roleList: [
            "Supported the manager and team: schedules, document flow, procurement, client communications.",
            "Participated in releases and coordinated development tasks.",
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

  const pdfPath = "/IvanovArtemCV.pdf"

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
                onClick={() => scrollToSection("education")}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
              >
                {t.nav.education}
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
              asChild
              className="hidden gap-2 border-border/50 bg-transparent text-foreground transition-colors hover:border-accent hover:text-foreground md:flex print:hidden"
            >
              <a href={pdfPath} download>
                <Download className="h-4 w-4" />
                {t.cta.download}
              </a>
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
              <div className="mt-8 space-y-2 border-t border-border/50 pt-6">
                <p className="font-semibold text-foreground">{t.about.location}</p>
                {t.about.birthYear && <p className="font-semibold text-foreground">{t.about.birthYear}</p>}
                {t.about.format && <p className="font-semibold text-foreground">{t.about.format}</p>}
              </div>
            </div>
          </div>
        </section>

        {/* Key Competencies Section */}
        <section id="skills" className="mb-24 scroll-mt-20">
          <h2 className="mb-8 text-4xl font-bold tracking-tight">{t.competencies.title}</h2>
          <div className="rounded-xl border border-border/50 bg-muted/30 p-8 shadow-sm transition-shadow hover:shadow-md">
            <ul className="space-y-4 text-muted-foreground">
              {t.competencies.list.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  <span className="text-sm leading-relaxed text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
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
                <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {job.avatar ? (
                      <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-border/60 bg-background shadow-sm shadow-accent/10">
                        {job.avatar.type === "image" ? (
                          <Image
                            src={job.avatar.src}
                            alt={job.avatar.alt}
                            width={48}
                            height={48}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <span className="text-lg font-semibold leading-none text-accent">
                            {job.avatar.text}
                          </span>
                        )}
                      </div>
                    ) : null}
                    <h3 className="text-2xl font-bold tracking-tight">{job.company}</h3>
                  </div>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                    {job.duration}
                  </span>
                </div>
                <p className="mb-2 text-lg font-semibold text-accent">{job.role}</p>
                <p className="mb-5 text-sm text-muted-foreground">{job.period}</p>

                <div className="space-y-4 text-foreground">
                  <p className="leading-relaxed">{job.intro}</p>

                  {job.introList?.length ? (
                    <ul className="space-y-2 text-muted-foreground">
                      {(job.introList ?? []).map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                          <span className="text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

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

        {/* Education Section */}
        <section id="education" className="mb-24 scroll-mt-20">
          <h2 className="mb-8 text-4xl font-bold tracking-tight">{t.education.title}</h2>
          <div className="space-y-6">
            {t.education.items.map((item, index) => (
              <div
                key={index}
                className="group relative rounded-xl border border-border/50 bg-muted/30 p-6 shadow-sm transition-all hover:border-accent/30 hover:shadow-md"
              >
                <div className="absolute -left-3 top-8 h-6 w-6 rounded-full border-4 border-background bg-accent shadow-lg shadow-accent/20" />
                <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight">{item.institution}</h3>
                    <p className="text-sm text-muted-foreground">{item.location}</p>
                  </div>
                  <span className="self-start rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent sm:self-auto">
                    {item.period}
                  </span>
                </div>
                <p className="mt-4 text-base font-semibold text-foreground">{item.degree}</p>
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
                    asChild
                    className="flex-1 border-border/50 bg-transparent text-foreground transition-all hover:border-accent hover:text-foreground"
                  >
                    <a href={pdfPath} download>
                      <Download className="mr-2 h-4 w-4" />
                      {t.cta.download}
                    </a>
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
