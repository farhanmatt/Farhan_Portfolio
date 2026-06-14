"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const navLinks = [
  { label: "About",      href: "#about"      },
  { label: "Skills",     href: "#skills"     },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects"   },
  { label: "Education",  href: "#education"  },
  { label: "Contact",    href: "#contact"    },
];

const SECTION_IDS = navLinks.map((l) => l.href.slice(1));

export default function Navbar() {
  const [isOpen, setIsOpen]           = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const [activeSection, setActive]    = useState("");

  /* Scroll-up detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Scroll spy — activates section whose top has passed 35% down viewport */
  useEffect(() => {
    const measure = () => {
      const threshold = window.scrollY + window.innerHeight * 0.35;
      let current = "";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= threshold) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", measure, { passive: true });
    measure();
    return () => window.removeEventListener("scroll", measure);
  }, []);

  /* Lock body scroll when mobile overlay is open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) setTimeout(() => target.scrollIntoView({ behavior: "smooth" }), 50);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-stone-950/95 backdrop-blur-md border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Brand */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="font-heading text-2xl font-bold text-stone-50 select-none hover:text-orange-400 transition-colors duration-200"
          >
            {personalInfo.shortName}.
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map(({ label, href }) => {
              const isActive = activeSection === href.slice(1);
              return (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                  className={`group relative text-sm font-body transition-colors duration-200 ${
                    isActive ? "text-orange-400" : "text-stone-400 hover:text-stone-50"
                  }`}
                >
                  {label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-orange-500 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-stone-400 hover:text-stone-50 transition-colors p-1"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Full-screen mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-stone-950 flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-white/[0.06]">
              <span className="font-heading text-2xl font-bold text-stone-50">
                {personalInfo.shortName}.
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-stone-400 hover:text-stone-50 transition-colors p-1"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col justify-center flex-1 px-8 gap-0">
              {navLinks.map(({ label, href }, i) => {
                const isActive = activeSection === href.slice(1);
                return (
                  <motion.button
                    key={href}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.055, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => handleNavClick(href)}
                    className={`group flex items-center gap-4 py-3.5 border-b border-white/[0.04] text-left ${
                      isActive ? "text-orange-400" : ""
                    }`}
                  >
                    <span className="font-code text-[11px] text-orange-500/50 w-6 shrink-0 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-heading text-3xl font-bold transition-colors duration-200 ${
                        isActive ? "text-orange-400" : "text-stone-50 group-hover:text-orange-400"
                      }`}
                    >
                      {label}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Footer strip */}
            <div className="px-8 pb-10 pt-4 text-stone-500 font-code text-xs border-t border-white/[0.04]">
              {personalInfo.email}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
