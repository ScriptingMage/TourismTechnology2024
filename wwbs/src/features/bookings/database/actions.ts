import { Booking, BookingStage } from "./types";

export const createBooking = async (booking: Booking, bookingStages: BookingStage[]) => {
    try {
        // Simulate database request delay
        //await new Promise((resolve) => setTimeout(resolve, 1000));

        // Simulated database fetch

    }
    catch (error) {
        console.error("Error creating booking:", error);
        throw new Error("Failed to create booking");
    }
};