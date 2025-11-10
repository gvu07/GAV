'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-ink/80 backdrop-blur-sm shadow-xl shadow-black/10" : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between py-5">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/20 bg-white/5">
            <Image
              src="/GAV_Logo1_nobgWhite.png"
              alt="Giang Anh Vu monogram"
              fill
              className="object-contain p-1"
              priority
            />
          </div>
          <span className="font-serif text-2xl font-semibold tracking-[0.18em] uppercase text-white">GAV</span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.95rem] font-semibold uppercase tracking-[0.32em] text-white/70 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/Giang_Anh_Vu_Resume.pdf"
            target="_blank"
            className="rounded-full border border-white/30 px-6 py-2 text-sm font-semibold uppercase tracking-[0.38em] text-white transition hover:bg-white hover:text-ink"
          >
            Resume
          </Link>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label="Toggle navigation"
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5"
      >
        <span className="sr-only">Toggle navigation</span>
        <div className="space-y-1.5">
          {[0, 1, 2].map((index) => (
            <span
              key={index}
              className={`block h-0.5 w-6 origin-center transform bg-white transition duration-300 ${
                open
                  ? index === 0
                    ? "translate-y-2 rotate-45"
                    : index === 1
                      ? "opacity-0"
                      : "-translate-y-2 -rotate-45"
                  : ""
              }`}
            />
          ))}
        </div>
      </button>
      <div
        className={`fixed inset-0 z-40 bg-gradient-to-b from-ink to-ink/95 backdrop-blur-sm transition-opacity ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      >
        <div
          className="absolute inset-x-0 top-24 mx-auto flex max-w-sm flex-col gap-6 px-10 text-center"
          onClick={(event) => event.stopPropagation()}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-lg font-semibold uppercase tracking-[0.4em] text-white/80 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/Giang_Anh_Vu_Resume.pdf"
            target="_blank"
            onClick={() => setOpen(false)}
            className="rounded-full border border-white/40 px-6 py-3 text-base font-semibold uppercase tracking-[0.4em] text-white transition hover:bg-white hover:text-ink"
          >
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
}

