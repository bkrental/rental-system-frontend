import { DEFAULT_FILTER, SUPPORTED_PROPERTY_TYPES } from "@/constants/";
import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: DEFAULT_FILTER,

  reducers: {
    setKeyword: (state, action) => {
      state.keyword = action.payload;
    },
    setAddress: (state, action) => {
      state.address = Object.assign(state.address, action.payload);
    },
    setPrice: (state, action) => {
      state.price = Object.assign(state.price, action.payload);
    },
    setPropertyType: (state, action) => {
      state.property_type = action.payload;
    },
    togglePropertyType: (state, action) => {
      const propertyType = action.payload;

      if (state.property_type.includes(propertyType)) {
        state.property_type = state.property_type.filter(
          (type) => type !== propertyType && type !== "all"
        );
      } else {
        state.property_type.push(propertyType);
      }
    },
    clearFilter: () => {
      return DEFAULT_FILTER;
    },
  },
});

export const {
  setKeyword,
  setAddress,
  setPrice,
  setPropertyType,
  togglePropertyType,
  clearFilter,
} = filterSlice.actions;
export default filterSlice.reducer;
