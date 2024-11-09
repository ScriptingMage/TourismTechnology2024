import { BookingManager } from "@/features/bookings/components/booking-manager";
import { HikingStageBookingCard } from "@/features/bookings/components/hiking-stage-booking-card";
import { fetchHikingTrail } from "@/features/hiking-trails/database/actions";

export default async function Page({ params }: { params: { id: number } }) {
  const hikingTrail = await fetchHikingTrail(params.id);

  return (
    <div className="container max-w-7xl mx-auto py-20">
      <h1 className="text-4xl font-bold mb-8">Book a Hiking Trail</h1>
      <BookingManager hikingTrail={hikingTrail} />
    </div>
  );
}
