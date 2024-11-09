"use client";

import { HikingTrail } from "@/features/hiking-trails/database/types";
import { HikingStageBookingCard } from "./hiking-stage-booking-card";
import { useState } from "react";
import { Booking, BookingStage } from "../database/types";
import { BookingDataFormCard } from "./booking-data-form-card";
import { addDays, set } from "date-fns";

interface BookingManagerProps {
  hikingTrail: HikingTrail;
}

export const BookingManager = ({ hikingTrail }: BookingManagerProps) => {
  const [booking, setBooking] = useState<Booking>({
    id: Math.floor(Math.random() * 1000),
    hikingTrailId: hikingTrail.id,
    startDate: new Date(),
    hikers: 0,
    name: "",
  });

  const [bookingStages, setBookingStages] = useState<BookingStage[]>([]);
  const [currentStage, setCurrentStage] = useState<number>(1);

  const handleBookingDateChange = (date: Date) => {
    setBooking((prevBooking) => ({
      ...prevBooking,
      startDate: date,
    }));
  };

  const handleHikerChange = (hikers: number) => {
    setBooking((prevBooking) => ({
      ...prevBooking,
      hikers: hikers,
    }));
  };

  const handleBookingSave = () => {

    const hikingTrailsStageId = hikingTrail.stages?.find((stage) => stage.position == currentStage)?.id

    if(!hikingTrailsStageId) {
      console.log("No stage found");
      return;
    }

    setBookingStages((prevBookingStages) => [
      ...prevBookingStages,
      {
        id: Math.floor(Math.random() * 1000),
        bookingId: booking.id,
        startDate: booking.startDate,
        endDate: addDays(booking.startDate, 1),
        hikingTrailId: booking.hikingTrailId,
        accommodationId: -1,
        hikingTrailStageId: hikingTrailsStageId,
        hikers: booking.hikers,
      },
    ]);
  };

  const handleStageSave = (date: Date) => {

    const newStagePosition = currentStage + 1;
    const hikingTrailsStageId = hikingTrail.stages?.find((stage) => stage.position == newStagePosition)?.id

    if(!hikingTrailsStageId) {
      console.log("No stage found");
      return;
    }

    setBookingStages((prevBookingStages) => [
      ...prevBookingStages,
      {
        id: Math.floor(Math.random() * 1000),
        bookingId: booking.id,
        startDate: date,
        endDate: addDays(date, 1),
        hikingTrailId: booking.hikingTrailId,
        accommodationId: -1,
        hikingTrailStageId: hikingTrailsStageId,
        hikers: booking.hikers,
      },
    ]);

    setCurrentStage(newStagePosition);
  };

  return (
    <div className="flex flex-col items-start gap-8">
      <BookingDataFormCard
        onHikerChange={handleHikerChange}
        onBookingDateChange={handleBookingDateChange}
        onSave={handleBookingSave}
      />
      {bookingStages.map((bookingStage) => {
        const hikingTrailsStage = hikingTrail.stages?.find((stage) => stage.id == bookingStage.hikingTrailStageId);
        if(hikingTrailsStage) {
          return (
            <HikingStageBookingCard
              key={bookingStage.id}
              hikingTrailStage={hikingTrailsStage}
              stageDate={bookingStage.startDate}
              onAccomodationSelect={handleStageSave}
            />
          );
        }
      })}
    </div>
  );
};
