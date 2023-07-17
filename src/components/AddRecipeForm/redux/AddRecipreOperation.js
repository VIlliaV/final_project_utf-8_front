import axios from 'axios';
import { axiosInstance } from 'redux/auth/authOperations';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addTitle = createAsyncThunk('/addRecipes/addTitle', async (text, thunkAPI) => {
  const state = thunkAPI.getState().addRecipePage;
  return (state.title = text);
});

export const addPreparation = createAsyncThunk('/addRecipes/addInstructions', async (text, thunkAPI) => {
  const state = thunkAPI.getState().addRecipePage;
  return (state.instructions = text);
});

export const addAbout = createAsyncThunk('/addRecipes/addAbout', async (text, thunkAPI) => {
  const state = thunkAPI.getState().addRecipePage;
  return (state.description = text);
});

export const addСategory = createAsyncThunk('/addRecipes/addCategory', async (text, thunkAPI) => {
  const state = thunkAPI.getState().addRecipePage;
  return (state.category = text);
});

export const addTime = createAsyncThunk('/addRecipes/addTime', async (text, thunkAPI) => {
  const state = thunkAPI.getState().addRecipePage;
  return (state.time = text);
});

export const getCategories = createAsyncThunk('/addRecipes', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const { token } = state.auth;
  if (token === null) {
    return thunkAPI.rejectWithValue();
  }

  try {
    const response = await axiosInstance.get('/recipes/category-list');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getIngredients = createAsyncThunk('/addRecipes/getIngredients', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const { token } = state.auth;
  if (token === null) {
    return thunkAPI.rejectWithValue();
  }

  try {
    const response = await axiosInstance.get('/ingredients/list');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getPopular = createAsyncThunk('/addRecipes/getPopular', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const { token } = state.auth;
  if (token === null) {
    return thunkAPI.rejectWithValue();
  }

  try {
    const response = await axiosInstance.get('/popular-recipe');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
