import UserPhoto from "@/components/userPhoto";
import React from "react";

function CommentInput() {
  return (
    <div className="flex gap-2 mt-24 items-center">
      <UserPhoto w="8" h="8" />
      <input
        type="text"
        className="bg-neutral-800 text-md w-full rounded-full p-1"
        placeholder="O que foi"
      />
      <button>Go</button>
    </div>
  );
}

export default CommentInput;
