import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "on-dark";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-offset-4";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary-blue text-white shadow-sm hover:-translate-y-0.5 hover:bg-primary-blue-dark hover:shadow-lg hover:shadow-primary-blue/25",
  secondary:
    "bg-transparent text-primary-dark ring-1 ring-inset ring-neutral-border hover:-translate-y-0.5 hover:bg-neutral-light",
  ghost:
    "bg-transparent text-white ring-1 ring-inset ring-white/25 hover:-translate-y-0.5 hover:bg-white/10",
  "on-dark":
    "bg-white text-primary-dark shadow-sm hover:-translate-y-0.5 hover:bg-neutral-light",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
