import "../../styles/index.css";
import EmployeeSidebar from "../../components/Layout/EmployeeSidebar";
import Topbar from "../../components/Layout/DashboardTopbar";
const EmployeeDashboard = () => {
  return (
    <div className="main-bg-color min-h-screen">
      <Topbar />
      <div className="flex">
        <EmployeeSidebar />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
