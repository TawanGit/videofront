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
          <p>Name</p>{" "}
          <img
            src="https://media1.thrillophilia.com/filestore/n2ib9inwzcilxpg3aumbigvq4jus_IMG_World_Dubai_Fun_38a0986c1a.jpg?w=400&dpr=2"
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
