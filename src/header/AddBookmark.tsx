import IconAdd from "../assets/SVG/IconAdd";
export default function AddBookmark() {
  return (
    <button className="flex gap-1 items-center text-white bg-teal-950 font-semibold px-4 py-3 rounded-lg">
      <IconAdd className="h-5" />
      <p className="">Add Bookmark</p>
    </button>
  );
}
