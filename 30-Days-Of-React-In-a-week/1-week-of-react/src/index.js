import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import cssLogoImage from './images/css_logo.png'
import jsLogoImage from './images/javascript_logo.png'
import reactLogoImage from './images/react_logo.png'
import htmlLogoImage from './images/html_logo.png'
import avatarImage from './images/avatar400.png'

const ex1 = (
    <article className="ex1">
        <h4 className="ex1-title">Front End Technologies</h4>
        <article className="ex1-logo">
            <img src={cssLogoImage} alt="css"/>
            <img src={jsLogoImage} alt="js"/>
            <img src={htmlLogoImage} alt="html"/>
            <img src={reactLogoImage} alt="react"/>
        </article>
    </article>
)

const ex2Description = "Sign up with your email address to receive news and updates"
const ex2 = (
    <div className="ex2">
        <div className="ex2-inner">
            <div className="ex2-title">SUBSCRIBE</div>
            <div className="ex2-title-desc">{ex2Description}</div>
            <label className="ex2-input">
                <input placeholder="First name"/>
                <input placeholder="Last name"/>
                <input placeholder="Email name"/>
            </label>
            <button className="ex2-button">Subscribe</button>
        </div>
    </div>
)

const ex3Name = "TROUBLE6174"
const ex3Title = "Unemployed, Cruel China"
const ex3Date = "Joined on Mar 30, 2022"
const mySkills = ["Python", "JavaScript", "Golang", "Django", "FastApi", "Docker",
    "Kubernetes", "CSS", "Regex", "SQL", "Linux", "React", "Git", "Aiohttp", "Grafana"]
const ex3 = (
    <div className="ex3">
        <div className="avatar">
            <img src={avatarImage} alt="avatar"/>
        </div>
        <div className="ex3-name">{ex3Name}</div>
        <div className="ex3-title">{ex3Title}</div>
        <div className="ex3-skills-title">SKILLS</div>
        <div className="ex3-skills">
            {mySkills.map(x => <button key={x}>{x}</button>)}
        </div>
        <div className="ex3-footer">{ex3Date}</div>
    </div>
)

const app = (
    <div className="container">
        {ex1}
        {ex2}
        {ex3}
    </div>
)
const rootElement = document.getElementById('root')
const root = ReactDOMClient.createRoot(rootElement)
root.render(app)