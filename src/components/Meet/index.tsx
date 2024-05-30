import { useState } from 'react';
import { MeetContext } from '../../context/MeetContext';
import './style.css'
import { MeetDetails } from '../../_dto/MeetDetails';
import { Room } from './Room';
import { Controls } from './Controls';
import { Chat } from './Chat';
import moment from 'moment'
import { ChatMessages } from '../../_dto/ChatMessages';

export const Meet = () => {

    const [meetDetails, setMeetDetails] = useState<MeetDetails>({
        meetDate: moment().format('MMMM Do YYYY'),
        meetTitle: 'Our Weekly Design Meeting',
        noOfAttendee: 28
    })

    const [chatMessages, setChatMessages] = useState<ChatMessages[]>([])

    return (
        <MeetContext.Provider value={{ meetDetails, setMeetDetails, chatMessages, setChatMessages }}>
            <div className='meet-container'>

                <div className='meet-left-container'>
                    <div className='meet-title-container'>
                        <h1>{meetDetails.meetTitle}</h1>
                        <div>
                            <span className='meet-date'>{meetDetails.meetDate}</span>
                            <span className='meet-attendee'>Attendee: <span>{meetDetails.noOfAttendee}</span></span>
                        </div>
                    </div>

                    <div className='meet-room-container'>
                        <Room />
                    </div>

                    <div className='meet-control-container'>
                        <Controls />
                    </div>
                </div>

                <div className='meet-chat-container'>
                    <Chat />
                </div>

            </div>
        </MeetContext.Provider>
    );
}
