"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "Maria G.",
    city: "Kissimmee, FL",
    rating: 5,
    text: "Travis and his team did an amazing job on our kitchen tile. They were on time, clean, and the result is stunning. You can tell this guy has commercial experience — the precision is on another level.",
  },
  {
    name: "James & Donna R.",
    city: "Celebration, FL",
    rating: 5,
    text: "We had our entire first floor done in engineered hardwood. Cole Flooring was professional from quote to completion. The floors look like something out of a magazine. Highly recommend!",
  },
  {
    name: "Robert T.",
    city: "St. Cloud, FL",
    rating: 5,
    text: "Got the metallic epoxy in my garage — it looks incredible. My neighbors keep stopping by to see it. Travis walked me through every option and the price was very fair.",
  },
  {
    name: "Dr. Sarah M.",
    city: "Orlando, FL",
    rating: 5,
    text: "Cole Flooring handled the flooring for our dialysis clinic. The heat-welded seams and flashcove work were perfect. They understood healthcare compliance requirements from day one.",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? "text-gold" : "text-warm-border"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Reviews() {
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
            What Our Clients Say
          </h2>
          <p className="mt-4 text-warm-gray">
            Real reviews from real customers across Central Florida.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-cream rounded-xl border border-warm-border p-6"
            >
              <Stars rating={review.rating} />
              <p className="mt-4 text-charcoal leading-relaxed italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-walnut/10 flex items-center justify-center text-walnut font-bold">
                  {review.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-charcoal text-sm">
                    {review.name}
                  </p>
                  <p className="text-warm-gray text-xs">{review.city}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
