import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  userMode: "tenant",
}

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    changeUserMode: (state, action) => {
      state.userMode = action.payload;
    }
  }
});

export const {
  changeUserMode
} = headerSlice.actions;
export default headerSlice.reducer;
