import Link from "next/link";
import type { Metadata } from "next";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "Flooring Insights & Buying Guides | Cole Flooring LLC",
  description: "Expert advice on hardwood, LVP, and tile installation for Central Florida homeowners and commercial properties.",
};

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1C1917] py-24">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Flooring Insights</h1>
        <p className="text-xl text-[#1C1917]/70 mb-16">
          Expert advice from 20+ years of commercial and residential installation.
        </p>
        
        <div className="space-y-12">
          {posts.map((post) => (
            <article key={post.slug} className="group border-b border-[#6B4226]/10 pb-12 last:border-0">
              <div className="flex gap-2 mb-4">
                {post.tags.map(tag => (
                  <span key={tag} className="text-xs font-bold uppercase tracking-widest text-[#B8860B] bg-[#B8860B]/10 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={`/blog/${post.slug}`} className="block">
                <h2 className="text-3xl font-serif font-bold text-[#1C1917] group-hover:text-[#6B4226] transition-colors mb-3">
                  {post.title}
                </h2>
              </Link>
              <p className="text-lg text-[#1C1917]/70 mb-4 leading-relaxed">{post.description}</p>
              <div className="flex items-center text-sm font-medium text-[#1C1917]/50 gap-4">
                <span>{post.date}</span>
                <span>By {post.author}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
