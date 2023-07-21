import { axiosInstance } from 'redux/auth/authOperations';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

export const changeStatus = createAsyncThunk('/addRecipes/changeStatus', async (data, thunkAPI) => {
  return data;
});

export const getCategories = createAsyncThunk('/addRecipes/getCategories', async (_, thunkAPI) => {
  try {
    const response = await axiosInstance.get('/recipes/category-list');
    return response.data;
  } catch (error) {
    toast.error(error?.response.data.message);
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const getIngredients = createAsyncThunk('/addRecipes/getIngredients', async (_, thunkAPI) => {
  try {
    const response = await axiosInstance.get('/ingredients/list');
    return response.data;
  } catch (error) {
    toast.error(error?.response.data.message);
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const getPopular = createAsyncThunk('/addRecipes/getPopular', async (_, thunkAPI) => {
  try {
    const response = await axiosInstance.get('/popular-recipe');
    return response.data;
  } catch (error) {
    toast.error(error?.response.data.message);
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const addRecipe = createAsyncThunk('/addRecipes/addRecipe', async (recipe, thunkAPI) => {
  const accessToken = localStorage.getItem('accessToken');

  axiosInstance.headers = {
    Authorization: `Bearer ${accessToken}`,
    ContentType: 'multipart/form-data',
  };
  try {
    const response = await axiosInstance.post('/ownRecipes', recipe);
    axiosInstance.headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    return response.data;
  } catch (error) {
    toast.error(error?.response.data.message);
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});
