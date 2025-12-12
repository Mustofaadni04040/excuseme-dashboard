import PerformanceChart from "../components/PerformanceChart";
import StatsCard from "../components/StatsCard";

export default function Dashboard() {
  return (
    <div className="container">
      <StatsCard />
      <PerformanceChart />
    </div>
  );
}
