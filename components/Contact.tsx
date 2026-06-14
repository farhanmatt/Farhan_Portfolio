"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, ArrowRight, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { personalInfo } from "@/data/portfolio";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const initialFormState: FormState = {
  name: "",
  email: "",
  message: "",
};

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
  const [form, setForm] = useState<FormState>(initialFormState);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("sent");
      setFeedback("Message sent successfully.");
      setForm(initialFormState);

      setTimeout(() => {
        setStatus("idle");
        setFeedback("");
      }, 3000);
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error ? error.message : "Something went wrong. Please try again."
      );
    }
  };

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

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left - editorial heading + contact list */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <p className="font-body text-stone-400 text-base leading-relaxed mb-10 max-w-sm">
              I&apos;m currently open to full-time opportunities, freelance work,
              or just a good conversation about tech. Drop me a message or reach
              out directly - I&apos;ll get back to you promptly.
            </p>

            <ul className="space-y-5">
              {contactDetails.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 text-stone-400 hover:text-stone-50 transition-colors duration-200"
                    >
                      <span className="w-9 h-9 rounded-lg bg-card border border-white/[0.06] flex items-center justify-center shrink-0 group-hover:border-orange-500/30 transition-all duration-200">
                        {item.renderIcon("text-orange-500")}
                      </span>
                      <div>
                        <p className="font-code text-[11px] text-stone-600 uppercase tracking-widest mb-0.5">
                          {item.label}
                        </p>
                        <p className="font-body text-sm">{item.value}</p>
                      </div>
                      <ArrowRight
                        size={14}
                        className="ml-auto text-orange-500/0 group-hover:text-orange-500/80 transition-all duration-200 -translate-x-2 group-hover:translate-x-0"
                      />
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 text-stone-400">
                      <span className="w-9 h-9 rounded-lg bg-card border border-white/[0.06] flex items-center justify-center shrink-0">
                        {item.renderIcon("text-orange-500")}
                      </span>
                      <div>
                        <p className="font-code text-[11px] text-stone-600 uppercase tracking-widest mb-0.5">
                          {item.label}
                        </p>
                        <p className="font-body text-sm">{item.value}</p>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right - contact form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-code text-[11px] text-stone-600 uppercase tracking-widest mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full bg-card border border-white/[0.06] rounded px-4 py-3 font-body text-sm text-stone-50 placeholder-stone-600 focus:outline-none focus:border-orange-500/50 transition-colors duration-200"
                />
              </div>

              <div>
                <label className="block font-code text-[11px] text-stone-600 uppercase tracking-widest mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full bg-card border border-white/[0.06] rounded px-4 py-3 font-body text-sm text-stone-50 placeholder-stone-600 focus:outline-none focus:border-orange-500/50 transition-colors duration-200"
                />
              </div>

              <div>
                <label className="block font-code text-[11px] text-stone-600 uppercase tracking-widest mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full bg-card border border-white/[0.06] rounded px-4 py-3 font-body text-sm text-stone-50 placeholder-stone-600 focus:outline-none focus:border-orange-500/50 transition-colors duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 py-3 bg-orange-500 hover:bg-amber-400 disabled:opacity-60 text-stone-950 font-body font-semibold text-sm rounded transition-all duration-200"
              >
                {status === "sending" ? (
                  "Sending..."
                ) : status === "sent" ? (
                  "Message sent!"
                ) : status === "error" ? (
                  "Try Again"
                ) : (
                  <>
                    Send Message
                    <Send size={14} strokeWidth={2.5} />
                  </>
                )}
              </button>

              {feedback ? (
                <p
                  className={`font-body text-sm ${
                    status === "error" ? "text-rose-400" : "text-emerald-400"
                  }`}
                >
                  {feedback}
                </p>
              ) : null}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
