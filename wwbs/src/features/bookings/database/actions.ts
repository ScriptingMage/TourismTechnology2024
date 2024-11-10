"use server";
import { prisma } from "@/database/db";
import { Booking, BookingStage } from "./types";

export const createBooking = async (booking: Booking, bookingStages: BookingStage[]) => {
    try {
        // Simulate database request delay
        //await new Promise((resolve) => setTimeout(resolve, 1000));

        // Simulated database fetch
        const newBooking = await prisma.booking.create({
            data: {
                hikingTrailId: booking.hikingTrailId,
                startDate: booking.startDate,
                hikers: booking.hikers,
            },
        });

        const newBookingStages = await prisma.bookingStage.createMany({
            data: bookingStages.map((bookingStage) => {
                return {
                    bookingId: newBooking.id,
                    startDate: bookingStage.startDate,
                    endDate: bookingStage.endDate,
                    hikingTrailStageId: bookingStage.hikingTrailStageId,
                    hikers: bookingStage.hikers,
                    accommodationId : bookingStage.accommodationId,
                };
            }),
        });
    }
    catch (error) {
        console.error("Error creating booking:", error);
        throw new Error("Failed to create booking");
    }
};