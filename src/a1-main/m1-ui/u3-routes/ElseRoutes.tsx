import React from 'react'
import {Route} from 'react-router-dom'
import BackOffline1 from '../../../a3-devs/BackOffline1/BackOffline1'
import RequestOnline2 from '../../../a3-devs/RequestOnline2/RequestOnline2'

export const ELSE_PATH = [
    {path: '/BackOffline1', Component: BackOffline1},
    {path: '/RequestOnline2', Component: RequestOnline2},
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
