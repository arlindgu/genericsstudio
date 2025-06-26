export default function Tag({
  tag,
}: Readonly<{
  tag: string;
}>) {
  return (
    <span className="uppercase mr-2 inline-flex items-center bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-black">
      {tag}
    </span>
  );
}