export default function AboutPage() {

  return (
    <div className="relative bg-ink py-28">
      <div className="section-container space-y-20">
        <header className="space-y-6 text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.45em] text-black/50">Background</p>
          <h1 className="font-serif text-4xl text-black sm:text-5xl">About Me</h1>
          <p className="text-lg leading-8 text-black/75 sm:text-lg">
            My story as a person, a Vietnamese immigrant, and an engineering student.
          </p>
        </header>

        <div className="max-w-4xl space-y-8">
          <div className="space-y-6">
            <div className="space-y-6 text-lg leading-8 text-black sm:text-xl">
              <p>
                I&apos;m a Computer Engineering student at the University of Michigan (4.0 GPA, Martin & Ellen Chavez 
                Scholarship Winner, Dean&apos;s List) passionate about building systems at the intersection of hardware, 
                software, and autonomy. Born in Ho Chi Minh City, Vietnam and raised in Maryland, I carry a perspective 
                shaped by two cultures and a drive to create meaningful impact through engineering.
              </p>
              <p>
                I founded U-M Vertical Flight, a multidisciplinary team designing and building eVTOL aircraft for 
                Vertical Flight Society competitions—search-and-rescue, surveillance, and urban air mobility missions. 
                As Electrical Lead, I design power distribution, flight controller integration, and sensor suites 
                including LiDAR and thermal imaging for autonomous operations.
              </p>
              <p>
                At U-M&apos;s Magnetometer Laboratory, I&apos;m co-authoring a research publication on Random Forest ML 
                models for geomagnetic storm prediction, analyzing 10+ years of magnetometer data. I&apos;m also 
                collaborating with Curtis Ling (MaxLinear founder & CTO) on GoFundMI.org, a non-profit platform 
                connecting student researchers directly to funding.
              </p>
              <p>
                I believe in building solutions that are technically rigorous, well-designed, and serve real needs. 
                Whether it&apos;s calibrating flight hardware, training ML models on space weather data, or engineering 
                financial analytics tools, I bring precision and purpose to every project.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-black/10 bg-black/[0.02] p-8 md:p-10">
            <h2 className="font-serif text-2xl text-black mb-6">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-serif text-xl text-black">University of Michigan</h3>
                <p className="text-base text-black/70">Bachelor of Science in Engineering, Computer Engineering</p>
                <p className="text-sm text-black/50 mt-1">Expected May 2027 · GPA: 4.0/4.0</p>
                <p className="text-sm text-black/60 mt-2">
                  Relevant Coursework: Programming and Data Structures · Electrical Circuits · Solid Mechanics
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                    Chavez Scholarship
                  </span>
                  <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                    Dean&apos;s List
                  </span>
                </div>
              </div>
              <div className="border-t border-black/10 pt-4">
                <h3 className="font-serif text-xl text-black">Montgomery College</h3>
                <p className="text-base text-black/70">Associate of Science, General Engineering</p>
                <p className="text-sm text-black/50 mt-1">Sep 2023 – May 2025 · GPA: 3.7/4.0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

