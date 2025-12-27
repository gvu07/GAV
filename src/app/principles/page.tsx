'use client';

import { useState } from 'react';

interface Principle {
  id: number;
  rank: number;
  title: string;
  essay: string;
  excerpt?: string;
}

const Principles: Principle[] = [
  {
    id: 1,
    rank: 1,
    title: 'I believe in believing in something',
    excerpt: 'The foundation of purpose and direction in life comes from having convictions and principles that guide our decisions and actions.',
    essay: `I believe in believing in something. This might sound circular or even trivial, but I think it's one of the most important principles I hold.

The world is full of uncertainty, ambiguity, and complexity. Without Principles—whether they're about how to live, what matters, how to treat others, or what we're working toward—we drift. We become reactive rather than intentional. We follow paths set by others rather than carving our own.

Believing in something doesn't mean being rigid or closed-minded. It means having a foundation. It means having principles that guide you when decisions are hard, when the path isn't clear, when you're faced with trade-offs. Your Principles are your compass.

I've found that the people I admire most, the ones who create meaningful impact and live with purpose, all have strong Principles. They might disagree on what those Principles are, but they share the conviction that having Principles matters. They've thought deeply about what they stand for, and they let those Principles inform their actions.

This Principle—that believing in something is essential—is itself a Principle. It's meta, but it's also foundational. It's why I'm intentional about what I believe, why I write about my Principles, and why I'm open to evolving them as I learn and grow.

So I believe in believing in something. And I believe that being explicit about those Principles, writing them down, sharing them, and being willing to examine and refine them, is how we build lives of purpose and meaning.`
  }
];

export default function PrinciplesPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpansion = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Sort Principles by rank
  const sortedPrinciples = [...Principles].sort((a, b) => a.rank - b.rank);

  return (
    <div className="relative bg-ink py-28">
      <div className="section-container space-y-16">
        <header className="space-y-6 text-center md:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-black/60">Core Principles</p>
          <h1 className="font-serif text-4xl text-black sm:text-5xl">My Personal Principles</h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-black/75 md:mx-0 md:text-lg">
            Sharing the values and ideals that guide my thinking, decisions, and approach to life.
          </p>
        </header>

        <div className="max-w-4xl space-y-6">
          {sortedPrinciples.map((Principle) => (
            <article
              key={Principle.id}
              className="rounded-3xl border border-black/10 bg-black/[0.02] p-8 transition hover:border-black/25 hover:bg-black/[0.05] cursor-pointer"
              onClick={() => toggleExpansion(Principle.id)}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold bg-gold/10">
                    <span className="font-serif text-2xl font-bold text-gold">{Principle.rank}</span>
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h2 className="font-serif text-3xl text-black mb-3">{Principle.title}</h2>
                  
                  {Principle.excerpt && (
                    <p className="text-base leading-7 text-black/70 mb-4">{Principle.excerpt}</p>
                  )}
                  
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      expandedId === Principle.id ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pt-4 border-t border-black/10 mt-4">
                      <div className="prose prose-lg max-w-none">
                        <p className="text-base leading-8 text-black/75 whitespace-pre-line">
                          {Principle.essay}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-black/60 hover:text-black transition"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleExpansion(Principle.id);
                    }}
                  >
                    {expandedId === Principle.id ? 'Read Less' : 'Read More'}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {Principles.length === 0 && (
          <div className="text-center py-20">
            <p className="text-black/50 text-lg">No Principles listed yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
