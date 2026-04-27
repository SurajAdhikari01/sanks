function VinylArtwork() {
  return (
    <div className="relative grid place-items-center">
      <div className="absolute h-[360px] w-[360px] rounded-full bg-red-600/20 blur-[100px] sm:h-[500px] sm:w-[500px] sm:blur-[120px]" />
      <div
        className="relative aspect-square w-64 animate-spin rounded-full border border-white/20 shadow-[0_30px_90px_rgba(0,0,0,0.7),inset_0_2px_6px_rgba(255,255,255,0.15)] sm:w-96 lg:w-[30rem]"
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

export default VinylArtwork;
