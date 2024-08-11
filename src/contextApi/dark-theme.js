import { createSlice } from "@reduxjs/toolkit";

const initialState = { darkMode: false };

const darkThemeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    setDarkMode(state) {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { setDarkMode } = darkThemeSlice.actions;
export default darkThemeSlice.reducer;
