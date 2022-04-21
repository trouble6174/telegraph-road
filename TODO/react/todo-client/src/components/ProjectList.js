import Project from "./Project";
import ProjectAdd from "./ProjectAdd";

export default function ProjectList({projects, totalCount}) {
    return (
        <aside className="left project">
            <span>全部({totalCount})</span>
            {projects.map(project => {
                    return (<Project {...project}/>)
                }
            )}
            <ProjectAdd/>
        </aside>
    )
}