import { ReactNode } from "react";

export default function Card({
  title,
  demo,
}: {
  title: string;
  demo: ReactNode;
}) {
  return (
    <div
      className={`p-2 relative col-span-1 h-96 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md`}
    >
      <div className="flex h-60 items-center justify-center">{demo}</div>
      <div className="mx-auto max-w-md text-center">
        <h2 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-xl font-bold text-transparent [text-wrap:balance] md:text-3xl md:font-normal">
          {title}
        </h2>
      </div>
    </div>
  );
}
