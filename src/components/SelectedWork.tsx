import { useState } from "react";
import { ArrowUpRight, Code2, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "./ui/FadeIn";
import { CaseStudy } from "./CaseStudy";
import { caseStudies, compactProjects } from "../data/portfolio";

export function SelectedWork() {
  return (
    <section id="work" aria-label="Selected projects and case studies" className="py-24 md:py-32 relative">
      {/* Section background accent */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-blue-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-violet-500/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* ─── Section Header — Editorial style ─── */}
        <FadeIn className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/15">
              <Layers className="w-4 h-4 text-blue-500" />
            </div>
            <p className="text-sm font-medium tracking-widest uppercase text-blue-500">
              Selected Work
            </p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-3">
            Projects I've shipped
          </h2>
          <p className="text-base md:text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl">
            From AR camera systems to enterprise component libraries — each project built to solve real problems at scale.
          </p>
        </FadeIn>

        {/* ─── Featured Project — Full showcase ─── */}
        <CaseStudy study={caseStudies[0]} index={0} variant="featured" />

        {/* ─── Secondary Projects — 3 column grid ─── */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
          {caseStudies.slice(1).map((study, i) => (
            <CaseStudy key={study.slug} study={study} index={i + 1} variant="secondary" />
          ))}
        </div>

        {/* ─── More Projects — Refined minimal cards ─── */}
        <FadeIn className="mt-20 mb-10">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent" />
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
              <Code2 className="w-3 h-3 text-zinc-400" />
              <p className="text-[10px] font-semibold tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
                More Projects
              </p>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {compactProjects.map((project, i) => (
            <CompactCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Compact Project Card ─── */
function CompactCard({
  project,
  index,
}: {
  project: (typeof compactProjects)[number];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <FadeIn delay={index * 0.08}>
      <motion.div
        className="group relative h-full rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 transition-all duration-300"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Hover glow */}
        <motion.div
          className="absolute -inset-px rounded-xl bg-gradient-to-b from-blue-500/10 to-transparent opacity-0 -z-10"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Image with overlay content */}
        <div className="relative h-44 overflow-hidden">
          <motion.img
            src={project.image}
            alt={`${project.title} — project screenshot`}
            loading="lazy"
            draggable={false}
            className="w-full h-full object-cover select-none"
            animate={{ scale: hovered ? 1.08 : 1 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Title + stack on image */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h4 className="font-bold text-sm text-white mb-1.5">
              {project.title}
            </h4>
            <div className="flex flex-wrap gap-1">
              {project.stack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-1.5 py-0.5 text-[8px] font-mono rounded-full bg-white/15 text-white/80 backdrop-blur-sm border border-white/10"
                >
                  {tech}
                </span>
              ))}
              {project.stack.length > 3 && (
                <span className="px-1.5 py-0.5 text-[8px] font-mono text-white/50">
                  +{project.stack.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Link */}
          {project.links.length > 0 && (
            <a
              href={project.links[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-3 right-3 p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white/90 dark:bg-zinc-900/90 text-zinc-700 dark:text-zinc-300 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-blue-500 hover:text-white shadow-lg shadow-black/10 border border-white/20 dark:border-zinc-700/50 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 focus:opacity-100"
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        {/* Description */}
        <div className="p-4">
          <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>
      </motion.div>
    </FadeIn>
  );
}
