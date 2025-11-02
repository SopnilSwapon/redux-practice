// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counters/countersSlice";
import postsReducer from "../features/posts/postsSlice";

export const store = configureStore({
  reducer: {
    counters: counterReducer,
    posts: postsReducer,
  },
});

// types (optional but good)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
