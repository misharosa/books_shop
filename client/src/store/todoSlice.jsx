import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

const URL_API = "http://localhost:3001"

export const fetchTodos = createAsyncThunk(
    'goods/fetchTodos',
    async ( _ , {rejectWithValue}) => {
        try {
        const { data } = await axios(`${URL_API}`)
            console.log('im redux data', data)
        return data
        } catch (error) {
           return rejectWithValue(error.message);
        }
    }
)

const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload
}

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: JSON.parse(sessionStorage.getItem('todos')) || [] ,
        status: null,
        error: null,
    },
    reducers: {
        addTodo (state, action) {
            state.todos.push({...action.payload, id: new Date().toISOString()})
        },
    },

    extraReducers: {
        [fetchTodos.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchTodos.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.todos = action.payload;
        },
        [fetchTodos.rejected]: setError,
    }
})

const { addTodo, removeTodo, toggleTodoComplete } = todoSlice.actions
export default todoSlice.reducer