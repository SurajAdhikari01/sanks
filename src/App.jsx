import { useEffect, useRef, useState } from "react";
import heroImg from "./assets/cover.png";
import { FaAngleDown } from "react-icons/fa";
import { FaInstagram, FaFacebook, FaMusic } from "react-icons/fa";
import { HiOutlineLink } from "react-icons/hi";

const socials = [
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/sanket_ts/",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/sanks.ts",
  },
];

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "mypicks", label: "My Picks" },
  { id: "platforms", label: "Platforms" },
];

const quickStats = [
  { label: "Daily Listeners", value: "1.3M", sub: "across platforms" },
  { label: "Curated Playlists", value: "480+", sub: "and growing" },
  { label: "Live Sessions", value: "95", sub: "this year" },
];

const featuredArtists = [
  {
    name: "Luna K",
    genre: "Dream Pop",
    color: ["#7c3aed", "#818cf8"],
    listeners: "284K",
    tracks: 34,
  },
  {
    name: "Arco Flame",
    genre: "Afrobeats",
    color: ["#dc2626", "#f97316"],
    listeners: "512K",
    tracks: 61,
  },
  {
    name: "Nova Tide",
    genre: "Electronic",
    color: ["#0891b2", "#14b8a6"],
    listeners: "398K",
    tracks: 48,
  },
  {
    name: "Sia Ren",
    genre: "R&B Soul",
    color: ["#be185d", "#a855f7"],
    listeners: "156K",
    tracks: 27,
  },
];

const featuredPlaylists = [
  { name: "Midnight Vinyl", tracks: 24, duration: "1h 42m", accent: "#f59e0b" },
  { name: "Crimson Bassline", tracks: 18, duration: "58m", accent: "#ef4444" },
  { name: "Studio Heat", tracks: 31, duration: "2h 10m", accent: "#8b5cf6" },
  {
    name: "Underground Pulse",
    tracks: 22,
    duration: "1h 28m",
    accent: "#10b981",
  },
];

const aboutHighlights = [
  {
    title: "Cinematic layout",
    text: "Large visual spans and deep contrast turn browsing into an experience.",
    num: "01",
  },
  {
    title: "Scroll as playback",
    text: "The navigation bar behaves like a music player and shows your position.",
    num: "02",
  },
  {
    title: "Premium motion",
    text: "Glass, glow, and subtle animation keep the interface feeling expensive.",
    num: "03",
  },
  {
    title: "Scalable sections",
    text: "The structure is ready for drops, artists, events, and future pages.",
    num: "04",
  },
];

const liveMoments = [
  { label: "Studio sessions", icon: "🎙" },
  { label: "Listening premieres", icon: "🎧" },
  { label: "Artist Q and A", icon: "💬" },
  { label: "Release night drops", icon: "🔥" },
];

const PLAYER_DURATION_SECONDS = 240;
const WAVEFORM_BARS = [
  0.4, 0.7, 1, 0.6, 0.9, 0.5, 0.8, 0.3, 0.7, 1, 0.6, 0.4, 0.9, 0.5,
];
const PLAYLIST_WAVE = [
  3, 6, 4, 8, 5, 3, 7, 4, 6, 3, 5, 8, 4, 6, 3, 7, 5, 4, 6, 3, 8, 5, 4, 6,
];
const ARTIST_WAVE = [3, 5, 8, 6, 4, 7, 5, 3, 6, 4];

function formatTime(totalSeconds) {
  const s = Math.max(0, Math.floor(totalSeconds));
  return `${Math.floor(s / 60)
    .toString()
    .padStart(2, "0")}:${(s % 60).toString().padStart(2, "0")}`;
}

function WaveformBars({ className = "", color = "rgba(251,113,133,0.6)" }) {
  return (
    <div className={`flex items-end gap-[3px] ${className}`}>
      {WAVEFORM_BARS.map((h, i) => (
        <div
          key={i}
          className="w-1 rounded-full"
          style={{
            height: `${h * 32}px`,
            background: color,
            animation: `sanks-wave ${0.8 + i * 0.07}s ease-in-out infinite alternate`,
            animationDelay: `${i * 0.05}s`,
          }}
        />
      ))}
    </div>
  );
}

function SectionHeading({ kicker, title, description }) {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-3">
        <div className="h-px w-8 bg-gradient-to-r from-rose-500 to-transparent" />
        <p
          className="text-xs font-bold uppercase tracking-[0.3em] text-rose-400"
          style={{ fontFamily: "var(--font-ui)" }}
        >
          {kicker}
        </p>
      </div>
      <h3
        className="mt-4 text-4xl font-black uppercase tracking-tight text-rose-50 sm:text-5xl"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h3>
      <p className="mt-4 text-base leading-relaxed text-rose-100/65">
        {description}
      </p>
    </div>
  );
}

function VinylArtwork() {
  return (
    <div className="relative grid place-items-center">
      <div className="absolute h-[500px] w-[500px] rounded-full bg-red-600/20 blur-[120px]" />
      <div
        className="relative aspect-square w-72 animate-spin rounded-full border border-white/20 shadow-[0_30px_90px_rgba(0,0,0,0.7),inset_0_2px_6px_rgba(255,255,255,0.15)] sm:w-96 lg:w-[30rem]"
        style={{
          animationDuration: "8.5s",
          background:
            "radial-gradient(circle at 50% 50%, #131313 0 14%, #0f0f0f 14% 100%)",
        }}
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "repeating-radial-gradient(circle at center, rgba(255,255,255,0.10) 0 1px, rgba(0,0,0,0) 1px 6px)",
          }}
        />
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,0.22)_0%,transparent_34%),radial-gradient(circle_at_65%_78%,rgba(255,255,255,0.06)_0%,transparent_40%)]" />
        <div className="absolute inset-[33%] rounded-full border border-white/20 bg-gradient-to-br from-red-500 to-red-800 shadow-[inset_0_0_24px_rgba(0,0,0,0.5)]">
          <svg
            viewBox="0 0 200 200"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <defs>
              <path
                id="vinyl-text-circle"
                d="M 100,100 m -68,0 a 68,68 0 1,1 136,0 a 68,68 0 1,1 -136,0"
              />
            </defs>
            <text
              fill="rgba(255,245,245,0.85)"
              fontSize="14"
              fontWeight="700"
              letterSpacing="3"
            >
              <textPath href="#vinyl-text-circle" startOffset="0%">
                SANKS • MUSIC SESSION • FEEL THE MUSIC •
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-[40%] rounded-full border border-white/35 bg-black/70 shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]" />
        </div>
      </div>
    </div>
  );
}

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const rafRef = useRef(null);

  const elapsedSeconds = (scrollProgress / 100) * PLAYER_DURATION_SECONDS;

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
    const onScroll = () => {
      if (rafRef.current) return;
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
      className="min-h-screen text-rose-50"
      style={{
        background:
          "radial-gradient(80% 55% at 18% 24%, rgba(178,33,33,0.26) 0%, transparent 62%), linear-gradient(160deg,#2a0507 0%,#120203 60%,#0a0102 100%)",
      }}
    >
      {/* ═══════════════════ HEADER / NAV ═══════════════════ */}
      <header className="fixed top-0 left-0 right-0  z-50 border-b border-white/[0.06] bg-black/40 backdrop-blur-2xl">
        <div className="mx-auto px-4 py-3 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <a
              href="#home"
              className="group flex shrink-0 items-center gap-2.5"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-rose-500 to-red-700 shadow-[0_0_18px_rgba(239,68,68,0.45)] transition-shadow group-hover:shadow-[0_0_28px_rgba(239,68,68,0.65)]">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 text-white"
                  aria-hidden="true"
                >
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                </svg>
              </div>
              <span
                className="text-base font-black uppercase tracking-[0.22em]"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                Sanks
              </span>
            </a>

            {/* Nav + scrubber */}
            <div className="mx-2 w-full max-w-4xl flex-1">
              <nav className="flex items-center justify-between gap-4 sm:gap-6">
                {sections.map((section) => {
                  const isActive = activeSection === section.id;
                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="relative text-[18px] font-semibold uppercase tracking-[0.18em] transition-colors duration-200 sm:text-[11px]"
                      style={{
                        fontFamily: "var(--font-ui)",
                        color: isActive ? "#fff" : "rgba(255,228,230,0.45)",
                      }}
                    >
                      {section.label}
                      {isActive && (
                        <span className="absolute  left-0 right-0 h-px" />
                      )}
                    </a>
                  );
                })}
              </nav>

              {/* Progress scrubber */}
              <div className="relative mt-4">
                <div className="h-px w-full rounded-full bg-white/[0.08]" />
                <div
                  className="absolute inset-y-0 left-0 h-px rounded-full"
                  style={{
                    width: `${scrollProgress}%`,
                    background:
                      "linear-gradient(90deg,#be123c,#f43f5e,#fda4af)",
                    boxShadow: "0 0 10px rgba(244,114,182,0.55)",
                    transition: "width 0.1s linear",
                  }}
                />
                <span
                  className="pointer-events-none absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/80 bg-rose-400"
                  style={{
                    left: `${scrollProgress}%`,
                    boxShadow: "0 0 14px rgba(244,114,182,0.9)",
                  }}
                />
              </div>
            </div>

            {/* Timer */}
            <div className="w-36 shrink-0 text-right">
              <p
                className="text-[14px] uppercase tracking-[0.2em] text-rose-200/45"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                Web Mix
              </p>
              <p className="text-xs font-medium tabular-nums text-rose-100/75">
                {formatTime(elapsedSeconds)} /{" "}
                {formatTime(PLAYER_DURATION_SECONDS)}
              </p>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full pb-16">
        {/* ═══════════════════ HERO ═══════════════════ */}
        <section
          id="home"
          className="relative min-h-svh overflow-hidden"
          style={{
            background:
              "radial-gradient(90% 100% at 18% 18%, rgba(178,33,33,0.32) 0%, rgba(178,33,33,0.10) 35%, transparent 70%), linear-gradient(160deg,#2a0507 0%,#120203 60%,#0a0102 100%)",
          }}
        >
          {/* Bg layers */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.07)_0%,transparent_24%)]" />
            <img
              src={heroImg}
              alt=""
              aria-hidden="true"
              className="absolute right-0 top-0 hidden h-full w-[54%] object-cover object-[72%_center] lg:block"
              style={{ transform: "scaleX(-1)" }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(10,2,3,0.97)_0%,rgba(10,2,3,0.72)_34%,rgba(10,2,3,0.14)_68%,rgba(10,2,3,0.05)_100%)]" />
          </div>

          <div className="relative mx-auto grid min-h-svh max-w-7xl items-center gap-12 px-4 py-12 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-16">
            <div className="relative z-10 flex flex-col justify-center gap-6 pt-12 lg:pt-0">
              {/* Arc title */}
              <div className="max-w-2xl">
                <div className="hidden sm:block w-full overflow-visible">
                  <svg
                    viewBox="0 0 900 320"
                    className="h-auto w-full max-w-full"
                    preserveAspectRatio="xMidYMid meet"
                    aria-hidden="true"
                  >
                    <defs>
                      <path id="hero-arc-top" d="M 90 270 Q 450 42 810 270" />
                    </defs>

                    <text
                      fill="rgba(255,241,241,0.96)"
                      fontSize="60"
                      fontWeight="900"
                      letterSpacing="3"
                    >
                      <textPath
                        href="#hero-arc-top"
                        startOffset="50%"
                        textAnchor="middle"
                      >
                        Feel The <tspan fill="rgb(252 211 77)">Music</tspan>
                      </textPath>
                    </text>
                  </svg>
                </div>
                <p
                  className="text-4xl font-black uppercase leading-[0.92] sm:hidden"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Feel The <span className="text-amber-300">Music</span>
                </p>
              </div>
              <div className="relative z-10 -mt-10 sm:-mt-16 lg:-mt-20">
                <VinylArtwork />
              </div>

              {/* Description */}
              <p className=" pt-10 text-sm leading-relaxed text-rose-100/58 sm:-mt-4 lg:-mt-6">
                Award-winning producer and multi-genre artist. Crafting sounds
                that move between worlds — from underground sessions to
                international stages.
              </p>

              <div className="flex flex-col items-start gap-3">
                <WaveformBars />

                {/* Scroll hint (not a button anymore) */}
                <a
                  href="#artists"
                  className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-rose-100/60 transition-colors hover:text-rose-100"
                  style={{ fontFamily: "var(--font-ui)" }}
                >
                  Scroll
                  <span className="animate-arrow-bounce transition-transform group-hover:translate-y-1">
                    <FaAngleDown size={16} />
                  </span>
                </a>
              </div>
            </div>

            <div className="relative z-10 hidden lg:block" aria-hidden="true" />
          </div>

          {/* Bottom fade */}
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-40"
            style={{
              background: "linear-gradient(to top, #0a0102, transparent)",
            }}
          />
        </section>

        {/* ═══════════════════ ABOUT ═══════════════════ */}
        <section
          id="about"
          className="scroll-mt-36 h-[100vh] relative overflow-hidden bg-linear-to-b from-[#0B0102] to-[#DB5900]/10 py-24 sm:py-32"
        >
          <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
            <SectionHeading
              kicker="About"
              title="A journey through engineering, security, and sound"
              description=""
            />

            <div className="mt-14 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
              {/* Main card */}
              <div className="sanks-card rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.3)] backdrop-blur-md">
                <div
                  className="mb-4 text-7xl font-black leading-none text-rose-500/15 select-none"
                  style={{ fontFamily: "var(--font-display)" }}
                  aria-hidden="true"
                >
                  "
                </div>

                <p
                  className="text-xl leading-relaxed text-rose-100/80"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  I started my journey in aerospace engineering, later
                  transitioning into software development and security systems.
                  Over time, my focus shifted toward creativity and sound.
                  Today, I explore music production by recreating and remixing
                  tracks with my own artistic twist—blending technical precision
                  with emotion and rhythm.
                </p>
              </div>

              <div className="grid gap-4">
                {/* Identity Card */}
                <div className="sanks-card rounded-2xl border border-white/[0.07] bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-6 backdrop-blur-md">
                  <p className="text-xs uppercase tracking-[0.25em] text-rose-100/40">
                    Digital Identity
                  </p>

                  <div className="mt-3 flex items-center gap-3 text-rose-100">
                    <FaMusic className="text-rose-400" />
                    <span className="text-sm font-medium">
                      Producer • Remixer • Creator
                    </span>
                  </div>

                  <p className="mt-3 text-xs leading-5 text-rose-100/50">
                    Building sound from engineering precision to emotional audio
                    storytelling.
                  </p>
                </div>

                {/* Socials */}
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.name}
                      href={s.link}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between rounded-2xl border border-white/[0.07] bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-5 backdrop-blur-md transition-all hover:scale-[1.02] hover:border-rose-500/30"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="text-lg text-rose-300 group-hover:text-rose-200 transition" />
                        <span className="text-sm text-rose-100/80">
                          {s.name}
                        </span>
                      </div>

                      <HiOutlineLink className="text-rose-100/30 group-hover:text-rose-200 transition" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section
          id="mypicks"
          className="scroll-mt-36 relative py-24 sm:py-32 bg-linear-to-b from-[#DB5900]/10 to-[#0C0102]"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-0 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-rose-900/14 blur-[130px]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 bg-[#DB]">
            <SectionHeading
              kicker="My Picks"
              title="Selected sounds and inspirations"
              description="A personal collection of artists, producers, and sonic styles that shape my creative direction and music identity."
            />

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {featuredArtists.map((artist) => (
                <article
                  key={artist.name}
                  className="sanks-card group relative overflow-hidden rounded-3xl border border-white/[0.09] bg-gradient-to-br from-white/[0.08] to-white/[0.02] shadow-[0_20px_50px_rgba(0,0,0,0.32)] backdrop-blur-md"
                >
                  {/* Gradient album artwork */}
                  <div
                    className="relative flex h-36 w-full items-end overflow-hidden rounded-t-3xl p-4"
                    style={{
                      background: `linear-gradient(135deg, ${artist.color[0]}, ${artist.color[1]})`,
                    }}
                  >
                    {/* Shine */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.22)_0%,transparent_45%)]" />
                    {/* Mini waveform on artwork */}
                    <div className="relative flex items-end gap-[2px]">
                      {ARTIST_WAVE.map((h, j) => (
                        <div
                          key={j}
                          className="w-[3px] rounded-full bg-white/50"
                          style={{
                            height: `${h}px`,
                            animation: `sanks-wave ${0.6 + j * 0.09}s ease-in-out infinite alternate`,
                            animationDelay: `${j * 0.06}s`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="text-lg font-bold text-rose-50">
                      {artist.name}
                    </p>
                    <p
                      className="mt-0.5 text-xs uppercase tracking-[0.18em] text-rose-100/55"
                      style={{ fontFamily: "var(--font-ui)" }}
                    >
                      {artist.genre}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-white/[0.07] pt-4">
                      <div>
                        <p
                          className="text-sm font-black text-white"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {artist.listeners}
                        </p>
                        <p
                          className="text-[10px] uppercase tracking-[0.14em] text-rose-100/45"
                          style={{ fontFamily: "var(--font-ui)" }}
                        >
                          listeners
                        </p>
                      </div>
                      <div className="text-right">
                        <p
                          className="text-sm font-black text-white"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {artist.tracks}
                        </p>
                        <p
                          className="text-[10px] uppercase tracking-[0.14em] text-rose-100/45"
                          style={{ fontFamily: "var(--font-ui)" }}
                        >
                          tracks
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Hover ambient glow */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${artist.color[0]}28, transparent 60%)`,
                    }}
                  />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ PLAYLISTS ═══════════════════ */}
        <section
          id="playlists"
          className="scroll-mt-36 relative border-t border-white/[0.06] py-24 sm:py-32"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute right-1/4 top-0 h-[500px] w-[500px] rounded-full bg-rose-900/14 blur-[110px]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
            <SectionHeading
              kicker="Playlists"
              title="Curated listening lanes"
              description="Cards arranged like a collection of records ready to play — each one a different mood, each one meticulously ordered."
            />

            <div className="mt-14 grid gap-5 sm:grid-cols-2">
              {featuredPlaylists.map((list) => (
                <article
                  key={list.name}
                  className="sanks-card group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.07] to-white/[0.02] shadow-[0_20px_50px_rgba(0,0,0,0.28)] backdrop-blur-md"
                >
                  {/* Left accent bar */}
                  <div
                    className="absolute bottom-0 left-0 top-0 w-1 rounded-l-3xl"
                    style={{
                      background: `linear-gradient(to bottom, ${list.accent}, ${list.accent}44)`,
                    }}
                  />

                  <div className="p-6 pl-8">
                    {/* Dot row */}
                    <div className="mb-5 flex gap-1.5">
                      {[1, 0.6, 0.35, 0.8].map((op, i) => (
                        <div
                          key={i}
                          className="h-2.5 w-2.5 rounded-full"
                          style={{ background: list.accent, opacity: op }}
                        />
                      ))}
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xl font-bold text-rose-50">
                          {list.name}
                        </p>
                        <p className="mt-1 text-xs text-rose-100/50">
                          Updated this week
                        </p>
                      </div>
                      <div className="shrink-0 text-right">
                        <p
                          className="text-3xl font-black text-white"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {list.tracks}
                        </p>
                        <p
                          className="text-[10px] uppercase tracking-[0.15em] text-rose-100/45"
                          style={{ fontFamily: "var(--font-ui)" }}
                        >
                          tracks
                        </p>
                        <p className="mt-0.5 text-xs text-rose-100/35">
                          {list.duration}
                        </p>
                      </div>
                    </div>

                    {/* Playlist waveform / playback bar */}
                    <div className="mt-5 flex items-end gap-[2px]">
                      {PLAYLIST_WAVE.map((h, i) => (
                        <div
                          key={i}
                          className="w-[3px] rounded-full transition-opacity duration-300"
                          style={{
                            height: `${h}px`,
                            background: list.accent,
                            opacity: i < 14 ? 0.75 : 0.22,
                          }}
                        />
                      ))}
                    </div>

                    {/* "Mix" tag */}
                    <div className="mt-5 flex items-center justify-between">
                      <span
                        className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-rose-100/60"
                        style={{ fontFamily: "var(--font-ui)" }}
                      >
                        Mix
                      </span>
                      {/* Play circle */}
                      <button
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/[0.08] transition-all hover:bg-white/15 hover:scale-105"
                        aria-label={`Play ${list.name}`}
                        style={{ borderColor: `${list.accent}50` }}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="ml-0.5 h-3 w-3"
                          style={{ color: list.accent }}
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Hover glow */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle at 0% 50%, ${list.accent}18, transparent 55%)`,
                    }}
                  />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ LIVE ═══════════════════ */}
        <section
          id="live"
          className="scroll-mt-36 relative border-t border-white/[0.06] py-24 sm:py-32"
        >
          <div className="pointer-events-none absolute inset-0">
            {/* Horizontal accent glow at top */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose-500/45 to-transparent" />
            <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-rose-900/16 blur-[130px]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
            <SectionHeading
              kicker="Live"
              title="Studio moments and release nights"
              description="Broadcasts feel like events instead of blocks of text, with strong contrast and a richer visual rhythm."
            />

            <div className="mt-14 overflow-hidden rounded-[2rem] border border-white/[0.09] bg-gradient-to-br from-white/[0.08] to-white/[0.02] shadow-[0_32px_80px_rgba(0,0,0,0.38)] backdrop-blur-md">
              {/* Top status bar */}
              <div className="flex items-center justify-between border-b border-white/[0.07] px-6 py-4 sm:px-8">
                <div className="flex items-center gap-3">
                  <span
                    className="h-2.5 w-2.5 rounded-full bg-rose-500"
                    style={{
                      animation: "sanks-pulse-dot 1.4s ease-in-out infinite",
                      boxShadow: "0 0 8px rgba(244,63,94,0.8)",
                    }}
                  />
                  <span
                    className="text-xs font-bold uppercase tracking-[0.24em] text-rose-300"
                    style={{ fontFamily: "var(--font-ui)" }}
                  >
                    Live Now
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                  <span
                    className="ml-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-rose-100/55"
                    style={{ fontFamily: "var(--font-ui)" }}
                  >
                    Studio Stream
                  </span>
                </div>
              </div>

              <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:p-12">
                {/* Left content */}
                <div>
                  <h4
                    className="text-3xl font-black uppercase leading-tight text-rose-50 sm:text-4xl lg:text-5xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Designed for live performances, premieres, and fan sessions.
                  </h4>
                  <p className="mt-5 max-w-lg leading-relaxed text-rose-100/65">
                    Broadcasts feel like events instead of blocks of text, with
                    strong contrast and a richer visual rhythm.
                  </p>
                  <div className="mt-8">
                    <WaveformBars color="rgba(244,63,94,0.65)" />
                  </div>
                </div>

                {/* Live moment cards */}
                <div className="grid gap-3 sm:grid-cols-2">
                  {liveMoments.map((moment) => (
                    <div
                      key={moment.label}
                      className="sanks-card flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-black/25 px-4 py-4"
                    >
                      <span className="text-xl">{moment.icon}</span>
                      <span
                        className="text-sm font-semibold uppercase tracking-[0.14em] text-rose-100/75"
                        style={{ fontFamily: "var(--font-ui)" }}
                      >
                        {moment.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════ STATS ═══════════════════ */}
        <section className="relative border-t border-white/[0.06] py-24 sm:py-28">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose-500/28 to-transparent" />

          <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
            <div className="grid divide-white/[0.07] sm:grid-cols-3 sm:divide-x">
              {quickStats.map((item) => (
                <div
                  key={item.label}
                  className="sanks-card px-8 py-8 text-center first:pl-0 last:pr-0"
                >
                  <p
                    className="text-5xl font-black text-white sm:text-6xl lg:text-7xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.value}
                  </p>
                  <p
                    className="mt-3 text-xs font-bold uppercase tracking-[0.25em] text-rose-400"
                    style={{ fontFamily: "var(--font-ui)" }}
                  >
                    {item.label}
                  </p>
                  <p className="mt-1 text-[11px] text-rose-100/35">
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ FOOTER ═══════════════════ */}
        <footer className="border-t border-white/[0.06] py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p
                className="text-xs font-bold uppercase tracking-[0.22em] text-rose-100/25"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                © 2025 Sanks · All rights reserved
              </p>
              <div className="flex gap-6">
                {["Instagram", "SoundCloud", "Spotify"].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-xs font-semibold uppercase tracking-[0.16em] text-rose-100/35 transition-colors hover:text-rose-100/75"
                    style={{ fontFamily: "var(--font-ui)" }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
