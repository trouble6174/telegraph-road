import React from "react";
import {RandomHexColors, GetHexStyle} from './hexColor.js'

class HexGrid extends React.Component {
    constructor(props) {
        super(props);
        this.num = props.num
    }

    render() {
        return (
            <div className="grid-container">
                {RandomHexColors(this.num).map(x => <div className="grid-cell" style={GetHexStyle(x)}>{x}</div>)}
            </div>
        )
    }
}

class HexColorGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.title
        this.count = 32
    }

    render() {
        return (
            <div className="hexContainer">
                <div className="title">A Week Of React</div>
                <div className="desc">{this.title}</div>
                <HexGrid num={this.count}/>
            </div>
        )
    }
}

export default HexColorGenerator;