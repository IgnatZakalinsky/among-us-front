import React from 'react'
import {VoteUser} from './User'

// компонента для проверки таски
const Tr1 = () => {
    const testOnClick = () => alert('UserDone')
    const color ='green'
    const name = 'User1'

    return (
        <>
            <VoteUser onClick={testOnClick}
                      color={color}
                      name={name}
            />
        </>
    )
}

export default Tr1
