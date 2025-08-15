import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const sections = [
  { label: "Home", id: "hero" },
  { label: "Introduction", id: "intro-section" },
  { label: "Problem-Statement", id: "problem-statement" },
  { label: "Inovation", id: "inovation" },
  { label: "Service", id: "service" },
  { label: "Referal", id: "referal" },
  { label: "Market Size", id: "market" },
  { label: "Advantage", id: "advantage" },
  { label: "Transaction", id: "transaction" },
  { label: "Revenue", id: "revenue" },
  { label: "Accomplishment", id: "accomplishment" },
  { label: "Fund", id: "fund" },
];

const SiteHeader = () => {
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const { isAuthenticated, user } = useAuth();

  // detect active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const mid = window.scrollY + window.innerHeight / 2;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const { offsetTop, offsetHeight } = el;
        if (mid >= offsetTop && mid < offsetTop + offsetHeight) {
          setActiveSection(s.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // auto-scroll navbar when active section changes
  useEffect(() => {
    const btn = buttonRefs.current[activeSection];
    if (btn) {
      btn.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeSection]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.8);
    el.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2 h-14">
          {/* Brand */}
          <span
            id="hero"
            onClick={() => {
              navigate("/");
            }}
            className="hover:cursor-pointer text-lg font-bold tracking-tight text-foreground"
          >
            PitchDeck
          </span>

          {/* Left arrow */}
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          {/* Scrollable nav */}
          <div
            ref={scrollRef}
            className="flex flex-1 flex-nowrap overflow-x-auto no-scrollbar gap-2 px-2 w-[38rem] "
          >
            {sections.map((s) => (
              <Button
                key={s.id}
                ref={(el) => (buttonRefs.current[s.id] = el)}
                variant={activeSection === s.id ? "default" : "ghost"}
                size="sm"
                onClick={() => scrollToSection(s.id)}
                className="shrink-0 text-sm"
              >
                {s.label}
              </Button>
            ))}
          </div>

          {/* Right arrow */}
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Auth */}
          {isAuthenticated ? (
            <Button variant="outline" className="text-xl bg-inherit hover:cursor-auto">{user.email.slice(0,1).toUpperCase()} </Button>
          ) : (
            <div className="ml-2 flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/login")}
              >
                Log in
              </Button>
              <Button size="sm" onClick={() => navigate("/signup")}>
                Sign up
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default SiteHeader;
