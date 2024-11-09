import { HikingTrail } from "../database/types";
import { HikingTrailCard } from "./hiking-trail-card";

export interface HikingTrailListProps {
  hikingTrails: HikingTrail[];
}

export const HikingTrailList = ({ hikingTrails }: HikingTrailListProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {hikingTrails.map((trail) => (
        <HikingTrailCard key={trail.id} hikingTrail={trail} />
      ))}
    </div>
  );
};
