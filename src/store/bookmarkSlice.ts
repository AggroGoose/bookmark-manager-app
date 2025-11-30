import { createSlice } from "@reduxjs/toolkit";
import data from "./data.json";

type Bookmark =
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

const filtersApplied: Array<string> = [];
const unarchivedArray = data.bookmarks.filter(
  (bookmark) => !bookmark.isArchived
);

const pinnedBookmarks = unarchivedArray.filter((bookmark) => bookmark.pinned);
const unpinnedBookmarks = unarchivedArray.filter(
  (bookmark) => !bookmark.pinned
);

const bookmarkInitialState = {
  allBookmarks: data.bookmarks,
  filteredBookmarks: [...pinnedBookmarks, ...unpinnedBookmarks],
  nextId: data.bookmarks.length + 1,
  filtersApplied,
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
    toggleShowArchive(state, action) {
      if (action.payload) {
        state.showArchived = true;
      } else {
        state.showArchived = false;
      }

      bookmarkSlice.caseReducers.filteritems(state);
      bookmarkSlice.caseReducers.sortItems(state);
    },
    filteritems(state) {
      bookmarkSlice.caseReducers.filterArchive(state);
      if (state.filtersApplied.length > 0) {
        const newArray = state.filteredBookmarks.filter((bookmark) =>
          state.filtersApplied.every((tag) => bookmark.tags.includes(tag))
        );

        state.filteredBookmarks = [...newArray];
      }
    },
    addFilter(state, action) {
      if (
        !state.filtersApplied.includes(action.payload) &&
        typeof action.payload === "string"
      ) {
        const filterList = state.filtersApplied;
        filterList.push(action.payload);
        state.filtersApplied = [...filterList];
      }

      bookmarkSlice.caseReducers.filteritems(state);
      bookmarkSlice.caseReducers.sortItems(state);
    },
    removeFilter(state, action) {
      if (typeof action.payload === "string") {
        const filterList = state.filtersApplied.filter(
          (item) => item !== action.payload
        );
        state.filtersApplied = [...filterList];
      }

      bookmarkSlice.caseReducers.filteritems(state);
      bookmarkSlice.caseReducers.sortItems(state);
    },
    togglePin(state, action) {
      if (typeof action.payload === "number") {
        const index = state.allBookmarks.findIndex(
          (item) => item.id === action.payload
        );
        state.allBookmarks[index].pinned = !state.allBookmarks[index].pinned;
      }

      bookmarkSlice.caseReducers.filteritems(state);
      bookmarkSlice.caseReducers.sortItems(state);
    },
    toggleArchive(state, action) {
      if (typeof action.payload === "number") {
        const index = state.allBookmarks.findIndex(
          (item) => item.id === action.payload
        );
        state.allBookmarks[index].isArchived =
          !state.allBookmarks[index].isArchived;
        state.allBookmarks[index].pinned = false;
      }

      bookmarkSlice.caseReducers.filteritems(state);
      bookmarkSlice.caseReducers.sortItems(state);
    },
    deleteBookmark(state, action) {
      if (typeof action.payload === "number") {
        const newItems = state.allBookmarks.filter(
          (item) => item.id !== action.payload
        );
        state.allBookmarks = [...newItems];
      }
      bookmarkSlice.caseReducers.filteritems(state);
      bookmarkSlice.caseReducers.sortItems(state);
    },
    addBookmark(state, action) {
      if (typeof action.payload === "object") {
        const a = action.payload;
        const newBookmark: Bookmark = {
          id: state.nextId,
          createdAt: new Date().toDateString(),
          description: a.description,
          favicon: "/src/assets/images/favicon-frontend-mentor.png",
          isArchived: false,
          lastVisited: null,
          pinned: false,
          tags: a.tags,
          url: a.url,
          title: a.title,
          visitCount: 0,
        };
        state.nextId = state.nextId + 1;
        state.allBookmarks = [...state.allBookmarks, newBookmark];
      }

      bookmarkSlice.caseReducers.filteritems(state);
      bookmarkSlice.caseReducers.sortItems(state);
    },
  },
});

export const bookmarkActions = bookmarkSlice.actions;
export default bookmarkSlice;
