import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import IconMenuBookmark from "../assets/SVG/IconMenuBookmark";
import IconVisit from "../assets/SVG/IconVisit";
import IconCopy from "../assets/SVG/IconCopy";
import IconUnarchive from "../assets/SVG/IconUnarchive";
import IconDelete from "../assets/SVG/IconDelete";

export default function BookmarkArchiveMenu() {
  return (
    <Menu>
      <MenuButton className="p-1.5 border border-neutral-300 rounded-lg max-h-max">
        <IconMenuBookmark className="h-5 aspect-square" />
      </MenuButton>
      <MenuItems
        anchor={{ to: "bottom end", gap: "8px" }}
        className="px-2 rounded-lg bg-white drop-shadow-lg"
      >
        <MenuItem>
          <div className="flex py-2 items-center gap-2.5">
            <IconVisit className="h-4" />
            <p className="font-semibold text-sm">Visit</p>
          </div>
        </MenuItem>
        <MenuItem>
          <div className="flex py-2 items-center gap-2.5">
            <IconCopy className="h-4" bg="#fff" />
            <p className="font-semibold text-sm">Copy URL</p>
          </div>
        </MenuItem>
        <MenuItem>
          <div className="flex py-2 items-center gap-2.5">
            <IconUnarchive className="h-4" />
            <p className="font-semibold text-sm">Unarchive</p>
          </div>
        </MenuItem>
        <MenuItem>
          <div className="flex py-2 items-center gap-2.5">
            <IconDelete className="h-4" />
            <p className="font-semibold text-sm">Delete Permanently</p>
          </div>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
