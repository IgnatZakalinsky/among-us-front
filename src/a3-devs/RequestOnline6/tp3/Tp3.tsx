import React from 'react'
import {Message, MessageType} from "../tr3/Message";

export const Tp3 = () => {

    const messageData: MessageType = {
        avatar: "https://www.amongusavatarmaker.com/Assets/PLAYER/ORANGE.png",
        name: "AmogUs",
        message: "привет ребята!",
        time: "18:17",
    };

    return <div>
        <Message
            avatar={messageData.avatar}
            name={messageData.name}
            message={messageData.message}
            time={messageData.time}
        />
    </div>
}