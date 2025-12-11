'use client';

interface Idea {
  id: number;
  title: string;
  description: string;
  category: string[];
  status: 'idea' | 'in-progress' | 'completed';
}

const ideas: Idea[] = [
  {
    id: 1,
    title: 'Atlas AI Scheduler',
    description: 'An AI-powered course scheduling system for University of Michigan students that integrates with Atlas data. Students can input their academic plan, ideal workload, and preferred class times. The AI will analyze course availability, prerequisites, credit requirements, and create optimized schedules that ensure students don\'t miss any required credits for graduation. This would revolutionize the course registration and "backpacking" process, making it more convenient for students while also assisting academic advisors in their planning.',
    category: ['AI/ML', 'Education', 'Web Development'],
    status: 'idea'
  }
];

const statusColors = {
  idea: 'bg-purple-500/20 text-purple-600 border-purple-500/30',
  'in-progress': 'bg-amber-500/20 text-amber-600 border-amber-500/30',
  completed: 'bg-green-500/20 text-green-600 border-green-500/30'
};

export default function IdeasPage() {
  return (
    <div className="relative bg-ink py-28">
      <div className="section-container space-y-16">
        <header className="space-y-6 text-center md:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-black/60">Future Projects</p>
          <h1 className="font-serif text-4xl text-black sm:text-5xl">Ideas</h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-black/75 md:mx-0 md:text-xl">
            A collection of project ideas, concepts, and future work I want to create, learn about, or explore.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ideas.map((idea) => (
            <article
              key={idea.id}
              className="rounded-3xl border border-black/10 bg-black/[0.02] p-8 transition hover:border-black/25 hover:bg-black/[0.05] hover:shadow-xl"
            >
              <div className="mb-4 flex items-center gap-3">
                <span
                  className={`rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] ${statusColors[idea.status]}`}
                >
                  {idea.status.replace('-', ' ')}
                </span>
              </div>
              
              <h2 className="font-serif text-2xl text-black mb-4">{idea.title}</h2>
              
              <p className="text-base leading-7 text-black/75 mb-6">{idea.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {idea.category.map((cat) => (
                  <span
                    key={cat}
                    className="rounded-full border border-black/15 bg-black/[0.05] px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-black/60"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {ideas.length === 0 && (
          <div className="text-center py-20">
            <p className="text-black/50 text-lg">No ideas yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}
