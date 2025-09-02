"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const cardRefs = useRef([]);

  // Use different scroll detection for mobile vs desktop
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: isMobile ? undefined : ref,
    container: isMobile ? undefined : ref,
    offset: ["start start", "end end"],
  });

  const cardLength = content.length;

  // Intersection Observer for mobile
  useEffect(() => {
    if (!isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            if (index !== -1) {
              setActiveCard(index);
            }
          }
        });
      },
      {
        threshold: [0.3, 0.5, 0.7],
        rootMargin: "-40% 0px -40% 0px",
      }
    );

    cardRefs.current.forEach((cardRef) => {
      if (cardRef) observer.observe(cardRef);
    });

    return () => observer.disconnect();
  }, [isMobile]);

  // Desktop scroll detection
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (isMobile) return;

    const totalCards = content.length;
    if (totalCards === 0) return;
    
    // Improved breakpoint calculation that aligns with centered text position
    const cardsBreakpoints = content.map((_, index) => {
      // More accurate breakpoints that correspond to when text is centered
      const baseBreakpoint = (index + 0.5) / totalCards;
      return Math.min(baseBreakpoint, 0.9); // Cap at 0.9 to ensure last item triggers
    });
    
    let closestBreakpointIndex = 0;
    let minDistance = Math.abs(latest - cardsBreakpoints[0]);
    
    cardsBreakpoints.forEach((breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < minDistance) {
        minDistance = distance;
        closestBreakpointIndex = index;
      }
    });
    
    // Special handling for very end of scroll to ensure last item shows
    if (latest > 0.8) {
      // Check if we're closer to the last breakpoint
      const lastBreakpoint = cardsBreakpoints[totalCards - 1];
      if (latest >= lastBreakpoint - 0.1) {
        closestBreakpointIndex = totalCards - 1;
      }
    }
    
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#ffffff", // white
    "#f8fafc", // slate-50
    "#f1f5f9", // slate-100
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
    "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className={cn(
        "relative flex flex-col lg:flex-row justify-center lg:space-x-10 rounded-md p-1 lg:p-10",
        isMobile ? "h-auto" : "h-[40rem] overflow-y-auto"
      )}
      ref={ref}
    >
      <div className="relative flex items-start px-1 lg:px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div
              key={item.title + index}
              className="my-12 lg:my-20"
              ref={(el) => {
                if (el) cardRefs.current[index] = el;
              }}
            >
              {/* Mobile: Show content box above active project only */}
              {activeCard === index && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="lg:hidden mb-6"
                >
                  <div
                    style={{
                      background:
                        linearGradients[index % linearGradients.length],
                    }}
                    className={cn(
                      "h-80 w-full overflow-hidden rounded-xl bg-white shadow-2xl",
                      contentClassName
                    )}
                  >
                    {item.content ?? null}
                  </div>
                </motion.div>
              )}

              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                  scale: activeCard === index ? 1 : 0.95,
                }}
                transition={{ duration: 0.3 }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                  scale: activeCard === index ? 1 : 0.95,
                }}
                transition={{ duration: 0.3 }}
                className="text-base md:text-lg lg:text-xl mt-4 lg:mt-6 max-w-lg text-gray-600 leading-relaxed"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-32 lg:h-60" />
        </div>
      </div>

      {/* Desktop: Show sticky content on right */}
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-1/2 -translate-y-1/2 hidden lg:block h-96 w-[28rem] overflow-hidden rounded-xl bg-white shadow-2xl",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
