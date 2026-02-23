// ──────────────────────────────────────────────
// Portfolio Data - Single source of truth
// ──────────────────────────────────────────────

export interface CaseStudy {
  slug: string;
  label: string;
  title: string;
  images: string[];
  context: string;
  role: string;
  impact: string;
  stack: string[];
  links: { label: string; url: string }[];
}

export interface CompactProject {
  title: string;
  description: string;
  image: string;
  stack: string[];
  links: { label: string; url: string }[];
}

export interface ExperiencePosition {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  current?: boolean;
}

export interface ExperienceGroup {
  era: string;
  positions: ExperiencePosition[];
}

export interface TechDomain {
  category: string;
  technologies: string[];
  context: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SocialLink {
  label: string;
  url: string;
}

// ──────────────────────────────────────────────
// Personal Info
// ──────────────────────────────────────────────

export const personalInfo = {
  name: "Soheil Asami",
  title: "Senior Software Developer",
  email: "info@soeil.net",
  location: "Isfahan",
  resumeUrl: "/assets/SOHEIL_ASAMI_Resume.pdf",
  heroTagline:
    "The developer teams call when the deadline was yesterday. 30+ production apps shipped across AR, VR, mobile, and full-stack. I leave every codebase cleaner than I found it.",
  aboutParagraphs: [
    "I fix the problems that slow your team down. Need a system built from scratch? A legacy codebase rescued? An MVP out the door before funding runs out? That's what I do.",
    "My component libraries get adopted company-wide. My backends don't wake anyone up at 3am. My mobile apps pass store review the first time. The next dev who touches my code will actually understand it.",
    "I think in systems, not tickets. When I join a team, I find the architectural bottlenecks, set up patterns that kill whole classes of bugs, and write docs people actually read.",
    "Self-taught from day one. I was teaching programming before I ever got paid to write it. So yeah, I can explain a complex technical decision to a designer, a PM, or a stakeholder without making their eyes glaze over.",
  ],
};

// ──────────────────────────────────────────────
// Hero Roles (TypeWriter)
// ──────────────────────────────────────────────

export const heroRoles = [
  "Senior Full-Stack TypeScript Engineer",
  "Production-Shipped Mobile Developer",
  "Component Library Architect",
  "The One Who Fixes the Build",
];

// ──────────────────────────────────────────────
// Stats
// ──────────────────────────────────────────────

export const stats: Stat[] = [
  { value: "6+", label: "Years Shipping Code" },
  { value: "10+", label: "Client Teams Embedded In" },
  { value: "30+", label: "Apps Live in Production" },
];

// ──────────────────────────────────────────────
// Social Links
// ──────────────────────────────────────────────

export const socialLinks: SocialLink[] = [
  { label: "GitHub", url: "https://github.com/soheils2" },
  { label: "LinkedIn", url: "https://linkedin.com/in/soheil-asami/" },
  { label: "Telegram", url: "https://t.me/soeil" },
  { label: "WhatsApp", url: "https://wa.me/989215005194" },
  { label: "X / Twitter", url: "https://x.com/_soeil" },
];

// ──────────────────────────────────────────────
// Client Brands (Social Proof)
// ──────────────────────────────────────────────

export interface ClientBrand {
  name: string;
}

export const clientBrands: ClientBrand[] = [
  { name: "Tribes Digital" },
  { name: "Nestlé" },
  { name: "Chupachups" },
  { name: "Princess Yachts" },
  { name: "Manna Aero" },
  { name: "DemisCo" },
  { name: "ScoreMy" },
];

// ──────────────────────────────────────────────
// Navigation
// ──────────────────────────────────────────────

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

// ──────────────────────────────────────────────
// Featured Case Studies
// ──────────────────────────────────────────────

export const caseStudies: CaseStudy[] = [
  {
    slug: "chupachups",
    label: "AR Platform \u00B7 Tribes Digital",
    title: "Chupachups Brand Activation",
    images: ["/assets/portfolio-1.jpg", "/assets/portfolio-2.jpg", "/assets/portfolio-3.jpg"],
    context:
      "Live AR photo booth deployed to touchscreen kiosks for Chupachups brand activations. Campaign managers needed to swap brand assets, colours, and copy without developer intervention.",
    role:
      "Sole developer. Built the real-time AR camera pipeline with MediaPipe for face detection and landmark tracking, plus virtual backgrounds and face masks on Fabric.js canvas. Set up a headless CMS (Strapi 5) so campaign managers can swap experiences without code. CSS custom properties let them switch campaigns instantly, no rebuilds needed.",
    impact:
      "PWA with offline support, WCAG 2.1 AA compliant, deployed to live touchscreen event hardware at brand activations.",
    stack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "MediaPipe",
      "Fabric.js",
      "Strapi 5",
      "PostgreSQL",
      "PWA",
    ],
    links: [
      { label: "Live Site", url: "https://selfie.shoppar.io/chupachupsantalya" },
    ],
  },
  {
    slug: "acorex",
    label: "Component Library \u00B7 DemisCo",
    title: "ACoreX UI Framework",
    images: ["/assets/acorex-1.jpg", "/assets/acorex-2.jpg", "/assets/acorex-3.jpg"],
    context:
      "Enterprise Angular UI framework built from scratch to replace fragmented libraries that lacked RTL support, localisation, and performance at scale.",
    role:
      "I wrote the component library, not just used it. Angular 17 components with full RTL support, dark/light theming, strict TypeScript. I owned the form builder module: datetime pickers, country selectors, chip inputs, configurable dialogs.",
    impact:
      "Contributed to 100+ components, adopted across 10+ enterprise projects company-wide.",
    stack: [
      "Angular 17",
      "TypeScript",
      "RxJS",
      "RTL",
      "WebSocket",
      "Firestore",
    ],
    links: [{ label: "Live Docs", url: "https://ui.acorex.io" }],
  },
  {
    slug: "mirana",
    label: "Co-Founded \u00B7 Canada",
    title: "Mirana / VioraHR",
    images: ["/assets/mirana-1.jpg", "/assets/mirana-2.jpg", "/assets/mirana-3.jpg"],
    context:
      "AI-powered HR platform for attendance tracking and team communication. Configurable workflows, attendance automation, and internal messaging for companies replacing old HR systems.",
    role:
      "Co-Founder. Solo-architected the entire TypeScript stack: React Native app, Node.js/Express backend, PostgreSQL schema, Metabase analytics, OpenAI API integration. Managed full App Store and Google Play release cycle independently. Shipped multilingual MVP (EN/FA/FR).",
    impact:
      "5 enterprise clients within year one. Published to both app stores.",
    stack: [
      "React Native",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "OpenAI API",
      "FCM",
      "AWS",
    ],
    links: [],
  },
  {
    slug: "princess",
    label: "VR Catalogue \u00B7 Tribes Digital",
    title: "Princess Yachts",
    images: ["/assets/princess-1.jpg", "/assets/princess-2.jpg", "/assets/princess-3.jpg"],
    context:
      "Luxury VR/3D yacht catalogue built in React Native. Kept this app alive and stable through 3 years of iOS and Android OS updates.",
    role:
      "Improved Core Web Vitals: reduced LCP through asset caching, cut TTI via lazy-loaded routes and deferred non-critical assets. Refactored UI components and kept the application stable through API deprecations and platform changes.",
    impact:
      "Load time improved by 30%. Application maintained and stable across 3 years of OS updates.",
    stack: [
      "React Native",
      "TypeScript",
      "Redux",
      "iOS",
      "Android",
    ],
    links: [{ label: "Website", url: "https://princessyachts.com" }],
  },
];

// ──────────────────────────────────────────────
// Compact Projects
// ──────────────────────────────────────────────

export const compactProjects: CompactProject[] = [
  {
    title: "Manna Drone Delivery",
    description:
      "Runner-side app for live drone delivery. Real-time Firebase order tracking and location sync.",
    image: "/assets/manna-1.jpg",
    stack: ["React Native", "TypeScript", "Firebase"],
    links: [{ label: "Website", url: "https://manna.aero" }],
  },
  {
    title: "ScoreMy Financial",
    description:
      "Score-based financial advisory UI with interactive gauges, PDF generators, and real-time push notifications.",
    image: "/assets/score-1.jpg",
    stack: ["Svelte", "TypeScript", "Firebase", "FCM"],
    links: [{ label: "Website", url: "https://scoremy.co.uk" }],
  },
  {
    title: "SeeYoo Health",
    description:
      "Digital triage platform where AI assesses patient urgency and books GP appointments.",
    image: "/assets/seeyoo-1.jpg",
    stack: ["Flutter", "Dart", "GetX", "MVP"],
    links: [{ label: "Website", url: "https://consiliaris.co.uk" }],
  },
  {
    title: "POTS by SGTL",
    description:
      "Community gardening platform built from scratch with UX focused on non-technical users.",
    image: "/assets/pots-1.jpg",
    stack: ["React Native", "TypeScript", "Node.js", "Firebase"],
    links: [{ label: "Website", url: "https://potsbysgtl.com" }],
  },
  {
    title: "Freelance & Contracts",
    description:
      "Full-stack contract work including Ramzineh attendance system with IoT integration and banking-grade auth.",
    image: "/assets/freelance-1.jpg",
    stack: ["React Native", "Node.js", "PostgreSQL", "OAuth 2.0"],
    links: [],
  },
];

// ──────────────────────────────────────────────
// Experience (Grouped by Era)
// ──────────────────────────────────────────────

export const experienceGroups: ExperienceGroup[] = [
  {
    era: "Currently",
    positions: [
      {
        title: "Senior Full-Stack TypeScript Developer",
        company: "Tribes Digital",
        period: "Sep 2023 \u2013 Present",
        description:
          "Embedded remote developer working inside distributed client teams across timezones. Every engagement is a different client. I come in, architect the UI layer, and leave a codebase others can actually build on.",
        skills: ["React", "TypeScript", "Svelte", "React Native", "MediaPipe", "Strapi"],
        current: true,
      },
      {
        title: "Co-Founder & COO",
        company: "Mirana Group (VioraHR)",
        period: "Jun 2024 \u2013 Present",
        description:
          "AI-powered HR platform. Solo-architected the entire stack, managed App Store and Google Play releases independently.",
        skills: ["React Native", "Node.js", "PostgreSQL", "OpenAI API", "AWS"],
        current: true,
      },
    ],
  },
  {
    era: "2023 \u2013 2024",
    positions: [
      {
        title: "Flutter Developer",
        company: "SeeYoo Health (via Tribes)",
        period: "May \u2013 Sep 2024",
        description:
          "Digital triage platform. Established shared MVP architecture and GetX patterns across the dev team.",
        skills: ["Flutter", "Dart", "GetX", "MVP"],
      },
      {
        title: "Frontend Developer",
        company: "DemisCo",
        period: "Aug 2023 \u2013 Jun 2024",
        description:
          "Core contributor to ACoreX, an Angular UI framework with 100+ components used across 10+ enterprise projects.",
        skills: ["Angular 17", "TypeScript", "RxJS", "Component Library"],
      },
      {
        title: "React Native Developer",
        company: "POTS by SGTL",
        period: "Mar 2023 \u2013 Jan 2024",
        description:
          "Built full React Native app from scratch with Node.js backend. UX focused on non-technical users.",
        skills: ["React Native", "TypeScript", "Node.js", "Firebase"],
      },
    ],
  },
  {
    era: "2018 \u2013 2023",
    positions: [
      {
        title: "Software Developer Team Lead",
        company: "Matin-Ramz-Negar Group",
        period: "Sep 2022 \u2013 Mar 2023",
        description:
          "Led 3-person team building multi-platform attendance system with IoT integration. Brought in Scrum and improved delivery speed by 15%.",
        skills: ["React Native", "Node.js", "OAuth 2.0", "JWT", "IoT", "Scrum"],
      },
      {
        title: "Senior Full-Stack Developer",
        company: "Kherad Fan-Avaran Anahid",
        period: "Aug 2019 \u2013 Nov 2022",
        description:
          "Led the R&D department building a full HR and work management system. Pushed hard for automated testing and the bug rate dropped big time.",
        skills: ["React Native", "Node.js", "TypeScript", "Automated Testing"],
      },
      {
        title: "Junior Developer",
        company: "Kherad Fan-Avaran Anahid",
        period: "Jun 2018 \u2013 Mar 2019",
        description:
          "Production code from week one. Adopted TypeScript strict mode and CI/CD early. Introduced team's first automated tests.",
        skills: ["React Native", "TypeScript", "Node.js"],
      },
    ],
  },
  {
    era: "Foundation",
    positions: [
      {
        title: "Advanced Programming Teacher",
        company: "Ministry of Education",
        period: "Jun 2017 \u2013 Jun 2019",
        description:
          "Civilian service teaching OOP, HTML5, JavaScript, and clean code. Did this while working as a developer at the same time. Two of the most intense years of my life.",
        skills: ["JavaScript", "HTML5", "OOP", "Clean Code"],
      },
      {
        title: "B.Eng Electronic Engineering",
        company: "Islamic Azad University, Isfahan",
        period: "Graduated 2017",
        description: "",
        skills: [],
      },
    ],
  },
];

// ──────────────────────────────────────────────
// Technical Expertise
// ──────────────────────────────────────────────

export const techDomains: TechDomain[] = [
  {
    category: "Frontend",
    technologies: [
      "React 19",
      "Next.js",
      "Angular 17",
      "Vue.js",
      "Svelte",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
    ],
    context:
      "Built component libraries, AR camera pipelines, CMS-driven theming systems, and WCAG 2.1 accessible interfaces.",
  },
  {
    category: "Backend & APIs",
    technologies: [
      "Node.js",
      "Express",
      "NestJS",
      "PostgreSQL",
      "MongoDB",
      "Firebase",
      "Strapi 5",
      "OpenAI API",
    ],
    context:
      "Solo-architected full-stack platforms with OAuth 2.0 auth flows, real-time WebSocket sync, and REST API design.",
  },
  {
    category: "Mobile",
    technologies: [
      "React Native",
      "Flutter",
      "iOS",
      "Android",
      "App Store Connect",
      "Gradle",
      "Detox",
    ],
    context:
      "Published to both stores, maintained apps through 3-year lifecycles, built multilingual apps with RTL support.",
  },
  {
    category: "DevOps & Tools",
    technologies: [
      "Docker",
      "CI/CD",
      "Vercel",
      "AWS",
      "Railway",
      "Git",
      "PWA",
      "Service Workers",
    ],
    context:
      "End-to-end deployment pipelines, cloud infrastructure, offline-first architectures.",
  },
];
