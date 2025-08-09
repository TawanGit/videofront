"use client";
import { useEffect, useState } from "react";
import SignInModal from "./signInModal";
import Logo from "./logo";
import { RootState } from "@/GlobalRedux/store";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/GlobalRedux/Features/user/userSlice";
import { FaPlus } from "react-icons/fa";

export default function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const [openLogin, setOpenLogin] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUsername = localStorage.getItem("username");
    const storedPhoto = localStorage.getItem("photo");
    const storedEmail = localStorage.getItem("email");

    dispatch(
      setUser({
        token: storedToken,
        email: storedEmail,
        username: storedUsername,
        photo: storedPhoto,
      })
    );
    setMounted(true);
  }, [dispatch]);

  if (!mounted) {
    return null; // avoid hydration errors until client data is loaded
  }

  return (
    <div className="text-white p-4 bg-neutral-900 flex justify-between px-8">
      <Logo />
      {user.token ? (
        <div className="flex items-center gap-4">
          <div
            className="bg-neutral-800 p-2 px-6 rounded-2xl flex items-center gap-4 cursor-pointer hover:bg-neutral-700"
            onClick={}
          >
            <p>Enviar vídeos</p>
            <FaPlus />
          </div>
          <img
            src={
              user.photo
                ? user.photo
                : "https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg"
            }
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
