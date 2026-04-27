import { WAVEFORM_BARS } from "../../data/siteData";

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

export default WaveformBars;
