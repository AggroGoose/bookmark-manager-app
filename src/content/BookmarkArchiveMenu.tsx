import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import IconMenuBookmark from "../assets/SVG/IconMenuBookmark";
import IconVisit from "../assets/SVG/IconVisit";
import IconCopy from "../assets/SVG/IconCopy";
import IconUnarchive from "../assets/SVG/IconUnarchive";
import IconDelete from "../assets/SVG/IconDelete";
import { useAppDispatch } from "../hooks";
import { bookmarkActions } from "../store/bookmarkSlice";

export default function BookmarkArchiveMenu({
  bookmark,
}: {
  bookmark:
    | {
        id: number;
        title: string;
        url: string;
        favicon: string;
        description: string;
        tags: string[];
        pinned: boolean;
        isArchived: boolean;
        visitCount: number;
        createdAt: string;
        lastVisited: string;
      }
    | {
        id: number;
        title: string;
        url: string;
        favicon: string;
        description: string;
        tags: string[];
        pinned: boolean;
        isArchived: boolean;
        visitCount: number;
        createdAt: string;
        lastVisited: null;
      };
}) {
  const dispatch = useAppDispatch();
  const handleCopy = async () => {
    await navigator.clipboard.writeText(bookmark.url);
  };
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
          <a
            href={bookmark.url}
            target="_blank"
            className="flex p-2 items-center gap-2.5 w-full rounded-lg hover:bg-neutral-100"
          >
            <IconVisit className="h-4" />
            <p className="font-semibold text-sm">Visit</p>
          </a>
        </MenuItem>
        <MenuItem>
          <button
            className="flex w-full py-2 items-center gap-2.5 rounded-lg hover:cursor-pointer hover:bg-neutral-100"
            onClick={handleCopy}
          >
            <IconCopy className="h-4" bg="#fff" />
            <p className="font-semibold text-sm">Copy URL</p>
          </button>
        </MenuItem>
        <MenuItem>
          <button
            className="flex w-full py-2 items-center gap-2.5 rounded-lg hover:cursor-pointer hover:bg-neutral-100"
            onClick={() => dispatch(bookmarkActions.toggleArchive(bookmark.id))}
          >
            <IconUnarchive className="h-4" />
            <p className="font-semibold text-sm">Unarchive</p>
          </button>
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
