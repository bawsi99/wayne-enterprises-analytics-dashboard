
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import MetricsCards from "@/components/dashboard/MetricsCards";
import DashboardTabs from "@/components/dashboard/DashboardTabs";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      <div className="p-6">
        <DashboardHeader />
        <MetricsCards />
        <DashboardTabs />
      </div>
    </div>
  );
};

export default Dashboard;
