import { Button } from "@/components/ui/button";
import {
  PHONE_HREF,
  PHONE_NUMBER,
  getServiceBySlug,
  services,
} from "@/lib/services";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <div className="bg-gradient-to-br from-walnut-dark via-walnut to-amber py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {service.category === "commercial" && (
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-gold bg-gold/20 px-3 py-1 rounded-full mb-4">
              Commercial
            </span>
          )}
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-[family-name:var(--font-playfair)]">
            {service.name}
          </h1>
          <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">
            {service.shortDescription}
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Description */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-warm-gray leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-charcoal mb-6 font-[family-name:var(--font-playfair)]">
            Why Choose Us for {service.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-gold flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-charcoal">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-charcoal mb-6 font-[family-name:var(--font-playfair)]">
            Our Process
          </h2>
          <ol className="space-y-4">
            {service.process.map((step, i) => (
              <li key={step} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-walnut text-white flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </span>
                <span className="text-charcoal pt-1">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* FAQ */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-charcoal mb-6 font-[family-name:var(--font-playfair)]">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {service.faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-lg font-semibold text-charcoal mb-2">
                  {faq.question}
                </h3>
                <p className="text-warm-gray leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* FAQ JSON-LD */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: service.faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                  },
                })),
              }),
            }}
          />
        </div>

        {/* CTA */}
        <div className="mt-16 bg-cream border border-warm-border rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-charcoal font-[family-name:var(--font-playfair)]">
            Ready for Your {service.name} Project?
          </h2>
          <p className="mt-3 text-warm-gray">
            Get a free estimate with no obligation. We&apos;ll come to you.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Get Free Estimate
              </Button>
            </Link>
            <a href={PHONE_HREF}>
              <Button variant="outline" size="lg">
                Call {PHONE_NUMBER}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
