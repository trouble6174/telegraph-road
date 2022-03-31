import React from "react";
import {GetHexStyle} from './hexColor.js'


class NumGrid extends React.Component {
    constructor(props) {
        super(props);
    }

    isPrime = num => {
        for (let i = 2, s = Math.sqrt(num); i <= s; i++)
            if (num % i === 0) return false;
        return num > 1;
    }

    render() {
        const numColors = []
        const green = "#21BF73"
        const yellow = "#FDDE4A"
        const red = "#FD5E53"
        for (let n = 0; n < this.props.num; n++) {
            if (n % 2 === 0) {
                numColors.push({color: green, n})
            } else if (this.isPrime(n)) {
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
}

class NumGenerator extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="hexContainer">
                <div className="title">A Week Of React</div>
                <div className="desc">{this.props.title}</div>
                <NumGrid num={32}/>
            </div>
        )
    }
}

export default NumGenerator;