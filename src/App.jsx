import { useEffect, useRef, useState } from "react";
import Header from "./components/layout/Header";
import AboutSection from "./components/sections/AboutSection";
import FooterSection from "./components/sections/FooterSection";
import HeroSection from "./components/sections/HeroSection";
import MyPicksSection from "./components/sections/MyPicksSection";
import PlatformsSection from "./components/sections/PlatformsSection";
import StatsSection from "./components/sections/StatsSection";
import { sections } from "./data/siteData";

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const rafRef = useRef(null);

  // Inject fonts + keyframes once
  useEffect(() => {
    const style = document.createElement("style");
    style.id = "sanks-styles";
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Syne:wght@400;500;600;700;800&display=swap');

      :root {
        --font-display: 'Cormorant Garamond', Georgia, 'Times New Roman', serif;
        --font-ui: 'Syne', system-ui, sans-serif;
      }

      body { font-family: var(--font-ui); }

      @keyframes sanks-wave {
        from { transform: scaleY(0.35); }
        to   { transform: scaleY(1); }
      }
      @keyframes sanks-pulse-dot {
        0%,100% { opacity:1; transform:scale(1); }
        50%     { opacity:0.4; transform:scale(0.75); }
      }

      .sanks-card {
        transition: transform 0.32s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.32s ease;
      }
      .sanks-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 32px 72px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.10);
      }
    `;
    document.head.appendChild(style);
    return () => document.getElementById("sanks-styles")?.remove();
  }, []);

  useEffect(() => {
    const updateScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(
        scrollable > 0
          ? Math.max(0, Math.min(100, (window.scrollY / scrollable) * 100))
          : 0,
      );
    };

    // FIX: cancel-and-reschedule instead of skip — every scroll event lands
    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        updateScroll();
        rafRef.current = null;
      });
    };

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && setActiveSection(e.target.id),
        ),
      { rootMargin: "-42% 0px -42% 0px", threshold: 0 },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateScroll);
    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  return (
    <div
      className="min-h-screen w-full overflow-x-clip text-rose-50"
      style={{
        background:
          "radial-gradient(80% 55% at 18% 24%, rgba(178,33,33,0.26) 0%, transparent 62%), linear-gradient(160deg,#2a0507 0%,#120203 60%,#0a0102 100%)",
      }}
    >
      <Header activeSection={activeSection} scrollProgress={scrollProgress} />
      <main className="w-full pb-16">
        <HeroSection />
        <AboutSection />
        <MyPicksSection />
        <PlatformsSection />
        <StatsSection />
        <FooterSection />
      </main>
    </div>
  );
}

export default App;
