import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType} from "../../../../a1-main/m2-bll/store";
import LoginAuthPage from "./taks1/LoginPage";

const LoginAuthPageContainer = () => {
    const dispatch = useDispatch();
    const error = useSelector<AppStateType, string | null>(state => state.login.error)
    const [state, setState] = useState('');
    const [name, setName] = useState('');

    return (
        <LoginAuthPage
            error={error}
            onClick={() => {

            }}
            onChange={e => setName(e.currentTarget.value)}
            placeholder={'name'}
            name={name}
        />
    );
};

export default LoginAuthPageContainer;
