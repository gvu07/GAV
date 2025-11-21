'use client';

import { useState, useEffect } from "react";

// Timeline items - most recent at the top
// Add or modify items here
const timelineItems = [
  {
    id: 1,
    date: "2025-01-15",
    title: "Currently Working On",
    description: "Developing financial intelligence tools and authoring research paper on ML-based geomagnetic event detection.",
    category: "Work"
  },
  {
    id: 2,
    date: "2024-12-20",
    title: "Lucentia Platform Launch",
    description: "Successfully launched Lucentia, a financial intelligence platform that automates transaction insights for startups.",
    category: "Project"
  },
  {
    id: 3,
    date: "2024-11-10",
    title: "Research Paper Progress",
    description: "Made significant progress on ML-based geomagnetic event detection research, achieving 94% recall rate.",
    category: "Research"
  },
  {
    id: 4,
    date: "2024-09-05",
    title: "MagLab Systems Dashboard",
    description: "Completed development of the responsive dashboard for University of Michigan researchers.",
    category: "Project"
  },
  {
    id: 5,
    date: "2024-08-15",
    title: "Machine Learning Model Training",
    description: "Trained Random Forest classifier for space weather prediction with improved accuracy metrics.",
    category: "Research"
  },
  {
    id: 6,
    date: "2024-07-01",
    title: "Journey Atelier Website",
    description: "Launched personal branding microsite with cinematic visuals and responsive design.",
    category: "Project"
  },
  {
    id: 7,
    date: "2024-05-20",
    title: "University Research Position",
    description: "Started contributing to space physics research at U-M's Magnetometer Laboratory.",
    category: "Work"
  },
  {
    id: 8,
    date: "2024-03-10",
    title: "Feature Engineering Breakthrough",
    description: "Developed domain-specific features for geomagnetic event classification.",
    category: "Research"
  },
  {
    id: 9,
    date: "2024-01-15",
    title: "Full-Stack Development Focus",
    description: "Began focusing on TypeScript and Next.js for modern web applications.",
    category: "Learning"
  },
  {
    id: 10,
    date: "2023-12-05",
    title: "Project Architecture Design",
    description: "Designed modular services architecture for scalable financial applications.",
    category: "Work"
  },
  {
    id: 11,
    date: "2023-10-20",
    title: "UI/UX Design Exploration",
    description: "Explored luxury-inspired visual design patterns for professional applications.",
    category: "Learning"
  },
  {
    id: 12,
    date: "2023-09-01",
    title: "University of Michigan",
    description: "Started Mechanical Engineering program at the University of Michigan.",
    category: "Education"
  },
  {
    id: 13,
    date: "2023-06-15",
    title: "Photography Journey Begins",
    description: "Started exploring photography as a creative outlet and documentation method.",
    category: "Personal"
  },
  {
    id: 14,
    date: "2023-04-10",
    title: "Web Development Foundation",
    description: "Built foundational skills in React, TypeScript, and modern web development practices.",
    category: "Learning"
  },
  {
    id: 15,
    date: "2023-02-01",
    title: "Programming Deep Dive",
    description: "Intensified focus on Python for data science and machine learning applications.",
    category: "Learning"
  },
];

const ITEMS_PER_PAGE = 5;

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    Work: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    Project: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    Research: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    Learning: "bg-green-500/20 text-green-400 border-green-500/30",
    Education: "bg-pink-500/20 text-pink-400 border-pink-500/30",
    Personal: "bg-rose-500/20 text-rose-400 border-rose-500/30",
  };
  return colors[category] || "bg-white/10 text-white/60 border-white/20";
}

export default function TimelinePage() {
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreItems = () => {
    setIsLoading(true);
    // Simulate a slight delay for better UX
    setTimeout(() => {
      setVisibleItems((prev) => Math.min(prev + ITEMS_PER_PAGE, timelineItems.length));
      setIsLoading(false);
    }, 300);
  };

  const hasMoreItems = visibleItems < timelineItems.length;

  useEffect(() => {
    const handleScroll = () => {
      if (isLoading || !hasMoreItems) return;

      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - 100; // 100px threshold

      if (scrollPosition >= pageHeight) {
        loadMoreItems();
      }
    };

    if (hasMoreItems) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isLoading, hasMoreItems]);

  return (
    <div className="relative bg-ink py-28">
      <div className="section-container">
        <header className="mb-20 space-y-6 text-center md:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-white/60">My Journey</p>
          <h1 className="font-serif text-4xl text-white sm:text-5xl">Timeline</h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-white/75 md:mx-0 md:text-xl">
            A chronological look at key moments, projects, and milestones that have shaped my journey. The most recent activities are at the top.
          </p>
        </header>

        <div className="relative max-w-4xl">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold/60 via-white/20 to-white/10 md:left-1/2 md:-translate-x-0.5"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {timelineItems.slice(0, visibleItems).map((item, index) => (
              <div
                key={item.id}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center md:absolute md:left-1/2 md:-translate-x-1/2">
                  <div className="h-4 w-4 rounded-full border-2 border-gold bg-ink ring-4 ring-ink"></div>
                </div>

                {/* Content card */}
                <div
                  className={`flex-1 rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-white/20 hover:bg-white/[0.05] ${
                    index % 2 === 0 ? 'md:mr-auto md:max-w-[48%]' : 'md:ml-auto md:max-w-[48%]'
                  }`}
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] ${getCategoryColor(item.category)}`}
                    >
                      {item.category}
                    </span>
                  </div>
                  <h3 className="mb-2 font-serif text-2xl text-white">{item.title}</h3>
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-white/50">
                    {formatDate(item.date)}
                  </p>
                  <p className="text-base leading-7 text-white/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Load More button */}
          {hasMoreItems && (
            <div className="mt-16 flex justify-center">
              <button
                onClick={loadMoreItems}
                disabled={isLoading}
                className="rounded-full border border-white/25 bg-white/[0.02] px-8 py-3 text-sm font-semibold uppercase tracking-[0.38em] text-white/80 transition hover:border-gold hover:bg-white/[0.05] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Loading...' : 'Load More'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

