import {InferActionsType} from '../../../a1-main/m2-bll/actions'
import {Dispatch} from 'redux'

export const kickInitialState: KickInitialStateType = {
    _id: '1',
    name: 'user1',
    color: 'grey',
    disCount: 0,
    isAlive: true,
    isImpostor: false,
    votes: ['blue', 'yellow'],
    x: 0,
    y: 0,
}


export const kickReducer = (state = kickInitialState, action: KickActionsType): KickInitialStateType => {
    switch (action.type) {
        case 'amount/kick/SET_VOTES':
            return {...state, votes: [...state.votes, action.value]}
        default: return state
    }
}


export const kickActions = {
    setVotesAC: (value: string) => ({type: 'amount/kick/SET_VOTES', value} as const)
}


export const voteUsersTC = (userId: string, voteUserId: string) => async (dispatch: Dispatch) => {
    // try {
    //     const data = await kickAPI.someRequest()
    //     if (!data.resultCode) {
    //         dispatch(kickActions.setVotesAC(userId, voteUserId))
    //     }
    // } catch (error) {
    //     console.log(error.message)
    // }
}


type KickInitialStateType = {
    _id: string
    name: string
    color: string
    disCount: number
    isAlive: boolean
    isImpostor: boolean
    votes: Array<string>
    x: number
    y: number
}
type KickActionsType = InferActionsType<typeof kickActions>