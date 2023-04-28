import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
  dashboardIndex: number;
  theme: string;
};

const initialState: initialState = {
  dashboardIndex: 0,
  theme: "themeLight",
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    updateDashboardIndex(state, action: PayloadAction<number>) {
      state.dashboardIndex = action.payload;
    },
    updateTheme(state, action: PayloadAction<string>) {
      state.theme = action.payload;
    },
    reset: () => initialState,
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
