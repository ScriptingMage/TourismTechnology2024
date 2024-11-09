import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/datepicker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface BookingDataFormCardProps {
  onBookingDateChange: (date: Date) => void;
  onHikerChange: (hikers: number) => void;
  onSave: () => void;
}

export const BookingDataFormCard = ({ onBookingDateChange, onHikerChange, onSave }: BookingDataFormCardProps) => {

  const handleBookingDateChange = (date: Date) => {
    onBookingDateChange(date);
  };

  const handleHikerChange = (hikers: number) => {
    onHikerChange(hikers);
  };

  const handleSave = () => {
    onSave();
  }

  return (
    <div className="border border-gray-500 p-4 w-full">
      <h2 className="text-2xl font-bold mb-4">Start</h2>
      <div className="flex flex-col gap-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label>Pick your start date:</Label>
          <DatePicker onDateChange={handleBookingDateChange} />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="hikers">Hikers:</Label>
          <Input type="number" id="hikers" placeholder="Hikers" onChange={(e) => handleHikerChange(parseInt(e.target.value))} />
        </div>
        <Button onClick={handleSave}>Save</Button>
      </div>
    </div>
  );
};
