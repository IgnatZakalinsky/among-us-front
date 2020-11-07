import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {kickActions} from '../../k2-bll/kickReducer'


export const VoteUserTime = () => {

    const dispatch = useDispatch()
    const [time, setTime] = useState(12)


    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(time => time - 1)
        }, 1000)
        if (time < 1) {
            clearInterval(intervalId)
            dispatch(kickActions.setIsTimeOutAC(true))
        }
        return () => clearInterval(intervalId)
    })

    return <>Осталось {time} сек</>
}