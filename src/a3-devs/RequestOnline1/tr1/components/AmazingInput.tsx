import React from 'react';

type AmazingInputPropsType = {
    onChange: () => void
    placeholder:string

}

// готовая компонента или функция и т.д.
export const AmazingInput: React.FC<AmazingInputPropsType> = (
    {children, onChange,placeholder}
) => {
    return (
        <div>
            <input children={children} onChange={onChange} placeholder={placeholder}/>
        </div>
    );
};

export default AmazingInput;