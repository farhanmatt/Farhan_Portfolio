"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6 overflow-hidden">
      {/* Section number background */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute -top-4 right-0 leading-none overflow-hidden"
      >
        <span
          className="font-heading font-bold text-stone-50/[0.025]"
          style={{ fontSize: "clamp(8rem, 20vw, 18rem)" }}
        >
          02
        </span>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="font-code text-orange-500 text-sm">02 —</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-stone-50">
              Where I&apos;ve Worked
            </h2>
          </div>
          <div className="h-px w-20 bg-gradient-to-r from-orange-500 to-transparent" />
        </motion.div>

        {/* Experience rows */}
        {experience.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.55,
              delay: i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative"
          >
            {/* Hover background */}
            <div className="absolute inset-0 -mx-4 rounded-lg bg-orange-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative grid md:grid-cols-[160px_1px_1fr] gap-0 md:gap-6 py-8 border-b border-white/[0.06]">
              {/* Left: period */}
              <div className="mb-4 md:mb-0 md:pt-1">
                <span className="font-code text-sm text-stone-500">
                  {item.period}
                </span>
              </div>

              {/* Center: vertical line separator (desktop only) */}
              <div className="hidden md:block w-px bg-white/[0.06] self-stretch" />

              {/* Right: content */}
              <div className="md:pl-2">
                {/* Role + company header */}
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-stone-50">
                    {item.role}
                  </h3>
                  <span className="font-code text-xs px-2.5 py-1 bg-orange-500/10 text-orange-400 rounded border border-orange-500/20">
                    {item.type}
                  </span>
                </div>

                <p className="font-body text-sm text-stone-500 mb-5">
                  {item.company} · {item.location}
                </p>

                {/* Bullet points */}
                <ul className="space-y-3">
                  {item.highlights.map((point, j) => (
                    <li key={j} className="flex gap-3 items-start">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-orange-500/50 shrink-0" />
                      <span className="font-body text-sm text-stone-400 leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-code text-[11px] px-2.5 py-1 rounded border border-orange-500/15 bg-orange-500/[0.06] text-orange-400/70 transition-colors duration-200 hover:border-orange-500/30 hover:text-orange-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* "Open to new opportunities" note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-10 inline-flex items-center gap-2.5 text-stone-500 font-body text-sm"
        >
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          Currently employed — open to new opportunities
        </motion.div>
      </div>
    </section>
  );
}
