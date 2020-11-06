import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import LoginPage from '../../../a2-features/f1-login/l1-ui/LoginPage'
import Page404 from './Page404'
import ElseRoutes from './ElseRoutes'
import RoomPage from "../../../a2-features/f2-room/r1-ui/RoomPage";
import GamePage from "../../../a2-features/f3-game/g1-ui/GamePage";
import ChatPage from "../../../a2-features/f4-chat/c1-ui/ChatPage";
import KickPage from "../../../a2-features/f5-kick/k1-ui/KickPage";

export const PATH = {
    LOGIN: '/login',
    ROOM: '/room',
    GAME: '/game',
    CHAT: '/chat',
    KICK: '/kick',

}

const Routes = () => {
    return (
        <Switch>
            <Route path={'/'} exact render={() => <Redirect to={PATH.LOGIN}/>}/>

            <Route path={PATH.LOGIN} exact render={() => <LoginPage/>}/>
            <Route path={PATH.ROOM} exact render={() => <RoomPage/>}/>
            <Route path={PATH.GAME} exact render={() => <GamePage/>}/>
            <Route path={PATH.CHAT} exact render={() => <ChatPage/>}/>
            <Route path={PATH.KICK} exact render={() => <KickPage/>}/>

            <ElseRoutes/>

            <Route render={() => <Page404/>}/>
        </Switch>
    )
}

export default Routes
