import React from 'react'

export type AmazingButtonPropsType = {
  onClick: (index:number) => void
  index:number
}

// готовая компонента или функция и т.д.
const Button: React.FC<AmazingButtonPropsType> = ({children,index, onClick}) => {
  return (
    <div>
      <button children={children} onClick={()=>onClick(index)}/>
    </div>
  )
}

export default Button
