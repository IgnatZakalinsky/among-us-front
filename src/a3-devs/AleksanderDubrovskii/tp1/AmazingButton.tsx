import React from 'react'

export type AmazingButtonPropsType = {
    onClick: () => void
}

// готовая компонента или функция и т.д.
const AmazingButton: React.FC<AmazingButtonPropsType> = (
    {children, onClick}
) => {
    return (
        <div>
            <button children={children} onClick={onClick}/>
        </div>
    )
}

export default AmazingButton
