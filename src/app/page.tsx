import VideoPreview from "@/components/videoPreview";
import Image from "next/image";

interface videoData {
  id: number;
  title: string;
  description: string;
  url: string;
  user: {
    id: number;
    username: string;
    photo: string;
  };
}
export default async function Home() {
  const res = await fetch("http://localhost:3001/videos", {
    method: "GET",
  });

  const videos = await res.json();

  return (
    <div className="py-4 px-4 flex gap-4 flex-wrap">
      {videos.map((video: videoData, index: number) => (
        <div key={index} className="flex">
          <div className="flex flex-col  w-auto lg:w-md min-h-1/5">
            <VideoPreview video={video} user={video.user} />
            <div className="flex gap-4 mt-2 w-full h-20">
              <div className="mt-2 px-1">
                <img
                  src={video.user.photo}
                  className="rounded-full h-12 w-12 object-cover flex-shrink-0"
                />
              </div>
              <div className="max-w-[calc(100%-64px)]">
                <p className="text-lg text-neutral-200  break-words max-w-xs">
                  {video.title}
                </p>
                <p className="  text-neutral-400 ">{video.user.username}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
