import { createSlice, current } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: null,
    user: null,
    isAuth: false,
  },
  reducers: {
    setUserInfo: (state, action) => {
      console.log("setUserInfo payload", action.payload);
      localStorage.setItem(
        "accessToken",
        JSON.stringify(action.payload.access_token)
      );

      state.user = action.payload.user;
      state.accessToken = action.payload.access_token;
      state.isAuth = true;
      console.log("current:", current(state));
    },
    removeUserInfo: (state, action) => {
      localStorage.removeItem("accessToken"); // Remove user from localStorage
      state.user = null;
      state.accessToken = null;
      state.isAuth = false;
    },
  },
});

export const { setUserInfo, removeUserInfo } = authSlice.actions;
export default authSlice.reducer;
