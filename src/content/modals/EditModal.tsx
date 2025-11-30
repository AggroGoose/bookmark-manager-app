import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useRef, useState } from "react";
import { useAppDispatch } from "../../hooks";
import { bookmarkActions } from "../../store/bookmarkSlice";

export default function EditModal({
  editOpen,
  setEditOpen,
  bookmark,
}: {
  editOpen: boolean;
  setEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
  bookmark:
    | {
        id: number;
        title: string;
        url: string;
        favicon: string;
        description: string;
        tags: string[];
        pinned: boolean;
        isArchived: boolean;
        visitCount: number;
        createdAt: string;
        lastVisited: string;
      }
    | {
        id: number;
        title: string;
        url: string;
        favicon: string;
        description: string;
        tags: string[];
        pinned: boolean;
        isArchived: boolean;
        visitCount: number;
        createdAt: string;
        lastVisited: null;
      };
}) {
  const [description, setDescription] = useState(bookmark.description);
  const titleRef = useRef<HTMLInputElement>(null);
  const urlRef = useRef<HTMLInputElement>(null);
  const tagsRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = {
      id: bookmark.id,
      title: titleRef.current!.value,
      url: urlRef.current!.value,
      tags: tagsRef.current!.value.split(","),
      description: description,
    };

    dispatch(bookmarkActions.editBookmark(payload));
    setEditOpen(false);
  };

  return (
    <Dialog
      open={editOpen}
      onClose={() => setEditOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-neutral-800/80">
        <DialogPanel className="max-w-[570px] space-y-4 border bg-white p-8 rounded-lg">
          <DialogTitle className="font-bold text-2xl">
            Edit bookmark
          </DialogTitle>
          <Description className="font-medium text-sm">
            Update your saved link details - change the title, description, URL,
            or tags anytime.
          </Description>
          <form className="flex flex-col mt-8 gap-5" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1.5">
              <label className="font-semibold text-sm" htmlFor="new_title">
                Title *
              </label>
              <input
                type="text"
                id="new_title"
                name="new_title"
                ref={titleRef}
                minLength={2}
                defaultValue={bookmark.title}
                required
                className="h-10 border px-2 border-neutral-300 rounded-lg data-hover:shadow"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                className="font-semibold text-sm"
                htmlFor="new_description"
              >
                Description *
              </label>
              <textarea
                rows={3}
                id="new_description"
                name="new_description"
                value={description}
                onChange={(e) => setDescription(e.currentTarget.value)}
                required
                minLength={10}
                maxLength={280}
                className="border px-2 border-neutral-300 rounded-lg data-hover:shadow"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-semibold text-sm" htmlFor="new_website">
                Website URL *
              </label>
              <input
                type="url"
                defaultValue={bookmark.url}
                name="new_website"
                id="new_website"
                ref={urlRef}
                required
                className="h-10 border px-2 border-neutral-300 rounded-lg data-hover:shadow"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-semibold text-sm" htmlFor="new_tags">
                Tags *
              </label>
              <input
                name="new_tags"
                id="new_tags"
                defaultValue={bookmark.tags.join(",")}
                minLength={2}
                ref={tagsRef}
                required
                className="h-10 border px-2 border-neutral-300 rounded-lg data-hover:shadow"
              />
            </div>
            <div className="flex gap-4 mt-3 self-end">
              <button
                onClick={() => setEditOpen(false)}
                className="font-semibold px-4 py-3 border border-neutral-300 hover:bg-neutral-300 hover:cursor-pointer rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="font-semibold px-4 py-3 text-white bg-teal-800 hover:bg-teal-950 hover:cursor-pointer rounded-lg"
              >
                Save Bookmark
              </button>
            </div>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
