import React from 'react'
import AmazingButton from './components/AmazingButton'

// компонента для проверки таски
const Tp1 = () => {
    const testOnClick = () => alert('!')

    return (
        <>
            <AmazingButton type={'submit'} onClick={testOnClick}>xxx</AmazingButton>
        </>
    )
}

export default Tp1
