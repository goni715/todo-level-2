import { configureStore } from '@reduxjs/toolkit'
import todoSliceReducer from '../features/todo/todoSlice'
import { baseApi } from '../features/api/api'

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath] : baseApi.reducer,
    todo: todoSliceReducer
  },
  //devTools: false, for production
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware)
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch