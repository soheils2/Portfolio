import { useState, useRef } from "react";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FadeIn } from "./ui/FadeIn";
import { ImageSlider } from "./ui/ImageSlider";
import type { CaseStudy as CaseStudyType } from "../data/portfolio";

interface CaseStudyProps {
  study: CaseStudyType;
  index: number;
  variant?: "featured" | "secondary";
}

export function CaseStudy({ study, index, variant = "secondary" }: CaseStudyProps) {
  if (variant === "featured") {
    return <FeaturedCard study={study} index={index} />;
  }
  return <SecondaryCard study={study} index={index} />;
}

/* ─── Featured Card — cinematic full-width showcase ─── */
function FeaturedCard({ study, index }: { study: CaseStudyType; index: number }) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [2, -2]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-2, 2]), { stiffness: 300, damping: 30 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  return (
    <FadeIn delay={index * 0.1}>
      <motion.div
        ref={cardRef}
        className="group relative rounded-2xl overflow-hidden cursor-pointer"
        style={{ rotateX, rotateY, perspective: 1200, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouse}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleLeave}
        onTouchStart={() => setHovered(true)}
        onTouchEnd={() => setHovered(false)}
      >
        {/* Background glow */}
        <motion.div
          className="absolute -inset-px rounded-2xl bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-blue-500/20 opacity-0 blur-sm"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        <div className="relative rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 transition-colors duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr]">
            {/* Image section — cinematic */}
            <div className="relative h-44 sm:h-52 lg:h-auto lg:min-h-[280px] overflow-hidden">
              <motion.div
                className="absolute inset-0"
                animate={{ scale: hovered ? 1.05 : 1 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <ImageSlider images={study.images} alt={study.title} hovered={hovered} />
              </motion.div>

              {/* Cinematic overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/5 lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/20 pointer-events-none" />

              {/* Floating label on image (mobile only) */}
              <div className="lg:hidden absolute bottom-0 left-0 right-0 p-5">
                <span className="inline-block px-3 py-1 text-[10px] font-semibold tracking-wider uppercase rounded-full bg-white/15 text-white/90 backdrop-blur-md border border-white/10 mb-2">
                  {study.label}
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-white">
                  {study.title}
                </h3>
              </div>

              {/* Link badges */}
              <LinkBadges study={study} />
            </div>

            {/* Content section */}
            <div className="relative p-4 sm:p-5 lg:p-6 flex flex-col justify-center">
              {/* Label */}
              <span className="hidden lg:inline-block w-fit px-3 py-1 text-[10px] font-semibold tracking-wider uppercase rounded-full bg-blue-500/8 text-blue-600 dark:text-blue-400 border border-blue-500/15 mb-2">
                {study.label}
              </span>

              {/* Title */}
              <h3 className="hidden lg:block text-xl sm:text-2xl lg:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-2">
                {study.title}
              </h3>

              {/* Context */}
              <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 mb-3 line-clamp-3">
                {study.context}
              </p>

              {/* Role */}
              <div className="mb-3">
                <p className="text-xs font-semibold tracking-wider uppercase text-zinc-400 dark:text-zinc-500 mb-1">
                  What I Built
                </p>
                <p className="text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 line-clamp-2">
                  {study.role}
                </p>
              </div>

              {/* Impact */}
              <ImpactBar impact={study.impact} />

              {/* Stack */}
              <StackPills stack={study.stack} max={7} />
            </div>
          </div>
        </div>
      </motion.div>
    </FadeIn>
  );
}

/* ─── Secondary Card — elegant vertical card ─── */
function SecondaryCard({ study, index }: { study: CaseStudyType; index: number }) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <FadeIn delay={index * 0.1}>
      <motion.div
        ref={cardRef}
        className="group relative h-full rounded-2xl overflow-hidden cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onTouchStart={() => setHovered(true)}
        onTouchEnd={() => setHovered(false)}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Hover glow */}
        <motion.div
          className="absolute -inset-px rounded-2xl bg-gradient-to-b from-blue-500/15 via-violet-500/10 to-transparent opacity-0 blur-sm"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <div className="relative h-full rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 transition-colors duration-300">
          {/* Image */}
          <div className="relative h-52 sm:h-56 overflow-hidden">
            <motion.div
              className="absolute inset-0"
              animate={{ scale: hovered ? 1.08 : 1 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <ImageSlider images={study.images} alt={study.title} hovered={hovered} />
            </motion.div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

            {/* Title on image */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <span className="inline-block px-2.5 py-0.5 text-[9px] font-semibold tracking-wider uppercase rounded-full bg-white/15 text-white/80 backdrop-blur-md border border-white/10 mb-2">
                {study.label}
              </span>
              <h3 className="text-xl font-bold tracking-tight text-white">
                {study.title}
              </h3>
            </div>

            <LinkBadges study={study} />
          </div>

          {/* Content */}
          <div className="p-5 sm:p-6">
            <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 mb-4 line-clamp-2">
              {study.context}
            </p>

            <ImpactBar impact={study.impact} />
            <StackPills stack={study.stack} max={5} />
          </div>
        </div>
      </motion.div>
    </FadeIn>
  );
}

/* ─── Shared sub-components ─── */

function LinkBadges({ study }: { study: CaseStudyType }) {
  if (!study.links.length) return null;
  return (
    <div className="absolute top-4 right-4 z-20 flex gap-2">
      {study.links.map(({ label, url }) => (
        <a
          key={url}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-2 min-h-[44px] rounded-full text-[10px] font-medium bg-white/90 dark:bg-zinc-900/90 text-zinc-700 dark:text-zinc-300 backdrop-blur-md border border-white/20 dark:border-zinc-700/50 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-200 shadow-lg shadow-black/10 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500"
        >
          {label}
          <ExternalLink className="w-2.5 h-2.5" />
        </a>
      ))}
    </div>
  );
}

function ImpactBar({ impact }: { impact: string }) {
  return (
    <div className="flex items-start gap-2.5 mb-3 p-2.5 rounded-lg bg-gradient-to-r from-blue-500/5 to-violet-500/5 dark:from-blue-500/8 dark:to-violet-500/8 border border-blue-500/10 dark:border-blue-500/10">
      <Sparkles className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" />
      <p className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400 leading-relaxed">
        {impact}
      </p>
    </div>
  );
}

function StackPills({ stack, max }: { stack: string[]; max: number }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {stack.slice(0, max).map((tech) => (
        <span
          key={tech}
          className="px-2.5 py-1 text-[10px] font-mono font-medium rounded-full bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 border border-zinc-200/50 dark:border-zinc-700/30"
        >
          {tech}
        </span>
      ))}
      {stack.length > max && (
        <span className="px-2.5 py-1 text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
          +{stack.length - max}
        </span>
      )}
    </div>
  );
}
