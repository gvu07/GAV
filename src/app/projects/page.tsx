import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "MagLab Geomagnetic Event Prediction",
    headline: "Machine learning model for automated detection of Sudden Storm Commencements and Sudden Impulses.",
    description:
      "Co-authoring a research publication on a Random Forest ML model that automatically detects geomagnetic events—enabling early warning systems for space weather that protect satellite infrastructure. Analyzing 10+ years of magnetometer data and validating hardware reliability for spaceflight environments.",
    contributions: [
      "Developed Random Forest classifier achieving 80% recall for geomagnetic storm prediction using engineered features from SYM/H magnetometer data, outperforming traditional threshold-based methods.",
      "Engineered domain-specific features capturing pre-event quietness, compression amplitude, and ring current response to differentiate between storm commencements and impulses.",
      "Calibrate and maintain Helmholtz Coil apparatus for RM3100 sensor testing, validating hardware reliability for spaceflight environments.",
      "Implemented feature importance analysis revealing physical signatures as primary discriminators, demonstrating interpretable ML for space physics.",
    ],
    technologies: ["Python", "Scikit-learn", "Random Forest", "MATLAB"],
    link: "https://github.com/gvu07/predictionModel_SSC_SC",
    inProgress: true,
  },
  {
    name: "GoFundMI.org",
    headline: "Connecting student researchers to funding. Non-profit.",
    description:
      "Collaborating with Curtis Ling (MaxLinear founder & CTO) to build a non-profit platform that connects student researchers to funding and enables donors direct access to ongoing university research.",
    contributions: [
      "Co-designing the platform architecture using Python, React, and modern web technologies to serve the University of Michigan research community.",
      "Building systems that enable transparent, direct funding pipelines between donors and student-led research projects.",
    ],
    technologies: ["Python", "React", "Web Development"],
    link: "#",
    inProgress: true,
  },
  {
    name: "Summa-Fi",
    headline: "Secure, self-hosted financial intelligence.",
    description:
      "Engineering a secure, self-hosted financial platform that automates transaction classification, integrates real-time data via Plaid API, and provides dynamic visualization through React—reducing manual accounting workflows by 70%.",
    contributions: [
      "Architected Python backend services that ingest and classify financial events with explainable outcomes, processing thousands of transactions with actionable insights.",
      "Integrated Plaid API for real-time financial data ingestion; PostgreSQL for persistent storage; React for dynamic, interactive visualization.",
      "Built workflow automations reducing manual accounting time by 70% and providing real-time visibility into spending patterns.",
    ],
    technologies: ["Python", "React", "PostgreSQL", "Plaid API"],
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
            From ML-based space weather research to non-profit platform development, 
            these projects reflect my commitment to building meaningful engineering solutions.
            I&apos;m open to collaboration and feedback—reach out if any of this resonates.
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

                  {project.name === "Summa-Fi" && (
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

