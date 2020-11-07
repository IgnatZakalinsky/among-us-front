import React from 'react'
import style from './User.module.css'


type VoteUserPropsType = {
    id: string
    kickHandler: () => void
    userColor: string
    userName: string
    votes: Array<string>
}


export const VoteUser: React.FC<VoteUserPropsType> = ({id, kickHandler, userColor, userName, votes}) => {
    return <>
        <div className={style.user}>
            <div className={style.userBody}>
                <div className={style.userColorName} style={{backgroundColor: `${userColor}`}}>{userName}</div>
                <div className={style.userVoteColors}>
                    {votes.map(color => <div key={color} className={style.userWhoVotes} style={{backgroundColor: `${color}`}}/>)}
                </div>
                <button className={style.userButton} onClick={kickHandler}>kick</button>
                {/*<button className={style.userButton} onClick={kickHandler(id, voteUserId)}>kick</button>*/}
            </div>
        </div>
    </>
}