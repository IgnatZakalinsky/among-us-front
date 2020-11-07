import React from 'react';

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
           <button type={'submit'} onClick={props.onClick}> {props.buttonName}</button>
        </>
    );
};

export default Tr4;
