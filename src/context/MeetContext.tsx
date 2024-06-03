import { createContext, Dispatch, SetStateAction } from "react";
import { MeetDetails } from "../_dto/MeetDetails";
import { ChatMessages } from "../_dto/ChatMessages";
import { Socket } from "socket.io-client";

export type MeetContextType = {
    meetDetails: MeetDetails,
    setMeetDetails: Dispatch<SetStateAction<MeetDetails>>,
    chatMessages: ChatMessages[],
    setChatMessages: Dispatch<SetStateAction<ChatMessages[]>>,
    socket: Socket,
    roomId: string
}

export const MeetContext = createContext<MeetContextType | null>(null)
