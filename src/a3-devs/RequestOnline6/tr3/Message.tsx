import React, {FC} from 'react'
import s from './Message.module.css'
export type MessageType = {
    userColor: string,
    name: string,
    message: string,
    time: string
}

export const Message: FC<MessageType> = (
    {
        name,
        message,
        time,
        userColor,
        children
    }
    ) =>
{

    return <div className={s.Message}>
        <div className={s.userColor} style={{backgroundColor: userColor}}></div>
        <div className={s.MsgCloud}>
            <h3>{name}</h3>
            <p>{message}</p>
            <time>{time}</time>
        </div>
    </div>
}