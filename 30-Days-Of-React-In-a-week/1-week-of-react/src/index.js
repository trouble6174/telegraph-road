import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import TechApp from './components/techSubscProfile.js'
import HexColorGenerator from "./components/hexColorGenerator"
import NumGenerator from "./components/numGenerator"
import TopPopulation from "./components/worldPopulationT10"

const rootElement = document.getElementById('root')
const root = ReactDOMClient.createRoot(rootElement)

// import HexContainer from "./components/hexColor";
// root.render(<HexContainer/>)


// root.render(<TechApp/>)
root.render(<HexColorGenerator title="Hexadecimal Colors"/>)
// root.render(<TopPopulation/>)
// root.render(<NumGenerator title="Number Generator"/>)
//
//
// class App extends React.Component {
//
//
//     state = {
//         imagex: 0,
//     }
//
//     render() {
//         // accessing the state value
//         const count = this.state.imagex
//         return (
//             <div className='App'>
//                 <h1>{count} </h1>
//
//                 <div>
//                     <button
//                         onClick={() => this.setState({imagex: this.state.imagex + 1})}
//                     >
//                         Add One
//                     </button>
//                     {' '}
//                     <button
//                         onClick={() => this.setState({imagex: this.state.imagex - 1})}
//                     >
//                         Minus One
//                     </button>
//                 </div>
//             </div>
//         )
//     }
// }
//
// root.render(<App/>)