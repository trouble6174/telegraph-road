import '../css/main.css'
import NavBar from "./NavBar";
import ProjectList from "./ProjectList";
import TaskHeader from "./TaskHeader";
import TaskList from "./TaskList";
import TaskAdd from "./TaskAdd";
import Footer from "./Footer";
import {todoItems, projects, monitorInfo} from "./mockData";

function App() {
    return (
        <body className="container">
        <NavBar/>
        <div className="body-container">
            <ProjectList projects={projects} totalCount={projects.map(p => p.count).reduce((x, y) => x + y)}/>
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
