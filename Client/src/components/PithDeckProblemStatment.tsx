import BackGround from "/Background/4.png";
import { useScrollToHash } from "@/hooks/useScrollToHash";

const PithDeckProblemStatment = () => {
  useScrollToHash()
  return (
    <div
    id="problem-statement"
      className="min-h-screen flex items-center justify-center p-6 md:p-8 relative overflow-hidden inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BackGround})` }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Left Content - Problem Statement */}
        <div className="space-y-8 relative">
          {/* 3D Iridescent Shape */}
          {/* <div className="absolute -left-32 top-0 w-80 h-80 opacity-80">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 rounded-full blur-sm opacity-60 animate-float" />
                <div className="absolute inset-4 bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-400 rounded-full blur-md opacity-70 animate-glow" />
                <div className="absolute inset-8 bg-gradient-to-bl from-green-400 via-blue-500 to-purple-500 rounded-full blur-lg opacity-50" 
                     style={{ 
                       background: 'conic-gradient(from 0deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff9ff3, #54a0ff, #5f27cd)',
                       borderRadius: '50%',
                       transform: 'rotate3d(1, 1, 0, 45deg)'
                     }} 
                />
              </div>
            </div> */}

          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-black text-pitch-hero mb-8 mt-48 ml-10 tracking-tight leading-tight">
              PROBLEM
              <br />
              STATEMENT
            </h1>
          </div>
        </div>
        <div className="relative flex gap-9">
          <div className="flex justify-between items-center flex-col border-[3px] rounded-full border-[#d9d7d7] p-2">
            <div className="w-8 h-8 bg-gradient-to-b from-[#ffdf87] to-[#b76b19] rounded-full z-10"></div>
            <div className="w-8 h-8 bg-gradient-to-b from-[#ffdf87] to-[#b76b19] rounded-full z-10 -translate-y-[4.8rem] "></div>
            <div className="w-8 h-8 bg-gradient-to-b from-[#ffdf87] to-[#b76b19] rounded-full z-10 -translate-y-[7.2rem] "></div>
          </div>
          <div className="flex justify-between items-stretch flex-col space-y-16">
            <div className="relative">
              <div className="flex-1 space-y-3">
                <h3 className="text-1xl md:text-2xl text-[#ffd900]">
                  Lack of Brand Differentiation
                </h3>
                <p className="text-pitch-subtitle text-lg leading-relaxed">
                  Startups often find it hard to make their brand unique in a <br />
                  crowded market. Without a clear way to stand out, they<br />
                  struggle to catch the eye of potential customers and lose out to<br />
                  bigger competitors.
                </p>
              </div>
            </div>

            {/* Problem 2 */}
            <div className="flex items-start space-x-6 relative">
              <div className="flex-1 space-y-3">
                <h3 className="text-1xl md:text-2xl text-[gold]">
                  Inconsistent Brand Messaging
                </h3>
                <p className="text-pitch-subtitle text-lg leading-relaxed">
                  Inconsistency in brand messaging across various marketing<br />
                  channels confuses potential customers and dilutes brand<br />
                  perception. Startups often face challenges in maintaining a<br />
                  cohesive message that effectively communicates their value<br />
                  proposition and resonates with their target audience.
                </p>
              </div>
            </div>

            {/* Problem 3 */}
            <div className="flex items-start space-x-6 relative">
              <div className="flex-1 space-y-3">
                <h3 className="text-1xl md:text-2xl text-[gold]">
                  Keeping Up with Trends
                </h3>
                <p className="text-pitch-subtitle text-lg leading-relaxed">
                  The market changes fast, and startups need to keep up. But<br />
                  without a big team or resources, it's tough to stay on top of<br />
                  the latest trends and adapt their marketing strategies<br />
                  accordingly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PithDeckProblemStatment;
