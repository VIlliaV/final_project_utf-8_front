import { axiosInstance } from 'redux/auth/authOperations';
import { createAsyncThunk } from '@reduxjs/toolkit';

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
export const addIngredientRecipe = createAsyncThunk('/addRecipes/addIngredient', async (text, thunkAPI) => {
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
  const state = thunkAPI.getState();
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
