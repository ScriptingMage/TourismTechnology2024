import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/datepicker";
import { DateRangePicker } from "@/components/ui/daterangepicker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HikingStageBookingCard } from "@/features/bookings/components/hiking-stage-booking-card";

export default function Page() {
  return (
    <div className="container max-w-7xl mx-auto py-20">
      <h1 className="text-4xl font-bold mb-8">Book a Hiking Trail</h1>
      <div className="flex flex-col items-start gap-8">
        <div className="border border-gray-500 p-4 w-auto">
          <h2 className="text-2xl font-bold mb-4">Start</h2>
          <div className="flex flex-col gap-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label>Pick your start date:</Label>
              <DatePicker />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="hikers">Hikers:</Label>
              <Input type="number" id="hikers" placeholder="Hikers" />
            </div>
          </div>
        </div>

        <div className="border border-gray-500 p-4 w-auto">
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
        </div>
      </div>
    </div>
  );
}
