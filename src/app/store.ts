import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counters/counters";

const store = configureStore({
  reducer: {
    counters: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
