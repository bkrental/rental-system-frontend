import { apiSlice } from "@api/apiSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import createPostSlice from "./features/createPostSlice";
import { propertyApi } from "./features/properties/propertyApi";

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  [propertyApi.reducerPath]: propertyApi.reducer,
  auth: authSlice,
  createPost: createPostSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware).concat(propertyApi.middleware),
});
