import cssLogoImage from '../images/css_logo.png'
import jsLogoImage from '../images/javascript_logo.png'
import reactLogoImage from '../images/react_logo.png'
import htmlLogoImage from '../images/html_logo.png'
import avatarImage from '../images/avatar400.png'

const FrontEndTechComponent = (props) => {
    const {css, js, react, html} = props.data.url
    const {css: cssAlt, js: jsAlt, react: reactAlt, html: htmlAlt} = props.data.alt
    return (
        <div className="ex1">
            <h4 className="ex1-title">Front End Technologies</h4>
            <article className="ex1-logo">
                <img src={css} alt={cssAlt}/>
                <img src={js} alt={jsAlt}/>
                <img src={html} alt={htmlAlt}/>
                <img src={react} alt={reactAlt}/>
            </article>
        </div>
    )
}

const SubscribeComponent = (props) => {
    const {title, desc, button} = props.data
    return (
        <div className="ex2">
            <div className="ex2-inner">
                <div className="ex2-title">{title}</div>
                <div className="ex2-title-desc">{desc}</div>
                <label className="ex2-input">
                    <input placeholder="First name"/>
                    <input placeholder="Last name"/>
                    <input placeholder="Email name"/>
                </label>
                <button className="ex2-button">{button}</button>
            </div>
        </div>
    )
}

const ProfileComponent = (props) => {
    const {name, title, date, skills, imgSrc} = props.data
    return (
        <div className="ex3">
            <div className="avatar">
                <img src={imgSrc} alt="avatar"/>
            </div>
            <div className="ex3-name">{name}</div>
            <div className="ex3-title">{title}</div>
            <div className="ex3-skills-title">SKILLS</div>
            <div className="ex3-skills">
                {skills.map(x => <button key={x}>{x}</button>)}
            </div>
            <div className="ex3-footer">{date}</div>
        </div>
    )

}

const TechApp = () => {
    const techs = {
        alt: {
            css: "css",
            js: "javascript",
            react: "react",
            html: "html"
        },
        url: {
            css: cssLogoImage,
            js: jsLogoImage,
            react: reactLogoImage,
            html: htmlLogoImage
        }
    }
    const subscribe = {
        title: "SUBSCRIBE",
        button: "Subscribe",
        desc: "Sign up with your email address to receive news and updates",
    }
    const profile = {
        name: "TROUBLE6174",
        title: "Unemployed, Cruel China",
        date: "Joined on Mar 30, 2022",
        skills: ["Python", "JavaScript", "Golang", "Django", "FastApi", "Docker",
            "Kubernetes", "CSS", "Regex", "SQL", "Linux", "React", "Git", "Aiohttp", "Grafana"],
        imgSrc: avatarImage
    }
    return (
        <div className="container">
            <FrontEndTechComponent data={techs}/>
            <SubscribeComponent data={subscribe}/>
            <ProfileComponent data={profile}/>
        </div>
    )
}

export default TechApp