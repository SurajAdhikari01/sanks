import { sections, PLAYER_DURATION_SECONDS } from "../../data/siteData";
import { formatTime } from "../../utils/formatTime";

function Header({ activeSection, scrollProgress }) {
  const elapsedSeconds = (scrollProgress / 100) * PLAYER_DURATION_SECONDS;

  return (
    <header className="fixed left-0 right-0 top-0 z-50 overflow-x-clip border-b border-white/6 bg-black/40 backdrop-blur-2xl">
      <div className="mx-auto px-4 py-3 sm:px-8 lg:px-12">
        <div className="flex min-w-0 flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-4">
          <div className="flex items-center justify-between gap-4">
            <a
              href="#home"
              className="group flex shrink-0 items-center gap-2.5"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-rose-500 to-red-700 shadow-[0_0_18px_rgba(239,68,68,0.45)] transition-shadow group-hover:shadow-[0_0_28px_rgba(239,68,68,0.65)]">
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

            <div className="shrink-0 text-right md:hidden">
              <p
                className="text-[10px] uppercase tracking-[0.2em] text-rose-200/45"
                style={{ fontFamily: "var(--font-ui)" }}
              >
                Web Mix
              </p>
              <p className="text-[11px] font-medium tabular-nums text-rose-100/75">
                {formatTime(elapsedSeconds)} /{" "}
                {formatTime(PLAYER_DURATION_SECONDS)}
              </p>
            </div>
          </div>

          <div className="min-w-0 w-full md:mx-2 md:max-w-4xl md:flex-1">
            <nav className="scrollbar-none -mx-1 flex w-full max-w-full items-center gap-4 overflow-x-auto px-1 pb-1 sm:gap-6 md:justify-between">
              {sections.map((section) => {
                const isActive = activeSection === section.id;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="relative shrink-0 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors duration-200 sm:text-[11px] sm:tracking-[0.18em]"
                    style={{
                      fontFamily: "var(--font-ui)",
                      color: isActive ? "#fff" : "rgba(255,228,230,0.45)",
                    }}
                  >
                    {section.label}
                  </a>
                );
              })}
            </nav>

            <div className="relative mt-2 md:mt-3">
              <div className="h-px w-full rounded-full bg-white/8" />
              <div
                className="absolute inset-y-0 left-0 h-px rounded-full"
                style={{
                  width: `${scrollProgress}%`,
                  background: "linear-gradient(90deg,#be123c,#f43f5e,#fda4af)",
                  boxShadow: "0 0 10px rgba(244,114,182,0.55)",
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

          <div className="hidden w-36 shrink-0 text-right md:block">
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
  );
}

export default Header;
