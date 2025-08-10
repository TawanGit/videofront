import Top from "./components/Top";

interface Props {
  params: { userId: string };
}

export interface User {
  id: number;
  username: string;
  description: string;
  subscribers: Array<Object>;
  photo: string;
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
    </div>
  );
}
