"use client";

import { Button } from "@/components/ui/button";
import { DateRangePicker } from "@/components/ui/daterangepicker";
import { HikingTrailStage } from "@/features/hiking-trails/database/types";
import { Prisma } from "@prisma/client";
import { addDays } from "date-fns";
import { useState } from "react";
import { BookingStage } from "../database/types";
import { cn } from "@/lib/utils";

export interface HikingStageBookingCardProps {
  hikingTrailStage: HikingTrailStage;
  accommodations: Prisma.HikingTrailAccommodationGetPayload<{
    include: {
      accommodation: true;
      hikingTrailStage: true;
    };
  }>[];
  bookingStage: BookingStage;
  onAccomodationSelect: (
    accommodationId: number,
    fromDate: Date,
    toDate: Date,
    hikingTrailStageId: number,
    hikingTrailStagePosition: number
  ) => void;
}

export const HikingStageBookingCard = ({
  bookingStage,
  hikingTrailStage,
  accommodations,
  onAccomodationSelect,
}: HikingStageBookingCardProps) => {
  const [fromDate, setFromDate] = useState<Date>(bookingStage.startDate);
  const [toDate, setToDate] = useState<Date>(
    addDays(bookingStage.startDate, 1)
  );

  const handleAccomodationSelect = (accommodationId: number) => {
    onAccomodationSelect(
      accommodationId,
      fromDate,
      toDate,
      hikingTrailStage.id,
      hikingTrailStage.position
    );
  };

  const handleDateChange = (from: Date, to: Date) => {
    setFromDate(from);
    setToDate(to);
  };

  return (
    <div
      className={cn(
        "border border-gray-500 p-4 w-full",
        bookingStage.finished && "border-green-500 bg-green-500/20"
      )}
    >
      <div className="text-sm opacity-50">{fromDate.toLocaleDateString()}</div>
      <h2 className="text-2xl font-bold">{`Stage ${hikingTrailStage.position}: ${hikingTrailStage.title}`}</h2>
      <p>{hikingTrailStage.description}</p>
      <h3 className="text-xl font-bold border-t border-gray-200 mt-4 pt-4">
        Accommodation:
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
                  disabled={bookingStage.finished}
                  defaultFrom={bookingStage.startDate}
                  defaultTo={addDays(bookingStage.startDate, 1)}
                  onDateChange={handleDateChange}
                />
              </div>
              <div>{accommodation.accommodation.capacity} capacity</div>
              {!bookingStage.finished && (
                <div>
                  <Button
                    onClick={() => handleAccomodationSelect(accommodation.id)}
                  >
                    Select
                  </Button>
                </div>
              )}
              {bookingStage.finished && (
                <div>
                  <Button disabled>Selected</Button>
                </div>
              )}
            </div>
          );
        })}
        {accommodations.length < 1 && (
          <div className="flex gap-4 items-center">
            <div className="font-bold">
              <p>No online accommodations available.</p>
            </div>
            {!bookingStage.finished && (
              <div>
                <Button onClick={() => handleAccomodationSelect(-1)}>
                  Skip
                </Button>
              </div>
            )}
            {bookingStage.finished && (
              <div>
                <Button disabled>Skipped</Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
