import { Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { FadeIn } from "./ui/FadeIn";
import { SectionHeading } from "./ui/SectionHeading";
import { ContactForm } from "./ui/ContactForm";
import { personalInfo, socialLinks } from "../data/portfolio";

export function Contact() {
  return (
    <section id="contact" aria-label="Contact Soheil Asami" className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative">
        <SectionHeading label="Contact" title="Let's work together" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left — info */}
          <FadeIn>
            <div className="space-y-8">
              <p className="text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                Have a project in mind or need a senior developer embedded in your team?
                I'd love to hear about it. Reach out and I'll respond within 24 hours.
              </p>

              {/* Direct email — most prominent */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="group flex items-center gap-3 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/30 dark:hover:border-blue-500/20 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/10">
                  <Mail className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                    {personalInfo.email}
                  </p>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500">
                    Preferred, fastest response
                  </p>
                </div>
              </a>

              {/* Social links as cards */}
              <div className="space-y-2">
                <p className="text-xs font-semibold tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-3">
                  Also available on
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {socialLinks.map(({ label, url }) => (
                    <a
                      key={url}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between px-3 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/30 dark:hover:border-blue-500/20 transition-all duration-200"
                    >
                      <span className="text-sm text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-50 transition-colors">
                        {label}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-zinc-300 dark:text-zinc-600 group-hover:text-blue-500 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Response time — reduces anxiety */}
              <div className="flex items-center gap-2 p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
                <MessageCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <p className="text-xs text-emerald-600 dark:text-emerald-400">
                  Average response time: under 24 hours
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right — form */}
          <FadeIn delay={0.15}>
            <ContactForm />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
