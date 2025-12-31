import { createSlice } from "@reduxjs/toolkit";
import type { DashboardState } from "../../../types/hrdashboardSliceType";

const initialDashboardState: DashboardState = {
  isWorkflowItemClicked: false,
  isNotificationDropdownOpen: false,
  isUserMenuDropdownOpen: false,
  isTaskManagementOpen: false,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: initialDashboardState,
  reducers: {
    setIsWorkflowItemClicked(state, action) {
      state.isWorkflowItemClicked = action.payload;
    },
    setIsNotificationDropdownOpen(state, action) {
      state.isNotificationDropdownOpen = action.payload;
    },
    setIsUserMenuDropdownOpen(state, action) {
      state.isUserMenuDropdownOpen = action.payload;
    },
    setIsTaskManagementOpen(state, action) {
      state.isTaskManagementOpen = action.payload;
    },
  },
});

export const {
  setIsWorkflowItemClicked,
  setIsNotificationDropdownOpen,
  setIsUserMenuDropdownOpen,
  setIsTaskManagementOpen,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
