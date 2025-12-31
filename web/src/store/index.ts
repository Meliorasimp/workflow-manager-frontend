import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../store/features/home/homeSlice";
import dashboardReducer from "./features/hrdashboard";
import managerDashboardReducer from "./features/managerdashboard";
import employeeDashboardReducer from "./features/employeedashboard";

export const store = configureStore({
  reducer: {
    home: homeReducer,
    hrdashboard: dashboardReducer,
    managerdashboard: managerDashboardReducer,
    employeedashboard: employeeDashboardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
