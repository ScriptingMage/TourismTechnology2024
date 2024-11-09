import { Button } from "@/components/ui/button";
import { DateRangePicker } from "@/components/ui/daterangepicker";
import { HikingTrailStage } from "@/features/hiking-trails/database/types";
import { Prisma } from "@prisma/client";
import { addDays } from "date-fns";

export interface HikingStageBookingCardProps {
  hikingTrailStage: HikingTrailStage;
  accommodations: Prisma.HikingTrailAccommodationGetPayload<{
    include: {
      accommodation: true;
      hikingTrailStage: true;
    };
  }>[];
  stageDate: Date;
  onAccomodationSelect: (date: Date) => void;
}

export const HikingStageBookingCard = ({
  stageDate,
  hikingTrailStage,
  accommodations,
  onAccomodationSelect,
}: HikingStageBookingCardProps) => {
  const handleAccomodationSelect = () => {
    onAccomodationSelect(addDays(stageDate, 1));
  };

  return (
    <div className="border border-gray-500 p-4 w-full">
      <div className="text-sm opacity-50">{stageDate.toLocaleDateString()}</div>
      <h2 className="text-2xl font-bold">{`Stage ${hikingTrailStage.position}: ${hikingTrailStage.title}`}</h2>
      <p>{hikingTrailStage.description}</p>
      <h3 className="text-xl font-bold border-t border-gray-200 mt-4 pt-4">
        Overnight Stays:
      </h3>
      <div className="grid gap-2 mt-2">
        {accommodations.map((accommodation) => {
          return (
            <div className="flex gap-4 items-center">
              <div className="font-bold">
                {accommodation.accommodation.name}
              </div>
              <div>
                <DateRangePicker
                  defaultFrom={stageDate}
                  defaultTo={addDays(stageDate, 1)}
                />
              </div>
              <div>{accommodation.accommodation.capacity} capacity</div>
              <div>
                <Button onClick={handleAccomodationSelect}>Select</Button>
              </div>
            </div>
          );
        })}
        {accommodations.length < 1 && (
          <div className="flex gap-4 items-center">
            <div className="font-bold">No accommodations available</div>
            <Button onClick={handleAccomodationSelect}>Skip</Button>
          </div>
        )}
      </div>
    </div>
  );
};
