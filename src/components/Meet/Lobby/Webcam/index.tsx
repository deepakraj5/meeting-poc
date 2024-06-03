import { useEffect, useRef, useState } from 'react';
import './style.css'
import MicSVG from '../../../../assets/meet/mic.svg'
import VideoSVG from '../../../../assets/meet/video.svg'
import { Spinner } from '../../../Spinner';
import VideoOffSVG from '../../../../assets/meet/videooff.svg'

export const Webcam = () => {

    const [stream, setStream] = useState<MediaStream | null>(null)
    const videoRef = useRef<HTMLVideoElement | null>(null)
    const [isVideoOn, setIsVideoOn] = useState<boolean>(true)
    const [isSpin, setIsSpin] = useState<boolean>(true)

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
        if (isVideoOn) {
            handleStopWebcam()
            setIsVideoOn(false)
        } else {
            handleStartWebcam()
            setIsVideoOn(true)
        }
    }

    return (
        <div className='webcam-container'>

            {
                isSpin ?
                    <Spinner />
                    :
                    <div>
                        <video className='webcam-video' ref={videoRef} autoPlay />
                    </div>
            }

            <div className='webcam-controls'>
                <img src={MicSVG} height={30} width={40} onClick={handleStartWebcam} />

                <img src={isVideoOn ? VideoSVG : VideoOffSVG} height={30} width={40} onClick={handleVideoClick} />
            </div>

        </div>
    );
}
