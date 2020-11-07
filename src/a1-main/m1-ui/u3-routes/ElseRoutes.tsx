import React from 'react'
import {Route} from 'react-router-dom'
import BackOffline1 from '../../../a3-devs/BackOffline1/BackOffline1'
import RequestOnline1 from '../../../a3-devs/AleksanderDubrovskii/RequestOnline1';

export const ELSE_PATH = [
    {path: '/BackOffline1', Component: BackOffline1},
    {path: '/RequestOnline1', Component: RequestOnline1},
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
