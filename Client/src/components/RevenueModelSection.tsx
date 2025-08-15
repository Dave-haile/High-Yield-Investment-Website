import { memo } from "react";
import BackGround from "/Background/11.png";

const plans = [
  {
    name: "Basic Plan",
    price: "40$/ month",
    features: ["Limited features", "Basic support", "No customization"],
    usage: ["Limited usage", "Limited storage"],
    additional: "No additional services included",
  },
  {
    name: "Standard Plan",
    price: "110$/ month",
    features: ["More features", "Standard support", "Some customization"],
    usage: ["Increased usage", "More storage"],
    additional: "Optional add-ons available for purchase",
  },
  {
    name: "Premium Plan",
    price: "220$/ month",
    features: ["Full features", "Priority support", "Full customization"],
    usage: ["Unlimited usage", "Unlimited storage"],
    additional: "Premium support and consulting included",
  },
] as const;

const schema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Revenue Model",
  itemListElement: plans.map((p, i) => ({
    "@type": "Offer",
    name: p.name,
    position: i + 1,
    priceCurrency: "USD",
    price: parseInt(p.price, 10) || undefined,
    description: `${p.name} pricing plan`,
  })),
} as const;

const LabelCell = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-[#e5e1da] text-black font-bold text-xl px-5 py-4 md:px-6 md:py-5 flex items-center">
    {children}
  </div>
);

const PlanCell = ({ children }: { children: React.ReactNode }) => (
  <div className="border-[3px] border-foreground bg-pitch-bg-overlay px-7 py-4 md:px-8 md:py-5 text-pitch-hero">
    {children}
  </div>
);

const Pill = ({ label }: { label: string }) => (
  <div className="px-14 md:px-16 py-3 md:py-3.5 rounded-full bg-[#ffd944] text-pitch-bg-overlay text-xl md:text-2xl font-semibold tracking-wide">
    {label}
  </div>
);

const RevenueModelSection = () => {
  return (
    <section id="revenue" className="min-h-screen flex items-center justify-center p-6 md:p-8 relative overflow-hidden inset-0 bg-cover bg-center bg-no-repeat" aria-labelledby="revenue-heading" style={{ backgroundImage: `url(${BackGround})` }}>
      {/* Decorative ribbons */}
      <div className="pointer-events-none absolute -left-24 -top-24 w-72 h-72 rounded-full bg-gradient-hero opacity-40 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 -bottom-28 w-96 h-96 rounded-full bg-gradient-text opacity-30 blur-3xl" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <header className="text-center mb-8 md:mb-10">
          <h1 id="revenue-heading" className="text-pitch-hero text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider leading-tight">
            Revenue Model
          </h1>
        </header>

        {/* Plan Pills */}
        <nav aria-label="Plans" className="flex items-center justify-center ml-60 gap-8 md:gap-10 mb-8 md:mb-12">
          {plans.map((p) => (
            <Pill key={p.name} label={p.name}  />
          ))}
        </nav>

        {/* Matrix Grid */}
        <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-[220px_1fr_1fr_1fr]">
          {/* Row: Pricing */}
          <LabelCell>Pricing</LabelCell>
          {plans.map((p) => (
            <PlanCell key={`price-${p.name}`}>
              <p className="text-lg md:text-xl font-semibold">{p.price}</p>
            </PlanCell>
          ))}

          {/* Row: Features */}
          <LabelCell>Features</LabelCell>
          {plans.map((p) => (
            <PlanCell key={`features-${p.name}`}>
              <ul className="list-disc pl-5 space-y-1.5 text-pitch-hero/90">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </PlanCell>
          ))}

          {/* Row: Usage Limits */}
          <LabelCell>Usage Limits</LabelCell>
          {plans.map((p) => (
            <PlanCell key={`usage-${p.name}`}>
              <ul className="list-disc pl-5 space-y-1.5 text-pitch-hero/90">
                {p.usage.map((u) => (
                  <li key={u}>{u}</li>
                ))}
              </ul>
            </PlanCell>
          ))}

          {/* Row: Additional Services */}
          <LabelCell>Additional Services</LabelCell>
          {plans.map((p) => (
            <PlanCell key={`additional-${p.name}`}>
              <p className="text-pitch-hero/90">{p.additional}</p>
            </PlanCell>
          ))}
        </div>
      </div>

      {/* Structured data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </section>
  );
};

export default memo(RevenueModelSection);