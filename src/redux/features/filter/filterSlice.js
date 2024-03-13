import { SUPPORTED_PROPERTY_TYPES } from "@/constants/";
import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    keyword: "",
    address: {
      province: "Ho Chi Minh City",
      district: "District 10",
      ward: "Ward 7",
    },
    price: {
      min: 0,
      max: 0,
    },
    property_type: [],
  },

  reducers: {
    setKeyword: (state, action) => {
      state.keyword = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setPrice: (state, action) => {
      state.price = Object.assign(state.price, action.payload);
    },
    setPropertyType: (state, action) => {
      state.property_type = action.payload;
      console.log(action.payload);
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
  },
});

export const {
  setKeyword,
  setAddress,
  setPrice,
  setPropertyType,
  togglePropertyType,
} = filterSlice.actions;
export default filterSlice.reducer;
