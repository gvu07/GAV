import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@gianganhvu.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=contact@gianganhvu.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (240) 756-1062",
    href: "tel:+12407561062",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Washington, D.C. | Ann Arbor, MI",
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/giang-anh-d-vu/",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/gvu07",
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: "https://www.youtube.com/@GiangAnhDVu",
  },
];

export default function ContactPage() {
  return (
    <div className="relative bg-ink py-28">
      <div className="section-container space-y-16">
        <header className="space-y-6 text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.45em] text-black/50">Collaborations | Commissions | Conversations</p>
          <h1 className="font-serif text-4xl text-black sm:text-5xl">Contact Me</h1>
          <p className="mx-auto max-w-3xl text-sm leading-7 text-black/60 md:mx-0 md:text-base">
            Reach out and let&apos;s build something remarkable together.
          </p>
        </header>

        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8 rounded-3xl border border-black/10 bg-black/[0.02] p-10 backdrop-blur-xl">
            <h2 className="font-serif text-2xl text-black">Contact Information</h2>
            <div className="space-y-6">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="flex items-start gap-4 text-black/70">
                  <detail.icon className="mt-1 h-5 w-5 text-black/40" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-black/40">{detail.label}</p>
                    {detail.href ? (
                      detail.href.startsWith('https://mail.google.com') || detail.href.startsWith('tel:') ? (
                        <a href={detail.href} target="_blank" rel="noopener noreferrer" className="mt-2 block text-sm text-black/70 transition hover:text-black">
                          {detail.value}
                        </a>
                      ) : (
                        <Link href={detail.href} className="mt-2 block text-sm text-black/70 transition hover:text-black">
                          {detail.value}
                        </Link>
                      )
                    ) : (
                      <p className="mt-2 text-sm text-black/70">{detail.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 rounded-3xl border border-black/10 bg-black/[0.03] p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-black/50">Download</p>
              <h3 className="font-serif text-xl text-black">Resume</h3>
              <p className="text-sm leading-7 text-black/60">
                Get the complete overview of experience, tools, and impact across engineering and design.
              </p>
              <Link
                href="/Giang_Anh_Vu_Resume.pdf"
                target="_blank"
                className="inline-flex items-center gap-3 rounded-full border border-black/30 px-6 py-3 text-xs uppercase tracking-[0.4em] text-black transition hover:bg-black hover:text-white"
              >
                Download PDF
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-10">
            <a
              href="https://www.linkedin.com/in/giang-anh-d-vu/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-4 rounded-3xl border-2 border-black/20 bg-black/[0.04] p-8 transition hover:border-black/40 hover:bg-black/[0.06]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-black/15 bg-black/[0.06] transition group-hover:bg-black/10">
                  <Linkedin className="h-8 w-8 text-[#0A66C2]" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl text-black">LinkedIn</h2>
                  <p className="text-sm text-black/60">Connect & see my full experience</p>
                </div>
              </div>
              <p className="text-sm leading-7 text-black/70">
                My primary professional profile—experience, recommendations, and updates. Best way to connect for opportunities and collaboration.
              </p>
              <span className="inline-flex w-fit items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-black/80 transition group-hover:text-black">
                View my LinkedIn profile
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>

            <div className="space-y-6 rounded-3xl border border-black/10 bg-black/[0.02] p-10">
              <h2 className="font-serif text-2xl text-black">Message</h2>
              <p className="text-sm leading-7 text-black/60">
                Share the vision, timeline, or challenges you&apos;re exploring. I typically respond within two business days.
              </p>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@gianganhvu.com&su=Let%27s%20Collaborate"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-black/20 px-6 py-3 text-xs uppercase tracking-[0.4em] text-black/70 transition hover:border-black/60 hover:text-black"
              >
                Compose Email
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="space-y-4 rounded-3xl border border-black/10 bg-black/[0.02] p-10">
              <h2 className="font-serif text-2xl text-black">Stay Connected</h2>
              <p className="text-sm text-black/60">
                Follow along for behind-the-scenes experiments, learning, and inspiration.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    className="group flex items-center gap-3 rounded-2xl border border-black/15 bg-black/[0.02] px-4 py-3 text-sm text-black/60 transition hover:border-black/60 hover:text-black"
                  >
                    <social.icon className="h-5 w-5 text-black/40 transition group-hover:text-gold" />
                    <span>{social.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
