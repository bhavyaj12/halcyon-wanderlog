import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginService, signupService } from "services";

const initialState = {
    isAuth: localStorage.getItem("WANDERLOG_AUTH_TOKEN") ? true : false,
    token: localStorage.getItem("WANDERLOG_AUTH_TOKEN"),
    user: JSON.parse(localStorage.getItem("wanderlog_user")),
};

export const loginUser = createAsyncThunk(
	"auth/loginUser",
	async (user, { rejectWithValue }) => {
		try {
			const { data } = await loginService(user);
			const { encodedToken, foundUser } = data;
			if (encodedToken) {
                localStorage.setItem("WANDERLOG_AUTH_TOKEN", encodedToken);
                localStorage.setItem("wanderlog_user", JSON.stringify(foundUser));
            }
			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const signupUser = createAsyncThunk(
	"auth/signupUser",
	async (user, { rejectWithValue }) => {
		try {
			const { data } = await signupService(user);
			const { encodedToken, createdUser } = data;
			if (encodedToken) {
                localStorage.setItem("WANDERLOG_AUTH_TOKEN", encodedToken);
                localStorage.setItem("wanderlog_user", JSON.stringify(createdUser));
            }
			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logoutFunc: (state) => {
			state.isAuth = false;
			state.token = null;
			state.user = null;
			localStorage.removeItem("WANDERLOG_AUTH_TOKEN");
			localStorage.removeItem("wanderlog_user");
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loginUser.fulfilled, (state, action) => {
				state.isAuth = true;
				state.token = action.payload.encodedToken;
				state.user = action.payload.foundUser;
			})
			.addCase(signupUser.fulfilled, (state, action) => {
				state.isAuth = true;
				state.token = action.payload.encodedToken;
				state.user = action.payload.createdUser;
			})
			.addDefaultCase((state, action) => {})
	},
});

export const getAuth = (state) => state.auth;
export const { logoutFunc } = authSlice.actions;
export const authReducer = authSlice.reducer;