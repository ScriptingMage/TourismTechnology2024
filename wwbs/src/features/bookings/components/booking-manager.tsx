"use client";

import {HikingStageBookingCard} from "./hiking-stage-booking-card";
import {useState} from "react";
import {Booking, BookingStage} from "../database/types";
import {BookingDataFormCard} from "./booking-data-form-card";
import {addDays, set} from "date-fns";
import {Prisma} from "@prisma/client";
import {Button} from "@/components/ui/button";
import {useAtom} from "jotai/index";
import {bookingStagesAtom} from "@/app/locationMap";

interface BookingManagerProps {
    hikingTrail: Prisma.HikingTrailGetPayload<{
        include: {
            hikingTrailStage: true;
            hikingTrailAccommodation: true;
        };
    }>;
    accommodations: Prisma.HikingTrailAccommodationGetPayload<{
        include: {
            accommodation: true;
            hikingTrailStage: true;
        };
    }>[];
}

export const BookingManager = ({
                                   hikingTrail,
                                   accommodations,
                               }: BookingManagerProps) => {
    const [booking, setBooking] = useState<Booking>({
        id: Math.floor(Math.random() * 1000),
        hikingTrailId: hikingTrail.id,
        startDate: new Date(),
        hikers: 0,
        name: "",
    });

    const [bookingStages, setBookingStages] = useAtom(bookingStagesAtom)

    // const [bookingStages, setBookingStages] = useState<BookingStage[]>([]);
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
        const hikingTrailsStage = hikingTrail.hikingTrailStage?.find(
            (stage) => stage.position == currentStage
        );

        const hikingTrailsStageId = hikingTrailsStage?.id;

        if (!hikingTrailsStageId) {
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
                finished: false,
                endLatitude: hikingTrailsStage.endLatitude,
                endLongitude: hikingTrailsStage.endLongitude,
                accommodationTitle: hikingTrailsStage.title
            },
        ]);
    };

    const handleStageSave = (
        accommodationId: number,
        fromDate: Date,
        toDate: Date,
        currentHikingTrailsStageId: number,
        currentHikingTrailsStagePosition: number
    ) => {
        const oldBookingStage = bookingStages.find(
            (bookingStage) =>
                bookingStage.hikingTrailStageId == currentHikingTrailsStageId
        );
        const newStages = bookingStages.filter(
            (bookingStage) =>
                bookingStage.hikingTrailStageId != currentHikingTrailsStageId
        );

        newStages.push({
            id: Math.floor(Math.random() * 1000),
            bookingId: booking.id,
            startDate: fromDate,
            endDate: toDate,
            hikingTrailId: booking.hikingTrailId,
            accommodationId: accommodationId,
            hikingTrailStageId: currentHikingTrailsStageId,
            hikers: booking.hikers,
            finished: true,
            endLatitude: oldBookingStage?.endLatitude ?? null,
            endLongitude: oldBookingStage?.endLongitude ?? null,
            accommodationTitle: oldBookingStage?.accommodationTitle ?? null

        });

        newStages.sort((a, b) => a.startDate.valueOf() - b.startDate.valueOf());

        setBookingStages(newStages);

        const newStagePosition = currentHikingTrailsStagePosition + 1;
        if (newStagePosition <= currentStage) {
            return;
        }
        setCurrentStage(newStagePosition);
        const hikingTrailsStage = hikingTrail.hikingTrailStage?.find(
            (stage) => stage.position == newStagePosition
        );

        const hikingTrailsStageId = hikingTrailsStage?.id;

        if (!hikingTrailsStageId) {
            console.log("No stage found or finished");
            return;
        }

        setBookingStages((prevBookingStages) => [
            ...prevBookingStages,
            {
                id: Math.floor(Math.random() * 1000),
                bookingId: booking.id,
                startDate: toDate,
                endDate: addDays(toDate, 1),
                hikingTrailId: booking.hikingTrailId,
                accommodationId: -1,
                hikingTrailStageId: hikingTrailsStageId,
                hikers: booking.hikers,
                finished: false,
                endLatitude: hikingTrailsStage.endLatitude,
                endLongitude: hikingTrailsStage.endLongitude,
                accommodationTitle: hikingTrailsStage.title
            },
        ]);
    };

    const handleFinishBooking = () => {
    };

    return (
        <div className="flex flex-col items-start gap-8">
            <BookingDataFormCard
                onHikerChange={handleHikerChange}
                onBookingDateChange={handleBookingDateChange}
                onSave={handleBookingSave}
            />
            {bookingStages.map((bookingStage) => {
                const hikingTrailsStage = hikingTrail.hikingTrailStage?.find(
                    (stage) => stage.id == bookingStage.hikingTrailStageId
                );

                if (hikingTrailsStage) {
                    const hikingStageAccommodation = accommodations.filter(
                        (accommodation) =>
                            accommodation.hikingTrailStageId == hikingTrailsStage.id
                    );
                    return (
                        <HikingStageBookingCard
                            key={hikingTrailsStage.id}
                            hikingTrailStage={hikingTrailsStage}
                            accommodations={hikingStageAccommodation}
                            bookingStage={bookingStage}
                            onAccomodationSelect={handleStageSave}
                        />
                    );
                }
            })}

            {currentStage > hikingTrail.hikingTrailStage.length && (
                <div className="border border-gray-500 p-4 w-full">
                    <h2 className="text-2xl font-bold mb-2">Hiking trail is finished</h2>
                    <p className="mb-4">
                        You have successfully completed booking your hike.
                    </p>
                    <Button onClick={handleFinishBooking}>Complete Booking</Button>
                </div>
            )}
        </div>
    );
};
