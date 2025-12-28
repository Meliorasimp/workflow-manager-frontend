import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../store/features/home/homeSlice";
import dashboardReducer from "../store/features/dashboard";

export const store = configureStore({
  reducer: {
    home: homeReducer,
    dashboard: dashboardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
