import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TTodo = {
    id: string;
    title: string;
    description: string;
    priority: string;
    isCompleted: boolean
}

type TEditTodo = {
    id: string;
    title: string;
    description: string;
    priority: string;
}

type TInitialState = {
    Todos: TTodo[],
    todos: TTodo[],
    id: string;
    title: string;
    description: string;
    priority: string;
    modalOpen: boolean;
}



const initialState: TInitialState = {
  Todos : [],
  todos : [],
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
            state.Todos = [{...action.payload}, ...state.Todos]
            state.todos = [{...action.payload}, ...state.todos]
        },
        removeTodo: (state, action : PayloadAction<string>) => {
            state.Todos = state.Todos.filter((cv)=>cv.id !== action.payload);
            state.todos = state.todos.filter((cv)=>cv.id !== action.payload);
        },
        toggleCompleted: (state, action : PayloadAction<string>) => {
            const CurrentTodo = state.Todos.find((cv)=>cv.id == action.payload);
            const currentTodo = state.todos.find((cv)=>cv.id == action.payload);
            //currentTodo!.isCompleted = !currentTodo?.isCompleted;
            if(CurrentTodo && currentTodo){
              CurrentTodo.isCompleted = !CurrentTodo?.isCompleted;
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
        },
        editTodo: (state, action : PayloadAction<TEditTodo>) => {
            const { id, title, description, priority } = action.payload;
            const CurrentTodo = state.Todos.find((cv)=>cv.id == id);
            const currentTodo = state.todos.find((cv)=>cv.id == id);
            //The Non-null Assertion (!)
            // The non-null assertion operator (!) is being used here to tell TypeScript that you are certain currentTodo is not null or undefined.
            CurrentTodo!.title = title; //undefined shortcut
            CurrentTodo!.description = description;
            CurrentTodo!.priority = priority;
            currentTodo!.title = title; //undefined shortcut
            currentTodo!.description = description;
            currentTodo!.priority = priority;
        },
        FilterTodos:(state,action: PayloadAction<string>)=>{
            if(action.payload==="all"){
                state.todos=state.Todos;
            }
            else{
                state.todos = state.Todos.filter((cv) => cv.priority === action.payload);
            }
        },
    }
})





export const { addTodo, removeTodo, toggleCompleted,SetModalOpen, SetId, SetTitle, SetDescription, SetPriority, editTodo, FilterTodos } = todoSlice.actions;

const todoSliceReducer = todoSlice.reducer;
export default todoSliceReducer;