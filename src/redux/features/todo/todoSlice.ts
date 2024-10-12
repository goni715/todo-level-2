import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}


const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {

    }
})







const todoSliceReducer = todoSlice.reducer;
export default todoSliceReducer;