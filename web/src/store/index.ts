import { configureStore } from "@reduxjs/toolkit";
import { homeReducer, registerReducer } from "../store/features/home/homeSlice";
import dashboardReducer from "./features/hrdashboard";
import managerDashboardReducer from "./features/managerdashboard";
import employeeDashboardReducer from "./features/employeedashboard";

export const store = configureStore({
  reducer: {
    home: homeReducer,
    hrdashboard: dashboardReducer,
    managerdashboard: managerDashboardReducer,
    employeedashboard: employeeDashboardReducer,
    register: registerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
