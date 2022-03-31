const RandomHexColors = (count = 5) => {
    const chars = "ABCDEF0123456789"
    let results = []
    for (let i = 0; i < count; i++) {
        let tmp = ""
        for (let j = 0; j < 6; j++) {
            tmp += chars[Math.floor(Math.random() * chars.length)]
        }
        results.push("#" + tmp)
    }
    return results
}

const GetHexStyle = function (color) {
    return {"background-color": color}
}

const HexContainer = () => {
    return (
        <div className="hexContainer">
            {RandomHexColors(8).map(x => <div className="hex" style={GetHexStyle(x)}>{x}</div>)}
        </div>
    )
}

export {HexContainer, RandomHexColors, GetHexStyle};