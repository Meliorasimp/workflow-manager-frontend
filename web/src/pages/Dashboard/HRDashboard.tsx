import Topbar from "../../components/Layout/DashboardTopbar";
import HRDashboardSidebar from "../../components/Layout/HRDashboardSidebar";
import "../../styles/index.css";

const HRDashboard = () => {
  return (
    <div className="main-bg-color min-h-screen">
      <Topbar />
      <div className="flex">
        <HRDashboardSidebar />
      </div>
    </div>
  );
};

export default HRDashboard;
