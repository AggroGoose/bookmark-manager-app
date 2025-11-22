import IconSort from "../assets/SVG/IconSort";
import ContentGrid from "./ContentGrid";

export default function Content() {
  return (
    <div className="row-2 bg-neutral-100 w-full p-8 flex flex-col gap-5">
      <div className="flex justify-between">
        <p className="font-bold text-2xl">All Bookmarks</p>
        <button className="flex gap-1 items-center border border-neutral-400 px-3 py-2.5 rounded-lg">
          <IconSort className="h-5" />
          <p className="font-semibold">Sort by</p>
        </button>
      </div>
      <ContentGrid />
    </div>
  );
}
