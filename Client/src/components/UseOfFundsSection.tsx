import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import BackGround from "/Background/13.png";

const data = [
  { name: "A. Product Development", value: 40 },
  { name: "B. Marketing and Sales", value: 30 },
  { name: "C. Infrastructure and Operations", value: 20 },
  { name: "D. Expansion and Growth Initiatives", value: 10 },
];

const COLORS = ["#fde047", "#f87171", "#fb923c", "#facc15"];

export default function UseOfFunds() {
  return (
    <div
    id="fund"
      className="min-h-screen bg-black text-white flex items-center justify-center p-6 inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BackGround})` }}
    >
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* LEFT: Pie chart with Recharts */}
        <div className="flex justify-center">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) =>
                  `${name.split(".")[0]} ${(percent * 100).toFixed(0)}%`
                }
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* RIGHT: Text */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase">
            Use of Funds
          </h2>
          <p className="text-gray-200 leading-relaxed text-[1.1rem] ">
            Our plan for using funds generated from investors is
            straightforward. We'll allocate 40% towards further developing our
            products, ensuring they stay competitive and meet customer needs.
            30% will go into marketing and sales efforts to attract new
            customers and drive revenue growth. 20% will be invested in
            infrastructure and operations to support our expanding business and
            improve efficiency. Finally, 10% will be set aside for strategic
            initiatives like market expansion and partnerships to fuel long-term
            growth.
          </p>

          <div className="space-y-3">
            <div className="border border-white rounded-full px-4 py-4">
              A. 40% Product Development
            </div>
            <div className="border border-white rounded-full px-4 py-4">
              B. 30% Marketing and Sales
            </div>
            <div className="border border-white rounded-full px-4 py-4">
              C. 20% Infrastructure and Operations
            </div>
            <div className="border border-white rounded-full px-4 py-4">
              D. 10% Expansion and Growth Initiatives
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
