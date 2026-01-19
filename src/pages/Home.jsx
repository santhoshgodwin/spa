import Header from "../components/header";
import KPICard from "../components/KPICard";
 
export default function Home() {
  return (
    <div className="app-container">
      <Header /> 
      <div className="kpi-grid">
        <KPICard title="Revenue (YTD)" value="$352.1B" />
        <KPICard title="Net Profit" value="$30.6B" />
        <KPICard title="Members" value="51.3M" />
      </div>
    </div>
  );
}