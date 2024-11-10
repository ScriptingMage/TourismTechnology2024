import {atom} from "jotai/index";
import {BookingStage} from "@/features/bookings/database/types";

export const bookingStagesAtom = atom<BookingStage[]>([])
