import { axiosInstance } from 'redux/auth/authOperations';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { shoppingListGetLocal } from './shoppingListSlice';

//* FETCH: get current shopping list

export const shoppingListGet = createAsyncThunk('shopping/get', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const { token } = state.auth;
  if (token === null) {
    return thunkAPI.rejectWithValue();
  }

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

  try {
    const {
      id: { _id: ingredientId, desc, img, name },
      measure,
      _id: uniqId,
      recipeId,
    } = newIngredient;

    const requestBody = {
      ingredientId,
      measure,
      uniqId,
      recipeId, //?
    };

    await axiosInstance.post(`/shopping-list`, requestBody);
    return newIngredient;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

//* FETCH: remove from shopping list
export const shoppingListRemove = createAsyncThunk('shopping/remove', async (ingredientId, thunkAPI) => {
  try {
    const response = await axiosInstance.patch(`/shopping-list`, { id: ingredientId });

    console.log('shoppingListRemove >> response.data;:', response.data);

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
