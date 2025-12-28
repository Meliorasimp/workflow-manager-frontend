import DashboardTopbar from "../components/Layout/DashboardTopbar";
import DashboardSidebar from "../components/Layout/DashboardSidebar";
import "../styles/index.css";
const Dashboard = () => {
  return (
    <div className="main-bg-color min-h-screen">
      <DashboardTopbar />
      <div className="flex">
        <DashboardSidebar />
      </div>
      <div>Hiiii</div>
    </div>
  );
};

export default Dashboard;
