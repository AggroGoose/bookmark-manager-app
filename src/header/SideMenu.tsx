import { MenuButton, Menu, MenuItems } from "@headlessui/react";
import IconMenu from "../assets/SVG/IconMenu";
import NavLogo from "../nav/NavLogo";
import NavButtons from "../nav/NavButtons";
import FilterCheckboxes from "../nav/FilterCheckboxes";

export default function SideMenu({ isLight }: { isLight: boolean }) {
  return (
    <Menu
      as="div"
      className={`xl:hidden h-full relative flex items-center outline-none border-none${
        isLight ? "" : " dark"
      }`}
    >
      <MenuButton className="data-active:rotate-90 transition-transform duration-300 ease-in-out p-3 border border-neutral-300 rounded-lg dark:text-white">
        <IconMenu className="aspect-square h-5" />
      </MenuButton>
      <MenuItems className="w-[296px] z-10 h-screen flex flex-col gap-4 fixed top-0 left-0 border-r border-neutral-200 dark:border-neutral-500 bg-white dark:bg-neutral-800 dark:text-white overflow-y-scroll">
        <NavLogo />
        <NavButtons />
        <FilterCheckboxes />
      </MenuItems>
    </Menu>
  );
}
