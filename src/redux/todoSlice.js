import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
    name: 'todos',

    initialState: {
        items: [],
        currentTodo: null
    },

    reducers: {
        addTodo: (state, action) => {
            state.items.push(action.payload);
        },
        deleteTodo: (state, action) => {
            state.items = state.items.filter(todo => todo.id !== action.payload);
        },
        currentTodo: (state, action) => {
            state.currentTodo = action.payload;
        },
        changeTodo: (state, action) => {
            const todo = state.items.find(todo => todo.id === action.payload.id);
            todo.text = action.payload.newText;

            state.currentTodo = null;
        }
    }
});

export const { addTodo, deleteTodo, changeTodo, currentTodo } = slice.actions;

export default slice.reducer;