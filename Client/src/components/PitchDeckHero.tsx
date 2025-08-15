import { Globe, Mail, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import flowingBackground from "/Background/1.png";
import { useAuth } from "@/context/AuthContext";

const PitchDeckHero = () => {

  const { isAuthenticated, user } = useAuth()

  return (
    <div id="hero" className="max-h-screen mt-16 relative overflow-hidden flex flex-col items-start justify-center bg-background inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${flowingBackground})`,
    }}>
      <nav id="hero" className="relative z-10 flex items-center justify-between p-6 md:p-8">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-hero rounded-full flex items-center justify-center shadow-glow">
          </div>

        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 min-h-[80vh] w-[100vw]">
        <div className="max-w-6xl mx-auto space-y-8 md:space-y-12">
          {/* Main Heading */}
          <h1 className="text-8xl md:text-8xl lg:text-9xl font-bold text-pitch-hero leading-none tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            STARTUP
            <br />
            PITCH DECK
          </h1>

          {/* Subtitle */}
          <div className="flex items-center gap-6">
          <p className="text-xl md:text-2xl lg:text-3xl text-pitch-subtitle font-light tracking-wide" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Presented by Slim inc industries.
          </p>
          { isAuthenticated &&
            <Link
              to="/dashboard"
              className="inline-flex items-center space-x-3 bg-white/10 hover:bg-white/20 border border-white/20 px-8 py-4 rounded-full transition-smooth group"
            >
              <span className="text-pitch-hero font-medium">Go to Dashboard</span>
              <ArrowRight className="w-5 h-5 text-pitch-hero group-hover:translate-x-1 transition-[.5s]" />
            </Link>
          }</div>

        </div>
      </div>

      {/* Footer Contact Information */}
      <div className="absolute bottom-4 left-0 right-0 z-10 p-6 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-pitch-contact" style={{ fontFamily: 'Poppins, sans-serif' }}>

          {/* Website */}
          <div className="flex items-center space-x-3 group cursor-pointer transition-smooth hover:scale-[1.02]">
            <div className="w-10 h-10 bg-pitch-contact/10 rounded-full flex items-center justify-center group-hover:bg-pitch-contact/20 transition-smooth">
              <Globe className="w-5 h-5" />
            </div>
            <span className="text-[1.5rem] text-white font-medium group-hover:text-pitch-hero transition-smooth">
              www.reallygreatsite.com
            </span>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-3 group cursor-pointer transition-smooth hover:scale-[1.02]">
            <div className="w-10 h-10 bg-pitch-contact/10 rounded-full flex items-center justify-center group-hover:bg-pitch-contact/20 transition-smooth">
              <Mail className="w-5 h-5" />
            </div>
            <span className="text-[1.5rem] text-white font-medium group-hover:text-pitch-hero transition-smooth">
              hello@reallygreatsite.com
            </span>
          </div>

          {/* Address */}
          <div className="flex items-center space-x-3 group cursor-pointer transition-smooth hover:scale-[1.02]">
            <div className="w-10 h-10 bg-pitch-contact/10 rounded-full flex items-center justify-center group-hover:bg-pitch-contact/20 transition-smooth">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="text-[1.5rem] text-white font-medium group-hover:text-pitch-hero transition-smooth">
              123 Anywhere Street, Any City
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PitchDeckHero;