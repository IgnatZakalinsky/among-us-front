import React from 'react'
import style from './Button.module.css'

export type AmazingButtonPropsType = {
  onClick: (index:number) => void
  index:number
}

// готовая компонента или функция и т.д.
const Button: React.FC<AmazingButtonPropsType> = ({children,index, onClick}) => {
  return (
    <div className={style.buttonBox}>
      <button className={style.button} children={children} onClick={()=>onClick(index)}/>
    </div>
  )
}

export default Button
