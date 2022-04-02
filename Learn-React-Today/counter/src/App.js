import Counter from "./Counter";
import CounterHooks from "./CounterHooks";
import React, {useState} from "react";

export const ThemeContext = React.createContext()

function App() {
    const [theme, setTheme] = useState("red")
    return (
        <ThemeContext.Provider value={{backgroundColor: theme}}>
            <Counter initialCount={0}/>
            <CounterHooks initialCount={0}/>
            <button onClick={() => setTheme(prevTheme => prevTheme === 'red' ? 'blue' : 'red')}>Toggle Theme</button>
        </ThemeContext.Provider>
    )
}

export default App;
