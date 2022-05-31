import { configureStore } from "@reduxjs/toolkit";
import { authReducer, postsReducer } from "redux-reducers";

const store = configureStore({
	reducer: { auth: authReducer, posts: postsReducer },
});

export default store;