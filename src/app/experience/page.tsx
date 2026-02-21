import Link from "next/link";
import { ArrowUpRight, Briefcase, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Founder & Electrical Lead",
    org: "U-M Vertical Flight",
    type: "Project Team",
    period: "Jan 2026 – Present",
    location: "Ann Arbor, Michigan · On-site",
    bullets: [
      "Founded multidisciplinary eVTOL design team competing in Vertical Flight Society design-build-fly competitions (search-and-rescue, surveillance, UAM); secured $20k+ in funding and sponsorships.",
      "Lead electrical systems design: power distribution, flight controllers, sensor integration (LiDAR, thermal) for autonomous VTOL quadcopters and hybrid-wing drones.",
    ],
    skills: ["eVTOL Design", "Electrical Systems", "LiDAR", "Leadership"],
  },
  {
    title: "Research Assistant",
    org: "U-M Magnetometer Laboratory",
    type: "Part-time",
    period: "Aug 2025 – Present",
    location: "Ann Arbor, Michigan · On-site",
    bullets: [
      "Develop Random Forest ML models achieving 80% recall for geomagnetic storm prediction; analyze 10+ years of magnetometer data; co-author publication enabling novel early warning systems.",
      "Calibrate and maintain Helmholtz Coil apparatus for RM3100 sensor testing, validating hardware reliability for spaceflight environments.",
    ],
    skills: ["Python", "Scikit-learn", "Research", "MATLAB"],
  },
  {
    title: "Math Instructor",
    org: "Mathnasium",
    type: "Part-time",
    period: "May 2024 – Jun 2025",
    location: "Clarksville, MD · On-site",
    bullets: [
      "Instructed students in AP Calculus and Physics preparation through personalized learning plans, leading to 90% of students achieving a score of 4 or higher.",
      "Mentored high school students in SAT Math, resulting in an average score increase of 100+ points and improved mastery of algebraic concepts.",
    ],
    skills: ["Teaching", "Calculus", "SAT Prep", "Mentorship"],
  },
  {
    title: "Vice President",
    org: "Phi Theta Kappa International College Honor Society · Montgomery College",
    type: "Leadership",
    period: "Aug 2024 – Jun 2025",
    location: "Rockville, Maryland · Hybrid",
    bullets: [
      "Orchestrated 5+ large-scale events for 400-member honor society, increasing member engagement and representing chapter at regional conferences.",
    ],
    skills: ["Event Coordination", "Member Engagement", "Leadership"],
  },
  {
    title: "Treasurer",
    org: "Montgomery College Student Government Association",
    type: "Leadership",
    period: "Dec 2023 – Jun 2024",
    location: "Rockville, Maryland",
    bullets: [
      "Administered $40,000 annual budget for 40+ student organizations; exercised fiscal oversight to approve $28,000+ in resource allocations through weekly proposal hearings.",
    ],
    skills: ["Budgeting", "Fiscal Oversight", "Accounting"],
  },
];

export default function ExperiencePage() {
  return (
    <div className="relative bg-ink py-28">
      <div className="section-container space-y-16">
        <header className="space-y-6 text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.45em] text-black/50">Engineering · Research · Leadership</p>
          <h1 className="font-serif text-4xl text-black sm:text-5xl">Experience</h1>
          <p className="mx-auto max-w-3xl text-sm leading-7 text-black/60 md:mx-0 md:text-base">
            Engineering leadership, research, and professional experience spanning eVTOL design, space physics, and community impact.
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
          {experiences.map((exp, i) => {
            const isCurrent = exp.period.includes("Present");
            return (
            <article
              key={`${exp.title}-${exp.org}-${i}`}
              className={`rounded-3xl border bg-black/[0.02] p-8 md:p-10 backdrop-blur-xl transition hover:border-black/15 ${
                isCurrent
                  ? "border-l-4 border-l-gold border-black/10"
                  : "border-black/10"
              }`}
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
            );
          })}
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
