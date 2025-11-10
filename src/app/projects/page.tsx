import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Lucentia",
    headline: "Financial intelligence for faster, clearer decisions.",
    description:
      "Leads product, data, and experience design for a platform that automates transaction insights, reveals anomalies, and empowers founders to trust their numbers.",
    contributions: [
      "Architected modular TypeScript services that ingest and classify financial events with explainable outcomes.",
      "Designed a polished interface that pairs luxury-inspired visuals with auditor-grade transparency.",
      "Built workflow automations enabling startups to reconcile days of data in minutes.",
    ],
    technologies: ["TypeScript", "Next.js", "PostgreSQL", "Tailwind"],
    link: "https://github.com/gvu07/Lucentia",
  },
  {
    name: "MagLab Systems Dashboard",
    headline: "Refined control for high-precision magnetometry research.",
    description:
      "A responsive dashboard enabling University of Michigan researchers to orchestrate instruments, analyze telemetry, and capture experimental logs.",
    contributions: [
      "Collaborated with researchers to translate complex workflows into an intuitive, guided interface.",
      "Implemented data visualizations that surface live trends and alert the team to anomalies in real time.",
      "Consolidated disparate tools into a single secure portal, reducing onboarding time for new researchers.",
    ],
    technologies: ["React", "Python", "Flask", "Plotly"],
    link: "https://space.engin.umich.edu/magnetometer-laboratory/",
  },
  {
    name: "Journey Atelier",
    headline: "Story-driven personal branding destination.",
    description:
      "An evolving microsite that pairs cinematic visuals, writing, and photography to share Giang Anh Vu’s ongoing learnings and creative process.",
    contributions: [
      "Crafted a multi-section layout that emphasises narrative pacing and high-end editorial polish.",
      "Integrated responsive typography and ambient motion for a calm, luxurious feel on every device.",
      "Automated deployment pipeline to Netlify with image optimisation and performance controls.",
    ],
    technologies: ["Next.js", "Framer Motion", "Sanity"],
    link: "https://gianganhvu.com",
  },
];

export default function ProjectsPage() {
  return (
    <div className="relative bg-ink py-28">
      <div className="section-container space-y-16">
        <header className="space-y-6 text-center md:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-white/60">Signature Work</p>
          <h1 className="font-serif text-4xl text-white sm:text-5xl">Projects</h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-white/75 md:mx-0 md:text-xl">
            A curated look at initiatives that blend rigorous engineering foundations with inviting, luxury-inspired experiences. Each project reflects a commitment to clarity, utility, and calm sophistication.
          </p>
        </header>

        <div className="space-y-14">
          {projects.map((project) => (
            <article
              key={project.name}
              className="rounded-3xl border border-white/10 bg-white/[0.02] p-12 transition hover:border-white/25 hover:bg-white/[0.05]"
            >
              <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                <div className="space-y-5">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.38em] text-white/55">Featured</p>
                    <h2 className="mt-2 font-serif text-4xl text-white">{project.name}</h2>
                    <p className="mt-4 text-base font-semibold uppercase tracking-[0.42em] text-white/55">{project.headline}</p>
                  </div>
                  <p className="max-w-2xl text-lg leading-8 text-white/75">{project.description}</p>

                  <ul className="space-y-3 text-lg text-white/70">
                    {project.contributions.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-[8px] h-1.5 w-1.5 rounded-full bg-gold/80" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3 pt-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/15 bg-white/[0.05] px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.38em] text-white/45"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={project.link}
                  target="_blank"
                  className="group inline-flex items-center justify-center gap-3 self-start rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.38em] text-white/80 transition hover:border-gold hover:bg-white hover:text-ink"
                >
                  View Project
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

