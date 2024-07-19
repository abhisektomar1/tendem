"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradualSpacingProps {
  text: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
}

export default function GradualSpacing({
  text,
  duration = 0.5,
  delayMultiple = 0.04,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className,
}: GradualSpacingProps) {
  const lines = text.split('.');

  return (
    <div className="flex flex-col items-center">
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} className="flex justify-center space-x-1">
          <AnimatePresence>
            {line.trim().split("").map((char, i) => (
              <motion.h1
                key={`${lineIndex}-${i}`}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={framerProps}
                transition={{ duration, delay: (lineIndex * line.length + i) * delayMultiple }}
                className={cn("drop-shadow-sm", className)}
              >
                {char === " " ? <span>&nbsp;</span> : char}
              </motion.h1>
            ))}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}