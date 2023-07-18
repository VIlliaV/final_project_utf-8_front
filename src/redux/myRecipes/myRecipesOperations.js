import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from 'redux/auth/authOperations';

export const fetchMyRecipes = createAsyncThunk('myRecipes/get', async (_, thunkAPI) => {
  try {
    const response = await axiosInstance.get('/myrecipes');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteMyRecipes = createAsyncThunk('myRecipes/delete', async (idRecipe, thunkAPI) => {
  try {
    const response = await axiosInstance.patch('/myrecipes', { id: idRecipe });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
