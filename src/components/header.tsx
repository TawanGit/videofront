"use client";
import { useState } from "react";
import SignInModal from "./signInModal";
import Logo from "./logo";

export default function Header() {
  const [openLogin, setOpenLogin] = useState(false);
  return (
    <div className=" text-white p-4 bg-neutral-900 flex justify-between px-8">
      <Logo />
      {localStorage.getItem("token") ? (
        <div className="flex  items-center gap-2">
          <p>{localStorage.getItem("username")}</p>{" "}
          <img
            src={`${
              localStorage.getItem("photo")
                ? localStorage.getItem("photo")
                : "https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg"
            }`}
            alt=""
            className="rounded-full w-12 h-12 object-cover"
          />
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <button onClick={() => setOpenLogin(true)}>Log In</button>
          <SignInModal open={openLogin} onClose={() => setOpenLogin(false)} />
          <button>Sign Up</button>
        </div>
      )}
    </div>
  );
}
