import { useContext } from 'react';
import './style.css'
import { Webcam } from './Webcam';
import { MeetContext } from '../../../context/MeetContext';

export const Lobby = ({ handleJoinMeet }: { handleJoinMeet: () => Promise<void> }) => {

    const meetContext = useContext(MeetContext)

    return (
        <div className='lobby-container'>

            <div className='lobby-multi-media'>

                <Webcam />

            </div>

            <div className='lobby-controls'>

                <div>
                    <h1>{meetContext?.meetDetails.meetTitle}</h1>

                    <div className='lobby-join-controls'>
                        <button onClick={() => handleJoinMeet()} className='lobby-join-meet'>Join Meet</button>
                        <button className='lobby-leave'>Leave Lobby</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
