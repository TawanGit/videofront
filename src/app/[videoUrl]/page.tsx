import Comments from "./components/Comments";
import UserAndSubscribe from "./components/UserAndSubscribe";
import Video from "./components/Video";

interface Props {
  searchParams: {
    url: string;
    username: string;
    title: string;
    photo: string;
  };
}

export default async function Page({ searchParams }: Props) {
  const { url, username, title, photo } = await searchParams;

  const decodedUrl = url ? decodeURIComponent(url) : null;

  return (
    <div className="text-white">
      <div className="block md:flex">
        <div className="md:w-3/4  ">
          {decodedUrl ? (
            <Video src={decodedUrl} />
          ) : (
            <p>No video URL provided.</p>
          )}
          <UserAndSubscribe photo={photo} username={username} title={title} />
        </div>

        <Comments />
      </div>
    </div>
  );
}
