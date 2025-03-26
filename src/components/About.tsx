
import {
  User2,
  Code2,
  Lightbulb,
  Laptop2,
  Hammer,
  Clock4,
  Smile,
  UserCheck,
  HeartHandshake,
  GlobeLock,
} from "lucide-react";
import { GoGoal } from "react-icons/go";
import { SectionTitle } from "./ui/SectionTitle";

import { BadgeCheck, Wrench, Globe2, Handshake } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  SiCplusplus,
  SiCss3,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiRedux,
  SiSvelte,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { FaFlutter } from "react-icons/fa6";
import { FaAngular, FaAws, FaNodeJs } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import { SkillCard } from "./ui/SkillCard";

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

const aboutSections = [
  {
    icon: BadgeCheck,
    title: "Developer at Heart",
    description: [
      "29 y/o full-stack developer with 6+ years of hands-on experience.",
      "Driven by curiosity, focused on clean, scalable systems.",
      "Always evolving with new technologies.",
    ],
    color: "bg-blue-600",
    image: "/assets/4hndsfullleft.png",
  },
  {
    icon: Hammer,
    title: "Build & Boost",
    description: [
      "New product? I’ll build it with the best-fit stack just for you.",
      "Got code? I’ll optimize your code for speed, structure, and design.",
      "Need consult? I’ll guide you to the smartest tech decisions.",
    ],
    color: "bg-purple-600",
    image: "/assets/4hndsfullright.png",
  },
  {
    icon: Globe2,
    title: "Timezone Friendly",
    description: [
      "Wherever you are, I adjust to your working hours.",
      "Real-time updates, no missed messages or delays.",
      "Your workflow stays smooth — across any time zone.",
    ],
    color: "bg-green-600",
    image: "/assets/4hndsfulldleft.png",
  },
  {
    icon: HeartHandshake,
    title: "Easy to Work With",
    description: [
      "Clear, calm, and collaborative.",
      "Soft skills that make shipping smooth.",
      "People-first mindset, always.",
    ],
    color: "bg-orange-600",
    image: "/assets/4hndsfulldright.png",
  },
];

export function About() {
  const [activeImage, setActiveImage] = useState("/assets/4hndsfull.png");
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
    return 4
    if (colCount === 8) return 3;
    if (colCount === 6) return 3;
    return 4;
  })();

  useEffect(() => {
    const section = document.getElementById("sskills");
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

  useEffect(() => {
    const skillsEl = document.getElementById("skills-layer");
    const aboutEl = document.getElementById("about");
    const skillsSection = document.getElementById("skills");
  
    let animationFrameId: number;
  
    const update = () => {
      if (!skillsEl || !aboutEl || !skillsSection) return;
  
      const aboutRect = aboutEl.getBoundingClientRect();
      const skillsRect = skillsSection.getBoundingClientRect();
      const scrollY = window.scrollY;
  
      const aboutHeight = aboutEl.offsetHeight;
      const windowHeight = window.innerHeight;
  
      const scrollProgress =
        1 - Math.max(0, Math.min(aboutRect.bottom / windowHeight, 1));
  
      if (skillsRect.top <= 0) {
        skillsEl.style.transform = `rotateX(0deg) scale(1) translateY(${aboutHeight}px)`;
        skillsEl.style.opacity = "1";
        skillsEl.style.pointerEvents = "auto";
      } else {
        const rotate = 15 - scrollProgress * 15;
        const scale = 0.9 + scrollProgress * 0.1;
        const opacity = 0.3 + scrollProgress * 0.7;
        const translateY =
          aboutHeight / 4 -
          scrollProgress * (aboutHeight / (numberOfRows > 3 ? 4 : 6)) +
          scrollProgress * (aboutHeight - skillsRect.top);
  
        skillsEl.style.transform = `rotateX(${rotate}deg) scale(${scale}) translateY(${translateY}px)`;
        skillsEl.style.opacity = `${opacity}`;
        skillsEl.style.pointerEvents = "none";
        skillsEl.style.zIndex = "0";
      }
  
      animationFrameId = requestAnimationFrame(update);
    };
  
    animationFrameId = requestAnimationFrame(update);
  
    return () => cancelAnimationFrame(animationFrameId);
  }, []);
  
  
  
  
  return (
    <section className="relative" style={{ perspective: "1000px" }}>
      <div
        id="skills-layer"
        className="fixed left-0 w-full min-h-screen z-0 pointer-events-none overflow-hidden"
        style={{
          transformOrigin: "top center",
          transform:
            "perspective(3000px) rotateX(35deg) rotateY(0deg) translateZ(0px)  scale(0.85)",
          transition: "transform 0.3s, opacity 0.3s",
          opacity: 0.3,
        }}
        
      >
        <section id="sskills" className="min-h-screen py-20 snap-start z-2 ">
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
                        ref={
                          rowIndex === 0 && skillIndex === 0 ? cardRef : null
                        }
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
      </div>
      <section
        id="about"
        className="min-h-screen  py-20 relative overflow-hidden snap-start"
      >
        {/* Background Elements */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.06]" />
      </div> */}

        <div className="container mx-auto px-6 relative">
          <img
            src={activeImage}
            alt="Soheil Asami"
            className="hidden md:block md:absolute w-full max-w-lg mx-auto md:top-[55%] lg:top-[60%]  md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
          />
          {/* About Section Cards */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-80 max-w-full mx-auto items-center">
            {aboutSections.map(
              ({ icon: Icon, title, description, color, image }, index) => (
                <div
                  onMouseEnter={() => setActiveImage(image)}
                  onMouseLeave={() => setActiveImage("/assets/4hndsfull.png")}
                  key={title}
                  className="relative group max-w-md md:w-full md:max-w-full mx-auto"
                >
                  {/* Card Content */}
                  <div
                    className={`relative p-6 border md:border-0 bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1`}
                  >
                    {/* Background Effect */}
                    <div
                      className={`absolute inset-0 ${color} rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}
                    />
                    <div className={`flex items-center mb-4 space-x-4 }`}>
                      {/* <div className={`flex items-center mb-4 space-x-4 ${index === 0 || index === 2 ? 'items-end flex-row-reverse' : ''}`}> */}
                      {/* Icon */}
                      <div className={`p-3 ${color} rounded-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className=" text-xl font-semibold text-gray-800 dark:text-gray-100">
                        {title}
                      </h3>
                    </div>
                    <ul className="text-sm sm:text-base list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-1">
                      {description.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  {index == 1 && (
                    <div className="block md:hidden w-full flex justify-center my-2">
                      <img
                        src="/assets/4hnds.png"
                        alt="Soheil Asami"
                        className="md:absolute mb-16 md:mb-0 w-full max-w-lg mx-auto md:top-1/3 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 transform transition-transform duration-500 "
                      />
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </section>
      <section
        id="skills"
        className="h-screen snap-start relative z-10 overflow-hidden"
        style={{ background: "transparent" }}
      />
    </section>
  );
}