"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getCommercialServices, getResidentialServices } from "@/lib/services";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

const serviceIcons: Record<string, string> = {
  hardwood: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  tile: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
  "lvp-vinyl": "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  laminate: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  carpet: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
  epoxy: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
  commercial: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  "medical-healthcare": "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  hospitality: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
};

export function ServicesGrid() {
  const residential = getResidentialServices();
  const commercial = getCommercialServices();

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal font-[family-name:var(--font-playfair)]">
            Our Services
          </h2>
          <p className="mt-4 text-warm-gray max-w-2xl mx-auto">
            From residential renovations to commercial installations, we bring
            the same commercial-grade precision to every project.
          </p>
        </motion.div>

        {/* Residential */}
        <h3 className="text-xl font-semibold text-walnut mb-6 uppercase tracking-wider">
          Residential
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {residential.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={`/services/${service.slug}`}>
                <Card className="h-full group cursor-pointer">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-walnut/10 flex items-center justify-center mb-3 group-hover:bg-walnut/20 transition-colors">
                      <svg
                        className="w-6 h-6 text-walnut"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d={serviceIcons[service.slug] || serviceIcons.commercial}
                        />
                      </svg>
                    </div>
                    <CardTitle className="group-hover:text-walnut transition-colors">
                      {service.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{service.shortDescription}</p>
                    <span className="inline-block mt-3 text-walnut font-medium text-sm group-hover:underline">
                      Learn More &rarr;
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Commercial */}
        <h3 className="text-xl font-semibold text-walnut mb-6 uppercase tracking-wider">
          Commercial
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {commercial.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={`/services/${service.slug}`}>
                <Card
                  className={cn(
                    "h-full group cursor-pointer border-walnut/30"
                  )}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-lg bg-walnut/10 flex items-center justify-center group-hover:bg-walnut/20 transition-colors">
                        <svg
                          className="w-6 h-6 text-walnut"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d={serviceIcons[service.slug] || serviceIcons.commercial}
                          />
                        </svg>
                      </div>
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
                      Learn More &rarr;
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
