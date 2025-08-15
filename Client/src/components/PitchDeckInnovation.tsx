import { Megaphone, Star, TrendingUp } from 'lucide-react'
import BackGround from '/Background/5.png'
import { useScrollToHash } from '@/hooks/useScrollToHash'

const PitchDeckInnovation = () => {
  useScrollToHash()
  return (
    <div id='inovation' className="min-h-screen flex items-center justify-center p-6 md:p-8 relative overflow-hidden inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${BackGround})`}}>
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="mb-20 ml-28">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pitch-hero mb-8 tracking-tight leading-tight">
              OUR INNOVATIVE
              <br />
              SOLUTIONS
            </h1>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12">
            {/* Solution 1 - Find Unique Selling Point */}
            <div className="space-y-6">
              {/* Icon with Golden Accent */}
              <div className="relative mx-auto ml-6 w-24 h-24 mb-8">
                <div className="absolute inset-0 bg-accent rounded-full shadow-glow" />
                <div className="relative w-full h-full bg-pitch-bg-overlay rounded-full flex items-center justify-center border-2 border-accent">
                  <Star className="w-12 h-12 text-pitch-hero" fill="currentColor" />
                </div>
              </div>
              
              <h3 className="text-2xl md:text-2xl font-bold text-pitch-hero mb-4">
                Find Unique Selling Point
              </h3>
              
              <p className="text-pitch-subtitle font-[400] text-lg leading-relaxed">
                Help startups figure out what makes <br /> them special and build their brand <br />
                around it. This involves learning about <br /> their competitors and target audience, <br />
                then creating a clear message that sets <br /> them apart.
              </p>
            </div>

            {/* Solution 2 - Brand Messaging Guidelines */}
            <div className="space-y-6 group">
              {/* Icon with Golden Accent */}
              <div className="relative mx-auto w-24 h-24 mb-8 ml-6">
                <div className="absolute inset-0 bg-accent rounded-full shadow-glow" />
                <div className="relative w-full h-full bg-pitch-bg-overlay rounded-full flex items-center justify-center border-2 border-accent">
                  <Megaphone className="w-12 h-12 text-pitch-hero" />
                </div>
              </div>
              
              <h3 className="text-2xl md:text-2xl font-bold text-pitch-hero mb-4">
                Brand Messaging Guidelines
              </h3>
              
              <p className="text-pitch-subtitle font-[400] text-lg leading-relaxed">
                Make sure all of the startup's marketing <br /> materials send the same message. 
                This <br /> means having clear guidelines for how <br /> they talk about themselves and 
                making <br /> sure everyone sticks to them.
              </p>
            </div>

            {/* Solution 3 - Agile Marketing Approach */}
            <div className="space-y-6 group">
              {/* Icon with Golden Accent */}
              <div className="relative mx-auto w-24 h-24 mb-8 ml-6">
                <div className="absolute inset-0 bg-accent rounded-full shadow-glow" />
                <div className="relative w-full h-full bg-pitch-bg-overlay rounded-full flex items-center justify-center border-2 border-accent">
                  <TrendingUp className="w-12 h-12 text-pitch-hero" />
                </div>
              </div>
              
              <h3 className="text-2xl md:text-2xl font-bold text-pitch-hero mb-4">
                Agile Marketing Approach
              </h3>
              
              <p className="text-pitch-subtitle font-[400] text-lg leading-relaxed">
                Help startups adapt quickly to changes in the market. This means keeping an 
                eye on what's happening, analyzing data, and being willing to try new things 
                to keep their marketing strategy fresh and effective.
               </p>
             </div>
           </div>
         </div>
       </div>
  )
}

export default PitchDeckInnovation
