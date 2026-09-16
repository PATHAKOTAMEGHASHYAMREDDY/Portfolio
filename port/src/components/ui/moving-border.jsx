import React, { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "motion/react";
import { cn } from "../../lib/utils";

/**
 * MovingBorder — animated SVG path border used for small badges.
 * The glowing dot travels around a rounded rectangle.
 */
export function MovingBorderBadge({
  children,
  borderRadius = "0.75rem",
  className,
  containerClassName,
  borderClassName,
  duration = 3000,
  ...otherProps
}) {
  return (
    <div
      className={cn(
        "relative h-auto w-fit overflow-hidden bg-transparent p-px",
        containerClassName
      )}
      style={{ borderRadius }}
      {...otherProps}
    >
      {/* Moving border layer */}
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-10 w-10 bg-[radial-gradient(#3b82f6_40%,transparent_60%)] opacity-70",
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      {/* Content layer */}
      <div
        className={cn(
          "relative flex items-center justify-center border border-neutral-700/60 bg-neutral-900/90 px-3 py-1.5 text-xs font-semibold tracking-widest text-neutral-300 antialiased backdrop-blur-sm",
          className
        )}
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        {children}
      </div>
    </div>
  );
}

export function MovingBorder({ children, duration = 3000, rx, ry, ...otherProps }) {
  const pathRef = useRef(null);
  const progress = useMotionValue(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
