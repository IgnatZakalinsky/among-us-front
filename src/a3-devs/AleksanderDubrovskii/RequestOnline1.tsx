import React from 'react'
import Tp1 from './tp1/Tp1'
import Tr4 from './tr1/tr4/tr4';




// компонента для отображения всех тасок
const RequestOnline1 = () => {

    return (
        <div>

            <div>
                <hr/>
                <Tr4 error={null} onChange={()=>{}} onClick={()=>{alert('work')}} buttonName={'Login'}/>
                <Tp1/>


            </div>
        </div>
    )
}

export default RequestOnline1
