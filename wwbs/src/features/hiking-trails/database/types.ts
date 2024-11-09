import { HikingTrailList } from "../components/hiking-trail-list";

export interface HikingTrail {
    id: number;
    name: string;
    description: string;
    length: number;
}

export interface HikingTrailStage {
    id: number;
    hikingTrailId: number;
    position: number;
    title: string;
    description: string;
    distance: number;
}
