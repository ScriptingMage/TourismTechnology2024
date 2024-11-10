import WeeklyOverview from "@/features/charts/weeklyOverview";
import {DailyPieChart} from "@/features/charts/dailyPieChart";
import {Card} from "@/components/ui/card";

const people = [
    {name: 'Max Mustermann', email: 'max.mustermann@example.com', count: 3},
    {name: 'Jane Doe', email: 'jane.doe@example.com', count: 1},
    {name: 'Sepp Seppington', email: 'sepp@sepp.sepp', count: 1},
    {name: 'Amelia Watson', email: 'amelia.watson@example.com', count: 1},
    {name: 'Lindsay Walton', email: 'lindsay.walton@example.com', count: 1},
]

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
            <div className="hidden sm:block">
                <div className="sm:flex-auto p-4">
                    <h1 className="text-base font-semibold text-gray-900">Todays Visitors</h1>
                </div>
                <Card className="overflow-hidden">
                    <div className="low-root">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <table className="min-w-full divide-y divide-gray-300">
                                    <thead>
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                                            Name
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Email
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Group Size
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                    {people.map((person) => (
                                        <tr key={person.email} className="even:bg-gray-50">
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                                                {person.name}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.count}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    </main>
}
