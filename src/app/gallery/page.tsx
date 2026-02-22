import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Project Gallery",
  description:
    "See our flooring transformations. Before and after photos of hardwood, tile, LVP, epoxy, and commercial projects in Central Florida.",
};

const projects = [
  {
    before: "/images/before-1.jpg",
    after: "/images/after-1.jpg",
    title: "Kitchen Tile Transformation",
    location: "Kissimmee, FL",
    type: "Tile Flooring",
    description:
      "Complete kitchen floor overhaul. Removed worn linoleum and installed large-format porcelain tile with matching grout for a seamless, modern look.",
  },
  {
    before: "/images/before-2.jpg",
    after: "/images/after-2.jpg",
    title: "Living Room Hardwood Install",
    location: "Celebration, FL",
    type: "Hardwood Flooring",
    description:
      "Replaced stained carpet with beautiful engineered oak hardwood throughout the main living area. Includes custom stain matching and professional finishing.",
  },
  {
    before: "/images/before-3.jpg",
    after: "/images/after-3.jpg",
    title: "Garage Epoxy Coating",
    location: "St. Cloud, FL",
    type: "Epoxy Flooring",
    description:
      "Two-car garage transformed with metallic epoxy coating. Includes diamond grinding prep, crack repair, and UV-stable topcoat.",
  },
  {
    before: "/images/before-4.jpg",
    after: "/images/after-4.jpg",
    title: "Master Bedroom LVP",
    location: "Poinciana, FL",
    type: "LVP Flooring",
    description:
      "Luxury vinyl plank in a warm walnut tone. Waterproof and pet-friendly, installed with premium underlayment for comfort.",
  },
  {
    before: "/images/before-5.jpg",
    after: "/images/after-5.jpg",
    title: "Commercial Office Carpet Tile",
    location: "Orlando, FL",
    type: "Commercial Flooring",
    description:
      "Full office space fitted with premium carpet tile. Modular design allows easy replacement of damaged sections.",
  },
  {
    before: "/images/before-6.jpg",
    after: "/images/after-6.jpg",
    title: "Medical Clinic Sheet Vinyl",
    location: "Kissimmee, FL",
    type: "Medical Flooring",
    description:
      "Healthcare-grade sheet vinyl with heat-welded seams and flashcove base. Meets infection control standards for clinical environments.",
  },
];

export default function GalleryPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-charcoal font-[family-name:var(--font-playfair)]">
            Project Gallery
          </h1>
          <p className="mt-4 text-warm-gray max-w-2xl mx-auto text-lg">
            Drag the slider on each project to see the transformation. Real
            projects from real Central Florida homes and businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div key={project.title} className="space-y-4">
              <BeforeAfterSlider
                beforeImage={project.before}
                afterImage={project.after}
              />
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-walnut bg-walnut/10 px-2 py-1 rounded">
                    {project.type}
                  </span>
                  <span className="text-warm-gray text-sm">
                    {project.location}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-charcoal">
                  {project.title}
                </h2>
                <p className="mt-1 text-warm-gray">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-cream border border-warm-border rounded-2xl p-10">
          <h2 className="text-2xl font-bold text-charcoal font-[family-name:var(--font-playfair)]">
            Want Results Like These?
          </h2>
          <p className="mt-3 text-warm-gray">
            Every project starts with a free estimate. Let&apos;s talk about
            transforming your space.
          </p>
          <Link href="/contact" className="inline-block mt-6">
            <Button variant="primary" size="lg">
              Get Free Estimate
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
