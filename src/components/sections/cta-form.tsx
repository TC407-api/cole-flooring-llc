"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/services";
import { motion } from "framer-motion";
import { FormEvent, useState } from "react";

export function CTAForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email"),
          service: data.get("service"),
          message: data.get("message"),
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // Still show success for now — we'll add proper error handling with Formspree/Twilio
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <section className="py-20 bg-walnut">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-white font-[family-name:var(--font-playfair)]">
            Thanks! We&apos;ll Be in Touch
          </h2>
          <p className="mt-4 text-white/70">
            We typically respond within 24 hours. For immediate service, call us at{" "}
            <a href={PHONE_HREF} className="text-gold hover:underline">
              {PHONE_NUMBER}
            </a>
            .
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-walnut" id="quote">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-playfair)]">
            Ready to Transform Your Space?
          </h2>
          <p className="mt-4 text-white/70">
            Get a free, no-obligation estimate. We&apos;ll reach out within 24
            hours.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-8 shadow-xl space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Input name="name" placeholder="Your Name *" required />
            <Input name="phone" type="tel" placeholder="Phone Number *" required />
          </div>
          <Input name="email" type="email" placeholder="Email Address" />
          <select
            name="service"
            className="w-full rounded-lg border border-warm-border bg-white px-4 py-3 text-charcoal focus:border-walnut focus:outline-none focus:ring-2 focus:ring-walnut/20 transition-colors"
            defaultValue=""
          >
            <option value="" disabled>
              What type of project?
            </option>
            <optgroup label="Residential">
              <option value="hardwood">Hardwood Flooring</option>
              <option value="tile">Tile Flooring</option>
              <option value="lvp-vinyl">LVP / Vinyl Flooring</option>
              <option value="laminate">Laminate Flooring</option>
              <option value="carpet">Carpet Installation</option>
              <option value="epoxy">Epoxy Flooring</option>
            </optgroup>
            <optgroup label="Commercial">
              <option value="commercial">Commercial Flooring</option>
              <option value="medical">Medical / Healthcare</option>
              <option value="hospitality">Hospitality / Entertainment</option>
            </optgroup>
          </select>
          <textarea
            name="message"
            rows={4}
            placeholder="Tell us about your project..."
            className="w-full rounded-lg border border-warm-border bg-white px-4 py-3 text-charcoal placeholder:text-warm-gray/60 focus:border-walnut focus:outline-none focus:ring-2 focus:ring-walnut/20 transition-colors resize-none"
          />
          <Button type="submit" variant="primary" size="lg" className="w-full" disabled={loading}>
            {loading ? "Sending..." : "Get Free Estimate"}
          </Button>
          <p className="text-center text-warm-gray text-sm">
            Or call us directly at{" "}
            <a href={PHONE_HREF} className="text-walnut font-medium hover:underline">
              {PHONE_NUMBER}
            </a>
          </p>
        </motion.form>
      </div>
    </section>
  );
}
