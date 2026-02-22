export default function Home() {
  return (
    <main className="min-h-screen bg-[#1C1917] flex flex-col items-center justify-center p-4 text-center">
      <div className="w-16 h-16 bg-[#B8860B] rounded-xl flex items-center justify-center text-white font-bold text-3xl mb-8">
        C
      </div>
      <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#FFF8F0] mb-4">
        Cole Flooring LLC
      </h1>
      <p className="text-xl text-[#B8860B] font-medium tracking-widest uppercase mb-8">
        Coming Soon
      </p>
      <p className="text-[#FFF8F0]/50 max-w-md mx-auto">
        Serving Kissimmee, Orlando, and Central Florida with premium residential and commercial flooring since 2012.
      </p>
    </main>
  );
}
