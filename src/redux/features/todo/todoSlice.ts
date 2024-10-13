import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TTodo = {
    id: string;
    title: string;
    description: string;
    priority: string;
    isCompleted: boolean
}

type TInitialState = {
    todos: TTodo[],
    id: string;
    title: string;
    description: string;
    priority: string;
    modalOpen: boolean;
}



const initialState: TInitialState = {
  todos: [],
  id: "",
  title: "",
  description: "",
  priority: "",
  modalOpen: false
};


const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action : PayloadAction<TTodo>) => {
            //state.todos.push({...action.payload, isCompleted: false})
            state.todos = [{...action.payload}, ...state.todos]
        },
        removeTodo: (state, action : PayloadAction<string>) => {
            state.todos = state.todos.filter((cv)=>cv.id !== action.payload);
        },
        toggleCompleted: (state, action : PayloadAction<string>) => {
            const currentTodo = state.todos.find((cv)=>cv.id == action.payload);
            //currentTodo!.isCompleted = !currentTodo?.isCompleted;
            if(currentTodo){
              currentTodo.isCompleted = !currentTodo?.isCompleted;
            }
            const completedTodos = state.todos.filter((cv)=>cv.isCompleted === true);
            const incompletedTodos = state.todos.filter((cv)=>cv.isCompleted === false);
            state.todos = [...incompletedTodos, ...completedTodos]
        },
        SetModalOpen: (state, action: PayloadAction<boolean>) => {
            state.modalOpen = action.payload;
        },
        SetId: (state, action: PayloadAction<string>) => {
            state.id = action.payload;
        },
        SetTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload;
        },
        SetDescription: (state, action: PayloadAction<string>) => {
            state.description = action.payload;
        },
        SetPriority: (state, action: PayloadAction<string>) => {
            state.priority = action.payload;
        }
    }
})





export const { addTodo, removeTodo, toggleCompleted,SetModalOpen, SetId, SetTitle, SetDescription, SetPriority } = todoSlice.actions;

const todoSliceReducer = todoSlice.reducer;
export default todoSliceReducer;