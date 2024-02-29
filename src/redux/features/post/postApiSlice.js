import { apiSlice } from "@api/apiSlice";

export const postApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => ({
        url: "/posts",
        method: "GET",
      }),
    })
  })
});

export const { useGetPostsQuery } = postApiSlice;