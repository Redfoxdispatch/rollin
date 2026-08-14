"use client";

import { useRef } from "react";
import Image from "next/image";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?q=80&w=1800&auto=format&fit=crop";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const top = useTransform(scrollYProgress, [0, 0.55], ["5.5rem", "0rem"], { ease: easeInOut });
  const sides = useTransform(scrollYProgress, [0, 0.55], ["1.5rem", "0rem"], { ease: easeInOut });
  const bottom = useTransform(scrollYProgress, [0, 0.55], ["4.5rem", "0rem"], { ease: easeInOut });
  const radius = useTransform(scrollYProgress, [0, 0.55], ["24px", "0px"], { ease: easeInOut });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"], { ease: easeInOut });
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.7], { ease: easeInOut });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-primary-dark"
    >
      <motion.div
        style={{ top, left: sides, right: sides, bottom, borderRadius: radius }}
        className="absolute overflow-hidden"
      >
        <motion.div style={{ y: imageY }} className="absolute inset-0 top-[-10%] h-[120%]">
          <Image
            src={HERO_IMAGE}
            alt="Aerial view of a fleet of trucks parked in rows"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-linear-to-r from-primary-dark via-primary-dark/70 to-primary-dark/5"
        />
        <div className="absolute inset-0 bg-linear-to-t from-primary-dark/70 via-transparent to-transparent" />
      </motion.div>

      <Container className="relative z-10 flex min-h-screen flex-col justify-center py-28">
        <div className="mx-auto max-w-xl text-center sm:mx-0 sm:text-left">
          <h1 className="font-heading text-4xl font-bold leading-[1.06] text-white sm:text-6xl lg:text-7xl">
            Plan your next move.
            <br />
            Not just your next load.
          </h1>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-white/70 sm:mx-0">
            AI-powered load decisions for carriers, not brokers or load
            boards.
          </p>
          <div className="mt-10 flex flex-row items-center justify-center gap-3 sm:justify-start sm:gap-4">
            <Button href="/contact">
              Sign up now
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Button>
            <Button href="/contact" variant="ghost">
              Get a demo
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
