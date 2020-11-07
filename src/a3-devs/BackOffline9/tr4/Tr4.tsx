import React from 'react'
import Button from './Button'

// компонента для проверки таски
const Tr4 = () => {

  const testOnClick = (index:number) => alert(index)

  const btnName = ['использовать', 'убить', 'репорт']

  return (
    <>
      {btnName.map((btnName, index) => <Button key={index} index={index}  onClick={testOnClick}>{btnName}</Button>)}
    </>
  )
}

export default Tr4
