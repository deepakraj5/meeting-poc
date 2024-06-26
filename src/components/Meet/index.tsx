import { useEffect, useState } from 'react';
import { MeetContext, MideaControls } from '../../context/MeetContext';
import './style.css'
import { MeetDetails } from '../../_dto/MeetDetails';
import { Room } from './Room';
import { Controls } from './Controls';
import { Chat } from './Chat';
import moment from 'moment'
import { ChatMessages } from '../../_dto/ChatMessages';
import { connect, Socket } from 'socket.io-client'
import { useNavigate } from 'react-router-dom';
import { Spinner } from '../Spinner';
import { AuthService } from '../../service/AuthService';
import { HttpStatusCode } from 'axios';
import { Lobby } from './Lobby';

let socket: Socket

export const Meet = () => {


    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken')

        socket = connect('http://localhost:5001', {
            auth: {
                accessToken
            }
        })
    }, [])

    const navigate = useNavigate()
    const [isSpin, setIsSpin] = useState<boolean>(true)

    useEffect(() => {

        const isValiadAccessToken = async (): Promise<boolean> => {
            try {
                const accessToken = localStorage.getItem('accessToken')
                if(!accessToken) return false
                const response = await AuthService.validateAccessToken(accessToken)
    
                if(response.status === HttpStatusCode.Ok) {
                    console.log(response)
                    return true
                } else {
                    return false
                }
            } catch (error) {
                console.log(error)
                return false
            }
        }

        isValiadAccessToken().then(data => {
            if (!data) {
                navigate('/login', { replace: true })
            } else {
                setIsSpin(false)
            }
        }).catch(error => {
            console.log(error)
        }) 

        
    }, [])

    const [meetDetails, setMeetDetails] = useState<MeetDetails>({
        meetDate: moment().format('MMMM Do YYYY'),
        meetTitle: 'Our Weekly Design Meeting',
        noOfAttendee: 28
    })

    const [joinedMeet, setJoinedMeet] = useState<boolean>(false)
    const [roomId, setRoomId] = useState<string>('')

    const [chatMessages, setChatMessages] = useState<ChatMessages[]>([])
    const [mediaControls, setMediaControls] = useState<MideaControls>({
        isAudioOn: true,
        isVideoOn: true
    })

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
        <MeetContext.Provider value={{ meetDetails, setMeetDetails, chatMessages, setChatMessages, socket, roomId, mediaControls, setMediaControls }}>

            {isSpin ? 
                <div className='meet-spinner-container'>
                    <Spinner />
                </div>
                :
                joinedMeet ? <div className='meet-container'>

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

                </div> : <Lobby handleJoinMeet={handleJoinMeet} />

            }



        </MeetContext.Provider>
    );
}
