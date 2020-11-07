import React from 'react'
import Button from './Button'
import style from './ButtonsBox.module.css'


// компонента для проверки таски
const Buttons = () => {

  const btnName = [
    {
      title: 'использовать', id: 0, onClick: function (id: number) {
        alert(id)
      }
    },
    {
      title: 'убить', id: 1, onClick: function (id: number) {
        alert(id)
      }
    },
    {
      title: 'репорт', id: 2, onClick: function (id: number) {
        alert(id)
      }
    }
  ]

  return (
    <div className={style.buttonsBox}>
      {btnName.map(b => <Button key={b.id} id={b.id} onClick={b.onClick}>{b.title}</Button>)}
    </div>
  )
}

export default Buttons
