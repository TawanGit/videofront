// store.ts
import { configureStore } from "@reduxjs/toolkit";
import userReduce from "./Features/user/userSlice";
export const store = configureStore({
  reducer: {
    user: userReduce,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
