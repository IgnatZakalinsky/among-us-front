import React from 'react'
import AmazingButton from './AmazingButton'

// компонента для проверки таски
const Tp1 = () => {
    const testOnClick = () => alert('!')

    return (
        <>
            <AmazingButton onClick={testOnClick}>xxx</AmazingButton>
        </>
    )
}

export default Tp1
