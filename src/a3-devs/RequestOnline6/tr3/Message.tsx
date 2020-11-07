import React, {FC} from 'react'
import s from './Message.module.css'
export type MessageType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

export const Message: FC<MessageType> = (
    {
        name,
        message,
        time,
        avatar,
        children
    }
    ) =>
{

    return <div className={s.Message}>
        <img className={s.avatar} src={avatar} alt="avatar"/>
        <div className={s.MsgCloud}>
            <h3>{name}</h3>
            <p>{message}</p>
            <time>{time}</time>
        </div>
    </div>
}