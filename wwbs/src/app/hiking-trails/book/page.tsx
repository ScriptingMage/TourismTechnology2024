import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/datepicker";

export default function Page() {
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold mb-20">Book a Hiking Trail</h1>
      <div className="flex flex-col items-start gap-8">
        <div className="border border-gray-500 p-4 w-auto">
          <h2 className="text-2xl font-bold">Start</h2>
          <div className="relative">
            <DatePicker />
          </div>
          <div>Number of people:</div>
        </div>

        <div className="border border-gray-500 p-4 w-auto">
          <div className="text-sm opacity-50">Date Stage 1</div>
          <h2 className="text-2xl font-bold">1. Stage: Start - End</h2>
          <p>Short description of the stage</p>
          <h3 className="text-xl font-bold border-t border-gray-200 mt-4 pt-4">
            Overnight Stays:
          </h3>
          <div className="grid gap-2 mt-2">
            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="font-bold">Stay Name 1</div>
              <div>3 Betten frei</div>
              <div>
                <Button>auswählen</Button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="font-bold">Stay Name 2</div>
              <div>0 Betten frei</div>
              <div>
                <Button disabled>auswählen</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-gray-500 p-4 w-auto">
          <div className="text-sm opacity-50">Date Stage 2</div>
          <h2 className="text-2xl font-bold">2. Stage: Start - End</h2>
          <p>Short description of the stage</p>
          <h3 className="text-xl font-bold border-t border-gray-200 mt-4 pt-4">
            Overnight Stays:
          </h3>
          <div className="grid gap-4 mt-4">
            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="font-bold">Stay Name 1</div>
              <div>3 Betten frei</div>
              <div>
                <Button>auswählen</Button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="font-bold">Stay Name 2</div>
              <div>0 Betten frei</div>
              <div>
                <Button disabled>auswählen</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-gray-500 p-4 w-auto">
          <div className="text-sm opacity-50">Date Stage 3</div>
          <h2 className="text-2xl font-bold">3. Stage: Start - End</h2>
          <p>Short description of the stage</p>
          <h3 className="text-xl font-bold border-t border-gray-200 mt-4 pt-4">
            Overnight Stays:
          </h3>
          <div className="grid gap-4 mt-4">
            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="font-bold">Stay Name 1</div>
              <div>3 Betten frei</div>
              <div>
                <Button>auswählen</Button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="font-bold">Stay Name 2</div>
              <div>0 Betten frei</div>
              <div>
                <Button disabled>auswählen</Button>
              </div>
            </div>
          </div>
        </div>
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
              <p>You can skip this stage for an
              additional 5hrs and go straight to stage 5.</p>
              <Button>Skip</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
