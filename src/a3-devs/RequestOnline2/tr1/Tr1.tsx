import React from 'react'
import {VoteUser} from './VoteUser'

// компонента для проверки таски
const Tr1 = () => {
    const testOnClick = () => alert('UserDone')
    const userColor ='green'
    const name = 'User1'
    const voteUsers = ['grey', 'blue', 'pink']

    return (
        <>
            <VoteUser onClick={testOnClick}
                      color={userColor}
                      name={name}
                      voteUsers={voteUsers}
            />
        </>
    )
}

export default Tr1
