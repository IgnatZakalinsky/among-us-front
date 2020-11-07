import React from "react";

import RoomItem from "./RoomItem";

type PropsType = {
    user?: any
    onClick?: () => void
    color?: any
    status?: string
    kick?: string
}

// компонента для проверки таски
const Tp2 = (props: PropsType) => {
    const testOnClick = () => alert('!')

    return (
        <RoomItem/>
    )
}

export default Tp2
