import { ArrowRight } from "lucide-react";
import BackGround from "/Background/12.png";

const MarketSizeSection = () => {
  // center / radii / offsets — tweak these to match your layout precisely
  const cx = 300;
  const cy = 300;
  const r1 = 60; // inner
  const r2 = 120;
  const r3 = 180;
  const r4 = 300; // outer
  return (
    <section
    id="market"
      className="min-h-screen flex items-center justify-center p-6 md:p-8 relative overflow-hidden inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BackGround})` }}
    >
      <div className="absolute -left-24 -bottom-24 w-72 h-72 rounded-full bg-gradient-hero opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-gradient-text opacity-30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-8" style={{ fontFamily: "Poppins" }}>
          <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold font-[popins] text-pitch-hero tracking-tight leading-4">
            SIZE OF
            <br />
            MARKET
          </h1>

          <p className="text-pitch-subtitle text-lg md:text-xl leading-relaxed max-w-xl">
            Understanding the market size is important for us. In the US, there
            are about 32 million small businesses. We're aiming at industries
            like technology, e-commerce, and professional services, which are
            about 30% of all small businesses. That means we're looking at
            around 9.6 million potential customers. Our goal is to get about 5%
            of them, which would be roughly 480,000 businesses. This helps us
            know who to target and plan our growth strategy.
          </p>

          {/* Navigation Arrow */}
          <div className="pt-4">
            <div className="w-16 h-16 border-2 border-pitch-hero rounded-full flex items-center justify-center hover:bg-pitch-hero/10 transition-smooth cursor-pointer group">
              <ArrowRight className="w-8 h-8 text-pitch-hero group-hover:translate-x-1 transition-smooth" />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center p-4 text-white w-full">
      <svg
        width="600"
        height="600"
        viewBox="0 0 600 600"
        className="max-w-full h-auto"
        color=""
      >
        <defs>
          <path id="path4" d="M 300 300 m 240,0 a 240,240 0 1,1 -480,0 a 240,240 0 1,1 480,0" />
          <path id="path4" d="M 400,200 A 200,200 0 1,0 400,600 A 200 A 200,200" />
          <path id="path4" d="M 380,160 A 200,200 0 1,0 400,600 A 200,200 0 1,0 400,200"/>
          <path id="path3" d="M 280 280 m -180,0 a 180,180 0 1,1 360,0 a 180,180 0 1,1 -360,0" />
          <path id="path2" d="M 260 260 m -120,0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0" />
          <path id="path1" d="M 240 240 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0" />
          
        </defs>
        <defs>
          <path
            id="path4"
            d={`M ${cx} ${cy} m ${r4},0 a ${r4},${r4} 0 1,0 ${2 * r4},0 a ${r4},${r4} 0 1,0 ${2 * r4},0`}
          />
          <path
            id="path3"
            d={`M 240 255 m -240,0 a 240,240 0 1,0 480,0 a 240,240 0 1,0 -480,0`}
          />
          <path
            id="path2"
            d={`M ${cx - 40} ${cy - 40} m -${r2},0 a ${r2},${r2} 0 1,0 ${2 * r2},0 a ${r2},${r2} 0 1,0 -${2 * r2},0`}
          />
          <path
            id="path1"
            d={`M ${cx - 60} ${cy - 60} m -${r1},0 a ${r1},${r1} 0 1,0 ${2 * r1},0 a ${r1},${r1} 0 1,0 -${2 * r1},0`}
          />
        </defs>
         <defs>
      <path id="path4" d="M 540,300 A 240,240 0 1,1 60,300 A 240,240 0 1,1 540,300" />
      <path id="path3" d="M 460,300 A 180,180 0 1,1 100,300 A 180,180 0 1,1 460,300" />
      <path id="path2" d="M 380,300 A 120,120 0 1,1 140,300 A 120,120 0 1,1 380,300" />
      <path id="path1" d="M 320,300 A 60,60 0 1,1 260,300 A 60,60 0 1,1 320,300" />
        <path id="path1" d="M 00,160 A 160,160 0 1,0 00,40 A 160,160 0 1,0 00,160" fill="none" stroke="white"/>
  <path id="path2" d="M 400,250 A 150,150 0 1,0 400,550 A 150,150 0 1,0 400,250" fill="none" stroke="white"/>
  <path id="path3" d="M 400,300 A 100,100 0 1,0 400,500 A 100,100 0 1,0 400,300" fill="none" stroke="white"/>
  <path id="path4" d="M 400,350 A 50,50 0 1,0 400,450 A 50,50 0 1,0 400,350" fill="none" stroke="white"/>
    </defs>

        <circle cx="300" cy="300" r="300" className="fill-black stroke-white stroke-[4]" />
        <circle cx="260" cy="255" r="240" className="fill-black stroke-white stroke-[4]" />
        <circle cx="230" cy="200" r="180" className="fill-black stroke-white stroke-[4]" />

        <g>
          <text className="fill-white text-[1.3rem] font-normal">
          <textPath href="#path4" startOffset="50%">
            Total Addressable Market: 32 M
          </textPath>
        </text>
        </g>
        
        <text className="fill-white text-[1.3rem] font-normal">
          <textPath href="#path3" startOffset="60%">
            Serviceable Addressable Market: 9.6 M
          </textPath>
        </text>
        <text className="fill-white text-[1.3rem] font-normal">
          <textPath href="#path1" startOffset="55%">
            Serviceable Obtainable Market: 480 K
          </textPath>
        </text>
      </svg>
    </div>

        {/* <div className="w-full flex justify-center items-center p-6 bg-black">
      <svg viewBox="0 0 600 600" className="max-w-full h-auto">
        <defs>
          <path
            id="path4"
            d={`M ${cx} ${cy} m ${r4},0 a ${r4},${r4} 0 1,0 ${2 * r4},0 a ${r4},${r4} 0 1,0 ${2 * r4},0`}
          />
          <path
            id="path3"
            d={`M ${cx - 20} ${cy - 20} m -${r3},0 a ${r3},${r3} 0 1,0 ${2 * r3},0 a ${r3},${r3} 0 1,0 -${2 * r3},0`}
          />
          <path
            id="path2"
            d={`M ${cx - 40} ${cy - 40} m -${r2},0 a ${r2},${r2} 0 1,0 ${2 * r2},0 a ${r2},${r2} 0 1,0 -${2 * r2},0`}
          />
          <path
            id="path1"
            d={`M ${cx - 60} ${cy - 60} m -${r1},0 a ${r1},${r1} 0 1,0 ${2 * r1},0 a ${r1},${r1} 0 1,0 -${2 * r1},0`}
          />
        </defs>

        <circle cx={cx} cy={cy} r={r4} className="fill-none stroke-white stroke-[2]" />
        <circle cx={cx - 20} cy={cy - 20} r={r3} className="fill-none stroke-white stroke-[2]" />
        <circle cx={cx - 40} cy={cy - 40} r={r2} className="fill-none stroke-white stroke-[2]" />
        <circle cx={cx - 60} cy={cy - 60} r={r1} className="fill-none stroke-white stroke-[2]" />

        <text fill="#f7f7f7" style={{ fontFamily: 'Montserrat, "Open Sans", sans-serif', fontSize: 18 }}>
          <textPath {...({ href: '#path4', startOffset: '68%', side: 'right', textAnchor: 'middle' } as any)}>
            Total Addressable Market: 32 M
          </textPath>
        </text>

        <text fill="#f7f7f7" style={{ fontFamily: 'Montserrat, "Open Sans", sans-serif', fontSize: 18 }}>
          <textPath {...({ href: '#path3', startOffset: '62%', side: 'right', textAnchor: 'middle' } as any)}>
            Serviceable Addressable Market: 9.6 M
          </textPath>
        </text>

        <text fill="#f7f7f7" style={{ fontFamily: 'Montserrat, "Open Sans", sans-serif', fontSize: 18 }}>
          <textPath {...({ href: '#path2', startOffset: '56%', side: 'right', textAnchor: 'middle' } as any)}>
            Serviceable Obtainable Market: 480 K
          </textPath>
        </text>

        <text fill="#f7f7f7" style={{ fontFamily: 'Montserrat, "Open Sans", sans-serif', fontSize: 16 ,}} className=" rotate-180">
          <textPath {...({ href: '#path1', startOffset: '50%', side: 'right', textAnchor: 'middle' } as any)}>
            Target Market: 5%
          </textPath>
        </text>
      </svg>
    </div> */}

        {/* <svg
          width="800"
          height="800"
          viewBox="0 0 800 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="100%" height="100%" fill="black" />

          <path
            id="circle1"
            d="M 400,200 A 200,200 0 1,0 400,600 A 200,200 0 1,0 400,200"
            fill="none"
            stroke="white"
          />
          <path
            id="circle2"
            d="M 400,250 A 150,150 0 1,0 400,550 A 150,150 0 1,0 400,250"
            fill="none"
            stroke="white"
          />
          <path
            id="circle3"
            d="M 400,300 A 100,100 0 1,0 400,500 A 100,100 0 1,0 400,300"
            fill="none"
            stroke="white"
          />
          <path
            id="circle4"
            d="M 400,350 A 50,50 0 1,0 400,450 A 50,50 0 1,0 400,350"
            fill="none"
            stroke="white"
          />

          <text>
            <textPath
              href="#circle1"
              startOffset="40%"
              className="font-[20px] fill-white "
            >
              Total Addressable Market: 32 M
            </textPath>
          </text>

          <text>
            <textPath
              href="#circle2"
              startOffset="38%"
              className="font-[20px] fill-white "
            >
              Serviceable Addressable Market: 9.6 M
            </textPath>
          </text>

          <text>
            <textPath
              href="#circle3"
              startOffset="34%"
              className="font-[20px] fill-white "
            >
              Serviceable Obtainable Market: 480 K
            </textPath>
          </text>

          <text>
            <textPath
              href="#circle4"
              startOffset="34%"
              className="font-[20px] fill-white "
            >
              Inner Label
            </textPath>
          </text>
        </svg> */}
      </div>
    </section>
  );
};

export default MarketSizeSection;
