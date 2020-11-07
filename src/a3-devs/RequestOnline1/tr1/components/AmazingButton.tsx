import React from 'react'

export type AmazingButtonPropsType = {
    onClick: () => void
    type: 'submit'
}

// готовая компонента или функция и т.д.
const AmazingButton: React.FC<AmazingButtonPropsType> = (
    {children, onClick,type}
) => {
    return (
        <div>
            <button children={children} onClick={onClick} type={type} />
        </div>
    )
}

export default AmazingButton
