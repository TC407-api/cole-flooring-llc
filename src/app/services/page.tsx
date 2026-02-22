import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  getCommercialServices,
  getResidentialServices,
} from "@/lib/services";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Flooring Services",
  description:
    "Complete residential and commercial flooring services in Kissimmee FL. Hardwood, tile, LVP, laminate, carpet, epoxy, medical, and hospitality flooring.",
};

export default function ServicesPage() {
  const residential = getResidentialServices();
  const commercial = getCommercialServices();

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-charcoal font-[family-name:var(--font-playfair)]">
            Our Flooring Services
          </h1>
          <p className="mt-4 text-warm-gray max-w-2xl mx-auto text-lg">
            From your living room to hospital operating rooms — we bring the same
            commercial-grade quality to every project.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-walnut mb-6 uppercase tracking-wider">
          Residential
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {residential.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              <Card className="h-full group cursor-pointer">
                <CardHeader>
                  <CardTitle className="group-hover:text-walnut transition-colors">
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{service.shortDescription}</p>
                  <span className="inline-block mt-3 text-walnut font-medium text-sm group-hover:underline">
                    View Details &rarr;
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <h2 className="text-2xl font-semibold text-walnut mb-6 uppercase tracking-wider">
          Commercial
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {commercial.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              <Card className="h-full group cursor-pointer border-walnut/30">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gold bg-gold/10 px-2 py-1 rounded">
                      Commercial
                    </span>
                  </div>
                  <CardTitle className="group-hover:text-walnut transition-colors">
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{service.shortDescription}</p>
                  <span className="inline-block mt-3 text-walnut font-medium text-sm group-hover:underline">
                    View Details &rarr;
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
