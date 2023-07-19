import { axiosInstance } from 'redux/auth/authOperations';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addImage = createAsyncThunk('/addRecipes/addImage', async (data, thunkAPI) => {
  console.log('data', data);
  return data;
});

export const addTitle = createAsyncThunk('/addRecipes/addTitle', async (text, thunkAPI) => {
  return text;
});

export const addPreparation = createAsyncThunk('/addRecipes/addInstructions', async (text, thunkAPI) => {
  return text;
});

export const addAbout = createAsyncThunk('/addRecipes/addAbout', async (text, thunkAPI) => {
  return text;
});

export const addСategory = createAsyncThunk('/addRecipes/addCategory', async (text, thunkAPI) => {
  return text;
});

export const addTime = createAsyncThunk('/addRecipes/addTime', async (text, thunkAPI) => {
  return text;
});

export const getCategories = createAsyncThunk('/addRecipes/getCategories', async (_, thunkAPI) => {
  try {
    const response = await axiosInstance.get('/recipes/category-list');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getIngredients = createAsyncThunk('/addRecipes/getIngredients', async (_, thunkAPI) => {
  try {
    const response = await axiosInstance.get('/ingredients/list');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getPopular = createAsyncThunk('/addRecipes/getPopular', async (_, thunkAPI) => {
  try {
    const response = await axiosInstance.get('/popular-recipe');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addRecipe = createAsyncThunk('/addRecipes/getPopular', async (recipe, thunkAPI) => {
  const accessToken = localStorage.getItem('accessToken');

  axiosInstance.headers = {
    Authorization: `Bearer ${accessToken}`,
    ContentType: 'multipart/form-data',
  };
  try {
    // console.log('formData', recipe);
    const response = await axiosInstance.post('/ownRecipes', recipe);
    axiosInstance.headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
