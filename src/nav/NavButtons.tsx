import homeIcon from "../assets/images/icon-home.svg";
import archiveIcon from "../assets/images/icon-archive.svg";

export default function NavButtons() {
  return (
    <nav className="px-4">
      <button className="flex gap-2 items-center px-3 py-2 w-full rounded-md hover:bg-slate-100">
        <img src={homeIcon} className="h-5" />
        <p className="font-semibold">Home</p>
      </button>
      <button className="flex gap-2 items-center px-3 py-2 w-full rounded-md hover:bg-slate-100">
        <img src={archiveIcon} className="h-5" />
        <p className="font-semibold">Archived</p>
      </button>
    </nav>
  );
}
