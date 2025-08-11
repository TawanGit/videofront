"use client";

import Link from "next/link";

interface Props {
  video: {
    id: number;
    title: string;
    description: string;
    url: string;
  };
  user: {
    id: number;
    username: string;
    photo: string;
  };
}
export default function VideoPreview({ video, user }: Props) {
  const username = user.username;

  return (
    <Link
      href={`/${username}?url=${encodeURIComponent(
        video.url
      )}&username=${username}&title=${video.title}&photo=${
        user.photo
      }&videoid=${video.id}`}
    >
      <video
        preload="metadata"
        muted // 🔹 Required for autoplay on hover
        playsInline // 🔹 Prevents fullscreen on mobile
        className=" rounded-lg cursor-pointer"
        onMouseOver={(e) => e.currentTarget.play()}
        onMouseOut={(e) => {
          e.currentTarget.pause();
          e.currentTarget.currentTime = 0; // optional: reset to first frame
        }}
      >
        <source src={video.url} type="video/mp4" />
      </video>
    </Link>
  );
}
