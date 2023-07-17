import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://final-project-utf-8-backend.onrender.com/';

export const getCategories = createAsyncThunk('/recipes/category-list', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/recipes/category-list');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
