import { createSlice } from "@reduxjs/toolkit";

export const _STORAGE = "_STORAGE-todoLists";

const arr = localStorage.getItem(_STORAGE)
  ? JSON.parse(localStorage.getItem(_STORAGE))
  : [{ todo: "Test: Nothing To Do", id: 123, completed: false }]; // serving as fake database

const initialState = { AllState: arr, searchState: arr };

export const todolistSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (states, action) => {
      const state = states.AllState;
      state.unshift(action.payload);
    },
    remove: (states, action) => {
      const state = states.AllState;
      for (let i = 0; i < state.length; i++) {
        if (String(action.payload.id) === String(state[i].id))
          state.splice(i, 1);
      }
    },
    edit: (states, action) => {
      const state = states.AllState;
      for (let i = 0; i < state.length; i++) {
        if (String(action.payload.id) === String(state[i].id))
          state[i].todo = action.payload.todo;
      }
    },
    done: (states, action) => {
      const state = states.AllState;
      for (let i = 0; i < state.length; i++) {
        if (String(action.payload.id) === String(state[i].id))
          state[i].completed = !state[i].completed;
      }
    },
    search: (states, action) => {
      states.searchState = action.payload;
    },
  },
});
