import { ARTIST_WAVE, featuredArtists } from "../../data/siteData";
import SectionHeading from "../ui/SectionHeading";

function MyPicksSection() {
  return (
    <section
      id="mypicks"
      className="relative bg-linear-to-b from-[#DB5900]/10 to-[#0C0102] py-20 scroll-mt-32 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-rose-900/14 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <SectionHeading
          kicker="My Picks"
          title="Selected sounds and inspirations"
          description="A personal collection of artists, producers, and sonic styles that shape my creative direction and music identity."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {featuredArtists.map((artist) => (
            <article
              key={artist.name}
              className="sanks-card group relative overflow-hidden rounded-3xl border border-white/[0.09] bg-gradient-to-br from-white/[0.08] to-white/[0.02] shadow-[0_20px_50px_rgba(0,0,0,0.32)] backdrop-blur-md"
            >
              <div
                className="relative flex h-36 w-full items-end overflow-hidden rounded-t-3xl p-4"
                style={{
                  background: `linear-gradient(135deg, ${artist.color[0]}, ${artist.color[1]})`,
                }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.22)_0%,transparent_45%)]" />
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
                <p className="text-lg font-bold text-rose-50">{artist.name}</p>
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
  );
}

export default MyPicksSection;
