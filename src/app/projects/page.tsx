import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "MagLab Geomagnetic Event Prediction",
    headline: "Machine learning model for automated detection of Sudden Storm Commencements and Sudden Impulses.",
    description:
      "Leading research and development of a Random Forest machine learning model that automatically detects geomagnetic events with 94% accuracy—enabling early warning systems for space weather that protect satellite infrastructure worth billions of dollars. Authoring a research paper for publication that combines statistical validation with ML-based detection, advancing space weather forecasting capabilities.",
    contributions: [
      "Developed and trained Random Forest classifier achieving 94% recall and 84% precision for SSC detection using engineered features from SYM/H and Dst magnetometer data—significantly outperforming traditional threshold-based methods.",
      "Engineered domain-specific features capturing pre-event quietness, compression amplitude, and ring current response to differentiate between storm commencements and impulses, enabling automated classification previously requiring manual expert analysis.",
      "Authoring comprehensive research paper integrating machine learning detection with multi-latitude statistical validation, addressing key limitations in current space weather prediction methods and contributing to operational forecasting systems.",
      "Implemented feature importance analysis revealing physical signatures—pre-event quietness and SYM/H minimum—as primary discriminators, validating model against known geophysical processes and demonstrating interpretable ML for space physics.",
    ],
    technologies: ["Python", "scikit-learn", "Random Forest", "Pandas", "NumPy", "Matplotlib"],
    link: "https://space.engin.umich.edu/magnetometer-laboratory/",
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
    technologies: ["TypeScript", "Next.js", "PostgreSQL", "Tailwind"],
    link: "https://github.com/gvu07/Lucentia",
  },
  {
    name: "MagLab Systems Dashboard",
    headline: "Refined control for high-precision magnetometry research.",
    description:
      "A responsive dashboard enabling University of Michigan researchers to orchestrate instruments, analyze telemetry, and capture experimental logs. Consolidated disparate tools into a single secure portal, reducing onboarding time for new researchers by 60% and streamlining research workflows.",
    contributions: [
      "Collaborated with researchers to translate complex workflows into an intuitive, guided interface, improving instrument control efficiency and reducing user errors.",
      "Implemented data visualizations that surface live trends and alert the team to anomalies in real time, enabling faster response to experimental issues and data quality problems.",
      "Consolidated disparate tools into a single secure portal, reducing onboarding time for new researchers by 60% and enabling seamless collaboration across the research team.",
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
                <div className="space-y-5 flex-1">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.38em] text-white/55">Featured</p>
                    <h2 className="mt-2 font-serif text-4xl text-white">{project.name}</h2>
                    <p className="mt-4 text-base font-semibold uppercase tracking-[0.42em] text-white/55">{project.headline}</p>
                  </div>
                  <p className="max-w-2xl text-lg leading-8 text-white/75">{project.description}</p>

                  {project.name === "Lucentia" && (
                    <div className="mt-6 max-w-3xl">
                      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.38em] text-white/55">Demo Video</p>
                      <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
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

