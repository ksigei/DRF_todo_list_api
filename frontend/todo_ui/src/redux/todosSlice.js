import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get('http://127.0.0.1:8000/api/');
  return response.data;
});

export const createTodo = createAsyncThunk('todos/createTodo', async todo => {
    const response = await axios.post('http://127.0.0.1:8000/api/todo/new', todo);
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
            }
        );
  }
});

export default todosSlice.reducer;
