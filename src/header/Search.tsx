import IconSearch from "../assets/SVG/IconSearch";

export default function Search() {
  return (
    <div className="w-[320px] bg-neutral-100 rounded-lg flex relative p-3 gap-2">
      <IconSearch className="h-5" />
      <input className="w-full" placeholder="Search by title..." />
    </div>
  );
}
