import {GetHexStyle} from './hexColor.js'

const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num > 1;
}

const NumGrid = (props) => {
    const numColors = []
    const green = "#21BF73"
    const yellow = "#FDDE4A"
    const red = "#FD5E53"
    for (let n = 0; n < props.num; n++) {
        if (n % 2 === 0) {
            numColors.push({color: green, n})
        } else if (isPrime(n)) {
            numColors.push({color: red, n})
        } else {
            numColors.push({color: yellow, n})
        }
    }
    return (
        <div className="grid-container">
            {numColors.map(x => <div key={x} className="grid-cell" style={GetHexStyle(x.color)}>{x.n}</div>)}
        </div>
    )
}

const NumGenerator = (props) => {
    return (
        <div className="hexContainer">
            <div className="title">A Week Of React</div>
            <div className="desc">{props.title}</div>
            <NumGrid num={32}/>
        </div>
    )
}
export default NumGenerator;