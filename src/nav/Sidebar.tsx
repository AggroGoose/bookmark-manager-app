import FilterCheckboxes from "./FilterCheckboxes";
import NavButtons from "./NavButtons";
import NavLogo from "./NavLogo";

export default function Sidebar() {
  return (
    <div className="w-[296px] h-screen flex flex-col gap-4 fixed border-r border-neutral-200">
      <NavLogo />
      <NavButtons />
      <FilterCheckboxes />
    </div>
  );
}
