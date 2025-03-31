import React from "react";
import { SectionTitle } from "./ui/SectionTitle";
import { ProjectCard } from "./ui/ProjectCard";

import {
  SiFlutter,
  SiMongodb,
  SiGetx,
  SiReact,
  SiFirebase,
  SiNodedotjs,
  SiTypescript,
  SiMetabase,
  SiThreedotjs,
  SiRedux,
  SiSvelte,
  SiJavascript,
  SiHtml5,
  SiExpo,
  SiTailwindcss,
  SiVite,
  SiCss3,
  SiVercel,
  SiPostgresql,
  SiPrisma,
  SiExpress,
  SiPostman,
} from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { DiAngularSimple, DiFirebase } from "react-icons/di";
import { FaAngular, FaAws } from "react-icons/fa";
import { PiFileCSharp, PiMicrosoftOutlookLogo } from "react-icons/pi";
import { TbBlender } from "react-icons/tb";
import { Md3dRotation } from "react-icons/md";
import { link, title } from "framer-motion/client";
import { m } from "framer-motion";
const projects = [
  {
    title: "Portfolio Website",
    position: "Designer & Developer",
    description:
      "Designed and developed a clean, minimal, and responsive portfolio website to showcase personal projects, skills, and experience. Built with modern web tools, prioritizing performance, accessibility, and simplicity. Deployed on Vercel with smooth page transitions and modular components.",
    images: [
      "/assets/portfolio-1.jpg",
      "/assets/portfolio-2.jpg",
      "/assets/portfolio-3.jpg",
      "/assets/portfolio-1.jpg",
    ],
    links: [
      { type: "website", url: "https://iam.soeil.net/" }, // Update with actual URL
      { type: "github", url: "https://github.com/soheils2/portfolio" }, // Optional
    ],
    stack: [
      { icon: SiVite, color: "#646cff" },
      { icon: SiHtml5, color: "#e34f26" },
      { icon: SiCss3, color: "#1572b6" },
      { icon: SiTypescript, color: "#3178c6" },
      { icon: SiVercel, color: "#" },
    ],
  },
  {
    title: "Princess Yachts App",
    position: "React Native Developer (Maintenance Team)",
    description:
      "Supported and maintained a catalog-based mobile application for Princess Yachts. Ensured long-term usability and stability of the app by resolving UI bugs, enhancing performance, and improving user experience. The app allows users to browse yacht models, view specifications, access marketing toolkits, and explore 360° yacht tours in a sleek, responsive interface.",
    images: [
      "/assets/princess-1.jpg",
      "/assets/princess-2.jpg",
      "/assets/princess-3.jpg",
      "/assets/princess-1.jpg",
    ],
    links: [{ type: "website", url: "https://www.princessyachts.com/" }],
    stack: [
      { icon: SiReact, color: "#61dafb" },
      { icon: SiRedux, color: "#764abc" },
      { icon: IoLogoFirebase, color: "#ffca28" },
      { icon: SiJavascript, color: "#f7df1e" },
      { icon: SiExpo, color: "#64748B" },
    ],
  },
  {
    title: "ScoreMy",
    position: "Front-End Developer / Maintenance",
    description:
      "Contributed to the ScoreMy adviser platform, focusing on front-end development and ongoing maintenance. Delivered key features such as PDF generators, interactive gauges, and scorecards. Prioritized performance optimization, responsive design improvements, visual appearance enhancements, and resolving UI/UX bugs.",
    images: [
      "/assets/score-2.jpg",
      "/assets/score-1.jpg",
      "/assets/score-2.jpg",
    ],
    links: [{ type: "website", url: "https://www.scoremy.co.uk/" }],
    stack: [
      { icon: SiSvelte, color: "#ff3e00" },
      { icon: SiJavascript, color: "#f7df1e" }, // used for PDF generation logic
      { icon: SiHtml5, color: "#e34f26" }, // for gauges and layout fixes
      { icon: IoLogoFirebase, color: "#ffca28" }, // for FCM
      { icon: PiMicrosoftOutlookLogo, color: "#0072c6" },
    ],
  },
  {
    title: "Manna Drone Delivery",
    position: "R-Native Developer (RunnerApp)",
    description:
      "Developed a drone delivery app using React Native, integrating with a custom backend and Firebase for real-time data...",
    images: [
      "/assets/manna-1.jpg",
      "/assets/manna-2.jpg",
      "/assets/manna-3.jpg",
      "/assets/manna-1.jpg",
    ],
    links: [{ type: "website", url: "https://www.manna.aero/" }],
    stack: [
      { icon: SiReact, color: "#61dafb" },
      { icon: SiNodedotjs, color: "#68a063" },
      { icon: SiRedux, color: "#764abc" },
      { icon: SiTypescript, color: "#3178c6" },
    ],
  },
  {
    title: "SEEYOO Health App",
    position: "Flutter Developer",
    description:
      "Developed Flutter pages using MVC architecture and GetX state management...",
    images: [
      "/assets/seeyoo-1.jpg",
      "/assets/seeyoo-2.jpg",
      "/assets/seeyoo-3.jpg",
      "/assets/seeyoo-4.jpg",
    ],
    links: [{ type: "website", url: "https://consiliaris.co.uk/" }],
    stack: [
      { icon: SiFlutter, color: "#02569B" },
      { icon: Md3dRotation, color: "#b52e31" }, // 3d technology
      { icon: SiRedux, color: "#764abc" },
      { icon: SiGetx, color: "#764abc" }, // using a placeholder color for GetX
    ],
  },
  {
    title:"POTS Gardening App",
    position: "R-Native Developer",
    description:
      "Developed a gardening app using React Native, integrating with APIs for plant care and community features. Focused on user experience and performance optimization.",
    images: [
      "/assets/pots-1.jpg",
      "/assets/pots-2.jpg",
      "/assets/pots-4.jpg",
      "/assets/pots-3.jpg",
      "/assets/pots-1.jpg",
    ],
    links: [
      { type: "website", url: "https://potsbysgtl.com/" },
    ],
    stack: [
      { icon: SiReact, color: "#61dafb" },
      { icon: SiNodedotjs, color: "#68a063" },
      { icon: SiRedux, color: "#764abc" },
      { icon: SiTypescript, color: "#3178c6" },
    ],
  },
  {
    title: "Mirana Attendance App",
    position: "Co-founder and Tech lead",
    description:
      "Led the development of a comprehensive attendance management system using Flutter, Metabase and Node.js...",
    images: [
      "/assets/mirana-1.jpg",
      "/assets/mirana-1.jpg",
      "/assets/mirana-2.jpg",
      "/assets/mirana-3.jpg",
    ],
    links: [
      // Add your links if available
    ],
    stack: [
      { icon: SiFlutter, color: "#02569B" },
      { icon: SiNodedotjs, color: "#68a063" },
      { icon: SiMongodb, color: "#47a248" },
      { icon: SiMetabase, color: "#29B6F6" },
    ],
  },
  {
    title: "Acorex Framework",
    position: "Front-End Team member",
    description:
      "UI framework based on angular. With over 50+ beautiful fully responsive and accessible components for everyone.",
    images: [
      "/assets/acorex-1.jpg",
      "/assets/acorex-2.jpg",
      "/assets/acorex-3.jpg",
      "/assets/acorex-1.jpg",
    ],
    links: [
      { type: "website", url: "https://acorexui.com/" },
      { type: "github", url: "https://www.npmjs.com/package/@acorex/core" },
    ],
    // Assuming you want to use the Firebase icon for the backend
    stack: [
      { icon: FaAngular, color: "#b52e31" },
      { icon: SiTypescript, color: "#29B6F6" }, // using a placeholder color for GetX
      { icon: SiNodedotjs, color: "#68a063" },
      { icon: SiTailwindcss, color: "#38bdf8" },
    ],
  },
  {
    title: "Freelance Projects",
    position: "Freelancer / Full-Stack Developer",
    description:
      "Delivered multiple freelance projects across diverse industries, building custom tools, landing pages, dashboards, and integrations. Leveraged a wide range of technologies including backend, DevOps, and design systems. Emphasized client satisfaction through efficient communication and scalable solutions.",
    images: [
      "/assets/freelance-3.jpg",
      "/assets/freelance-1.jpg",
      "/assets/freelance-2.jpg",
      "/assets/freelance-3.jpg",
    ],
    links: [
      // Leave empty or include links if available
    ],
    stack: [
      { icon: FaAws, color: "#ff9900" },
      { icon: SiPostgresql, color: "#336791" },
      { icon: SiPrisma, color: "#186997" },
      { icon: SiExpress, color: "#68a063" },
      { icon: SiPostman, color: "#ff6c37" },
    ],
  }  
];

export function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-20 bg-white dark:bg-gray-900 snap-start relative z-2"
    >
      <div className="container mx-auto px-8">
        <SectionTitle>Projects and Contributions</SectionTitle>

        {/* Responsive Grid of Cards */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
