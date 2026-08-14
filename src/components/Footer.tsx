"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaXTwitter, FaFacebookF } from "react-icons/fa6";
import { Logo } from "./Logo";

const PRODUCT_LINKS = [
  { label: "Features", hash: "#features" },
  { label: "How It Works", hash: "#how-it-works" },
  { label: "Security", hash: "#security" },
  { label: "FAQ", hash: "#faq" },
];

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 20;
      setAtBottom(scrolledToBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <footer className="mx-3 mt-6 mb-3 flex flex-col-reverse overflow-hidden rounded-3xl bg-primary-dark text-white sm:mx-4 sm:mt-8 sm:mb-4 lg:flex-col">
      <div className="flex flex-col items-center justify-center overflow-hidden px-6 pt-4 pb-14 sm:py-16">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={atBottom ? { y: 10, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-5"
        >
          <span className="font-heading text-5xl font-bold text-white sm:text-7xl lg:text-9xl">
            Keep it
          </span>
          <Image
            src="/brand/logo-fullname.png"
            alt="Rollin"
            width={2135}
            height={736}
            className="h-12 w-auto brightness-0 invert sm:h-24 lg:h-36"
          />
        </motion.div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-10 lg:px-8">
        <div className="grid grid-cols-1 gap-10 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-2">
            <Logo theme="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              We simplify logistics with smart technology so you can focus on
              growing your business.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                aria-label="Rollin on LinkedIn"
                className="text-white/50 transition-colors hover:text-white"
              >
                <FaLinkedinIn className="h-4.5 w-4.5" />
              </a>
              <a
                href="#"
                aria-label="Rollin on X"
                className="text-white/50 transition-colors hover:text-white"
              >
                <FaXTwitter className="h-4.5 w-4.5" />
              </a>
              <a
                href="#"
                aria-label="Rollin on Facebook"
                className="text-white/50 transition-colors hover:text-white"
              >
                <FaFacebookF className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold text-white">
              Product
            </h3>
            <ul className="mt-4 space-y-3">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={`/${link.hash}`}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-6 font-heading text-sm font-semibold text-white">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li>100 Main Street, Suite 200, Cheyenne, WY 82001</li>
              <li>
                <a
                  href="mailto:hello@rollin.ai"
                  className="transition-colors hover:text-white"
                >
                  hello@rollin.ai
                </a>
              </li>
              <li>+1 123 456 7890</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} Rollin. All rights reserved.
          </p>
          <p>Built for FMCSA-licensed motor carriers.</p>
        </div>
      </div>
    </footer>
  );
}
