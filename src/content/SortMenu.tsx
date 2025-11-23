import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import IconSort from "../assets/SVG/IconSort";
import IconCheck from "../assets/SVG/IconCheck";

export default function SortMenu() {
  return (
    <Menu>
      <MenuButton className="flex gap-1 items-center border border-neutral-400 px-3 py-2.5 rounded-lg bg-white hover:cursor-pointer hover:bg-neutral-100">
        <IconSort className="h-5" />
        <p className="font-semibold">Sort by</p>
      </MenuButton>
      <MenuItems
        anchor={{ to: "bottom end", gap: "8px" }}
        className="p-2 w-[200px] rounded-lg bg-white drop-shadow-lg"
      >
        <MenuItem>
          <div className="data-focus:bg-blue-100 hover:cursor-pointer flex justify-between items-center p-2 rounded-lg">
            <p className="font-semibold text-sm">Recently added</p>
            <IconCheck className="h-4" />
          </div>
        </MenuItem>
        <MenuItem>
          <div className="data-focus:bg-blue-100 hover:cursor-pointer flex justify-between items-center p-2 rounded-lg">
            <p className="font-semibold text-sm">Recently visited</p>
            <IconCheck className="h-4" />
          </div>
        </MenuItem>
        <MenuItem>
          <div className="data-focus:bg-blue-100 hover:cursor-pointer flex justify-between items-center p-2 rounded-lg">
            <p className="font-semibold text-sm">Most visited</p>
            <IconCheck className="h-4" />
          </div>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
