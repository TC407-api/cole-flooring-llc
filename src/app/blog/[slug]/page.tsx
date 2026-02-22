import { notFound } from "next/navigation";
import Link from "next/link";
import { posts } from "../posts";
import ReactMarkdown from "react-markdown";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  
  return {
    title: `${post.title} | Cole Flooring LLC`,
    description: post.description,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1C1917] py-24">
      <div className="max-w-3xl mx-auto px-4">
        <nav className="text-sm text-[#1C1917]/50 mb-12">
          <Link href="/" className="hover:text-[#6B4226]">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-[#6B4226]">Insights</Link>
          <span className="mx-2">/</span>
          <span className="text-[#1C1917] truncate">{post.title}</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1C1917] mb-6 leading-tight">
          {post.title}
        </h1>
        
        <div className="flex items-center text-sm font-medium text-[#1C1917]/50 gap-4 mb-12 pb-8 border-b border-[#6B4226]/10">
          <span>{post.date}</span>
          <span>•</span>
          <span>By {post.author}</span>
        </div>

        <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-[#1C1917] prose-a:text-[#B8860B] prose-strong:text-[#1C1917]">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-[#1C1917] text-[#FFF8F0] rounded-2xl p-10 text-center shadow-xl">
          <h2 className="text-3xl font-serif font-bold mb-4">Ready to Transform Your Space?</h2>
          <p className="text-[#FFF8F0]/70 mb-8 text-lg max-w-xl mx-auto">
            Get commercial-grade craftsmanship in your home. We measure, test, and deliver a rock-solid quote with zero pressure.
          </p>
          <a href="tel:+14075550192" className="inline-block bg-[#B8860B] hover:bg-[#A07409] text-white font-bold px-8 py-4 rounded shadow-lg transition text-lg">
            Call (407) 555-0192
          </a>
        </div>
      </div>
    </main>
  );
}
