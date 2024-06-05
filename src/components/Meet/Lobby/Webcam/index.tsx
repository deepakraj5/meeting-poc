import { useContext, useEffect, useRef, useState } from 'react';
import './style.css'
import MicSVG from '../../../../assets/meet/mic.svg'
import VideoSVG from '../../../../assets/meet/video.svg'
import { Spinner } from '../../../Spinner';
import VideoOffSVG from '../../../../assets/meet/videooff.svg'
import { MeetContext } from '../../../../context/MeetContext';
import MutedMicSVG from '../../../../assets/meet/mutedmic.svg'

export const Webcam = () => {

    const [stream, setStream] = useState<MediaStream | null>(null)
    const videoRef = useRef<HTMLVideoElement | null>(null)
    const [isSpin, setIsSpin] = useState<boolean>(true)

    const meetConext = useContext(MeetContext)

    const handleStartWebcam = async () => {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
            video: true
        })

        setStream(mediaStream)
        setIsSpin(false)
    }

    const handleStopWebcam = () => {
        const tracks = stream?.getTracks()
        tracks?.forEach(track => track.stop())
        setStream(null)
    }

    useEffect(() => {
        if (!stream) return

        if (videoRef.current) {
            videoRef.current.srcObject = stream
        }

    }, [stream])

    useEffect(() => {
        handleStartWebcam()
    }, [])

    const handleVideoClick = () => {
        if (meetConext?.mediaControls.isVideoOn) {
            handleStopWebcam()
            meetConext.setMediaControls({ ...meetConext.mediaControls, isVideoOn: false })
        } else {
            handleStartWebcam()
            meetConext?.setMediaControls({ ...meetConext.mediaControls, isVideoOn: true })
        }
    }

    return (
        <div className='webcam-container'>

            {
                isSpin ?
                    <div className='webcam-spinner'>
                        <Spinner />
                    </div>
                    :
                    <div>
                        <div className='webcam'>
                            <video ref={videoRef} autoPlay />
                        </div>

                        <div className='webcam-controls'>
                            <img 
                                src={meetConext?.mediaControls.isAudioOn ? MicSVG : MutedMicSVG} 
                                height={30} 
                                width={40} 
                                onClick={() => meetConext?.setMediaControls({ ...meetConext.mediaControls, isAudioOn: !meetConext.mediaControls.isAudioOn })} 
                            />

                            <img 
                                src={meetConext?.mediaControls.isVideoOn ? VideoSVG : VideoOffSVG} 
                                height={30} 
                                width={40} 
                                onClick={handleVideoClick} 
                            />
                        </div>
                    </div>
            }

        </div>
    );
}
