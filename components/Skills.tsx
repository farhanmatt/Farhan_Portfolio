"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe } from "lucide-react";
import {
  siHtml5,
  siCss,
  siJavascript,
  siTypescript,
  siReact,
  siNextdotjs,
  siTailwindcss,
  siPostgresql,
  siPrisma,
  siGit,
  siGithub,
  siPostman,
  siVercel,
  siNodedotjs,
} from "simple-icons";
import { techShowcase } from "@/data/portfolio";

const VSCODE_PATH =
  "M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 19.881V4.117A1.5 1.5 0 0 0 23.15 2.587zM17.477 17.65L8.165 12l9.312-5.649v11.298z";

type IconEntry = { path: string | null; hex: string };

const iconMap: Record<string, IconEntry> = {
  "HTML5":        { path: siHtml5.path,       hex: "E34F26" },
  "CSS3":         { path: siCss.path,         hex: "663399" },
  "JavaScript":   { path: siJavascript.path,  hex: "F7DF1E" },
  "TypeScript":   { path: siTypescript.path,  hex: "3B8EEA" },
  "React":        { path: siReact.path,       hex: "61DAFB" },
  "Next.js":      { path: siNextdotjs.path,   hex: "E2E8F0" },
  "Tailwind CSS": { path: siTailwindcss.path, hex: "06B6D4" },
  "REST APIs":    { path: null,               hex: "F97316" },
  "Prisma ORM":   { path: siPrisma.path,      hex: "A78BFA" },
  "PostgreSQL":   { path: siPostgresql.path,  hex: "60A5FA" },
  "Git":          { path: siGit.path,         hex: "F05032" },
  "GitHub":       { path: siGithub.path,      hex: "D1D5DB" },
  "VS Code":      { path: VSCODE_PATH,        hex: "007ACC" },
  "Postman":      { path: siPostman.path,     hex: "FF6C37" },
  "Vercel":       { path: siVercel.path,      hex: "F8FAFC" },
  "Node.js":      { path: siNodedotjs.path,   hex: "5FA04E" },
};

type FilterKey = "All" | "Frontend" | "Backend" | "Database" | "DevTools";

const FILTER_CATS: Record<Exclude<FilterKey, "All">, string[]> = {
  Frontend: ["Core Web", "Language", "Frontend", "Framework", "Styling"],
  Backend:  ["Backend", "Automation"],
  Database: ["Database"],
  DevTools: ["Versioning", "Collaboration", "Editor", "Testing", "Deployment"],
};

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "All",      label: "All"      },
  { key: "Frontend", label: "Frontend" },
  { key: "Backend",  label: "Backend"  },
  { key: "Database", label: "Database" },
  { key: "DevTools", label: "Dev Tools" },
];


function TechIcon({ name, hex, size = 30 }: { name: string; hex: string; size?: number }) {
  const color = `#${hex}`;
  const entry = iconMap[name];
  if (!entry || entry.path === null) {
    return <Globe size={size} strokeWidth={1.5} style={{ color }} />;
  }
  return (
    <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill={color} aria-label={name}>
      <path d={entry.path} />
    </svg>
  );
}

export default function Skills() {
  const [active, setActive] = useState<FilterKey>("All");

  const filtered = useMemo(() => {
    if (active === "All") return techShowcase;
    const cats = FILTER_CATS[active as Exclude<FilterKey, "All">];
    return techShowcase.filter((t) => cats.includes(t.category));
  }, [active]);

  const counts = useMemo<Record<FilterKey, number>>(
    () => ({
      All:      techShowcase.length,
      Frontend: techShowcase.filter((t) => FILTER_CATS.Frontend.includes(t.category)).length,
      Backend:  techShowcase.filter((t) => FILTER_CATS.Backend.includes(t.category)).length,
      Database: techShowcase.filter((t) => FILTER_CATS.Database.includes(t.category)).length,
      DevTools: techShowcase.filter((t) => FILTER_CATS.DevTools.includes(t.category)).length,
    }),
    []
  );

  return (
    <section id="skills" className="relative overflow-hidden px-6 py-28">
      <div className="section-divider mb-20" />

      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute left-1/2 top-0 h-[900px] w-[1200px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.07)_0%,rgba(76,29,149,0.09)_40%,transparent_70%)] blur-3xl" />
        <div className="absolute right-[-10%] top-[30%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(ellipse,rgba(6,182,212,0.04),transparent_70%)] blur-3xl" />
        <div className="absolute left-[-10%] top-[50%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(ellipse,rgba(167,139,250,0.04),transparent_70%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
          <div className="mb-5 inline-flex items-center gap-3">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-orange-500/60" />
            <p className="font-code text-[11px] uppercase tracking-[0.35em] text-orange-400/70">Stack</p>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-orange-500/60" />
          </div>
          <h2 className="font-heading text-3xl font-bold text-stone-50 md:text-4xl lg:text-5xl">
            Technologies &amp; Tools
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-stone-500">
            The tools I reach for when building production software.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 flex justify-center overflow-x-auto pb-1"
        >
          <div className="flex gap-1 rounded-2xl border border-white/[0.07] bg-[#0c0a09]/90 p-1.5 backdrop-blur-sm">
            {FILTERS.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className="relative rounded-xl px-4 py-2 text-[13px] font-medium outline-none focus-visible:ring-1 focus-visible:ring-orange-400/50"
              >
                {active === key && (
                  <motion.div
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-xl border border-orange-500/30 bg-orange-500/15"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span
                  className={`relative z-10 transition-colors duration-200 ${
                    active === key ? "text-orange-200" : "text-stone-500 hover:text-stone-300"
                  }`}
                >
                  {label}
                </span>
                <span
                  className={`relative z-10 ml-1.5 rounded-full px-1.5 py-0.5 text-[10px] font-bold transition-colors duration-200 ${
                    active === key
                      ? "bg-orange-500/25 text-orange-300"
                      : "bg-white/[0.06] text-stone-600"
                  }`}
                >
                  {counts[key]}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => {
              const entry = iconMap[item.name];
              const hex = entry?.hex ?? "F97316";
              const color = `#${hex}`;

              return (
                <motion.div
                  key={item.name}
                  layout
                  initial={{ opacity: 0, scale: 0.85, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85, y: -8 }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.025,
                    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                  }}
                  whileHover={{ y: -7, transition: { duration: 0.22, ease: "easeOut" } }}
                  className="group relative"
                >
                  {/* Outer glow */}
                  <div
                    className="absolute -inset-px rounded-2xl opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: `${color}20` }}
                  />

                  {/* Card */}
                  <div
                    className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0f0d0b] transition-all duration-300 group-hover:border-white/[0.14]"
                    style={{
                      boxShadow:
                        "0 1px 0 rgba(255,255,255,0.04) inset, 0 4px 24px rgba(0,0,0,0.4)",
                    }}
                  >
                    {/* Top shimmer */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />

                    {/* Hover radial glow inside card */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background: `radial-gradient(180px circle at 50% -10%, ${color}16, transparent 70%)`,
                      }}
                    />

                    {/* Bottom color bar */}
                    <div
                      className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 rounded-b-2xl transition-transform duration-500 group-hover:scale-x-100"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${color}dd, transparent)`,
                      }}
                    />

                    {/* Content */}
                    <div className="relative flex flex-col items-center gap-4 px-4 py-8 text-center">
                      {/* Icon */}
                      <div
                        className="flex h-16 w-16 items-center justify-center rounded-[18px] transition-all duration-300 group-hover:scale-[1.12]"
                        style={{
                          background: `linear-gradient(135deg, ${color}1c 0%, ${color}08 100%)`,
                          border: `1px solid ${color}30`,
                          boxShadow: `0 0 0 1px ${color}0a, inset 0 1px 0 rgba(255,255,255,0.07), 0 2px 8px ${color}10`,
                        }}
                      >
                        <TechIcon name={item.name} hex={hex} size={30} />
                      </div>

                      {/* Name + Category */}
                      <div className="space-y-2">
                        <p className="text-[13px] font-semibold leading-tight text-stone-100 transition-colors duration-200 group-hover:text-white">
                          {item.name}
                        </p>
                        <span
                          className="inline-block rounded-full px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.12em]"
                          style={{
                            background: `${color}12`,
                            color: `${color}a0`,
                            border: `1px solid ${color}20`,
                          }}
                        >
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      <div className="section-divider mt-20" />
    </section>
  );
}
