import { memo } from "react";
import BackGround from "/Background/9.png";
import BackGround2 from "/Album/IMG_20221028_120541_158.jpg";

type AdvantageCardProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

const AdvantageCard = ({ title, children, className = "" }: AdvantageCardProps) => (
  <article className={`rounded-2xl md:rounded-3xl border-pitch-hero border-[3px] bg-pitch-bg-overlay backdrop-blur-sm p-4 md:p-6 shadow-elegant w-[27rem] ${className}`}>
    <h3 className="text-pitch-hero text-xl md:text-2xl font-semibold mb-2 md:mb-3">
      {title}
    </h3>
    <p className="text-pitch-subtitle text-base md:text-xl leading-relaxed">
      {children}
    </p>
  </article>
);

const CompetitiveAdvantagesSection = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Key Competitive Advantages",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Expert Team" },
      { "@type": "ListItem", position: 2, name: "Customer Focus" },
      { "@type": "ListItem", position: 3, name: "Cutting-Edge Technology" },
      { "@type": "ListItem", position: 4, name: "Proven Success" },
    ],
  } as const;

  return (
    <section id="advantage" className="min-h-screen flex items-center justify-center p-6 md:p-8 relative overflow-hidden inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${BackGround})` }} aria-labelledby="advantages-heading">
      {/* Decorative iridescent ribbons */}
      <div className="pointer-events-none absolute -left-24 -top-24 w-72 h-72 rounded-full bg-gradient-hero opacity-40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-gradient-text opacity-30 blur-3xl" />

      <div className="max-w-7xl mx-auto w-full relative z-10 ">
        <header className="text-center mb-10 md:mb-14">
          <h1 id="advantages-heading" className="text-pitch-hero text-3xl md:text-4xl lg:text-5xl font-[lato] font-black uppercase tracking-wider leading-tight">
            Key Competitive
            <br />
            Advantages
          </h1>
        </header>

        {/* 3-column, 2-row layout with a tall center image */}
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-4 md:gap-6 lg:gap-8 items-stretch">
          {/* Left column */}
          <AdvantageCard title="Expert Team">
            Our skilled team brings specialized knowledge and experience to provide top-notch solutions tailored to our clients' needs.
          </AdvantageCard>

          {/* Center tall image (spans two rows on large screens) */}
          <div className="relative overflow-hidden rounded-1xl ml-8 md:rounded-2xl shadow-elegant w-[23rem] h-[30rem] lg:row-span-2">
            <img
              src={`${BackGround2}`}
              alt="Confident professional celebrating success"
              className="w-full h-full object-cover grayscale"
              loading="lazy"
            />
          </div>

          {/* Right column */}
          <AdvantageCard title="Customer Focus" className=" whitespace-nowrap">
            We prioritize building strong relationships <br /> and understanding our clients' needs, <br /> leading to long-term partnerships based on <br /> trust and satisfaction.
          </AdvantageCard>

          <AdvantageCard title="Cutting-Edge Technology" className="lg:mt-0">
            We use the latest tools and technology to stay ahead, ensuring efficient and effective services.
          </AdvantageCard>

          <AdvantageCard title="Proven Success">
            With a track record of successful projects, we've earned a reputation for reliability and excellence, setting us apart from the competition.
          </AdvantageCard>
        </div>
      </div>

      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
  );
};

export default memo(CompetitiveAdvantagesSection);