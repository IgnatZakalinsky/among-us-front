import React from 'react';
import st from './LoginPage.module.css'
import AmazingInput from '../AmazingInput';
import AmazingButton from '../AmazingButton';

type LoginAuthPagePropsType = {
    onChange: () => void
    placeholder: string
    error: string | null
    onClick: () => void
    name: string
    }


const LoginAuthPage = (props: LoginAuthPagePropsType) => {

    return (
        <div className={st.wrapper}>
            <div className={st.header}>
                <div>Among Us</div>
                <div>v1</div>
            </div>

            <span>Введите ваше имя:</span>
            <AmazingInput placeholder={props.placeholder} value={props.name} onChange={()=>{}}/>
            {props.error ? <div>{props.error}</div> : null}
            <div>
            <AmazingButton onClick={props.onClick} type={'submit'}>Login</AmazingButton>
            </div>

        </div>
    );
};

export default LoginAuthPage;
