import React from 'react'
import LoginContainer from './u1-login/LoginContainer'
import LoginSettingsContainer from './u2-login-settings/LoginSettingsContainer'

// страница входа
// компонента, отвечающая за позиционирование контейнеров страницы
const LoginPage = () => {
    return (
        <div>
            <LoginContainer/>

            <LoginSettingsContainer/>
        </div>
    )
}

export default LoginPage
