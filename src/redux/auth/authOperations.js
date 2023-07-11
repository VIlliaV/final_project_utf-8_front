import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


axios.defaults.baseURL = 'https://final-project-utf-8-backend.onrender.com/';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const signupUser = createAsyncThunk('users/register', async ({ name, email, password }, thunkAPI) => {
    try {
        const response = await axios.post('/users/register', {
            name,
            email,
            password,
        });
        setAuthHeader(response.data.token);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});


export const loginUser = createAsyncThunk('users/login', async (credentials, thunkAPI) => {
    try {
        const response = await axios.post('/users/login', credentials);
        setAuthHeader(response.data.token);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});


export const logoutUser = createAsyncThunk('users/logout', async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout');
        clearAuthHeader();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const fetchCurrentUser = createAsyncThunk('users/current', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const {token} = state.auth;
    if (token === null) {
        return thunkAPI.rejectWithValue();
    }
    setAuthHeader(token);
    try {
        const response = await axios.get('/users/current');
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});