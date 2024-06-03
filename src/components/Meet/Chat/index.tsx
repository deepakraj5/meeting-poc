import { useContext, useEffect } from 'react';
import { SendMessage } from './SendMessage';
import './style.css'
import { MeetContext } from '../../../context/MeetContext';
import { ChatMessages } from '../../../_dto/ChatMessages';
import moment from 'moment';

export const Chat = () => {

    const meetContext = useContext(MeetContext)

    useEffect(() => {

        meetContext?.socket.on('receive_message', data => {
            meetContext.setChatMessages((prevState: ChatMessages[]) => [
                ...prevState,
                {
                    userName: data.username,
                    message: data.message,
                    time: moment(data.time).format('LT')
                }
            ])
        })

    }, [meetContext?.socket])

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
