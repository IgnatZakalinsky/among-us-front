import React from "react";
import AmazingButton from "../../BackOffline1/tp1/AmazingButton";

type PropsType = {
    user?: any
    onClick?: () => void
    color?: any
}

// компонента для проверки таски
const Tp2 = (props:PropsType) => {
    const testOnClick = () => alert('!')

    return (
        <div>
            <p>{props.user}</p>
           <div></div>
            <span>0</span>
            <AmazingButton onClick={testOnClick}>{}</AmazingButton>
            <AmazingButton onClick={testOnClick}>{}</AmazingButton>
        </div>

    )
}

export default Tp2
