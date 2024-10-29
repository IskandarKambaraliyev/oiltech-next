"use client";

import { useEffect, useRef, useState } from "react";

import {
  SpringOptions,
  useSpring,
  useTransform,
  motion,
  useInView,
} from "framer-motion";

type Props = {
  to: number;
  className?: string;
  springOptions?: SpringOptions;
};

export default function AnimatedNumber({
  to,
  className,
  springOptions = { bounce: 0, duration: 3000 },
}: Props) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  // Spring animation setup
  const spring = useSpring(value, springOptions);
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    if (isInView && value === 0) {
      setValue(to); // Trigger the spring animation to the target value
    }
  }, [isInView, value, to]);

  useEffect(() => {
    spring.set(value); // Update the spring when value changes
  }, [spring, value]);

  return (
    <div className="flex w-full items-center justify-center" ref={ref}>
      <motion.span className={`tabular-nums ${className}`}>
        {display}
      </motion.span>
    </div>
  );
}
