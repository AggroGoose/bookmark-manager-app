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
  sortMethod: "ra",
};

const bookmarkSlice = createSlice({
  name: "bookmarks",
  initialState: bookmarkInitialState,
  reducers: {
    sortItems(state) {
      const sortItems = state.filteredBookmarks;
      const pinnedItems = sortItems.filter((bookmark) => bookmark.pinned);
      const unpinnedItems = sortItems.filter((bookmark) => !bookmark.pinned);

      if (state.sortMethod == "ra") {
        pinnedItems.sort((a, b) => {
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        });
        unpinnedItems.sort((a, b) => {
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        });
      } else if (state.sortMethod == "rv") {
        pinnedItems.sort((a, b) => {
          return (
            new Date(b.lastVisited || 0).getTime() -
            new Date(a.lastVisited || 0).getTime()
          );
        });
        unpinnedItems.sort((a, b) => {
          return (
            new Date(b.lastVisited || 0).getTime() -
            new Date(a.lastVisited || 0).getTime()
          );
        });
      } else if (state.sortMethod == "mv") {
        pinnedItems.sort((a, b) => {
          return b.visitCount - a.visitCount;
        });
        unpinnedItems.sort((a, b) => {
          return b.visitCount - a.visitCount;
        });
      }

      state.filteredBookmarks = [...pinnedItems, ...unpinnedItems];
    },
    changeSort(state, action) {
      if (action.payload == "ra") {
        state.sortMethod = "ra";
      } else if (action.payload == "rv") {
        state.sortMethod = "rv";
      } else if (action.payload == "mv") {
        state.sortMethod = "mv";
      }
      bookmarkSlice.caseReducers.sortItems(state);
    },
    filterArchive(state) {
      let bookmarkArray = [];
      if (state.showArchived) {
        bookmarkArray = state.allBookmarks.filter(
          (bookmark) => bookmark.isArchived
        );
      } else {
        bookmarkArray = state.allBookmarks.filter(
          (bookmark) => !bookmark.isArchived
        );
      }

      state.filteredBookmarks = [...bookmarkArray];
    },
    toggleArchive(state, action) {
      if (action.payload) {
        state.showArchived = true;
      } else {
        state.showArchived = false;
      }

      bookmarkSlice.caseReducers.filterArchive(state);
      bookmarkSlice.caseReducers.sortItems(state);
    },
  },
});

export const bookmarkActions = bookmarkSlice.actions;
export default bookmarkSlice;
