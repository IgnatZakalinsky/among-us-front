import React, {DetailedHTMLProps, HTMLAttributes} from 'react'
import s from './Text.module.css'

export type SpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

// шаблон универсальной (часто-используемой) компоненты
const Text: React.FC<SpanPropsType> = ({className, ...restProps}) => {
    const spanClassName = className ? className : s.text

    return (
        <span className={spanClassName} {...restProps}/>
    )
}

export default Text
