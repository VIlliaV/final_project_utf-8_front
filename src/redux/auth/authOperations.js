import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const axiosInstance = axios.create({
  baseURL: 'https://final-project-utf-8-backend.onrender.com/',
});

const clearAuthHeader = () => {
  axiosInstance.defaults.headers.common['Authorization'] = '';
  localStorage.removeIFtem('accessToken');
  localStorage.removeItem('refreshToken');
};

axiosInstance.interceptors.request.use(
  config => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers = { Authorization: `Bearer ${accessToken}` };
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    if (error.response.status === 401) {
      const refreshToken = localStorage.getItem('refreshToken');
      try {
        const { data } = await axiosInstance.post('/users/refresh', { refreshToken });
        axiosInstance.headers = { Authorization: `Bearer ${data.accessToken}` };
        localStorage.setItem('refreshToken', data.refreshToken);
        localStorage.setItem('accessToken', data.accessToken);
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
    axiosInstance.headers = { Authorization: `Bearer ${response.data.accessToken}` };
    localStorage.setItem('accessToken', response.data.accessToken);
    localStorage.setItem('refreshToken', response.data.refreshToken);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const loginUser = createAsyncThunk('users/login', async (credentials, thunkAPI) => {
  try {
    const response = await axiosInstance.post('/users/login', credentials);
    axiosInstance.headers = { Authorization: `Bearer ${response.data.accessToken}` };
    localStorage.setItem('accessToken', response.data.accessToken);
    localStorage.setItem('refreshToken', response.data.refreshToken);
    return response.data;
  } catch (error) {
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
  try {
    const response = await axiosInstance.get('/users/current');
    return response.data;
  } catch (error) {
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
  const accessToken = localStorage.getItem('accessToken');

  axiosInstance.headers = {
    Authorization: `Bearer ${accessToken}`,
    ContentType: 'multipart/form-data',
  };
  try {
    const response = await axiosInstance.patch('users/update', data);
    axiosInstance.headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    return response.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});
