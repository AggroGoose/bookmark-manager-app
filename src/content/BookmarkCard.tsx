import { useState } from "react";
import IconCreated from "../assets/SVG/IconCreated";
import IconLastVisited from "../assets/SVG/IconLastVisited";
import IconPin from "../assets/SVG/IconPin";
import IconVisitCount from "../assets/SVG/IconVisitCount";
import BookmarkArchiveMenu from "./BookmarkArchiveMenu";
import BookmarkMenu from "./BookmarkMenu";
import dateFormatter from "./util/dateFormatter";
import DeleteModal from "./modals/DeleteModal";
import ArchiveModal from "./modals/ArchiveModal";
import UnarchiveModal from "./modals/UnarchiveModal";
import EditModal from "./modals/EditModal";

export default function BookmarkCard({
  bookmark,
  isLight,
}: {
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
  isLight: boolean;
}) {
  const [archiveOpen, setArchiveOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [unarchiveOpen, setUnarchiveOpen] = useState(false);

  return (
    <div className="w-full bg-white dark:bg-neutral-800 rounded-lg flex flex-col">
      <div className="flex flex-col gap-4 p-4 grow">
        <div className="flex gap-3 justify-between">
          <div className="flex items-center gap-3">
            <img src={bookmark.favicon} className="h-10 rounded-lg" />
            <div className="flex flex-col">
              <p className="font-bold text-xl">{bookmark.title}</p>
              <p className="font-medium text-xs">
                {bookmark.url.replace("https://", "").replace("www.", "")}
              </p>
            </div>
          </div>
          {bookmark.isArchived ? (
            <BookmarkArchiveMenu
              bookmark={bookmark}
              setDeleteOpen={setDeleteOpen}
              setUnarchiveOpen={setUnarchiveOpen}
              isLight={isLight}
            />
          ) : (
            <BookmarkMenu
              bookmark={bookmark}
              setArchiveOpen={setArchiveOpen}
              setEditOpen={setEditOpen}
              isLight={isLight}
            />
          )}
        </div>
        <hr className="border-neutral-300 dark:border-neutral-500" />
        <p className="font-medium text-sm">{bookmark.description}</p>
        <div className="flex gap-2 mt-auto flex-wrap">
          {bookmark.tags.map((tag, i) => (
            <p
              className="px-2 py-0.5 bg-neutral-100 dark:bg-neutral-600 rounded-md"
              key={i}
            >
              {tag}
            </p>
          ))}
        </div>
      </div>
      <div className="p-4 flex w-full gap-4 border-t border-neutral-300 dark:border-neutral-500 items-center">
        <div className="flex gap-0.5 items-center">
          <IconVisitCount className="h-3" />
          <p className="font-medium text-sm">{bookmark.visitCount}</p>
        </div>
        <div className="flex gap-0.5 items-center">
          <IconLastVisited bg="#fff" className="h-3" />
          <p className="font-medium text-sm">
            {dateFormatter(bookmark.lastVisited)}
          </p>
        </div>
        <div className="flex gap-0.5 items-center">
          <IconCreated className="h-3" />
          <p className="font-medium text-sm">
            {dateFormatter(bookmark.createdAt)}
          </p>
        </div>
        {bookmark.pinned && !bookmark.isArchived && (
          <IconPin className="h-4 ml-auto" />
        )}
        {bookmark.isArchived && (
          <p className="text-xs font-medium px-1.5 bg-neutral-100 dark:bg-neutral-600 rounded-md ml-auto">
            Archived
          </p>
        )}
      </div>
      <ArchiveModal
        archiveOpen={archiveOpen}
        setArchiveOpen={setArchiveOpen}
        id={bookmark.id}
        isLight={isLight}
      />
      <DeleteModal
        deleteOpen={deleteOpen}
        setDeleteOpen={setDeleteOpen}
        id={bookmark.id}
        isLight={isLight}
      />
      <EditModal
        bookmark={bookmark}
        editOpen={editOpen}
        setEditOpen={setEditOpen}
        isLight={isLight}
      />
      <UnarchiveModal
        unarchiveOpen={unarchiveOpen}
        setUnarchiveOpen={setUnarchiveOpen}
        id={bookmark.id}
        isLight={isLight}
      />
    </div>
  );
}
