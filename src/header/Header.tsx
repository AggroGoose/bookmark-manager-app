import avatar from "../assets/images/image-avatar.webp";
import AddBookmark from "./AddBookmark";
import Search from "./Search";

export default function Header() {
  return (
    <div className="w-full row-1 flex justify-between border-b px-8 py-4 border-neutral-200">
      <Search />
      <div className="flex gap-4 items-center">
        <AddBookmark />
        <img src={avatar} className="h-10" />
      </div>
    </div>
  );
}
