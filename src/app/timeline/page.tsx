'use client';

import { useState, useEffect } from "react";

// Timeline items - most recent at the top
// Dates match resume information
const timelineItems = [
  {
    id: 1,
    date: "2025-09-01",
    title: "Lucentia",
    description: "Developing full-stack financial intelligence platform using Next.js, React, and PostgreSQL that classifies spending, detects anomalies, and reduces manual accounting time by 90%.",
    category: "Project",
    dateEnd: null
  },
  {
    id: 2,
    date: "2025-09-01",
    title: "UM Electric Boat",
    description: "Designing and manufacturing world record-fastest electric boat hull, optimizing efficiency and safety using SolidWorks and Siemens NX across engineering disciplines.",
    category: "Project",
    dateEnd: null
  },
  {
    id: 3,
    date: "2025-08-01",
    title: "Research Assistant at U-M Magnetometer Laboratory",
    description: "Developing ML models achieving 94% recall for geomagnetic storm prediction using Random Forest classifiers, enabling early warning systems for satellite infrastructure. Authoring research paper and analyzing magnetometer data to correlate solar events with geomagnetic fluctuations.",
    category: "Work",
    dateEnd: null
  },
  {
    id: 4,
    date: "2025-05-01",
    title: "Associate Degree Completion",
    description: "Earned Associate of Science in General Engineering from Montgomery College with GPA: 3.7/4.0.",
    category: "Education",
    dateEnd: "2025-05-01"
  },
  {
    id: 5,
    date: "2024-08-01",
    title: "Phi Theta Kappa Vice President",
    description: "Elected Vice President of Phi Theta Kappa College Honor Society at Montgomery College, coordinating events engaging 400+ honor society members and representing chapter at regional meetings.",
    category: "Leadership",
    dateEnd: "2025-06-30"
  },
  {
    id: 6,
    date: "2024-05-01",
    title: "Mathnasium Math Instructor",
    description: "Instructed K-12 students in Calculus I–III for AP exam preparation; developed personalized learning plans to improve mathematical reasoning and STEM interest.",
    category: "Work",
    dateEnd: "2025-06-30"
  },
  {
    id: 7,
    date: "2023-12-01",
    title: "Student Government Association Treasurer",
    description: "Elected Treasurer of Montgomery College Student Government Association, managing $40,000 budget, overseeing financial allocations for 40+ student organizations and approving $28,000+ in resources.",
    category: "Leadership",
    dateEnd: "2024-06-30"
  },
  {
    id: 8,
    date: "2023-02-01",
    title: "AWS Powered Autonomous Robot Car",
    description: "Programmed reward functions in Python for autonomous navigation; designed collision-resistant outer shell using Creo Parametric.",
    category: "Project",
    dateEnd: "2023-06-30"
  },
];

const ITEMS_PER_PAGE = 5;

function formatDate(dateString: string, dateEnd?: string | null): string {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  if (dateEnd) {
    const endDate = new Date(dateEnd);
    const formattedEndDate = endDate.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    return `${formattedDate} – ${formattedEndDate}`;
  }
  
  return dateString === new Date().toISOString().split('T')[0] 
    ? `Currently (since ${formattedDate})`
    : date >= new Date() 
    ? `Starting ${formattedDate}`
    : `Since ${formattedDate}`;
}

function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    Work: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    Project: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    Research: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    Learning: "bg-green-500/20 text-green-400 border-green-500/30",
    Education: "bg-gold/20 text-gold border-gold/30",
    Leadership: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
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
            A chronological journey through key experiences, projects, and achievements that have shaped my path in engineering, research, and leadership.
          </p>
        </header>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold/80 via-white/30 to-white/10 md:left-1/2 md:-translate-x-0.5"></div>

          {/* Timeline items */}
          <div className="space-y-16">
            {timelineItems.slice(0, visibleItems).map((item, index) => (
              <div
                key={item.id}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center md:absolute md:left-1/2 md:-translate-x-1/2">
                  <div className="h-5 w-5 rounded-full border-3 border-gold bg-gold/20 ring-4 ring-ink shadow-lg shadow-gold/20 transition-transform group-hover:scale-125"></div>
                </div>

                {/* Content card */}
                <div
                  className={`group flex-1 rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition hover:border-white/25 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-gold/5 ${
                    index % 2 === 0 ? 'md:mr-auto md:max-w-[48%]' : 'md:ml-auto md:max-w-[48%]'
                  }`}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span
                      className={`rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] ${getCategoryColor(item.category)}`}
                    >
                      {item.category}
                    </span>
                  </div>
                  <h3 className="mb-3 font-serif text-2xl text-white transition group-hover:text-gold">{item.title}</h3>
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
                    {formatDate(item.date, item.dateEnd || null)}
                  </p>
                  <p className="text-base leading-7 text-white/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Load More button */}
          {hasMoreItems && (
            <div className="mt-20 flex justify-center">
              <button
                onClick={loadMoreItems}
                disabled={isLoading}
                className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/[0.02] px-8 py-3 text-sm font-semibold uppercase tracking-[0.38em] text-white/80 transition hover:border-gold hover:bg-white/[0.05] hover:text-white hover:shadow-lg hover:shadow-gold/10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"></span>
                    Loading...
                  </>
                ) : (
                  'Load More'
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

