import React from 'react'
import style from './Button.module.css'

export type AmazingButtonPropsType = {
  onClick: (index:number) => void
  id:number
}

// готовая компонента или функция и т.д.
const Button: React.FC<AmazingButtonPropsType> = ({children,id, onClick}) => {
  return (
    <div className={style.buttonContainer}>
      <button className={style.button} children={children} onClick={()=>onClick(id)}/>
    </div>
  )
}

export default Button
