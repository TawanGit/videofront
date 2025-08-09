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
      {decodedUrl ? <Video src={decodedUrl} /> : <p>No video URL provided.</p>}
      <p>{username}</p>
      <p>{title}</p>
      <p>{photo}</p>
    </div>
  );
}
