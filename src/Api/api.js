import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "/api",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const api = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["users", "products"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: "/users/register",
        method: "POST",
        body: userData,
      }),
    }),
    getUsers: builder.query({
      query: () => "users",
      providesTags: ["users"],
    }),
    getProducts: builder.query({
      query: () => "products",
      providesTags: ["products"],
    }),
    getProduct: builder.query({
      query: (id) => `products/${id}`,
      providesTags: ["products"],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetUsersQuery,
  useGetProductsQuery,
  useGetProductQuery,
} = api;
