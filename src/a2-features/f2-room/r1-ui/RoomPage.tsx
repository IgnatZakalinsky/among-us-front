import React from 'react'
import RoomUser from "./draft/RoomUser";

// список игроков в комнате, ожидание, начало игры, выбор скинов, настройка правил игры
const RoomPage = () => {
    return (
        <>
            users, start, skins, settings, kick, room password
            <hr/>
            <RoomUser
                onClick={() => {}}
                disCount={0}
                kick={() => {}}
                status={'no'}
                user={'some name'}
                color={'#777777'}
            />
        </>
    )
}

export default RoomPage
