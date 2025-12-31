import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Home from "../pages/Home";
const HRDashboard = lazy(() => import("../pages/Dashboard/HRDashboard"));
const ManagerDashboard = lazy(
  () => import("../pages/Dashboard/ManagerDashboard")
);
const EmployeeDashboard = lazy(
  () => import("../pages/Dashboard/EmployeeDashboard")
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard/hr",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <HRDashboard />
      </Suspense>
    ),
  },
  {
    path: "/dashboard/manager",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ManagerDashboard />
      </Suspense>
    ),
  },
  {
    path: "/dashboard/employee",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <EmployeeDashboard />
      </Suspense>
    ),
  },
]);

export default router;
