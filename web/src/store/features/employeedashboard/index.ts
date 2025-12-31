import { createSlice } from "@reduxjs/toolkit";
import type { EmployeeDashboardState } from "../../../types/employeeDashboardType";

const initialDashboardState: EmployeeDashboardState = {
  isMyTaskDropdownOpen: false,
};

const employeeDashboardSlice = createSlice({
  name: "employeeDashboard",
  initialState: initialDashboardState,
  reducers: {
    setIsMyTaskDropdownOpen(state, action) {
      state.isMyTaskDropdownOpen = action.payload;
    },
  },
});

export const { setIsMyTaskDropdownOpen } = employeeDashboardSlice.actions;
export default employeeDashboardSlice.reducer;
