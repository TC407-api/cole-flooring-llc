import { Button } from "@/components/ui/button";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/services";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Cole Flooring LLC",
  description:
    "Meet Travis Cole — 20+ years of flooring experience from Disney and hospital ORs to your home. Licensed, insured, and locally owned in Kissimmee, FL.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-charcoal font-[family-name:var(--font-playfair)]">
            About Cole Flooring
          </h1>
          <p className="mt-4 text-warm-gray text-lg">
            20+ years of flooring expertise. Commercial roots. Local pride.
          </p>
        </div>

        {/* Story */}
        <div className="space-y-8 text-lg text-charcoal leading-relaxed">
          <div className="bg-cream border border-warm-border rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-charcoal mb-4 font-[family-name:var(--font-playfair)]">
              From Commercial to Your Living Room
            </h2>
            <p>
              Most flooring contractors start in residential and never touch
              commercial work. Travis Cole did it the other way around.
            </p>
            <p className="mt-4">
              With over two decades in the flooring industry, Travis built his
              expertise on the most demanding projects imaginable — hospital
              operating rooms where a single improperly sealed seam could
              compromise patient safety. Theme park installations at Disney and
              Universal where millions of feet would test every square inch.
              Convention centers, dialysis clinics, Golden Corral locations
              across Central Florida.
            </p>
            <p className="mt-4">
              In 2012, he founded Cole Flooring LLC in Kissimmee, FL to bring
              that same commercial-grade precision to homeowners who deserve
              better than &ldquo;good enough.&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-walnut/5 rounded-xl">
              <div className="text-4xl font-bold text-walnut font-[family-name:var(--font-playfair)]">
                20+
              </div>
              <p className="mt-2 text-warm-gray">Years Experience</p>
            </div>
            <div className="text-center p-6 bg-walnut/5 rounded-xl">
              <div className="text-4xl font-bold text-walnut font-[family-name:var(--font-playfair)]">
                1000+
              </div>
              <p className="mt-2 text-warm-gray">Projects Completed</p>
            </div>
            <div className="text-center p-6 bg-walnut/5 rounded-xl">
              <div className="text-4xl font-bold text-walnut font-[family-name:var(--font-playfair)]">
                5.0
              </div>
              <p className="mt-2 text-warm-gray">Star Rating</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4 font-[family-name:var(--font-playfair)]">
              The Cole Flooring Difference
            </h2>
            <p>
              When you hire a contractor who has installed flooring in hospital
              operating rooms, you get a different level of attention to detail.
              Heat-welded seams that are invisible. Subfloor preparation that
              most residential contractors skip. Moisture testing that prevents
              problems years down the road.
            </p>
            <p className="mt-4">
              We don&apos;t cut corners because we learned in environments where
              cutting corners isn&apos;t an option. That commercial DNA is baked
              into every residential project we touch.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4 font-[family-name:var(--font-playfair)]">
              Local, Licensed & Insured
            </h2>
            <p>
              Cole Flooring LLC is fully licensed and insured, operating out of
              Kissimmee, FL. We serve all of Osceola County and the greater
              Central Florida area. When you call, you get Travis — not a call
              center, not a salesperson, but the owner who will be overseeing
              your project from start to finish.
            </p>
          </div>

          <div className="bg-walnut rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">
              Let&apos;s Talk About Your Project
            </h2>
            <p className="text-white/70 mb-6">
              Whether it&apos;s a single room or an entire commercial build-out,
              we&apos;d love to hear about what you have in mind.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
