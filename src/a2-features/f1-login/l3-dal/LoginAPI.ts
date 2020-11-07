import {instance, socket} from '../../../a1-main/m3-dal/instance'


export type SignInDataType = {} & { error: string }

export const LoginAPI = {
    signIn: async (name: string) => {
        // const response = await instance.post<SignInDataType>('/auth/login', {name})
        //
        // return response.data

        return new Promise<boolean | string>((res, rej) => {
            socket.emit('init', 'some', (answer: any) => {
                if (answer === 0) res(true)
                else rej(answer)
            })
        })
    },

}
