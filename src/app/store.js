import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";

// Globel store setup
export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
