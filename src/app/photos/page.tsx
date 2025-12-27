'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

interface PhotoDetails {
  title?: string;
  description?: string;
  date?: string;
  location?: string;
  story?: string;
  customFields?: Record<string, string>;
}

interface Photo {
  id: number;
  imagePath: string;
  details: PhotoDetails;
}

const photos: Photo[] = [
  {
    id: 1,
    imagePath: "/Hero_Image1.jpeg",
    details: {
      title: "18th Birthday Art",
      description: "A picture after a festival in D.C. for my 18th birthday",
      date: "March 2025",
      location: "Washington, D.C.",
      story: "",
      customFields: {}
    }
  },
  {
    id: 2,
    imagePath: "/mebro.png",
    details: {
      title: "My Brother & I",
      description: "Christmas in Viet Nam with my brother",
      date: "",
      location: "",
      story: "",
      customFields: {}
    }
  },
  {
    id: 3,
    imagePath: "/GAV_Image.jpeg",
    details: {
      title: "Seneca Rocks Summit",
      description: "My first time summiting a mountain",
      date: "December 2024",
      location: "Seneca Rocks, West Virginia",
      story: "",
      customFields: {}
    }
  },
  {
    id: 4,
    imagePath: "/SenecaRocks.png",
    details: {
      title: "Seneca Rocks",
      description: "The beautiful landscape of Seneca Rocks",
      date: "",
      location: "Seneca Rocks, West Virginia",
      story: "",
      customFields: {}
    }
  },
  {
    id: 5,
    imagePath: "/MeSis.png",
    details: {
      title: "My Sister's White Coat",
      description: "My sister's white coat ceremony at University of Florida",
      date: "June 2024",
      location: "Gainesville, Florida",
      story: "",
      customFields: {}
    }
  },
  {
    id: 6,
    imagePath: "/MeFam.png",
    details: {
      title: "My High School Graduation",
      description: "My mom wearing my graduation cap & gown, and my dad wearing the awards that I was able to achieve become of their sacrifices and hard work,",
      date: "May 2025",
      location: "UMBC, Baltimore, Maryland",
      story: "My parents didn't get to complete High School, so they know the importances of education",
      customFields: {}
    }
  }
];

const PHOTOS_PER_PAGE = 6;

export default function PhotosPage() {
  const [visiblePhotos, setVisiblePhotos] = useState(PHOTOS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);

  const loadMorePhotos = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisiblePhotos((prev) => Math.min(prev + PHOTOS_PER_PAGE, photos.length));
      setIsLoading(false);
    }, 300);
  };

  const hasMorePhotos = visiblePhotos < photos.length;

  useEffect(() => {
    const handleScroll = () => {
      if (isLoading || !hasMorePhotos) return;

      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - 100;

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
      <div className="section-container space-y-16">
        <header className="space-y-6 text-center md:text-left">
          <h1 className="font-serif text-4xl text-black sm:text-5xl">Photos of My Life</h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-black/75 md:mx-0 md:text-lg">
            My collection of memories, moments, and experiences
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {photos.slice(0, visiblePhotos).map((photo) => (
            <div key={photo.id} className="flip-card aspect-[4/3]">
              <div className="flip-card-inner">
                {/* Front of card - Photo */}
                <div className="flip-card-front rounded-2xl border border-black/10 bg-black/[0.02] overflow-hidden">
                  <Image
                    src={photo.imagePath}
                    alt={photo.details.title || `Photo ${photo.id}`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Back of card - Details */}
                <div className="flip-card-back rounded-2xl border border-black/10 bg-black/[0.02] p-6 flex flex-col justify-center">
                  <h3 className="font-serif text-xl text-black mb-4">
                    {photo.details.title || 'Untitled'}
                  </h3>
                  
                  {photo.details.description && (
                    <p className="text-base leading-7 text-black/75 mb-4">
                      {photo.details.description}
                    </p>
                  )}

                  <div className="space-y-2 text-sm">
                    {photo.details.date && (
                      <div>
                        <p className="text-black/50 uppercase tracking-[0.3em] text-xs mb-1">Date</p>
                        <p className="text-black/80">{photo.details.date}</p>
                      </div>
                    )}
                    
                    {photo.details.location && (
                      <div>
                        <p className="text-black/50 uppercase tracking-[0.3em] text-xs mb-1">Location</p>
                        <p className="text-black/80">{photo.details.location}</p>
                      </div>
                    )}
                    
                    {photo.details.story && (
                      <div>
                        <p className="text-black/50 uppercase tracking-[0.3em] text-xs mb-1">Story</p>
                        <p className="text-black/80 leading-6">{photo.details.story}</p>
                      </div>
                    )}

                    {photo.details.customFields && Object.keys(photo.details.customFields).length > 0 && (
                      <div className="mt-4 pt-4 border-t border-black/10">
                        {Object.entries(photo.details.customFields).map(([key, value]) => (
                          <div key={key} className="mb-2">
                            <p className="text-black/50 uppercase tracking-[0.3em] text-xs mb-1">{key}</p>
                            <p className="text-black/80">{value}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {hasMorePhotos && (
          <div className="flex justify-center pt-8">
            <button
              onClick={loadMorePhotos}
              disabled={isLoading}
              className="rounded-full border border-black/25 bg-black/[0.02] px-8 py-3 text-sm font-semibold uppercase tracking-[0.38em] text-black/80 transition hover:border-gold hover:bg-black/[0.05] hover:text-black disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Loading...' : 'Load More'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
