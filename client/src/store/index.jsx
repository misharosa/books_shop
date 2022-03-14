import { configureStore, combineReducers } from "@reduxjs/toolkit"
import goodReducer from "./todoSlice"

const rootReducer = combineReducers({
    todos: goodReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})
