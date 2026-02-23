import { useState, useEffect, useCallback, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ui/ThemeToggle";
import { navLinks, socialLinks } from "../data/portfolio";

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export function Navbar({ isDark, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Intersection Observer — includes hero so no nav is active on page load
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // When hero is visible, clear active state
            if (entry.target.id === "hero") {
              setActiveSection("");
            } else {
              setActiveSection(`#${entry.target.id}`);
            }
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    // Observe hero section too
    const heroEl = document.getElementById("hero");
    if (heroEl) observer.observe(heroEl);

    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Escape key closes mobile nav
  useEffect(() => {
    if (!mobileOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        mobileToggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  // Focus trap in mobile nav
  useEffect(() => {
    if (!mobileOpen || !mobileNavRef.current) return;
    const nav = mobileNavRef.current;
    const focusable = nav.querySelectorAll<HTMLElement>(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    nav.addEventListener("keydown", trap);
    // Auto-focus first link
    first.focus();
    return () => nav.removeEventListener("keydown", trap);
  }, [mobileOpen]);

  // Click-to-deselect: clicking active nav item scrolls to top
  const handleDesktopClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (activeSection === href) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveSection("");
      }
    },
    [activeSection]
  );

  const handleMobileNavClick = useCallback(
    (href: string) => {
      if (activeSection === href) {
        setMobileOpen(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveSection("");
        return;
      }
      setMobileOpen(false);
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    },
    [activeSection]
  );

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 dark:bg-[#0a0a0b]/80 backdrop-blur-md border-b border-zinc-200/60 dark:border-zinc-800/60"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
          <a
            href="#"
            className="text-sm font-semibold tracking-wider uppercase text-zinc-900 dark:text-zinc-50 hover:text-blue-500 dark:hover:text-blue-400 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 rounded-md"
          >
            SA
            <span className="hidden sm:inline ml-1 font-normal tracking-normal normal-case text-zinc-400 dark:text-zinc-500">
              / Soheil Asami
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleDesktopClick(e, href)}
                className="relative px-3 py-2 text-sm transition-colors duration-200 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 rounded-md"
              >
                <span className={
                  activeSection === href
                    ? "text-zinc-900 dark:text-zinc-50"
                    : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                }>
                  {label}
                </span>
                {activeSection === href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-500 rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            ))}
            <div className="ml-4 pl-4 border-l border-zinc-200 dark:border-zinc-800">
              <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
            </div>
          </div>

          {/* Mobile toggle — min 44px touch target */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
            <button
              ref={mobileToggleRef}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative z-[60] p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 rounded-md"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen mobile overlay with focus trap */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            ref={mobileNavRef}
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[55] md:hidden bg-white dark:bg-[#0a0a0b] flex flex-col"
          >
            {/* Navigation links — centered */}
            <div className="flex-1 flex flex-col items-center justify-center gap-2 px-8">
              {navLinks.map(({ href, label }, i) => (
                <motion.button
                  key={href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.3 }}
                  onClick={() => handleMobileNavClick(href)}
                  className={`text-3xl font-semibold tracking-tight py-3 min-h-[44px] transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 rounded-lg ${
                    activeSection === href
                      ? "text-blue-500"
                      : "text-zinc-900 dark:text-zinc-50 hover:text-blue-500 dark:hover:text-blue-400"
                  }`}
                >
                  {label}
                </motion.button>
              ))}
            </div>

            {/* Bottom — social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="px-8 pb-12 flex items-center justify-center gap-6"
            >
              {socialLinks.slice(0, 3).map(({ label, url }) => (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs min-h-[44px] flex items-center py-2 px-3 text-zinc-400 dark:text-zinc-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 rounded-md"
                >
                  {label}
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
