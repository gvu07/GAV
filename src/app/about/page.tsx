import Image from "next/image";

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

export default function AboutPage() {
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
        </div>

        {favoritePhotos.length > 0 && (
          <section className="space-y-8">
            <h2 className="font-serif text-3xl text-white sm:text-4xl">Photos I Like</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {favoritePhotos.map((photo, index) => (
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
          </section>
        )}
      </div>
    </div>
  );
}

