import React from "react";
import s from './tp2.module.css'

type PropsType = {
    user?: any
    onClick?: () => void
    color?: any
    status?: string
    kick?: string
    count?: number
}

// компонента для проверки таски
const Tp2 = (props: PropsType) => {

    return (
        <div className={s.roomItem}>
            <div>
                <p>{props.user}</p>
                <div className={s.ava}></div>
            </div>
            <div>
                <span>{props.count}</span>
                <button>{props.status}</button>
                <button>{props.kick}</button>
            </div>
        </div>
    )
}

export default Tp2
