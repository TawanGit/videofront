"use client";
import { RootState } from "@/GlobalRedux/store";
import { useSelector } from "react-redux";

interface Props {
  subscribers: Array<number>;
}
export default function Top({ subscribers }: Props) {
  const user = useSelector((state: RootState) => state.user);
  return (
    <div className="px-12 py-12">
      <div className="flex items-center gap-4">
        <img
          src={`${user.photo}`}
          alt=""
          className="rounded-full w-32 h-32 object-cover"
        />
        <div className="flex flex-col">
          <p className="text-2xl text-white">{user.username}</p>
          <p className="text-gray-200">{subscribers} inscritos . 1 video</p>
          <p className="text-gray-200">Description</p>
        </div>
      </div>
    </div>
  );
}
