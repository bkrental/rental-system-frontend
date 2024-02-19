import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  curBtnVar: {
    tenant: {
      type: "contained",
      status: "active",
    },
    landlord: {
      type: "text",
      status: "non-active",
    },
  }
}

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    changeBtnVar: (state, action) => {
      const { btnClicked } = action.payload;
      const curBtnVar = state.curBtnVar;
      console.log("changeBtnVar called:", action.payload);
      console.log("curBtnVar called:", state);

      if (btnClicked == "tenant") {
        if (curBtnVar.tenant.status == "non-active") {
          state.curBtnVar = {
            tenant: {
              type: "contained",
              status: "active",
            },
            landlord: {
              type: "text",
              status: "non-active",
            },
          };
        }

      } else if (btnClicked == "landlord") {
        console.log("landlord clicked")
        if (curBtnVar.landlord.status == "non-active") {
          console.log("landlord non-active")
          state.curBtnVar = {
            tenant: {
              type: "text",
              status: "non-active",
            },
            landlord: {
              type: "contained",
              status: "active",
            },
          };
          console.log("landlord non-active", current(state))
        }
      }
    }
  }
});

export const {
  changeBtnVar
} = headerSlice.actions;
export default headerSlice.reducer;