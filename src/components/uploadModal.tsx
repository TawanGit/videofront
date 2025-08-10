"use client";

import { MouseEventHandler, useState } from "react";
import Logo from "./logo";
import { IoMdClose } from "react-icons/io";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "@/GlobalRedux/store";

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
          {/* <input
            type="file"
            accept="video/*"
            id="videoInput"
            style={{ display: "none" }}
            onChange={async (e) => {
              const file = e.target.files[0];
              if (file) {
                try {
                  const formData = new FormData();
                  formData.append("userId", user.id);
                  formData.append(
                    "title",
                    "Melhor Mousepad de Vidro Custo Beneficio - Singularity by Tekkusai"
                  );
                  formData.append("description", "testsdsad");
                  formData.append("video", file);

                  const response = await fetch("http://localhost:3001/videos", {
                    method: "POST",
                    body: formData, // don't set Content-Type! browser will do it automatically
                  });

                  if (!response.ok) {
                    throw new Error("Upload failed");
                  }

                  console.log("Upload successful!");
                } catch (error) {
                  console.error(error);
                }
              }
            }}
          /> */}
        </div>
      </div>
    </div>
  );
}
