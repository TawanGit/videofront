import { User } from "@/app/account/[userId]/page";
import React from "react";
import CommentInput from "./CommentInput";

interface Props {
  videoId: string;
}

interface Comment {
  text: string;
  user: Partial<User>;
}

async function Comments({ videoId }: Props) {
  const res = await fetch(`http://localhost:3001/comments/${videoId}`, {
    method: "GET",
    cache: "no-store", // avoid stale data
  });

  const comments: Comment[] = await res.json();
  console.log(comments);
  return (
    <div className="md:w-1/4 border-l border-neutral-700 min-h-max ">
      <p className="text-center p-2 border-b border-neutral-700">Comentários</p>

      <div className="p-2 space-y-2">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div key={index} className="border-b border-neutral-700 pb-2">
              <div className="flex items-center gap-4">
                <img
                  src={comment.user.photo}
                  className="rounded-full w-8 h-8"
                />
                <p className="text-sm text-gray-300">{comment.text}</p>
              </div>
              <CommentInput />
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-sm">Sem comentários.</p>
        )}
      </div>
    </div>
  );
}

export default Comments;
