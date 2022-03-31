export const tenHighestPopulation = [
    {country: 'World', population: 7693165599},
    {country: 'China', population: 1377422166},
    {country: 'India', population: 1295210000},
    {country: 'USA', population: 323947000},
    {country: 'Indonesia', population: 258705000},
    {country: 'Brazil', population: 206135893},
    {country: 'Pakistan', population: 194125062},
    {country: 'Nigeria', population: 186988000},
    {country: 'Bangladesh', population: 161006790},
    {country: 'Russian', population: 146599183},
    {country: 'Japan', population: 126960000},
]


const Item = ({width, count, name}) => {
    const style = {width: `${width}%`}
    return (
        <div className="item">
            <span>{name}</span>
            <div className="bar">
                <div className="bar-fill" style={style}/>
            </div>
            <span> {count.toLocaleString("en-US")}</span>
        </div>
    )
}

const Top10Item = () => {
    const total = tenHighestPopulation.filter(x => x.country === 'World')[0].population
    const items = tenHighestPopulation.map(
        x => <Item name={x.country}
                   count={x.population}
                   width={(x.population * 100 / total).toFixed(1)}/>
    )
    return (
        <div className="top10">
            {items}
        </div>
    )
}

const TopPopulation = () => {
    return (
        <div className="listContainer">
            <div className="title">A Week Of React</div>
            <div className="desc">World Population</div>
            <div className="detail">Ten most populated Counties</div>
            <Top10Item/>
        </div>
    )
}
export default TopPopulation;