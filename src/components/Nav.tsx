"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const NAV_LINKS = [
  { label: "Features", hash: "#features" },
  { label: "How It Works", hash: "#how-it-works" },
  { label: "Security", hash: "#security" },
  { label: "About", href: "/about" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const compact = (scrolled || !isHome) && !open;

  const navShapeClass = open
    ? "mt-0 w-full max-w-full rounded-none bg-primary-dark/95 px-6 py-4 lg:px-8"
    : compact
      ? "mt-3 w-[calc(100%-1.5rem)] rounded-full bg-primary-dark/90 py-2 pl-4 pr-2 shadow-lg shadow-black/20 ring-1 ring-white/10 backdrop-blur-md sm:w-[90vw] lg:w-[70vw] lg:max-w-5xl"
      : "mt-0 w-full max-w-7xl rounded-none bg-transparent px-6 py-4 lg:px-8";

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex w-full justify-center">
      <nav
        className={`flex w-full items-center justify-between transition-all duration-400 ease-in-out ${navShapeClass}`}
      >
        <Logo theme="light" variant={compact ? "icon" : "full"} />

        <div className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href ?? (isHome ? link.hash! : `/${link.hash}`)}
              className="text-sm font-medium text-white/85 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-5 lg:flex">
          {!compact && (
            <Link
              href="/contact"
              className="text-sm font-medium text-white/85 transition-colors hover:text-white"
            >
              Log In
            </Link>
          )}
          <Link
            href="/contact"
            className="rounded-full bg-primary-blue px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary-blue-dark hover:shadow-lg hover:shadow-primary-blue/20"
          >
            Request a Demo
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={`fixed inset-x-0 top-[4.25rem] overflow-y-auto bg-primary-dark transition-[max-height] duration-300 ease-in-out lg:hidden ${
          open ? "max-h-[calc(100vh-4.25rem)]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 pb-6 pt-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href ?? (isHome ? link.hash! : `/${link.hash}`)}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-base font-medium text-white/90 hover:bg-white/5"
            >
              {link.label}
            </Link>
          ))}
          <div className="my-2 h-px bg-white/10" />
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="rounded-md px-3 py-3 text-base font-medium text-white/90 hover:bg-white/5"
          >
            Log In
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-primary-blue px-5 py-3 text-center text-base font-semibold text-white"
          >
            Request a Demo
          </Link>
        </div>
      </div>
    </header>
  );
}
