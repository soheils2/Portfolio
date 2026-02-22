import { useState, useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "./ui/FadeIn";
import { ImageSlider } from "./ui/ImageSlider";
import type { CaseStudy as CaseStudyType } from "../data/portfolio";

interface CaseStudyProps {
  study: CaseStudyType;
  index: number;
}

export function CaseStudy({ study, index }: CaseStudyProps) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHovered(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <FadeIn delay={index * 0.08}>
      <motion.div
        ref={cardRef}
        className="group relative rounded-2xl overflow-hidden bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/20 dark:hover:border-blue-500/15 transition-all duration-500"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ y: -3 }}
        transition={{ duration: 0.3 }}
      >
        {/* Full-width image — taller, more visual impact */}
        <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
          <ImageSlider images={study.images} alt={study.title} hovered={hovered} />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />

          {/* Label badge on image */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-[10px] font-semibold tracking-wider uppercase rounded-full bg-white/90 dark:bg-zinc-900/90 text-blue-600 dark:text-blue-400 backdrop-blur-sm">
              {study.label}
            </span>
          </div>

          {/* Links on image */}
          {study.links.length > 0 && (
            <div className="absolute top-4 right-4 flex gap-2">
              {study.links.map(({ label, url }) => (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-medium bg-white/90 dark:bg-zinc-900/90 text-zinc-700 dark:text-zinc-300 backdrop-blur-sm hover:bg-blue-500 hover:text-white transition-all duration-200"
                >
                  {label}
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Content — clean, scannable */}
        <div className="p-5 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-2">
            {study.title}
          </h3>

          <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 mb-4 line-clamp-2">
            {study.context}
          </p>

          {/* Impact — highlighted */}
          <div className="flex items-start gap-2.5 mb-4 p-3 rounded-lg bg-blue-500/5 dark:bg-blue-500/8">
            <div className="w-0.5 h-full min-h-[16px] bg-blue-500 rounded-full flex-shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400 leading-relaxed">
              {study.impact}
            </p>
          </div>

          {/* Stack pills */}
          <div className="flex flex-wrap gap-1.5">
            {study.stack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-[10px] font-mono font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
              >
                {tech}
              </span>
            ))}
            {study.stack.length > 5 && (
              <span className="px-2 py-0.5 text-[10px] font-mono text-zinc-400">
                +{study.stack.length - 5}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </FadeIn>
  );
}
