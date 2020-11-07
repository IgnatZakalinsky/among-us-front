import {ThunkAction} from 'redux-thunk'
import {InferActionsType} from "../../../../a1-main/m2-bll/actions";
import {AppStateType} from "../../../../a1-main/m2-bll/store";


export type UserStateType = {
    id: number,
    disCount: number,
    status: string,
    name: string,
    color: string,
}

export const UserInitState: UserStateType[] = [
    {
        id: 1,
        disCount: 0,
        status: 'готов',
        name: 'Andrei',
        color: '#777777',
    }

]


export const RoomUserReducer = (state = UserInitState, action: RoomActionsType) => {
    switch (action.type) {
        case 'Room/SET_USERS': {
            return {
                ...state,

            }
        }

        default: {
            return state
        }
    }
}

export type RoomActionsType = InferActionsType<typeof RoomUserActions>

export const RoomUserActions = {
    setLoading: (loading: boolean) => ({
        type: 'Room/SET_USERS',

    } as const)


}

export const signIn = (name: string): ThunkAction<void, AppStateType, null, RoomActionsType> => async (
    dispatch,
    // getStore
) => {

}
