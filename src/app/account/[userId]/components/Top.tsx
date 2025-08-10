"use client";
import { useState } from "react";
import { User } from "../page";

interface Props {
  user: User;
}

export default function Top({ user }: Props) {
  const [changeDescription, setChangeDescription] = useState(false);
  const [newDescription, setNewDescription] = useState(user.description);

  const updateDescription = async () => {
    await fetch(`http://localhost:3001/users/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: user.id,
        description: newDescription,
      }),
    });

    setChangeDescription(false);
    user.description = newDescription;
  };
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
          <p className="text-gray-200">
            {user.subscribers.length} inscritos . {user.videos.length}{" "}
            {user.videos.length > 1 ? "vídeos" : "video"}
          </p>
          {changeDescription ? (
            <div>
              <textarea
                className="text-gray-200 w-full"
                onChange={(e) => setNewDescription(e.target.value)}
                value={newDescription}
              />
              <div className="flex gap-4">
                <button
                  className="bg-green-400 rounded-2xl p-1 px-4"
                  onClick={updateDescription}
                >
                  Alterar
                </button>
                <button
                  className="bg-red-400 rounded-2xl p-1 px-4"
                  onClick={() => setChangeDescription(false)}
                >
                  Cancelar
                </button>
              </div>
            </div>
          ) : (
            <p
              className="text-gray-200"
              onClick={() => setChangeDescription(true)}
            >
              {user.description ? user.description : "Adicionar uma descrição"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
