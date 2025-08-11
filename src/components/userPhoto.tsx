"use client";
import { RootState } from "@/GlobalRedux/store";
import React from "react";
import { useSelector } from "react-redux";
function UserPhoto({ w, h }: { w: string; h: string }) {
  const user = useSelector((state: RootState) => state.user);
  return <img src={user.photo!} className={`rounded-full w-${w} h-${h}`} />;
}

export default UserPhoto;
