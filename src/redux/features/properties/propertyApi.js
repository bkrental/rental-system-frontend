import { transformPropertiesResponse } from "@/redux/transform";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const propertyApi = createApi({
  reducerPath: "properties",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_RENTAL_SERVICE_BACKEND_ENDPOINT }),
  endpoints: (builder) => ({
    getProperties: builder.query({
      query: (queryObject) => ({
        url: "/posts",
        params: { ...queryObject },
      }),
      transformResponse: transformPropertiesResponse,
    }),

    getPropertyById: builder.query({
      query: (id) => ({
        url: `/posts/${id}`,
      }),
      transformResponse: (res) => res.data,
    }),
  }),
});

export const { useGetPropertiesQuery, useGetPropertyByIdQuery } = propertyApi;
