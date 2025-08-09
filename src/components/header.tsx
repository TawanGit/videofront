"use client";
import { useState } from "react";
import SignInModal from "./signInModal";

export default function Header() {
  const [openLogin, setOpenLogin] = useState(false);
  return (
    <div className=" text-white p-4 bg-neutral-900 flex justify-between px-8">
      <p>Video Platform</p>
      <div className="flex items-center gap-4">
        <button onClick={() => setOpenLogin(true)}>Log In</button>
        <SignInModal open={openLogin} onClose={() => setOpenLogin(false)} />
        <button>Sign Up</button>
      </div>
    </div>
  );
}
