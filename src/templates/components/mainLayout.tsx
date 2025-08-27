import type React from "react";
export default function MainLayout({
  children,
  height = "min-h-screen",
  className = "",
  backgroundColor = "bg-white",
  flower = true,
}: {
  children?: React.ReactNode;
  className?: string;
  height?: string;
  backgroundColor?: string;
  flower?: boolean;
}) {
  return (
    <section className={`relative w-full ${height} flex flex-col justify-center items-center ${backgroundColor} p-32 px-10 ${className}`}>
      {flower && (
        <div className={`w-full h-full overflow-hidden absolute z-0`}>
          {/* Ornamen horizontal di bagian atas */}
          <img src="/images/bunga3.png" alt="" className="absolute top-4 left-1/2 transform -translate-x-1/2 w-full max-w-2xl h-16 object-contain z-0" />

          {/* Ornamen horizontal di bagian bawah */}
          <img src="/images/bunga3.png" alt="" className="absolute bottom-4 left-1/2 transform -translate-x-1/2 rotate-180 w-full max-w-2xl h-16 object-contain z-0" />

          {/* Background bercak tetap dipertahankan */}
          <img src="/images/bercak2.png" alt="" className="absolute -left-56 top-1/2 opacity-20" />
          <img src="/images/bercak2.png" alt="" className="absolute -right-48 top-[15%] opacity-20" />
        </div>
      )}
      <div className={`w-full h-full -top-10 overflow-hidden absolute z-0`}></div>
      {children}
    </section>
  );
}
