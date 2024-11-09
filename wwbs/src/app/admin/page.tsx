import WeeklyOverview from "@/app/admin/weeklyOverview";
import {DailyPieChart} from "@/app/admin/dailyPieChart";

export default function AdminPage() {
    return <div className="min-h-[100vh] flex flex-col">
        <header className="bg-white shadow border-b-2">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
            </div>
        </header>
        <main className={"bg-gray-50 flex-grow"}>
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <div className="text-2xl font-bold text-center pb-8">Booking Overview</div>
                <div className="grid md:grid-cols-2 relative gap-4 h-[350px]">
                    <div className="w-1/2 h-full">
                        <DailyPieChart/>
                    </div>
                    <div className="w-1/2 h-full">
                        <WeeklyOverview/>
                    </div>
                </div>
            </div>
        </main>
    </div>
}
