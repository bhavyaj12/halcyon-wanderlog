import { configureStore } from "@reduxjs/toolkit";
import { authReducer, modalForPostReducer, postsReducer, profileEditModalReducer, userProfileReducer } from "redux-reducers";

const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    modalForPost: modalForPostReducer,
    profileEditModal: profileEditModalReducer,
    userProfile: userProfileReducer,
  },
});

export default store;
