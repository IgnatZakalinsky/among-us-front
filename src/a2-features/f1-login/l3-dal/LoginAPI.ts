import {instance} from '../../../a1-main/m3-dal/instance'


export type SignInDataType = {} & { error: string }

export const LoginAPI = {
    signIn: async (name: string) => {
        // const response = await instance.post<SignInDataType>('/auth/login', {name})
        //
        // return response.data
    },

}
