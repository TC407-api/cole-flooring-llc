"use client";

import { Button } from "@/components/ui/button";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/services";
import { motion } from "framer-motion";
import Link from "next/link";

const trustItems = [
  "Disney & Universal Projects",
  "20+ Years Experience",
  "Commercial & Residential",
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-walnut-dark via-walnut to-amber" />
      <div className="absolute inset-0 bg-[url('/images/hero-floor.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-charcoal/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight font-[family-name:var(--font-playfair)]"
        >
          From Hospital ORs
          <br />
          to Hardwood Floors
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto"
        >
          Commercial & residential flooring in Central Florida since 2012.
          Disney. Universal. Medical facilities. Your home.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/contact">
            <Button variant="primary" size="lg">
              Get Free Estimate
            </Button>
          </Link>
          <a href={PHONE_HREF}>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-walnut"
            >
              Call {PHONE_NUMBER}
            </Button>
          </a>
        </motion.div>

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-10"
        >
          {trustItems.map((item, i) => (
            <div key={item} className="flex items-center gap-3">
              {i > 0 && (
                <span className="hidden sm:block w-px h-6 bg-white/30" />
              )}
              <span className="text-white/70 text-sm sm:text-base font-medium">
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
