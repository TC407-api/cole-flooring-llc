import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { BUSINESS_NAME } from "@/lib/services";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${BUSINESS_NAME} | Commercial & Residential Flooring in Kissimmee FL`,
    template: `%s | ${BUSINESS_NAME}`,
  },
  description:
    "Premium commercial & residential flooring in Central Florida since 2012. Disney, Universal, medical facilities. Hardwood, tile, LVP, epoxy. Free estimates!",
  keywords: [
    "flooring contractor Kissimmee FL",
    "hardwood flooring installation",
    "tile flooring Central Florida",
    "commercial flooring Orlando",
    "medical flooring contractor",
    "LVP installation Kissimmee",
    "Cole Flooring LLC",
  ],
  openGraph: {
    title: `${BUSINESS_NAME} | Commercial & Residential Flooring`,
    description:
      "Premium flooring installation in Central Florida. 20+ years experience. Disney & Universal projects. Free estimates!",
    url: "https://coleflooringllc.com",
    siteName: BUSINESS_NAME,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://coleflooringllc.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: BUSINESS_NAME,
              description:
                "Commercial & residential flooring contractor serving Central Florida since 2012.",
              url: "https://coleflooringllc.com",
              telephone: "+14075550192",
              email: "travis@coleflooringllc.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kissimmee",
                addressRegion: "FL",
                postalCode: "34758",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 28.2919,
                longitude: -81.4076,
              },
              areaServed: [
                "Kissimmee",
                "St. Cloud",
                "Celebration",
                "Orlando",
                "Poinciana",
                "Haines City",
                "Davenport",
              ],
              priceRange: "$$",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "07:00",
                closes: "18:00",
              },
              sameAs: [],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "47",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-[family-name:var(--font-inter)]`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
