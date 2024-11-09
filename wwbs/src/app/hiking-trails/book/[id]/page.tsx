import { HikingStageBookingCard } from "@/features/bookings/components/hiking-stage-booking-card";
import { fetchHikingTrail } from "@/features/hiking-trails/database/actions";

export default async function Page({ params }: { params: { id: number } }) {
  const hikingTrail = await fetchHikingTrail(params.id);

  return (
    <div className="container max-w-7xl mx-auto py-20">
      <h1 className="text-4xl font-bold mb-8">Book a Hiking Trail</h1>
      <div className="flex flex-col items-start gap-8">
        {hikingTrail.stages && hikingTrail.stages.map((stage) => {
          return (
            <HikingStageBookingCard
              key={stage.id}
              hikingTrailStage={stage}
              stageDate={new Date()}
            />
          );
        })}

        {/* <div className="border border-gray-500 p-4 w-auto">
          <h2 className="text-2xl font-bold">No availability</h2>
          <p>Unfortunately there is no availability for this hiking trail.</p>
        </div>

        <HikingStageBookingCard
            hikingTrailStage={{
                id: 1,
                hikingTrailId: 1,
                position: 1,
                title: "Start",
                description: "Short description of the stage",
                distance: 12.5,
            }}
            stageDate={new Date()}
        />

        
        <div className="border border-gray-500 p-4 w-auto">
          <div className="text-sm opacity-50">Date Stage 4</div>
          <h2 className="text-2xl font-bold">4. Stage: Start - End</h2>
          <p>Short description of the stage</p>
          <h3 className="text-xl font-bold border-t border-gray-200 mt-4 pt-4">
            Overnight Stays:
          </h3>
          <div className="grid gap-4 mt-4">
            <div>
              <p>No Overnight stay available.</p>
              <p>You can skip this stage for now.</p>
              <Button className="mt-4">Skip</Button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
