import React from "react";

interface Props {
  photo: string;
  username: string;
  title: string;
}
function UserAndSubscribe({ photo, username, title }: Props) {
  return (
    <div className="flex gap-4 mt-4">
      <img src={photo} alt="" className="h-24 w-24 object-cover rounded-full" />
      <div>
        <p className="text-2xl">{username}</p>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default UserAndSubscribe;
