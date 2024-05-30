import { createContext, Dispatch, SetStateAction } from "react";
import { MeetDetails } from "../_dto/MeetDetails";
import { ChatMessages } from "../_dto/ChatMessages";

export type MeetContextType = {
    meetDetails: MeetDetails,
    setMeetDetails: Dispatch<SetStateAction<MeetDetails>>
    chatMessages: ChatMessages[],
    setChatMessages: Dispatch<SetStateAction<ChatMessages[]>>
}

export const MeetContext = createContext<MeetContextType | null>(null)
