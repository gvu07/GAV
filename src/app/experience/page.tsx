import Link from "next/link";
import { ArrowUpRight, Briefcase, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Student Researcher",
    org: "University of Michigan College of Engineering",
    type: "Part-time",
    period: "Aug 2025 - Present · 7 mos",
    location: "Ann Arbor, Michigan, United States · On-site",
    bullets: [
      "Develop ML models achieving 94% recall for geomagnetic storm prediction using Random Forest classifiers, enabling early warning systems for satellite infrastructure; authoring research paper soon to be published.",
      "Analyze magnetometer data to correlate solar events with geomagnetic fluctuations; research material properties for optimal sensor selection on NASA missions.",
      "Calibrate and maintain Helmholtz Coil apparatus for RM3100 sensor testing.",
    ],
    skills: ["Scholarly Research", "Python", "Mathematics", "+2 skills"],
  },
  {
    title: "Mathematics Teacher",
    org: "Mathnasium - The Math Learning Center of 100+ students K-12",
    type: "Part-time",
    period: "May 2024 - Jun 2025 · 1 yr 2 mos",
    location: "Clarksville, MD · On-site",
    bullets: [
      "Tutor & customize curriculum for students in math, improved students grades and understanding.",
      "Helped prepare high school students for SAT/ACT Math.",
    ],
    skills: ["Teaching", "Problem Solving", "+2 skills"],
  },
  {
    title: "Vice President Phi Theta Kappa (Alpha Chi Eta Chapter)",
    org: "Montgomery College",
    type: "Part-time",
    period: "Aug 2024 - May 2025 · 10 mos",
    location: "Rockville, Maryland, United States · Hybrid",
    bullets: [
      "Elected to lead the Alpha Chi Eta chapter of the international honor society, overseeing strategic initiatives for a high-achieving student body.",
    ],
    skills: ["Large-Scale Event Coordination", "Member Recruitment & Engagement"],
  },
  {
    title: "Treasurer of Student Government Association",
    org: "Montgomery College",
    type: "Seasonal",
    period: "Dec 2023 - Oct 2024 · 11 mos",
    location: "51 Mannakee St, Rockville, MD 20850",
    bullets: [
      "Managed $40,000 budget, overseeing financial allocations for 40+ student organizations; approved $28,000+ in resources through bi-weekly meetings.",
    ],
    skills: ["Networking", "Accounting", "+3 skills"],
  },
  {
    title: "Team Member",
    org: "Domino's",
    type: "Part-time",
    period: "Feb 2023 - Feb 2024 · 1 yr 1 mo",
    location: "Gaithersburg, Maryland, United States · On-site",
    bullets: [
      "Using teamwork and Point of Sale (POS) Systems to make pizzas for customers and ensure they have a good experience. Memorizing recipes and managing inventory.",
    ],
    skills: ["Teamwork", "Point of Sale", "+2 skills"],
  },
  {
    title: "SMOB Board Member",
    org: "Montgomery County Public Schools",
    type: "Seasonal",
    period: "Oct 2021 - Jun 2023 · 1 yr 9 mos",
    location: "Montgomery County, Maryland, United States",
    bullets: [],
    skills: ["Team Leadership", "Leadership Development"],
  },
  {
    title: "Guest Safety & Operations Associate",
    org: "City of Gaithersburg",
    type: "Seasonal",
    period: "May 2022 - Sep 2022 · 5 mos",
    location: "Gaithersburg, Maryland, United States · On-site",
    bullets: [],
    skills: ["Safety Compliance", "Incident Management", "+1 skill"],
  },
];

export default function ExperiencePage() {
  return (
    <div className="relative bg-ink py-28">
      <div className="section-container space-y-16">
        <header className="space-y-6 text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.45em] text-black/50">Roles · Leadership · Research</p>
          <h1 className="font-serif text-4xl text-black sm:text-5xl">Experience</h1>
          <p className="mx-auto max-w-3xl text-sm leading-7 text-black/60 md:mx-0 md:text-base">
            Professional and leadership experience from my LinkedIn—research, teaching, student government, and operations.
          </p>
          <a
            href="https://www.linkedin.com/in/giang-anh-d-vu/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.35em] text-black/70 transition hover:text-black"
          >
            View full profile on LinkedIn
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </header>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <article
              key={`${exp.title}-${exp.org}-${i}`}
              className="rounded-3xl border border-black/10 bg-black/[0.02] p-8 md:p-10 backdrop-blur-xl transition hover:border-black/15"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-black/50">
                    <Briefcase className="h-4 w-4" />
                    <span className="text-xs uppercase tracking-[0.35em]">{exp.type}</span>
                  </div>
                  <h2 className="font-serif text-2xl text-black">{exp.title}</h2>
                  <p className="text-base font-medium text-black/80">{exp.org}</p>
                  <p className="text-sm text-black/60">{exp.period}</p>
                  <div className="flex items-center gap-2 text-sm text-black/50">
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              {exp.bullets.length > 0 && (
                <ul className="mt-6 space-y-2 border-t border-black/10 pt-6">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="text-sm leading-7 text-black/70 pl-4 border-l-2 border-black/10">
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
              {exp.skills.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-black/15 bg-black/[0.03] px-3 py-1 text-xs text-black/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="rounded-3xl border border-black/10 bg-black/[0.03] p-8 text-center">
          <p className="text-sm text-black/60 mb-4">
            For the complete timeline and recommendations, visit my LinkedIn.
          </p>
          <Link
            href="https://www.linkedin.com/in/giang-anh-d-vu/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-black/30 px-6 py-3 text-xs uppercase tracking-[0.4em] text-black transition hover:bg-black hover:text-white"
          >
            Open LinkedIn Profile
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
