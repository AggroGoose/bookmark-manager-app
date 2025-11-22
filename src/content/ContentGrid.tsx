import { useAppSelector } from "../hooks";
import BookmarkCard from "./BookmarkCard";

export default function ContentGrid() {
  const bookmarkItems = useAppSelector(
    (state) => state.bookmarks.filteredBookmarks
  );
  return (
    <div className="grid grid-cols-3 gap-8">
      {bookmarkItems.map((bookmark, i) => (
        <BookmarkCard bookmark={bookmark} key={i} />
      ))}
    </div>
  );
}
