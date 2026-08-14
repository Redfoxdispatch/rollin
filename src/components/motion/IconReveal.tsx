"use client";

import { useRef, type CSSProperties } from "react";
import { useInView } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export function IconReveal({
  icon: Icon,
  className = "",
  iconClassName = "h-6 w-6",
  delay = 0,
}: {
  icon: LucideIcon;
  className?: string;
  iconClassName?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <div
      ref={ref}
      className={`icon-draw ${inView ? "is-visible" : ""} ${className}`}
      style={{ "--icon-delay": `${delay}ms` } as CSSProperties}
    >
      <Icon className={iconClassName} strokeWidth={1.75} />
    </div>
  );
}
