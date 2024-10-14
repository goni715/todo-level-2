import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1"}),
  endpoints: (builder)=> ({
    getTodos: builder.query({
        query: () => ({
            url: '/todo/get-todos',
            method: 'GET'
        })
    }),
    addTodo: builder.mutation({
      query: (data) => ({
          url: '/todo/create-todo',
          method: 'POST',
          body: data
      })
  })
  })
});

export const { useGetTodosQuery, useAddTodoMutation } = baseApi;