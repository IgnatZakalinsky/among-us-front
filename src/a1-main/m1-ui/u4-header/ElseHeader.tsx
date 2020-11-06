import React from 'react'
import {NavLink} from 'react-router-dom'
import {ELSE_PATH} from '../u3-routes/ElseRoutes'

const ElseHeader = () => {
    return (
        <div>
            {ELSE_PATH.map(n => (
                <NavLink to={n.path} key={n.path}>{n.path}</NavLink>
            ))}

        </div>
    )
}

export default ElseHeader
