const { createSlice } = require("@reduxjs/toolkit");

const systemSlice = createSlice({
  name: "system",
  initialState: {
    isChatOpened: false,
  },
  reducers: {
    toggleChat: (state) => {
      state.isChatOpened = !state.isChatOpened;
    },
  },
});

export const { toggleChat } = systemSlice.actions;
export default systemSlice.reducer;
