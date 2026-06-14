"use client";

import { motion } from "framer-motion";
import { GraduationCap, CheckCircle2 } from "lucide-react";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="relative py-28 px-6 overflow-hidden">
      {/* Section number background */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute -top-4 right-0 leading-none overflow-hidden"
      >
        <span
          className="font-heading font-bold text-stone-50/[0.025]"
          style={{ fontSize: "clamp(8rem, 20vw, 18rem)" }}
        >
          04
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
            <span className="font-code text-orange-500 text-sm">04 —</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-stone-50">
              Education
            </h2>
          </div>
          <div className="h-px w-20 bg-gradient-to-r from-orange-500 to-transparent" />
        </motion.div>

        {/* Education card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="bg-card border border-white/[0.06] rounded-lg p-8 hover:border-orange-500/20 transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            {/* Icon */}
            <div className="w-12 h-12 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
              <GraduationCap size={22} className="text-orange-500" />
            </div>

            {/* Content */}
            <div className="flex-1">
              {/* Header row */}
              <div className="flex flex-wrap items-start gap-3 mb-2">
                <h3 className="font-heading text-xl md:text-2xl font-bold text-stone-50">
                  {education.degree}
                </h3>
                <span className="inline-flex items-center gap-1.5 font-code text-[11px] px-2.5 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded">
                  <CheckCircle2 size={10} />
                  {education.status}
                </span>
              </div>

              {/* College + period */}
              <p className="font-body text-stone-400 text-sm mb-1">
                {education.college}
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="font-code text-xs text-stone-500">
                  {education.period}
                </span>
                <span className="w-px h-3 bg-white/10" />
                <span className="font-code text-xs text-stone-500">
                  CGPA —{" "}
                  <span className="text-amber-400 font-semibold">
                    {education.cgpa}
                  </span>
                </span>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
