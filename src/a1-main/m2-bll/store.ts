import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {loginReducer} from '../../a2-features/f1-login/l2-bll/loginReducer'
import {chatReducer} from "../../a3-devs/RequestOnline6/tr3/chatReducer";

const reducers = combineReducers({
    login: loginReducer,
    chat: chatReducer,

})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store

export type AppStateType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
