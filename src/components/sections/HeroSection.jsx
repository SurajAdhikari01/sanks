import { FaAngleDown } from "react-icons/fa";
import heroImg from "../../assets/cover.png";
import VinylArtwork from "../ui/VinylArtwork";
import WaveformBars from "../ui/WaveformBars";

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-svh overflow-hidden"
      style={{
        background:
          "radial-gradient(90% 100% at 18% 18%, rgba(178,33,33,0.32) 0%, rgba(178,33,33,0.10) 35%, transparent 70%), linear-gradient(160deg,#2a0507 0%,#120203 60%,#0a0102 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.07)_0%,transparent_24%)]" />
        <img
          src={heroImg}
          alt=""
          aria-hidden="true"
          className="absolute right-0 top-0 h-full w-full object-cover object-[78%_center] opacity-35 lg:w-[54%] lg:object-[72%_center] lg:opacity-100"
          style={{ transform: "scaleX(-1)" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(10,2,3,0.88)_0%,rgba(10,2,3,0.56)_38%,rgba(10,2,3,0.18)_68%,rgba(10,2,3,0.08)_100%)] lg:hidden" />
        <div className="absolute inset-0 hidden bg-[linear-gradient(100deg,rgba(10,2,3,0.97)_0%,rgba(10,2,3,0.72)_34%,rgba(10,2,3,0.14)_68%,rgba(10,2,3,0.05)_100%)] lg:block" />
      </div>

      <div className="relative mx-auto grid min-h-svh max-w-7xl items-center gap-10 px-4 pb-10 pt-36 sm:px-8 sm:pt-40 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-16">
        <div className="relative z-10 flex flex-col justify-center gap-6">
          <div className="max-w-2xl">
            <div className="w-full overflow-visible sm:hidden">
              <svg
                viewBox="0 0 620 260"
                className="h-auto w-full max-w-full"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden="true"
              >
                <defs>
                  <path
                    id="hero-arc-top-mobile"
                    d="M 54 220 Q 310 52 566 220"
                  />
                </defs>

                <text
                  fill="rgba(255,241,241,0.96)"
                  fontSize="44"
                  fontWeight="900"
                  letterSpacing="2.2"
                >
                  <textPath
                    href="#hero-arc-top-mobile"
                    startOffset="50%"
                    textAnchor="middle"
                  >
                    Feel The <tspan fill="rgb(252 211 77)">Music</tspan>
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="hidden w-full overflow-visible sm:block">
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
          </div>

          <div className="relative z-10 -mt-6 sm:-mt-16 lg:-mt-20">
            <VinylArtwork />
          </div>

          <p className="text-sm leading-relaxed text-rose-100/58 sm:-mt-4 lg:-mt-16 pt-20">
            Award-winning producer and multi-genre artist. Crafting sounds that
            move between worlds from underground sessions to international
            stages.
          </p>

          <div className="flex flex-col items-start gap-3">
            <WaveformBars />
            <a
              href="#mypicks"
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

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-40"
        style={{
          background: "linear-gradient(to top, #0a0102, transparent)",
        }}
      />
    </section>
  );
}

export default HeroSection;
