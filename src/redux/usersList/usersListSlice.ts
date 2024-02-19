import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk(
  'userList/fetchUsers',
  async (token: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}users`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
interface User {
  username: string;
  email: string;
  isAdmin: boolean;
  img: string;
}

interface UsersListState {
  users: User[] | [];
  isLoading: boolean;
  error: boolean;
}

const initialState: UsersListState = {
  users: [],
  isLoading: false,
  error: false,
};

const usersListSlice = createSlice({
  name: 'usersList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      const isLoading = true;
      const error = false;
      return { ...state, isLoading, error };
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      const users = action.payload;
      const isLoading = false;
      return { ...state, users, isLoading };
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      const error = true;
      const isLoading = false;
      return { ...state, error, isLoading };
    });
  },
});

export default usersListSlice.reducer;
