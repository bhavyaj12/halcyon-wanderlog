import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
  postToEdit: {},
};

const modalSlice = createSlice({
  name: "modalForPost",
  initialState,
  reducers: {
    SET_POST_TO_EDIT: (state, action) => {
      state.postToEdit = action.payload;
    },
    SHOW_MODAL: (state, action) => {
      state.showModal = true;
    },
    HIDE_MODAL: (state, action) => {
      state.showModal = false;
      state.postToEdit = {};
    },
  },
});

export const getPostModal = (state) => state.modalForPost;
export const { SET_POST_TO_EDIT, SHOW_MODAL, HIDE_MODAL } = modalSlice.actions;

export const modalForPostReducer = modalSlice.reducer;
