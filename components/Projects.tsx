"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6 overflow-hidden">
      {/* Section number background */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute -top-4 right-0 leading-none overflow-hidden"
      >
        <span
          className="font-heading font-bold text-stone-50/[0.025]"
          style={{ fontSize: "clamp(8rem, 20vw, 18rem)" }}
        >
          03
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
            <span className="font-code text-orange-500 text-sm">03 —</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-stone-50">
              Things I&apos;ve Built
            </h2>
          </div>
          <div className="h-px w-20 bg-gradient-to-r from-orange-500 to-transparent" />
        </motion.div>

        {/* Project cards */}
        <div className="space-y-0">
          {projects.map((project, i) => (
            <div key={project.id}>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative border-l-2 border-transparent hover:border-orange-500 transition-all duration-300 pl-6 py-12"
              >
                <div>
                  <div>
                    {/* Number + Featured */}
                    <div className="flex items-center gap-4 mb-3">
                      <span
                        className="font-heading font-bold text-stone-50/[0.08] leading-none select-none"
                        style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
                      >
                        {project.number}
                      </span>
                    </div>

                    {/* Name */}
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-stone-50 mb-4 group-hover:text-orange-400 transition-colors duration-300">
                      {project.name}
                    </h3>

                    {/* Description */}
                    <p className="font-body text-stone-400 text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Highlight bullets */}
                    <ul className="space-y-2.5 mb-7">
                      {project.highlights.map((point, j) => (
                        <li key={j} className="flex gap-3 items-start">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-orange-500/60 shrink-0" />
                          <span className="font-body text-sm text-stone-400 leading-relaxed">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="font-code text-[11px] px-2.5 py-1 bg-surface border border-white/[0.06] text-stone-500 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-body text-sm font-semibold text-orange-500 hover:text-amber-400 transition-colors duration-200 group/link"
                    >
                      View Live
                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      />
                    </a>
                  </div>

                </div>
              </motion.div>

              {/* Gradient divider between cards */}
              {i < projects.length - 1 && (
                <div className="section-divider" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
