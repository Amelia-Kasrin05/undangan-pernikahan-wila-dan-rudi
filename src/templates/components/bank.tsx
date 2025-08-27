import { useState } from "react";
import toast from "react-hot-toast";

type BankProps = {
  rek: string;
  name: string;
};

export default function Bank({ rek, name }: BankProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(rek);
    setCopied(true);
    toast.success("Nomor rekening berhasil disalin!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="text-center w-full">
      <p className="font-bold text-2xl mb-1 text-gray-800">{rek}</p>
      <p className="text-gray-600 mb-4 text-sm">{name}</p>
      
      <button
        onClick={handleCopy}
        className="group relative px-8 py-4 text-white font-semibold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden active:scale-95 w-full"
        style={{
          background: "linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 25%, #434343 50%, #1a1a1a 75%, #2a2a2a 100%)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(68, 68, 68, 0.3)"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "linear-gradient(135deg, #D4AF37 0%, #FFD700 25%, #B8860B 50%, #FFD700 75%, #D4AF37 100%)";
          e.currentTarget.style.color = "#1a1a1a";
          e.currentTarget.style.boxShadow = "0 15px 40px rgba(212, 175, 55, 0.6), 0 0 30px rgba(255, 215, 0, 0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 25%, #434343 50%, #1a1a1a 75%, #2a2a2a 100%)";
          e.currentTarget.style.color = "#ffffff";
          e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(68, 68, 68, 0.3)";
        }}
      >
        {/* Shimmer effect - lebih terlihat pada background gelap */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        
        <div className="relative flex items-center justify-center gap-3">
          {copied ? (
            <>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="drop-shadow-sm transition-colors duration-300">
                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
              </svg>
              <span className="text-lg font-bold drop-shadow-sm transition-colors duration-300">Tersalin!</span>
            </>
          ) : (
            <>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="drop-shadow-sm transition-colors duration-300">
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
              </svg>
              <span className="text-lg font-bold drop-shadow-sm transition-colors duration-300">Salin No. Rekening</span>
            </>
          )}
        </div>
        
        {/* Glow effect yang berubah saat hover */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gray-600/20 to-gray-700/20 group-hover:from-yellow-400/20 group-hover:to-amber-400/20 blur-sm group-hover:blur-md transition-all duration-300" />
      </button>
    </div>
  );
}