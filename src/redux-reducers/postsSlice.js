import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addPostService,
  deletePostService,
  fetchPostsService,
  editPostService,
  likePostService,
  dislikePostService,
} from "services";

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (token, { rejectWithValue }) => {
    try {
      const { data } = await fetchPostsService(token);
      const { posts } = data;
      console.log("From fetchPosts thunk", data);
      return posts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addPost = createAsyncThunk(
  "posts/addPost",
  async ({ token, postData }, { rejectWithValue }) => {
    try {
      const { data } = await addPostService(token, postData);
      const { posts } = data;
      console.log("From addPost thunk", data);
      return posts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editPost = createAsyncThunk(
  "posts/editPost",
  async ({ token, postData, postID }, { rejectWithValue }) => {
    console.log("from editpost thunk", token, postData, postID);
    try {
      const { data } = await editPostService(token, postData, postID);
      const { posts } = data;
      console.log("response From editPost thunk", data);
      return posts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async ({ token, postID }, { rejectWithValue }) => {
    try {
      const { data } = await deletePostService(token, postID);
      const { posts } = data;
      console.log("From deletePost thunk", data);
      return posts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const likePost = createAsyncThunk(
  "posts/likePost",
  async ({ token, postID }, { rejectWithValue }) => {
    try {
      const { data } = await likePostService(token, postID);
      const { posts } = data;
      return posts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const dislikePost = createAsyncThunk(
  "posts/dislikePost",
  async ({ token, postID }, { rejectWithValue }) => {
    try {
      const { data } = await dislikePostService(token, postID);
      const { posts } = data;
      return posts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {},
  extraReducers: {
    [fetchPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
    [addPost.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
    [editPost.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
    [likePost.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
    [dislikePost.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const getPost = (state) => state.posts;
export const postsReducer = postsSlice.reducer;
