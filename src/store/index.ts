import { configureStore } from "@reduxjs/toolkit";

import bookmarkSlice from "./bookmarkSlice";

const store = configureStore({
  reducer: { bookmarks: bookmarkSlice.reducer },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
