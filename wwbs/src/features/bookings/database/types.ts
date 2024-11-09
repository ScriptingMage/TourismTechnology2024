export interface Booking {
    id: number;
    hikingTrailId: number;
    startDate: Date;
    hikers: number;
    name: string;
    bookingStages?: BookingStage[];
}

export interface BookingStage {
    id: number;
    bookingId: number;
    startDate: Date;
    endDate: Date;
    hikingTrailId: number;
    accommodationId: number;
    hikingTrailStageId: number;
    hikers: number;
    finished: boolean;
    endLatitude: number | null;
    endLongitude: number | null;
    accommodationTitle: string | null;
}