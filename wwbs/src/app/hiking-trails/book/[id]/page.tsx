import { BookingManager } from "@/features/bookings/components/booking-manager";
import { fetchHikingTrail } from "@/features/hiking-trails/database/actions";
import LocationAggregatorMap from "@/app/locationMap";
import { Card } from "@/components/ui/card";
import { notFound } from "next/navigation";
import { fetchAccommodationsForHikingTrail } from "@/features/accommodations/database/actions";

export default async function Page({ params }: { params: { id: string } }) {
  const hikingTrail = await fetchHikingTrail(parseInt(params.id));
  if (!hikingTrail) return notFound();
  const accommodations = await fetchAccommodationsForHikingTrail(
    hikingTrail.id
  );
  const showMap = true;

  return (
    <div className="w-full min-h-screen flex gap-8">
      <div className="w-1/2 h-screen p-10">
        <Card className="h-full overflow-hidden [&>*]:!relative">
          {showMap ? (
            <LocationAggregatorMap />
          ) : (
            <div className="text-center">Map is disabled</div>
          )}
        </Card>
      </div>
      <div className="w-1/2 h-screen overflow-y-scroll py-10 pr-10 scroll-smooth">
        <h1 className="text-4xl font-bold mb-8">Plan your hiking trail</h1>
        {hikingTrail && <BookingManager hikingTrail={hikingTrail} accommodations={accommodations} />}
      </div>
    </div>
  );
}
