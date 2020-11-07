import React, {KeyboardEvent, useEffect, useRef} from 'react'

const Keys: React.FC = ({children}) => {
    const ref = useRef<HTMLDivElement | null>(null)

    const keyPress = (e: KeyboardEvent<HTMLDivElement>) => {
        console.log(e.key)
    }

    useEffect(() => {
        ref && ref.current && ref.current.focus()
    }, [])

    return (
        <div tabIndex={0} onKeyDown={keyPress} style={{height: 600, background: 'lime'}} ref={ref}>
            {children}
        </div>
    )
}

export default Keys
