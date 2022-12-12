import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export interface Todo {
  id: string;
  message: string;
  completed: boolean;
}

export const todoSlice = createSlice({
  name: "todo",
  initialState: [] as Todo[],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: uuid(),
        message: action.payload,
        completed: false,
      });
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    completeTodo: (state, action) => {
      const completeTodo: any = state.find((todo) => todo.id === action.payload);
      completeTodo.completed = !completeTodo.completed;
      return state;
    },
    sort: (state) => {
      state.sort((a, b) => a.message.localeCompare(b.message));
    },
  },
});
