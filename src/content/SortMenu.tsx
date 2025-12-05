import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import IconSort from "../assets/SVG/IconSort";
import IconCheck from "../assets/SVG/IconCheck";
import { useAppDispatch, useAppSelector } from "../hooks";
import { bookmarkActions } from "../store/bookmarkSlice";

export default function SortMenu({ isLight }: { isLight: boolean }) {
  const sortMethod = useAppSelector((state) => state.bookmarks.sortMethod);
  const dispatch = useAppDispatch();

  const changeSortMethod = (type: string) => {
    dispatch(bookmarkActions.changeSort(type));
  };

  return (
    <Menu>
      <MenuButton className="flex gap-1 items-center border border-neutral-400 px-3 py-2.5 rounded-lg bg-white dark:bg-neutral-600 dark:hover:bg-neutral-500 dark:border-neutral-500 hover:cursor-pointer hover:bg-neutral-100">
        <IconSort className="h-5" />
        <p className="font-semibold">Sort by</p>
      </MenuButton>
      <MenuItems
        anchor={{ to: "bottom end", gap: "8px" }}
        className={`p-2 w-[200px] rounded-lg bg-white dark:bg-neutral-800 dark:text-white drop-shadow-lg${
          isLight ? "" : " dark"
        }`}
      >
        <MenuItem>
          <button
            className="data-focus:bg-neutral-100 dark:data-focus:bg-neutral-600 hover:cursor-pointer flex justify-between items-center p-2 rounded-lg w-full"
            onClick={() => changeSortMethod("ra")}
          >
            <p className="font-semibold text-sm">Recently added</p>
            {sortMethod == "ra" && <IconCheck className="h-4" />}
          </button>
        </MenuItem>
        <MenuItem>
          <button
            className="data-focus:bg-neutral-100 dark:data-focus:bg-neutral-600 hover:cursor-pointer flex justify-between items-center p-2 rounded-lg w-full"
            onClick={() => changeSortMethod("rv")}
          >
            <p className="font-semibold text-sm">Recently visited</p>
            {sortMethod == "rv" && <IconCheck className="h-4" />}
          </button>
        </MenuItem>
        <MenuItem>
          <button
            className="data-focus:bg-neutral-100 dark:data-focus:bg-neutral-600 hover:cursor-pointer flex justify-between items-center p-2 rounded-lg w-full"
            onClick={() => changeSortMethod("mv")}
          >
            <p className="font-semibold text-sm">Most visited</p>
            {sortMethod == "mv" && <IconCheck className="h-4" />}
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
