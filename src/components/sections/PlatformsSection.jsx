import { platforms, PLAYLIST_WAVE } from "../../data/siteData";
import SectionHeading from "../ui/SectionHeading";

function PlatformsSection() {
  return (
    <section
      id="platforms"
      className="relative overflow-hidden bg-[#0D0102] py-20 scroll-mt-32 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/4 top-30 h-125 w-125 rounded-full bg-rose-900/14 blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <SectionHeading
          kicker="Platforms"
          title="Where the sound lives"
          description="Every release is distributed across major streaming, social, and discovery platforms connecting music to listeners everywhere."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {platforms.map((p) => (
            <article
              key={p.name}
              className="sanks-card group relative overflow-hidden rounded-3xl border border-white/8 bg-linear-to-br from-white/[0.07] to-white/2 shadow-[0_20px_50px_rgba(0,0,0,0.28)] backdrop-blur-md"
            >
              <div
                className="absolute bottom-0 left-0 top-0 w-1 rounded-l-3xl"
                style={{
                  background: `linear-gradient(to bottom, ${p.accent}, ${p.accent}55)`,
                }}
              />

              <div className="p-6 pl-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-bold text-rose-50">{p.name}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-rose-100/50">
                      {p.type}
                    </p>
                  </div>

                  <div
                    className="h-3 w-3 rounded-full"
                    style={{ background: p.accent }}
                  />
                </div>

                <div className="mt-6 flex items-end gap-0.5">
                  {PLAYLIST_WAVE.slice(0, 14).map((h, i) => (
                    <div
                      key={i}
                      className="w-0.75 rounded-full"
                      style={{
                        height: `${h}px`,
                        background: p.accent,
                        opacity: i < 10 ? 0.75 : 0.25,
                      }}
                    />
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-rose-100/60">
                    Distributed
                  </span>

                  <button
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/8 transition-all hover:scale-105 hover:bg-white/15"
                    style={{ borderColor: `${p.accent}55` }}
                    aria-label={`Play ${p.name}`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-3 w-3"
                      style={{ color: p.accent }}
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div
                className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle at 0% 50%, ${p.accent}22, transparent 60%)`,
                }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PlatformsSection;
