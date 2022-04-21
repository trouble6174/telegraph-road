export default function NavBar() {
    return (
        <nav className="nav">
            <div className="nav title">LC's TODO</div>
            <div className="nav menu">
                <label className="input nav-search" htmlFor="nav-search">
                    <input id="nav-search" placeholder="search"/>
                </label>
                <button className="btn backup">备份</button>
                <button className="btn export">导出</button>
            </div>
        </nav>
    )
}