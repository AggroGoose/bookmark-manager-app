import searchIcon from "../assets/images/icon-search.svg";

export default function Search() {
  return (
    <div className="w-[320px] bg-neutral-100 rounded-md flex relative p-3 gap-2">
      <img src={searchIcon} className="h-5" />
      <input className="w-full" placeholder="Search by title..." />
    </div>
  );
}
