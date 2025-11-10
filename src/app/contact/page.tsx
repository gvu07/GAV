import Link from "next/link";
import { ArrowUpRight, Github, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@gianganhvu.com",
    href: "mailto:contact@gianganhvu.com",
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
    value: "Washington, D.C.  Ann Arbor, MI",
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
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/gi.d.vu/",
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
          <p className="text-xs uppercase tracking-[0.45em] text-white/50">Let&apos;s Connect</p>
          <h1 className="font-serif text-4xl text-white sm:text-5xl">Contact</h1>
          <p className="mx-auto max-w-3xl text-sm leading-7 text-white/60 md:mx-0 md:text-base">
            Opportunities, collaborations, or conversations about thoughtful, human-centered experiences—reach out and let&apos;s build something remarkable together.
          </p>
        </header>

        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8 rounded-3xl border border-white/10 bg-white/[0.02] p-10 backdrop-blur-xl">
            <h2 className="font-serif text-2xl text-white">Contact Information</h2>
            <div className="space-y-6">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="flex items-start gap-4 text-white/70">
                  <detail.icon className="mt-1 h-5 w-5 text-white/40" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-white/40">{detail.label}</p>
                    {detail.href ? (
                      <Link href={detail.href} className="mt-2 block text-sm text-white/70 transition hover:text-white">
                        {detail.value}
                      </Link>
                    ) : (
                      <p className="mt-2 text-sm text-white/70">{detail.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-white/50">Download</p>
              <h3 className="font-serif text-xl text-white">Resume</h3>
              <p className="text-sm leading-7 text-white/60">
                Get the complete overview of experience, tools, and impact across engineering and design.
              </p>
              <Link
                href="/Giang_Anh_Vu_Resume.pdf"
                target="_blank"
                className="inline-flex items-center gap-3 rounded-full border border-white/30 px-6 py-3 text-xs uppercase tracking-[0.4em] text-white transition hover:bg-white hover:text-ink"
              >
                Download PDF
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-10">
            <div className="space-y-6 rounded-3xl border border-white/10 bg-white/[0.02] p-10">
              <h2 className="font-serif text-2xl text-white">Message</h2>
              <p className="text-sm leading-7 text-white/60">
                Share the vision, timeline, or challenges you&apos;re exploring. I typically respond within two business days.
              </p>
              <Link
                href="mailto:contact@gianganhvu.com?subject=Let%27s%20Collaborate"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.4em] text-white/70 transition hover:border-white/60 hover:text-white"
              >
                Compose Email
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="space-y-4 rounded-3xl border border-white/10 bg-white/[0.02] p-10">
              <h2 className="font-serif text-2xl text-white">Stay Connected</h2>
              <p className="text-sm text-white/60">
                Follow along for behind-the-scenes experiments, learning, and inspiration.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    className="group flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.02] px-4 py-3 text-sm text-white/60 transition hover:border-white/60 hover:text-white"
                  >
                    <social.icon className="h-5 w-5 text-white/40 transition group-hover:text-gold" />
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
