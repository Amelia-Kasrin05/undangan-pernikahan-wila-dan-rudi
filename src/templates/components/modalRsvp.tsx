import { useRef, useState } from "react";
import Modal from "./modal";
import toast from "react-hot-toast";
import { addData } from "../../services/firebase/services";

export default function ModalRsvp({ setIsModalOpen, username }: { setIsModalOpen: Function; username: string }) {
  const [close, setClose] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  const handleButtonClick = () => {
    if (formRef?.current) {
      formRef?.current?.requestSubmit(); // Programmatically submit the form
    }
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef?.current) {
      return;
    }
    const formData = new FormData(formRef.current);
    const name = formData.get("name") as string;
    const telepon = formData.get("telepon") as string;
    const email = formData.get("email") as string;
    let presence = formData.get("presence") as string | boolean;
    const jumlah = formData.get("jumlah") as string;
    const keterangan = formData.get("keterangan") as string;

    const regex = /^-?\d+(\.\d+)?([eE][-+]?\d+)?$/;

    if (name === "" || telepon === "" || email === "" || presence === "" || jumlah === "") {
      toast.error("Data tidak boleh ada yang kosong");
      return;
    }

    if (username !== name) {
      toast.error("Username Tidak Sesuai");
      return;
    }

    if (!regex.test(jumlah) || !regex.test(telepon)) {
      toast.error("Masukkan Angka dengan Benar!");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      toast.error("Masukkan Email dengan Benar!");
      return;
    }

    try {
      console.log(presence);
      if (presence == "hadir") {
        presence = true;
      } else if (presence == "tidakHadir") {
        presence = false;
      }
      await addData("rsvp", {
        name,
        telepon,
        email,
        presence,
        jumlah,
        keterangan,
      });
    } catch (error) {
      console.log(error);
    } finally {
      toast.success("Terimakasih Telah Mengisi Form");
      setClose(true);
    }
  };

  const preventInvalidInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (["e", "E", "+", "-", "."].includes(e.key)) {
      e.preventDefault();
    }
  };

  const preventPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasteData = e.clipboardData.getData("Text");
    if (pasteData.includes("e") || pasteData.includes("E") || pasteData.includes("+") || pasteData.includes("-") || pasteData.includes(".")) {
      e.preventDefault();
    }
  };

  return (
    <Modal width="max-w-xl" onClose={() => setIsModalOpen(false)} closed={close}>
      <section className="flex flex-col gap-3 text-neutral-600">
        <h1 className="text-center font-bold text-xl">RSVP</h1>
        <p className="text-sm font-light text-gray-500">
          <span className="text-red-500">*</span> : Wajib Diisikan
        </p>
        <form ref={formRef} onSubmit={handleFormSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="font-medium">
              Nama Tamu <span className="text-red-500">*</span>
            </label>
            <input type="text" id="name" name="name" value={username} defaultValue={username} className="p-3 py-2 rounded-lg border outline-none bg-gray-200 w-full" placeholder="Nama tamu" required />
          </div>
          <section className="flex flex-row gap-3 sm:flex-col w-full">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="telepon" className="font-medium">
                No Telepon <span className="text-red-500">*</span>
              </label>
              <input type="number" name="telepon" id="telepon" className="p-3 py-2 rounded-lg border outline-none bg-gray-200 w-full" required placeholder="08123456789" onKeyDown={preventInvalidInput} onPaste={preventPaste} />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="email" className="font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <input type="text" id="email" name="email" className="p-3 py-2 rounded-lg border outline-none bg-gray-200 w-full" required placeholder="alexbusiness.code@gmail.com" />
            </div>
          </section>
          <section>
            <h1 className="mb-1 font-medium">
              Info Kehadiran <span className="text-red-500">*</span>
            </h1>
            <label htmlFor="hadir" className="cursor-pointer">
              <input type="radio" id="hadir" name="presence" className="mr-1" value="hadir" defaultChecked />
              Hadir
            </label>
            <label htmlFor="tidakHadir" className="cursor-pointer">
              <input type="radio" id="tidakHadir" name="presence" className="mr-1 ml-2 text-black" value="tidakHadir" />
              Tidak Hadir
            </label>
          </section>
          <div className="flex flex-col gap-1">
            <label htmlFor="jumlah" className="font-medium">
              Jumlah Kehadiran <span className="text-red-500">*</span>
            </label>
            <input type="number" id="jumlah" name="jumlah" className="p-3 py-2 rounded-lg border outline-none bg-gray-200 w-full" required onKeyDown={preventInvalidInput} onPaste={preventPaste} placeholder="1 - 99" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="keterangan" className="font-medium">
              Keterangan
            </label>
            <input type="text" id="keterangan" name="keterangan" className="p-3 py-2 rounded-lg border outline-none bg-gray-200 w-full" placeholder="(optional) tuliskan pesan kepada mempelai" />
          </div>
        </form>
        <div className="w-full flex gap-3 justify-center">
          <button
            onClick={() => handleButtonClick()}
            disabled={close}
            className="group relative px-8 py-3 text-white font-semibold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden active:scale-95"
            style={{
              background: "linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 25%, #434343 50%, #1a1a1a 75%, #2a2a2a 100%)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(68, 68, 68, 0.3)",
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
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

            <div className="relative flex items-center justify-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="drop-shadow-sm">
                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
              </svg>
              <span className="text-base font-bold drop-shadow-sm">Konfirm</span>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gray-600/20 to-gray-700/20 group-hover:from-yellow-400/20 group-hover:to-amber-400/20 blur-sm group-hover:blur-md transition-all duration-300" />
          </button>

          <button
            onClick={() => setClose(true)}
            disabled={close}
            className="group relative px-8 py-3 text-white font-semibold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden active:scale-95"
            style={{
              background: "linear-gradient(135deg, #4a4a4a 0%, #3a3a3a 25%, #5a5a5a 50%, #3a3a3a 75%, #4a4a4a 100%)",
              boxShadow: "0 8px 25px rgba(0, 0, 0, 0.4), 0 0 15px rgba(90, 90, 90, 0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, #8B4513 0%, #A0522D 25%, #654321 50%, #A0522D 75%, #8B4513 100%)";
              e.currentTarget.style.color = "#ffffff";
              e.currentTarget.style.boxShadow = "0 12px 35px rgba(139, 69, 19, 0.5), 0 0 25px rgba(160, 82, 45, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, #4a4a4a 0%, #3a3a3a 25%, #5a5a5a 50%, #3a3a3a 75%, #4a4a4a 100%)";
              e.currentTarget.style.color = "#ffffff";
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.4), 0 0 15px rgba(90, 90, 90, 0.2)";
            }}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

            <div className="relative flex items-center justify-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="drop-shadow-sm">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
              <span className="text-base font-bold drop-shadow-sm">Cancel</span>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gray-600/15 to-gray-700/15 group-hover:from-amber-800/20 group-hover:to-amber-900/20 blur-sm group-hover:blur-md transition-all duration-300" />
          </button>
        </div>
      </section>
    </Modal>
  );
}
