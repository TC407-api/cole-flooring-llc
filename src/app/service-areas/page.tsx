import { Button } from "@/components/ui/button";
import { PHONE_HREF, PHONE_NUMBER, serviceAreas } from "@/lib/services";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Areas | Central Florida Flooring",
  description:
    "Cole Flooring LLC serves Kissimmee, St. Cloud, Celebration, Orlando, Poinciana, and all of Osceola County. Residential and commercial flooring.",
};

const areaDetails = [
  {
    name: "Kissimmee",
    description:
      "Our home base. We know every neighborhood in Kissimmee and have completed hundreds of projects here — from homes near Old Town to new construction in Reunion.",
  },
  {
    name: "St. Cloud",
    description:
      "Serving the growing St. Cloud community with quality flooring. From established neighborhoods to Narcoossee corridor developments.",
  },
  {
    name: "Celebration",
    description:
      "The beautiful homes of Celebration deserve beautiful floors. We've installed hardwood, tile, and LVP in homes throughout this master-planned community.",
  },
  {
    name: "Orlando",
    description:
      "From downtown condos to suburban family homes, we serve the greater Orlando metro area with both residential and commercial flooring services.",
  },
  {
    name: "Poinciana",
    description:
      "Affordable, quality flooring for the Poinciana community. We offer the same premium installation standards at every price point.",
  },
  {
    name: "Haines City",
    description:
      "Serving Haines City and the Davenport corridor. Convenient to our base, with fast response times and local knowledge.",
  },
];

export default function ServiceAreasPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-charcoal font-[family-name:var(--font-playfair)]">
            Areas We Serve
          </h1>
          <p className="mt-4 text-warm-gray max-w-2xl mx-auto text-lg">
            Proudly serving all of Osceola County and the greater Central
            Florida area since 2012.
          </p>
        </div>

        {/* Featured Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {areaDetails.map((area) => (
            <div
              key={area.name}
              className="bg-cream border border-warm-border rounded-xl p-6"
            >
              <h2 className="text-xl font-bold text-charcoal mb-3">
                {area.name}, FL
              </h2>
              <p className="text-warm-gray">{area.description}</p>
            </div>
          ))}
        </div>

        {/* All Areas Grid */}
        <div className="bg-warm-white rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-charcoal mb-6 text-center font-[family-name:var(--font-playfair)]">
            Complete Service Area
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {serviceAreas.map((area) => (
              <div
                key={area}
                className="bg-white border border-warm-border rounded-lg px-4 py-3 text-center text-charcoal font-medium"
              >
                {area}
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-warm-gray">
            Don&apos;t see your city? We likely serve your area too.{" "}
            <a href={PHONE_HREF} className="text-walnut font-medium hover:underline">
              Give us a call
            </a>{" "}
            to check.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-walnut rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold text-white font-[family-name:var(--font-playfair)]">
            Need Flooring in Central Florida?
          </h2>
          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            We provide free estimates throughout our service area. Same-week
            consultations available.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
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
  );
}
