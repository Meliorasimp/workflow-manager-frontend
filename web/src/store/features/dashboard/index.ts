import { createSlice } from "@reduxjs/toolkit";
import type { DashboardState } from "../../../types/dashboardSliceType";

const initialDashboardState: DashboardState = {
  isWorkflowItemClicked: false,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: initialDashboardState,
  reducers: {
    setIsWorkflowItemClicked(state, action) {
      state.isWorkflowItemClicked = action.payload;
    },
  },
});

export const { setIsWorkflowItemClicked } = dashboardSlice.actions;
export default dashboardSlice.reducer;
