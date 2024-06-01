const { createSlice } = require("@reduxjs/toolkit");

const systemSlice = createSlice({
  name: "system",
  initialState: {
    isChatOpened: false,
  },
  reducers: {
    toggleChatWidget: (state) => {
      state.isChatOpened = !state.isChatOpened;
    },
  },
});

export const { toggleChatWidget } = systemSlice.actions;
export default systemSlice.reducer;
