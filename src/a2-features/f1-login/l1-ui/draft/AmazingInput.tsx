import React from 'react';

type AmazingInputPropsType = {
    onChange: () => void
    placeholder: string
    value: string

}

// готовая компонента или функция и т.д.
export const AmazingInput: React.FC<AmazingInputPropsType> = (
    {children, onChange, placeholder, value}
) => {
    return (
        <div>
            <input children={children} value={value} onChange={onChange} placeholder={placeholder}/>
        </div>
    );
};

export default AmazingInput;