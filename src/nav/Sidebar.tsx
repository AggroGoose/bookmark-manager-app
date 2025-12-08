import FilterCheckboxes from "./FilterCheckboxes";
import NavButtons from "./NavButtons";
import NavLogo from "./NavLogo";

export default function Sidebar() {
  return (
    <div className="w-[296px] max-xl:hidden h-screen flex flex-col gap-4 fixed border-r border-neutral-200 dark:border-neutral-500 dark:bg-neutral-800 dark:text-white">
      <NavLogo />
      <NavButtons />
      <FilterCheckboxes />
    </div>
  );
}
