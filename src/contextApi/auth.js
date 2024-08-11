import { createSlice } from "@reduxjs/toolkit";
const initialToken = localStorage.getItem("idToken");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    idToken: initialToken || null,
    error: null,
    verify: true,
  },
  reducers: {
    login(state, action) {
      state.idToken = action.payload;

      localStorage.setItem("idToken", action.payload);
    },
    logout(state) {
      state.idToken = null;
      localStorage.removeItem("idToken");
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setVerify(state, action) {
      state.verify = action.payload;
    },
  },
});

export const { login, logout, setError, setVerify } = authSlice.actions;

export default authSlice.reducer;
