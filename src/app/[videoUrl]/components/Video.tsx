interface Props {
  src: string;
}
export default function Video({ src }: Props) {
  return (
    <video
      autoPlay
      controls
      className="rounded-lg cursor-pointer w-full max-w-screen-xl max-h-[80vh] object-contain"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
