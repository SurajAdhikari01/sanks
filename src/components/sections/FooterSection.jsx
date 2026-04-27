function FooterSection() {
  return (
    <footer className="border-t border-white/[0.06] py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p
            className="text-center text-xs font-bold uppercase tracking-[0.22em] text-rose-100/25 sm:text-left"
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
  );
}

export default FooterSection;
