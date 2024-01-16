import { createApi, fakeBaseQuery, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const adminApi = createApi({
    reducerPath: "api",
    baseQuery: fakeBaseQuery(),
    tagTypes: ["tagName"],
    endpoints: (builder) => {
        return {
            getProducts: builder.query({
                queryFn: () => {

                },
                providesTags: ["tagName"]
            }),
            addUser: builder.mutation({
                query: userData => {
                    return {
                        url: "/apiEndPoint",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["tagName"]
            }),

        }
    }
})

export const { useGetUsersQuery, useAddUserMutation } = adminApi
