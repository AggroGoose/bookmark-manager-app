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
    <div className="flex flex-col gap-4">
      <p>{bookmark.title}</p>
    </div>
  );
}
