import { useAppSelector } from "../hooks";
import ContentGrid from "./ContentGrid";
import SortMenu from "./SortMenu";

export default function Content() {
  const isArchived = useAppSelector((state) => state.bookmarks.showArchived);

  return (
    <div className="row-2 bg-neutral-100 w-full p-8 flex flex-col gap-5">
      <div className="flex justify-between">
        {isArchived ? (
          <p className="font-bold text-2xl">Archived bookmarks</p>
        ) : (
          <p className="font-bold text-2xl">All bookmarks</p>
        )}
        <SortMenu />
      </div>
      <ContentGrid />
    </div>
  );
}
