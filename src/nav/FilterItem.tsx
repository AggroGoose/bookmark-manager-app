import { Checkbox } from "@headlessui/react";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../hooks";
import { bookmarkActions } from "../store/bookmarkSlice";

export default function FilterItem({
  filter,
}: {
  filter: {
    key: string;
    value: number;
  };
}) {
  const [enabled, setEnabled] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (enabled) {
      dispatch(bookmarkActions.addFilter(filter.key));
    } else {
      dispatch(bookmarkActions.removeFilter(filter.key));
    }
  }, [enabled, dispatch, filter.key]);
  return (
    <div className="flex gap-2 items-center px-3 py-2 hover:bg-neutral-100 rounded-lg">
      <Checkbox
        checked={enabled}
        onChange={setEnabled}
        className="group block size-4 rounded border bg-white dark:bg-neutral-800 data-checked:bg-neutral-800"
      >
        <svg
          className="stroke-white opacity-0 group-data-checked:opacity-100"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M3 8L6 11L11 3.5"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Checkbox>
      <p className="font-semibold">{filter.key}</p>
      <p className="px-2 py-0.5 rounded-full font-medium text-xs ml-auto bg-neutral-100 dark:bg-neutral-600">
        {filter.value}
      </p>
    </div>
  );
}
