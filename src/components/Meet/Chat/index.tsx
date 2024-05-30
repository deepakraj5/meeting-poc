import { useContext } from 'react';
import { SendMessage } from './SendMessage';
import './style.css'
import { MeetContext } from '../../../context/MeetContext';

export const Chat = () => {

    const meetContext = useContext(MeetContext)

    return (
        <div className='chat-container'>
            <h1>Chat</h1>

            <div className='chat-messages'>

                {meetContext ? meetContext.chatMessages.map((message, index) => (
                    <div className='chat-message-container' key={index}>
                        <div className='chat-username'>
                            <span>{message.userName}</span>
                            <span className='chat-time'>{message.time}</span>
                        </div>
                        <div className='chat-message'>
                            <span>{message.message}</span>
                        </div>
                    </div>
                )) : ''}

            </div>

            <SendMessage />
        </div>
    );
}
