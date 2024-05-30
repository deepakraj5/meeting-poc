import './style.css'
import ParticipantsSVG from '../../../assets/meet/participants.svg'
import ChatSVG from '../../../assets/meet/chat.svg'
import ScreenShareSVG from '../../../assets/meet/screenshare.svg'
import MicSVG from '../../../assets/meet/mic.svg'
import VideoSVG from '../../../assets/meet/video.svg'

export const Controls = () => {
    return (
        <div className='controls-container'>

            <div>
                <div className='leave-meet-btn'>
                    <button>Leave Meet</button>
                </div>

                <div className='participant-btn'>
                    <img src={ParticipantsSVG} height={40} width={40} />
                </div>

                <div>
                    <img src={ChatSVG} height={30} width={40} />
                </div>

                <div>
                    <img src={ScreenShareSVG} height={30} width={40} />
                </div>
                
                <div>
                    <img src={MicSVG} height={30} width={40} />
                </div>

                <div>
                    <img src={VideoSVG} height={30} width={40} />
                </div>
{/* 
                <div>
                    <span>Meet id</span>
                </div> */}
            </div>

        </div>
    );
}
