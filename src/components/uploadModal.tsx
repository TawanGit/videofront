"use Client";

import { MouseEventHandler, useState } from "react";
import Logo from "./logo";
import { IoMdClose } from "react-icons/io";
import { FaCloudUploadAlt } from "react-icons/fa";

type modal = {
  open: boolean;
  onClose: MouseEventHandler<HTMLButtonElement>;
};

export default function UploadModal({ open, onClose }: modal) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="flex flex-col bg-neutral-900 rounded-2xl p-8 w-full max-w-xl space-y-4 pb-12 shadow-xl">
        <div className="flex items-center justify-between text-2xl border-b border-neutral-700">
          <p>Enviar vídeos</p>
          <button
            className="  text-white hover:brightness-80 font-bold"
            onClick={onClose}
          >
            <IoMdClose />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center mt-4 ">
          <FaCloudUploadAlt className="text-[200px] text-neutral-700" />
          <p>Arraste e solte o seu vídeo aqui</p>
          <button className="hover:bg-neutral-50 cursor-pointer bg-neutral-100 text-black rounded-2xl p-2 px-6 mt-4 font-bold text-sm">
            Selecionar Arquivo
          </button>
        </div>
      </div>
    </div>
  );
}
