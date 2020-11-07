import React from 'react'
import {Message, MessageType} from "../tr3/Message";

export const Tp3 = () => {

    const messageData: MessageType = {
        userColor: "red",
        name: "AmogUs",
        message: "привет ребята!",
        time: "18:17",
    };

    return <div>
        <Message
            userColor={messageData.userColor}
            name={messageData.name}
            message={messageData.message}
            time={messageData.time}
        />
    </div>
}