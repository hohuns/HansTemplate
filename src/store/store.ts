import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./uiSlice";

//Create the store
const store = configureStore({
  reducer: { ui: uiSlice },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
