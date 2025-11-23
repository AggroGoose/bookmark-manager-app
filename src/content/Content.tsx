import ContentGrid from "./ContentGrid";
import SortMenu from "./SortMenu";

export default function Content() {
  return (
    <div className="row-2 bg-neutral-100 w-full p-8 flex flex-col gap-5">
      <div className="flex justify-between">
        <p className="font-bold text-2xl">All Bookmarks</p>
        <SortMenu />
      </div>
      <ContentGrid />
    </div>
  );
}
