import { axiosInstance } from 'redux/auth/authOperations';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

export const addImage = createAsyncThunk('/addRecipes/addImage', async (data, thunkAPI) => {
  return data;
});

export const changeStatus = createAsyncThunk('/addRecipes/addImage', async (data, thunkAPI) => {
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
    return toast.error(error?.response.data.message);
  }
});

export const getIngredients = createAsyncThunk('/addRecipes/getIngredients', async (_, thunkAPI) => {
  try {
    const response = await axiosInstance.get('/ingredients/list');
    return response.data;
  } catch (error) {
    return toast.error(error?.response.data.message);
  }
});

export const getPopular = createAsyncThunk('/addRecipes/getPopular', async (_, thunkAPI) => {
  try {
    const response = await axiosInstance.get('/popular-recipe');
    return response.data;
  } catch (error) {
    return toast.error(error?.response.data.message);
  }
});

export const addRecipe = createAsyncThunk('/addRecipes/addRecipe', async recipe => {
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
    return toast.error(error?.response.data.message);
  }
});
