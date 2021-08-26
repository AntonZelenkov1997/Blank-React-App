import React from 'react'
import * as ReactDOM from "react-dom"
import 'normalize.css'

import './assets/scss/index.scss'
import MainButton from "./components/MainButton/MainButton";

const App = () => {
    return (
        <div>
            <h1>Hello, React-Preset</h1>
            <MainButton title="Кнопка с scoped стилем" />
        </div>
    )
}

const root = document.getElementById('root')

ReactDOM.render(<App />, root)