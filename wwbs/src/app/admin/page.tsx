import WeeklyOverview from "@/app/admin/weeklyOverview";
import { DailyPieChart } from "@/app/admin/dailyPieChart";

export default function AdminPage() {
  return (
    <div>
      <WeeklyOverview />
      <DailyPieChart />
    </div>
  );
}
