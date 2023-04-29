import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

let todos = 'http://localhost:8000/api/'

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get(todos);
  return response.data;
});

export const createTodo = createAsyncThunk('todos/createTodo', async (todoData) => {
  const response = await axios.post(todos, todoData);
  return response.data;
});

export const updateTodo = createAsyncThunk('todos/updateTodo', async (todoData) => {
  const response = await axios.put(`${todos}/${todoData.id}`, todoData);
  return response.data;
});

const todosSlice = createSlice({
  name: 'todos',
  initialState: { items: [] },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        const updatedTodo = action.payload;
        const index = state.items.findIndex(todo => todo.id === updatedTodo.id);
        state.items[index] = updatedTodo;
      });
  }
});

export default todosSlice.reducer;
