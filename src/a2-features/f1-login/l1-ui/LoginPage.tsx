import React from 'react'
import LoginSettingsContainer from './u2-login-settings/LoginSettingsContainer'
import LoginAuthPageContainer from "./draft/LoginAuthPageContainer";

// страница входа
// компонента, отвечающая за позиционирование контейнеров страницы
const LoginPage = () => {
    return (
        <div>
            <LoginAuthPageContainer/>

            <LoginSettingsContainer/>
        </div>
    )
}

export default LoginPage
