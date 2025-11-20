import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Mail, MapPin, Sparkles, Code, Database, TrendingUp, Award } from "lucide-react";

// Update the value below to swap the hero photo.
const heroImage = "/Hero_Image2.png";

const highlights = [
  {
    title: "Engineering Meets Design",
    description:
      "Mechanical Engineering student at the University of Michigan translating complex systems into intuitive, elegant experiences.",
  },
  {
    title: "Precision Through Craft",
    description:
      "From laboratory automation to creative tooling, every project balances technical rigor with polished presentation.",
  },
  {
    title: "Community & Storytelling",
    description:
      "Documenting growth on social platforms, inviting others into the journey of continual improvement and curiosity.",
  },
];

const featuredProjects = [
  {
    name: "MagLab Geomagnetic Event Prediction",
    description:
      "ML model achieving 94% accuracy for space weather prediction—enabling early warning systems that protect satellite infrastructure worth billions.",
    link: "https://space.engin.umich.edu/magnetometer-laboratory/",
    tags: ["Machine Learning", "Research", "Python"],
  },
  {
    name: "Lucentia",
    description:
      "Automated financial intelligence that classifies spending, uncovers anomalies, and empowers smarter decisions—reducing manual accounting time by 90%.",
    link: "https://github.com/gvu07/Lucentia",
    tags: ["TypeScript", "Data Engineering", "Fintech"],
  },
];

const achievements = [
  { metric: "94%", label: "ML Model Recall" },
  { metric: "1", label: "Research Paper" },
  { metric: "4+", label: "Production Projects" },
  { metric: "60%", label: "Reduced Onboarding Time" },
];

const skills = {
  languages: ["Python", "TypeScript", "JavaScript", "MATLAB", "C++"],
  frameworks: ["Next.js", "React", "Flask", "scikit-learn", "Pandas"],
  tools: ["Git", "PostgreSQL", "Docker", "Plotly", "NumPy"],
  research: ["Machine Learning", "Data Analysis", "Space Physics", "Random Forest"],
};

export default function HomePage() {
  return (
    <div className="relative">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Giang Anh Vu overlooking the Blue Ridge Mountains"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </div>

        <div className="relative z-10 section-container flex flex-col items-center gap-8 text-center">
          <div className="relative h-28 w-28 overflow-hidden rounded-full border border-white/30 bg-black/20 p-5 shadow-xl shadow-black/40 sm:h-32 sm:w-32">
            <Image src="/GAV_Logo1_nobgWhite.png" alt="Giang Anh Vu personal monogram" fill className="object-contain" priority />
          </div>
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/80"></p>
            <h1 className="font-serif text-4xl tracking-[0.08em] text-white sm:text-5xl md:text-6xl">Giang Anh Vu</h1>
            <p className="max-w-xl text-lg text-white/80 sm:text-xl">
              Engineering, Business, and Creativity
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 rounded-full border border-white/50 bg-white/10 px-8 py-3 text-sm font-semibold uppercase tracking-[0.32em] text-white transition hover:bg-white hover:text-ink"
            >
              Projects
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
            <Link
              href="/Giang_Anh_Vu_Resume.pdf"
              target="_blank"
              className="group inline-flex items-center gap-3 rounded-full border border-white/50 bg-white/10 px-8 py-3 text-sm font-semibold uppercase tracking-[0.32em] text-white transition hover:bg-white hover:text-ink"
            >
              Resume
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full border border-white/25 px-8 py-3 text-sm font-semibold uppercase tracking-[0.32em] text-white/80 transition hover:border-white/60 hover:text-white"
            >
              Contact
            </Link>
          </div>

          <div className="mt-12 flex animate-bounce flex-col items-center text-white/60">
            <ArrowDown className="h-5 w-5" />
            <span className="mt-2 text-[0.75rem] uppercase tracking-[0.45em]">Scroll</span>
          </div>
        </div>
      </section>

      {/* Featured Achievement Banner */}
      <section className="border-b border-white/10 bg-gradient-to-r from-gold/10 via-white/[0.02] to-gold/10 py-8">
        <div className="section-container">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-8">
            <Award className="h-6 w-6 text-gold" />
            <p className="text-center text-base text-white/80 md:text-left">
              <span className="font-semibold text-white">Currently:</span> Authoring research paper on ML-based geomagnetic event detection 
              (target: Journal of Geophysical Research). Open to summer 2025 internships in software engineering and research.
            </p>
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/5 bg-ink/95 py-24">
        <div className="section-container space-y-16">
          {/* By the Numbers */}
          <div className="grid gap-6 md:grid-cols-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.label}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center transition hover:border-white/25 hover:bg-white/[0.04]"
              >
                <p className="font-serif text-4xl text-gold">{achievement.metric}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.35em] text-white/60">{achievement.label}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div className="space-y-6">
              <p className="text-base font-semibold uppercase tracking-[0.42em] text-white/60">My Introduction</p>
              <h2 className="font-serif text-3xl text-white sm:text-4xl">
                Scholar | Creator | Innovator
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
                I'm a Mechanical Engineering student at the University of Michigan passionate about building solutions that bridge 
                engineering rigor with human-centered design. My work spans machine learning research, full-stack development, 
                and laboratory automation—always with a focus on creating meaningful impact.
              </p>
              <p className="max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
                Currently authoring my first research paper on ML-based space weather prediction, developing financial intelligence 
                tools for startups, and contributing to space physics research at U-M's Magnetometer Laboratory. I bring precision, 
                warmth, and a sense of narrative to every collaboration.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white/80 transition hover:border-white/60 hover:text-white"
                >
                  Learn More About Me
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white/80 transition hover:border-white/60 hover:text-white"
                >
                  View My Work
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
                <div className="flex items-center gap-4 text-white/80">
                  <Sparkles className="h-10 w-10 text-gold" />
                  <div>
                    <p className="text-base font-semibold uppercase tracking-[0.45em] text-white/60">Currently</p>
                    <p className="mt-2 text-lg text-white/75">
                      Authoring research paper on ML-based geomagnetic event detection. Building Lucentia, a financial 
                      intelligence platform. Contributing to space physics research at U-M's MagLab.
                    </p>
                  </div>
                </div>
                <div className="mt-6 grid gap-4 text-lg text-white/70">
                  <div className="flex items-start gap-3">
                    <Mail className="mt-1 h-5 w-5 text-white/60" />
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@gianganhvu.com" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-white">
                      contact@gianganhvu.com
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 text-white/60" />
                    <span>Washington, D.C. &amp; Ann Arbor, Michigan</span>
                  </div>
                </div>
              </div>

              {/* Open to Opportunities */}
              <div className="rounded-3xl border border-gold/30 bg-gold/5 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.4em] text-gold">Open to Opportunities</p>
                <p className="mt-3 text-base text-white/90">
                  Seeking summer 2025 internships in software engineering, research, or data science. 
                  Available for remote or on-site positions in Ann Arbor, MI or Washington, D.C.
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold transition hover:text-gold/80"
                >
                  Let's Connect
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-10 text-white/75 transition hover:border-white/25 hover:bg-white/[0.04]"
              >
                <h3 className="font-serif text-2xl text-white">{highlight.title}</h3>
                <p className="mt-5 text-lg leading-8">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Technologies */}
      <section className="border-t border-white/5 bg-ink py-24">
        <div className="section-container space-y-10">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.42em] text-white/60">Technical Expertise</p>
            <h2 className="mt-4 font-serif text-3xl text-white sm:text-4xl">Skills & Technologies</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/75">
              A comprehensive toolkit spanning programming languages, frameworks, and research methodologies.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <Code className="h-8 w-8 text-gold" />
              <h3 className="mt-4 font-serif text-xl text-white">Languages</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/15 bg-white/[0.05] px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <Database className="h-8 w-8 text-gold" />
              <h3 className="mt-4 font-serif text-xl text-white">Frameworks</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.frameworks.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/15 bg-white/[0.05] px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <TrendingUp className="h-8 w-8 text-gold" />
              <h3 className="mt-4 font-serif text-xl text-white">Tools</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/15 bg-white/[0.05] px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <Award className="h-8 w-8 text-gold" />
              <h3 className="mt-4 font-serif text-xl text-white">Research</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.research.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/15 bg-white/[0.05] px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-ink py-24">
        <div className="section-container space-y-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.42em] text-white/60">Selected work</p>
              <h2 className="font-serif text-3xl text-white sm:text-4xl">Featured Projects</h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white/80 transition hover:border-white/60 hover:text-white"
            >
              View all projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <Link
                key={project.name}
                href={project.link}
                target="_blank"
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-10 transition hover:border-gold hover:bg-white/[0.08]"
              >
                <div className="flex items-center justify-between gap-6">
                  <h3 className="font-serif text-2xl text-white">{project.name}</h3>
                  <ArrowUpRight className="h-5 w-5 text-white/40 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold" />
                </div>
                <p className="mt-4 text-lg leading-8 text-white/75">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-white/[0.02] px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.35em] text-white/45"
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

      <section className="relative overflow-hidden border-t border-white/10 bg-white/[0.04] py-24">
        <div className="section-container relative z-10 flex flex-col items-center gap-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.42em] text-white/65">Next step</p>
          <h2 className="font-serif text-3xl text-white sm:text-4xl">Download my resume</h2>
          <p className="max-w-2xl text-lg leading-8 text-white/75">
            A concise look at experience, tools, and collaborations. Interested in working together? Let&apos;s chat.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/Giang_Anh_Vu_Resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-8 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-white hover:text-ink"
            >
              Download Resume
            </Link>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@gianganhvu.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white/80 transition hover:border-white/50 hover:text-white"
            >
              Email Me
            </a>
          </div>
        </div>

        <div className="absolute inset-0 opacity-70">
          <div className="absolute -left-16 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute -right-20 top-1/3 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        </div>
      </section>
    </div>
  );
}

