import { createSlice } from "@reduxjs/toolkit";
import type { HomeState } from "../../../types/homeSliceType";

const initialHomeState: HomeState = {
  id: 1,
  isLoginModalOpen: false,
  isRegisterModalOpen: false,
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
export const { setHomeDataId, setIsLoginModalOpen, setIsRegisterModalOpen } =
  homeSlice.actions;
export default homeSlice.reducer;
