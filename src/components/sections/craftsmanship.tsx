import Image from "next/image";

export function Craftsmanship() {
  return (
    <section className="py-24 bg-zinc-950 text-white border-y border-walnut-dark">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-cream">No Shortcuts. Just Craftsmanship.</h2>
          <p className="text-lg text-cream/70">
            A floor is only as good as the subfloor underneath it. We don't do "cover-ups." We grind, patch, level, and moisture-test every single slab before a plank ever goes down.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-zinc-900">
            <Image
              src="/images/job-2.jpg"
              alt="Concrete slab preparation and grinding"
              fill
              className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-xl font-bold text-amber mb-1">1. Subfloor Prep</h3>
              <p className="text-sm text-cream/80">Grinding and leveling the concrete slab.</p>
            </div>
          </div>

          <div className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-zinc-900">
            <Image
              src="/images/job-3.jpg"
              alt="Precision measuring and layout"
              fill
              className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-xl font-bold text-amber mb-1">2. Laser Layout</h3>
              <p className="text-sm text-cream/80">Perfectly squared lines. No awkward cuts.</p>
            </div>
          </div>

          <div className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-zinc-900">
            <Image
              src="/images/job-1.jpg"
              alt="Hardwood installation"
              fill
              className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-xl font-bold text-amber mb-1">3. Flawless Install</h3>
              <p className="text-sm text-cream/80">Commercial-grade adhesive and locking systems.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
