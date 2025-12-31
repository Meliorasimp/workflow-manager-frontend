import { createSlice } from "@reduxjs/toolkit";
import type { ManagerDashboardState } from "../../../types/managerDashboardType";

const initialDashboardState: ManagerDashboardState = {
  isTaskManagementOpen: false,
};

const managerDashboardSlice = createSlice({
  name: "managerDashboard",
  initialState: initialDashboardState,
  reducers: {
    setIsTaskManagementOpen(state, action) {
      state.isTaskManagementOpen = action.payload;
    },
  },
});
export const { setIsTaskManagementOpen } = managerDashboardSlice.actions;
export default managerDashboardSlice.reducer;
