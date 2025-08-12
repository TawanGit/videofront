"use client";
import UserPhoto from "@/components/userPhoto";
import { RootState } from "@/GlobalRedux/store";
import React, { useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import { useSelector } from "react-redux";

function CommentInput({ videoId }: { videoId: string }) {
  const [comment, setComment] = useState("");
  const user = useSelector((state: RootState) => state.user);

  async function handleComment() {
    if (!comment.trim()) return; // avoid empty comments

    await fetch("http://localhost:3001/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: comment,
        videoId: videoId,
        userId: user.id,
      }),
    });

    setComment("");
  }

  return (
    <div className="flex gap-2 mt-24 items-center">
      <UserPhoto w="8" h="8" />
      <input
        type="text"
        className="bg-neutral-800 text-md w-full rounded-full p-1"
        placeholder="O que foi"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <IoSendSharp
        className="text-2xl hover:brightness-200 cursor-pointer"
        onClick={handleComment}
      />
    </div>
  );
}

export default CommentInput;
