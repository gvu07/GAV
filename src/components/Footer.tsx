import Link from "next/link";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/giang-anh-d-vu/" },
  { label: "GitHub", href: "https://github.com/gvu07" },
  { label: "Instagram", href: "https://www.instagram.com/gi.d.vu/" },
  { label: "YouTube", href: "https://www.youtube.com/@GiangAnhDVu" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-serif text-2xl text-white/90">Let&apos;s create something remarkable.</p>
          <p className="mt-3 max-w-md text-sm text-white/50">
            Based in Washington, D.C. and Ann Arbor, MI, shaping elegant digital experiences rooted in engineering discipline and thoughtful storytelling.
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 md:items-end">
          <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.35em] text-white/50">
            {socials.map((social) => (
              <Link key={social.label} href={social.href} target="_blank" className="transition hover:text-white">
                {social.label}
              </Link>
            ))}
          </div>
          <Link
            href="mailto:contact@gianganhvu.com"
            className="rounded-full border border-white/25 px-5 py-2 text-xs uppercase tracking-[0.35em] text-white transition hover:bg-white hover:text-ink"
          >
            contact@gianganhvu.com
          </Link>
        </div>
      </div>

      <p className="mt-10 text-center text-xs uppercase tracking-[0.4em] text-white/30">
        © {year} Giang Anh Vu. All Rights Reserved.
      </p>
    </footer>
  );
}
