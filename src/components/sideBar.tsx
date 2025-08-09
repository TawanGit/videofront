"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CiHome } from "react-icons/ci";
import { GrConfigure } from "react-icons/gr";

export default function SideBar() {
  const pathName = usePathname();

  return (
    <nav className="hidden lg:flex flex-col gap-2 fixed top-14 left-0 h-[calc(100vh-56px)] w-64 text-white bg-neutral-900 overflow-auto px-4 py-6">
      <div className="mb-4">
        <p
          className={`flex  items-center gap-2 py-2 px-2 rounded-2xl  cursor-pointer hover:bg-neutral-700 ${
            pathName === "/" && "bg-neutral-800"
          }`}
        >
          <CiHome />
          Início
        </p>
      </div>
      <p
        className={`flex  items-center gap-2 py-2 px-2 rounded-2xl     cursor-pointer hover:bg-neutral-700 ${
          pathName === "config" && "bg-neutral-800"
        }`}
      >
        <GrConfigure />
        Configurações
      </p>
      {/* Add more nav items here */}
    </nav>
  );
}
