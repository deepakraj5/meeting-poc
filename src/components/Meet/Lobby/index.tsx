import { useContext } from 'react';
import './style.css'
import { Webcam } from './Webcam';
import { MeetContext } from '../../../context/MeetContext';
import { useNavigate } from 'react-router-dom';

export const Lobby = ({ handleJoinMeet }: { handleJoinMeet: () => Promise<void> }) => {

    const meetContext = useContext(MeetContext)

    const navigate = useNavigate()

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
                    </div>
                </div>
            </div>
        </div>
    );
}
