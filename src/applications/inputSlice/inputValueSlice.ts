"use client";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface InputValueState {
  value: string;
}

const initialState: InputValueState = {
  value: "", // No localStorage, default value is an empty string
};

export const inputValueSlice = createSlice({
  name: "inputValue",
  initialState,
  reducers: {
    setInputValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload; // Update the state value
    },
  },
});

export const { setInputValue } = inputValueSlice.actions;
export default inputValueSlice.reducer;
