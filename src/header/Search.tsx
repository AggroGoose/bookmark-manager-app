import { useState } from "react";
import IconSearch from "../assets/SVG/IconSearch";
import { useAppDispatch } from "../hooks";
import { bookmarkActions } from "../store/bookmarkSlice";

export default function Search() {
  const [search, setSearch] = useState("");
  const dispatch = useAppDispatch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
    if (e.currentTarget.value.length < 1) {
      dispatch(bookmarkActions.filteritems());
      dispatch(bookmarkActions.sortItems());
    } else {
      dispatch(bookmarkActions.searchBookmarks(e.currentTarget.value));
    }
  };

  return (
    <div className="max-w-[320px] w-full md:w-[320px] bg-neutral-100 dark:bg-neutral-600 rounded-lg flex relative p-3 gap-2">
      <IconSearch className="h-5" />
      <input
        className="w-full"
        placeholder="Search by title..."
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
}
