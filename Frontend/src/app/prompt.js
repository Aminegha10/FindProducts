import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const products = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  endpoints: (builder) => ({
    getOneProduct: builder.query({
      query: (ref) => `/Products/getOneProduct/${ref}`,
    }),
  }),
});

// Export the auto‑generated hooks
export const { useGetOneProductQuery } = products;
