import { createSlice } from "@reduxjs/toolkit";
import data from "./data.json";

const filtersApplied: Array<string> = [];
const filterMap: Map<string, number> = new Map();

for (const bookmark of data.bookmarks) {
  for (const tag of bookmark.tags) {
    if (filterMap.has(tag)) {
      filterMap.set(tag, filterMap.get(tag)! + 1);
    } else {
      filterMap.set(tag, 1);
    }
  }
}

const filterArray = Array.from(filterMap, ([key, value]) => ({ key, value }));

filterArray.sort((a, b) => a.key.localeCompare(b.key));

const bookmarkInitialState = {
  allBookmarks: data.bookmarks,
  filteredBookmarks: data.bookmarks,
  nextId: data.bookmarks.length + 1,
  filtersApplied,
  filters: filterArray,
};

const bookmarkSlice = createSlice({
  name: "bookmarks",
  initialState: bookmarkInitialState,
  reducers: {},
});

export default bookmarkSlice;
