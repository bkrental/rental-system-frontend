import { createSlice } from "@reduxjs/toolkit";

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
      if (btnClicked == "tenant") {
        if (curBtnVar.tenant.status == "non-active") {
          state = {
            ...state,
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
        } else {
          state = {
            ...state,
            curBtnVar: {
              tenant: {
                type: "text",
                status: "non-active",
              },
              landlord: {
                type: "contained",
                status: "active",
              },
            }
          };
        }
      } else if (btnClicked == "landlord") {
        if (curBtnVar.landlord.status == "non-active") {
          state = {
            ...state,
            curBtnVar: {
              tenant: {
                type: "text",
                status: "non-active",
              },
              landlord: {
                type: "contained",
                status: "active",
              },
            }
          };
        } else {
          state = {
            ...state,
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
          };
        }
      }
    }
  }
});

export const {
  changeBtnVar
} = headerSlice.actions;
export default headerSlice.reducer;