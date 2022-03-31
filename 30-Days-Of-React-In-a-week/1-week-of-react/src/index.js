import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import TechApp from './components/techSubscProfile.js'
import HexContainer from "./components/hexColor";

const rootElement = document.getElementById('root')
const root = ReactDOMClient.createRoot(rootElement)


const Numbers = (props) => {
    return props.data.map((number) => <li>{number}</li>)
}

// App component

const App = () => {
    const numbers = [1, 2, 3, 4, 5]

    return (
        <div className='container'>
            <div>
                <h1>Numbers List</h1>
                <ul>
                    <Numbers data={numbers}/>
                </ul>
            </div>
        </div>
    )
}

root.render(<App/>)


// root.render(<TechApp/>)
// root.render(<HexContainer/>)