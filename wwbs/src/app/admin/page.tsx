import {Component} from "@/app/admin/weeklyOverview";
import {DailyPieChart} from "@/app/admin/dailyPieChart";

export default function AdminPage() {
    return <div>
        <div>Your Dashboard</div>
        <div className="flex relative">
            <div className="w-1/2 h-full">
                <DailyPieChart/>
            </div>
            <div className="w-1/2 h-full">
                <Component/>
            </div>

        </div>
        <Component/>
        
    </div>
}


