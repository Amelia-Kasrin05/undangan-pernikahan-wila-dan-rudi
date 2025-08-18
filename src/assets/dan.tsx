export default function Dan({ className = "dan", color = "#986a52" }: { className?: string; color?: string }) {
  return (
    <div className={`${className} text-center flex items-center justify-center w-full`}>
      <span
        className="text-4xl md:text-5xl lg:text-6xl leading-none"
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
        &
      </span>
    </div>
  );
}