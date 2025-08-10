import Video from "@/app/[videoUrl]/components/Video";
import Top from "./components/Top";
import VideoPreview from "@/components/videoPreview";
import VideosUser from "./components/VideosUser";

interface Props {
  params: Promise<{ userId: string }>;
}

export interface User {
  id: number;
  username: string;
  description: string;
  subscribers: Array<Object>;
  photo: string;
  videos: [
    { title: string; description: string; url: string; createdAt: string }
  ];
}
export default async function Page({ params }: Props) {
  const awaitedParams = await params;
  const { userId } = awaitedParams;
  const res = await fetch(`http://localhost:3001/users/${userId}`, {
    method: "GET",
  });

  const user: User = await res.json();

  return (
    <div>
      <Top user={user} />
      <p className="p-2 border-b mb-4 border-neutral-800">Meus Vídeos</p>
      <div className="flex gap-2 flex-wrap">
        {user.videos.map((video: any, index: number) => (
          <div key={index} className="">
            <div className="flex flex-col w-auto lg:w-sm min-h-1/5">
              <VideosUser url={video.url} />
              <p className="p-2">{video.title}</p>
              <p className="px-2 text-gray-300 text-sm">
                {new Date(video.createdAt).toLocaleDateString("pt-BR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  minute: "2-digit",
                  hour: "2-digit",
                })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
