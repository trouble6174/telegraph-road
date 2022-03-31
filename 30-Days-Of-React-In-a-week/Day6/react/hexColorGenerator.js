import {RandomHexColors, GetHexStyle} from './hexColor.js'

const HexGrid = (props) => {
    return (
        <div className="grid-container">
            {RandomHexColors(props.num).map(x => <div className="grid-cell" style={GetHexStyle(x)}>{x}</div>)}
        </div>
    )
}

const HexColorGenerator = (props) => {
    return (
        <div className="hexContainer">
            <div className="title">A Week Of React</div>
            <div className="desc">{props.title}</div>
            <HexGrid num={32}/>
        </div>
    )
}
export default HexColorGenerator;