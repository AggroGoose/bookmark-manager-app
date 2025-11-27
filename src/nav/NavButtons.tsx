import IconArchive from "../assets/SVG/IconArchive";
import IconHome from "../assets/SVG/IconHome";
import { useAppDispatch } from "../hooks";
import { bookmarkActions } from "../store/bookmarkSlice";

export default function NavButtons() {
  const dispatch = useAppDispatch();
  return (
    <nav className="px-4">
      <button
        className="flex gap-2 items-center px-3 py-2 w-full rounded-md hover:bg-neutral-100"
        onClick={() => dispatch(bookmarkActions.toggleArchive(false))}
      >
        <IconHome className="h-5" />
        <p className="font-semibold">Home</p>
      </button>
      <button
        className="flex gap-2 items-center px-3 py-2 w-full rounded-md hover:bg-neutral-100"
        onClick={() => dispatch(bookmarkActions.toggleArchive(true))}
      >
        <IconArchive className="h-5" />
        <p className="font-semibold">Archived</p>
      </button>
    </nav>
  );
}
