import { ArrowUp } from "lucide-react";
import { socialLinks } from "../data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="border-t border-zinc-200 dark:border-zinc-800">
      {/* CTA strip — strong last impression (recency bias) */}
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        <p className="text-sm text-zinc-400 dark:text-zinc-500 mb-2">
          Ready to start a project?
        </p>
        <a
          href="#contact"
          className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
        >
          Let's talk.
        </a>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-100 dark:border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-400 dark:text-zinc-500">
            &copy; {year} Soheil Asami. Built with React + TypeScript.
          </p>

          <div className="flex items-center gap-5">
            {socialLinks.map(({ label, url }) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-zinc-400 dark:text-zinc-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                {label}
              </a>
            ))}

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="ml-2 p-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-400 dark:text-zinc-500 hover:text-blue-500 hover:border-blue-500/30 dark:hover:text-blue-400 dark:hover:border-blue-500/30 transition-all"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
