import { apiSlice } from "@api/apiSlice";

export const postApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (query = {}) => ({
        url: "/posts",
        method: "GET",
        query,
      }),
    }),
    getPostbyId: builder.query({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "GET",
      }),
    }),
  })
});

export const { useGetPostsQuery, useGetPostbyIdQuery } = postApiSlice;