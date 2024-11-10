import { Button } from "@/components/ui/button";
import { Booking, BookingStage } from "../database/types";
import { formatDuration } from "date-fns";
import { create } from "domain";
import { createBooking } from "../database/actions";

interface BookingSummaryProps {
  booking: Booking;
  bookingStages: BookingStage[];
}

export const BookingSummary = ({
  booking,
  bookingStages,
}: BookingSummaryProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    ("use server");
    createBooking(booking, bookingStages);
  };
  return (
    <div className="border border-gray-500 p-4 w-full">
      <h2 className="text-3xl font-bold mb-4">Booking Summary</h2>
      <div>
        <span className="font-bold">Hiking Trail:</span> {booking.name}
      </div>
      <div>
        <span className="font-bold">Start Date:</span>{" "}
        {booking.startDate.toLocaleDateString()}
      </div>
      <div>
        <span className="font-bold">Hikers:</span> {booking.hikers}
      </div>
      <h3 className="text-2xl font-bold my-4">Booking Stages</h3>
      <div className="flex flex-col gap-4">
        {bookingStages.map((bookingStage, index) => {
          return (
            <div key={bookingStage.id}>
              <h4 className="text-xl font-bold mb-2">
                Stage {index + 1}: {bookingStage.startDate.toLocaleDateString()}{" "}
                - {bookingStage.endDate.toLocaleDateString()}
              </h4>
              <div>Start: {bookingStage.startDate.toLocaleDateString()}</div>
              <div>Duration: {1} day</div>
              <div>Distance: {0}km</div>
              <div>Accommodation: {bookingStage.accommodationTitle}</div>
            </div>
          );
        })}
      </div>
      <form onSubmit={handleSubmit}>
        <Button type="submit" className="mt-4">
          Book now
        </Button>
      </form>
    </div>
  );
};
