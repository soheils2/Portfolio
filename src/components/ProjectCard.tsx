import { useState, useRef, useCallback } from "react";
import {
  ExternalLink,
  Sparkles,
  Monitor,
  Smartphone,
  Globe,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageSlider } from "./ui/ImageSlider";
import type { Project } from "../data/portfolio";

const ease = [0.25, 0.1, 0.25, 1] as const;

/* ─── Platform badge mapping ─── */
function platformMeta(platform: Project["platform"]) {
  switch (platform) {
    case "PWA":
      return { Icon: Globe, label: "PWA", bg: "bg-emerald-500/10", text: "text-emerald-600 dark:text-emerald-400", border: "border-emerald-500/20" };
    case "Native Mobile":
      return { Icon: Smartphone, label: "Native", bg: "bg-violet-500/10", text: "text-violet-600 dark:text-violet-400", border: "border-violet-500/20" };
    case "Web App":
      return { Icon: Monitor, label: "Web App", bg: "bg-blue-500/10", text: "text-blue-600 dark:text-blue-400", border: "border-blue-500/20" };
    case "Cross-Platform":
      return { Icon: Smartphone, label: "Cross", bg: "bg-amber-500/10", text: "text-amber-600 dark:text-amber-400", border: "border-amber-500/20" };
    default:
      return { Icon: Globe, label: platform, bg: "bg-zinc-500/10", text: "text-zinc-500", border: "border-zinc-500/20" };
  }
}

/* ═══════════════════════════════════════════════════════
   ProjectShowcase
   Desktop: left list + right detail panel (side-by-side)
   Mobile: accordion list — detail expands inline under row
   ═══════════════════════════════════════════════════════ */

export function ProjectShowcase({ projects }: { projects: Project[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageHovered, setImageHovered] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!listRef.current || !spotlightRef.current) return;
    const rect = listRef.current.getBoundingClientRect();
    spotlightRef.current.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    spotlightRef.current.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
    spotlightRef.current.style.opacity = "1";
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (spotlightRef.current) spotlightRef.current.style.opacity = "0";
  }, []);

  const active = projects[activeIndex];

  return (
    <>
      {/* ─── DESKTOP: side-by-side ─── */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_1.15fr]">
        {/* Left — Project list */}
        <div
          ref={listRef}
          className="relative rounded-2xl rounded-r-none overflow-hidden border border-zinc-200/80 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={spotlightRef}
            className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300"
            style={{ background: "radial-gradient(300px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(59,130,246,0.06), transparent 70%)" }}
          />
          <div className="relative z-20">
            {projects.map((project, i) => (
              <ProjectRow
                key={project.slug}
                project={project}
                index={i}
                isActive={i === activeIndex}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        </div>

        {/* Right — Detail panel */}
        <div className="relative rounded-2xl rounded-l-none overflow-hidden border border-zinc-200/80 dark:border-zinc-800 border-l-0 bg-white dark:bg-zinc-900/80 min-h-[520px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.slug}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease }}
              className="h-full flex flex-col"
            >
              <DetailPanel
                project={active}
                imageHovered={imageHovered}
                onImageHover={setImageHovered}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ─── MOBILE: accordion ─── */}
      <div className="lg:hidden rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
        {projects.map((project, i) => (
          <MobileAccordionItem
            key={project.slug}
            project={project}
            index={i}
            isActive={i === activeIndex}
            onClick={() => setActiveIndex((prev) => (prev === i ? prev : i))}
          />
        ))}
      </div>
    </>
  );
}

/* ─── Detail Panel — shared between desktop & mobile ─── */
function DetailPanel({
  project,
  imageHovered,
  onImageHover,
}: {
  project: Project;
  imageHovered: boolean;
  onImageHover: (h: boolean) => void;
}) {
  const { Icon, label: platformLabel, bg, text, border } = platformMeta(project.platform);

  return (
    <>
      {/* Image */}
      <div
        className="relative h-52 sm:h-60 lg:h-72 overflow-hidden flex-shrink-0"
        onMouseEnter={() => onImageHover(true)}
        onMouseLeave={() => onImageHover(false)}
        onTouchStart={() => onImageHover(true)}
        onTouchEnd={() => onImageHover(false)}
      >
        <div className="absolute inset-0">
          <ImageSlider images={project.images} alt={project.title} hovered={imageHovered} />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-900/95 via-white/20 dark:via-zinc-900/30 to-transparent pointer-events-none" />

        {/* Links */}
        {project.links.length > 0 && (
          <div className="absolute top-4 right-4 z-20 flex gap-2">
            {project.links.map(({ label, url }) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 min-h-[44px] rounded-full text-[10px] font-medium bg-white/90 dark:bg-zinc-900/90 text-zinc-700 dark:text-zinc-300 backdrop-blur-md border border-white/20 dark:border-zinc-700/50 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-200 shadow-lg shadow-black/10"
              >
                {label}
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            ))}
          </div>
        )}

        {/* Title pinned at bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-5 lg:px-6 pb-3 z-10">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400">
              {project.category}
            </span>
            <span className="text-zinc-300 dark:text-zinc-600 text-xs">|</span>
            <span className="text-[10px] font-medium tracking-wide text-zinc-500 dark:text-zinc-400">
              {project.company}
            </span>
            <span className={`flex items-center gap-1 px-2 py-0.5 text-[9px] font-semibold tracking-wide uppercase rounded-full ml-auto ${bg} ${text} border ${border}`}>
              <Icon className="w-2.5 h-2.5" />
              {platformLabel}
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-5 lg:px-6 pb-5 pt-2 overflow-y-auto">
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 mb-4">
          {project.headline}
        </p>

        {/* Deliverables */}
        <div className="mb-4">
          <p className="text-[10px] font-semibold tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-2">
            What I Shipped
          </p>
          <ul className="space-y-1.5">
            {project.delivered.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 + i * 0.05, duration: 0.25, ease }}
                className="flex items-start gap-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400"
              >
                <ChevronRight className="w-3 h-3 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Result */}
        <div className="flex items-start gap-2.5 mb-4 p-3 rounded-xl bg-gradient-to-r from-blue-500/5 to-violet-500/5 dark:from-blue-500/8 dark:to-violet-500/8 border border-blue-500/10">
          <Sparkles className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" />
          <p className="text-xs font-medium text-blue-600 dark:text-blue-400 leading-relaxed">
            {project.result}
          </p>
        </div>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[10px] font-mono font-medium rounded-full bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 border border-zinc-200/50 dark:border-zinc-700/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

/* ─── Desktop: Project Row ─── */
function ProjectRow({
  project,
  index,
  isActive,
  onClick,
}: {
  project: Project;
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const { Icon, label: platformLabel, bg, text, border } = platformMeta(project.platform);

  return (
    <motion.button
      onClick={onClick}
      className={`w-full text-left px-5 py-4 flex items-center gap-4 transition-colors duration-200 relative group ${
        index > 0 ? "border-t border-zinc-100 dark:border-zinc-800/60" : ""
      } ${isActive ? "bg-blue-500/5 dark:bg-blue-500/8" : "hover:bg-zinc-50 dark:hover:bg-zinc-800/30"}`}
      whileTap={{ scale: 0.995 }}
    >
      {/* Active bar */}
      <motion.div
        className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full bg-blue-500"
        initial={false}
        animate={{ opacity: isActive ? 1 : 0, scaleY: isActive ? 1 : 0.3 }}
        transition={{ duration: 0.25, ease }}
      />

      {/* Number */}
      <span className={`text-[10px] font-mono w-5 flex-shrink-0 tabular-nums ${
        isActive ? "text-blue-500 font-bold" : "text-zinc-300 dark:text-zinc-600"
      }`}>
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Thumbnail */}
      <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 border border-zinc-200/50 dark:border-zinc-700/50">
        <img src={project.images[0]} alt="" loading="lazy" draggable={false} className="w-full h-full object-cover select-none" />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h4 className={`text-sm font-semibold truncate transition-colors duration-200 ${
            isActive ? "text-zinc-900 dark:text-zinc-50" : "text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200"
          }`}>
            {project.title}
          </h4>
          <span className={`hidden sm:flex items-center gap-1 px-2 py-0.5 text-[9px] font-semibold tracking-wide uppercase rounded-full flex-shrink-0 ${bg} ${text} border ${border}`}>
            <Icon className="w-2.5 h-2.5" />
            {platformLabel}
          </span>
        </div>
        <p className="text-[11px] text-zinc-400 dark:text-zinc-500 truncate mt-0.5">
          {project.category} at {project.company}
        </p>
      </div>

      {/* Stack preview */}
      <div className="hidden md:flex items-center gap-1 flex-shrink-0">
        {project.stack.slice(0, 2).map((tech) => (
          <span key={tech} className="px-2 py-0.5 text-[9px] font-mono rounded-full bg-zinc-100 dark:bg-zinc-800/60 text-zinc-400 dark:text-zinc-500 border border-zinc-200/50 dark:border-zinc-700/30">
            {tech}
          </span>
        ))}
        {project.stack.length > 2 && (
          <span className="text-[9px] font-mono text-zinc-300 dark:text-zinc-600">+{project.stack.length - 2}</span>
        )}
      </div>

      {/* Arrow */}
      <ChevronRight className={`w-4 h-4 flex-shrink-0 transition-all duration-200 ${
        isActive ? "text-blue-500 translate-x-0" : "text-zinc-300 dark:text-zinc-600 -translate-x-1 group-hover:translate-x-0 group-hover:text-zinc-400"
      }`} />
    </motion.button>
  );
}

/* ─── Mobile: Accordion Item (row + inline detail) ─── */
function MobileAccordionItem({
  project,
  index,
  isActive,
  onClick,
}: {
  project: Project;
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const [imageHovered, setImageHovered] = useState(false);
  const { Icon, label: platformLabel, bg, text, border } = platformMeta(project.platform);

  return (
    <div className={index > 0 ? "border-t border-zinc-100 dark:border-zinc-800/60" : ""}>
      {/* Row header */}
      <button
        onClick={onClick}
        className={`w-full text-left px-4 py-3.5 flex items-center gap-3 transition-colors duration-200 relative ${
          isActive ? "bg-blue-500/5 dark:bg-blue-500/8" : "active:bg-zinc-50 dark:active:bg-zinc-800/30"
        }`}
      >
        {/* Active bar */}
        <motion.div
          className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-full bg-blue-500"
          initial={false}
          animate={{ opacity: isActive ? 1 : 0, scaleY: isActive ? 1 : 0.3 }}
          transition={{ duration: 0.25, ease }}
        />

        {/* Number */}
        <span className={`text-[10px] font-mono w-5 flex-shrink-0 tabular-nums ${
          isActive ? "text-blue-500 font-bold" : "text-zinc-300 dark:text-zinc-600"
        }`}>
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Thumbnail */}
        <div className="w-9 h-9 rounded-lg overflow-hidden flex-shrink-0 border border-zinc-200/50 dark:border-zinc-700/50">
          <img src={project.images[0]} alt="" loading="lazy" draggable={false} className="w-full h-full object-cover select-none" />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h4 className={`text-sm font-semibold truncate ${
              isActive ? "text-zinc-900 dark:text-zinc-50" : "text-zinc-600 dark:text-zinc-400"
            }`}>
              {project.title}
            </h4>
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-[10px] text-zinc-400 dark:text-zinc-500 truncate">
              {project.category}
            </span>
            <span className={`flex items-center gap-0.5 px-1.5 py-px text-[8px] font-semibold tracking-wide uppercase rounded-full ${bg} ${text} border ${border}`}>
              <Icon className="w-2 h-2" />
              {platformLabel}
            </span>
          </div>
        </div>

        {/* Chevron */}
        <motion.div
          animate={{ rotate: isActive ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronRight className={`w-4 h-4 ${isActive ? "text-blue-500" : "text-zinc-300 dark:text-zinc-600"}`} />
        </motion.div>
      </button>

      {/* Inline detail (accordion body) */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease }}
            className="overflow-hidden"
          >
            <div className="bg-white dark:bg-zinc-900/80">
              <DetailPanel
                project={project}
                imageHovered={imageHovered}
                onImageHover={setImageHovered}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
