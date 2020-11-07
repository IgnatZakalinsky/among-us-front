import React from 'react'
import Button from './Button'
import style from './ButtonsBox.module.css'



// компонента для проверки таски
const Buttons = () => {

  const onClick = (index:number) => alert(index)

  const btnName = ['использовать', 'убить', 'репорт']

  return (
    <div className={style.buttonsBox}>
      {btnName.map((btnName, index) => <Button key={index} index={index}  onClick={onClick}>{btnName}</Button>)}
    </div>
  )
}

export default Buttons
