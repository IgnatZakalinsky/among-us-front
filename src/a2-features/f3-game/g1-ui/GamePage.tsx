import React from 'react'
import GameMap from './u1-game-map/GameMap'
import Keys from "./u2-keys/Keys";

// канвас, перемещение, кнопки использовать/убить/заявить/саботаж
const GamePage = () => {

    return (
        <>
            canvas, keys, time
            <hr/>

            <Keys>
                <GameMap/>
            </Keys>
        </>
    )
}

export default GamePage
