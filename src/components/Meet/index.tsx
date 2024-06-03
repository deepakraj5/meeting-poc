import { useState } from 'react';
import { MeetContext } from '../../context/MeetContext';
import './style.css'
import { MeetDetails } from '../../_dto/MeetDetails';
import { Room } from './Room';
import { Controls } from './Controls';
import { Chat } from './Chat';
import moment from 'moment'
import { ChatMessages } from '../../_dto/ChatMessages';
import { connect } from 'socket.io-client'

const socket = connect('http://localhost:5001')

export const Meet = () => {

    const [meetDetails, setMeetDetails] = useState<MeetDetails>({
        meetDate: moment().format('MMMM Do YYYY'),
        meetTitle: 'Our Weekly Design Meeting',
        noOfAttendee: 28
    })

    const [joinedMeet, setJoinedMeet] = useState<boolean>(false)
    const [roomId, setRoomId] = useState<string>('')

    const [chatMessages, setChatMessages] = useState<ChatMessages[]>([])

    const handleJoinMeet = async () => {
        try {
            setRoomId('test_room')
            socket.emit('join_room', {
                room: 'test_room'
            })
            setJoinedMeet(true)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <MeetContext.Provider value={{ meetDetails, setMeetDetails, chatMessages, setChatMessages, socket, roomId }}>

            {joinedMeet ? <div className='meet-container'>

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

            </div> : <div>
                <button onClick={() => handleJoinMeet()}>Join Meet</button>
            </div>}

        </MeetContext.Provider>
    );
}
