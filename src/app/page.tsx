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
    <div className="py-4 px-4">
      {videos.map((video: videoData, index: number) => (
        <div key={index}>
          <div className="flex flex-col w-md h-md">
            <video controls className=" rounded-lg     ">
              <source src={video.url} />
            </video>
            <div className="flex gap-4 mt-2">
              <div>
                <img
                  src={video.user.photo}
                  className="rounded-full h-12 w-12 object-cover"
                />
              </div>
              <div>
                <p className="text-lg text-neutral-200">{video.title}</p>
                <p className="  text-neutral-400 ">{video.user.username}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
