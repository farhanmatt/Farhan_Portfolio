"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Download, ChevronDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { personalInfo, ticker, typingTexts } from "@/data/portfolio";

/* Double the ticker array so the seamless loop works */
const tickerItems = [...ticker, ...ticker];

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const current = typingTexts[typingIndex];
    const speed = isDeleting ? 45 : 85;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = current.substring(0, displayText.length + 1);
        setDisplayText(next);
        if (next === current) {
          setIsPaused(true);
          setTimeout(() => { setIsPaused(false); setIsDeleting(true); }, 1800);
        }
      } else {
        const next = current.substring(0, displayText.length - 1);
        setDisplayText(next);
        if (next === "") {
          setIsDeleting(false);
          setTypingIndex((prev) => (prev + 1) % typingTexts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, isPaused, typingIndex]);

  const nameWords = ["Mohamed", "Farhan"];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden"
    >
      {/* Warm radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="w-[700px] h-[350px] rounded-full bg-orange-500/[0.07] blur-[130px]" />
      </div>

      {/* Grid lines overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto w-full">
        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-surface text-sm text-stone-400 font-body"
        >
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          Available for Work ✦
        </motion.div>

        {/* Giant editorial name */}
        <div className="mb-5 flex flex-wrap justify-center gap-x-5 gap-y-0">
          {nameWords.map((word, i) => (
            <div key={word} className="overflow-hidden">
              <motion.span
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.15 + i * 0.18,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block font-heading font-bold text-stone-50 leading-none"
                style={{ fontSize: "clamp(3.5rem, 10vw, 7.5rem)" }}
              >
                {word}
              </motion.span>
            </div>
          ))}
        </div>

        {/* Role label + accent line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="mb-6 flex flex-col items-center gap-2"
        >
          <p className="font-body text-stone-400 text-base md:text-lg tracking-[0.25em] uppercase">
            {personalInfo.role}
          </p>
          <div className="h-px w-20 bg-gradient-to-r from-orange-500 to-amber-400" />
        </motion.div>

        {/* Typing subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.5 }}
          className="mb-10 h-8 flex items-center justify-center"
        >
          <span className="font-code text-stone-400 text-base md:text-lg">
            {displayText}
            <span className="inline-block w-0.5 h-[1.1em] bg-orange-500 ml-0.5 -mb-[0.1em] animate-blink" />
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-amber-400 text-stone-950 font-body font-semibold text-sm rounded transition-colors duration-200"
          >
            View My Work
            <ArrowRight size={15} strokeWidth={2.5} />
          </a>
          <a
            href="/Mohamed_Farhan.pdf"
            download="Mohamed-Farhan-Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/15 hover:border-orange-500 text-stone-50 hover:text-orange-500 font-body font-medium text-sm rounded transition-all duration-200"
          >
            Download CV
            <Download size={15} />
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="flex items-center gap-5 mb-20 md:mb-24"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-500 hover:text-orange-500 transition-colors duration-200 p-1"
            aria-label="GitHub"
          >
            <GithubIcon style={{ width: 19, height: 19 }} />
          </a>
          <span className="w-px h-4 bg-white/10" />
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-500 hover:text-orange-500 transition-colors duration-200 p-1"
            aria-label="LinkedIn"
          >
            <LinkedinIcon style={{ width: 19, height: 19 }} />
          </a>
          <span className="w-px h-4 bg-white/10" />
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-stone-500 hover:text-orange-500 transition-colors duration-200 p-1"
            aria-label="Email"
          >
            <Mail size={19} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-stone-600"
        aria-hidden
      >
        <span className="font-code text-[10px] uppercase tracking-[0.22em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={15} strokeWidth={1.5} />
        </motion.div>
      </motion.div>

      {/* Tech ticker strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-b border-white/[0.06] py-3 bg-surface/40"
      >
        <div
          className="flex gap-0 whitespace-nowrap"
          style={{ animation: "ticker 30s linear infinite" }}
        >
          {tickerItems.map((tech, i) => (
            <span
              key={i}
              className="font-code text-[11px] text-stone-500 uppercase tracking-widest px-6 shrink-0"
            >
              {tech}
              <span className="text-orange-500 mx-3">◆</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
