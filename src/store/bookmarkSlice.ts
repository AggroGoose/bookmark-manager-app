import { createSlice } from "@reduxjs/toolkit";
import data from "./data.json";

const filtersApplied: Array<string> = [];
const filterMap: Map<string, number> = new Map();
const unarchivedArray = data.bookmarks.filter(
  (bookmark) => !bookmark.isArchived
);

for (const bookmark of unarchivedArray) {
  for (const tag of bookmark.tags) {
    if (filterMap.has(tag)) {
      filterMap.set(tag, filterMap.get(tag)! + 1);
    } else {
      filterMap.set(tag, 1);
    }
  }
}

const pinnedBookmarks = unarchivedArray.filter((bookmark) => bookmark.pinned);
const unpinnedBookmarks = unarchivedArray.filter(
  (bookmark) => !bookmark.pinned
);

const filterArray = Array.from(filterMap, ([key, value]) => ({ key, value }));

filterArray.sort((a, b) => a.key.localeCompare(b.key));

const bookmarkInitialState = {
  allBookmarks: data.bookmarks,
  filteredBookmarks: [...pinnedBookmarks, ...unpinnedBookmarks],
  nextId: data.bookmarks.length + 1,
  filtersApplied,
  filters: filterArray,
  showArchived: false,
};

const bookmarkSlice = createSlice({
  name: "bookmarks",
  initialState: bookmarkInitialState,
  reducers: {},
});

export default bookmarkSlice;
