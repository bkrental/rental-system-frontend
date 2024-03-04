import { apiSlice } from "@api/apiSlice";

export const postApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (query = {}) => ({
        url: "/posts",
        method: "GET",
        query,
      }),
    })
  })
});

export const { useGetPostsQuery } = postApiSlice;