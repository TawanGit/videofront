"use client";

import { MouseEventHandler, useState } from "react";

type modal = {
  open: boolean;
  onClose: MouseEventHandler<HTMLButtonElement>;
};

export default function SignInModal({ open, onClose }: modal) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="flex flex-col bg-slate-950 rounded-2xl p-8 w-full max-w-xl space-y-4 shadow-xl">
        <button
          className="self-end text-white hover:text-red-400 font-bold text-xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-white text-2xl font-semibold text-center">
          Login in Video Platform
        </h2>
        <input
          type="text"
          placeholder="Username"
          className="p-3 rounded bg-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 rounded bg-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Login
        </button>
      </div>
    </div>
  );
}
