import React from 'react'
import {VoteUser} from "./tr1/VoteUser"
import {useDispatch, useSelector} from 'react-redux'
import {voteUsersTC} from '../k2-bll/kickReducer'
import {VoteUserTime} from './tr1/VoteUserTime'
import style from './KickPage.module.css'
import {AppStateType} from '../../../a1-main/m2-bll/store'

// список игроков, проголосовать за игрока, ни за кого, таймер
const KickPage = () => {

    const dispatch = useDispatch()
    const isTimeOut = useSelector<AppStateType, boolean>(state => state.kick.isTimeOut)



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
            <div className={style.voteUserTime}><VoteUserTime/></div>
            {users.map(u => <VoteUser key={u._id}
                                      disabled={isTimeOut}
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
