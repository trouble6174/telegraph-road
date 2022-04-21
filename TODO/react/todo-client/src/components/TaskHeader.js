export default function TaskHeader({name, success, total}) {
    return (
        <div className="main-title">
            <span className="main-title-header">{name}</span>
            <span className="main-title-desc">{success}/{total} done</span>
        </div>
    )
}