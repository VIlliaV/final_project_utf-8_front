import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from 'redux/auth/authOperations';

export const fetchFavorites = createAsyncThunk('favorite/get', async (_, thunkAPI) => {
  try {
    const response = await axiosInstance.get('/favorite');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteFavorite = createAsyncThunk('favorite/delete', async (idRecipe, thunkAPI) => {
  try {
    const response = await axiosInstance.patch('/favorite', { id: idRecipe });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
