"use client";

import { serviceAreas } from "@/lib/services";
import { motion } from "framer-motion";

export function ServiceAreaSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal font-[family-name:var(--font-playfair)]">
            Serving Central Florida
          </h2>
          <p className="mt-4 text-warm-gray max-w-2xl mx-auto">
            Proudly serving all of Osceola County and the greater Central
            Florida area.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {serviceAreas.map((area, i) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-cream border border-warm-border rounded-lg px-4 py-3 text-center text-charcoal font-medium hover:border-walnut/40 hover:bg-walnut/5 transition-colors"
            >
              {area}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
