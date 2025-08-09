"use Client";

import { MouseEventHandler, useState } from "react";
import Logo from "./logo";

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  async function loginHandle() {
    setError("");
    setLoading(true);
    try {
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
      if (data.access_token) {
        localStorage.setItem("token", data.access_token);
        window.location.reload();
      } else {
        setError(data.message);
        setLoading(false);
      }
    } catch {
      setLoading(false);
    }
  }
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="flex flex-col bg-neutral-900 rounded-2xl p-8 w-full max-w-xl space-y-4 shadow-xl">
        <button
          className="self-end text-white hover:brightness-80 font-bold text-xl"
          onClick={onClose}
        >
          &times;
        </button>
        <Logo />
        <input
          value={login.username}
          onChange={(event) =>
            setLogin((prev) => ({ ...prev, username: event.target.value }))
          }
          type="text"
          placeholder="Username"
          className="p-2 rounded bg-neutral-900 border border-neutral-800 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          value={login.password}
          onChange={(event) =>
            setLogin((prev) => ({ ...prev, password: event.target.value }))
          }
          type="password"
          placeholder="Password"
          className="p-2 rounded bg-neutral-900 border border-neutral-800 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div> {error && error}</div>
        <button
          onClick={loginHandle}
          disabled={login.password.length === 0 || login.username.length === 0}
          className={` text-white py-2 rounded font-semibold   transition bg-yellow-700 hover:cursor-pointer hover:bg-yellow-400  ${
            login.password.length === 0 || login.username.length === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-yellow-800"
          }`}
        >
          {loading ? "carregando.." : "Entrar"}
        </button>
      </div>
    </div>
  );
}
