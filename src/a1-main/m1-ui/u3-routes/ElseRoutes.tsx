import React from 'react'
import {Route} from 'react-router-dom'
import BackOffline1 from '../../../a3-devs/BackOffline1/BackOffline1'
import RequestOnline1 from '../../../a3-devs/RequestOnline1/RequestOnline1';
import RequestOnline2 from '../../../a3-devs/RequestOnline2/RequestOnline2'
import { RequestOnline6 } from '../../../a3-devs/RequestOnline6/RequestOnline6'
import BackOffline9 from '../../../a3-devs/BackOffline9/BackOffline9'
import RequestOnline5 from "../../../a3-devs/RequestOnline5/RequestOnline5";


export const ELSE_PATH = [
    {path: '/BackOffline1', Component: BackOffline1},
    {path: '/RequestOnline1', Component: RequestOnline1},
    {path: '/RequestOnline2', Component: RequestOnline2},
    {path: '/RequestOnline6', Component: RequestOnline6},
    {path: '/BackOffline9', Component: BackOffline9},

    {path: '/RequestOnline5', Component: RequestOnline5},
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
