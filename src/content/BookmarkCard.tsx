import IconCreated from "../assets/SVG/IconCreated";
import IconLastVisited from "../assets/SVG/IconLastVisited";
import IconPin from "../assets/SVG/IconPin";
import IconVisitCount from "../assets/SVG/IconVisitCount";
import BookmarkMenu from "./BookmarkMenu";
import dateFormatter from "./util/dateFormatter";

export default function BookmarkCard({
  bookmark,
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
}) {
  return (
    <div className="w-full bg-white rounded-lg flex flex-col">
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
          <BookmarkMenu bookmark={bookmark} />
        </div>
        <hr className="border-neutral-300" />
        <p className="font-medium text-sm">{bookmark.description}</p>
        <div className="flex gap-2 mt-auto">
          {bookmark.tags.map((tag, i) => (
            <p className="px-2 py-0.5 bg-neutral-100 rounded-md" key={i}>
              {tag}
            </p>
          ))}
        </div>
      </div>
      <div className="p-4 flex w-full gap-4 border-t border-neutral-300">
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
        {bookmark.pinned && <IconPin className="h-4 ml-auto" />}
      </div>
    </div>
  );
}
