import Dan from "../../assets/dan";
import Wila from "../../assets/wila";
import Rudi from "../../assets/rudi";

export default function Opening({ refHome }: { refHome: any }) {
  return (
    <section ref={refHome} className="w-full h-[110vh] ">
      <main className="relative w-full h-[100dvh] flex flex-col items-center justify-center gap-7 px-4">
        <p id="theWeddingOf" className="text-white text-lg">
          The Wedding Of
        </p>
        <div className="relative flex flex-col items-center gap-2 max-w-[280px] w-full">
          <div id="rudi" className="w-full">
            <Wila className="wila-animate" color="white" /> {/* Meneruskan color="white" */}
          </div>
          <div id="dan" className="w-full flex justify-center">
            <Dan className="dan-animate" color="white" /> {/* Meneruskan color="white" */}
          </div>
          <div id="wila" className="w-full">
            <Rudi className="rudi-animate" color="white" /> {/* Meneruskan color="white" */}
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 text-white mt-4">
          <p id="day">Minggu</p>
          <div id="dateParent" className="text-center border-r border-l border-gray-200/70 p-3 py-2">
            <h1 id="date" className="text-3xl">
              21
            </h1>
            <p id="year">2025</p>
          </div>
          <p id="month">September</p>
        </div>
      </main>
    </section>
  );
}
