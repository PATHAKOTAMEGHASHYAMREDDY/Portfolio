import { useMotionValue, motion, useMotionTemplate } from "motion/react";
import React, { useState, useCallback } from "react";
import { cn } from "../../lib/utils";

/**
 * CardSpotlight — radial gradient follows the cursor inside the card.
 * No Three.js / CanvasRevealEffect dependency; uses a pure CSS radial gradient
 * approach that works in plain React without canvas overhead.
 */
export function CardSpotlight({
  children,
  radius = 380,
  color = "rgba(59, 130, 246, 0.08)", // subtle blue tint, not harsh
  className,
  ...props
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback(
    ({ currentTarget, clientX, clientY }) => {
      const { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    },
    [mouseX, mouseY]
  );

  return (
    <div
      className={cn(
        "group/spotlight relative rounded-2xl bg-neutral-900 border border-neutral-800",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      {...props}
    >
      {/* Spotlight overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover/spotlight:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              ${color},
              transparent 80%
            )
          `,
        }}
      />

      {/* Subtle top-edge glow that's always visible (not hover-dependent) */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
        aria-hidden="true"
      />

      {children}
    </div>
  );
}
