"use client";
import { RootState } from "@/GlobalRedux/store";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiHome } from "react-icons/ci";
import { GrConfigure } from "react-icons/gr";
import { useSelector } from "react-redux";

export default function SideBar() {
  const pathName = usePathname();
  const user = useSelector((state: RootState) => state.user);
  return (
    <nav className="hidden lg:flex flex-col gap-2 w-64 h-screen text-white bg-neutral-900 overflow-auto px-4 py-6">
      <div className="mb-4">
        <Link
          href={"/"}
          className={`flex  items-center gap-2 py-2 px-2 rounded-2xl  cursor-pointer hover:bg-neutral-700 ${
            pathName === "/" && "bg-neutral-800"
          }`}
        >
          <CiHome />
          Início
        </Link>
      </div>
      <Link
        href={`/account/${user.id}`}
        className={`flex  items-center gap-2 py-2 px-2 rounded-2xl     cursor-pointer hover:bg-neutral-700 ${
          pathName === "config" && "bg-neutral-800"
        }`}
      >
        <GrConfigure />
        Configurações
      </Link>
      {/* Add more nav items here */}
    </nav>
  );
}
