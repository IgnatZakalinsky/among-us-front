import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {loginReducer} from '../../a2-features/f1-login/l2-bll/loginReducer'
import {kickReducer} from '../../a2-features/f5-kick/k2-bll/kickReducer'

const reducers = combineReducers({
    login: loginReducer,
    kick: kickReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store

export type AppStateType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
