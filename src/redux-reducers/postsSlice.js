import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addPostService,
  deletePostService,
  fetchPostsService,
  editPostService,
  likePostService,
  dislikePostService,
  fetchBookmarksService,
  addBookmarkService,
  deleteBookmarkService,
  commentOnPostService,
  deleteCommentService,
  editCommentService
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
      return posts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editPost = createAsyncThunk(
  "posts/editPost",
  async ({ token, postData, postId }, { rejectWithValue }) => {
    try {
      const { data } = await editPostService(token, postData, postId);
      const { posts } = data;
      return posts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async ({ token, postId }, { rejectWithValue }) => {
    try {
      const { data } = await deletePostService(token, postId);
      const { posts } = data;
      return posts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const likePost = createAsyncThunk(
  "posts/likePost",
  async ({ token, postId }, { rejectWithValue }) => {
    try {
      const { data } = await likePostService(token, postId);
      const { posts } = data;
      return posts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const dislikePost = createAsyncThunk(
  "posts/dislikePost",
  async ({ token, postId }, { rejectWithValue }) => {
    try {
      const { data } = await dislikePostService(token, postId);
      const { posts } = data;
      return posts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchBookmarks = createAsyncThunk(
  "posts/fetchBookmarks",
  async ({ token }, { rejectWithValue }) => {
    try {
      const { data } = await fetchBookmarksService(token);
      const { bookmarks } = data;
      return bookmarks;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addBookmark = createAsyncThunk(
  "posts/addBookmark",
  async ({ token, postId }, { rejectWithValue }) => {
    try {
      const { data } = await addBookmarkService(token, postId);
      const { bookmarks } = data;
      return bookmarks;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteBookmark = createAsyncThunk(
  "posts/deleteBookmark",
  async ({ token, postId }, { rejectWithValue }) => {
    try {
      const { data } = await deleteBookmarkService(token, postId);
      const { bookmarks } = data;
      return bookmarks;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const commentOnPost = createAsyncThunk(
  "posts/commentOnPost",
  async ({ token, postId, commentData }, { rejectWithValue }) => {
    try {
      const { data } = await commentOnPostService(token, postId, commentData);
      const { comments } = data;
      return { comments, postId };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteCommentInPost = createAsyncThunk(
  "posts/deleteCommentInPost",
  async ({ token, postId, commentId }, { rejectWithValue }) => {
    try {
      const { data } = await deleteCommentService(token, postId, commentId);
      console.log("Thunk delet", data);
      const { comments } = data;
      return { comments, postId };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editCommentInPost = createAsyncThunk(
  "posts/editCommentInPost",
  async ({ token, postId, commentId, commentData }, { rejectWithValue }) => {
    try {
      const { data } = await editCommentService(
        token,
        postId,
        commentId,
        commentData
      );
      const { comments } = data;
      return { comments, postId };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    bookmarks: [],
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
    [fetchBookmarks.fulfilled]: (state, action) => {
      state.bookmarks = action.payload;
    },
    [addBookmark.fulfilled]: (state, action) => {
      state.bookmarks = action.payload;
    },
    [deleteBookmark.fulfilled]: (state, action) => {
      state.bookmarks = action.payload;
    },
    [commentOnPost.fulfilled]: (state, action) => {
      const i = state.posts.findIndex(
        (post) => post._id === action.payload.postId
      );
      state.posts[i].comments = action.payload.comments;
    },
    [deleteCommentInPost.fulfilled]: (state, action) => {
      const i = state.posts.findIndex(
        (post) => post._id === action.payload.postId
      );
      state.posts[i].comments = action.payload.comments;
    },
    [editCommentInPost.fulfilled]: (state, action) => {
      const i = state.posts.findIndex(
        (post) => post._id === action.payload.postId
      );
      state.posts[i].comments = action.payload.comments;
    },
  },
});

export const getPost = (state) => state.posts;
export const postsReducer = postsSlice.reducer;
