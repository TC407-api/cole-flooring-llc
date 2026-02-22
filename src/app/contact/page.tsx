import { ContactForm } from "./contact-form";
import {
  ADDRESS,
  BUSINESS_NAME,
  EMAIL,
  PHONE_HREF,
  PHONE_NUMBER,
} from "@/lib/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Estimate",
  description:
    "Contact Cole Flooring LLC for a free flooring estimate in Kissimmee and Central Florida. Call or fill out our quick form. We respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-charcoal font-[family-name:var(--font-playfair)]">
            Get in Touch
          </h1>
          <p className="mt-4 text-warm-gray max-w-2xl mx-auto text-lg">
            Ready to start your flooring project? Fill out the form below or
            give us a call. We respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="bg-cream border border-warm-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-walnut/10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-walnut"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-charcoal">Phone</h3>
              </div>
              <a
                href={PHONE_HREF}
                className="text-walnut font-medium text-lg hover:underline"
              >
                {PHONE_NUMBER}
              </a>
              <p className="text-warm-gray text-sm mt-1">
                Mon-Sat 7:00 AM - 6:00 PM
              </p>
            </div>

            <div className="bg-cream border border-warm-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-walnut/10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-walnut"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-charcoal">Email</h3>
              </div>
              <a
                href={`mailto:${EMAIL}`}
                className="text-walnut font-medium hover:underline"
              >
                {EMAIL}
              </a>
              <p className="text-warm-gray text-sm mt-1">
                We respond within 24 hours
              </p>
            </div>

            <div className="bg-cream border border-warm-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-walnut/10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-walnut"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-charcoal">Location</h3>
              </div>
              <p className="text-charcoal font-medium">{BUSINESS_NAME}</p>
              <p className="text-warm-gray text-sm mt-1">{ADDRESS}</p>
              <p className="text-warm-gray text-sm">
                Serving all of Central Florida
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
