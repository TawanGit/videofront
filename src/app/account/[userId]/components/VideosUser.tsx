"use client";
import React from "react";

interface Props {
  url: string;
}
function VideosUser({ url }: Props) {
  return (
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
      <source src={url} type="video/mp4" />
    </video>
  );
}

export default VideosUser;
