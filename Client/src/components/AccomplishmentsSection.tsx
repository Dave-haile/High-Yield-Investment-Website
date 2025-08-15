import { memo } from "react";
import BackGround from "/Background/12.png";

const milestones = [
  {
    title: "2021",
    description:
      "In our first year, we successfully launched a new product/service, received positive feedback from early users, and formed partnerships with key industry players.",
  },
  {
    title: "2023",
    description:
      "We expanded into new markets, improved operational efficiency, and saw an increase in customer satisfaction.",
  },
  {
    title: "2025",
    description:
      "We secured funding for growth, refined our offerings based on customer feedback, and formed strategic partnerships.",
  },
  {
    title: "Present",
    description:
      "We achieved profitability, expanded our product line, and strengthened our brand reputation through positive customer feedback.",
  },
];

const AccomplishmentsSection = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Accomplishments Timeline",
    itemListElement: milestones.map((m, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: m.title,
      description: m.description,
    })),
  } as const;

  return (
    <section
    id="accomplishment"
      className="min-h-screen flex items-center justify-center p-6 md:p-8 relative overflow-hidden inset-0 bg-cover bg-center bg-no-repeat"
      aria-labelledby="accomplishments-heading"
      style={{ backgroundImage: `url(${BackGround})` }}
    >
      <div className="max-w-7xl mx-auto w-full relative z-10 h-[35rem] ml-12 flex flex-col gap-16">
        <header className="flex items-center justify-between mb-8 md:mb-10">
          <h1
            id="accomplishments-heading"
            className="text-pitch-hero text-4xl md:text-5xl lg:text-6xl font-semibold uppercase tracking-wider leading-tight"
          >
            Accomplish <br />
            ments Date
          </h1>
        </header>

        {/* Timeline */}
        <div className="flex flex-col">
          <div className="relative mb-10 md:mb-14">
            <div
              aria-hidden
              className="h-10 md:h-12 rounded-full border-[3px] border-pitch-hero bg-pitch-bg-overlay px-2 md:px-4 flex items-center"
            >
              <div className="w-full flex items-center justify-around">
                {milestones.map((_, i) => (
                  <span
                    key={i}
                    className="w-6 h-6 md:w-7 md:h-7 rounded-full shadow-glow bg-gradient-to-b from-[#ffdf87] to-[#b76b19]"
                    // style={{ background: "hsl(var(--pitch-contact))" }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Milestone details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <article className="space-y-3">
              <h3
                className="text-xl md:text-2xl font-bold"
                style={{ color: "hsl(var(--pitch-contact))" }}
              >
                2021
              </h3>
              <p className="text-pitch-subtitle leading-relaxed text-[1.2rem] text-left">
                In our first year, we  
                successfully<br /> launched a 
                new<br />  product/service,
                received <br /> positive
                 feedback from early <br /> users, 
                 and formed partnerships{" "}<br /> 
                with key industry players.
              </p>
            </article>
            <article className="space-y-3">
              <h3
                className="text-xl md:text-2xl font-bold"
                style={{ color: "hsl(var(--pitch-contact))" }}
              >
                2023
              </h3>
              <p className="text-pitch-subtitle leading-relaxed text-[1.2rem] text-left">
                We expanded into new  markets,<br /> improved operational<br /> efficiency, and saw an increase <br /> in  customer satisfaction.
              </p>
            </article>
            <article className="space-y-3">
              <h3
                className="text-xl md:text-2xl font-bold"
                style={{ color: "hsl(var(--pitch-contact))" }}
              >
                2025
              </h3>
              <p className="text-pitch-subtitle leading-relaxed text-[1.2rem] text-left">
                We secured funding for growth,<br />  refined our offerings based<br /> on customer feedback, and<br /> formed strategic partnerships.
              </p>
            </article>
            <article className="space-y-3">
              <h3
                className="text-xl md:text-2xl font-bold"
                style={{ color: "hsl(var(--pitch-contact))" }}
              >
                Present
              </h3>
              <p className="text-pitch-subtitle leading-relaxed text-[1.2rem] text-left">
                We achieved profitability,<br /> expanded our product line,<br /> and strengthened ourbrand<br />  reputation throughpositive <br />  customer feedback.
              </p>
            </article>
          </div>
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border">
            {milestones.map((m) => (
              <article key={m.title} className="space-y-3">
                <h3
                  className="text-xl md:text-2xl font-bold"
                  style={{ color: "hsl(var(--pitch-contact))" }}
                >
                  {m.title}
                </h3>
                <p className="text-pitch-subtitle leading-relaxed">
                  {m.description}
                </p>
              </article>
            ))}
          </div> */}
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

export default memo(AccomplishmentsSection);
