import WeeklyOverview from "@/features/charts/weeklyOverview";
import {DailyPieChart} from "@/features/charts/dailyPieChart";

export default function AdminPage() {
    return <main className={"bg-gray-50 flex-grow"}>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="text-2xl font-bold text-center pb-8">Booking Overview</div>
            <div className="grid grid-cols-1 md:grid-cols-2 relative gap-4 h-[350px]">
                <div className="h-full w-full">
                    <DailyPieChart/>
                </div>
                <div className="h-full w-full">
                    <WeeklyOverview/>
                </div>
            </div>
        </div>
    </main>

}
