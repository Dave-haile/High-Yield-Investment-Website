import { useScrollToHash } from "@/hooks/useScrollToHash";
import BackGround from "/Background/3.png";
import BackGround2 from "/Album/yosemite_winter_photography-wallpaper-1440x900.jpg";
const PitchDeckIntroduction = () => {
  useScrollToHash()
  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 md:p-8 relative bg-cover bg-center overflow-hidden -z-20"
      style={{ backgroundImage: `url(${BackGround})` }}
      id="intro-section"
    >
      <div className="absolute inset-0 left-[55rem] -z-10">
        <img
          src={BackGround2}
          alt="Team working"
          className="w-[30rem] h-full object-cover grayscale"
        />
      </div>

      <div className="w-[58rem] pt-6 pb-4 ml-8 mx-auto border-4 border-solid border-white rounded-[1rem] border-gray-200/90 bg-gradient-to-r from-transparent via-black/90 to-black p-10 md:p-16 shadow-xl">
        <div className="relative z-10 ml-28 mt-6 mb-8 ">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-pitch-hero mb-16 tracking-wider">
            INTRODUCTION
          </h1>

          <div className="space-y-12 text-pitch-subtitle text-lg md:text-xl leading-relaxed bg-transparent">
            <p className="pl-6">
              We're your dedicated partners in propelling startups toward
              success. With <br />
              a blend of expertise and innovation, we offer comprehensive
              solutions <br />
              tailored to meet the specific needs of each venture we work
              with.
            </p>

            <p className="pl-[6rem]">
              From strategic guidance to brand development and digital <br />
              marketing, we're committed to empowering startups to thrive in{" "}
              <br />
              competitive markets. Our collaborative approach ensures that{" "}
              <br />
              we're not just service providers but invested advocates for your{" "}
              <br />
              growth. Let us be the catalyst for your startup's journey,
              guiding <br />
              you towards achieving your goals and beyond.
            </p>
          </div>
        </div>

        {/* <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img 
                src="/lovable-uploads/b7c41b18-cbcb-4160-ab1d-05b84830d74c.png"
                alt="Team collaboration"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-pitch-bg-overlay/20" />
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-hero rounded-full opacity-60 blur-xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-text rounded-full opacity-40 blur-2xl" />
          </div> */}
      </div>
    </div>
  );
};

export default PitchDeckIntroduction;
