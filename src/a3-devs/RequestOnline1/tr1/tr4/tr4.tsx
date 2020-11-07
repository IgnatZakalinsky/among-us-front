import React from 'react';
import st from './tr4.module.css'
import AmazingInput from '../components/AmazingInput';
import AmazingButton from '../components/AmazingButton';

type Tr4PropsType = {
    onChange: () => void
    placeholder: string
    error: string | null
    onClick: () => void

    }


const Tr4 = (props: Tr4PropsType) => {

    return (
        <div className={st.wrapper}>
            <span>Among Us</span>
            <span>v1</span>
            <span>Введите ваше имя:</span>
            <AmazingInput placeholder={props.placeholder} onChange={()=>{}}/>
            {props.error ? <div>{props.error}</div> : null}
            <div>
            <AmazingButton onClick={()=>{}} type={'submit'}>Login</AmazingButton>
            </div>

        </div>
    );
};

export default Tr4;
