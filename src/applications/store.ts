"use client";
import inputValueReducer from "@/applications/inputSlice/inputValueSlice";
import todoReducer from "@/applications/todoSlice/todoSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    inputValue: inputValueReducer,
    todos: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;

export default store;
