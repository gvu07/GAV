'use client';

import { useState, useEffect } from "react";

// Timeline items - most recent at the top
// Dates match resume information
const timelineItems = [
  {
    id: 1,
    date: "2026-02-01",
    title: "GoFundMI.org — Non-Profit",
    description: "Collaborating with Curtis Ling (MaxLinear founder & CTO) to build a non-profit platform connecting student researchers to funding and enabling donors direct access to university research.",
    category: "Project",
    dateEnd: null
  },
  {
    id: 2,
    date: "2026-01-01",
    title: "Founder & Electrical Lead — U-M Vertical Flight",
    description: "Founded multidisciplinary eVTOL design team competing in Vertical Flight Society design-build-fly competitions. Leading electrical systems design: power distribution, flight controllers, and sensor integration (LiDAR, thermal). Secured $20k+ in funding.",
    category: "Work",
    dateEnd: null
  },
  {
    id: 3,
    date: "2025-09-01",
    title: "Summa-Fi — Financial Platform",
    description: "Engineering a secure, self-hosted financial platform using Python and React to automate transaction classification, integrating Plaid API and PostgreSQL—reducing manual accounting workflows by 70%.",
    category: "Project",
    dateEnd: null
  },
  {
    id: 4,
    date: "2025-08-26",
    title: "Research Assistant — U-M Magnetometer Laboratory",
    description: "Developing Random Forest ML models achieving 80% recall for geomagnetic storm prediction. Analyzing 10+ years of magnetometer data and co-authoring a research publication. Calibrating Helmholtz Coil apparatus for RM3100 sensor testing.",
    category: "Research",
    dateEnd: null
  },
  {
    id: 5,
    date: "2025-08-01",
    title: "University of Michigan — Computer Engineering",
    description: "Enrolled in BSE Computer Engineering at the University of Michigan. 4.0 GPA. Martin & Ellen Chavez Scholarship Winner. Dean's List. Coursework: Programming and Data Structures, Electrical Circuits, Solid Mechanics.",
    category: "Education",
    dateEnd: null
  },
  {
    id: 6,
    date: "2024-08-01",
    title: "Vice President — Phi Theta Kappa Honor Society",
    description: "Orchestrated 5+ large-scale events for 400-member honor society at Montgomery College, increasing member engagement and representing chapter at regional conferences.",
    category: "Leadership",
    dateEnd: "2025-06-30"
  },
  {
    id: 7,
    date: "2024-05-01",
    title: "Math Instructor — Mathnasium",
    description: "Instructed AP Calculus and Physics prep with personalized learning plans—90% of students scored 4+. Mentored SAT Math students to 100+ point average increases.",
    category: "Work",
    dateEnd: "2025-06-30"
  },
  {
    id: 8,
    date: "2023-12-01",
    title: "Treasurer — Student Government Association",
    description: "Administered $40,000 annual budget for 40+ student organizations at Montgomery College; approved $28,000+ in resource allocations through weekly proposal hearings.",
    category: "Leadership",
    dateEnd: "2024-06-30"
  },
  {
    id: 9,
    date: "2023-09-01",
    title: "Montgomery College — General Engineering",
    description: "Earned Associate of Science in General Engineering from Montgomery College. GPA: 3.7/4.0.",
    category: "Education",
    dateEnd: "2025-05-31"
  },
];

const ITEMS_PER_PAGE = 5;

function formatDate(dateString: string, dateEnd?: string | null): string {
  const date = new Date(dateString);
  const fmt = (d: Date) =>
    d.toLocaleDateString("en-US", { year: "numeric", month: "short" });

  if (dateEnd) {
    return `${fmt(date)} – ${fmt(new Date(dateEnd))}`;
  }

  return `${fmt(date)} – Present`;
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
  return colors[category] || "bg-black/10 text-black/60 border-black/20";
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
          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-black/60">My Journey</p>
          <h1 className="font-serif text-4xl text-black sm:text-5xl">Timeline</h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-black/75 md:mx-0 md:text-xl">
            A chronological journey through key experiences, projects, and achievements that have shaped my path through academics, research, and engineering.
          </p>
        </header>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold/80 via-black/30 to-black/10 md:left-1/2 md:-translate-x-0.5"></div>

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
                  <div className="h-5 w-5 rounded-full border-2 border-gold bg-gold/20 ring-4 ring-ink shadow-lg shadow-gold/20"></div>
                </div>

                {/* Content card */}
                <div
                  className={`group flex-1 rounded-3xl border border-black/10 bg-black/[0.02] p-8 transition hover:border-black/25 hover:bg-black/[0.05] hover:shadow-xl hover:shadow-gold/5 ${
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
                  <h3 className="mb-3 font-serif text-2xl text-black transition group-hover:text-gold">{item.title}</h3>
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-black/60">
                    {formatDate(item.date, item.dateEnd || null)}
                  </p>
                  <p className="text-base leading-7 text-black/70">{item.description}</p>
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
                className="inline-flex items-center gap-3 rounded-full border border-black/25 bg-black/[0.02] px-8 py-3 text-sm font-semibold uppercase tracking-[0.38em] text-black/80 transition hover:border-gold hover:bg-black/[0.05] hover:text-black hover:shadow-lg hover:shadow-gold/10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-black/30 border-t-white"></span>
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

