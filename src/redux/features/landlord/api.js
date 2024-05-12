import baseQueryWithAuth from "@/redux/baseQueryWithAuth";
import { transformPropertiesResponse } from "@/redux/transform";
import { createApi } from "@reduxjs/toolkit/query/react";

export const landlordApi = createApi({
  reducerPath: "landlord",
  baseQuery: baseQueryWithAuth,
  endpoints: (builder) => ({
    getMyProperties: builder.query({
      query: (queryObject) => ({
        url: "/posts/me",
        params: { ...queryObject },
      }),
      transformResponse: transformPropertiesResponse,
    }),

    deletePost: builder.mutation({
      query: (postId) => ({
        url: `/posts/${postId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetMyPropertiesQuery, useDeletePostMutation } = landlordApi;
