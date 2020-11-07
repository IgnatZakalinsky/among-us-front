import React from 'react';
import AmazingButton from '../../tp1/AmazingButton';

type Tr4PropsType = {
    onChange: () => void
    buttonName: string
    error: string | null
    onClick: () => void
}


// компонента для проверки таски
const Tr4 = (props: Tr4PropsType) => {


    return (
        <>
            <div><input onChange={props.onChange}/></div>
            {props.error ? <div>{props.error}</div> : null}
            <AmazingButton onClick={props.onClick}>{props.buttonName}</AmazingButton>
        </>
    );
};

export default Tr4;
