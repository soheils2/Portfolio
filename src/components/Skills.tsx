import React, { useEffect, useRef, useState } from "react";
import { SectionTitle } from "./ui/SectionTitle";
import { SkillCard } from "./ui/SkillCard";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiGraphql,
  SiMongodb,
  SiPrisma,
  SiCplusplus,
  SiGit,
  SiGithub,
  SiPostman,
  SiVite,
  SiVercel,
  SiPostgresql,
  SiSvelte,
} from "react-icons/si";
import { FaNodeJs, FaPython, FaJava, FaAws, FaAngular } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFirebase } from "react-icons/io5";
import { FaFlutter } from "react-icons/fa6";

const baseSkills = [
  {
    name: "React+Native",
    icon: SiReact,
    color: "#61dafb",
    url: "https://reactnative.dev/",
  },
  {
    name: "Flutter",
    icon: FaFlutter,
    color: "#02569B",
    url: "https://flutter.dev/",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#",
    url: "https://nextjs.org/",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178c6",
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "HTML",
    icon: SiHtml5,
    color: "#e34f26",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    icon: SiCss3,
    color: "#1572b6",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#ffd600",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Angular",
    icon: FaAngular,
    color: "#b52e31",
    url: "https://angular.io/",
  },
  {
    name: "TailwindCSS",
    icon: SiTailwindcss,
    color: "#38bdf8",
    url: "https://tailwindcss.com/",
  },
  {
    name: "Redux",
    icon: SiRedux,
    color: "#764abc",
    url: "https://redux.js.org/",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "#68a063",
    url: "https://nodejs.org/",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "#68a063",
    url: "https://expressjs.com/",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#336791",
    url: "https://www.postgresql.org/",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47a248",
    url: "https://www.mongodb.com/",
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    color: "#186997",
    url: "https://www.prisma.io/",
  },
  {
    name: "Firebase",
    icon: IoLogoFirebase,
    color: "#ffca28",
    url: "https://firebase.google.com/",
  },
  {
    name: "AWS",
    icon: FaAws,
    color: "#ff9900",
    url: "https://aws.amazon.com/",
  },
  {
    name: "C++",
    icon: SiCplusplus,
    color: "#00599c",
    url: "https://cplusplus.com/",
  },
  {
    name: "VS Code",
    icon: VscVscode,
    color: "#007acc",
    url: "https://code.visualstudio.com/",
  },
  { name: "Git", icon: SiGit, color: "#f34f29", url: "https://git-scm.com/" },
  {
    name: "Postman",
    icon: SiPostman,
    color: "#ff6c37",
    url: "https://www.postman.com/",
  },
  {
    name: "Svelte",
    icon: SiSvelte,
    color: "#ff3e00",
    url: "https://svelte.dev/",
  },
  { name: "Vite", icon: SiVite, color: "#646cff", url: "https://vitejs.dev/" },
  { name: "Vercel", icon: SiVercel, color: "#", url: "https://vercel.com/" },
];
const skills = [...baseSkills, ...baseSkills, ...baseSkills];
const originalSkillsLength = baseSkills.length;

export function Skills() {
  const [cols, setCols] = useState(3);
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const baseOffsets = useRef<number[]>([]); // <--- st

  const getCols = () => {
    if (screenWidth >= 1280) return 8;
    if (screenWidth >= 768) return 6;
    return 3;
  };

  const getGap = () => {
    if (screenWidth >= 640) return 24; // sm:gap-6 = 1.5rem = 24px
    return 16; // default gap-4 = 1rem = 16px
  };

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      setScreenWidth(width);

      if (width >= 1280) setCols(8);
      else if (width >= 1024) setCols(8);
      else if (width >= 768) setCols(6);
      else setCols(3);
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);

    return () => window.removeEventListener("resize", updateLayout);
  }, []);


  useEffect(() => {
    const step = 1.5;
    let animationFrameId: number;
    const initialScrollTop = window.scrollY;
  
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const delta = scrollTop - initialScrollTop;
  
      animationFrameId = requestAnimationFrame(() => {
        rowRefs.current.forEach((row, index) => {
          if (!row) return;
  
          const baseOffset = baseOffsets.current[index] || 0;
          const direction = index % 2 === 0 ? 1 : -1;
          const scrollOffset = baseOffset + delta * step * direction;
  
          row.scrollTo({
            left: scrollOffset,
            behavior: "smooth", // don't animate on every scroll to avoid "rubbery" feel
          });
        });
      });
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  useEffect(() => {
    if (!cardRef.current) return;

    const gap = getGap();
    const cardWidth = cardRef.current.offsetWidth;

    rowRefs.current.forEach((rowRef, rowIndex) => {
      if (rowRef) {
        const scrollIndex = rowIndex * cols + originalSkillsLength;
        const scrollLeft = scrollIndex * (cardWidth + gap);
        rowRef.scrollLeft = scrollLeft;

        baseOffsets.current[rowIndex] = scrollLeft; // <--- store for scroll effect
      }
    });
  }, [cols, screenWidth]);

  const calcCardWidth = () => {
    let gutter = 0;
    if (screenWidth >= 1280) gutter = 13 * 16; // 13rem in px
    else if (screenWidth >= 1024) gutter = 6 * 16;
    else if (screenWidth >= 768) gutter = 4 * 16;
    else gutter = 2 * 16;

    const width = `calc((100vw - ${gutter}px) / ${cols})`;
    return width;
  };
  const cardWidth = calcCardWidth();

  const numberOfRows = (() => {
    const colCount = getCols();
    if (colCount === 8) return 3;
    if (colCount === 6) return 4;
    return 8;
  })();
  useEffect(() => {
    const section = document.getElementById("skills");
    if (!section || !cardRef.current) return;
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const gap = getGap();
          const cardWidth = cardRef.current!.offsetWidth;
  
          rowRefs.current.forEach((rowRef, rowIndex) => {
            if (rowRef) {
              const scrollIndex = rowIndex * cols + originalSkillsLength;
              const scrollLeft = scrollIndex * (cardWidth + gap);
              rowRef.scrollLeft = scrollLeft;
              baseOffsets.current[rowIndex] = scrollLeft;
            }
          });
        }
      },
      {
        threshold: 0.1, // adjust if needed
      }
    );
  
    observer.observe(section);
  
    return () => observer.disconnect();
  }, [cols, screenWidth]);
  
  return (
    <section id="skills" className="min-h-screen py-20 snap-start ">
      <div className="container mx-auto px-6">
        {/* <SectionTitle>Skills</SectionTitle> */}

        <div className="max-w-6xl mx-auto mt-8 flex flex-col gap-4 sm:gap-6">
          {Array.from({ length: numberOfRows }).map((_, rowIndex) => (
            <div
              key={rowIndex}
              ref={(el) => (rowRefs.current[rowIndex] = el)}
              className="overflow-x-auto snap-x snap-mandatory justify-center overflow-y-hidden scrollbar-hide"
            >
              <div className="flex gap-4 sm:gap-6 py-8 sm:py-6 md:py-5">
                {skills.map((tech, skillIndex) => (
                  <div
                    key={`${tech.name}-${rowIndex}-${skillIndex}`}
                    ref={rowIndex === 0 && skillIndex === 0 ? cardRef : null}
                    className="flex-shrink-0 snap-start"
                    style={{
                      width: `calc((100% - ${getGap()}px * (${
                        getCols() - 1
                      })) / ${getCols()})`,
                    }}
                  >
                    <div
                      className="relative w-full"
                      style={{ paddingTop: "100%" }}
                    >
                      <div className="absolute top-0 left-0 w-full h-full">
                        <SkillCard
                          name={tech.name}
                          icon={tech.icon}
                          color={tech.color}
                          url={tech.url}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
