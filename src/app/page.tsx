import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Mail, MapPin, Sparkles } from "lucide-react";

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
    name: "Lucentia",
    description:
      "Automated financial intelligence that classifies spending, uncovers anomalies, and empowers smarter decisions.",
    link: "https://github.com/gvu07/Lucentia",
    tags: ["TypeScript", "Data Engineering", "Fintech"],
  },
  {
    name: "MagLab Systems Dashboard",
    description:
      "An interactive control surface designed for the University of Michigan Magnetometer Laboratory, streamlining research workflows.",
    link: "https://space.engin.umich.edu/magnetometer-laboratory/",
    tags: ["Python", "React", "Automation"],
  },
];

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
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/80">Portfolio of</p>
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

      <section className="relative border-t border-white/5 bg-ink/95 py-24">
        <div className="section-container space-y-16">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div className="space-y-6">
              <p className="text-base font-semibold uppercase tracking-[0.42em] text-white/60">A polished introduction</p>
              <h2 className="font-serif text-3xl text-white sm:text-4xl">
                Engineering elegance with a devotion to human-centered detail.
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
                I build thoughtful systems that feel effortless—balancing a mechanical engineering background with a
                designer&apos;s intuition. Whether it&apos;s orchestrating research tooling at MagLab or prototyping new digital
                experiences, I bring precision, warmth, and a sense of narrative to every collaboration.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
              <div className="flex items-center gap-4 text-white/80">
                <Sparkles className="h-10 w-10 text-gold" />
                <div>
                  <p className="text-base font-semibold uppercase tracking-[0.45em] text-white/60">Currently</p>
                  <p className="mt-2 text-lg text-white/75">
                    Refining Lucentia and expanding research automation at the University of Michigan&apos;s MagLab.
                  </p>
                </div>
              </div>
              <div className="mt-6 grid gap-4 text-lg text-white/70">
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 text-white/60" />
                  <Link href="mailto:contact@gianganhvu.com" className="font-semibold hover:text-white">
                    contact@gianganhvu.com
                  </Link>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-white/60" />
                  <span>San Francisco, California &amp; Ann Arbor, Michigan</span>
                </div>
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
            <Link
              href="mailto:contact@gianganhvu.com"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white/80 transition hover:border-white/50 hover:text-white"
            >
              Email Me
            </Link>
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

