import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useAppDispatch } from "../../hooks";
import { bookmarkActions } from "../../store/bookmarkSlice";

export default function ArchiveModal({
  archiveOpen,
  setArchiveOpen,
  id,
  isLight,
}: {
  archiveOpen: boolean;
  setArchiveOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
  isLight: boolean;
}) {
  const dispatch = useAppDispatch();
  return (
    <Dialog
      open={archiveOpen}
      onClose={() => setArchiveOpen(false)}
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
              Archive bookmark
            </DialogTitle>
            <p className="font-medium text-sm">
              Are you sure you want to archive this bookmark?
            </p>
            <div className="flex gap-4 self-end">
              <button
                className="font-semibold px-4.5 py-3 border border-neutral-300 dark:border-neutral-500 dark:hover:bg-neutral-500 hover:bg-neutral-300 hover:cursor-pointer rounded-lg"
                onClick={() => setArchiveOpen(false)}
              >
                Cancel
              </button>
              <button
                className="font-semibold px-4.5 py-3 text-white bg-teal-700 dark:bg-teal-800 dark:hover:bg-teal-700 hover:bg-teal-800 hover:cursor-pointer rounded-lg"
                onClick={() => {
                  dispatch(bookmarkActions.toggleArchive(id));
                  setArchiveOpen(false);
                }}
              >
                Archive
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
