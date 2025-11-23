import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Field,
  Input,
  Label,
  Textarea,
} from "@headlessui/react";
import { useState } from "react";
import IconAdd from "../assets/SVG/IconAdd";

export default function AddBookmark() {
  const [isOpen, setIsOpen] = useState(false);

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
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-neutral-800/45">
          <DialogPanel className="max-w-[570px] space-y-4 border bg-white p-8 rounded-lg">
            <DialogTitle className="font-bold text-2xl">
              Add a bookmark
            </DialogTitle>
            <Description className="font-medium text-sm">
              Save a link with details to keep your collection organized. We
              extract the favicon automatically from the URL.
            </Description>
            <div className="flex flex-col my-8 gap-5">
              <Field className="flex flex-col gap-1.5">
                <Label className="font-semibold text-sm">Title *</Label>
                <Input
                  name="title"
                  className="h-10 border px-2 border-neutral-300 rounded-lg data-hover:shadow"
                />
              </Field>
              <Field className="flex flex-col gap-1.5">
                <Label className="font-semibold text-sm">Description *</Label>
                <Textarea
                  rows={3}
                  name="description"
                  className="border px-2 border-neutral-300 rounded-lg data-hover:shadow"
                />
              </Field>
              <Field className="flex flex-col gap-1.5">
                <Label className="font-semibold text-sm">Website URL *</Label>
                <Input
                  name="websiteurl"
                  className="h-10 border px-2 border-neutral-300 rounded-lg data-hover:shadow"
                />
              </Field>
              <Field className="flex flex-col gap-1.5">
                <Label className="font-semibold text-sm">Tags *</Label>
                <Input
                  name="tags"
                  className="h-10 border px-2 border-neutral-300 rounded-lg data-hover:shadow"
                />
              </Field>
            </div>
            <div className="flex gap-4 justify-self-end">
              <button
                onClick={() => setIsOpen(false)}
                className="font-semibold px-4 py-3 border border-neutral-300 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="font-semibold px-4 py-3 bg-neutral-800 text-white rounded-lg"
              >
                Add Bookmark
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
