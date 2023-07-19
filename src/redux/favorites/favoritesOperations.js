import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from 'redux/auth/authOperations';

export const fetchFavorites = createAsyncThunk('favorite/get', async (currentPage, thunkAPI) => {
  try {
    const response = await axiosInstance.get(`/favorite?page=${currentPage}`);
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
