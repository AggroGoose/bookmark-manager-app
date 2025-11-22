import addIcon from "../assets/images/icon-dark-theme.svg";
export default function AddBookmark() {
  return (
    <button className="flex gap-1 items-center">
      <img src={addIcon} className="h-5 fill-neutral-100" />
      <p className="">Add Bookmark</p>
    </button>
  );
}
