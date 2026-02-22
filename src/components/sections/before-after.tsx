"use client";

import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    before: "/images/before-1.jpg",
    after: "/images/after-1.jpg",
    title: "Kitchen Tile Transformation",
    location: "Kissimmee, FL",
    description: "Outdated linoleum replaced with modern porcelain tile.",
  },
  {
    before: "/images/before-2.jpg",
    after: "/images/after-2.jpg",
    title: "Living Room Hardwood Install",
    location: "Celebration, FL",
    description: "Carpet removed, engineered oak hardwood installed throughout.",
  },
  {
    before: "/images/before-3.jpg",
    after: "/images/after-3.jpg",
    title: "Garage Epoxy Coating",
    location: "St. Cloud, FL",
    description: "Bare concrete transformed into a showroom-quality garage floor.",
  },
];

export function BeforeAfterSection() {
  return (
    <section className="py-20 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal font-[family-name:var(--font-playfair)]">
            See the Transformation
          </h2>
          <p className="mt-4 text-warm-gray max-w-2xl mx-auto">
            Drag the slider to see the before and after. Real projects, real
            results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="space-y-4"
            >
              <BeforeAfterSlider
                beforeImage={project.before}
                afterImage={project.after}
              />
              <div>
                <h3 className="text-lg font-semibold text-charcoal">
                  {project.title}
                </h3>
                <p className="text-warm-gray text-sm">
                  {project.location} &mdash; {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/gallery">
            <Button variant="outline">See More Projects &rarr;</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
