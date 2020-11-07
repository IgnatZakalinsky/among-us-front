import React from 'react'
import style from './User.module.css'


type VoteUserPropsType = {
    onClick: () => void
    color: string
    name: string
}


export const VoteUser: React.FC<VoteUserPropsType> = ({onClick, color, name}) => {
    return <>
        <div className={style.user}>
            <div className={style.userBody}>
                <div className={style.userColor} style={{backgroundColor: `${color}`}}>color</div>
                <div className={style.userName}>{name}</div>
                <button className={style.userButton} onClick={onClick}>click</button>
            </div>
        </div>
    </>
}