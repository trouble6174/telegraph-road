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
