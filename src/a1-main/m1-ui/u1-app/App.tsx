import React from 'react'
import './App.css'
import Main from '../u2-main/Main'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from "react-redux";
import store from '../../m2-bll/store'

// contexts
const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className='App'>
                    <Main/>
                </div>
            </Provider>
        </BrowserRouter>
    )
}

export default App
