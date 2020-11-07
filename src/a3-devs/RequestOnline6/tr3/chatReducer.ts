import {Reducer} from "redux";
import {InferActionsType} from "../../../a1-main/m2-bll/actions";

export type InitialStateType = typeof initialState

const initialState = [
    {
        id: "1",
        userColor: 'red',
        name: 'Bob',
        message: "hi my name bob",
        time: '11:11',
    },
    {
        id: "2",
        userColor: 'green',
        name: 'Viktor',
        message: "i from siberia",
        time: '11:11',
    },
    {
        id: "3",
        userColor: 'blue',
        name: 'Igor',
        message: "hi  viktor!",
        time: '11:11',
    },

]

type ActionTypes = InferActionsType<typeof actions>

export const chatReducer: Reducer<InitialStateType, ActionTypes> = (state = initialState, action): InitialStateType => {

    switch (action.type) {
        case "ADD_NEW_MESSAGE":
            return [...state, {id: "4", userColor: "black", name: "Blade", message: action.text, time: '12:12'}]
        default:
            return state
    }
}

export const actions = {
    addNewMessage: (text: string) => ({type: 'ADD_NEW_MESSAGE', text} as const)
}

const thunks = {}
