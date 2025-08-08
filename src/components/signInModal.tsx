"use Client";

import { MouseEventHandler, useState } from "react";

type modal = {
  open: boolean;
  onClose: MouseEventHandler<HTMLButtonElement>;
};

export default function SignInModal({ open, onClose }: modal) {
  if (!open) return null;
  const [login, setLogin] = useState<{ username: string; password: string }>({
    username: "",
    password: "",
  });
  async function loginHandle() {
    const response = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        username: login.username,
        password: login.password,
      }),
    });
    const data = await response.json();
    console.log(data);
  }
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
          value={login.username}
          onChange={(event) =>
            setLogin((prev) => ({ ...prev, username: event.target.value }))
          }
          type="text"
          placeholder="Username"
          className="p-3 rounded bg-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          value={login.password}
          onChange={(event) =>
            setLogin((prev) => ({ ...prev, password: event.target.value }))
          }
          type="password"
          placeholder="Password"
          className="p-3 rounded bg-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={loginHandle}
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}
