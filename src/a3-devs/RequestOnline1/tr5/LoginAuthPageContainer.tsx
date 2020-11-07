import React, {useState} from 'react';
import LoginAuthPage from '../../../a2-features/f1-login/l1-ui/draft/taks1/LoginPage';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../a1-main/m2-bll/store';



const LoginAuthPageContainer = () => {
    const dispatch = useDispatch();
    const error = useSelector<AppStateType,string | null>(state => state.login.error)
    const [state, setState] = useState('');
    const [name, setName] = useState('');





    return (
        <LoginAuthPage error={error} onClick={() => {
        }} onChange={() => {
        }} placeholder={'name'} name={name}/>
    );
};

export default LoginAuthPageContainer;
