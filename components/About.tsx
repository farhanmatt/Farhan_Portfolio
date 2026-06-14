"use client";

import { motion } from "framer-motion";
import { Briefcase, Rocket, Cpu, Download } from "lucide-react";
import { aboutData } from "@/data/portfolio";

const ease = [0.22, 1, 0.36, 1] as const;

const STATS = [
  {
    value: "7+",
    label: "Months Experience",
    sublabel: "Production development",
    Icon: Briefcase,
    hex: "F97316",
  },
  {
    value: "2",
    label: "Live Projects",
    sublabel: "Shipped & deployed",
    Icon: Rocket,
    hex: "A78BFA",
  },
  {
    value: "16+",
    label: "Technologies",
    sublabel: "Tools & frameworks",
    Icon: Cpu,
    hex: "06B6D4",
  },
] as const;

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-28">
      {/* Giant background section number */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute -top-4 right-0 leading-none overflow-hidden"
      >
        <span
          className="font-heading font-bold text-stone-50/[0.025]"
          style={{ fontSize: "clamp(8rem, 20vw, 18rem)" }}
        >
          01
        </span>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="font-code text-orange-500 text-sm">01 —</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-stone-50">
              About Me
            </h2>
          </div>
          <div className="h-px w-20 bg-gradient-to-r from-orange-500 to-transparent" />
        </motion.div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — bio text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.1, ease }}
              className="font-body text-stone-400 text-base leading-[1.85] mb-5"
            >
              {aboutData.paragraph1}
            </motion.p>

            {aboutData.paragraph2 ? (
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: 0.18, ease }}
                className="font-body text-stone-400 text-base leading-[1.85] mb-10"
              >
                {aboutData.paragraph2}
              </motion.p>
            ) : null}

            {/* Download CV */}
            <motion.a
              href="/Mohamed_Farhan.pdf"
              download="Mohamed-Farhan-Resume.pdf"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.22, ease }}
              className="group mt-2 inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 font-body text-sm text-stone-400 transition-all duration-200 hover:border-orange-500/40 hover:text-orange-400"
            >
              <Download
                size={14}
                className="transition-transform duration-200 group-hover:-translate-y-0.5"
              />
              Download Resume
            </motion.a>
          </div>

          {/* Right — code block */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.22, ease }}
            className="rounded-lg overflow-hidden border border-white/[0.06] bg-card"
          >
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-surface">
              <span className="browser-dot bg-[#ff5f57]" />
              <span className="browser-dot bg-[#febc2e]" />
              <span className="browser-dot bg-[#28c840]" />
              <span className="ml-3 font-code text-xs text-stone-500">profile.ts</span>
            </div>

            {/* Syntax-highlighted code */}
            <pre className="p-6 font-code text-[13px] leading-[1.9] overflow-x-auto">
              <span className="token-keyword">const </span>
              <span className="token-property">farhan</span>
              <span className="token-bracket"> = </span>
              <span className="token-bracket">{"{"}</span>
              {"\n"}

              {"  "}
              <span className="token-property">role</span>
              <span className="token-bracket">: </span>
              <span className="token-string">&quot;Software Developer&quot;</span>
              <span className="token-bracket">,</span>
              {"\n"}

              {"  "}
              <span className="token-property">location</span>
              <span className="token-bracket">: </span>
              <span className="token-string">&quot;Nagercoil, India&quot;</span>
              <span className="token-bracket">,</span>
              {"\n"}

              {"  "}
              <span className="token-property">experience</span>
              <span className="token-bracket">: </span>
              <span className="token-string">&quot;7+ months&quot;</span>
              <span className="token-bracket">,</span>
              {"\n"}

              {"  "}
              <span className="token-property">available</span>
              <span className="token-bracket">: </span>
              <span className="token-boolean">true</span>
              <span className="token-bracket">,</span>
              {"\n"}

              {"  "}
              <span className="token-property">focus</span>
              <span className="token-bracket">: </span>
              <span className="token-string">&quot;Full-Stack Developer&quot;</span>
              {"\n"}

              <span className="token-bracket">{"}"}</span>
            </pre>
          </motion.div>
        </div>

        {/* Stats cards */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {STATS.map(({ value, label, sublabel, Icon, hex }, i) => {
            const color = `#${hex}`;
            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease }}
                whileHover={{ y: -6, transition: { duration: 0.22, ease: "easeOut" } }}
                className="group relative"
              >
                {/* Outer glow */}
                <div
                  className="absolute -inset-px rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: `${color}1a` }}
                />

                {/* Card */}
                <div
                  className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0f0d0b] p-6 transition-all duration-300 group-hover:border-white/[0.14]"
                  style={{
                    boxShadow:
                      "0 1px 0 rgba(255,255,255,0.04) inset, 0 4px 24px rgba(0,0,0,0.35)",
                  }}
                >
                  {/* Top shimmer */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />

                  {/* Hover radial glow */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(200px circle at 20% -20%, ${color}14, transparent 70%)`,
                    }}
                  />

                  {/* Bottom color bar */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 rounded-b-2xl transition-transform duration-500 group-hover:scale-x-100"
                    style={{
                      background: `linear-gradient(90deg, ${color}cc, ${color}40, transparent)`,
                    }}
                  />

                  <div className="relative">
                    {/* Icon */}
                    <div
                      className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: `${color}14`,
                        border: `1px solid ${color}28`,
                        boxShadow: `0 0 0 1px ${color}0a, inset 0 1px 0 rgba(255,255,255,0.06)`,
                      }}
                    >
                      <Icon size={20} strokeWidth={1.5} style={{ color }} />
                    </div>

                    {/* Value */}
                    <p
                      className="font-heading text-4xl font-bold tabular-nums leading-none"
                      style={{ color }}
                    >
                      {value}
                    </p>

                    {/* Divider */}
                    <div
                      className="my-3 h-px w-10 transition-all duration-300 group-hover:w-16"
                      style={{
                        background: `linear-gradient(90deg, ${color}60, transparent)`,
                      }}
                    />

                    {/* Labels */}
                    <p className="text-[13px] font-semibold text-stone-200">{label}</p>
                    <p className="mt-0.5 text-[11px] text-stone-500">{sublabel}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
