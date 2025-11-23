import { useAppSelector } from "../hooks";
import FilterItem from "./FilterItem";

export default function FilterCheckboxes() {
  const filterItems = useAppSelector((state) => state.bookmarks.filters);
  return (
    <div className="px-4 flex flex-col">
      <p className="px-3 font-bold text-xs">TAGS</p>
      {filterItems.map((filter, i) => (
        <FilterItem filter={filter} key={i} />
      ))}
    </div>
  );
}
