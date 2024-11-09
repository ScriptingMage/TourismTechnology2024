"use client";

import { HikingStageBookingCard } from "./hiking-stage-booking-card";
import { useState } from "react";
import { Booking, BookingStage } from "../database/types";
import { BookingDataFormCard } from "./booking-data-form-card";
import { addDays, set } from "date-fns";
import { Prisma } from "@prisma/client";

interface BookingManagerProps {
  hikingTrail: Prisma.HikingTrailGetPayload<{
    include: {
      HikingTrailStage: true,
    },
  }>;
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

    const hikingTrailsStageId = hikingTrail.HikingTrailStage?.find((stage) => stage.position == currentStage)?.id

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
    const hikingTrailsStageId = hikingTrail.HikingTrailStage?.find((stage) => stage.position == newStagePosition)?.id

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
        const hikingTrailsStage = hikingTrail.HikingTrailStage?.find((stage) => stage.id == bookingStage.hikingTrailStageId);
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
  );
};
