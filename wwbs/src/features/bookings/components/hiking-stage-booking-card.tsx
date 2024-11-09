import { Button } from "@/components/ui/button";
import { DateRangePicker } from "@/components/ui/daterangepicker";
import { HikingTrailStage } from "@/features/hiking-trails/database/types";
import { addDays } from "date-fns";

export interface HikingStageBookingCardProps {
  hikingTrailStage: HikingTrailStage;
  stageDate: Date;
  onAccomodationSelect: (date: Date) => void;
}

export const HikingStageBookingCard = ({
  stageDate,
  hikingTrailStage,
  onAccomodationSelect,
}: HikingStageBookingCardProps) => {

  const handleAccomodationSelect = () => {
    onAccomodationSelect(addDays(stageDate, 1));
  };

  return (
    <div className="border border-gray-500 p-4 w-auto">
      <div className="text-sm opacity-50">{stageDate.toLocaleDateString()}</div>
      <h2 className="text-2xl font-bold">{`Stage ${hikingTrailStage.position}: ${hikingTrailStage.title}`}</h2>
      <p>{hikingTrailStage.description}</p>
      <h3 className="text-xl font-bold border-t border-gray-200 mt-4 pt-4">
        Overnight Stays:
      </h3>
      <div className="grid gap-2 mt-2">
        <div className="flex gap-4 items-center">
          <div className="font-bold">Stay Name 1</div>
          <div>
            <DateRangePicker
              defaultFrom={stageDate}
              defaultTo={addDays(stageDate, 1)}
            />
          </div>
          <div>3 Betten frei</div>
          <div>
            <Button onClick={handleAccomodationSelect}>auswählen</Button>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="font-bold">Stay Name 2</div>
          <div>
            <DateRangePicker
              defaultFrom={stageDate}
              defaultTo={addDays(stageDate, 1)}
            />
          </div>
          <div>0 Betten frei</div>
          <div>
            <Button disabled>auswählen</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
