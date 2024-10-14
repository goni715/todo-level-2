import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1"}),
  tagTypes: ['Todos'],
  endpoints: (builder)=> ({
    getTodos: builder.query({
        query: (priority) => {
          const params = new URLSearchParams();
          if(priority){
            params.append('priority', priority);
          }
          return {
            url: `/todo/get-todos`,
            method: 'GET',
            params: params //params: {priority:priority}
          }
        }, 
        providesTags: ['Todos']
    }),
    addTodo: builder.mutation({
      query: (data) => ({ //return
          url: '/todo/create-todo',
          method: 'POST',
          body: data
      }),
      invalidatesTags: ['Todos']
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
          url: `/todo/delete-todo/${id}`,
          method: 'DELETE',
      }),
      invalidatesTags: ['Todos']
    })
  })
});

export const { useGetTodosQuery, useAddTodoMutation, useDeleteTodoMutation } = baseApi;