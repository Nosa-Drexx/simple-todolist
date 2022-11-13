import { createSlice } from "@reduxjs/toolkit";

export const _STORAGE = "_STORAGE-todoLists";

const arr = [];

const updateDataBase = async (data) => {
  const dataOBJ = {
    method: "POST",
  };
  fetch(`http://localhost:8080/update/:${JSON.stringify(data)}`, dataOBJ);
};

const initialState = { AllState: arr, searchState: arr };

export const todolistSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    receivedDataFromAPI: (states, action) => {
      states.AllState = action.payload;
      states.searchState = action.payload;
    },
    add: (states, action) => {
      const state = states.AllState;
      state.unshift(action.payload);
      updateDataBase(state);
    },
    remove: (states, action) => {
      const state = states.AllState;
      for (let i = 0; i < state.length; i++) {
        if (String(action.payload.id) === String(state[i].id))
          state.splice(i, 1);
      }
      updateDataBase(state);
    },
    edit: (states, action) => {
      const state = states.AllState;
      for (let i = 0; i < state.length; i++) {
        if (String(action.payload.id) === String(state[i].id))
          state[i].todo = action.payload.todo;
      }
      updateDataBase(state);
    },
    done: (states, action) => {
      const state = states.AllState;
      for (let i = 0; i < state.length; i++) {
        if (String(action.payload.id) === String(state[i].id))
          state[i].completed = !state[i].completed;
      }
      updateDataBase(state);
    },
    search: (states, action) => {
      states.searchState = action.payload;
    },
  },
});
