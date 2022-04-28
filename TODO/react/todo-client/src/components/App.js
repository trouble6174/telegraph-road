import '../css/main.css'
import NavBar from "./NavBar";
import ProjectList from "./ProjectList";
import TaskHeader from "./TaskHeader";
import TaskList from "./TaskList";
import TaskAdd from "./TaskAdd";
import Footer from "./Footer";
import {todoItems, monitorInfo} from "./mockData";
import {getProjects} from "../utils/requests";
import {useEffect, useState} from "react";

function App() {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        getProjects().then((data) => {
            setProjects(data)
        })
    }, [])
    return (
        <body className="container">
        <NavBar/>
        <div className="body-container">
            <ProjectList projects={projects} totalCount={projects.length}/>
            <section className="main">
                <TaskHeader name={"全部"} success={1} total={555}/>
                <TaskList tasks={todoItems}/>
                <TaskAdd/>
            </section>
        </div>
        <Footer {...monitorInfo}/>
        </body>
    );
}

export default App;
