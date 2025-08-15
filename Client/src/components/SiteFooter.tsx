import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";

const SiteFooter = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = (path: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(path);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-lg font-bold text-foreground">PitchDeck</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering businesses with compelling pitch presentations that drive growth and secure funding.
            </p>
            <div className="flex space-x-3">
              <Button 
                variant="outline" 
                size="icon" 
                className="hover-scale hover:border-primary hover:text-primary transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="hover-scale hover:border-primary hover:text-primary transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="hover-scale hover:border-primary hover:text-primary transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={16} />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/"
                onClick={scrollToTop("/")}
                className="story-link text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                to="/introduction"
                onClick={scrollToTop("/introduction")}
                className="story-link text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Introduction
              </Link>
              <Link
                to="/referral-program"
                onClick={scrollToTop("/referral-program")}
                className="story-link text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Referral Program
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Services
            </h4>
            <nav className="flex flex-col space-y-2">
              <a 
                href="#" 
                className="story-link text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Pitch Deck Design
              </a>
              <a 
                href="#" 
                className="story-link text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Market Analysis
              </a>
              <a 
                href="#" 
                className="story-link text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Financial Modeling
              </a>
              <a 
                href="#" 
                className="story-link text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Investor Relations
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <span>hello@pitchdeck.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone size={16} className="text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-sm text-muted-foreground">
              ? {currentYear} PitchDeck. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
            <span>Made with</span>
            <span className="text-red-500 animate-pulse">?</span>
            <span>for entrepreneurs</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;