import { useAppSelector } from "../hooks";
import BookmarkCard from "./BookmarkCard";

export default function ContentGrid({ isLight }: { isLight: boolean }) {
  const bookmarkItems = useAppSelector(
    (state) => state.bookmarks.filteredBookmarks
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8">
      {bookmarkItems.map((bookmark, i) => (
        <BookmarkCard bookmark={bookmark} key={i} isLight={isLight} />
      ))}
    </div>
  );
}
