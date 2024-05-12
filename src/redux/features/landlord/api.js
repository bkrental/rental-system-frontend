import baseQueryWithAuth from "@/redux/baseQueryWithAuth";
import { transformPropertiesResponse } from "@/redux/transform";
import { createApi } from "@reduxjs/toolkit/query/react";

export const landlordApi = createApi({
  reducerPath: "landlord",
  baseQuery: baseQueryWithAuth,
  endpoints: (builder) => ({
    getMyProperties: builder.query({
      query: () => ({
        url: "/posts/me",
      }),
      transformResponse: transformPropertiesResponse,
    }),
  }),
});

export const { useGetMyPropertiesQuery } = landlordApi;
