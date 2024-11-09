import { DatePicker } from "@/components/ui/datepicker"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const BookingDataFormCard = () => {
    return (
        <div className="border border-gray-500 p-4 w-auto">
          <h2 className="text-2xl font-bold mb-4">Start</h2>
          <div className="flex flex-col gap-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label>Pick your start date:</Label>
              <DatePicker />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="hikers">Hikers:</Label>
              <Input type="number" id="hikers" placeholder="Hikers" />
            </div>
          </div>
        </div>)
}