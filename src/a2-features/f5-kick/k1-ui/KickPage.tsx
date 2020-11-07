import React from 'react'
import {VoteUser} from "./tr1/VoteUser";

// список игроков, проголосовать за игрока, ни за кого, таймер
const KickPage = () => {
    const testOnClick = () => alert('UserDone')
    const userColor ='green'
    const userName = 'User1'
    const voteUsers = ['grey', 'blue', 'pink']

    return (
        <>
            users.map, kick, time
            <hr/>
            <VoteUser onClick={testOnClick}
                      userColor={userColor}
                      userName={userName}
                      voteUsers={voteUsers}
            />
        </>
    )
}

export default KickPage
