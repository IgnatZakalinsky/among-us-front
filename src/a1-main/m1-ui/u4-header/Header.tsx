import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from '../u3-routes/Routes'
import ElseHeader from './ElseHeader'
import s from './Header.module.css'

const Header = () => {
    return (
        <>
            <div className={s.header}>
                <NavLink to={PATH.LOGIN}>login</NavLink>
                <NavLink to={PATH.ROOM}>room</NavLink>
                <NavLink to={PATH.GAME}>game</NavLink>
                <NavLink to={PATH.CHAT}>chat</NavLink>
                <NavLink to={PATH.KICK}>kick</NavLink>
            </div>

            <div className={s.header}>
                <ElseHeader/>
            </div>
        </>
    )
}

export default Header
