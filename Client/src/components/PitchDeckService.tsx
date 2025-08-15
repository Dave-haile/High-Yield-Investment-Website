import BackGround from "/Background/6.png";

const PitchDeckService = () => {
  return (
    <div
      id="service"
      className="min-h-screen flex items-center justify-center p-6 md:p-8 relative overflow-hidden inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BackGround})` }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-pitch-hero mb-20 tracking-normal leading-tight">
            DISCOVER OUR SERVICES
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-[68rem] mx-auto">
          <div className="group">
            <div className="flex items-center justify-between border-[3px] border-white/85 rounded-full bg-black px-6 py-3 mb-4">
              <h3 className="text-2xl font-semibold text-white">
                BRAND BUILDING
              </h3>
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ffff5b] to-orange-500"></span>
            </div>
            <div className="bg-white backdrop-blur-sm rounded-2xl p-8 shadow-elegant">
              <p className="text-black text-xl font-semibold leading-relaxed">
                We create a strong brand identity, including <br /> logos and
                design elements, to help startups
                <br /> stand out and gain trust.
              </p>
            </div>
          </div>

          <div className="group">
            <div className="flex items-center justify-between border-[3px] border-[#e3c935] rounded-full bg-black px-6 py-3 mb-4">
              <h3 className="text-2xl font-semibold text-[#e3c935]">
                DIGITAL MARKETING
              </h3>
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#fff] to-stone-400"></span>
            </div>
            <div className="bg-[#e3c935] backdrop-blur-sm rounded-2xl p-8 shadow-elegant">
              <p className="text-black text-xl font-semibold leading-relaxed">
                We develop effective online marketing strategies using channels
                like social media, email, and ads to reach potential customers.
              </p>
            </div>
          </div>

          <div className="group">
            <div className="flex items-center justify-between border-[3px] border-white/85 rounded-full bg-black px-6 py-3 mb-4">
              <h3 className="text-2xl font-semibold text-white">
                MARKETING ANALYTICS
              </h3>
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ffff5b] to-orange-500"></span>
            </div>
            <div className="bg-white backdrop-blur-sm rounded-2xl p-8 shadow-elegant">
              <p className="text-black text-xl font-semibold leading-relaxed">
                We provide insights and reports on marketing performance to help
                startups make informed decisions.
              </p>
            </div>
          </div>

          <div className="group">
            <div className="flex items-center justify-between border-[3px] border-white/85 rounded-full bg-black px-6 py-3 mb-4">
              <h3 className="text-2xl font-semibold text-white">PR SUPPORT</h3>
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ffff5b] to-orange-500"></span>
            </div>
            <div className="bg-white backdrop-blur-sm rounded-2xl p-8 shadow-elegant">
              <p className="text-black text-xl font-semibold leading-relaxed">
                We help startups get media coverage and build relationships with
                relevant journalists and influencers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PitchDeckService;
