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
          {/* Ornamen horizontal di bagian atas - memanjang penuh dari kiri ke kanan */}
          <img
            src="/images/bunga3.png"
            alt=""
            className="absolute top-0 left-0 w-full h-20 object-cover object-center z-0"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          {/* Ornamen horizontal di bagian bawah - memanjang penuh dari kiri ke kanan */}
          <img
            src="/images/bunga3.png"
            alt=""
            className="absolute bottom-0 left-0 rotate-180 w-full h-20 object-cover object-center z-0"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

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
