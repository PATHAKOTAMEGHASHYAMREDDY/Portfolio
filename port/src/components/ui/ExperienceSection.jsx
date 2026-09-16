import React from "react";
import { motion } from "motion/react";
import { CardSpotlight } from "./card-spotlight";
import { HoverBorderGradient } from "./hover-border-gradient";
import { MovingBorderBadge } from "./moving-border";

// ─── Data ────────────────────────────────────────────────────────────────────

const TECH_TAGS = [
  "Angular",
  "TypeScript",
  "Node.js",
  "React Native",
  "GraphQL",
  "FastAPI",
  "HTML / CSS",
  "Figma",
];

const WORK_BLOCKS = [
  {
    id: "product-engineering",
    label: "Product Engineering",
    summary:
      "Developed and enhanced production features across Astro and WedInvite products, delivering responsive web and mobile interfaces aligned with product requirements and design specifications.",
    items: null,
  },
  {
    id: "astro",
    label: "Astro Platform",
    summary: null,
    items: [
      "Angular & TypeScript feature development",
      "Vedic Astro API & Prokerala API integration",
      "FastAPI-based astrology validation",
      "Rasi, Navamsa, planetary, house & Lagna analysis",
      "API debugging & comparative platform analysis",
    ],
  },
  {
    id: "wedinvite",
    label: "WedInvite",
    summary: null,
    items: [
      "React Native mobile screen development",
      "Invitation, Home, Event & Profile modules",
      "Figma-to-code with reusable responsive components",
      "TypeScript throughout",
    ],
  },
  {
    id: "engineering",
    label: "Engineering & Debugging",
    summary: null,
    items: [
      "API analysis & root-cause investigation",
      "Frontend rendering issue resolution",
      "Backend integration validation",
      "Technical documentation",
      "Collaboration with team leads",
    ],
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function WorkBlock({ block, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
    >
      <p className="text-xs font-semibold tracking-widest text-blue-400 uppercase mb-2">
        {block.label}
      </p>
      {block.summary && (
        <p className="text-sm text-neutral-400 leading-relaxed">
          {block.summary}
        </p>
      )}
      {block.items && (
        <ul className="space-y-1.5">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-neutral-400">
              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-blue-500/70" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

function TechTag({ label }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-neutral-800 text-neutral-300 border border-neutral-700/60 transition-colors duration-200 hover:border-blue-500/50 hover:text-blue-300 hover:bg-neutral-700/60 select-none">
      {label}
    </span>
  );
}

// ─── Main card content (kept separate so HoverBorderGradient wraps cleanly) ──

function ExperienceCardInner() {
  return (
    <CardSpotlight className="p-7 sm:p-9 md:p-10">
      {/* ── Top: role + company + meta ── */}
      <div className="mb-7">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-start justify-between gap-4 mb-5"
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-1">
              Product Engineering Intern
            </h3>
            <p className="text-base sm:text-lg font-semibold text-blue-400 tracking-wide">
              MATRIMONY.COM
            </p>
          </div>

          {/* Moving Border badge */}
          <MovingBorderBadge duration={2800} className="uppercase">
            Astro Team
          </MovingBorderBadge>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-neutral-400"
        >
          <span className="flex items-center gap-1.5">
            {/* Location pin icon */}
            <svg className="w-3.5 h-3.5 text-neutral-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Onsite — Chennai
          </span>
          <span className="flex items-center gap-1.5">
            {/* Calendar icon */}
            <svg className="w-3.5 h-3.5 text-neutral-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Mar 2026 — Sep 2026
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium border border-blue-500/20">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            Recent Experience
          </span>
        </motion.div>
      </div>

      {/* ── Divider ── */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-7" />

      {/* ── Work blocks ── */}
      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-7 mb-8">
        {WORK_BLOCKS.map((block, i) => (
          <WorkBlock key={block.id} block={block} delay={0.1 + i * 0.08} />
        ))}
      </div>

      {/* ── Divider ── */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-6" />

      {/* ── Tech tags ── */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.35 }}
      >
        <p className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-3">
          Technologies
        </p>
        <div className="flex flex-wrap gap-2">
          {TECH_TAGS.map((tag) => (
            <TechTag key={tag} label={tag} />
          ))}
        </div>
      </motion.div>
    </CardSpotlight>
  );
}

// ─── Exported section ─────────────────────────────────────────────────────────

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-neutral-900 to-neutral-950"
    >
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mb-4">
            Experience
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Building products, solving problems, and learning through real-world engineering.
          </p>
        </motion.div>

        {/* Card with animated gradient border */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <HoverBorderGradient
            as="div"
            duration={1.2}
            containerClassName="rounded-2xl w-full"
            className="rounded-2xl"
          >
            <ExperienceCardInner />
          </HoverBorderGradient>
        </motion.div>
      </div>
    </section>
  );
}
