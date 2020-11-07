import React from 'react'
import {Route} from 'react-router-dom'
import BackOffline1 from '../../../a3-devs/BackOffline1/BackOffline1'
import RoomPage from "../../../a2-features/f2-room/r1-ui/RoomPage";

export const ELSE_PATH = [
    {path: '/BackOffline1', Component: BackOffline1},
    {path: '/RequestOnline5', Component: RoomPage},
    // добавить в массив себя

]


const ElseRoutes = () => {
    return (
        <>
            {ELSE_PATH.map(r => (
                <Route key={r.path} path={r.path} exact render={() => <r.Component/>}/>
            ))}

        </>
    )
}

export default ElseRoutes
