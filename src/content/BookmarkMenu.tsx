import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import IconMenuBookmark from "../assets/SVG/IconMenuBookmark";
import IconVisit from "../assets/SVG/IconVisit";
import IconCopy from "../assets/SVG/IconCopy";
import IconPin from "../assets/SVG/IconPin";
import IconEdit from "../assets/SVG/IconEdit";
import IconArchive from "../assets/SVG/IconArchive";
import { useAppDispatch } from "../hooks";
import { bookmarkActions } from "../store/bookmarkSlice";

export default function BookmarkMenu({
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
  const handlePin = () => {
    dispatch(bookmarkActions.togglePin(bookmark.id));
  };
  const handleCopy = async () => {
    await navigator.clipboard.writeText(bookmark.url);
  };
  return (
    <Menu>
      <MenuButton className="p-1.5 border border-neutral-300 rounded-lg max-h-max hover:cursor-pointer hover:bg-neutral-100">
        <IconMenuBookmark className="h-5 aspect-square" />
      </MenuButton>
      <MenuItems
        anchor={{ to: "bottom end", gap: "8px" }}
        className="p-2 w-[200px] rounded-lg bg-white drop-shadow-lg"
      >
        <MenuItem>
          <a
            href={bookmark.url}
            target="_blank"
            className="flex py-2 items-center gap-2.5 w-full rounded-lg hover:bg-neutral-100"
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
        {!bookmark.pinned && (
          <MenuItem>
            <button
              className="flex w-full py-2 items-center gap-2.5 rounded-lg hover:cursor-pointer hover:bg-neutral-100"
              onClick={handlePin}
            >
              <IconPin className="h-4" />
              <p className="font-semibold text-sm">Pin</p>
            </button>
          </MenuItem>
        )}
        {bookmark.pinned && (
          <MenuItem>
            <button
              className="flex w-full py-2 items-center gap-2.5 rounded-lg hover:cursor-pointer hover:bg-neutral-100"
              onClick={handlePin}
            >
              <IconPin className="h-4 rotate-45" />
              <p className="font-semibold text-sm">Unpin</p>
            </button>
          </MenuItem>
        )}
        <MenuItem>
          <div className="flex py-2 items-center gap-2.5">
            <IconEdit className="h-4" bg="#fff" />
            <p className="font-semibold text-sm">Edit</p>
          </div>
        </MenuItem>
        <MenuItem>
          <button
            className="flex w-full py-2 items-center gap-2.5 rounded-lg hover:cursor-pointer hover:bg-neutral-100"
            onClick={() => dispatch(bookmarkActions.toggleArchive(bookmark.id))}
          >
            <IconArchive className="h-4" />
            <p className="font-semibold text-sm">Archive</p>
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
