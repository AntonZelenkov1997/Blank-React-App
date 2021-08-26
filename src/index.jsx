import React from 'react'
import * as ReactDOM from "react-dom"
import 'normalize.css'

import './scss/index.scss'

const App = () => {
    return (
        <div>
            <h1>Hello, React-Preset</h1>
        </div>
    )
}

const root = document.getElementById('root')

ReactDOM.render(<App />, root)