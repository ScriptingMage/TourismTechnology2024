import WeeklyOverview from "@/app/admin/weeklyOverview";
import {DailyPieChart} from "@/app/admin/dailyPieChart";

export default function AdminPage() {
    return <div>
        <header className="bg-white shadow">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
            </div>
        </header>
        <main>
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <div>
                    <div className="text-2xl font-bold text-center pb-8">Booking Overview</div>
                    <div className="flex relative gap-4 h-80 overflow-hidden">
                        <div className="w-1/2 h-full h-80">
                            <DailyPieChart/>
                        </div>
                        <div className="w-1/2 h-full h-80">
                            <WeeklyOverview/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
}
