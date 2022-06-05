import { configureStore } from "@reduxjs/toolkit";
import { authReducer, modalForPostReducer, postsReducer, profileEditModalReducer, userProfileReducer, allUsersReducer } from "redux-reducers";

const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    modalForPost: modalForPostReducer,
    profileEditModal: profileEditModalReducer,
    userProfile: userProfileReducer,
    allUsers: allUsersReducer,
  },
});

export default store;
