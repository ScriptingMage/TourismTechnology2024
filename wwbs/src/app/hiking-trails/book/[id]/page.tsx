import {BookingManager} from "@/features/bookings/components/booking-manager";
import {fetchHikingTrail} from "@/features/hiking-trails/database/actions";
import LocationAggregatorMap from "@/app/locationMap";
import {Card} from "@/components/ui/card";

export default async function Page({params}: { params: { id: number } }) {
    const hikingTrail = await fetchHikingTrail(params.id);

    const showMap = false;

    return (
        <div className="w-full min-h-screen flex gap-8">
            <div className="w-1/2 h-screen p-10">
                <Card className="h-full overflow-hidden [&>*]:!relative">
                    {showMap ? <LocationAggregatorMap/> : <div className="text-center">Map is disabled</div>}
                </Card>
            </div>
            <div className="w-1/2 h-screen overflow-y-scroll py-10">
                <h1 className="text-4xl font-bold mb-8">Book a Hiking Trail</h1>
                <BookingManager hikingTrail={hikingTrail}/>
            </div>
        </div>
    );
}
