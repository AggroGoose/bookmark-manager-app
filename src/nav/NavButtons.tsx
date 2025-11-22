import IconArchive from "../assets/SVG/IconArchive";
import IconHome from "../assets/SVG/IconHome";

export default function NavButtons() {
  return (
    <nav className="px-4">
      <button className="flex gap-2 items-center px-3 py-2 w-full rounded-md hover:bg-neutral-100">
        <IconHome className="h-5" />
        <p className="font-semibold">Home</p>
      </button>
      <button className="flex gap-2 items-center px-3 py-2 w-full rounded-md hover:bg-neutral-100">
        <IconArchive className="h-5" />
        <p className="font-semibold">Archived</p>
      </button>
    </nav>
  );
}
