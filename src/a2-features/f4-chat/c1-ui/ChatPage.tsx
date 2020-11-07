import React, {useState} from 'react'
import {Message} from "./draft/Message";
import {useDispatch, useSelector} from "react-redux";
import {actions, InitialStateType} from "../../../a3-devs/RequestOnline6/tr3/chatReducer";
import {AppStateType} from "../../../a1-main/m2-bll/store";

// список сообщений, текстэреа, отправить
const ChatPage = () => {

    const [textMessage, setTextMessage] = useState('')
    const messages = useSelector<AppStateType, InitialStateType>(state => state.chat)
    const dispatch = useDispatch()


    const mappingMessages = messages.map(m => <Message key={m.id} id={m.id} userColor={m.userColor} name={m.name} message={m.message} time={m.time}/>)

    const onSendMessage = () => {
        dispatch(actions.addNewMessage(textMessage))
        setTextMessage('')
    }
    return (
        <>
            <hr/>
            {mappingMessages}
            <textarea value={textMessage} onChange={(e)=>setTextMessage(e.currentTarget.value)}/>
            <button onClick={onSendMessage}>send</button>
        </>
    )
}

export default ChatPage
