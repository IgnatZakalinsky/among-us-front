import React from 'react';
import st from './LoginPage.module.css'
import AmazingInput from '../AmazingInput';
import AmazingButton from '../AmazingButton';

type LoginAuthPagePropsType = {
    onChange: () => void
    placeholder: string
    error: string | null
    onClick: () => void

    }


const LoginAuthPage = (props: LoginAuthPagePropsType) => {

    return (
        <div className={st.wrapper}>
            <div className={st.header}>
                <span>Among Us</span>
                <span>v1</span>
            </div>

            <span>Введите ваше имя:</span>
            <AmazingInput placeholder={props.placeholder} onChange={()=>{}}/>
            {props.error ? <div>{props.error}</div> : null}
            <div>
            <AmazingButton onClick={()=>{alert('work')}} type={'submit'}>Login</AmazingButton>
            </div>

        </div>
    );
};

export default LoginAuthPage;
