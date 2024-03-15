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
      console.log(action.payload);
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

    toggleDistrict: (state, action) => {
      const district = action.payload;

      console.log(district);
      if (state.address.districts.includes(district)) {
        state.address.districts = state.address.districts.filter(
          (d) => d !== district && d !== "all"
        );
      } else {
        state.address.districts.push(district);
      }
    },
  },
});

export const {
  setKeyword,
  setAddress,
  setPrice,
  setPropertyType,
  togglePropertyType,
  toggleDistrict,
  clearFilter,
} = filterSlice.actions;
export default filterSlice.reducer;
