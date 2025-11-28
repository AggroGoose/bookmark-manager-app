import { useEffect, useState } from "react";
import { useAppSelector } from "../hooks";
import FilterItem from "./FilterItem";

export default function FilterCheckboxes() {
  const allBookmarks = useAppSelector((state) => state.bookmarks.allBookmarks);
  const [filterItems, setFilterItems] = useState<
    { key: string; value: number }[]
  >([]);

  useEffect(() => {
    const filterMap: Map<string, number> = new Map();
    for (const bookmark of allBookmarks) {
      for (const tag of bookmark.tags) {
        if (filterMap.has(tag)) {
          filterMap.set(tag, filterMap.get(tag)! + 1);
        } else {
          filterMap.set(tag, 1);
        }
      }
    }

    const filterArray = Array.from(filterMap, ([key, value]) => ({
      key,
      value,
    }));

    filterArray.sort((a, b) => a.key.localeCompare(b.key));
    // eslint-disable-next-line
    setFilterItems([...filterArray]);
  }, [allBookmarks]);

  return (
    <div className="px-4 flex flex-col">
      <p className="px-3 font-bold text-xs">TAGS</p>
      {filterItems.map((filter, i) => (
        <FilterItem filter={filter} key={i} />
      ))}
    </div>
  );
}
