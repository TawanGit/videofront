import Top from "./components/Top";

interface Props {
  params: { userId: string };
}

export default async function Page({ params }: Props) {
  const awaitedParams = await params;
  const { userId } = awaitedParams;
  const res = await fetch(`http://localhost:3001/users/subscribers/${userId}`, {
    method: "GET",
  });

  const subscribers = await res.json();

  return (
    <div>
      <Top subscribers={subscribers.length} />
    </div>
  );
}
