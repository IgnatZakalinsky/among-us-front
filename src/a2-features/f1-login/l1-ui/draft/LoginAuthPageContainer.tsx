import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType} from "../../../../a1-main/m2-bll/store";
import LoginAuthPage from "./taks1/LoginPage";
import {baseURL, } from "../../../../a1-main/m3-dal/instance";
import socketIo from "socket.io-client";
import {signIn} from "../../l2-bll/loginReducer";

const LoginAuthPageContainer = () => {
    const dispatch = useDispatch();
    const error = useSelector<AppStateType, string | null>(state => state.login.error)
    const [state, setState] = useState('');
    const [name, setName] = useState('');

    // useEffect(() => {
    //
    // }, [])

    return (
        <LoginAuthPage
            error={error}
            onClick={() => {
                dispatch(signIn(''))
                // socket.emit('init', 'some', (answer: any) => {
                //     console.log(answer)
                //     // if (answer === 0) res(true)
                //     // else rej(answer)
                // })
            }}
            onChange={e => setName(e.currentTarget.value)}
            placeholder={'name'}
            name={name}
        />
    );
};

export default LoginAuthPageContainer;
