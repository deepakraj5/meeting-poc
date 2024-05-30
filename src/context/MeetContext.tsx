import { createContext, Dispatch, SetStateAction } from "react";
import { MeetDetails } from "../_dto/MeetDetails";

export type MeetContextType = {
    meetDetails: MeetDetails,
    setMeetDetails: Dispatch<SetStateAction<MeetDetails>>
}

export const MeetContext = createContext<MeetContextType | null>(null)
