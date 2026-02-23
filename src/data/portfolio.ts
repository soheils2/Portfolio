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
    slug: "shoppar-ar",
    label: "AR Platform \u00B7 Tribes Digital",
    title: "Shoppar AR Photo Booth",
    images: [
      "/assets/chupachups-platform-overview.png",
      "/assets/chupachups-kiosk-mall.png",
      "/assets/chupachups-ar-phone-mockup.png",
      "/assets/chupachups-nike-campaign.png",
      "/assets/chupachups-sticker-editor.png",
      "/assets/chupachups-kitkat-campaign.png",
      "/assets/chupachups-ar-selfie-cam.png",
    ],
    context:
      "White-label AR photo booth platform deployed to touchscreen kiosks for Chupachups, KitKat, and Nike brand activations. One codebase, infinite campaigns. Campaign managers swap the entire brand identity through the CMS without touching code.",
    role:
      "Sole developer on the full system. Built a real-time AR camera pipeline with MediaPipe face detection, landmark tracking, and selfie segmentation. Interactive face masks and sticker canvas via Fabric.js. Headless CMS in Strapi 5 with runtime theming through CSS custom properties. Campaign managers swap colours, fonts, backgrounds, masks, and copy, all live, no rebuilds.",
    impact:
      "PWA with offline support, WCAG 2.1 AA, deployed to live touchscreen kiosks at brand events across the UK and Turkey.",
    stack: [
      "React 19",
      "TypeScript",
      "MediaPipe",
      "Fabric.js",
      "Strapi 5",
      "PostgreSQL",
      "Tailwind CSS",
      "PWA",
      "Vite",
    ],
    links: [
      { label: "Live Demo", url: "https://selfie.shoppar.io/chupachupsantalya" },
    ],
  },
  {
    slug: "mirana",
    label: "Co-Founded \u00B7 Full Stack",
    title: "Mirana (VioraHR)",
    images: [
      "/assets/mirana-brand.jpg",
      "/assets/mirana-dashboard.jpg",
      "/assets/mirana-mobile-screens.jpg",
    ],
    context:
      "AI-powered HR platform I co-founded. Configurable attendance workflows, geofenced check-in/out, internal messaging, and an OpenAI-powered HR assistant. Built the entire product solo from database schema to app store submission.",
    role:
      "Co-Founder and sole architect. React Native mobile app, Node.js/Express API, PostgreSQL with Metabase analytics, OpenAI integration for an HR assistant. Managed the full release cycle: App Store Connect, Gradle builds, signing, versioning, staged rollouts. Shipped trilingual (EN/FA/FR).",
    impact:
      "5 enterprise clients in year one. Published to both app stores. Multilingual MVP live by April 2025.",
    stack: [
      "React Native",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "OpenAI API",
      "FCM",
      "AWS",
    ],
    links: [],
  },
  {
    slug: "acorex",
    label: "Library Author \u00B7 DemisCo",
    title: "ACoreX UI Framework",
    images: [
      "/assets/acorex-logo.jpg",
      "/assets/acorex-docs-light.jpg",
      "/assets/acorex-docs-dark.jpg",
    ],
    context:
      "Enterprise Angular component library I helped build from scratch. Not a consumer of a library, but the author. 100+ components with full RTL support, dark/light theming, and strict TypeScript. Used across 10+ enterprise projects internally.",
    role:
      "Core contributor writing the library itself. Owned the form builder module: datetime pickers with calendar and time wheel, country selectors, chip inputs, switch controls, configurable dialogs. Improved real-time data sync with a hybrid REST/WebSocket approach and Firestore for live updates.",
    impact:
      "100+ components, 2,700+ weekly npm downloads, adopted across the entire Demis holding group.",
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
    slug: "princess",
    label: "VR Catalogue \u00B7 Tribes Digital",
    title: "Princess Yachts",
    images: [
      "/assets/princess-multidevice.jpg",
      "/assets/princess-menu-gallery.jpg",
      "/assets/princess-showroom-vr.jpg",
    ],
    context:
      "Luxury VR/3D yacht catalogue in React Native. Not a quick build and move on, this was a 3-year maintenance engagement. I understood the intent behind code I didn't write, and refactored it when it needed it.",
    role:
      "Improved Core Web Vitals: reduced LCP through asset caching, cut TTI with lazy-loaded routes and deferred non-critical assets. Refactored UI components and kept the application stable through iOS/Android OS updates, API deprecations, and device fragmentation.",
    impact:
      "30% faster load time. Application stable and maintained across 3 years of platform changes.",
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
      "Runner-side app for Manna's live drone service. Real-time Firebase order sync, location tracking, and handoff confirmation between runner, hub, and dispatch.",
    image: "/assets/manna-runner-screens.jpg",
    stack: ["React Native", "TypeScript", "Firebase"],
    links: [{ label: "Website", url: "https://manna.aero" }],
  },
  {
    title: "SeeYoo Health",
    description:
      "Digital triage platform. AI assesses patient urgency and books GP appointments. Built the full patient journey UI in Flutter with MVP architecture.",
    image: "/assets/seeyoo-ai-triage.jpg",
    stack: ["Flutter", "Dart", "GetX", "MVP"],
    links: [{ label: "Website", url: "https://consiliaris.co.uk" }],
  },
  {
    title: "ScoreMy Financial",
    description:
      "Score-based financial advisory platform. Custom gauge components, animated scorecards, PDF report generators, and real-time push notifications.",
    image: "/assets/scoremy-dashboard.jpg",
    stack: ["Svelte", "TypeScript", "Firebase", "FCM"],
    links: [{ label: "Website", url: "https://scoremy.co.uk" }],
  },
  {
    title: "POTS by SGTL",
    description:
      "Community gardening app. Built the full React Native app from scratch with Node.js backend. UX designed for non-technical gardeners, not developers.",
    image: "/assets/pots-brand.jpg",
    stack: ["React Native", "TypeScript", "Node.js", "Firebase"],
    links: [{ label: "Website", url: "https://potsbysgtl.com" }],
  },
  {
    title: "Ramzineh & Contracts",
    description:
      "Led a 3-person team building a multi-platform attendance system with IoT integration, OAuth 2.0 auth, and banking-grade security standards.",
    image: "/assets/freelance-dashboards.jpg",
    stack: ["React Native", "Node.js", "OAuth 2.0", "IoT"],
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
