import { configureStore } from "@reduxjs/toolkit";
import { authReducer, modalForPostReducer, postsReducer } from "redux-reducers";

const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    modalForPost: modalForPostReducer,
  },
});

export default store;
