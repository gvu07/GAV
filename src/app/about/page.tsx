export default function AboutPage() {

  return (
    <div className="relative bg-ink py-28">
      <div className="section-container space-y-20">
        <header className="space-y-6 text-center md:text-left">
          <h1 className="font-serif text-4xl text-black sm:text-5xl">About Me</h1>
        </header>

        <div className="max-w-4xl space-y-8">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl text-black sm:text-4xl">
              Scholar | Creator | Innovator
            </h2>
            <div className="space-y-6 text-lg leading-8 text-black/75 sm:text-xl">
              <p>
                I'm a Computer Engineering student at the University of Michigan with a passion for building solutions 
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
      </div>
    </div>
  );
}

