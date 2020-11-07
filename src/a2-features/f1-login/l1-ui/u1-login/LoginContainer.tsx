import React from 'react'
import Login from './Login'
import LoginAuthPage from "../draft/taks1/LoginPage";

// компонента, отвечающая за логику и стэйты
const LoginContainer = () => {

    return (
        <>
            <LoginAuthPage
                placeholder={'Name'}
                name={''}
                onChange={() => {}}
                onClick={() => {}}
                error={null}
            />
        </>
    )
}

export default LoginContainer
