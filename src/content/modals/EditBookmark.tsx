import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useRef, useState } from "react";
import IconAdd from "../../assets/SVG/IconAdd";
import { useAppDispatch } from "../../hooks";
import { bookmarkActions } from "../../store/bookmarkSlice";

export default function AddBookmark() {
  const [isOpen, setIsOpen] = useState(false);
  const [description, setDescription] = useState("");
  const titleRef = useRef<HTMLInputElement>(null);
  const urlRef = useRef<HTMLInputElement>(null);
  const tagsRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = {
      title: titleRef.current!.value,
      url: urlRef.current!.value,
      tags: tagsRef.current!.value.split(","),
      description: description,
    };

    dispatch(bookmarkActions.addBookmark(payload));
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex gap-1 items-center text-white bg-teal-950 font-semibold px-4 py-3 rounded-lg hover:cursor-pointer hover:drop-shadow-lg hover:bg-teal-800"
      >
        <IconAdd className="h-5" />
        <p className="">Add Bookmark</p>
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-neutral-800/80">
          <DialogPanel className="max-w-[570px] space-y-4 border bg-white p-8 rounded-lg">
            <DialogTitle className="font-bold text-2xl">
              Add a bookmark
            </DialogTitle>
            <Description className="font-medium text-sm">
              Save a link with details to keep your collection organized. We
              extract the favicon automatically from the URL.
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
                  minLength={2}
                  ref={tagsRef}
                  required
                  className="h-10 border px-2 border-neutral-300 rounded-lg data-hover:shadow"
                />
              </div>
              <div className="flex gap-4 mt-3 self-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="font-semibold px-4 py-3 border border-neutral-300 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="font-semibold px-4 py-3 bg-neutral-800 text-white rounded-lg"
                >
                  Add Bookmark
                </button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
