import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showProfileModal: false,
  profileToEdit: {},
};

const profileEditModalSlice = createSlice({
  name: "profileEditModal",
  initialState,
  reducers: {
    SHOW_PROFILE_MODAL: (state) => {
      state.showProfileModal = true;
    },
    HIDE_PROFILE_MODAL: (state) => {
      state.showProfileModal = false;
      state.profileToEdit = {};
    },
  },
});

export const getProfileModal = (state) => state.profileEditModal;
export const { SHOW_PROFILE_MODAL, HIDE_PROFILE_MODAL } =
  profileEditModalSlice.actions;
export const profileEditModalReducer = profileEditModalSlice.reducer;
