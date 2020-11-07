import { ThunkAction } from 'redux-thunk'
import {InferActionsType} from '../../../a1-main/m2-bll/actions'
import {AppStateType} from '../../../a1-main/m2-bll/store'

export type LoginStateType = {
    loading: boolean
    success: boolean
    error: string
}

export const loginInitState: LoginStateType = {
    loading: false,
    success: false,
    error: '',
}

export const loginReducer = (state = loginInitState, action: LoginActionsType): LoginStateType => {
    switch (action.type) {
        case 'login/SET_ERROR': {
            return {
                ...state,
                error: action.error,
                loading: false,
                success: false,
            }
        }
        case 'login/SET_LOADING': {
            return {
                ...state,
                error: "",
                loading: action.loading,
                success: false,
            }
        }
        case 'login/SET_SUCCESS': {
            return {
                ...state,
                error: '',
                loading: false,
                success: action.success,
            }
        }

        default: {
            return state
        }
    }
}

export type LoginActionsType = InferActionsType<typeof LoginActions>

export const LoginActions = {
    setLoading: (loading: boolean) => ({
        type: 'login/SET_LOADING',
        loading,
    } as const),
    setSuccess: (success: boolean) => ({
        type: 'login/SET_SUCCESS',
        success,
    } as const),
    setError: (error: string) => ({
        type: 'login/SET_ERROR',
        error,
    } as const),

}

export const signIn = (name: string): ThunkAction<void, AppStateType, null, LoginActionsType> => async (
    dispatch,
    // getStore
) => {
    dispatch(LoginActions.setLoading(true))

    try {
        // const data = await LoginAPI.signIn(name)
        // console.log('LoginAPI.signIn: ', data)

        dispatch(LoginActions.setSuccess(true))
        // dispatch(ProfileActions.setUser(data))
    } catch (e) {
        const error = e.response ? e.response.data.error : (e.message + ', more details in the console')

        dispatch(LoginActions.setError(error))
    }
}
