"use client";
import { motion } from "motion/react";
import { IconCloud } from "./icon-cloud";

export const SkillsSection = () => {
  // Icon slugs for the cloud - only real skills from the original list
  const slugs = [
    "java",
    "javascript",
    "typescript",
    "python",
    "react",
    "angular",
    "html5",
    "css3",
    "tailwindcss",
    "spring",
    "nodedotjs",
    "express",
    "postgresql",
    "mongodb",
    "mysql",
    "git",
    "github",
    "docker",
    "maven",
    "npm",
    "vercel",
    "railway",
    "GraphQl",
  ];

  const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}`);

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and frameworks I use to build exceptional digital
            experiences
          </p>
        </motion.div>

        {/* Icon Cloud */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex items-center justify-center w-full h-[500px] max-w-4xl mx-auto"
        >
          <IconCloud images={images} />
        </motion.div>
      </div>
    </section>
  );
};
