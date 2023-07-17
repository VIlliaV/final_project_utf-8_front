import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const axiosInstance = axios.create({
  baseURL: 'https://final-project-utf-8-backend.onrender.com/',
});

axios.defaults.baseURL = 'https://final-project-utf-8-backend.onrender.com/';

const setAuthHeader = token => {
  axiosInstance.defaults.headers.common.authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axiosInstance.defaults.headers.common.authorization = '';
};

axiosInstance.interceptors.request.use(config => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    config.headers.common.authorization = `Bearer ${accessToken}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401) {
      const refreshToken = localStorage.getItem('refreshToken');
      try {
        const { data } = await axiosInstance.post('/users/refresh', { refreshToken });
        setAuthHeader(data.accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        return axiosInstance(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export const signupUser = createAsyncThunk('users/register', async ({ name, email, password }, thunkAPI) => {
  try {
    const response = await axiosInstance.post('/users/register', {
      name,
      email,
      password,
    });
    setAuthHeader(response.data.accessToken);
    localStorage.setItem('refreshToken', response.data.refreshToken);
    // setAuthHeader(response.data.token);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const loginUser = createAsyncThunk('users/login', async (credentials, thunkAPI) => {
  try {
    const response = await axiosInstance.post('/users/login', credentials);
    // setAuthHeader(response.data.token);
    setAuthHeader(response.data.accessToken);
    localStorage.setItem('refreshToken', response.data.refreshToken);
    return response.data;
  } catch (error) {
    // console.log(error.response.data.message)
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const logoutUser = createAsyncThunk('users/logout', async (_, thunkAPI) => {
  try {
    await axiosInstance.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchCurrentUser = createAsyncThunk('users/current', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const { accessToken } = state.auth;
  if (accessToken === null) {
    return thunkAPI.rejectWithValue();
  }
  // setAuthHeader(accessToken);
  try {
    const response = await axiosInstance.get('/users/current');

    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      clearAuthHeader();
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const themeToggle = createAsyncThunk('users/theme', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const { isThemeToggle } = state.auth;
  if (isThemeToggle === false) {
    return { isThemeToggle: true };
  }
  return { isThemeToggle: false };
});

export const updateUser = createAsyncThunk('users/update', async (data, thunkAPI) => {
  // const state = thunkAPI.getState();
  // const { name: currentName, avatarURL: currentAvatar } = state.auth.user;

  console.log(data);

  // const { name = currentName, file = currentAvatar } = data;
  try {
    const response = await axiosInstance.patch('users/update', data);
    return response.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});
