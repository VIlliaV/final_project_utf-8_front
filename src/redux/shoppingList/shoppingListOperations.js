import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { shoppingListGetLocal } from './shoppingListSlice';
import { useSelector } from 'react-redux';
import { shoppingList } from 'redux/shoppingList/shoppingListSelectors';

axios.defaults.baseURL = 'https://final-project-utf-8-backend.onrender.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// FETCH: get current shopping list
export const shoppingListGet = createAsyncThunk('shopping/get', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const { token } = state.auth;
  if (token === null) {
    return thunkAPI.rejectWithValue();
  }
  setAuthHeader(token);

  try {
    const response = await axios.get('/shopping-list');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// FETCH: add to shopping list
export const shoppingListAdd = createAsyncThunk('shopping/add', async (newIngredient, thunkAPI) => {
  const state = thunkAPI.getState();
  const { token } = state.auth;
  if (token === null) {
    return thunkAPI.rejectWithValue();
  }
  setAuthHeader(token);

  try {
    const response = await axios.post(`/shopping-list`, newIngredient);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// FETCH: remove from shopping list
export const shoppingListRemove = createAsyncThunk('shopping/remove', async (idIngredient, thunkAPI) => {
  const state = thunkAPI.getState();
  const { token } = state.auth;
  if (token === null) {
    return thunkAPI.rejectWithValue();
  }
  setAuthHeader(token);

  try {
    const response = await axios.patch(`/shopping-list`, { id: idIngredient });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
