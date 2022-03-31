import React from "react";

const tenHighestPopulation = [
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


class Item extends React.Component {
    constructor(props) {
        super(props);
        this.style = {width: `${props.width}%`}
        this.count = props.count.toLocaleString("en-US")
    }

    render() {
        return (
            <div className="item">
                <span>{this.props.name}</span>
                <div className="bar">
                    <div className="bar-fill" style={this.style}/>
                </div>
                <span>{this.count}</span>
            </div>
        )
    }
}

class Top10Item extends React.Component {
    constructor(props) {
        super(props);
        this.total = tenHighestPopulation.filter(x => x.country === 'World')[0].population
    }

    getWidth(n) {
        return (n * 100 / this.total).toFixed(2)
    }

    render() {
        const items = tenHighestPopulation.map(
            x => <Item name={x.country}
                       count={x.population}
                       width={this.getWidth(x.population)}/>
        )
        return (
            <div className="top10">
                {items}
            </div>
        )
    }
}

class TopPopulation extends React.Component {
    constructor(props) {
        super(props);
        this.title = "A Week Of React"
        this.desc = "World Population"
        this.detail = "Ten most populated Counties"
    }

    render() {
        return (
            <div className="listContainer">
                <div className="title">{this.title}</div>
                <div className="desc">{this.desc}</div>
                <div className="detail">{this.detail}</div>
                <Top10Item/>
            </div>
        )
    }
}

export default TopPopulation;