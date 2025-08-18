"use client";

export default function Uji({ className = "uji", color = "#986a52" }: { className?: string; color?: string }) {
  return (
    <div className={`${className} text-center flex justify-center items-center w-full`}>
      <h2
        className="text-5xl md:text-6xl lg:text-7xl leading-none"
        style={{
          fontFamily: "GreatVibes-Regular, cursive, serif", // fallback fonts
          color: color,
          fontWeight: "normal", // pastikan font weight konsisten
          letterSpacing: "0.02em", // sedikit spacing untuk readability
          textRendering: "optimizeLegibility", // optimize rendering
          WebkitFontSmoothing: "antialiased", // smooth font di webkit
          MozOsxFontSmoothing: "grayscale", // smooth font di firefox
        }}
      >
        Uji
      </h2>
    </div>
  );
}