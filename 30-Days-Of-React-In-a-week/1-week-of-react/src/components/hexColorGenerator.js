import React from "react";
import {RandomHexColors, GetHexStyle} from './hexColor.js'
import {Helmet} from 'react-helmet'

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

const MemoHexGrid = React.memo(HexGrid)

class HexColorGenerator extends React.Component {
    night = 'body { background-color: black; color: white; }'
    state = {
        isNight: false,
        refreshHex: false
    }

    constructor(props) {
        super(props);
        this.title = props.title
        this.count = 32
    }

    changeBackground = () => {
        this.setState({isNight: !this.state.isNight, refreshHex: false})
    }

    refreshHex = () => {
        this.setState({refreshHex: true})
    }

    render() {
        return (
            <div className="hexContainer">
                <Helmet>
                    <style>{this.state.isNight ? this.night : ""}</style>
                </Helmet>
                <div className="title">A Week Of React</div>
                <div className="desc">{this.title}</div>
                {
                    this.state.refreshHex ? <HexGrid num={this.count}/> : <MemoHexGrid num={this.count}/>
                }

                <div className="action">
                    <button onClick={this.changeBackground}>Change Background</button>
                    <button onClick={this.refreshHex}>Regenerate</button>
                </div>
            </div>
        )
    }
}

export default HexColorGenerator;