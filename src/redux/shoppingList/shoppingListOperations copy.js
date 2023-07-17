// import axios from 'axios';
import { axiosInstance } from 'redux/auth/authOperations';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { shoppingListGetLocal } from './shoppingListSlice';
// import { useSelector } from 'react-redux';
// import { shoppingList } from 'redux/shoppingList/shoppingListSelectors';

// axiosInstance.defaults.baseURL = 'https://final-project-utf-8-backend.onrender.com/';

// const setAuthHeader = token => {
//   axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

//* FETCH: get current shopping list
export const shoppingListGet = createAsyncThunk('shopping/get', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const { token } = state.auth;
  if (token === null) {
    return thunkAPI.rejectWithValue();
  }
  // setAuthHeader(token);

  // if (state.shoppingList.shoppingListSliceState.length <= 0) {
  // console.log('shoppingListSliceState.length <= 0');
  try {
    const response = await axiosInstance.get('/shopping-list');
    return response.data; // [] - масив з бекенду (він не пустий)
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
  // } else {
  // console.log('shoppingListSliceState.length > 0!!!');
  // return state.shoppingList.shoppingListSliceState; // масив з редакс-стор
  // }
});

//* FETCH: add to shopping list
export const shoppingListAdd = createAsyncThunk('shopping/add', async (newIngredient, thunkAPI) => {
  const state = thunkAPI.getState();
  const { token } = state.auth;
  if (token === null) {
    return thunkAPI.rejectWithValue();
  }
  // setAuthHeader(token);

  try {
    // const {
    //   measure,
    //   id,
    //   _id: { _id, desc, img, name },
    // } = newIngredient;

    // const ingredientToAdd = {
    //   measure,
    //   id,
    //   _id: {
    //     _id,
    //     desc,
    //     img,
    //     name,
    //   },
    // };

    // const requestBody = {
    //   ingredientId: _id,
    //   measure,
    //   identId: id,
    // };

    // console.log(requestBody);
    // await axiosInstance.post(`/shopping-list`, requestBody);
    // return ingredientToAdd;

    const response = await axiosInstance.post(`/shopping-list`, newIngredient);

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

//* FETCH: remove from shopping list
export const shoppingListRemove = createAsyncThunk('shopping/remove', async (ingredientId, thunkAPI) => {
  const state = thunkAPI.getState();
  const { token } = state.auth;
  if (token === null) {
    return thunkAPI.rejectWithValue();
  }
  // setAuthHeader(token);

  try {
    const response = await axiosInstance.patch(`/shopping-list`, { id: ingredientId });

    console.log('shoppingListRemove >> response.data;:', response.data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
