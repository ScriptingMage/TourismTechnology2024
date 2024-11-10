"use server";
import { prisma } from "@/database/db";
import { Booking, BookingStage } from "./types";

export const createBooking = async (
  booking: Booking,
  bookingStages: BookingStage[]
) => {
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
          accommodationId: bookingStage.accommodationId,
        };
      }),
    });
  } catch (error) {
    console.error("Error creating booking:", error);
    throw new Error("Failed to create booking");
  }
};

export const getAccommodationCapacity = async (
  accommodationId: number,
  date: Date
) => {
  try {
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    // Get the accommodation's capacity
    const accommodation = await prisma.accommodation.findUnique({
      where: { id: accommodationId },
      select: { capacity: true },
    });

    if (!accommodation) {
      throw new Error("Accommodation not found");
    }

    // Sum up all booked hikers for this accommodation on the target date
    const bookedHikers = await prisma.bookingStage.aggregate({
      where: {
        accommodationId: accommodationId,
        startDate: { lte: endOfDay },
        endDate: { gte: startOfDay },
      },
      _sum: { hikers: true },
    });

    // Calculate the available capacity
    const availableCapacity =
      accommodation.capacity - (bookedHikers._sum.hikers || 0);

    return availableCapacity;
  } catch (error) {
    console.error("Error fetching accommodation capacity:", error);
    throw new Error("Failed to fetch accommodation capacity");
  }
};
