import React from 'react'
import {VoteUser} from "./tr1/VoteUser";
import {useDispatch} from 'react-redux'
import {voteUsersTC} from '../k2-bll/kickReducer'

// список игроков, проголосовать за игрока, ни за кого, таймер
const KickPage = () => {

    const dispatch = useDispatch()


    const users = [
        {_id: '1', name: 'user1', color: 'grey', disCount: 0, isAlive: true,
            isImpostor: false, votes: ['blue', 'yellow'], x: 0, y: 0,
        },
        {_id: '2', name: 'user2', color: 'blue', disCount: 0, isAlive: true,
            isImpostor: false,votes: ['pink'], x: 0, y: 0,
        },
        {_id: '3', name: 'user3', color: 'pink', disCount: 0, isAlive: true,
            isImpostor: false,votes: ['grey'], x: 0, y: 0,
        },
        {_id: '4', name: 'user4', color: 'yellow', disCount: 0, isAlive: true,
            isImpostor: false,votes: ['grey'], x: 0, y: 0,
        },
    ]


    const kickHandler = () => dispatch(voteUsersTC)
    // const kickHandler = () => dispatch(voteUsersTC(userId, voteUserId))

    return (
        <>
            users.map, kick, time
            <hr/>
            {users.map(u => <VoteUser key={u._id}
                                      id={u._id}
                                      kickHandler={kickHandler}
                                      userColor={u.color}
                                      userName={u.name}
                                      votes={u.votes}
            />)}

        </>
    )
}

export default KickPage
