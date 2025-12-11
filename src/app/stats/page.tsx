'use client';

interface StatDetails {
  dateAchieved?: string;
  progress?: string;
  notes?: string;
}

interface Stat {
  id: number;
  title: string;
  value: string;
  category: string;
  description: string;
  details: StatDetails;
}

const stats: Stat[] = [
  {
    id: 1,
    title: 'Bench Press',
    value: '245 lbs',
    category: 'Fitness',
    description: 'Personal record for bench press, achieved through consistent training and progressive overload.',
    details: {
      dateAchieved: '2024',
      progress: 'Working towards 275 lbs',
      notes: 'Focusing on form and controlled movements'
    }
  },
  {
    id: 2,
    title: 'GPA',
    value: '4.0',
    category: 'Academic',
    description: 'Maintaining a perfect 4.0 GPA as a Computer Engineering student at the University of Michigan.',
    details: {
      dateAchieved: 'Current',
      progress: 'Maintaining excellence',
      notes: 'Balancing rigorous coursework with research and projects'
    }
  },
  {
    id: 3,
    title: 'Credit Score',
    value: '738',
    category: 'Financial',
    description: 'Strong credit score reflecting responsible financial management and credit utilization.',
    details: {
      dateAchieved: 'Current',
      progress: 'Building towards 750+',
      notes: 'Maintaining low credit utilization and on-time payments'
    }
  }
];

export default function StatsPage() {
  return (
    <div className="relative bg-ink py-28">
      <div className="section-container space-y-16">
        <header className="space-y-6 text-center md:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-black/60">By The Numbers</p>
          <h1 className="font-serif text-4xl text-black sm:text-5xl">Stats</h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-black/75 md:mx-0 md:text-xl">
            A collection of achievements, metrics, and milestones that reflect my journey and progress.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="flip-card min-h-[400px]">
              <div className="flip-card-inner h-full">
                {/* Front of card */}
                <div className="flip-card-front rounded-3xl border border-black/10 bg-black/[0.02] p-8 flex flex-col items-center justify-center text-center shadow-lg h-full">
                  <p className="text-sm font-semibold uppercase tracking-[0.4em] text-black/50 mb-4">
                    {stat.category}
                  </p>
                  <h3 className="font-serif text-3xl text-black mb-2">{stat.title}</h3>
                  <p className="text-5xl font-bold text-gold mb-4">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-black/40">Hover to learn more</p>
                </div>

                {/* Back of card */}
                <div className="flip-card-back rounded-3xl border border-black/10 bg-black/[0.02] p-8 flex flex-col justify-start shadow-lg h-full overflow-y-auto">
                  <h3 className="font-serif text-2xl text-black mb-4">{stat.title}</h3>
                  <p className="text-base md:text-lg leading-7 text-black/75 mb-6">{stat.description}</p>
                  
                  <div className="space-y-4 text-sm">
                    {stat.details.dateAchieved && (
                      <div>
                        <p className="text-black/50 uppercase tracking-[0.3em] text-xs mb-1">Date Achieved</p>
                        <p className="text-black/80">{stat.details.dateAchieved}</p>
                      </div>
                    )}
                    {stat.details.progress && (
                      <div>
                        <p className="text-black/50 uppercase tracking-[0.3em] text-xs mb-1">Progress</p>
                        <p className="text-black/80">{stat.details.progress}</p>
                      </div>
                    )}
                    {stat.details.notes && (
                      <div>
                        <p className="text-black/50 uppercase tracking-[0.3em] text-xs mb-1">Notes</p>
                        <p className="text-black/80">{stat.details.notes}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
