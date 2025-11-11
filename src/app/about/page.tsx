import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="relative bg-ink py-28">
      <div className="section-container space-y-16">
        <header className="space-y-6 text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.45em] text-white/50">Introduction About Me</p>
          <h1 className="font-serif text-4xl text-white sm:text-5xl">About Me</h1>
          <p className="mx-auto max-w-3xl text-sm leading-7 text-white/60 md:mx-0 md:text-base">
            Learn more about my journey, passions, and what drives me as an engineer, creator, and innovator.
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl text-white sm:text-4xl">
                Scholar | Creator | Innovator
              </h2>
              <div className="space-y-6 text-lg leading-8 text-white/75 sm:text-xl">
                <p>
                  Hi, I&apos;m Giang Anh D. Vu. I was born in Ho Chi Minh City, Vietnam on March 16th, 2007 and raised in Maryland. I am currently
                  studying Mechanical Engineering at the University of Michigan, but I love programming and have an interest in business and entrepreneurship.
                </p>
                <p>
                  I am passionate about building thoughtful designs that balance an engineering background with
                  human intuition. Whether it&apos;s prototyping new digital experiences or orchestrating research tooling,
                  I bring precision, warmth, and a sense of narrative to every collaboration.
                </p>
                <p>
                  My work spans the intersection of engineering, design, and entrepreneurship. I believe in creating solutions
                  that are not only technically sound but also intuitive and meaningful to the people who use them.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl">
                <h3 className="font-serif text-xl text-white mb-4">Engineering Meets Design</h3>
                <p className="text-base leading-7 text-white/70">
                  Mechanical Engineering student at the University of Michigan translating complex systems into intuitive, elegant experiences.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl">
                <h3 className="font-serif text-xl text-white mb-4">Precision Through Craft</h3>
                <p className="text-base leading-7 text-white/70">
                  From laboratory automation to creative tooling, every project balances technical rigor with polished presentation.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
              <div className="flex items-center gap-4 text-white/80 mb-6">
                <Sparkles className="h-10 w-10 text-gold" />
                <div>
                  <p className="text-base font-semibold uppercase tracking-[0.45em] text-white/60">Currently</p>
                  <p className="mt-2 text-lg text-white/75">
                    Expanding research automation for space physics at the University of Michigan&apos;s MagLab. Publishing my first research paper.
                    Building Lucentia, a financial intelligence platform.
                  </p>
                </div>
              </div>
              <div className="space-y-4 text-lg text-white/70">
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 text-white/60" />
                  <Link href="mailto:contact@gianganhvu.com" className="font-semibold hover:text-white">
                    contact@gianganhvu.com
                  </Link>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-white/60" />
                  <span>Washington, D.C. &amp; Ann Arbor, Michigan</span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl">
              <h3 className="font-serif text-xl text-white mb-4">Community & Storytelling</h3>
              <p className="text-base leading-7 text-white/70">
                Documenting growth on social platforms, inviting others into the journey of continual improvement and curiosity.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white/80 transition hover:border-white/60 hover:text-white"
          >
            Back to Home
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-8 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-white hover:text-ink"
          >
            View Projects
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

