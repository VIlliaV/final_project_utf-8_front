import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://final-project-utf-8-backend.onrender.com/';

export const fetchFavorites = createAsyncThunk('favorite/get', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/favorite');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteFavorite = createAsyncThunk('favorite/delete', async (idRecipe, thunkAPI) => {
  try {
    const response = await axios.patch('/favorite', { id: idRecipe });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
