import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "/api",
  prepareHeaders: (headers, { getState }) => {
    // Retrieve from local storage
    const authData = localStorage.getItem("auth");
    if (authData) {
      try {
        const parsed = JSON.parse(authData);
        if (parsed?.access) {
          headers.set("authorization", `Bearer ${parsed.access}`);
        }
      } catch (e) {
        // Ignore parsing errors
      }
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
