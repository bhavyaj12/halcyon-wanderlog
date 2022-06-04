import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { updateUserProfile } from "./userProfileSlice";
import { editLoggedInUserProfile } from "./authSlice";
import {
  followUserService,
  unfollowUserService,
  fetchAllUsersService,
} from "services";

export const followUser = createAsyncThunk(
  "allUsers/followUser",
  async ({ token, userId, dispatch }, { rejectWithValue }) => {
    try {
      const { data } = await followUserService(token, userId);
      dispatch(updateUserProfile({ token: token, userData: data.user }));
      dispatch(editLoggedInUserProfile(data.user));
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const unfollowUser = createAsyncThunk(
  "allUsers/unfollowUser",
  async ({ token, userId, dispatch }, { rejectWithValue }) => {
    try {
      const { data } = await unfollowUserService(token, userId);
      dispatch(updateUserProfile({ token: token, userData: data.user }));
      dispatch(editLoggedInUserProfile(data.user));
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchAllUsers = createAsyncThunk(
  "allUsers/fetchAllUsers",
  async (rejectWithValue) => {
    try {
      const { data } = await fetchAllUsersService();
      const { users } = data;
      return users;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const allUsersSlice = createSlice({
  name: "allUsers",
  initialState: {
    users: [],
  },
  reducers: {},
  extraReducers: {
    [followUser.fulfilled]: (state, action) => {
      const { followUser } = action.payload;
      state.users = [...state.users].map((user) =>
        user._id === followUser._id ? followUser : user
      );
    },
    [unfollowUser.fulfilled]: (state, action) => {
      const { followUser } = action.payload;
      state.users = [...state.users].map((user) =>
        user._id === followUser._id ? followUser : user
      );
    },
    [fetchAllUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const getAllUsers = (state) => state.allUsers;
export const allUsersReducer = allUsersSlice.reducer;
