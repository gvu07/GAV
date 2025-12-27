import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "MagLab Geomagnetic Event Prediction",
    headline: "Machine learning model for automated detection of Sudden Storm Commencements and Sudden Impulses.",
    description:
      "Leading research and development of a Random Forest machine learning model that automatically detects geomagnetic events with high accuracy—enabling early warning systems for space weather that protect satellite infrastructure worth billions of dollars. Currently improving model performance and working on publishing a comprehensive research paper that combines statistical validation with ML-based detection, advancing space weather forecasting capabilities.",
    contributions: [
      "Developed and trained Random Forest classifier achieving 88.9% recall and 88.9% precision for SSC detection using engineered features from SYM/H magnetometer data—significantly outperforming traditional threshold-based methods.",
      "Engineered domain-specific features capturing pre-event quietness, compression amplitude, and ring current response to differentiate between storm commencements and impulses, enabling automated classification previously requiring manual expert analysis.",
      "Currently improving model performance for SSC/SI differentiation and multi-latitude generalization while preparing comprehensive research paper integrating machine learning detection with multi-latitude statistical validation.",
      "Implemented feature importance analysis revealing physical signatures—SYM/H minimum and pre-event quietness—as primary discriminators, validating model against known geophysical processes and demonstrating interpretable ML for space physics.",
    ],
    technologies: ["Machine Learning Python", "Random Forest", "Research"],
    link: "https://github.com/gvu07/predictionModel_SSC_SC",
    inProgress: true,
  },
  {
    name: "Lucentia",
    headline: "Financial intelligence for faster, clearer decisions.",
    description:
      "Leads product, data, and experience design for a platform that automates transaction insights, reveals anomalies, and empowers founders to trust their numbers. Enables startups to reconcile days of financial data in minutes, reducing manual accounting overhead and providing real-time visibility into spending patterns.",
    contributions: [
      "Architected modular TypeScript services that ingest and classify financial events with explainable outcomes, processing thousands of transactions with high accuracy and providing actionable insights.",
      "Designed a polished interface that pairs luxury-inspired visuals with auditor-grade transparency, creating an intuitive experience that makes complex financial data accessible to non-technical founders.",
      "Built workflow automations enabling startups to reconcile days of data in minutes—reducing manual accounting time by over 90% and enabling faster financial decision-making.",
    ],
    technologies: ["FinTech", "Data Engineering", "PostgreSQL"],
    link: "https://github.com/gvu07/Lucentia",
    inProgress: true,
  },
];

export default function ProjectsPage() {
  return (
    <div className="relative bg-ink py-28">
      <div className="section-container space-y-16">
        <header className="space-y-6 text-center md:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-black/60">Signature Work</p>
          <h1 className="font-serif text-4xl text-black sm:text-5xl">Projects</h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-black/75 md:mx-0 md:text-xl">
            A look at some of my projects from academic research to personal development. 
            I am open to collaboration and feedback on my projects, 
            because I want to improve them.
            I am open to collaboration and feedback on projects and ideas. 
            I've made a page for my ideas, and you can view and read through some of my ideas
            for projects or hobbies that I'm interested in working on.
          </p>
        </header>

        <div className="space-y-14">
          {projects.map((project) => (
            <article
              key={project.name}
              className="rounded-3xl border border-black/10 bg-black/[0.02] p-12 transition hover:border-black/25 hover:bg-black/[0.05]"
            >
              <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                <div className="space-y-5 flex-1">
                  <div>
                    <div className="flex items-center gap-3">
                      <p className="text-sm font-semibold uppercase tracking-[0.38em] text-black/55">Featured</p>
                      {project.inProgress && (
                        <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
                          In Progress
                        </span>
                      )}
                    </div>
                    <h2 className="mt-2 font-serif text-4xl text-black">{project.name}</h2>
                    <p className="mt-4 text-base font-semibold uppercase tracking-[0.42em] text-black/55">{project.headline}</p>
                  </div>
                  <p className="max-w-2xl text-lg leading-8 text-black/75">{project.description}</p>

                  {project.name === "Lucentia" && (
                    <div className="mt-6 max-w-3xl">
                      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.38em] text-black/55">Demo Video</p>
                      <div className="relative aspect-video overflow-hidden rounded-2xl border border-black/10 bg-black/[0.02]">
                        <video
                          src="/Lucentia_Demo.mp4"
                          controls
                          className="h-full w-full object-contain"
                        >
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  )}

                  <ul className="space-y-3 pl-6 text-lg text-black/70">
                    {project.contributions.map((point) => (
                      <li key={point} className="relative before:absolute before:-left-4 before:top-[10px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-gold/80">
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3 pt-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-black/15 bg-black/[0.05] px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.38em] text-black/45"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={project.link}
                  target="_blank"
                  className="group inline-flex items-center justify-center gap-3 self-start rounded-full border border-black/25 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.38em] text-black/80 transition hover:border-gold hover:bg-black hover:text-white"
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

