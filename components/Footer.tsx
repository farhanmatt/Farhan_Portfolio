"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { personalInfo } from "@/data/portfolio";

const footerLinks = [
  { label: "About",      href: "#about"      },
  { label: "Projects",   href: "#projects"   },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact"    },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* Fixed back-to-top button */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className="fixed bottom-8 right-8 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.1] bg-stone-950/95 text-stone-400 backdrop-blur-sm transition-all duration-200 hover:border-orange-500/40 hover:text-orange-400 hover:bg-stone-900"
          >
            <ChevronUp size={17} />
          </motion.button>
        )}
      </AnimatePresence>

      <footer className="border-t border-white/[0.06] bg-surface/40 px-6 py-8">
        <div className="mx-auto max-w-6xl">
          {/* Main row */}
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            {/* Brand */}
            <button
              onClick={scrollToTop}
              className="font-heading text-xl font-bold text-stone-50 hover:text-orange-400 transition-colors duration-200"
            >
              {personalInfo.shortName}.
            </button>

            {/* Nav links */}
            <div className="flex items-center gap-6">
              {footerLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="font-body text-xs text-stone-500 transition-colors duration-200 hover:text-stone-300"
                >
                  {label}
                </a>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-5">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-stone-500 transition-colors duration-200 hover:text-orange-500"
              >
                <LinkedinIcon size={17} />
              </a>
              <span className="h-3 w-px bg-white/10" />
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-stone-500 transition-colors duration-200 hover:text-orange-500"
              >
                <GithubIcon size={17} />
              </a>
            </div>
          </div>

          {/* Divider + copyright */}
          <div className="mt-6 border-t border-white/[0.04] pt-5 flex justify-center">
            <p className="font-code text-xs text-stone-600">
              © {year} {personalInfo.name} — Designed &amp; built with care.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
