import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Switch,
} from "@headlessui/react";
import avatar from "../assets/images/image-avatar.webp";
import IconLogout from "../assets/SVG/IconLogout";
import IconTheme from "../assets/SVG/IconTheme";
import IconDarkTheme from "../assets/SVG/IconDarkTheme";
import IconLightTheme from "../assets/SVG/IconLightTheme";

export default function UserMenu({
  isLight,
  setIsLight,
}: {
  isLight: boolean;
  setIsLight: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Menu>
      <MenuButton className="hover:cursor-pointer hover:outline-2 rounded-full">
        <img src={avatar} className="h-10" />
      </MenuButton>
      <MenuItems
        anchor={{ to: "bottom end", gap: "8px" }}
        className={`rounded-lg bg-white dark:bg-neutral-800 dark:text-white drop-shadow-lg${
          isLight ? "" : " dark"
        }`}
      >
        <MenuItem>
          <div className="flex gap-3 items-center px-4 py-3 border-b border-b-neutral-300 dark:border-b-neutral-500">
            <img src={avatar} className="h-10" />
            <div className="flex flex-col">
              <p className="text-sm font-semibold">Emily Carter</p>
              <p className="text-sm font-medium">emily101@gmail.com</p>
            </div>
          </div>
        </MenuItem>
        <MenuItem>
          <div className="flex justify-between items-center p-3 border-b border-b-neutral-300 dark:border-b-neutral-500">
            <div className="flex gap-2.5 items-center">
              <IconTheme className="h-4" bg="#fff" />
              <p className="text-sm font-semibold">Theme</p>
            </div>
            <Switch
              checked={isLight}
              onChange={setIsLight}
              className="group inline-flex items-center rounded-xl w-15 h-7.5 bg-neutral-300 dark:bg-neutral-600 data-disabled:cursor-not-allowed data-disabled:opacity-50 hover:cursor-pointer"
            >
              <span className="translate-x-8 rounded-lg px-1.5 py-2 bg-white dark:bg-neutral-800 transition group-data-checked:translate-x-0">
                {!isLight && <IconDarkTheme className="h-3.5" />}
                {isLight && <IconLightTheme className="h-3.5" />}
              </span>
            </Switch>
          </div>
        </MenuItem>
        <MenuItem>
          <div className="flex gap-2.5 items-center p-3">
            <IconLogout className="h-4" />
            <p className="text-sm font-semibold">Logout</p>
          </div>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
