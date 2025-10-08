"use client";
import { motion } from "motion/react";
import React from "react";
import Lottie from "lottie-react";
import studentAnimation from "../../assets/Student.json";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mb-16">
            About Me
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Lottie Animation */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-start"
            >
              <div className="w-full max-w-[280px] lg:max-w-sm">
                <Lottie 
                  animationData={studentAnimation} 
                  loop={true} 
                  className="w-full h-full"
                />
              </div>
            </motion.div>

            {/* Right side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
                FullStack Developer & AI/ML Developer
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I'm Pathakota Megha Shyam Reddy, a passionate FullStack Developer and AI & ML Developer 
                with expertise in modern web technologies and machine learning. I love creating 
                innovative solutions and building intelligent applications that make a difference.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                With a strong foundation in both frontend and backend development, combined with 
                machine learning expertise, I specialize in creating seamless user experiences 
                and implementing AI-powered solutions using React, Node.js, Python, and various 
                modern frameworks.
              </p>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
