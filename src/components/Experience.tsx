import React from "react";
import { SectionTitle } from "./ui/SectionTitle";
import { ExperienceCard } from "./ui/ExperienceCard";

const experiences = [
  {
    title: "Chief Operating Officer (COO)",
    company: "Mirana Group",
    period: "Jun 2024 – Present",
    description: `Led the successful design and launch of the Mirana app, transitioning it from concept to production. 
    Improved collaboration across teams with Agile implementation, reducing development cycles by 20%. 
    Rolled out key feature sets that boosted user engagement and retention, increasing the user base by 25% in the first quarter.`,
    skills: ["Leadership", "Agile", "UI/UX", "Team Management", "Product Strategy"],
  },
  {
    title: "Frontend Developer",
    company: "TRIBES",
    period: "Sep 2023 – Present",
    description: `Led the React Native frontend for at least four major projects with a focus on scalability and performance. 
    Proposed and implemented improved state management strategies, reducing load times by 30%.`,
    skills: ["React Native", "JavaScript", "Performance Optimization", "State Management"],
  },
  {
    title: "Flutter Developer",
    company: "SEEYOO Health",
    period: "May 2024 – Sep 2024",
    description: `Built Flutter UI pages using MVP architecture and GetX for state management. 
    Enhanced app performance and UI consistency, and introduced modular code structure through MVP adoption.`,
    skills: ["Flutter", "Dart", "GetX", "MVP", "UI/UX"],
  },
  {
    title: "Full Stack Developer",
    company: "DemisCo",
    period: "Aug 2023 – Jun 2024",
    description: `Built cross-platform mobile apps with Flutter and web applications using Angular. 
    Built backend systems using Node.js and Firebase. 
    Recommended Firebase Firestore for real-time updates, improving synchronization and user experience.`,
    skills: [ "Angular","Flutter", "Node.js", "Firebase", "API Design", "Cross-platform Development"],
  },
  {
    title: "Freelance Software Developer",
    company: "Self-Employed",
    period: "Mar 2023 – Jan 2024",
    description: `Delivered multi-domain software projects including HTML/DOM applications for embedded systems. 
    Built full-stack solutions with React Native, Flutter, and Node.js using WebSocket and REST.`,
    skills: ["React Native", "Flutter", "Node.js", "WebSocket", "REST API"],
  },
  {
    title: "Software Developer Team Lead",
    company: "Matin-ramz-negar Group",
    period: "Sep 2022 – Mar 2023",
    description: `Managed a sub-team in developing the cross-platform ramzineh attendance app. 
    Introduced a new task writing standard and Scrum methodology to boost team efficiency.`,
    skills: ["Team Leadership", "Scrum", "Cross-platform", "Process Improvement"],
  },
  {
    title: "Full Stack Developer",
    company: "Kherad Fan-Avaran Anahid Co.",
    period: "Aug 2019 – Nov 2022",
    description: `Progressed from junior to senior full-stack developer. 
    Specialized in backend development and native mobile apps using React Native and Flutter.`,
    skills: ["Backend", "Flutter", "React Native", "Full Stack", "Server Implementation"],
  },
  {
    title: "Junior Flutter Developer",
    company: "Kherad Fan-Avaran Anahid Co.",
    period: "Jun 2018 – Mar 2019",
    description: `Contributed to Flutter application development and deployment. 
    Proposed automated testing solutions, improving production stability.`,
    skills: ["Flutter", "Testing", "Bug Fixing", "Mobile Deployment"],
  },
];


export function Experience() {
  return (
    <section id="experience" className="py-20 snap-start">
      <div className="container mx-auto px-8">
        <SectionTitle>Experience</SectionTitle>
        <div className="relative border-l-2 border-blue-600 dark:border-blue-500 max-w-5xl mx-auto space-y-10">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
