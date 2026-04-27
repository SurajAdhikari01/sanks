import { FaMusic } from "react-icons/fa";
import { HiOutlineLink } from "react-icons/hi";
import { socials } from "../../data/siteData";
import SectionHeading from "../ui/SectionHeading";

function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-linear-to-b from-[#0B0102] to-[#DB5900]/10 py-20 scroll-mt-32 sm:py-28"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <SectionHeading
          kicker="About"
          title="A journey through engineering, security, and sound"
          description=""
        />

        <div className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="sanks-card rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.3)] backdrop-blur-md sm:p-8">
            <div
              className="mb-4 select-none text-7xl font-black leading-none text-rose-500/15"
              style={{ fontFamily: "var(--font-display)" }}
              aria-hidden="true"
            >
              "
            </div>

            <p
              className="text-lg leading-relaxed text-rose-100/80 sm:text-xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              I started my journey in aerospace engineering, later transitioning
              into software development and security systems. Over time, my
              focus shifted toward creativity and sound. Today, I explore music
              production by recreating and remixing tracks with my own artistic
              twist blending technical precision with emotion and rhythm.
            </p>
          </div>

          <div className="grid gap-4">
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
                    <Icon className="text-lg text-rose-300 transition group-hover:text-rose-200" />
                    <span className="text-sm text-rose-100/80">{s.name}</span>
                  </div>

                  <HiOutlineLink className="text-rose-100/30 transition group-hover:text-rose-200" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
