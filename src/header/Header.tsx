import AddBookmark from "./AddBookmark";
import Search from "./Search";
import UserMenu from "./userMenu";

export default function Header({
  isLight,
  setIsLight,
}: {
  isLight: boolean;
  setIsLight: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="w-full row-1 flex justify-between border-b px-8 py-4 border-neutral-200 dark:border-neutral-500 dark:bg-neutral-800 dark:text-white">
      <Search />
      <div className="flex gap-4 items-center">
        <AddBookmark isLight={isLight} />
        <UserMenu isLight={isLight} setIsLight={setIsLight} />
      </div>
    </div>
  );
}
