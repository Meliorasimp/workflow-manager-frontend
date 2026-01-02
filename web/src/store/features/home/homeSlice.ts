import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { HomeState } from "../../../types/homeSliceType";

const initialHomeState: HomeState = {
  id: 1,
  isLoginModalOpen: false,
  isRegisterModalOpen: false,
};

const initialRegisterState = {
  username: "",
  email: "",
  password: "",
};

const homeSlice = createSlice({
  name: "home",
  initialState: initialHomeState,
  reducers: {
    setHomeDataId(state, action) {
      state.id = action.payload;
    },
    setIsLoginModalOpen(state, action) {
      state.isLoginModalOpen = action.payload;
    },
    setIsRegisterModalOpen(state, action) {
      state.isRegisterModalOpen = action.payload;
    },
  },
});

export const registerSlice = createSlice({
  name: "register",
  initialState: initialRegisterState,
  reducers: {
    setUsername(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
  },
});

export const { setHomeDataId, setIsLoginModalOpen, setIsRegisterModalOpen } =
  homeSlice.actions;
export const homeReducer = homeSlice.reducer;

export const { setUsername, setEmail, setPassword } = registerSlice.actions;
export const registerReducer = registerSlice.reducer;
