import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { bookmarkActions } from "../../store/bookmarkSlice";
import { useAppDispatch } from "../../hooks";

export default function DeleteModal({
  deleteOpen,
  setDeleteOpen,
  id,
  isLight,
}: {
  deleteOpen: boolean;
  setDeleteOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
  isLight: boolean;
}) {
  const dispatch = useAppDispatch();
  return (
    <Dialog
      open={deleteOpen}
      onClose={() => setDeleteOpen(false)}
      className="relative z-50"
    >
      <div
        className={`fixed inset-0 w-screen overflow-y-auto p-4 bg-neutral-900/80${
          isLight ? "" : " dark"
        }`}
      >
        <div className="flex min-h-full items-center justify-center">
          <DialogPanel className="max-w-[450px] w-full space-y-4 bg-white dark:bg-neutral-800 dark:text-white p-6 rounded-lg flex flex-col">
            <DialogTitle className="font-bold text-2xl">
              Delete Bookmark
            </DialogTitle>
            <p className="font-medium text-sm">
              Are you sure you want to delete this bookmark?
            </p>
            <div className="flex gap-4 self-end">
              <button
                className="font-semibold px-4.5 py-3 border border-neutral-300 hover:bg-neutral-300 dark:border-neutral-500 dark:hover:bg-neutral-500 hover:cursor-pointer rounded-lg"
                onClick={() => setDeleteOpen(false)}
              >
                Cancel
              </button>
              <button
                className="font-semibold px-4.5 py-3 text-white bg-red-600 hover:bg-red-800 dark:bg-red-700 dark:hover:bg-red-600 hover:cursor-pointer rounded-lg"
                onClick={() => {
                  dispatch(bookmarkActions.deleteBookmark(id));
                  setDeleteOpen(false);
                }}
              >
                Delete Permanently
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
