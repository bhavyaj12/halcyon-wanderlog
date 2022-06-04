import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchUserProfileService,
  fetchUserPostsService,
  updateUserProfileService,
} from "services";

export const fetchUserProfile = createAsyncThunk(
  "auth/fetchUserProfile",
  async ({ username }, { rejectWithValue }) => {
    console.log("from fetch user profile", username);
    try {
      const { data } = await fetchUserProfileService(username);
      const { user } = data;
      console.log("fetchUserProfile", user);
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUserPosts = createAsyncThunk(
  "posts/fetchUserPosts",
  async ({ username }, { rejectWithValue }) => {
    console.log(username);
    try {
      const { data } = await fetchUserPostsService(username);
      const { posts } = data;
      console.log("From fetchUserPosts thunk", data);
      return posts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUserProfile = createAsyncThunk(
  "auth/updateUserProfile",
  async ({ token, userData }, { rejectWithValue }) => {
    console.log("from update user profile", token, userData);
    try {
      const { data } = await updateUserProfileService(token, userData);
      const { user } = data;
      console.log(user);
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
