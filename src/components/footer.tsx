import {
  ADDRESS,
  BUSINESS_NAME,
  EMAIL,
  PHONE_HREF,
  PHONE_NUMBER,
  getCommercialServices,
  getResidentialServices,
  serviceAreas,
} from "@/lib/services";
import Link from "next/link";

export function Footer() {
  const residential = getResidentialServices();
  const commercial = getCommercialServices();

  return (
    <footer className="bg-charcoal text-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">
              {BUSINESS_NAME}
            </h3>
            <p className="text-warm-white/70 mb-4">
              Commercial & residential flooring in Central Florida since 2012.
            </p>
            <div className="space-y-2 text-warm-white/70">
              <p>{ADDRESS}</p>
              <a href={PHONE_HREF} className="block hover:text-gold transition-colors">
                {PHONE_NUMBER}
              </a>
              <a href={`mailto:${EMAIL}`} className="block hover:text-gold transition-colors">
                {EMAIL}
              </a>
            </div>
          </div>

          {/* Residential Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Residential</h4>
            <ul className="space-y-2">
              {residential.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-warm-white/70 hover:text-gold transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Commercial Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Commercial</h4>
            <ul className="space-y-2">
              {commercial.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-warm-white/70 hover:text-gold transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {serviceAreas.slice(0, 8).map((area) => (
                <li key={area}>
                  <Link
                    href="/service-areas"
                    className="text-warm-white/70 hover:text-gold transition-colors"
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-warm-white/50 text-sm">
            &copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved. Licensed & Insured.
          </p>
          <p className="text-warm-white/30 text-xs">
            Built with{" "}
            <a
              href="https://localliftai.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-warm-white/50 transition-colors"
            >
              LocalLift AI
            </a>
          </p>
        </div>
      </div>

      {/* Mobile bottom padding for sticky CTA */}
      <div className="h-16 lg:hidden" />
    </footer>
  );
}
