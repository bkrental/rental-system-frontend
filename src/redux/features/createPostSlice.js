import { createSlice, current } from "@reduxjs/toolkit";

const createPostSlice = createSlice({
  name: "createPost",
  initialState: {
    basicInfo: {
      addressId: null,
      transactionType: "sale",
      displayedAddress: "",
      propertyType: "house",
      location: [],
      addressCompound: {},
    },
    postInfo: {
      title: "",
      description: "",
    },
    propertyInfo: {
      bedrooms: 0,
      bathrooms: 0,
      area: 0,
    },
  },
  reducers: {
    updateBasicInfoForm: (state, action) => {
      state.basicInfo = { ...state.basicInfo, ...action.payload };
    },

    updatePostInfoForm: (state, action) => {
      state.postInfo = { ...state.postInfo, ...action.payload };
    },

    updatePropertyInfo: (state, action) => {
      state.propertyInfo = { ...state.propertyInfo, ...action.payload };
    },

    setPostInfo: (state, action) => {
      const { title, description } = action.payload;
      state.title = title;
      state.description = description;
    },

    setPropertyInfo: (state, action) => {
      const { bedrooms, bathrooms, area } = action.payload;

      state.bedrooms = bedrooms;
      state.bathrooms = bathrooms;
      state.area = area;
    },
  },
});

export const { updateBasicInfoForm, updatePostInfoForm, updatePropertyInfo } =
  createPostSlice.actions;
export default createPostSlice.reducer;
