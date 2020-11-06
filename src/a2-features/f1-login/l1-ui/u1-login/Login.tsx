import React from 'react'
import Text from '../../../../a1-main/m1-ui/u0-common/c1-text/Text'

// компонента, отвечающая за вёрстку, здесь не должно быть логики, по возможности
const Login = () => {
    return (
        <>
            <div>
                <Text>login</Text>
            </div>

            <div>name: <input/></div>

            <div><button>connect...</button></div>
        </>
    )
}

export default Login
