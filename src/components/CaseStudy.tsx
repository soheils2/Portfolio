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
  const isEven = index % 2 === 0;

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
        className="group relative rounded-2xl overflow-hidden bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/30 dark:hover:border-blue-500/20 transition-all duration-500"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        {/* Hover glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className={`grid grid-cols-1 lg:grid-cols-2 ${isEven ? "" : "lg:direction-rtl"}`}>
          {/* Image — alternates sides on desktop */}
          <div className={`relative h-56 sm:h-64 lg:h-auto lg:min-h-[360px] overflow-hidden ${!isEven ? "lg:order-2" : ""}`}>
            <ImageSlider images={study.images} alt={study.title} hovered={hovered} />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-transparent pointer-events-none" />
          </div>

          {/* Content */}
          <div className={`relative p-6 sm:p-8 flex flex-col justify-center ${!isEven ? "lg:order-1" : ""}`}>
            {/* Label */}
            <p className="text-[11px] font-semibold tracking-widest uppercase text-blue-500 mb-3">
              {study.label}
            </p>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-3">
              {study.title}
            </h3>

            {/* Context — compact */}
            <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 mb-4 line-clamp-3">
              {study.context}
            </p>

            {/* Impact highlight */}
            <div className="flex items-start gap-3 mb-4 p-3 rounded-lg bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/10">
              <div className="w-1 h-full min-h-[20px] bg-blue-500 rounded-full flex-shrink-0" />
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                {study.impact}
              </p>
            </div>

            {/* Stack pills */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {study.stack.slice(0, 6).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-[10px] font-mono font-medium rounded-full bg-zinc-200/60 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                >
                  {tech}
                </span>
              ))}
              {study.stack.length > 6 && (
                <span className="px-2 py-0.5 text-[10px] font-mono text-zinc-400">
                  +{study.stack.length - 6}
                </span>
              )}
            </div>

            {/* Links */}
            {study.links.length > 0 && (
              <div className="flex gap-3">
                {study.links.map(({ label, url }) => (
                  <a
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors group/link"
                  >
                    {label}
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </FadeIn>
  );
}
