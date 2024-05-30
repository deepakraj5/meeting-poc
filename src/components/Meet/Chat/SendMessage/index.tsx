import './style.css'
import SendSVG from '../../../../assets/meet/send.svg'
import { useContext, useState } from 'react';
import { MeetContext } from '../../../../context/MeetContext';

export const SendMessage = () => {

    const meetContext = useContext(MeetContext)
    const [message, setMessage] = useState<string>('')

    const handleSendMessage = () => {
        if(!message) {

        }
    }

    return (
        <div className='send-msg-container'>
            <input placeholder='Jot your message' type='text' value={message} onChange={e => setMessage(e.target.value)} />
            <img src={SendSVG} height={35} width={40} onClick={handleSendMessage} />
        </div>
    );
}
