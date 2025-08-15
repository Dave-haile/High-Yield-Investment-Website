import BackGround from "/Background/17.png";
import { memo } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

// Sample data matching the reference look
const data = [
  { name: "Item 1", gold: 18, rose: 0, silver: 12 },
  { name: "Item 2", gold: 30, rose: 12, silver: 6 },
  { name: "Item 3", gold: 25, rose: 38, silver: 20 },
  { name: "Item 4", gold: 40, rose: 30, silver: 15 },
  { name: "Item 5", gold: 42, rose: 32, silver: 50 },
];

const TractionSection = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Traction Metrics",
    description:
      "Snapshot of success metrics including revenue growth, customer satisfaction, and market share.",
    variableMeasured: [
      "Annual revenue growth",
      "Customer satisfaction",
      "Market share",
    ],
  } as const;

  return (
    <section
    id="transaction"
      className="min-h-screen flex items-center justify-center p-6 md:p-8 relative overflow-hidden inset-0 bg-cover bg-center bg-no-repeat"
      aria-labelledby="traction-heading"
      style={{ backgroundImage: `url(${BackGround})` }}
    >
      {/* Decorative ribbons */}
      <div className="pointer-events-none absolute -left-24 -top-24 w-72 h-72 rounded-full bg-gradient-hero opacity-40 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 -bottom-28 w-96 h-96 rounded-full bg-gradient-text opacity-30 blur-3xl" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center relative z-10">
        {/* Chart */}
        <div className="w-full h-[360px] md:h-[420px] lg:h-[480px] bg-pitch-bg-overlay/20 rounded-2xl md:rounded-3xl p-4 md:p-6 border border-foreground/10">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 10, bottom: 10, left: 0 }}>
              <CartesianGrid stroke="hsl(0 0% 30% / 0.25)" vertical={false} />
              <XAxis
                dataKey="name"
                tick={{ fill: "hsl(var(--pitch-hero) / 0.8)" }}
                tickMargin={8}
                axisLine={{ stroke: "hsl(0 0% 30% / 0.3)" }}
                tickLine={{ stroke: "hsl(0 0% 30% / 0.3)" }}
              />
              <YAxis
                tick={{ fill: "hsl(var(--pitch-hero) / 0.8)" }}
                axisLine={{ stroke: "hsl(0 0% 30% / 0.3)" }}
                tickLine={{ stroke: "hsl(0 0% 30% / 0.3)" }}
                width={40}
              />
              <Tooltip
                contentStyle={{
                  background: "hsl(var(--background))",
                  border: "1px solid hsl(var(--border))",
                  color: "hsl(var(--foreground))",
                  borderRadius: 12,
                }}
              />
              <Line type="monotone" dataKey="gold" stroke="hsl(var(--chart-gold))" strokeWidth={3} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="rose" stroke="hsl(var(--chart-rose))" strokeWidth={3} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="silver" stroke="hsl(var(--chart-silver))" strokeWidth={3} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Text + Pills */}
        <div>
          <header className="mb-6 md:mb-8">
            <h1
              id="traction-heading"
              className="text-pitch-hero text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider leading-tight"
            >
              Traction
            </h1>
          </header>
          <p className="text-pitch-subtitle text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-prose">
            This matrix provides a snapshot of various success metrics for our company, including
            revenue growth, customer satisfaction, market share, employee retention, innovation, and
            brand reputation.
          </p>

          <div className="space-y-4">
            <div className="rounded-full border-2 border-pitch-hero/80 px-6 md:px-8 py-4 text-center text-pitch-hero bg-pitch-bg-overlay/40">
              20% annual revenue growth
            </div>
            <div className="rounded-full px-6 md:px-8 py-4 text-center font-semibold bg-pitch-contact text-pitch-bg-overlay shadow-glow">
              90% maintain customer satisfaction ratings
            </div>
            <div className="rounded-full border-2 border-pitch-hero/80 px-6 md:px-8 py-4 text-center text-pitch-hero bg-pitch-bg-overlay/40">
              15% market share in key segments
            </div>
          </div>
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

export default memo(TractionSection);