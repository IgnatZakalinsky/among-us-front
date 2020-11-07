import React from "react";
import s from './tp2.module.css'

type PropsType = {
    user: string
    onClick: () => void
    color: string
    status: string
    kick: () => void
    disCount: number
}

// компонента для проверки таски
const RoomUser = (props: PropsType) => {

    return (
        <div className={s.roomItem}>
            <div style={{width: '100px'}}>
                <span>{props.user}</span>
                <div style={{background: props.color, height: '20px', width: '20px'}}/>
            </div>
            <div style={{width: '400px'}}>
                <span>{props.disCount}</span>
                <button onClick={props.kick}>kick</button>
                <button onClick={props.onClick}>{props.status}</button>
            </div>
        </div>
    )
}

export default RoomUser
