import TopBar from "../../components/Layout/DashboardTopbar";
import ManagerDashboardSidebar from "../../components/Layout/ManagerDashboardSidebar";

const ManagerDashboard = () => {
  return (
    <div className="main-bg-color min-h-screen">
      <TopBar />
      <div className="flex">
        <ManagerDashboardSidebar />
      </div>
    </div>
  );
};

export default ManagerDashboard;
