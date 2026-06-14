"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { personalInfo } from "@/data/portfolio";

const contactDetails = [
  {
    renderIcon: (cls: string) => <Mail size={15} className={cls} />,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    renderIcon: (cls: string) => <LinkedinIcon size={15} className={cls} />,
    label: "LinkedIn",
    value: "Mohamed Farhan M R",
    href: personalInfo.linkedin,
  },
  {
    renderIcon: (cls: string) => <GithubIcon size={15} className={cls} />,
    label: "GitHub",
    value: "github.com/farhanmatt",
    href: personalInfo.github,
  },
  {
    renderIcon: (cls: string) => <MapPin size={15} className={cls} />,
    label: "Location",
    value: personalInfo.location,
    href: null,
  },
];

export default function Contact() {

  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden">
      {/* Section number background */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute -top-4 right-0 leading-none overflow-hidden"
      >
        <span
          className="font-heading font-bold text-stone-50/[0.025]"
          style={{ fontSize: "clamp(8rem, 20vw, 18rem)" }}
        >
          05
        </span>
      </div>

      {/* Warm glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-orange-500/[0.05] blur-[100px]"
      />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="font-code text-orange-500 text-sm">05 —</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-stone-50">
              Let&apos;s Work Together
            </h2>
          </div>
          <div className="h-px w-20 bg-gradient-to-r from-orange-500 to-transparent" />
        </motion.div>

        {/* Single column layout for contact info */}
        <div className="max-w-2xl mx-auto">
          {/* Left - editorial heading + contact list */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <p className="font-body text-stone-400 text-base leading-relaxed mb-10">
              I&apos;m currently open to full-time opportunities, freelance work,
              or just a good conversation about tech. Reach out directly - I&apos;ll get back to you promptly.
            </p>

            <ul className="grid sm:grid-cols-2 gap-6">
              {contactDetails.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 text-stone-400 hover:text-stone-50 transition-colors duration-200"
                    >
                      <span className="w-10 h-10 rounded-lg bg-card border border-white/[0.06] flex items-center justify-center shrink-0 group-hover:border-orange-500/30 transition-all duration-200">
                        {item.renderIcon("text-orange-500")}
                      </span>
                      <div>
                        <p className="font-code text-[11px] text-stone-600 uppercase tracking-widest mb-0.5">
                          {item.label}
                        </p>
                        <p className="font-body text-sm font-medium">{item.value}</p>
                      </div>
                      <ArrowRight
                        size={14}
                        className="ml-auto text-orange-500/0 group-hover:text-orange-500/80 transition-all duration-200 -translate-x-2 group-hover:translate-x-0"
                      />
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 text-stone-400">
                      <span className="w-10 h-10 rounded-lg bg-card border border-white/[0.06] flex items-center justify-center shrink-0">
                        {item.renderIcon("text-orange-500")}
                      </span>
                      <div>
                        <p className="font-code text-[11px] text-stone-600 uppercase tracking-widest mb-0.5">
                          {item.label}
                        </p>
                        <p className="font-body text-sm font-medium">{item.value}</p>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
