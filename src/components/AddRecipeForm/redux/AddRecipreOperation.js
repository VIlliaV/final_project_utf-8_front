import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://final-project-utf-8-backend.onrender.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

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
  setAuthHeader(token);
  try {
    const response = await axios.get('/recipes/category-list');
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
  setAuthHeader(token);
  try {
    const response = await axios.get('/ingredients/list');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
