import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchUserProfileService,
  fetchUserPostsService,
  updateUserProfileService,
} from "services";

export const fetchUserProfile = createAsyncThunk(
  "userProfile/fetchUserProfile",
  async ({ username }, { rejectWithValue }) => {
    try {
      const { data } = await fetchUserProfileService(username);
      const { user } = data;
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUserPosts = createAsyncThunk(
  "userProfile/fetchUserPosts",
  async ({ username }, { rejectWithValue }) => {
    try {
      const { data } = await fetchUserPostsService(username);
      const { posts } = data;
      return posts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUserProfile = createAsyncThunk(
  "userProfile/updateUserProfile",
  async ({ token, userData }, { rejectWithValue }) => {
    try {
      const { data } = await updateUserProfileService(token, userData);
      const { user } = data;
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState: {
    userProfile: {},
    userPosts: [],
  },
  reducers: {},
  extraReducers: {
    [fetchUserProfile.fulfilled]: (state, action) => {
      state.userProfile = action.payload;
    },
    [fetchUserPosts.fulfilled]: (state, action) => {
      state.userPosts = action.payload;
    },
    [updateUserProfile.fulfilled]: (state, action) => {
      state.userProfile = action.payload;
    },
  },
});

export const getUserProfile = (state) => state.userProfile;
export const userProfileReducer = userProfileSlice.reducer;
