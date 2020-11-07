import React from "react";
import Tp2 from "./Tp2";

type PropsType = {
    user?: any
    onClick?: () => void
    color?: any
    status?: string
    kick?: string
    count?: number
}

// компонента для проверки таски
const RoomItem = (props: PropsType) => {

    return (
        <>
            <Tp2/>
        </>
    )
}

export default RoomItem
