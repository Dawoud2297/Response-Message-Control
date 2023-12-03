import { configureStore } from "@reduxjs/toolkit";
import optionsSlice from "./optionsSlice";

export const store = configureStore({
  reducer: {
    optionsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
})
});
