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
        className="mt-4 text-3xl font-black uppercase tracking-tight text-rose-50 sm:text-5xl"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h3>
      {description ? (
        <p className="mt-4 text-sm leading-relaxed text-rose-100/65 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeading;
