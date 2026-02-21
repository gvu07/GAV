import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code, Database, TrendingUp, Award, Wrench, Globe, ChevronDown, type LucideIcon } from "lucide-react";

const heroImage = "/Hero_Image10.jpg";

const highlights = [
  {
    title: "Engineering Meets Autonomy",
    description:
      "From founding an eVTOL design team to ML-based space weather prediction, I build systems that operate at the edge of hardware and intelligence.",
  },
  {
    title: "Precision Through Craft",
    description:
      "From laboratory calibration to financial analytics, every project balances technical rigor with polished, human-centered design.",
  },
  {
    title: "Community & Impact",
    description:
      "Co-building a non-profit to connect student researchers with funding, leading honor societies, and documenting the journey along the way.",
  },
];

const featuredProjects = [
  {
    name: "MagLab Geomagnetic Event Prediction",
    description:
      "Random Forest ML model achieving 80% recall for geomagnetic storm prediction—co-authoring a publication enabling early warning systems for satellite infrastructure.",
    link: "https://github.com/gvu07/predictionModel_SSC_SC",
    tags: ["Python", "Machine Learning", "Research"],
  },
  {
    name: "GoFundMI.org",
    description:
      "Non-profit platform connecting student researchers to funding and enabling donors direct access to ongoing university research. Collaborating with Curtis Ling (MaxLinear founder & CTO).",
    link: "#",
    tags: ["Python", "React", "Non-Profit"],
  },
  {
    name: "Summa-Fi",
    description:
      "Self-hosted financial platform automating transaction classification with Plaid API integration and real-time visualization—reducing manual accounting workflows by 70%.",
    link: "https://github.com/gvu07/Lucentia",
    tags: ["Python", "React", "PostgreSQL"],
  },
];

const achievements = [
  { metric: "4.0", label: "GPA · University of Michigan" },
  { metric: "1", label: "Research Publication (co-authoring)" },
  { metric: "3", label: "Active Projects" },
  { metric: "3", label: "Natural Languages" },
];

const skillCategories: { label: string; icon: LucideIcon; items: string[] }[] = [
  { label: "Programming Languages", icon: Code, items: ["Python", "C++", "MATLAB", "HTML/CSS"] },
  { label: "Frameworks & Libraries", icon: Database, items: ["React", "Next.js", "Pandas", "Scikit-learn"] },
  { label: "Tools & Platforms", icon: TrendingUp, items: ["Git", "PostgreSQL", "Docker", "Plaid API"] },
  { label: "Engineering Software", icon: Wrench, items: ["SolidWorks", "Siemens NX", "Analog Discovery 2"] },
  { label: "Research", icon: Award, items: ["Magnetometer Calibration", "Space Physics", "Data Analysis"] },
  { label: "Natural Languages", icon: Globe, items: ["English", "Vietnamese", "Spanish"] },
];

export default function HomePage() {
  return (
    <div className="relative">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Giang Anh Vu"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/20" />
        </div>

        <div className="relative z-10 section-container flex flex-col items-center gap-6 text-center">
          <h1 className="font-serif text-5xl font-bold tracking-[0.06em] text-white sm:text-6xl md:text-7xl">Giang Anh Vu</h1>
          <div className="mt-4 flex gap-4">
            <Link
              href="/projects"
              className="rounded-full border border-white/30 bg-white/10 px-7 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white backdrop-blur-sm transition hover:bg-white hover:text-black"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white/80 backdrop-blur-sm transition hover:border-white/50 hover:text-white"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-white/50" />
        </div>
      </section>

      {/* Featured Achievement Banner */}
      <section className="border-b border-black/10 bg-gradient-to-r from-gold/10 via-white/[0.02] to-gold/10 py-8">
        <div className="section-container">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-8">
            <Award className="h-6 w-6 text-gold" />
            <p className="text-center text-base text-black/80 md:text-left">
              <span className="font-semibold text-black">Currently:</span> Founding U-M Vertical Flight · Co-authoring a research publication on ML-based geomagnetic event detection · Chavez Scholarship Winner & Dean&apos;s List
            </p>
          </div>
        </div>
      </section>

      <section className="relative border-t border-black/5 bg-ink/95 py-24">
        <div className="section-container space-y-16">
          {/* By the Numbers */}
          <div className="grid gap-6 md:grid-cols-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.label}
                className="rounded-2xl border border-black/10 bg-black/[0.02] p-6 text-center transition hover:border-black/25 hover:bg-black/[0.04]"
              >
                <p className="font-serif text-4xl text-gold">{achievement.metric}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.35em] text-black/60">{achievement.label}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto max-w-4xl space-y-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.42em] text-black/50">Who I Am</p>
              <h2 className="mt-4 font-serif text-3xl text-black sm:text-4xl">
                Engineer · Researcher · Builder
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-black/75 sm:text-xl">
              <p>
                I&apos;m a Computer Engineering student at the University of Michigan passionate about building systems 
                at the intersection of hardware, software, and autonomy. My work spans eVTOL aircraft design, space physics 
                research, machine learning, full-stack development, and laboratory instrumentation.
              </p>
              <p>
                I founded U-M Vertical Flight, a multidisciplinary design team competing in Vertical Flight Society 
                design-build-fly competitions. I&apos;m co-authoring a research publication on ML-based geomagnetic event 
                detection at U-M&apos;s Magnetometer Laboratory, and collaborating with Curtis Ling (MaxLinear founder & CTO) 
                to build GoFundMI.org, a non-profit connecting student researchers to funding.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="rounded-3xl border border-black/10 bg-black/[0.02] p-10 text-black/75 transition hover:border-black/25 hover:bg-black/[0.04]"
              >
                <h3 className="font-serif text-2xl text-black">{highlight.title}</h3>
                <p className="mt-5 text-lg leading-8">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Technologies */}
      <section className="border-t border-black/5 bg-ink py-24">
        <div className="section-container space-y-10">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.42em] text-black/60">Technical Expertise</p>
            <h2 className="mt-4 font-serif text-3xl text-black sm:text-4xl">Skills & Technologies</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-black/75">
              A comprehensive toolkit spanning my programming languages, frameworks, tools, engineering software, research, and spoken languages.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category) => (
              <div key={category.label} className="rounded-2xl border border-black/10 bg-black/[0.02] p-6 transition hover:border-black/20 hover:bg-black/[0.04]">
                <category.icon className="h-8 w-8 text-gold" />
                <h3 className="mt-4 font-serif text-xl text-black">{category.label}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-black/15 bg-black/[0.05] px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-black/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/5 bg-ink py-24">
        <div className="section-container space-y-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.42em] text-black/60">Selected work</p>
              <h2 className="font-serif text-3xl text-black sm:text-4xl">Featured Projects</h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 rounded-full border border-black/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-black/80 transition hover:border-black/60 hover:text-black"
            >
              View all projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <Link
                key={project.name}
                href={project.link}
                target="_blank"
                className="group rounded-3xl border border-black/10 bg-black/[0.03] p-10 transition hover:border-gold hover:bg-black/[0.08]"
              >
                <div className="flex items-center justify-between gap-6">
                  <h3 className="font-serif text-2xl text-black">{project.name}</h3>
                  <ArrowUpRight className="h-5 w-5 text-black/40 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold" />
                </div>
                <p className="mt-4 text-lg leading-8 text-black/75">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-black/15 bg-black/[0.02] px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.35em] text-black/45"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-black/10 bg-black/[0.04] py-24">
        <div className="section-container relative z-10 flex flex-col items-center gap-8 text-center">
          <h2 className="font-serif text-3xl text-black sm:text-4xl">Interested in working together?</h2>
          <p className="max-w-2xl text-lg leading-8 text-black/75">
            Whether it&apos;s a research collaboration, a project idea, or just a conversation — I&apos;d love to hear from you.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="/Giang_Anh_Vu_Resume.pdf"
              download="Giang_Anh_Vu_Resume.pdf"
              className="inline-flex items-center gap-3 rounded-full border border-black/30 bg-black/10 px-8 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-black transition hover:bg-black hover:text-white"
            >
              Download Resume
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full border border-black/20 px-8 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-black/80 transition hover:border-black/50 hover:text-black"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="absolute inset-0 opacity-70">
          <div className="absolute -left-16 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute -right-20 top-1/3 h-64 w-64 rounded-full bg-black/10 blur-3xl" />
        </div>
      </section>
    </div>
  );
}
