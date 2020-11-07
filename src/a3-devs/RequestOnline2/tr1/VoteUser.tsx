import React from 'react'
import style from './User.module.css'


type VoteUserPropsType = {
    onClick: () => void
    userColor: string
    userName: string
    voteUsers: Array<string>
}


export const VoteUser: React.FC<VoteUserPropsType> = ({onClick, userColor, userName, voteUsers}) => {
    return <>
        <div className={style.user}>
            <div className={style.userBody}>
                <div className={style.userColorName} style={{backgroundColor: `${userColor}`}}>{userName}</div>
                <div className={style.userVoteColors}>
                    {voteUsers.map(u => <div className={style.userWhoVotes} style={{backgroundColor: `${u}`}}/>)}
                </div>
                <button className={style.userButton} onClick={onClick}>click</button>
            </div>
        </div>
    </>
}