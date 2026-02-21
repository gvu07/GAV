'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Timeline", href: "/timeline" },
  { label: "Ideas", href: "/ideas" },
  { label: "Contact", href: "/contact" },
  { label: "Stats", href: "/stats" },
  { label: "Photos", href: "/photos" },
  { label: "Principles", href: "/principles" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

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

  useEffect(() => {
    const navElement = navRef.current;
    if (!navElement) return;

    const handleWheel = (e: WheelEvent) => {
      if (navElement.contains(e.target as Node)) {
        e.preventDefault();
        navElement.scrollLeft += e.deltaY;
      }
    };

    navElement.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      navElement.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-ink/80 backdrop-blur-sm shadow-xl shadow-black/5" : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between py-5">
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <div className="relative h-11 w-11 overflow-hidden rounded-full border border-black/20 bg-black/5">
            <Image
              src="/GAV_Logo1_nobg.png"
              alt="Giang Anh Vu"
              fill
              className="object-contain p-1"
              priority
            />
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-4 flex-1 min-w-0 ml-8">
          <nav
            ref={navRef}
            className="flex items-center gap-8 overflow-x-auto scrollbar-hide max-w-[calc(100vw-20rem)] scroll-smooth"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[0.82rem] font-semibold uppercase tracking-[0.28em] transition whitespace-nowrap flex-shrink-0 ${
                    isActive
                      ? "text-black border-b-2 border-gold pb-0.5"
                      : "text-black/60 hover:text-black"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <Link
            href="/Giang_Anh_Vu_Resume.pdf"
            target="_blank"
            className="rounded-full border border-black/30 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-black transition hover:bg-black hover:text-white flex-shrink-0 ml-4"
          >
            Resume
          </Link>
        </div>

        <MobileMenu pathname={pathname} />
      </div>
    </header>
  );
}

function MobileMenu({ pathname }: { pathname: string }) {
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
        className="flex h-11 w-11 items-center justify-center rounded-full border border-black/20 bg-black/5"
      >
        <span className="sr-only">Toggle navigation</span>
        <div className="space-y-1.5">
          {[0, 1, 2].map((index) => (
            <span
              key={index}
              className={`block h-0.5 w-6 origin-center transform bg-black transition duration-300 ${
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
        className={`fixed inset-0 z-40 bg-gradient-to-b from-ink to-ink/95 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      >
        <div
          className="absolute inset-x-0 top-24 mx-auto flex max-w-sm flex-col gap-5 px-10 text-center"
          onClick={(event) => event.stopPropagation()}
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`text-lg font-semibold uppercase tracking-[0.4em] transition ${
                  isActive ? "text-black" : "text-black/60 hover:text-black"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/Giang_Anh_Vu_Resume.pdf"
            target="_blank"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full border border-black/40 px-6 py-3 text-base font-semibold uppercase tracking-[0.4em] text-black transition hover:bg-black hover:text-white"
          >
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
}
