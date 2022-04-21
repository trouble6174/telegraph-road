export default function Task(props) {
    const {id, content} = props
    return (
        <div className="task">
            <input type="checkbox" id={id}/>
            <label htmlFor={id}>
                <span className="task-checkbox"/>
                {content}
            </label>
        </div>
    )
}
