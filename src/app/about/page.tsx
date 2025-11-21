'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

// Add or remove photos by modifying this array
// Place your images in the /public folder and reference them here
const favoritePhotos = [
  "/Hero_Image1.jpeg",
  "/mebro.png",
  "/GAV_Image.jpeg",
  "/SenecaRocks.png",
  "/MeSis.png",
  "/MeFam.png",
  // Add more photo paths here as needed
];

const PHOTOS_PER_PAGE = 6;

export default function AboutPage() {
  const [visiblePhotos, setVisiblePhotos] = useState(PHOTOS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);

  const loadMorePhotos = () => {
    setIsLoading(true);
    // Simulate a slight delay for better UX
    setTimeout(() => {
      setVisiblePhotos((prev) => Math.min(prev + PHOTOS_PER_PAGE, favoritePhotos.length));
      setIsLoading(false);
    }, 300);
  };

  const hasMorePhotos = visiblePhotos < favoritePhotos.length;

  useEffect(() => {
    const handleScroll = () => {
      if (isLoading || !hasMorePhotos) return;

      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - 100; // 100px threshold

      if (scrollPosition >= pageHeight) {
        loadMorePhotos();
      }
    };

    if (hasMorePhotos) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isLoading, hasMorePhotos]);

  return (
    <div className="relative bg-ink py-28">
      <div className="section-container space-y-20">
        <header className="space-y-6 text-center md:text-left">
          <h1 className="font-serif text-4xl text-white sm:text-5xl">About Me</h1>
        </header>

        <div className="max-w-4xl space-y-8">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl text-white sm:text-4xl">
              Scholar | Creator | Innovator
            </h2>
            <div className="space-y-6 text-lg leading-8 text-white/75 sm:text-xl">
              <p>
                I'm a Mechanical Engineering student at the University of Michigan with a passion for building solutions 
                that bridge technical excellence with human-centered design. Born in Ho Chi Minh City, Vietnam and raised 
                in Maryland, I bring a unique perspective to every project—combining rigorous engineering principles with 
                creative problem-solving.
              </p>
              <p>
                My work spans machine learning research, full-stack development, and laboratory automation. Currently, I'm 
                authoring my first research paper on ML-based geomagnetic event detection, developing financial intelligence 
                tools for startups, and contributing to space physics research at U-M's Magnetometer Laboratory.
              </p>
              <p>
                I believe in creating solutions that are not only technically sound but also intuitive and meaningful. 
                Whether it's prototyping new digital experiences or orchestrating research tooling, I bring precision, 
                warmth, and a sense of narrative to every collaboration.
              </p>
              <p>
                When I'm not coding or researching, you'll find me exploring photography, documenting my journey on social 
                platforms, and seeking out new challenges that push the boundaries of what's possible at the intersection 
                of engineering, business, and creativity.
              </p>
            </div>
          </div>
        </div>

        {favoritePhotos.length > 0 && (
          <section className="space-y-8">
            <h2 className="font-serif text-3xl text-white sm:text-4xl">Photos I Like</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {favoritePhotos.slice(0, visiblePhotos).map((photo, index) => (
                <div
                  key={index}
                  className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition hover:border-white/20"
                >
                  <Image
                    src={photo}
                    alt={`Favorite photo ${index + 1}`}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
            {hasMorePhotos && (
              <div className="flex justify-center pt-8">
                <button
                  onClick={loadMorePhotos}
                  disabled={isLoading}
                  className="rounded-full border border-white/25 bg-white/[0.02] px-8 py-3 text-sm font-semibold uppercase tracking-[0.38em] text-white/80 transition hover:border-gold hover:bg-white/[0.05] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Loading...' : 'Load More'}
                </button>
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
}

