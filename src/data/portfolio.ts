// ──────────────────────────────────────────────
// Portfolio Data - Single source of truth
// ──────────────────────────────────────────────

export type PlatformType = "PWA" | "Native Mobile" | "Web App" | "Cross-Platform";

export interface Project {
  slug: string;
  category: string;        // e.g. "AR Platform", "Co-Founded"
  company: string;         // e.g. "Tribes Digital", "Self-Founded"
  title: string;
  platform: PlatformType;
  images: string[];
  headline: string;        // one-liner hook
  delivered: string[];     // bullet-point deliverables (what I shipped)
  result: string;          // quantified outcome
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
// Projects (Unified — ordered by recruiter impact)
// ──────────────────────────────────────────────

export const projects: Project[] = [
  {
    slug: "shoppar-ar",
    category: "AR Platform",
    company: "Tribes Digital",
    title: "Shoppar AR Photo Booth",
    platform: "PWA",
    images: [
      "/assets/chupachups-platform-overview.png",
      "/assets/chupachups-kiosk-mall.png",
      "/assets/chupachups-ar-phone-mockup.png",
      "/assets/chupachups-nike-campaign.png",
      "/assets/chupachups-sticker-editor.png",
      "/assets/chupachups-kitkat-campaign.png",
      "/assets/chupachups-ar-selfie-cam.png",
    ],
    headline:
      "White-label AR photo booth on live touchscreen kiosks. One codebase powers every brand campaign.",
    delivered: [
      "Real-time AR camera pipeline: MediaPipe face detection, landmark tracking, selfie segmentation",
      "Interactive face masks and sticker canvas with Fabric.js",
      "CMS-driven brand theming: colours, fonts, masks, copy swap live with zero rebuilds",
      "Offline-capable PWA, WCAG 2.1 AA accessible",
    ],
    result:
      "Deployed to kiosks at Chupachups, KitKat, and Nike events across the UK and Turkey. Sole developer on the full system.",
    stack: ["React 19", "TypeScript", "MediaPipe", "Fabric.js", "Strapi 5", "PostgreSQL", "Tailwind", "Vite"],
    links: [],
  },
  {
    slug: "mirana",
    category: "Co-Founded",
    company: "Mirana Group",
    title: "VioraHR",
    platform: "Native Mobile",
    images: [
      "/assets/mirana-brand.jpg",
      "/assets/mirana-dashboard.jpg",
      "/assets/mirana-mobile-screens.jpg",
    ],
    headline:
      "AI-powered HR platform I co-founded and built solo. From database schema to app store submission.",
    delivered: [
      "React Native app with geofenced check-in/out, messaging, and configurable attendance workflows",
      "Node.js/Express API with PostgreSQL and Metabase analytics dashboards",
      "OpenAI-powered HR assistant for employee queries",
      "Full release pipeline: App Store Connect, Gradle builds, staged rollouts, trilingual (EN/FA/FR)",
    ],
    result:
      "5 enterprise clients in year one. Published to both app stores. Multilingual MVP shipped solo.",
    stack: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "OpenAI API", "FCM", "AWS"],
    links: [],
  },
  {
    slug: "acorex",
    category: "Library Author",
    company: "DemisCo",
    title: "ACoreX UI Framework",
    platform: "Web App",
    images: [
      "/assets/acorex-logo.jpg",
      "/assets/acorex-docs-light.jpg",
      "/assets/acorex-docs-dark.jpg",
    ],
    headline:
      "Enterprise component library I helped author. 100+ components, full RTL, dark/light theming.",
    delivered: [
      "Core library contributor: datetime pickers, country selectors, chip inputs, configurable dialogs",
      "Full RTL support and dark/light theming with strict TypeScript",
      "Hybrid REST/WebSocket data sync with Firestore for live updates",
      "Published npm package with automated docs generation",
    ],
    result:
      "2,700+ weekly npm downloads. Adopted across 10+ enterprise projects in the Demis holding group.",
    stack: ["Angular 17", "TypeScript", "RxJS", "RTL", "WebSocket", "Firestore"],
    links: [{ label: "Live Docs", url: "https://ui.acorex.io" }],
  },
  {
    slug: "princess",
    category: "VR Catalogue",
    company: "Tribes Digital",
    title: "Princess Yachts",
    platform: "Native Mobile",
    images: [
      "/assets/princess-multidevice.jpg",
      "/assets/princess-menu-gallery.jpg",
      "/assets/princess-showroom-vr.jpg",
    ],
    headline:
      "Luxury VR/3D yacht catalogue. Not a sprint, a 3-year maintenance engagement.",
    delivered: [
      "Cut LCP with asset caching and lazy-loaded routes",
      "Refactored UI components and stabilised through iOS/Android OS updates",
      "Managed API deprecations and device fragmentation across 3 years",
    ],
    result:
      "30% faster load time. App stable through 3 years of platform changes without breaking.",
    stack: ["React Native", "TypeScript", "Redux", "iOS", "Android"],
    links: [{ label: "Website", url: "https://princessyachts.com" }],
  },
  {
    slug: "manna",
    category: "Drone Logistics",
    company: "Manna Aero",
    title: "Manna Drone Delivery",
    platform: "Native Mobile",
    images: [
      "/assets/manna-runner-screens.jpg",
      "/assets/manna-hero-drone.jpg",
      "/assets/manna-delivery-flow.jpg",
    ],
    headline:
      "Runner-side app for a live commercial drone delivery service.",
    delivered: [
      "Real-time order state machine with Firebase",
      "GPS-based handoff radius detection between runner, hub, and dispatch",
      "Push notification orchestration for the full delivery flow",
    ],
    result:
      "Live in production handling real drone deliveries. Sub-second state sync across all parties.",
    stack: ["React Native", "TypeScript", "Firebase", "Maps SDK"],
    links: [{ label: "Website", url: "https://manna.aero" }],
  },
  {
    slug: "seeyoo",
    category: "Health Tech",
    company: "Tribes Digital",
    title: "SeeYoo Health",
    platform: "Cross-Platform",
    images: [
      "/assets/seeyoo-ai-triage.jpg",
      "/assets/seeyoo-patient-flow.jpg",
      "/assets/seeyoo-multidevice.jpg",
    ],
    headline:
      "AI triage platform that assesses patient urgency and books GP appointments.",
    delivered: [
      "Patient-facing triage flow with symptom questionnaire engine",
      "Established shared MVP architecture and GetX patterns across the dev team",
      "Appointment booking interface with real-time availability",
    ],
    result:
      "AI-powered triage reducing GP wait times. Architecture patterns adopted team-wide.",
    stack: ["Flutter", "Dart", "GetX", "REST API"],
    links: [{ label: "Website", url: "https://consiliaris.co.uk" }],
  },
  {
    slug: "scoremy",
    category: "FinTech",
    company: "ScoreMy",
    title: "ScoreMy Financial",
    platform: "Web App",
    images: [
      "/assets/scoremy-dashboard.jpg",
      "/assets/scoremy-gauges.jpg",
    ],
    headline:
      "Score-based financial advisory platform. Custom charts, PDF reports, real-time push.",
    delivered: [
      "Full Svelte frontend shipped solo",
      "Custom SVG gauge components with animated score transitions",
      "PDF report generation pipeline",
      "Firebase push notification integration",
    ],
    result:
      "Entire frontend delivered solo. Custom charting and PDF generation live in production.",
    stack: ["Svelte", "TypeScript", "Firebase", "FCM"],
    links: [{ label: "Website", url: "https://scoremy.co.uk" }],
  },
  {
    slug: "pots",
    category: "Community App",
    company: "SGTL",
    title: "POTS by SGTL",
    platform: "Native Mobile",
    images: [
      "/assets/pots-brand.jpg",
      "/assets/pots-app-screens.jpg",
    ],
    headline:
      "Community gardening app designed for people who don't live on their phones.",
    delivered: [
      "Full React Native app from scratch with Node.js/Express backend",
      "Firebase auth and real-time sync",
      "UX flow designed for non-technical gardeners",
    ],
    result:
      "Shipped from zero to app store. UX validated with real gardening communities.",
    stack: ["React Native", "TypeScript", "Node.js", "Firebase"],
    links: [{ label: "Website", url: "https://potsbysgtl.com" }],
  },
  {
    slug: "ramzineh",
    category: "Team Lead",
    company: "Matin-Ramz-Negar",
    title: "Ramzineh Attendance",
    platform: "Cross-Platform",
    images: [
      "/assets/freelance-dashboards.jpg",
    ],
    headline:
      "IoT attendance system. Led a 3-person team with banking-grade security.",
    delivered: [
      "Architected multi-platform system across mobile and web",
      "Integrated IoT attendance hardware",
      "OAuth 2.0 auth flows, banking-grade security audit",
      "Introduced Scrum, improved sprint velocity 15%",
    ],
    result:
      "Delivered on time. Banking-grade security audit passed. 15% faster sprints after Scrum adoption.",
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
