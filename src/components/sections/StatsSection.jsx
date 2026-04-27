import { quickStats } from "../../data/siteData";

function StatsSection() {
  return (
    <section className="relative border-t border-white/[0.06] py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose-500/28 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="grid gap-4 divide-white/[0.07] sm:grid-cols-3 sm:gap-0 sm:divide-x">
          {quickStats.map((item) => (
            <div
              key={item.label}
              className="sanks-card rounded-2xl border border-white/[0.05] px-6 py-8 text-center sm:rounded-none sm:border-0 sm:px-8"
            >
              <p
                className="text-4xl font-black text-white sm:text-6xl lg:text-7xl"
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
              <p className="mt-1 text-[11px] text-rose-100/35">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
