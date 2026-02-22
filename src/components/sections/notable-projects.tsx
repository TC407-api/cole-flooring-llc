"use client";

import { motion } from "framer-motion";

const clients = [
  "Walt Disney World",
  "Universal Studios",
  "Convention Centers",
  "Medical Facilities",
  "Golden Corral",
  "Dialysis Centers",
  "Hospital ORs",
  "Hotels & Resorts",
];

export function NotableProjects() {
  return (
    <section className="py-12 bg-walnut overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
        >
          <span className="text-white/60 text-sm font-medium uppercase tracking-wider">
            Trusted By
          </span>
          {clients.map((client) => (
            <span
              key={client}
              className="text-white/80 text-sm sm:text-base font-medium"
            >
              {client}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
