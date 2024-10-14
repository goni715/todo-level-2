import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1"}),
  tagTypes: ['Todos'],
  endpoints: (builder)=> ({
    getTodos: builder.query({
        query: (priority) => ({
            url: `/todo/get-todos?priority=${priority}`,
            method: 'GET'
        }),
        providesTags: ['Todos']
    }),
    addTodo: builder.mutation({
      query: (data) => ({ //return
          url: '/todo/create-todo',
          method: 'POST',
          body: data
      }),
      invalidatesTags: ['Todos']
  })
  })
});

export const { useGetTodosQuery, useAddTodoMutation } = baseApi;