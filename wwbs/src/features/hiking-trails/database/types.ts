export interface HikingTrail {
    id: number;
    name: string;
    description: string | null;
    length: number;
    HikingTrailStage?: HikingTrailStage[];
}

export interface HikingTrailStage {
    id: number;
    hikingTrailId: number;
    position: number;
    title: string;
    description: string | null;
    distance: number;
}
