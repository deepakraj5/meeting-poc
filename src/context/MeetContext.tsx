import { createContext, Dispatch, SetStateAction } from "react";
import { MeetDetails } from "../_dto/MeetDetails";
import { ChatMessages } from "../_dto/ChatMessages";
import { Socket } from "socket.io-client";

export type MideaControls = {
    isVideoOn: boolean,
    isAudioOn: boolean,
}

export type MeetContextType = {
    meetDetails: MeetDetails,
    setMeetDetails: Dispatch<SetStateAction<MeetDetails>>,
    chatMessages: ChatMessages[],
    setChatMessages: Dispatch<SetStateAction<ChatMessages[]>>,
    socket: Socket,
    roomId: string,
    mediaControls: MideaControls,
    setMediaControls: Dispatch<SetStateAction<MideaControls>>,
}

export const MeetContext = createContext<MeetContextType | null>(null)
