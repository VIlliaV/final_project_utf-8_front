import { axiosInstance } from 'redux/auth/authOperations';
import { createAsyncThunk } from '@reduxjs/toolkit';

//* FETCH: get current shopping list
export const shoppingListGet = createAsyncThunk('shopping/get', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const { token } = state.auth;
  if (token === null) {
    return thunkAPI.rejectWithValue();
  }

  try {
    const response = await axiosInstance.get('/shopping-list');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

//* FETCH: add to shopping list
export const shoppingListAdd = createAsyncThunk('shopping/add', async (addIngredient, thunkAPI) => {
  const state = thunkAPI.getState();
  const { token } = state.auth;
  if (token === null) {
    return thunkAPI.rejectWithValue();
  }

  try {
    const {
      id: { _id: ingredientId },
      measure,
      uniqId,
      recipeId,
    } = addIngredient;

    // відправка у шопінг лист на бек:
    const requestBody = {
      ingredientId,
      measure,
      uniqId,
      recipeId,
    };

    await axiosInstance.post(`/shopping-list`, requestBody);
    return addIngredient; // повертаю у action.payload на addFulfilled у slice
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

//* FETCH: remove from shopping list
export const shoppingListRemove = createAsyncThunk('shopping/remove', async (uniqId, thunkAPI) => {
  const state = thunkAPI.getState();
  const { token } = state.auth;
  if (token === null) {
    return thunkAPI.rejectWithValue();
  }

  try {
    await axiosInstance.patch(`/shopping-list`, { uniqId });
    return uniqId; // повертаю у action.payload на removeFulfilled
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
