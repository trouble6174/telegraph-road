import Task from "./Task";

export default function TaskList({tasks}) {
    return (
        <div className="tasks">
            {tasks.map(task => {
                return <Task id={`todo-task-${task.id}`} content={task.content}/>
            })}
        </div>
    )
}